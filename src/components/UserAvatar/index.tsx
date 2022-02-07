import { Avatar, AvatarProps } from '@chakra-ui/react'

const UserAvatar = (props: AvatarProps): React.ReactElement => {
  const avatarProps = {
    size: 'sm',
    ...props,
  }

  return <Avatar {...avatarProps} />
}

export default UserAvatar
