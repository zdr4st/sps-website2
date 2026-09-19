import { createClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// ─── Cookie-based auth session key ────────────────────────────────────────────
const AUTH_COOKIE_NAME = 'sps_admin_session';

/**
 * Hash a password using Web Crypto API (SHA-256).
 * Used for comparing against stored hash without needing bcrypt.
 */
async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password + supabaseServiceKey.slice(0, 16)); // salt with part of service key
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

/**
 * Verify admin credentials.
 * Uses Supabase Auth if available, otherwise falls back to hashed env password.
 */
export async function verifyAdmin(email: string, password: string): Promise<{
  success: boolean;
  token?: string;
  error?: string;
}> {
  try {
    // Try Supabase Auth first
    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (!error && data.session) {
      return {
        success: true,
        token: data.session.access_token,
      };
    }

    // If Supabase Auth fails, return error
    return {
      success: false,
      error: error?.message || 'Email atau password salah.',
    };
  } catch (err) {
    console.error('verifyAdmin error:', err);
    return {
      success: false,
      error: 'Terjadi kesalahan saat login.',
    };
  }
}

/**
 * Verify an existing session token.
 * Returns true if the token is a valid Supabase JWT.
 */
export async function verifySession(token: string): Promise<boolean> {
  try {
    // Verify via Supabase — getUser validates the JWT
    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    const { data, error } = await supabase.auth.getUser(token);

    if (!error && data.user) {
      // Optionally check if user email matches admin
      const adminEmail = process.env.ADMIN_EMAIL;
      if (adminEmail && data.user.email !== adminEmail) {
        return false;
      }
      return true;
    }

    return false;
  } catch {
    return false;
  }
}

/**
 * Get the current session token from cookies.
 */
export async function getSessionToken(): Promise<string | null> {
  const cookieStore = await cookies();
  return cookieStore.get(AUTH_COOKIE_NAME)?.value || null;
}

/**
 * Set the session cookie.
 */
export async function setSessionCookie(token: string): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(AUTH_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/',
  });
}

/**
 * Clear the session cookie.
 */
export async function clearSessionCookie(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(AUTH_COOKIE_NAME);
}

export { AUTH_COOKIE_NAME };
