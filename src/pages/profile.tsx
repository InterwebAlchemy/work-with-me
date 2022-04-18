import { useState, useRef, type LegacyRef, type RefObject } from 'react'
import {
  Heading,
  Button,
  FormControl,
  ButtonGroup,
  Box,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from '@chakra-ui/react'

import type { FocusableElement } from '@chakra-ui/utils'

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

  const [isOpen, setIsOpen] = useState(false)

  const cancelRef = useRef<FocusableElement>()

  const onClose = (): void => {
    setIsOpen(false)
  }

  const deleteAction = async (): Promise<void> => {
    try {
      await deleteProfile()
    } catch (e) {
      if (process.env.NEXT_PUBLIC_FEATURE__DEBUG_LOGS === 'ENABLED') {
        console.error(e)
      }
    }
  }

  return (
    <>
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
              <Button onClick={deleteAction} colorScheme="red" variant="link" fontWeight="normal">
                Delete Profile
              </Button>
            </ButtonGroup>
          </FormControl>
        </Box>
      </Page>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef as RefObject<FocusableElement>}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Customer
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can&apos;t undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef as LegacyRef<HTMLButtonElement>} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={onClose} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}

export default Profile
