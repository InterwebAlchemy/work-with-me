import Head from 'next/head'
import { Heading, Text, Box } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

import type { NextPage } from 'next'

import Page from '../components/Page'
import ProfileCard from '../components/ProfileCard'
import ExternalLink from '../components/ExternalLink'
import { getFeaturedProfiles, getFullUserProfile } from '../services/user'
import camelCaseKeys from '../utils/camelCaseKeys'
import { PSYCHOMETRIC_URLS } from '../constants'

import type { FullUserProfile } from '../types/user'
import type { definitions } from '../types/supabase'

const Home: NextPage = () => {
  const [featuredUsers, setFeaturedUsers] = useState<
    Array<Pick<definitions['profiles'], 'username'>>
  >([])
  const [featuredProfiles, setFeaturedProfiles] = useState<Array<FullUserProfile | null>>([])

  useEffect(() => {
    const getProfiles = async (): Promise<void> => {
      const { error, data } = await getFeaturedProfiles()

      if (error !== null && process.env.NEXT_PUBLIC_FEATURE__DEBUG_LOGS === 'ENABLED') {
        console.error(error)
      } else if (data !== null) {
        setFeaturedUsers(data)
      }
    }

    getProfiles().catch((e) => {
      if (process.env.NEXT_PUBLIC_FEATURE__DEBUG_LOGS === 'ENABLED') {
        console.error(e)
      }
    })
  }, [])

  useEffect(() => {
    if (featuredUsers.length > 0) {
      Promise.all(
        featuredUsers.map(async ({ username = '' }) => {
          const response = await getFullUserProfile(username)

          if (response !== null) {
            const { error, data } = response

            if (error !== null && process.env.NEXT_PUBLIC_FEATURE__DEBUG_LOGS === 'ENABLED') {
              console.error(error)
            } else {
              return data
            }
          }

          return null
        })
      )
        .then((profiles) => {
          setFeaturedProfiles(profiles)
        })
        .catch((e) => {
          console.error(e)
        })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [featuredUsers.length])

  // TODO: get featured profile rendering working properly
  const renderFeaturedProfiles = (): React.ReactElement[] => {
    return featuredProfiles
      .filter((item) => item)
      .map((profile) => {
        if (profile !== null) {
          return (
            <ProfileCard
              profile={camelCaseKeys<FullUserProfile>(profile)}
              layout="simple"
              linkToProfile
            />
          )
        }

        return <></>
      })
  }

  return (
    <Page>
      <Head>
        <title>Work w/ Me</title>
        <meta name="description" content="Get to know the people you work with." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box as="main" marginBottom="60px">
        <Heading as="h1" marginBottom="40px">
          Work w/ Me
        </Heading>

        <Text marginBottom="20px">
          Personality profiles are a way to distill parts of your personality and life philosophy
          into an easily digestible chunk of information.
        </Text>

        <Text marginBottom="20px">
          They are not a perfect measure, by any means, but they are an interesting measure for you
          - and anyone else you share the results with - to consider. They can be especially helpful
          in the workplace (or in Open Source projects) where personalities, communication styles,
          and philosophies can clash in complicated ways.
        </Text>

        <Text marginBottom="20px">
          Work w/ Me wants to help you provide an easy way to show other developers these
          personality psychometrics in a way that might help you understand how to collaborate more
          effectively.
        </Text>

        <Text marginBottom="20px">
          By using Work w/ Me, you can share a short description of your Communication Style, your{' '}
          <ExternalLink href={PSYCHOMETRIC_URLS.TYPE}>Myers Briggs Personality</ExternalLink>,{' '}
          <ExternalLink href={PSYCHOMETRIC_URLS.ENNEAGRAM}>Enneagram Number</ExternalLink>, and{' '}
          <ExternalLink href={PSYCHOMETRIC_URLS.COLOR}>
            Hartman Personality Profile Color
          </ExternalLink>{' '}
          so that people who work with you can get a better understanding of who you are, how you
          think, and what motivates you.
        </Text>
      </Box>
      {featuredUsers.length > 0 && (
        <Box as="aside">
          <Heading as="h2" size="sm" marginBottom="40px">
            Get to know a random user:
          </Heading>
          {renderFeaturedProfiles()}
        </Box>
      )}
    </Page>
  )
}

export default Home
