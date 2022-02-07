import { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'cors'

import { getFullUserProfile } from '../../../../../services/user'
import runMiddleware from '../../../../../utils/runMiddleware'
import makeBadge from '../../../../../utils/makeBadge'

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'HEAD'],
})

// https://img.shields.io/endpoint?color=orange&label=INFJ&logoColor=orange&style=for-the-badge&url=https%3A%2F%2Flocalhost%3A3000%2Fapi%2Fbadges%2Fericrallen%2Fpersonality

async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  // Run the middleware
  await runMiddleware(req, res, cors)

  const { username } = req.query

  const response = await getFullUserProfile(username as string)

  if (response !== null) {
    const { error, data } = response

    if (error !== null) {
      res.status(404)
    } else if (typeof data?.personality !== 'undefined') {
      // Rest of the API logic
      res.status(200).json(
        makeBadge({
          label: data.personality.type ?? '',
          message: data.personality.name ?? '',
        })
      )
    }
  }

  res.end()
}

export default handler
