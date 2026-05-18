import Image from 'next/image'
import InlineLink from '@/components/ui/InlineLink'

export type ProjectLink = {
  label: string
  href: string
}

export type ProjectCardProps = {
  title: string
  authors: React.ReactNode
  venue: React.ReactNode
  award?: React.ReactNode
  links: ProjectLink[]
  mediaSrc: string
  mediaAlt: string
}

export default function ProjectCard({ title, authors, venue, award, links, mediaSrc, mediaAlt }: ProjectCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-5 md:gap-8 py-8">
      {/* Media — self-start prevents grid stretch from breaking the 4:3 ratio */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-200 dark:bg-gray-700 self-start">
        <Image
          src={mediaSrc}
          alt={mediaAlt}
          fill
          sizes="(max-width: 768px) calc(100vw - 80px), 240px"
          className="object-cover"
          loading="lazy"
        />
      </div>

      {/* Text — min-w-0 prevents the column from overflowing the grid */}
      <div className="flex flex-col justify-start gap-1 min-w-0">
        <h3 className="text-h2 font-bold font-serif text-[#0A0A0A] dark:text-[#FAFAF8] leading-snug break-words">
          {title}
        </h3>
        <p className="text-body italic text-[#6B6B6B] dark:text-gray-400 break-words">
          {authors}
        </p>
        <p className="text-body text-[#6B6B6B] dark:text-gray-400 break-words">
          {venue}
        </p>
        <p className={`text-body text-[#6B6B6B] dark:text-gray-400 break-words ${award ? '' : 'invisible select-none'}`}>
          {award ?? ' '}
        </p>
        {links.length > 0 && (
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-body">
            {links.map((link) => (
              <InlineLink key={link.label} href={link.href} external>
                {link.label}
              </InlineLink>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
