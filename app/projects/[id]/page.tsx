export default function ProjectPage({ params }: { params: { id: string } }) {
  return (
    <main className="max-w-content mx-auto px-10 py-section">
      <h1 className="text-h1 font-bold font-serif">{params.id}</h1>
      <p className="text-body text-[#6B6B6B] mt-4">Project detail page coming soon.</p>
    </main>
  )
}
