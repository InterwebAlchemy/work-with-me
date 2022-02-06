import PsychometricDropdown from '../../PsychometricDropdown'
import useProfile from '../../../hooks/useProfile'
import { PSYCHOMETRIC_URLS } from '../../../constants'

const PersonalityColor = (): React.ReactElement => {
  const { personalityColorId, setPersonalityColorId, personalityColors } = useProfile()

  return (
    <PsychometricDropdown
      label="Personality Color"
      placeholder="Choose your personality Color"
      value={personalityColorId?.toString() ?? ''}
      onChange={setPersonalityColorId}
      learnMoreUrl={PSYCHOMETRIC_URLS.COLOR}
      options={personalityColors}
    />
  )
}

export default PersonalityColor
