import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import {
  Link as ChakraUiLink,
  ComponentWithAs,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react'

export interface InternalLinkProps {
  href: NextLinkProps['href']
  children: React.ReactNode
  nextLinkProps?: React.PropsWithChildren<NextLinkProps>
  chakraLinkProps?: React.PropsWithChildren<ComponentWithAs<'a', ChakraLinkProps>>
}

const InternalLink = ({
  href,
  children,
  nextLinkProps,
  chakraLinkProps,
}: InternalLinkProps): React.ReactElement => {
  return (
    <NextLink {...nextLinkProps} href={href} passHref>
      <ChakraUiLink {...chakraLinkProps}>{children}</ChakraUiLink>
    </NextLink>
  )
}

export default InternalLink
