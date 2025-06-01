import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cvohznkprtcgdnckdoyg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2b2h6bmtwcnRjZ2RuY2tkb3lnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg3OTI0ODEsImV4cCI6MjA2NDM2ODQ4MX0.LGwd3eQRXtYWTE_8vDPo5WeTLu6FpXXxJSS1X8E2k2A";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
