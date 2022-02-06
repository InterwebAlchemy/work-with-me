import { Box, Avatar, Link, Stack } from '@chakra-ui/react'

import Login from '../Login'
import UserMenu from '../UserMenu'
import InternalLink from '../InternalLink'

const Nav = (): React.ReactElement => {
  return (
    <Box w="100%" padding="10px" position="fixed">
      <Stack as="nav" direction="row" justifyContent="space-between">
        <InternalLink href="/">Work w/ Me</InternalLink>
        <UserMenu />
      </Stack>
    </Box>
  )
}

export default Nav
