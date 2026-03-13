'use client';

import Link from 'next/link';

export default function ExpertProfilePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#101922] px-6 lg:px-10 py-3">
        <Link href="/" className="flex items-center gap-4 text-[#111418] dark:text-white">
          <div className="size-6 text-primary">
            <svg className="w-full h-full" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fillRule="evenodd"></path>
            </svg>
          </div>
          <h2 className="text-lg font-bold">myzone</h2>
        </Link>
        <div className="hidden md:flex flex-1 max-w-64 mx-8">
          <div className="flex items-center rounded-lg bg-gray-100 dark:bg-[#202936] h-10 px-3 w-full">
            <span className="material-symbols-outlined text-gray-500">search</span>
            <input className="bg-transparent border-none focus:ring-0 text-sm ml-2" placeholder="Search experts..." />
          </div>
        </div>
        <div className="flex items-center gap-8">
          <div className="hidden lg:flex items-center gap-8">
            <Link href="#" className="text-sm font-medium">Experts</Link>
            <Link href="#" className="text-sm font-medium">Services</Link>
            <Link href="#" className="text-sm font-medium">My Bookings</Link>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-gray-100 dark:bg-[#202936] rounded-lg text-sm font-bold">Log In</button>
            <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold">Sign Up</button>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-8">
        <div className="flex items-center gap-2 text-sm text-[#617589] mb-6">
          <Link href="#" className="hover:text-primary">Home</Link>
          <span className="material-symbols-outlined text-sm">chevron_right</span>
          <Link href="#" className="hover:text-primary">Experts</Link>
          <span className="material-symbols-outlined text-sm">chevron_right</span>
          <Link href="#" className="hover:text-primary">Supply Chain</Link>
          <span className="material-symbols-outlined text-sm">chevron_right</span>
          <span>Dr. Sarah Chen</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white dark:bg-[#1a2632] rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-32 h-32 rounded-2xl bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCbuKViPJNxTa8a-xKdeDP1V2WTrQ8m5idNGMW6drpOg5jc5BbO_7W37b0Kblf5rGAS2o_lvTDxzyyRYgD0pMWtRKB94cog9h5zcHr4eVRwaVwWHgFvslxKqg")' }}></div>
                <div className="flex-1">
                  <h1 className="text-2xl font-black mb-1">Dr. Sarah Chen</h1>
                  <p className="text-[#617589] mb-4">Supply Chain Optimization Expert</p>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <span className="flex items-center gap-1 text-sm">
                      <span className="material-symbols-outlined text-yellow-500 text-sm">star</span>
                      <span className="font-bold">4.9</span>
                      <span className="text-[#617589]">(127 reviews)</span>
                    </span>
                    <span className="flex items-center gap-1 text-sm text-[#617589]">
                      <span className="material-symbols-outlined text-sm">location_on</span>
                      San Francisco, CA
                    </span>
                    <span className="flex items-center gap-1 text-sm text-[#617589]">
                      <span className="material-symbols-outlined text-sm">translate</span>
                      English, Mandarin
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <Link href="/expert/booking" className="px-6 py-2 bg-primary text-white rounded-lg font-bold hover:bg-blue-600">
                      Book Consultation
                    </Link>
                    <button className="px-6 py-2 border border-gray-300 dark:border-gray-600 rounded-lg font-bold hover:bg-gray-50 dark:hover:bg-gray-800">
                      Message
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-[#1a2632] rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-bold mb-4">About</h2>
              <p className="text-[#617589] leading-relaxed mb-6">
                Dr. Sarah Chen is a renowned supply chain expert with over 15 years of experience helping global enterprises optimize their logistics operations. She holds a Ph.D. in Operations Research from MIT and has consulted for Fortune 500 companies.
              </p>
              <h3 className="font-bold mb-3">Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {['Logistics Optimization', 'Inventory Management', 'Cross-border Trade', 'Warehouse Automation', 'Demand Forecasting', 'Sustainable Supply Chain'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">{tag}</span>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-[#1a2632] rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-bold mb-6">Reviews</h2>
              <div className="space-y-6">
                {[
                  { name: 'John D.', rating: 5, text: 'Excellent consultation! Dr. Chen helped us reduce shipping costs by 30%.', date: '2 weeks ago' },
                  { name: 'Mike T.', rating: 5, text: 'Very knowledgeable and practical advice. Highly recommended!', date: '1 month ago' },
                  { name: 'Lisa M.', rating: 4, text: 'Great insights on sustainable supply chain practices.', date: '2 months ago' },
                ].map((review, idx) => (
                  <div key={idx} className="pb-6 border-b border-gray-100 dark:border-gray-700 last:border-0">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold">{review.name}</span>
                      <span className="text-sm text-[#617589]">{review.date}</span>
                    </div>
                    <div className="flex text-yellow-500 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-sm">{i < review.rating ? 'star' : 'star_border'}</span>
                      ))}
                    </div>
                    <p className="text-[#617589]">{review.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-[#1a2632] rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold mb-4">Consultation Packages</h3>
              <div className="space-y-4">
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-xl">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-bold">30 Min Call</span>
                    <span className="text-primary font-bold">$150</span>
                  </div>
                  <p className="text-sm text-[#617589] mb-3">Quick consultation for specific questions</p>
                  <button className="w-full py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-blue-600">Book Now</button>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-xl">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-bold">60 Min Call</span>
                    <span className="text-primary font-bold">$250</span>
                  </div>
                  <p className="text-sm text-[#617589] mb-3">In-depth analysis and action plan</p>
                  <button className="w-full py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-blue-600">Book Now</button>
                </div>
                <div className="p-4 border-2 border-primary rounded-xl bg-primary/5">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-bold">2 Hour Workshop</span>
                    <span className="text-primary font-bold">$800</span>
                  </div>
                  <p className="text-sm text-[#617589] mb-3">Comprehensive strategy session</p>
                  <button className="w-full py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-blue-600">Book Now</button>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-[#1a2632] rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold mb-4">Response Time</h3>
              <p className="text-sm text-[#617589]">Usually responds within 2 hours</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
