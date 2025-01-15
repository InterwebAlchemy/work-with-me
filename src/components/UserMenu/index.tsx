import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { Menu, MenuButton, MenuList, MenuItem, Button, Link } from '@chakra-ui/react'
import { GoPencil, GoPerson, GoOctoface, GoBeaker } from 'react-icons/go'

import UserAvatar from '../UserAvatar'
import useProfile from '../../hooks/useProfile'

const UserMenu = (): React.ReactElement => {
  const router = useRouter()
  const [loggedIn, setLoggedIn] = useState(false)

  const { username, logIn, logOut, avatarUrl } = useProfile()

  const editProfile = async (): Promise<void> => {
    await router.push('/profile')
  }

  const viewProfile = async (): Promise<void> => {
    await router.push(`/${username}`)
  }

  useEffect(() => {
    if (typeof username !== 'undefined' && username !== null && username !== '') {
      setLoggedIn(true)
    }
  }, [username])

  if (loggedIn) {
    return (
      <Menu>
        <MenuButton aria-label="Menu" variant="">
          <UserAvatar src={avatarUrl} />
        </MenuButton>
        <MenuList>
          <MenuItem icon={<GoPencil />} onClick={editProfile}>
            Edit Profile
          </MenuItem>
          <MenuItem icon={<GoPerson />} onClick={viewProfile}>
            View Profile
          </MenuItem>
          {typeof process.env.NEXT_PUBLIC_PSYCHOMETRIC_REQUEST_URL !== 'undefined' && (
            <MenuItem
              as={Link}
              href={process.env.NEXT_PUBLIC_PSYCHOMETRIC_REQUEST_URL}
              isExternal
              icon={<GoBeaker />}
            >
              Request New Psychometric
            </MenuItem>
          )}
          <MenuItem icon={<GoOctoface />} onClick={logOut}>
            Sign Out
          </MenuItem>
        </MenuList>
      </Menu>
    )
  }

  return (
    <Button leftIcon={<GoOctoface />} onClick={logIn} variant="link" size="md" fontWeight="normal">
      Sign In
    </Button>
  )
}

export default UserMenu
