import Link from "next/link";

const jobs = [
  { title: "Senior Frontend Engineer", department: "Engineering", location: "San Francisco / Remote", type: "Full-time" },
  { title: "Backend Engineer", department: "Engineering", location: "San Francisco / Remote", type: "Full-time" },
  { title: "Product Manager", department: "Product", location: "San Francisco", type: "Full-time" },
  { title: "AI/ML Engineer", department: "Engineering", location: "Remote", type: "Full-time" },
  { title: "DevOps Engineer", department: "Infrastructure", location: "Remote", type: "Full-time" },
  { title: "Customer Success Manager", department: "Operations", location: "New York", type: "Full-time" },
];

const benefits = [
  { icon: "health_and_safety", title: "Health & Wellness", description: "Comprehensive medical, dental, and vision coverage" },
  { icon: "home", title: "Remote-First", description: "Work from anywhere in the world" },
  { icon: "school", title: "Learning Budget", description: "$2,000 annual learning & development budget" },
  { icon: "paid_time_off", title: "Unlimited PTO", description: "Take the time you need to recharge" },
  { icon: "child_care", title: "Parental Leave", description: "16 weeks paid leave for new parents" },
  { icon: "sports_esports", title: "Team Activities", description: "Regular virtual and in-person team events" },
];

export default function CareersPage() {
  return (
    <div className="flex flex-col">
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#f0f2f4] dark:border-gray-800 bg-white dark:bg-[#1a2632] px-4 lg:px-10 py-4 sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-3 text-[#111418] dark:text-white">
          <div className="size-8 text-primary">
            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fillRule="evenodd"></path>
            </svg>
          </div>
          <h2 className="text-xl font-black leading-tight tracking-tight">myzone</h2>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/products" className="text-[#111418] dark:text-gray-300 hover:text-primary font-medium text-sm">Marketplace</Link>
          <Link href="/about" className="text-[#111418] dark:text-gray-300 hover:text-primary font-medium text-sm">About</Link>
          <Link href="/help" className="text-[#111418] dark:text-gray-300 hover:text-primary font-medium text-sm">Help</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/auth/login" className="text-[#111418] dark:text-gray-300 font-medium text-sm hidden sm:block hover:text-primary">Log In</Link>
          <Link href="/auth/register" className="bg-primary text-white text-sm font-bold px-6 py-2.5 rounded-full hover:bg-primary-dark transition-colors">Sign Up</Link>
        </div>
      </header>

      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary to-blue-800 py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-white text-4xl md:text-6xl font-black mb-6">Join Our Mission</h1>
            <p className="text-blue-100 text-xl leading-relaxed">
              Build the future of global commerce with the world&apos;s most innovative team.
            </p>
          </div>
        </section>

        <section className="py-24 px-4 bg-white dark:bg-[#101922]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4 p-6 rounded-xl bg-[#f8f9fa] dark:bg-[#1a2632]">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-2xl">{benefit.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#111418] dark:text-white mb-1">{benefit.title}</h3>
                    <p className="text-sm text-[#617589] dark:text-gray-400">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-4 bg-[#f8f9fa] dark:bg-[#0b1219]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#111418] dark:text-white mb-4">Open Positions</h2>
              <p className="text-[#617589] dark:text-gray-400 text-lg">Find your next opportunity at myzone</p>
            </div>
            <div className="space-y-4">
              {jobs.map((job) => (
                <div key={job.title} className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 bg-white dark:bg-[#1a2632] rounded-xl border border-[#e5e7eb] dark:border-[#2a3441] hover:border-primary transition-colors">
                  <div>
                    <h3 className="text-lg font-bold text-[#111418] dark:text-white mb-1">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 text-sm text-[#617589] dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">business</span>
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">location_on</span>
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">schedule</span>
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <button className="shrink-0 px-6 py-2.5 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg transition-colors">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-4 bg-white dark:bg-[#101922]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-[#111418] dark:text-white mb-6">Don&apos;t See the Right Role?</h2>
            <p className="text-[#617589] dark:text-gray-400 text-lg mb-8">
              We&apos;re always looking for exceptional talent. Send us your resume and we&apos;ll keep you in mind for future opportunities.
            </p>
            <form className="max-w-md mx-auto space-y-4">
              <input type="text" placeholder="Your Name" className="w-full h-12 px-4 rounded-lg border border-[#e5e7eb] dark:border-[#3e4a5b] bg-white dark:bg-[#1a2632] text-[#111418] dark:text-white focus:outline-none focus:ring-2 focus:ring-primary" />
              <input type="email" placeholder="Your Email" className="w-full h-12 px-4 rounded-lg border border-[#e5e7eb] dark:border-[#3e4a5b] bg-white dark:bg-[#1a2632] text-[#111418] dark:text-white focus:outline-none focus:ring-2 focus:ring-primary" />
              <textarea placeholder="Tell us about yourself" rows={4} className="w-full p-4 rounded-lg border border-[#e5e7eb] dark:border-[#3e4a5b] bg-white dark:bg-[#1a2632] text-[#111418] dark:text-white focus:outline-none focus:ring-2 focus:ring-primary resize-none"></textarea>
              <button type="submit" className="w-full h-12 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg transition-colors">
                Submit Application
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
