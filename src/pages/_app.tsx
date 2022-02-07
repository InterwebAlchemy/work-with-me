import type { AppProps } from 'next/app'
import { Auth } from '@supabase/ui'

import type { GetServerSidePropsContext } from 'next'

import ChakraColorModeProvider from '../context/ChakraColorModeProvider'
import { UserProfileProvider } from '../context/UserProfileContext'

import { supabase } from '../adapters/supabase'

function App({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <ChakraColorModeProvider cookies={pageProps?.cookies}>
      <Auth.UserContextProvider supabaseClient={supabase}>
        <UserProfileProvider>
          <Component {...pageProps} />
        </UserProfileProvider>
      </Auth.UserContextProvider>
    </ChakraColorModeProvider>
  )
}

App.getInitialProps = (context: GetServerSidePropsContext) => {
  return {
    // first time users will not have any cookies and you may not return
    cookies: context?.req?.headers?.cookie ?? '',
  }
}

export default App
