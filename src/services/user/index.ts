import type { PostgrestSingleResponse, PostgrestResponse } from '@supabase/supabase-js'

import { supabase } from '../../adapters/supabase'
import { APPLICATION_URL } from '../../constants'
import type { definitions } from '../../types/supabase'
import type { FullUserProfile } from '../../types/user'

export const logOut = async (): Promise<void> => {
  const { error } = await supabase.auth.signOut()

  if (error != null && process.env.NEXT_PUBLIC_FEATURE__DEBUG_LOGS === 'ENABLED') {
    console.error('Error logging out:', error.message)
  } else {
    window.location.href = '/'
  }
}

export const logIn = async (): Promise<void> => {
  const { error } = await supabase.auth.signIn(
    { provider: 'github' },
    { redirectTo: `${APPLICATION_URL}/profile` }
  )

  if (error != null && process.env.NEXT_PUBLIC_FEATURE__DEBUG_LOGS === 'ENABLED') {
    console.error('Error logging in:', error.message)
  }
}

export const getUserProfile = async (
  userId: definitions['profiles']['id']
): Promise<PostgrestSingleResponse<definitions['profiles']>> => {
  return supabase
    .from<definitions['profiles']>('profiles')
    .select(
      `username, website, avatar_url, communication_style, personality_type_id, personality_color_id, enneagram_type_id`
    )
    .match({ id: userId })
    .single()
}

export const getFullUserProfile = async (
  username?: string
): Promise<PostgrestSingleResponse<FullUserProfile> | null> => {
  if (typeof username !== 'undefined') {
    return supabase
      .from<FullUserProfile>('profiles')
      .select(
        `id, username, website, avatar_url, communication_style, personality:personality_type_id(type, name, description, url), color:personality_color_id(name, description, url), enneagram:enneagram_type_id(name, number, description, url)`
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

export const deleteUserProfile = async (userId: definitions['profiles']['id']): Promise<void> => {
  try {
    await fetch('/api/user/delete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId }),
    })

    await supabase.storage.from('avatars').remove([`public/${userId}.png`])
  } catch (e) {
    if (process.env.NEXT_PUBLIC_FEATURE__DEBUG_LOGS === 'ENABLED') {
      console.error(e)
    }
  }
}

export const getFeaturedProfiles = async (): Promise<
  PostgrestResponse<Pick<definitions['profiles'], 'username'>>
> => {
  return supabase.rpc('featured_users', { user_count: 5 })
}
