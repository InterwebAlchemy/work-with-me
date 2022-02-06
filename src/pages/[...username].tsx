import { Heading, Text, Link, Box, Stack, Divider } from '@chakra-ui/react'

import type { GetServerSidePropsResult, GetServerSidePropsContext } from 'next'
import type { ParsedUrlQuery } from 'querystring'

import Page from '../components/Page'
import ProfileCard from '../components/ProfileCard'
import { getFullUserProfile } from '../services/user'

import type { definitions } from '../types/supabase'
import type { KeysToCamelCase } from '../types/utility'
import type { FullUserProfile } from '../types/user'

export interface UserProfileRequestProps extends ParsedUrlQuery {
  username: definitions['profiles']['username']
}

export interface UserProfileProps {
  profile: KeysToCamelCase<FullUserProfile> | null
}

const UserProfile = ({ profile }: UserProfileProps): React.ReactElement => {
  return (
    <Page>
      <ProfileCard profile={profile} />
      {(profile?.personality.type || profile?.enneagram.number || profile?.color.name) && (
        <Box marginBottom="20px">
          <Heading as="h2" size="md" marginBottom="5px">
            Psychometric Descriptions
          </Heading>
          <Text>Here's a little more about {profile?.username}.</Text>
        </Box>
      )}
      {profile?.personality?.type && (
        <Box id="personality-type" marginBottom="40px">
          <Heading as="h3" size="sm" marginBottom="5px">
            Type: {profile?.personality.name} ({profile?.personality.type})
          </Heading>
          <Text marginBottom="10px">{profile?.personality.description}</Text>
          <Link href={profile?.personality.url} isExternal>
            Learn more about the {profile?.personality.type} personality type and the{' '}
            {profile?.personality.name} archetype
          </Link>
        </Box>
      )}
      {profile?.enneagram.number && (
        <Box id="enneagram-type" marginBottom="40px">
          <Heading as="h3" size="sm" marginBottom="5px">
            Enneagram: {profile?.enneagram.name} ({profile?.enneagram.number})
          </Heading>
          <Text marginBottom="10px">{profile?.enneagram.description}</Text>
          <Link href={profile?.enneagram.url} isExternal>
            Learn more about the {profile?.enneagram.number} enneagram number and the{' '}
            {profile?.enneagram.name} archetype
          </Link>
        </Box>
      )}
      {profile?.color.name && (
        <Box id="personality-color" marginBottom="40px">
          <Heading as="h3" size="sm" marginBottom="5px">
            Color: {profile?.color.name}
          </Heading>
          <Text marginBottom="10px">{profile?.color.description}</Text>
          <Link href={profile?.color.url} isExternal>
            Learn more about the {profile?.color.name} personality color
          </Link>
        </Box>
      )}
    </Page>
  )
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<KeysToCamelCase<UserProfileProps>>> => {
  const { username } = context.params as UserProfileRequestProps

  const response = await getFullUserProfile(username)

  if (response !== null) {
    const { error, data } = response

    if (error !== null && process.env.NEXT_PUBLIC_FEATURE__DEBUG_LOGS === 'ENABLED') {
      console.error(error)
    } else {
      if (data !== null) {
        const profile = {
          username: data.username,
          avatarUrl: data.avatar_url,
          website: data.website,
          communicationStyle: data.communication_style,
          enneagram: data.enneagram,
          personality: data.personality,
          color: data.color,
        }

        return {
          props: {
            profile,
          },
        }
      }
    }
  }

  return {
    props: { profile: null },
  }
}

export default UserProfile
