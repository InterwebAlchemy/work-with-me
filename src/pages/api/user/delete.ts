import { createClient } from '@supabase/supabase-js'

import type { NextApiRequest, NextApiResponse } from 'next'

async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const { userId } = req.body

  if (typeof userId !== 'undefined') {
    const supabaseAdmin = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
      process.env.SUPABASE_SERVICE_ROLE_KEY ?? ''
    )

    const { error } = await supabaseAdmin.auth.api.deleteUser(userId)

    if (error !== null) {
      res.status(200)
    } else {
      res.status(406).json({ error })
    }
  } else {
    res.status(401)
  }

  res.end()
}

export default handler
