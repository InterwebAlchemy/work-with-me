import { createClient } from '@supabase/supabase-js'

import type { NextApiRequest, NextApiResponse } from 'next'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
  process.env.SUPABASE_SERVICE_ROLE_KEY ?? ''
)

async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const user = await supabase.auth.user()

  const { error } = await supabase.auth.api.deleteUser(
    user?.id,
    // @ts-expect-error the supabase client seems to not have the role_key parameter defined
    process.env.SUPABASE_ROLE_KEY
  )

  if (error !== null) {
    res.status(200)
  } else {
    res.status(406).json({ error })
  }

  res.end()
}

export default handler
