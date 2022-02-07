import { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'cors'

import { getFullUserProfile } from '../../../../../services/user'
import runMiddleware from '../../../../../utils/runMiddleware'
import makeBadge from '../../../../../utils/makeBadge'

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'HEAD'],
})

async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  // Run the middleware
  await runMiddleware(req, res, cors)

  const { username } = req.query

  const response = await getFullUserProfile(username as string)

  if (response !== null) {
    const { error, data } = response

    if (error !== null) {
      res.statusCode = 404
    } else if (typeof data?.enneagram !== 'undefined') {
      // Rest of the API logic
      res.json(
        makeBadge({
          label: data.enneagram.number?.toString() ?? '',
          message: data.enneagram.name ?? '',
        })
      )
    }
  }
}

export default handler
