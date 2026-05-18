import { OPPORTUNITIES_TEXT, OPPORTUNITY_BULLETS } from '@/content/opportunities'

export default function OpportunitiesPage() {
  return (
    <main className="w-full px-10 pt-6 pb-section">
      <h1 className="text-h1 font-bold font-serif mb-6">Opportunities</h1>
      <p className="text-body text-[#6B6B6B] dark:text-gray-400 mb-6">
        {OPPORTUNITIES_TEXT}
      </p>

      {OPPORTUNITY_BULLETS.length > 0 && (
        <ul className="list-disc list-outside ml-5 space-y-2">
          {OPPORTUNITY_BULLETS.map((bullet) => (
            <li key={bullet} className="text-body text-[#6B6B6B] dark:text-gray-400">
              {bullet}
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
