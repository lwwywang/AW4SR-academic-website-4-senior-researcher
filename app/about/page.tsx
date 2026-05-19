import Image from 'next/image'
import { BIO_PHOTO, BIO_TEXT, BIO_LINKS, RESEARCH_DIRECTIONS, OUR_APPROACH, CONTACT } from '@/content/about'
import ResearchSection from '@/components/about/ResearchSection'
import OurApproachSection from '@/components/about/OurApproachSection'
import ContactSection from '@/components/about/ContactSection'
import InlineLink from '@/components/ui/InlineLink'

function Divider() {
  return <div className="border-t border-gray-200 dark:border-gray-800 mb-16" />
}

export default function AboutPage() {
  return (
    <main className="max-w-content px-10 pt-6 pb-section">
      <h1 className="text-h1 font-bold font-serif mb-6">About</h1>

      <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-16 md:items-start">
        <div className="relative w-[180px] h-[200px] shrink-0 mt-[6px] overflow-hidden bg-gray-200 dark:bg-gray-700">
          <Image src={BIO_PHOTO.src} alt={BIO_PHOTO.alt} fill sizes="180px" className="object-cover object-top" priority />
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-body text-[#6B6B6B] dark:text-gray-400">{BIO_TEXT}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-body">
            {BIO_LINKS.map((link) => (
              <InlineLink key={link.label} href={link.href} external={link.external}>
                {link.label}
              </InlineLink>
            ))}
          </div>
        </div>
      </div>

      {RESEARCH_DIRECTIONS.map((dir) => (
        <ResearchSection key={dir.title} {...dir} />
      ))}

      <Divider />

      <OurApproachSection {...OUR_APPROACH} />

      <Divider />

      <ContactSection {...CONTACT} />
    </main>
  )
}
