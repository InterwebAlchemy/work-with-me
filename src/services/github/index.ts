import fetch from 'cross-fetch'

import type { Endpoints } from '@octokit/types'

import type { definitions } from '../../types/supabase'

import { GITHUB_API_URL } from '../../constants'

export const gitHubUserDetails = async (
  username: definitions['profiles']['username']
): Promise<Endpoints['GET /users/{username}']['response']['data']> => {
  return fetch(new URL(`/users/${username}`, GITHUB_API_URL).toString(), {
    headers: {
      Accept: 'application/vnd.github.v3+json',
    },
  })
    .then(async (response) => response.json())
    .catch((e) => {
      console.error(e)
    })
}
