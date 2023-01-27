const SUPABASE_URL = 'https://xdcizxdidpizfiibmgtv.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkY2l6eGRpZHBpemZpaWJtZ3R2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQyNTc4NzYsImV4cCI6MTk4OTgzMzg3Nn0.1AGjiVrmIV6AJNyKnEOyeRjAP87L4_WcL4ZIjmI2sIY';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getPosts() {
    const { data } = await client.from('posts').select('*');
    return data;
}

export async function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function signUp(email, password) {
    const { data } = await client.auth.signUp({
        email,
        password,
    });
    return data;
}

export async function signIn(email, password) {
    const { data } = await client.auth.signInWithPassword({
        email,
        password,
    });
    return data;
}

export async function checkAuth() {
    const user = await getUser();
    if (!user) location.replace('/auth');
}

export async function signOut() {
    const response = await client.auth.signOut();

    return response.error;
}
