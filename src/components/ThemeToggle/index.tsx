import { useColorMode, Switch, FormControl, FormLabel } from '@chakra-ui/react'
import { GoLightBulb } from 'react-icons/go'

const ThemeToggle = (): React.ReactElement => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <FormControl width="auto">
      <FormLabel
        htmlFor="darkMode"
        aria-label="Toggle Dark Mode"
        display="flex"
        flexDirection="row"
        alignItems="center"
        margin="0"
      >
        <GoLightBulb size={12} />
        <Switch
          id="darkMode"
          onChange={toggleColorMode}
          isChecked={colorMode === 'light'}
          size="sm"
          marginLeft="5px"
        />
      </FormLabel>
    </FormControl>
  )
}

export default ThemeToggle
