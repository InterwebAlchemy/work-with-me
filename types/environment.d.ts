import type { FeatureFlag } from '../src/types/feature'

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_APPLICATION_URL: string

      NEXT_PUBLIC_SUPABASE_URL: string
      NEXT_PUBLIC_SUPABASE_ANON_KEY: string

      NEXT_FEATURE__DEBUG_LOGS?: FeatureFlag
    }
  }
}
