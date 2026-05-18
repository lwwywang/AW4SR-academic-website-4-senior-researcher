export default function Strong({ children }: { children: React.ReactNode }) {
  return (
    <strong className="font-semibold text-[#0A0A0A] dark:text-[#FAFAF8]">
      {children}
    </strong>
  )
}
