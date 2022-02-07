import { Heading, Button, FormControl, ButtonGroup, Box } from '@chakra-ui/react'

import type { NextPage } from 'next'

import Page from '../components/Page'
import PersonalityType from '../components/EditProfile/PersonalityType'
import PersonalityColor from '../components/EditProfile/PersonalityColor'
import EnneagramNumber from '../components/EditProfile/EnneagramNumber'
import CommunicationStyle from '../components/EditProfile/CommunicationStyle'
import Website from '../components/EditProfile/Website'
import useProfile from '../hooks/useProfile'

const Profile: NextPage = (): React.ReactElement => {
  const { updateProfile, deleteProfile } = useProfile()

  return (
    <Page authenticated>
      <Box as="form">
        <Heading marginBottom="10px">Your Profile</Heading>
        <Website />
        <CommunicationStyle />
        <PersonalityType />
        <EnneagramNumber />
        <PersonalityColor />
        <FormControl marginTop="40px" marginBottom="40px">
          <ButtonGroup orientation="horizontal">
            <Button onClick={updateProfile} colorScheme="teal">
              Update Profile
            </Button>
            <Button onClick={deleteProfile} colorScheme="red" variant="link" fontWeight="normal">
              Delete Profile
            </Button>
          </ButtonGroup>
        </FormControl>
      </Box>
    </Page>
  )
}

export default Profile
