import Link from "next/link";

const team = [
  { name: "Sarah Chen", role: "CEO & Co-Founder", image: "" },
  { name: "Michael Roberts", role: "CTO & Co-Founder", image: "" },
  { name: "Emily Watson", role: "VP of Product", image: "" },
  { name: "David Kim", role: "VP of Engineering", image: "" },
];

const values = [
  { icon: "verified", title: "Trust", description: "We build trust through transparency, verification, and accountability in every transaction." },
  { icon: "psychology", title: "Innovation", description: "We leverage AI and cutting-edge technology to revolutionize global commerce." },
  { icon: "groups", title: "Community", description: "We foster a global community of buyers and sellers united by shared goals." },
  { icon: "public", title: "Global Impact", description: "We connect markets across borders, enabling economic opportunity for everyone." },
];

const milestones = [
  { year: "2022", title: "Founded", description: "myzone was founded with a vision to transform global trade." },
  { year: "2023", title: "1M Users", description: "Reached our first million active users across 50 countries." },
  { year: "2024", title: "Series B", description: "Raised $100M in Series B funding to accelerate growth." },
  { year: "2025", title: "10k+ Partners", description: "Now serving over 10,000 verified businesses worldwide." },
];

export default function AboutPage() {
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
          <Link href="/about" className="text-primary font-medium text-sm">About</Link>
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
            <h1 className="text-white text-4xl md:text-6xl font-black mb-6">Reimagining Global Commerce</h1>
            <p className="text-blue-100 text-xl leading-relaxed">
              We&apos;re building the future of marketplace—where AI-powered agents connect buyers and sellers with unprecedented trust, transparency, and efficiency.
            </p>
          </div>
        </section>

        <section className="py-24 px-4 bg-white dark:bg-[#101922]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { metric: "10,000+", label: "Verified Sellers" },
                { metric: "5M+", label: "Products" },
                { metric: "150+", label: "Countries" },
                { metric: "$2B+", label: "GMV" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-4xl md:text-5xl font-black text-primary mb-2">{item.metric}</div>
                  <div className="text-[#617589] dark:text-gray-400 font-medium">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-4 bg-[#f8f9fa] dark:bg-[#0b1219]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-[#111418] dark:text-white text-center mb-16">Our Story</h2>
            <div className="space-y-6 text-lg text-[#4b5563] dark:text-gray-300 leading-relaxed">
              <p>
                Founded in 2022, myzone was born from a simple observation: traditional B2B marketplaces lacked trust. Every transaction carried risk—for buyers unsure of seller legitimacy, and for sellers wary of non-paying buyers.
              </p>
              <p>
                We set out to solve this with AI. Our intelligent agents verify every participant, analyze market conditions, and facilitate transactions that benefit everyone involved. What started as a vision has become the fastest-growing B2B marketplace globally.
              </p>
              <p>
                Today, myzone connects over 10,000 verified businesses across 150+ countries, facilitating billions in trade annually. And we&apos;re just getting started.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 px-4 bg-white dark:bg-[#101922]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-[#111418] dark:text-white text-center mb-16">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div key={value.title} className="text-center p-8 rounded-2xl bg-[#f8f9fa] dark:bg-[#1a2632]">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-3xl">{value.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#111418] dark:text-white mb-3">{value.title}</h3>
                  <p className="text-[#617589] dark:text-gray-400">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-4 bg-[#f8f9fa] dark:bg-[#0b1219]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-[#111418] dark:text-white text-center mb-16">Our Journey</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {milestones.map((milestone) => (
                <div key={milestone.year} className="relative">
                  <div className="text-6xl font-black text-primary/20 mb-4">{milestone.year}</div>
                  <h3 className="text-xl font-bold text-[#111418] dark:text-white mb-2">{milestone.title}</h3>
                  <p className="text-[#617589] dark:text-gray-400">{milestone.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-4 bg-white dark:bg-[#101922]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-[#111418] dark:text-white text-center mb-16">Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member) => (
                <div key={member.name} className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <span className="material-symbols-outlined text-4xl text-gray-400">person</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#111418] dark:text-white">{member.name}</h3>
                  <p className="text-[#617589] dark:text-gray-400">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Join Our Mission</h2>
            <p className="text-blue-100 text-lg mb-8">
              We&apos;re always looking for talented people to join our team and help us reshape the future of commerce.
            </p>
            <Link href="/careers" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary text-lg font-bold rounded-full hover:bg-gray-100 transition-colors">
              View Open Positions
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
