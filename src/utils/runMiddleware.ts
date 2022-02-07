import { NextApiRequest, NextApiResponse } from 'next'

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
const runMiddleware = async (
  req: NextApiRequest,
  res: NextApiResponse,
  fn: unknown
): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    if (typeof fn === 'function') {
      fn(req, res, async (result: unknown): Promise<unknown> => {
        if (result instanceof Error) {
          return reject(result)
        }

        return resolve(result)
      })
    }

    return resolve(null)
  })
}

export default runMiddleware
