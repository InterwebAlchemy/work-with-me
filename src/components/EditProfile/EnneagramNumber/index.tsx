import PsychometricDropdown from '../../PsychometricDropdown'
import useProfile from '../../../hooks/useProfile'
import { PSYCHOMETRIC_URLS } from '../../../constants'

const EnneagramType = (): React.ReactElement => {
  const { enneagramTypeId, setEnneagramTypeId, enneagramTypes } = useProfile()

  return (
    <PsychometricDropdown
      label="Enneagram Number"
      placeholder="Choose your Enneagram Number"
      value={enneagramTypeId?.toString() ?? ''}
      onChange={setEnneagramTypeId}
      learnMoreUrl={PSYCHOMETRIC_URLS.ENNEAGRAM}
      options={enneagramTypes}
    />
  )
}

export default EnneagramType
