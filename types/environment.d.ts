import type { FeatureFlag } from '../src/types/feature'

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_APPLICATION_URL: string
      NEXT_PUBLIC_VERCEL_URL: string
      NEXT_PUBLIC_VERCEL_ENV: string

      NEXT_PUBLIC_SUPABASE_URL: string
      NEXT_PUBLIC_SUPABASE_ANON_KEY: string

      NEXT_PUBLIC_PSYCHOMETRIC_REQUEST_URL?: string

      NEXT_PUBLIC_FEATURE__DEBUG_LOGS?: FeatureFlag
    }
  }
}
