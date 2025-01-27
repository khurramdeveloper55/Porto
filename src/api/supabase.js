import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wfyknndhxlwifqwbxmmg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndmeWtubmRoeGx3aWZxd2J4bW1nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY1MzAwMDMsImV4cCI6MjA1MjEwNjAwM30.G-uv73G8jBHu0vIGqyNJAjF1gYQqrl8C1MZ-_GZWoNs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
