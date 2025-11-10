import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    console.log('Starting blog slug cleanup...');

    // Get all blog posts with timestamps in slugs
    const { data: posts, error: fetchError } = await supabase
      .from('blog_posts')
      .select('*')
      .like('slug', '%-%-%-%');

    if (fetchError) {
      console.error('Error fetching blog posts:', fetchError);
      throw fetchError;
    }

    if (!posts || posts.length === 0) {
      return new Response(
        JSON.stringify({ message: 'No blog posts with timestamp slugs found' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
      );
    }

    console.log(`Found ${posts.length} blog posts with timestamp slugs`);

    const updates = [];
    const errors = [];

    for (const post of posts) {
      try {
        // Remove timestamp from slug (everything after the last hyphen followed by numbers)
        const cleanSlug = post.slug.replace(/-\d+\.\d+$/, '');
        
        console.log(`Updating slug: ${post.slug} -> ${cleanSlug}`);

        const { error: updateError } = await supabase
          .from('blog_posts')
          .update({ slug: cleanSlug })
          .eq('id', post.id);

        if (updateError) {
          console.error(`Error updating post ${post.id}:`, updateError);
          errors.push({ id: post.id, slug: post.slug, error: updateError.message });
        } else {
          updates.push({ id: post.id, oldSlug: post.slug, newSlug: cleanSlug });
        }
      } catch (error) {
        console.error(`Error processing post ${post.id}:`, error);
        errors.push({ id: post.id, slug: post.slug, error: error.message });
      }
    }

    console.log(`Cleanup complete. Updated: ${updates.length}, Errors: ${errors.length}`);

    return new Response(
      JSON.stringify({
        success: true,
        message: `Updated ${updates.length} blog post slugs`,
        updated: updates,
        errors: errors.length > 0 ? errors : undefined
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
    );

  } catch (error) {
    console.error('Error in fix-blog-slugs:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    );
  }
});
