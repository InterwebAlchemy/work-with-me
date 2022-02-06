import type { PostgrestResponse } from '@supabase/supabase-js'

import { supabase } from '../../adapters/supabase'

import type { definitions } from '../../types/supabase'

export const getPersonalityTypes = async (): Promise<
  PostgrestResponse<definitions['personality_types']>
> => {
  return supabase
    .from<definitions['personality_types']>('personality_types')
    .select()
    .eq('is_archived', false)
    .order('id')
}

export const getPersonalityColors = async (): Promise<
  PostgrestResponse<definitions['personality_colors']>
> => {
  return supabase
    .from<definitions['personality_colors']>('personality_colors')
    .select()
    .eq('is_archived', false)
    .order('id')
}

export const getEnneagramTypes = async (): Promise<
  PostgrestResponse<definitions['enneagram_types']>
> => {
  return supabase
    .from<definitions['enneagram_types']>('enneagram_types')
    .select()
    .eq('is_archived', false)
    .order('number')
}
