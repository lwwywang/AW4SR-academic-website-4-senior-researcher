import Image from 'next/image'

type Props = {
  imageSrc: string
  imageAlt: string
}

export default function PortfolioHero({ imageSrc, imageAlt }: Props) {
  return (
    <div className="relative w-full h-32 md:h-48 overflow-hidden">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />
      {/* White text floating over the image — intentionally not dark-mode-aware */}
      <div className="absolute left-10 top-[40%] -translate-y-1/2">
        <h1 className="text-h1 font-bold font-serif text-white">
          Full Portfolio
        </h1>
      </div>
    </div>
  )
}
