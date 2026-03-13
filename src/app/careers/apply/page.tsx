'use client';

import Link from 'next/link';

const jobDetails = {
  title: 'Senior Product Manager',
  location: 'San Francisco, CA (Hybrid)',
  type: 'Full-time',
  salary: '$150,000 - $200,000',
  description: 'Join us in building the agentic future of e-commerce. Help us shape the next generation of trusted marketplaces.',
};

const benefits = [
  'Competitive salary & equity',
  'Health, dental & vision insurance',
  'Unlimited PTO',
  'Remote-first culture',
  'Learning & development budget',
  '401(k) matching',
];

export default function JobApplicationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-solid border-[#dbe0e6] dark:border-gray-800 bg-white dark:bg-[#101922] px-6 py-4 md:px-10">
        <Link href="/" className="flex items-center gap-4">
          <div className="size-8 text-primary">
            <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fillRule="evenodd"></path>
            </svg>
          </div>
          <h2 className="text-[#111418] dark:text-white text-xl font-bold">myzone</h2>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/careers" className="text-[#111418] dark:text-gray-300 hover:text-primary transition-colors text-sm font-medium">Careers</Link>
          <Link href="/about" className="text-[#111418] dark:text-gray-300 hover:text-primary transition-colors text-sm font-medium">About Us</Link>
          <button className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-[#111418] dark:text-white text-sm font-bold h-10 px-5 rounded-lg transition-colors">
            Login
          </button>
        </div>
      </header>

      <main className="flex-1 justify-center py-10 px-4 md:px-8">
        <div className="flex flex-col w-full max-w-[800px] mx-auto">
          <nav className="mb-6">
            <div className="flex flex-wrap items-center gap-2">
              <Link href="/careers" className="text-[#617589] hover:text-primary text-sm font-medium">Careers</Link>
              <span className="text-[#617589] text-sm font-medium">/</span>
              <Link href="#" className="text-[#617589] hover:text-primary text-sm font-medium">Product</Link>
              <span className="text-[#617589] text-sm font-medium">/</span>
              <span className="text-[#111418] dark:text-white text-sm font-medium">Apply</span>
            </div>
          </nav>

          <div className="mb-10">
            <h1 className="text-[#111418] dark:text-white text-3xl md:text-4xl font-black mb-3">{jobDetails.title}</h1>
            <p className="text-[#617589] text-lg">{jobDetails.description}</p>
            <div className="flex flex-wrap gap-4 mt-4">
              <span className="flex items-center gap-1 text-sm text-[#617589]">
                <span className="material-symbols-outlined">location_on</span>
                {jobDetails.location}
              </span>
              <span className="flex items-center gap-1 text-sm text-[#617589]">
                <span className="material-symbols-outlined">schedule</span>
                {jobDetails.type}
              </span>
              <span className="flex items-center gap-1 text-sm text-[#617589]">
                <span className="material-symbols-outlined">payments</span>
                {jobDetails.salary}
              </span>
            </div>
          </div>

          <form className="flex flex-col gap-10 bg-white dark:bg-[#15202b] rounded-xl p-6 md:p-10 shadow-sm border border-[#f0f2f4] dark:border-gray-800">
            <section>
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center size-8 rounded-full bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-[20px]">person</span>
                </span>
                <h3 className="text-[#111418] dark:text-white text-xl font-bold">Personal Information</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label className="flex flex-col gap-2">
                  <span className="text-[#111418] dark:text-gray-200 text-sm font-medium">Full Name <span className="text-red-500">*</span></span>
                  <input className="w-full h-12 px-4 rounded-lg border border-[#dbe0e6] dark:border-gray-600 bg-white dark:bg-gray-800 text-[#111418] dark:text-white placeholder-[#617589] focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="Jane Doe" required type="text" />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-[#111418] dark:text-gray-200 text-sm font-medium">Email Address <span className="text-red-500">*</span></span>
                  <input className="w-full h-12 px-4 rounded-lg border border-[#dbe0e6] dark:border-gray-600 bg-white dark:bg-gray-800 text-[#111418] dark:text-white placeholder-[#617589] focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="jane@example.com" required type="email" />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-[#111418] dark:text-gray-200 text-sm font-medium">Phone Number</span>
                  <input className="w-full h-12 px-4 rounded-lg border border-[#dbe0e6] dark:border-gray-600 bg-white dark:bg-gray-800 text-[#111418] dark:text-white placeholder-[#617589] focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="+1 (555) 000-0000" type="tel" />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-[#111418] dark:text-gray-200 text-sm font-medium">Location <span className="text-red-500">*</span></span>
                  <input className="w-full h-12 px-4 rounded-lg border border-[#dbe0e6] dark:border-gray-600 bg-white dark:bg-gray-800 text-[#111418] dark:text-white placeholder-[#617589] focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="City, Country" required type="text" />
                </label>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center size-8 rounded-full bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-[20px]">work</span>
                </span>
                <h3 className="text-[#111418] dark:text-white text-xl font-bold">Experience</h3>
              </div>
              <div className="space-y-6">
                <label className="flex flex-col gap-2">
                  <span className="text-[#111418] dark:text-gray-200 text-sm font-medium">LinkedIn Profile</span>
                  <input className="w-full h-12 px-4 rounded-lg border border-[#dbe0e6] dark:border-gray-600 bg-white dark:bg-gray-800 text-[#111418] dark:text-white placeholder-[#617589] focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="https://linkedin.com/in/yourprofile" type="url" />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-[#111418] dark:text-gray-200 text-sm font-medium">Portfolio / Personal Website</span>
                  <input className="w-full h-12 px-4 rounded-lg border border-[#dbe0e6] dark:border-gray-600 bg-white dark:bg-gray-800 text-[#111418] dark:text-white placeholder-[#617589] focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="https://yourwebsite.com" type="url" />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-[#111418] dark:text-gray-200 text-sm font-medium">Years of Experience <span className="text-red-500">*</span></span>
                  <select className="w-full h-12 px-4 rounded-lg border border-[#dbe0e6] dark:border-gray-600 bg-white dark:bg-gray-800 text-[#111418] dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none" required>
                    <option value="">Select experience...</option>
                    <option value="0-2">0-2 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="6-10">6-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </label>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center size-8 rounded-full bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-[20px]">description</span>
                </span>
                <h3 className="text-[#111418] dark:text-white text-xl font-bold">Additional Information</h3>
              </div>
              <label className="flex flex-col gap-2">
                <span className="text-[#111418] dark:text-gray-200 text-sm font-medium">Cover Letter</span>
                <textarea className="w-full px-4 py-3 rounded-lg border border-[#dbe0e6] dark:border-gray-600 bg-white dark:bg-gray-800 text-[#111418] dark:text-white placeholder-[#617589] focus:border-primary focus:ring-1 focus:ring-primary outline-none min-h-[150px]" placeholder="Tell us why you'd be a great fit..."></textarea>
              </label>
            </section>

            <div className="flex items-center gap-4 pt-4">
              <input className="rounded border-gray-300 text-primary focus:ring-primary" id="terms" type="checkbox" required />
              <label className="text-sm text-[#617589]" htmlFor="terms">
                I agree to the processing of my personal data in accordance with the <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
              </label>
            </div>

            <button className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-lg transition-colors">
              Submit Application
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
