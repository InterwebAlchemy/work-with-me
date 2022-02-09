import { Heading, Text, Box } from '@chakra-ui/react'

import type { GetServerSidePropsResult, GetServerSidePropsContext } from 'next'
import type { ParsedUrlQuery } from 'querystring'

import Page from '../components/Page'
import ProfileCard from '../components/ProfileCard'
import ExternalLink from '../components/ExternalLink'
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
    <Page
      title={profile?.username}
      description={`Pychometric Profile for ${profile?.username ?? 'user'}.`}
    >
      <ProfileCard profile={profile} />
      {(typeof profile?.personality?.type !== 'undefined' ||
        typeof profile?.enneagram?.number !== 'undefined' ||
        typeof profile?.color?.name !== 'undefined') && (
        <Box marginBottom="20px">
          <Heading as="h2" size="md" marginBottom="5px">
            Psychometric Descriptions
          </Heading>
          <Text>Here is a little more about {profile?.username}.</Text>
        </Box>
      )}
      {typeof profile?.personality?.type !== 'undefined' && (
        <Box id="personality-type" marginBottom="40px">
          <Heading as="h3" size="sm" marginBottom="5px">
            Type: {profile.personality.name} ({profile.personality.type})
          </Heading>
          <Text marginBottom="10px">{profile?.personality.description}</Text>
          <Text>
            Learn more about the{' '}
            <ExternalLink href={profile?.personality.url}>{profile.personality.type}</ExternalLink>{' '}
            personality type and the{' '}
            <ExternalLink href={profile?.personality.url}>{profile?.personality.name}</ExternalLink>{' '}
            archetype
          </Text>
        </Box>
      )}
      {typeof profile?.enneagram?.number !== 'undefined' && (
        <Box id="enneagram-type" marginBottom="40px">
          <Heading as="h3" size="sm" marginBottom="5px">
            Enneagram: {profile?.enneagram.name} ({profile?.enneagram.number})
          </Heading>
          <Text marginBottom="10px">{profile?.enneagram.description}</Text>
          <Text>
            Learn more about the{' '}
            <ExternalLink href={profile?.enneagram.url}>
              {profile.enneagram.number} Enneagram Number
            </ExternalLink>{' '}
            and the{' '}
            <ExternalLink href={profile?.enneagram.url}>{profile?.enneagram.name}</ExternalLink>{' '}
            archetype
          </Text>
        </Box>
      )}
      {typeof profile?.color?.name !== 'undefined' && (
        <Box id="personality-color" marginBottom="40px">
          <Heading as="h3" size="sm" marginBottom="5px">
            Color: {profile?.color.name}
          </Heading>
          <Text marginBottom="10px">{profile?.color.description}</Text>
          <Text>
            Learn more about the{' '}
            <ExternalLink href={profile?.color.url}>
              {profile.color.name} personality color
            </ExternalLink>
          </Text>
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
          id: data.id,
          username: data.username,
          website: data.website,
          communicationStyle: data.communication_style,
          enneagram: data.enneagram,
          personality: data.personality,
          color: data.color,
          avatarUrl: data.avatar_url,
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
