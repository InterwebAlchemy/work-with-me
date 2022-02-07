import { NextApiRequest, NextApiResponse } from 'next'
import fetch from 'cross-fetch'
import Cors from 'cors'

import runMiddleware from '../../../../utils/runMiddleware'
import { SHIELDS_IO_ENDPOINT, APPLICATION_URL } from '../../../../constants'

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'HEAD'],
})

async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  // Run the middleware
  await runMiddleware(req, res, cors)

  const { username } = req.query

  const shieldUrl = new URL(SHIELDS_IO_ENDPOINT)

  shieldUrl.searchParams.set(
    'url',
    new URL(`/api/badges/config/${username as string}/enneagram`, APPLICATION_URL).toString()
  )

  const shield = await fetch(shieldUrl.toString(), {
    headers: {
      Accept: 'image/svg+xml;charset=utf-8',
    },
  })

  res.setHeader('Content-Type', 'image/svg+xml;charset=utf-8').status(200).send(shield)

  res.end()
}

export default handler
