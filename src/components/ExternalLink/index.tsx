import { Link, LinkProps } from '@chakra-ui/react'

const ExternalLink = ({ href, children, ...props }: LinkProps): React.ReactElement => {
  return (
    <Link href={href} color="teal" {...props} isExternal>
      {children}
    </Link>
  )
}

export default ExternalLink
