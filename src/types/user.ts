import { definitions } from './supabase'

export interface FullUserProfile
  extends Pick<definitions['profiles'], 'id' | 'username' | 'website' | 'communication_style'> {
  personality: Pick<definitions['personality_types'], 'type' | 'name' | 'description' | 'url'>
  color: Pick<definitions['personality_colors'], 'name' | 'description' | 'url'>
  enneagram: Pick<definitions['enneagram_types'], 'name' | 'number' | 'description' | 'url'>
  avatarUrl?: string
}
