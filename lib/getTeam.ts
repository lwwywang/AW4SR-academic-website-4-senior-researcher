import teamData from '@/content/data/team.json'
import type { TeamGroup } from '@/types'

export function getTeamGroups(): TeamGroup[] {
  return teamData.groups as TeamGroup[]
}
