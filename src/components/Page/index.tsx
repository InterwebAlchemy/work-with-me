import { Container } from '@chakra-ui/react'
import { Auth } from '@supabase/ui'

import Nav from '../Nav'

export interface PageProps {
  title?: string
  children?: React.ReactNode
  authenticated?: boolean
}

const Page = ({ children, title, authenticated }: PageProps): React.ReactElement => {
  const { user } = Auth.useUser()

  if (authenticated === true && user === null) {
    return (
      <>
        <Nav />
        <Container padding="20px">
          <p>Loading...</p>
        </Container>
      </>
    )
  }

  return (
    <>
      <Nav />
      <Container padding="20px" paddingTop="40px">
        {children}
      </Container>
    </>
  )
}

export default Page
