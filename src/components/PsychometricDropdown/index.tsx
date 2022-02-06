import { useEffect, useState } from 'react'
import { FormControl, FormLabel, Select, FormHelperText, Link } from '@chakra-ui/react'

import type { definitions } from '../../types/supabase'

export type BasicPsychometricOption = Pick<
  definitions['personality_colors'],
  'id' | 'description' | 'name' | 'url'
>

export interface PsychometricOption extends BasicPsychometricOption {
  type?: definitions['personality_types']['type']
  number?: definitions['enneagram_types']['number']
}

export interface PsychometricDropdownProps {
  label: string
  value: string
  options: PsychometricOption[]
  onChange?: React.Dispatch<number>
  placeholder?: string
  learnMoreUrl?: string
}

const PsychometricDropdown = ({
  label,
  value,
  options,
  onChange,
  placeholder,
  learnMoreUrl,
}: PsychometricDropdownProps): React.ReactElement => {
  // const { personalityTypeId, setPersonalityTypeId, personalityTypes } = useProfile()

  const [psychometric, setPsychometric] = useState<PsychometricOption | null>(
    options.find(({ id }) => id === Number(value)) ?? null
  )

  const renderPsychometricOptions = (): Array<React.ReactElement> => {
    return options.map(({ id, name, type, number }) => {
      let optionLabel = `${name}`

      if (type) {
        optionLabel = `${optionLabel} (${type})`
      }

      if (number) {
        optionLabel = `${number} (${optionLabel})`
      }

      return (
        <option key={type ?? id} value={id}>
          {optionLabel}
        </option>
      )
    })
  }

  const onPsychometricChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const psychometricId = e.target.value

    const psychometric = options.find(({ id }) => id === Number(psychometricId))

    if (typeof psychometric !== 'undefined') {
      setPsychometric(psychometric)
    } else {
      setPsychometric(null)
    }
  }

  useEffect(() => {
    onChange?.(psychometric?.id ?? 0)
  }, [psychometric?.id])

  useEffect(() => {
    setPsychometric(options.find(({ id }) => id === Number(value)) ?? null)
  }, [value])

  const renderPsychometricHelpText = (): React.ReactElement => {
    if (psychometric !== null) {
      return (
        <FormHelperText>
          {psychometric.description}
          <br />
          <br />
          <Link href={psychometric.url} isExternal>
            Find out more about the {psychometric.type ?? psychometric.name} {label}
          </Link>
          .
        </FormHelperText>
      )
    } else if (typeof learnMoreUrl !== 'undefined') {
      return (
        <FormHelperText>
          <Link href={learnMoreUrl} isExternal>
            Find out more about the {label} psychometric
          </Link>
          .
        </FormHelperText>
      )
    }

    return <></>
  }

  return (
    <FormControl marginBottom="20px">
      <FormLabel>{label}</FormLabel>
      <Select placeholder={placeholder} onChange={onPsychometricChange} value={psychometric?.id}>
        {renderPsychometricOptions()}
      </Select>
      {renderPsychometricHelpText()}
    </FormControl>
  )
}

export default PsychometricDropdown
