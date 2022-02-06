import { Box, Stack, Link, Text, Heading } from '@chakra-ui/react'

import UserAvatar from '../UserAvatar'
import PsychometricTag from '../PsychometricTag'
import InternalLink from '../InternalLink'
import { GITHUB_PROFILE_BASE_URL } from '../../constants'

import type { UserProfileProps } from '../../pages/[...username]'

export interface ProfileCardProps extends UserProfileProps {
  layout?: 'simple' | 'full'
  linkToProfile?: boolean
}

const ProfileCard = ({
  profile,
  layout = 'full',
  linkToProfile = false,
}: ProfileCardProps): React.ReactElement => {
  const profileUrl = new URL(profile?.username ?? '', process.env.NEXT_PUBLIC_APPLICATION_URL)
  const githubProfileUrl = new URL(profile?.username ?? '', GITHUB_PROFILE_BASE_URL)

  const CardHeader = (): React.ReactElement => {
    if (layout === 'simple') {
      return (
        <InternalLink href={profileUrl}>
          <Heading as="h3" size="sm">
            {profile?.username}
          </Heading>
        </InternalLink>
      )
    }

    return (
      <Heading as="h1" size="sm">
        Working w/ {profile?.username}
      </Heading>
    )
  }

  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      paddingRight="10px"
      paddingTop={layout === 'full' ? '20px' : '10px'}
      paddingBottom="10px"
      paddingLeft={layout === 'full' ? '20px' : '10px'}
      marginBottom={layout === 'full' ? '60px' : '20px'}
    >
      <Stack direction="column">
        <Stack direction="row" align="center">
          {linkToProfile ? (
            <InternalLink
              href={profileUrl.toString()}
              aria-label={`View ${profile?.username} on Work with Me`}
              // @ts-expect-error
              chakraLinkProps={{ marginRight: '10px' }}
              title={'Work w/ Me Profile'}
            >
              <UserAvatar size={layout === 'full' ? 'xl' : 'md'} />
            </InternalLink>
          ) : (
            <Link
              href={linkToProfile ? profileUrl.toString() : githubProfileUrl.toString()}
              isExternal
              aria-label={`View ${profile?.username} on GitHub`}
              marginRight="10px"
              title="GitHub Profile"
            >
              <UserAvatar size={layout === 'full' ? 'xl' : 'md'} />
            </Link>
          )}
          {layout === 'full' ? (
            <Stack direction="column" paddingRight="10px">
              <Text>
                <CardHeader />
                <Link href={profile?.website} isExternal>
                  {profile?.website}
                </Link>
                <Text>{profile?.communicationStyle}</Text>
              </Text>
            </Stack>
          ) : (
            <Stack direction="column">
              <Text>
                <CardHeader />
              </Text>
              <Stack direction="row" flexWrap="wrap">
                {profile?.personality?.type && (
                  <Link href={profile.personality.url} isExternal>
                    <PsychometricTag>
                      {profile?.personality.type} | {profile?.personality.name}
                    </PsychometricTag>
                  </Link>
                )}
                {profile?.enneagram?.number && (
                  <Link href={profile.enneagram.url} isExternal>
                    <PsychometricTag>
                      {profile?.enneagram.number} | {profile?.enneagram.name}
                    </PsychometricTag>
                  </Link>
                )}
                {profile?.color?.name && (
                  <Link href={profile.color.url} isExternal>
                    <PsychometricTag>{profile?.color.name}</PsychometricTag>
                  </Link>
                )}
              </Stack>
            </Stack>
          )}
        </Stack>
        {layout === 'full' && (
          <Stack direction="row" marginTop="20px !important" justifyContent="end" flexWrap="wrap">
            {profile?.personality?.type && (
              <Link href="#personality-type">
                <PsychometricTag>
                  {profile?.personality.type} | {profile?.personality.name}
                </PsychometricTag>
              </Link>
            )}
            {profile?.enneagram?.number && (
              <Link href="#enneagram-type">
                <PsychometricTag>
                  {profile?.enneagram.number} | {profile?.enneagram.name}
                </PsychometricTag>
              </Link>
            )}
            {profile?.color?.name && (
              <Link href="#personality-color">
                <PsychometricTag>{profile?.color.name}</PsychometricTag>
              </Link>
            )}
          </Stack>
        )}
      </Stack>
    </Box>
  )
}

export default ProfileCard
