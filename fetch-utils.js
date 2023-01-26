const SUPABASE_URL = 'https://xdcizxdidpizfiibmgtv.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkY2l6eGRpZHBpemZpaWJtZ3R2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQyNTc4NzYsImV4cCI6MTk4OTgzMzg3Nn0.1AGjiVrmIV6AJNyKnEOyeRjAP87L4_WcL4ZIjmI2sIY';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getPosts() {
    const { data } = await client.from('posts').select('*');
    return data;
}
