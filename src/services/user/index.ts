import type { PostgrestSingleResponse, PostgrestResponse } from '@supabase/supabase-js'

import { supabase } from '../../adapters/supabase'
import type { definitions } from '../../types/supabase'
import type { FullUserProfile } from '../../types/user'

export const logOut = async () => {
  const { error } = await supabase.auth.signOut()

  if (error) {
    console.error('Error logging out:', error.message)
  }
}

export const logIn = async () => {
  const { error } = await supabase.auth.signIn(
    { provider: 'github' },
    { redirectTo: `${process.env.NEXT_PUBLIC_APPLICATION_URL}/profile` }
  )

  if (error) {
    console.error('Error logging in:', error.message)
  }
}

export const getUserProfile = async (): Promise<
  PostgrestSingleResponse<definitions['profiles']>
> => {
  return supabase
    .from<definitions['profiles']>('profiles')
    .select(
      `username, avatar_url, website, communication_style, personality_type_id, personality_color_id, enneagram_type_id`
    )
    .single()
}

export const getFullUserProfile = async (
  username?: string
): Promise<PostgrestSingleResponse<FullUserProfile> | null> => {
  if (username) {
    return supabase
      .from<FullUserProfile>('profiles')
      .select(
        `username, avatar_url, website, communication_style, personality:personality_type_id(type, name, description, url), color:personality_color_id(name, description, url), enneagram:enneagram_type_id(name, number, description, url)`
      )
      .match({ username })
      .single()
  }

  return null
}

export const updateUserProfile = async (
  userId: definitions['profiles']['id'],
  profile: Partial<definitions['profiles']>
): Promise<PostgrestResponse<unknown>> => {
  if (typeof userId === 'undefined' || userId === null || userId === '') {
    throw new Error('Must provide a valid userId String.')
  }

  return supabase.from<definitions['profiles']>('profiles').update(profile).match({ id: userId })
}

export const deleteUserProfile = async (): Promise<unknown> => {
  return supabase.from<definitions['profiles']>('profiles').delete()
}

export const getFeaturedProfiles = async (): Promise<
  PostgrestResponse<Pick<definitions['profiles'], 'username'>>
> => {
  return supabase.rpc('featured_users', { user_count: 5 })
}
