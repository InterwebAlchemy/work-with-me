import { Avatar, AvatarProps } from '@chakra-ui/react'

import useProfile from '../../hooks/useProfile'

const UserAvatar = (props: AvatarProps): React.ReactElement => {
  const { username, avatarUrl } = useProfile()

  const avatarProps = {
    src: avatarUrl,
    name: username,
    size: 'sm',
    ...props,
  }

  return <Avatar {...avatarProps} />
}

export default UserAvatar
