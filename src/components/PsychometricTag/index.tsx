import { Tag, TagLabel, TagProps, Icon } from '@chakra-ui/react'
import { GoPerson } from 'react-icons/go'

const PsychometricTag = ({
  children,
  ...props
}: React.PropsWithChildren<TagProps>): React.ReactElement => {
  return (
    <Tag {...props}>
      <Icon as={GoPerson} size="xs" marginRight="5px" />
      <TagLabel>{children}</TagLabel>
    </Tag>
  )
}

export default PsychometricTag
