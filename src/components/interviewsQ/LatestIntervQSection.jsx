import React from 'react'
import ButtonLink from "@/components/ui/ButtonLink";


function LatestIntervQSection() {
  return (
    <div className='text-white text-center'>
      <h2 className="text-2xl font-bold mb-4">Latest Interview Questions</h2>
      <p className="mb-6">
        Stay updated with the latest interview questions and trends in the tech industry.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example cards for interview questions */}
      </div>
            <div className="flex items-center justify-center mt-10">
        <ButtonLink href="/interviews-skills" className="px-6 py-2 bg-[var(--bg-white)] text-[var(--black-text)] rounded-lg hover:bg-[var(--bg-black)] hover:text-[var(--white-text)] border border-[var(--white-border)] transition-all duration-300">
          View All Interview Skills Questions
        </ButtonLink>
      </div>
    </div>
  )
}

export default LatestIntervQSection;