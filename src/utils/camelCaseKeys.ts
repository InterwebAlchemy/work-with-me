import convertToCamelCase from './convertToCamelCase'

import { KeysToCamelCase } from '../types/utility'

export default (obj: Record<string, any>): Record<string, any> => {
  return Object.entries(obj).reduce((newObj: Record<string, any>, [key, val]) => {
    const camelKey = convertToCamelCase(key)

    if (camelKey) {
      newObj[camelKey] = val
    }

    return newObj
  }, {})
}
