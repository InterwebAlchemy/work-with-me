export const COMMUNICATION_STYLE_LIMIT = 140

export const APPLICATION_URL = ['production', 'local'].includes(process.env.NEXT_PUBLIC_VERCEL_ENV)
  ? process.env.NEXT_PUBLIC_APPLICATION_URL
  : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`

export const GITHUB_PROFILE_BASE_URL = 'https://github.com'

export const GITHUB_API_URL = 'https://api.github.com'

export const SHIELDS_IO_ENDPOINT = 'https://img.shields.io/endpoint'

export const PSYCHOMETRIC_URLS = {
  TYPE: 'https://16personalities.com',
  COLOR: 'https://www.colorcode.com/',
  ENNEAGRAM: 'https://enneagraminstitute.com',
}
