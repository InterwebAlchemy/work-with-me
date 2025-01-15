import { Input, FormControl, FormLabel, FormHelperText } from '@chakra-ui/react'

import useProfile from '../../../hooks/useProfile'

const Website = (): React.ReactElement => {
  const { website, setWebsite } = useProfile()

  const onWebsiteChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const websiteValue = e.target.value

    setWebsite(new URL(websiteValue).toString())
  }

  return (
    <FormControl marginBottom="20px">
      <FormLabel>Website</FormLabel>
      <Input onBlur={onWebsiteChange} defaultValue={website} />
      <FormHelperText>
        Provide a URL where people can learn more about you. We recommend a personal blog or
        LinkedIn profile, but you do you.
      </FormHelperText>
    </FormControl>
  )
}

export default Website
