import { camelize } from 'humps'

const convertToCamelCase = (str = ''): string => {
  return camelize(str)
}

export default convertToCamelCase
