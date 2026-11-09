import { createClient } from "https://esm.sh/@supabase/supabase-js@2.7.1";
import { getCorsHeaders } from "../_shared/cors.ts";
import { createGscHandler } from "./handler.ts";

Deno.serve(
  createGscHandler({
    createClient,
    env: (name) => Deno.env.get(name),
    cors: getCorsHeaders,
  }),
);
