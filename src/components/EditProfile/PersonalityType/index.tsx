import PsychometricDropdown from '../../PsychometricDropdown'
import useProfile from '../../../hooks/useProfile'
import { PSYCHOMETRIC_URLS } from '../../../constants'

const PersonalityType = (): React.ReactElement => {
  const { personalityTypeId, setPersonalityTypeId, personalityTypes } = useProfile()

  return (
    <PsychometricDropdown
      label="Personality Type"
      placeholder="Choose your personality type"
      value={personalityTypeId?.toString() ?? ''}
      onChange={setPersonalityTypeId}
      learnMoreUrl={PSYCHOMETRIC_URLS.TYPE}
      options={personalityTypes}
    />
  )
}

export default PersonalityType
