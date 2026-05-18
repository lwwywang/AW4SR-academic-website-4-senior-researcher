import directionsData from '@/content/data/directions.json'
import projectsData from '@/content/data/projects.json'
import type { Direction, Project, DirectionWithProjects } from '@/types'

export function getProjectsByDirection(): DirectionWithProjects[] {
  const directions = (directionsData.directions as Direction[])
    .sort((a, b) => a.order - b.order)

  const projects = projectsData.projects as Project[]

  return directions
    .map((dir) => ({
      ...dir,
      projects: projects
        .filter((p) => p.direction_id === dir.id)
        .sort((a, b) => a.order - b.order),
    }))
    .filter((dir) => dir.projects.length > 0)
}
