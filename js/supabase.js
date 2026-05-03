const SUPABASE_URL =
"https://rryafnqhfrrjglfxlwqw.supabase.co"

const SUPABASE_KEY =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJyeWFmbnFoZnJyamdsZnhsd3F3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc3MzczNjcsImV4cCI6MjA5MzMxMzM2N30._eyInLCofs4HjMCvtgYGT_r6-Ujjhyq1AUyGb1PRzzc"

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
)