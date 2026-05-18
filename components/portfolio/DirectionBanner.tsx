type Props = {
  title: string
  imageSrc: string
  imageAlt: string
}

export default function DirectionBanner({ title, imageSrc }: Props) {
  return (
    <div
      role="img"
      aria-label={title}
      style={{ backgroundImage: `url(${imageSrc})` }}
      className="relative w-full h-32 md:h-48 bg-cover bg-center bg-fixed"
    >
      {/* Scrim for text legibility */}
      <div className="absolute inset-0 bg-black/30" />
      {/* White text — same visual style as the hero, not dark-mode-aware */}
      <div className="absolute left-10 top-[40%] -translate-y-1/2 z-10">
        <h2 className="text-h1 font-bold font-serif text-white">
          {title}
        </h2>
      </div>
    </div>
  )
}
