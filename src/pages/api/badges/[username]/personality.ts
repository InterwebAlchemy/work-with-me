import { NextApiRequest, NextApiResponse } from 'next'
import fetch from 'cross-fetch'
import Cors from 'cors'

import runMiddleware from '../../../../utils/runMiddleware'
import { SHIELDS_IO_ENDPOINT, APPLICATION_URL } from '../../../../constants'

import type { BadgeProps } from '../../../../utils/makeBadge'

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'HEAD'],
})

async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  // Run the middleware
  await runMiddleware(req, res, cors)

  const { username } = req.query

  const shieldUrl = new URL(SHIELDS_IO_ENDPOINT)

  const shieldConfig: BadgeProps = await fetch(
    new URL(`/api/badges/config/${username as string}/personality`, APPLICATION_URL).toString()
  ).then(async (response) => response.json())

  Object.entries(shieldConfig).forEach(([key, val]) => {
    shieldUrl.searchParams.set(key, `${val as string}`)
  })

  const shield = await fetch(shieldUrl.toString()).then(async (response) => response.blob())

  res.setHeader('Content-Type', 'image/svg+xml;charset=utf-8').status(200).send(shield)

  res.end()
}

export default handler
