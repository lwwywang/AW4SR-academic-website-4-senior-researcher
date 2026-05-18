export type LinkItem = {
  label: string
  url: string
}

export type Publication = {
  id: string
  year: number
  title: string
  authors: string
  venue_full: string
  award: string | null
  links: LinkItem[]
  note: string | null
}

export type Project = {
  id: string
  direction_id: string
  order: number
  title: string
  authors: string
  venue_label: string
  award: string | null
  media: {
    demo: string | null
    image: string
  }
  links: LinkItem[]
}

export type Direction = {
  id: string
  title: string
  description: string
  background_image: string
  order: number
}

export type DirectionWithProjects = Direction & {
  projects: Project[]
}

export type NewsItem = {
  date: string
  content: string
}

export type TeamGroup = {
  id: string
  title: string
  members: string[]
}
