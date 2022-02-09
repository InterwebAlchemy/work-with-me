import { Box, Stack, Tag, Text } from '@chakra-ui/react'

import UserMenu from '../UserMenu'
import InternalLink from '../InternalLink'
import ThemeToggle from '../ThemeToggle'

const Nav = (): React.ReactElement => {
  return (
    <Box w="100%" padding="10px" position="fixed">
      <Stack as="nav" direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" alignItems="center">
          {/* @ts-expect-error CSS Props not correctly inherited by chakraLinkProps Object */}
          <InternalLink href="/" chakraLinkProps={{ fontWeight: 'bold' }}>
            <Text>Work w/ Me</Text>
          </InternalLink>
          <Tag variant="outline" colorScheme="cyan" size="sm">
            Beta
          </Tag>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={5}>
          <ThemeToggle />
          <UserMenu />
        </Stack>
      </Stack>
    </Box>
  )
}

export default Nav
