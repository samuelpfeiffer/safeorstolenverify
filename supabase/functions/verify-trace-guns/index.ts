import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

Deno.serve(async (req) => {
  const { serial } = await req.json();
  const clean = String(serial || "").trim().toUpperCase();
  if (!clean) return new Response(JSON.stringify({ error: "serial required" }), { status: 400 });

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  const { data, error } = await supabase
    .from("trace_gun_records")
    .select("serial,make,model,caliber,state,agency,status,offense,record_date,case_number")
    .eq("serial", clean)
    .limit(5);

  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });

  return new Response(JSON.stringify({
    source: "Police theft and loss reports (NCIC gun codes)",
    related_to: "NCIC gun file codes",
    searched: true,
    matches: data ?? [],
    result: (data && data.length) ? "reported" : "no_report_found",
  }), { headers: { "content-type": "application/json" } });
});
