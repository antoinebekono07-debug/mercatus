'use client';

import Link from 'next/link';

export default function ApplicationConfirmationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
      <header className="w-full bg-white dark:bg-[#1A2633] border-b border-[#f0f2f4] dark:border-gray-800 sticky top-0 z-50">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-10 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-4">
              <div className="size-8 text-primary">
                <svg className="w-full h-full" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fillRule="evenodd"></path>
                </svg>
              </div>
              <h2 className="text-lg font-bold">myzone</h2>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/careers" className="text-[#111418] dark:text-gray-200 hover:text-primary text-sm font-medium">Careers</Link>
              <Link href="/about" className="text-[#111418] dark:text-gray-200 hover:text-primary text-sm font-medium">About Us</Link>
              <Link href="/help" className="text-[#111418] dark:text-gray-200 hover:text-primary text-sm font-medium">Help Center</Link>
            </nav>
            <Link href="/auth/login" className="flex items-center justify-center h-10 px-4 bg-primary hover:bg-blue-600 text-white text-sm font-bold rounded-lg transition-colors">
              Log In
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center py-16 px-4">
        <div className="max-w-2xl w-full text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-100 dark:bg-green-900/30 mb-6">
              <span className="material-symbols-outlined text-5xl text-green-600" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-[#111418] dark:text-white mb-4">
              Application Submitted!
            </h1>
            <p className="text-lg text-[#617589] max-w-lg mx-auto">
              Thank you for applying to join myzone. We have received your application and our team will review it shortly.
            </p>
          </div>

          <div className="bg-white dark:bg-[#1a2632] rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
            <h2 className="text-lg font-bold mb-6">What happens next?</h2>
            <div className="space-y-6">
              {[
                { step: 1, title: 'Application Review', desc: 'Our team will review your application within 3-5 business days.', done: true },
                { step: 2, title: 'Initial Screening', desc: 'If shortlisted, we will contact you for an initial phone interview.', done: false },
                { step: 3, title: 'Technical Assessment', desc: 'Complete a short skills assessment relevant to the role.', done: false },
                { step: 4, title: 'Final Interview', desc: 'Meet with our team for a final interview round.', done: false },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      item.done ? 'bg-green-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'
                    }`}>
                      {item.done ? <span className="material-symbols-outlined text-sm">check</span> : item.step}
                    </div>
                    {idx < 3 && <div className={`w-0.5 flex-1 my-2 ${item.done ? 'bg-green-500' : 'bg-gray-200 dark:bg-gray-700'}`}></div>}
                  </div>
                  <div className="flex-1 text-left">
                    <p className={`font-semibold ${item.done ? 'text-[#111418] dark:text-white' : 'text-gray-500'}`}>{item.title}</p>
                    <p className="text-sm text-[#617589]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-blue-600 transition-colors">
              <span className="material-symbols-outlined">home</span>
              Back to Home
            </Link>
            <Link href="/careers" className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <span className="material-symbols-outlined">work</span>
              View More Jobs
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
