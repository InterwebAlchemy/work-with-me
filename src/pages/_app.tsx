import type { AppProps } from 'next/app'
import { Auth } from '@supabase/ui'
import { ChakraProvider } from '@chakra-ui/react'

import { UserProfileProvider } from '../context/UserProfileContext'

import { supabase } from '../adapters/supabase'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Auth.UserContextProvider supabaseClient={supabase}>
        <UserProfileProvider>
          <Component {...pageProps} />
        </UserProfileProvider>
      </Auth.UserContextProvider>
    </ChakraProvider>
  )
}

export default MyApp
