export type Site = {
  title: string
  description: string
  href: string
  locale: string
  featuredPostCount: number
  postsPerPage: number
  projectsPerPage: number
}

export type SocialLink = {
  href: string
  label: string
  icon?: string
}

export type IconMap = {
  [key: string]: string
}
