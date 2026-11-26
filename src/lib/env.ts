import {z} from 'zod';

const SupabaseEnvSchema = z.object({
  VITE_SUPABASE_URL: z
    .string()
    .url()
    .refine((val) => !val.includes('YOUR_PROJECT'), {
      message: 'Placeholder Supabase URL',
    }),
  VITE_SUPABASE_ANON_KEY: z
    .string()
    .min(20)
    .refine((val) => !val.includes('YOUR_SUPABASE_ANON_KEY'), {
      message: 'Placeholder Supabase anon key',
    }),
});

export type EnvConfig =
  | {configured: true; supabaseUrl: string; supabaseAnonKey: string}
  | {configured: false};

export function readEnvConfig(): EnvConfig {
  const parsed = SupabaseEnvSchema.safeParse({
    VITE_SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL,
    VITE_SUPABASE_ANON_KEY: import.meta.env.VITE_SUPABASE_ANON_KEY,
  });

  if (!parsed.success) {
    return {configured: false};
  }

  return {
    configured: true,
    supabaseUrl: parsed.data.VITE_SUPABASE_URL,
    supabaseAnonKey: parsed.data.VITE_SUPABASE_ANON_KEY,
  };
}
