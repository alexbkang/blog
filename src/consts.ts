import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Alex Kang',
  description: 'personal blog / portfolio',
  href: 'https://alexbkang.dev/blog',
  locale: 'en-US',
  featuredPostCount: 5,
  postsPerPage: 12,
  projectsPerPage: 4,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/projects',
    label: 'projects',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/alexbkang',
    label: 'GitHub',
    icon: 'lucide:github',
  },
  {
    href: 'https://www.linkedin.com/in/alexbkang',
    label: 'LinkedIn',
    icon: 'lucide:linkedin',
  },
  {
    href: 'mailto:alexbkang@gmail.com',
    label: 'Email',
    icon: 'lucide:mail',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Email: 'lucide:mail',
}
