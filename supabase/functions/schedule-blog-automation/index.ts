import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    
    console.log('Blog automation scheduler triggered at:', new Date().toISOString());

    // Check if we should generate a blog post today
    const shouldGenerate = await determineBlogGenerationSchedule(supabase);
    
    if (!shouldGenerate.generate) {
      console.log('Skipping blog generation:', shouldGenerate.reason);
      return new Response(JSON.stringify({
        success: true,
        action: 'skipped',
        reason: shouldGenerate.reason,
        nextGeneration: shouldGenerate.nextGeneration
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Trigger the automated blog publisher
    console.log('Triggering automated blog generation...');
    
    const blogResponse = await fetch(`${supabaseUrl}/functions/v1/automated-blog-publisher`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${supabaseServiceKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ automated: true })
    });

    const blogResult = await blogResponse.json();

    if (blogResult.success) {
      // Update automation stats
      await updateAutomationStats(supabase, blogResult);
      
      console.log('Automated blog generation completed successfully');
      
      return new Response(JSON.stringify({
        success: true,
        action: 'generated',
        blogPost: blogResult.blogPost,
        published: blogResult.published,
        topic: blogResult.topic,
        stats: blogResult.analytics
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    } else {
      throw new Error(`Blog generation failed: ${blogResult.error}`);
    }

  } catch (error) {
    console.error('Error in blog automation scheduler:', error);
    
    return new Response(JSON.stringify({ 
      success: false,
      error: error.message,
      timestamp: new Date().toISOString()
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});

async function determineBlogGenerationSchedule(supabase: any) {
  const now = new Date();
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const todayEnd = new Date(todayStart.getTime() + 24 * 60 * 60 * 1000);
  const dayOfWeek = now.getDay(); // 0 = Sunday, 1 = Monday, 3 = Wednesday, 5 = Friday

  // STRICT M/W/F SCHEDULE: Only generate on Monday, Wednesday, Friday
  const targetDays = [1, 3, 5]; // Monday, Wednesday, Friday
  
  if (!targetDays.includes(dayOfWeek)) {
    return {
      generate: false,
      reason: 'Not a scheduled posting day (only Monday, Wednesday, Friday)',
      nextGeneration: getNextTargetDay(now, targetDays).toISOString()
    };
  }

  // Check if we already generated a post today
  const { data: todayPosts } = await supabase
    .from('blog_posts')
    .select('id, created_at, title')
    .gte('created_at', todayStart.toISOString())
    .lt('created_at', todayEnd.toISOString());

  if (todayPosts && todayPosts.length > 0) {
    return {
      generate: false,
      reason: 'Blog post already generated today',
      nextGeneration: getNextTargetDay(now, targetDays).toISOString()
    };
  }

  // It's M/W/F and no post today - GENERATE!
  return { 
    generate: true, 
    reason: 'Scheduled posting day - Monday, Wednesday, or Friday at 9am UTC' 
  };
}

async function updateAutomationStats(supabase: any, blogResult: any) {
  const stats = {
    post_id: blogResult.blogPost.id,
    topic: blogResult.topic,
    published: blogResult.published,
    word_count: blogResult.analytics?.wordCount || 0,
    reading_time: blogResult.analytics?.readingTime || 0,
    content_type: blogResult.analytics?.contentType || 'unknown',
    tone: blogResult.analytics?.tone || 'unknown',
    generated_at: new Date().toISOString()
  };

  await supabase
    .from('audit_logs')
    .insert({
      user_id: null,
      action: 'BLOG_AUTOMATION_STATS',
      table_name: 'blog_posts',
      record_id: blogResult.blogPost.id,
      new_values: stats
    });
}

function getNextMonday(date: Date): Date {
  const nextMonday = new Date(date);
  nextMonday.setDate(date.getDate() + ((1 + 7 - date.getDay()) % 7 || 7));
  nextMonday.setHours(10, 0, 0, 0); // 10 AM posting time
  return nextMonday;
}

function getNextTargetDay(date: Date, targetDays: number[]): Date {
  let nextDate = new Date(date);
  nextDate.setDate(date.getDate() + 1);
  
  // Find next Monday, Wednesday, or Friday
  while (!targetDays.includes(nextDate.getDay())) {
    nextDate.setDate(nextDate.getDate() + 1);
  }
  
  nextDate.setHours(9, 0, 0, 0); // 9 AM UTC posting time
  return nextDate;
}