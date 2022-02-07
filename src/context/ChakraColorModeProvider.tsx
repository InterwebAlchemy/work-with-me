import { ChakraProvider, cookieStorageManager, localStorageManager } from '@chakra-ui/react'

import type { GetServerSidePropsResult, GetServerSidePropsContext } from 'next'

export default function ChakraColorModeProvider({
  cookies,
  children,
}: React.PropsWithChildren<{ cookies: string }>): React.ReactElement {
  const colorModeManager =
    typeof cookies === 'string' ? cookieStorageManager(cookies) : localStorageManager

  return <ChakraProvider colorModeManager={colorModeManager}>{children}</ChakraProvider>
}

export function getServerSideProps(
  context: GetServerSidePropsContext
): GetServerSidePropsResult<{ cookies: string }> {
  return {
    props: {
      // first time users will not have any cookies and you may not return
      cookies: context?.req?.headers?.cookie ?? '',
    },
  }
}
