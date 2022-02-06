import { useEffect } from 'react'
import { Auth } from '@supabase/ui'
import { Button } from '@chakra-ui/react'
import { GoOctoface } from 'react-icons/go'

import { supabase } from '../../adapters/supabase'

const Login = (): React.ReactElement => {
  const { user } = Auth.useUser()

  const logOut = async () => {
    const { error } = await supabase.auth.signOut()

    if (error) {
      console.error('Error logging out:', error.message)
    }
  }

  const logIn = async () => {
    const { error } = await supabase.auth.signIn(
      { provider: 'github' },
      { redirectTo: `${process.env.NEXT_APPLICATION_URL}/profile` }
    )

    if (error) {
      console.error('Error logging in:', error.message)
    }
  }

  if (user === null) {
    return (
      <Button colorScheme="teal" leftIcon={<GoOctoface />} onClick={logIn}>
        Sign In w/ GitHub
      </Button>
    )
  }

  return (
    <Button colorScheme="teal" leftIcon={<GoOctoface />} onClick={logOut}>
      Sign Out
    </Button>
  )
}

export default Login
