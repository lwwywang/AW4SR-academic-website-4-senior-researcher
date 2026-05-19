// ================================================================
//  ABOUT PAGE CONTENT
//  Edit this file to update everything on the About page.
//  No other files need to be changed.
// ================================================================

import InlineLink from '@/components/ui/InlineLink'
import type { ApproachItem, ExternalImage } from '@/components/about/OurApproachSection'
import type { ProjectItem } from '@/components/about/ResearchSection'


// ── 1. BIO ──────────────────────────────────────────────────────

/**
 * Profile photo shown to the left of the bio paragraph.
 *
 * HOW TO REPLACE:
 *   1. Place your photo in public/images/  (e.g. public/images/profile.jpg)
 *   2. Change `src` to '/images/profile.jpg'
 *   3. Change `alt` to the person's name
 *
 * PORTRAIT ORIENTATION RECOMMENDED (taller than wide).
 * The photo is displayed at 180 × 200 px and automatically cropped from the
 * top, so keep the subject's face near the top of the image.
 * Any file size or resolution works — the site handles resizing.
 */
export const BIO_PHOTO = {
  src: 'https://picsum.photos/seed/profile/280/420', // ← replace with '/images/profile.jpg'
  alt: 'Professor [Name]',                            // ← replace with the person's name
}

/**
 * Links shown below the bio paragraph (e.g. Google Scholar, CV, personal site).
 * external: true  → opens in a new tab
 * external: false → internal page (e.g. "/publications")
 */
export const BIO_LINKS: { label: string; href: string; external?: boolean }[] = [
  { label: 'Google Scholar', href: 'https://scholar.google.com',  external: true },
  { label: 'DBLP',           href: 'https://dblp.org',            external: true },
  { label: 'ORCID',          href: 'https://orcid.org',           external: true },
]

/**
 * The main bio paragraph.
 *
 * Plain text  → just write your text directly.
 * With a link → wrap the word with:
 *     <InlineLink href="https://…" external>linked word</InlineLink>
 */
export const BIO_TEXT = (
  <>
    Dr. [Name] is an Associate Professor in the School of Computing and Information Systems.
    Their research lies at the intersection of human-computer interaction, computational
    fabrication, and tangible user interfaces, with a focus on designing systems that bridge
    the physical and digital worlds. Current projects investigate shape-changing materials,
    interactive textiles, and novel sensing technologies for embodied computing. Work from
    the lab has been published at premier venues including CHI, UIST, and SIGGRAPH, and has
    received recognition from the international research community.
  </>
)


// ── 2. RESEARCH DIRECTIONS ──────────────────────────────────────

/**
 * Each entry creates one research-direction block (H2 title + description + project images).
 * You can add or remove entries freely.
 *
 * How project pages are created:
 *   1. Add a project below with a title and imageSrc.
 *   2. The image appears on the About page.
 *   3. Clicking the image automatically opens a project detail route generated
 *      from the title. Example: "Project Alpha" -> "/projects/project-alpha".
 *   4. The generated detail page currently shows the project title and
 *      "Project detail page coming soon."
 *
 * projects[].title    -> label shown below the image. Keep titles unique.
 * projects[].imageSrc -> place your image in public/images/ and write "/images/filename.jpg"
 *                        Up to 5 projects are shown per row (2 columns on mobile).
 * projects[].href     -> optional advanced override. Most projects do not need this.
 */
export const RESEARCH_DIRECTIONS: {
  title: string
  description: React.ReactNode
  projects: ProjectItem[]
}[] = [
  {
    title: 'Shape-Changing Interfaces',        // ← H2 heading, edit freely
    description: (
      <>
        We explore how physical objects can dynamically change their shape, texture, and
        mechanical properties in response to computational input, enabling new forms of{' '}
        <InlineLink href="https://en.wikipedia.org/wiki/Human%E2%80%93computer_interaction" external>
          human-computer interaction
        </InlineLink>{' '}
        beyond the flat screen.
      </>
    ),
    projects: [
      {
        title: 'Project Alpha',
        imageSrc: '/images/demo-large.jpg', // ← replace with your image
      },
      {
        title: 'Project Beta',
        imageSrc: 'https://picsum.photos/seed/beta/600/400',
      },
      {
        title: 'Project Gamma',
        imageSrc: 'https://picsum.photos/seed/gamma/600/400',
      },
      {
        title: 'Project Delta',
        imageSrc: 'https://picsum.photos/seed/delta/600/400',
      },
    ],
  },
  {
    title: 'Wearable & Textile Computing',
    description:
      'Our work investigates smart textiles and body-worn devices that integrate computational capabilities into everyday clothing and accessories, making interactive technology invisible yet pervasive.',
    projects: [
      {
        title: 'Project Epsilon',
        imageSrc: 'https://picsum.photos/seed/epsilon/600/400',
      },
      {
        title: 'Project Zeta',
        imageSrc: 'https://picsum.photos/seed/zeta/600/400',
      },
      {
        title: 'Project Eta',
        imageSrc: 'https://picsum.photos/seed/eta/600/400',
      },
    ],
  },
]


