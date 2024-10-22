import { createClient } from '@supabase/supabase-js'
const url = 'https://bdymnnximsnazqdlxqvt.supabase.co'
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkeW1ubnhpbXNuYXpxZGx4cXZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk0NTU3NjgsImV4cCI6MjA0NTAzMTc2OH0.eoCulY1nBCDb8cWfZkrCItX5N1cIAbBspERNP5IYHMI'
export const supabase = createClient(url, key)