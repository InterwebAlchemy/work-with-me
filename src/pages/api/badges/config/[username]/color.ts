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
    } else if (typeof data?.color !== 'undefined') {
      let labelColor = 'lightgrey'

      switch (data.color.name) {
        case 'Red':
          labelColor = 'red'
          break
        case 'Blue':
          labelColor = 'blue'
          break
        case 'Yellow':
          labelColor = 'yellow'
          break
        case 'White':
        default:
          labelColor = 'lightgrey'
      }

      res.json(
        makeBadge({
          label: 'Color',
          message: data.color.name ?? '',
          color: labelColor,
        })
      )
    }
  }

  res.end()
}

export default handler
