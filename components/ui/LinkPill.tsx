type Props = {
  label: string
  href: string
}

export default function LinkPill({ label, href }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block border border-[#6B6B6B] dark:border-gray-600 text-[#6B6B6B] dark:text-gray-400 text-meta uppercase tracking-wider px-3 py-1 hover:border-[#0A0A0A] hover:text-[#0A0A0A] dark:hover:border-[#FAFAF8] dark:hover:text-[#FAFAF8]"
    >
      {label}
    </a>
  )
}
