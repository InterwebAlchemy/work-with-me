import { camelize } from 'humps'

export default (str = '') => {
  return camelize(str)
}
