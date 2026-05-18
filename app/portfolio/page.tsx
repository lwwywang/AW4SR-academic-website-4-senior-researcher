import { PORTFOLIO_HERO, PORTFOLIO_INTRO, DIRECTIONS } from '@/content/portfolio'
import PortfolioHero from '@/components/portfolio/PortfolioHero'
import DirectionBanner from '@/components/portfolio/DirectionBanner'
import ProjectCard from '@/components/portfolio/ProjectCard'

export default function PortfolioPage() {
  return (
    <main>
      <PortfolioHero {...PORTFOLIO_HERO} />

      <div className="max-w-content px-10 pt-8 pb-10">
        <p className="text-body text-[#6B6B6B] dark:text-gray-400">
          {PORTFOLIO_INTRO}
        </p>
      </div>

      {DIRECTIONS.map((direction) => (
        <section key={direction.title}>
          <DirectionBanner
            title={direction.title}
            imageSrc={direction.imageSrc}
            imageAlt={direction.imageAlt}
          />
          <div className="max-w-content px-10">
            <div className="divide-y divide-gray-100 dark:divide-gray-800">
              {direction.projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </main>
  )
}
