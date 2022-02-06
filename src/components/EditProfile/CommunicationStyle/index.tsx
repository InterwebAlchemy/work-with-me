import { Textarea, FormControl, FormLabel, FormHelperText } from '@chakra-ui/react'

import useProfile from '../../../hooks/useProfile'
import { COMMUNICATION_STYLE_LIMIT } from '../../../constants'

const CommunicationStyle = (): React.ReactElement => {
  const { communicationStyle, setCommunicationStyle } = useProfile()

  const onCommunicationStyleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const communicationStyleDescription = e.target.value

    if (communicationStyleDescription.length <= COMMUNICATION_STYLE_LIMIT) {
      setCommunicationStyle(communicationStyleDescription)
    }
  }

  return (
    <FormControl marginBottom="20px">
      <FormLabel>Communication Style</FormLabel>
      <Textarea onChange={onCommunicationStyleChange} value={communicationStyle} size="sm" />
      <FormHelperText>
        Describe your communication style in a tweet's length.
        <br />
        {COMMUNICATION_STYLE_LIMIT - (communicationStyle?.length ?? 0)} characters remaining
      </FormHelperText>
    </FormControl>
  )
}

export default CommunicationStyle
