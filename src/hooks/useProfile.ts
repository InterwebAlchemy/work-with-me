import { useContext } from 'react'

import { UserProfileContext, UserProfileContextProvider } from '../context/UserProfileContext'

const useProfile = (): UserProfileContextProvider => useContext(UserProfileContext)

export default useProfile
