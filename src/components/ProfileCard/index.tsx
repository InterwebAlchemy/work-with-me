import { Box, Stack, Link, Text, Heading } from '@chakra-ui/react'

import UserAvatar from '../UserAvatar'
import PsychometricTag from '../PsychometricTag'
import InternalLink from '../InternalLink'
import ExternalLink from '../ExternalLink'
import { GITHUB_PROFILE_BASE_URL, APPLICATION_URL } from '../../constants'

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
  const profileUrl = new URL(profile?.username ?? '', APPLICATION_URL)
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
              aria-label={`View ${profile?.username ?? 'Profile'} on Work with Me`}
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              chakraLinkProps={{ marginRight: '10px' }}
              title={'Work w/ Me Profile'}
            >
              <UserAvatar
                size={layout === 'full' ? 'xl' : 'md'}
                name={profile?.username}
                src={profile?.avatarurl}
              />
            </InternalLink>
          ) : (
            <Link
              href={linkToProfile ? profileUrl.toString() : githubProfileUrl.toString()}
              isExternal
              aria-label={`View ${profile?.username ?? 'Profile'} on GitHub`}
              marginRight="10px"
              title="GitHub Profile"
            >
              <UserAvatar
                size={layout === 'full' ? 'xl' : 'md'}
                name={profile?.username}
                src={profile?.avatarurl}
              />
            </Link>
          )}
          {layout === 'full' ? (
            <Stack direction="column" paddingRight="10px">
              <Text>
                <CardHeader />
                <ExternalLink href={profile?.website}>{profile?.website}</ExternalLink>
                <Text>{profile?.communicationStyle}</Text>
              </Text>
            </Stack>
          ) : (
            <Stack direction="column">
              <Text>
                <CardHeader />
              </Text>
              <Stack direction="row" flexWrap="wrap">
                {typeof profile?.personality?.type !== 'undefined' && (
                  <ExternalLink href={profile.personality.url}>
                    <PsychometricTag>
                      {profile?.personality.type} | {profile?.personality.name}
                    </PsychometricTag>
                  </ExternalLink>
                )}
                {typeof profile?.enneagram?.number !== 'undefined' && (
                  <ExternalLink href={profile.enneagram.url}>
                    <PsychometricTag>
                      {profile?.enneagram.number} | {profile?.enneagram.name}
                    </PsychometricTag>
                  </ExternalLink>
                )}
                {typeof profile?.color?.name !== 'undefined' && (
                  <ExternalLink href={profile.color.url}>
                    <PsychometricTag>{profile?.color.name}</PsychometricTag>
                  </ExternalLink>
                )}
              </Stack>
            </Stack>
          )}
        </Stack>
        {layout === 'full' && (
          <Stack direction="row" marginTop="20px !important" justifyContent="end" flexWrap="wrap">
            {typeof profile?.personality?.type !== 'undefined' && (
              <Link href="#personality-type">
                <PsychometricTag>
                  {profile?.personality.type} | {profile?.personality.name}
                </PsychometricTag>
              </Link>
            )}
            {typeof profile?.enneagram?.number !== 'undefined' && (
              <Link href="#enneagram-type">
                <PsychometricTag>
                  {profile?.enneagram.number} | {profile?.enneagram.name}
                </PsychometricTag>
              </Link>
            )}
            {typeof profile?.color?.name !== 'undefined' && (
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
