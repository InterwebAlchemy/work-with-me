import { useState, useEffect, createContext } from 'react'
import { Auth } from '@supabase/ui'

import {
  getUserProfile,
  updateUserProfile,
  deleteUserProfile,
  logIn,
  logOut,
} from '../services/user'
import {
  getPersonalityTypes,
  getPersonalityColors,
  getEnneagramTypes,
} from '../services/psychometrics'
import { gitHubUserDetails } from '../services/github'

import type { definitions } from '../types/supabase'
import type { KeysToCamelCase } from '../types/utility'

export interface UserProfileContextProvider extends KeysToCamelCase<definitions['profiles']> {
  personalityTypes: Array<definitions['personality_types']>
  personalityColors: Array<definitions['personality_colors']>
  enneagramTypes: Array<definitions['enneagram_types']>
  setWebsite: React.Dispatch<React.SetStateAction<string | undefined>>
  setCommunicationStyle: React.Dispatch<React.SetStateAction<string | undefined>>
  setEnneagramTypeId: React.Dispatch<React.SetStateAction<number | undefined>>
  setPersonalityTypeId: React.Dispatch<React.SetStateAction<number | undefined>>
  setPersonalityColorId: React.Dispatch<React.SetStateAction<number | undefined>>
  updateProfile: () => Promise<void>
  deleteProfile: () => Promise<void>
  logIn: () => Promise<void>
  logOut: () => Promise<void>
}

export const UserProfileContext = createContext<UserProfileContextProvider>({
  id: '',
  username: '',
  avatarUrl: '',
  website: '',
  communicationStyle: '',
  enneagramTypeId: 0,
  personalityTypeId: 0,
  personalityColorId: 0,
  personalityTypes: [],
  personalityColors: [],
  enneagramTypes: [],
  /* eslint-disable @typescript-eslint/no-empty-function */
  setWebsite: () => {},
  setCommunicationStyle: () => {},
  setEnneagramTypeId: () => {},
  setPersonalityTypeId: () => {},
  setPersonalityColorId: () => {},
  updateProfile: async () => {},
  deleteProfile: async () => {},
  logIn: async () => {},
  logOut: async () => {},
  /* eslint-enable @typescript-eslint/no-empty-function */
})

export const UserProfileProvider = ({
  children,
}: React.PropsWithChildren<unknown>): React.ReactElement => {
  const { user } = Auth.useUser()

  const [id, setId] = useState<UserProfileContextProvider['id']>('')
  const [username, setUsername] = useState<UserProfileContextProvider['username']>('')
  const [avatarUrl, setAvatarUrl] = useState<UserProfileContextProvider['avatarUrl']>('')
  const [website, setWebsite] = useState<UserProfileContextProvider['website']>('')
  const [communicationStyle, setCommunicationStyle] =
    useState<UserProfileContextProvider['communicationStyle']>('')
  const [enneagramTypeId, setEnneagramTypeId] =
    useState<UserProfileContextProvider['enneagramTypeId']>(0)
  const [personalityTypeId, setPersonalityTypeId] =
    useState<UserProfileContextProvider['personalityTypeId']>(0)
  const [personalityColorId, setPersonalityColorId] =
    useState<UserProfileContextProvider['personalityColorId']>(0)

  const [personalityTypes, setPersonalityTypes] = useState<Array<definitions['personality_types']>>(
    []
  )
  const [personalityColors, setPersonalityColors] = useState<
    Array<definitions['personality_colors']>
  >([])
  const [enneagramTypes, setEnneagramTypes] = useState<Array<definitions['enneagram_types']>>([])

  const updateProfile = async (): Promise<void> => {
    updateUserProfile(id, {
      website,
      communication_style: communicationStyle,
      enneagram_type_id: enneagramTypeId,
      personality_color_id: personalityColorId,
      personality_type_id: personalityTypeId,
    }).catch((e) => {
      if (process.env.NEXT_PUBLIC_FEATURE__DEBUG_LOGS === 'ENABLED') {
        console.error(e)
      }
    })
  }

  const deleteProfile = async (): Promise<void> => {
    await deleteUserProfile(id).catch((e) => {
      if (process.env.NEXT_PUBLIC_FEATURE__DEBUG_LOGS === 'ENABLED') {
        console.error(e)
      }
    })

    await logOut()
  }

  // get user profile for editing when user authenticates
  useEffect(() => {
    // get psychometric options on mount
    Promise.all([getPersonalityTypes(), getPersonalityColors(), getEnneagramTypes()])
      .then(([personalityTypes, personalityColors, enneagramTypes]) => {
        if (personalityTypes?.data !== null) {
          setPersonalityTypes(personalityTypes.data)
        }

        if (personalityColors?.data !== null) {
          setPersonalityColors(personalityColors.data)
        }

        if (enneagramTypes?.data !== null) {
          setEnneagramTypes(enneagramTypes.data)
        }
      })
      .catch((e) => {
        if (process.env.NEXT_PUBLIC_FEATURE__DEBUG_LOGS === 'ENABLED') {
          console.error(e)
        }
      })

    const getProfile = async (): Promise<void> => {
      try {
        if (user !== null && typeof user?.identities !== 'undefined') {
          const { error, data } = await getUserProfile(user.id)

          if (error !== null && process.env.NEXT_PUBLIC_FEATURE__DEBUG_LOGS === 'ENABLED') {
            console.error(error)
          } else {
            if (data !== null) {
              setUsername(data.username ?? '')
              setWebsite(data.website)
              setCommunicationStyle(data.communication_style)
              setEnneagramTypeId(data.enneagram_type_id)
              setPersonalityTypeId(data.personality_type_id)
              setPersonalityColorId(data.personality_color_id)
            }
          }
        }
      } catch (e) {
        if (process.env.NEXT_PUBLIC_FEATURE__DEBUG_LOGS === 'ENABLED') {
          console.error(e)
        }
      }
    }

    if (user !== null && typeof user?.identities !== 'undefined') {
      getProfile().catch((e) => {
        if (process.env.NEXT_PUBLIC_FEATURE__DEBUG_LOGS === 'ENABLED') {
          console.error(e)
        }
      })
    }

    if (typeof user?.id !== 'undefined') {
      setId(user.id)
    }
  }, [user])

  useEffect(() => {
    if (typeof username !== 'undefined' && username !== null) {
      gitHubUserDetails(username)
        .then((gitHubProfile) => {
          const { avatar_url: avatarUrl } = gitHubProfile

          // TODO: This fails typescript checking locally, but the //@ts-exepct-error causes the remote build to fail
          setAvatarUrl(avatarUrl)
        })
        .catch((e) => {
          console.error(e)
        })
    }
  }, [username])

  return (
    <UserProfileContext.Provider
      value={{
        id,
        username,
        avatarUrl,
        website,
        communicationStyle,
        enneagramTypeId,
        personalityColorId,
        personalityTypeId,
        updateProfile,
        deleteProfile,
        personalityTypes,
        personalityColors,
        enneagramTypes,
        setWebsite,
        setCommunicationStyle,
        setEnneagramTypeId,
        setPersonalityTypeId,
        setPersonalityColorId,
        logIn,
        logOut,
      }}
    >
      {children}
    </UserProfileContext.Provider>
  )
}
