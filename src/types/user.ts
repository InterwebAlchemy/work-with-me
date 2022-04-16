import type { PostgrestSingleResponse } from '@supabase/supabase-js'
import type { Endpoints } from '@octokit/types'

import type { definitions } from './supabase'

export interface FullUserProfile
  extends Pick<
    definitions['profiles'],
    'id' | 'avatar_url' | 'username' | 'website' | 'communication_style'
  > {
  personality: Pick<definitions['personality_types'], 'type' | 'name' | 'description' | 'url'>
  color: Pick<definitions['personality_colors'], 'name' | 'description' | 'url'>
  enneagram: Pick<definitions['enneagram_types'], 'name' | 'number' | 'description' | 'url'>
}

export interface FullUserProfileWithGitHub {
  profile: PostgrestSingleResponse<FullUserProfile>
  github: Endpoints['GET /users/{username}']['response']['data']
}
