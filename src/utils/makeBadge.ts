export interface BadgeProps {
  schemaVersion: 1
  label: string
  message: string
  color?: string
  labelColor?: string
  isError?: boolean
  namedLogo?: string
  logoSvg?: string
  logoColor?: string
  logoWidth?: string
  logoPosition?: string
  style?: string
  cacheSeconds?: string
}

const makeBadge = (props: Omit<BadgeProps, 'schemaVersion'>): BadgeProps => ({
  style: 'for-the-badge',
  ...props,
  schemaVersion: 1,
})

export default makeBadge
