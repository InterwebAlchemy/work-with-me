import convertToCamelCase from './convertToCamelCase'

import type { KeysToCamelCase } from '../types/utility'

const camelCaseKeys = <T>(obj: T): KeysToCamelCase<T> => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  return Object.entries(obj).reduce((newObj: KeysToCamelCase<T>, [key, val]) => {
    const camelKey = convertToCamelCase(key)

    if (camelKey !== '') {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      newObj[camelKey] = val
    }

    return newObj
  }, {})
}

export default camelCaseKeys
