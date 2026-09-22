/** Public Supabase client config for OCHE salon share (anon key is safe in frontend). */
export const SHARE = {
  supabaseUrl: "https://xfleftmspxxqfmhtvaan.supabase.co",
  supabaseAnonKey:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhmbGVmdG1zcHh4cWZtaHR2YWFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAwODA0MDEsImV4cCI6MjEwNTY1NjQwMX0.9UTNzhgK4Vzqs1h9I4vuo1k2eT83mjadon8cfS4NJ78",
};

export function isShareConfigured() {
  return Boolean(SHARE.supabaseUrl && SHARE.supabaseAnonKey);
}
