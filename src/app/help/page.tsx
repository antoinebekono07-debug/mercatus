import Link from "next/link";

const helpCategories = [
  { icon: "shopping_bag", title: "Shopping", articles: 24, color: "blue" },
  { icon: "storefront", title: "Selling", articles: 18, color: "green" },
  { icon: "account_circle", title: "Account", articles: 15, color: "purple" },
  { icon: "payment", title: "Payments", articles: 12, color: "orange" },
  { icon: "local_shipping", title: "Shipping", articles: 20, color: "cyan" },
  { icon: "security", title: "Trust & Safety", articles: 10, color: "red" },
];

const popularArticles = [
  "How to track my order?",
  "What is my return policy?",
  "How do I become a seller?",
  "How do I reset my password?",
  "What payment methods are accepted?",
];

const recentGuides = [
  { title: "Getting Started with myzone", category: "Basics", readTime: "5 min" },
  { title: "Setting Up Your Seller Account", category: "Selling", readTime: "8 min" },
  { title: "Understanding Shipping Options", category: "Shipping", readTime: "6 min" },
];

export default function HelpCenterPage() {
  return (
    <div className="flex flex-col">
      <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111a22] px-10 py-3">
        <Link href="/" className="flex items-center gap-4 text-slate-900 dark:text-white">
          <div className="size-8 text-primary">
            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fillRule="evenodd"></path>
            </svg>
          </div>
          <h2 className="text-lg font-bold leading-tight">myzone</h2>
        </Link>
        <div className="hidden md:flex items-center gap-9">
          <Link href="/products" className="text-slate-700 dark:text-slate-300 hover:text-primary text-sm font-medium">Marketplace</Link>
          <Link href="/seller/dashboard" className="text-slate-700 dark:text-slate-300 hover:text-primary text-sm font-medium">Dashboard</Link>
        </div>
        <Link href="/auth/login" className="flex items-center justify-center rounded-lg h-10 px-4 bg-primary hover:bg-blue-600 transition-colors text-white text-sm font-bold">
          Sign In
        </Link>
      </header>

      <main className="flex-1">
        <div className="bg-gradient-to-r from-primary to-blue-800 py-20 px-4 text-center">
          <h1 className="text-white text-4xl md:text-5xl font-black mb-4">Hi, how can we help?</h1>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Find answers to your questions about shopping, selling, and account management.
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center bg-white rounded-full px-6 py-4 shadow-lg">
              <span className="material-symbols-outlined text-[#617589] text-2xl">search</span>
              <input
                type="text"
                placeholder="Search for help..."
                className="flex-1 px-4 text-lg bg-transparent border-none focus:outline-none text-[#111418]"
              />
              <button className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full font-bold">
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-[#111418] dark:text-white mb-8">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {helpCategories.map((category) => (
              <Link
                key={category.title}
                href={`/help/${category.title.toLowerCase()}`}
                className="flex flex-col items-center gap-4 p-6 bg-white dark:bg-[#1a2632] rounded-xl border border-[#e5e7eb] dark:border-[#2a3441] hover:shadow-lg hover:border-primary transition-all"
              >
                <div className={`w-14 h-14 rounded-xl bg-${category.color}-50 dark:bg-${category.color}-900/20 flex items-center justify-center text-${category.color}-600`}>
                  <span className="material-symbols-outlined text-3xl">{category.icon}</span>
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-[#111418] dark:text-white">{category.title}</h3>
                  <p className="text-sm text-[#617589]">{category.articles} articles</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-[#f8f9fa] dark:bg-[#0b1219] py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-[#111418] dark:text-white mb-6">Popular Articles</h2>
                <div className="space-y-3">
                  {popularArticles.map((article) => (
                    <Link
                      key={article}
                      href="#"
                      className="flex items-center gap-3 p-4 bg-white dark:bg-[#1a2632] rounded-lg border border-[#e5e7eb] dark:border-[#2a3441] hover:border-primary transition-colors"
                    >
                      <span className="material-symbols-outlined text-[#617589]">article</span>
                      <span className="text-[#111418] dark:text-white font-medium">{article}</span>
                      <span className="material-symbols-outlined text-primary ml-auto">arrow_forward</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111418] dark:text-white mb-6">Recent Guides</h2>
                <div className="space-y-4">
                  {recentGuides.map((guide) => (
                    <div key={guide.title} className="p-4 bg-white dark:bg-[#1a2632] rounded-lg border border-[#e5e7eb] dark:border-[#2a3441]">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">{guide.category}</span>
                        <span className="text-xs text-[#617589]">{guide.readTime} read</span>
                      </div>
                      <h3 className="font-bold text-[#111418] dark:text-white">{guide.title}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="bg-primary rounded-2xl p-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Still need help?</h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto">
              Our support team is available 24/7 to assist you with any questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary rounded-full font-bold hover:bg-gray-100 transition-colors">
                <span className="material-symbols-outlined">chat</span>
                Live Chat
              </button>
              <button className="flex items-center justify-center gap-2 px-6 py-3 bg-transparent text-white border-2 border-white rounded-full font-bold hover:bg-white/10 transition-colors">
                <span className="material-symbols-outlined">email</span>
                Email Support
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
