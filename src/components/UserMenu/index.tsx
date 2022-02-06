import { useRouter } from 'next/router'
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { GoPencil, GoPerson, GoOctoface } from 'react-icons/go'

import UserAvatar from '../UserAvatar'
import useProfile from '../../hooks/useProfile'

const UserMenu = (): React.ReactElement => {
  const router = useRouter()

  const { username, logIn, logOut } = useProfile()

  const editProfile = async (): Promise<void> => {
    await router.push('/profile')
  }

  const viewProfile = async (): Promise<void> => {
    await router.push(`/${username}`)
  }

  if (username) {
    return (
      <Menu>
        <MenuButton aria-label="Menu" variant="">
          <UserAvatar />
        </MenuButton>
        <MenuList>
          <MenuItem icon={<GoPencil />} onClick={editProfile}>
            Edit Profile
          </MenuItem>
          <MenuItem icon={<GoPerson />} onClick={viewProfile}>
            View Profile
          </MenuItem>
          <MenuItem icon={<GoOctoface />} onClick={logOut}>
            Sign Out
          </MenuItem>
        </MenuList>
      </Menu>
    )
  }

  return (
    <Button icon={GoOctoface} onClick={logIn} variant="link">
      Sign In w/ GitHub
    </Button>
  )
}

export default UserMenu