// ── 3. OUR APPROACH ─────────────────────────────────────────────

/**
 * `items` — each entry is one sub-section (H3 title + description + bullet points).
 *
 * bullets[] entries can be plain text or text with links:
 *   Plain:  'Some text here'
 *   Linked: <>Some <InlineLink href="…" external>word</InlineLink> here</>
 *
 * `images` (optional) — a row of clickable images at the bottom of the section.
 *   Each image opens an external URL when clicked (e.g. press coverage, awards).
 *   Place images in public/images/ and write "/images/filename.jpg" for src.
 *   Remove the entire `images` array if you don't need this row.
 */
export const OUR_APPROACH: {
  title: string
  description: React.ReactNode
  items: ApproachItem[]
  images?: ExternalImage[]
} = {
  title: 'Our Approach',                       // ← H2 heading, edit freely
  description:
    'Our lab pursues research at the intersection of technical innovation and human-centred design, with impact spanning scientific communities, design practice, and public engagement.',
  items: [
    {
      title: 'Engineering & Scientific Impact', // ← H3 heading
      description: (
        <>
          We develop novel computational systems and fabrication methods that advance the
          state of the art in{' '}
          <InlineLink href="https://en.wikipedia.org/wiki/Human%E2%80%93computer_interaction" external>
            human-computer interaction
          </InlineLink>{' '}
          research.
        </>
      ),
      bullets: [
        <>
          Publications at{' '}
          <InlineLink href="https://dl.acm.org/conference/chi" external>CHI</InlineLink>,{' '}
          <InlineLink href="https://uist.acm.org" external>UIST</InlineLink>,{' '}
          <InlineLink href="https://siggraph.org" external>SIGGRAPH</InlineLink>, and related venues
        </>,
        <>
          Open-source toolkits and fabrication pipelines on{' '}
          <InlineLink href="https://github.com" external>GitHub</InlineLink>
        </>,
        'Collaborations with engineering and materials science departments',
      ],
    },
    {
      title: 'Design & Art Impact',
      description:
        'We engage with design and art communities to explore how interactive technology can be expressive, aesthetic, and culturally meaningful.',
      bullets: [
        <>
          Exhibited works at{' '}
          <InlineLink href="https://example.com" external>design festivals</InlineLink> and galleries
        </>,
        'Partnerships with industrial design and architecture schools',
        'Studio-based research methods alongside engineering approaches',
      ],
    },
    {
      title: 'Community Engagement',
      description:
        'We believe research should be accessible and beneficial beyond academia, and actively work to share our findings with broader audiences.',
      bullets: [
        'Workshops and hands-on demonstrations for the public',
        <>
          Educational programmes for{' '}
          <InlineLink href="https://example.com" external>K–12 students</InlineLink>
        </>,
        'Outreach partnerships with community organisations',
      ],
    },
  ],
  // Remove the lines below (from `images:` to the closing `],`) if you don't need media logos.
  images: [
    { src: 'https://picsum.photos/seed/img1/400/280', alt: 'Media feature 1', href: 'https://example.com' },
    { src: 'https://picsum.photos/seed/img2/400/280', alt: 'Media feature 2', href: 'https://example.com' },
    { src: 'https://picsum.photos/seed/img3/400/280', alt: 'Media feature 3', href: 'https://example.com' },
  ],
}


// ── 4. CONTACT ──────────────────────────────────────────────────

/**
 * imageSrc    → place your building/office photo in public/images/ and write "/images/filename.jpg"
 * mapEmbedUrl → go to Google Maps → find your location → Share → "Embed a map"
 *               → copy the URL inside src="…" and paste it here
 */
export const CONTACT = {
  title: 'Contact',                            // ← H2 heading, edit freely
  intro:
    'We are based in the School of Computing and Information Systems. Prospective students and collaborators are welcome to reach out by email.',
  imageSrc: 'https://picsum.photos/seed/building/800/600', // ← replace with /images/your-building.jpg
  imageAlt: 'School of Computing building',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7782!2d103.7763!3d1.2966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTcnNDcuOCJOIDEwM8KwNDYnMzQuNyJF!5e0!3m2!1sen!2ssg!4v1700000000000', // ← paste your Google Maps embed URL here
  description:
    'School of Computing and Information Systems, 13 Computing Drive, Singapore 117417. Office hours: Monday–Friday, 9 am–5 pm. For general enquiries, please email info@example.edu.',
}
