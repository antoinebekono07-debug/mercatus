'use client';

import Link from 'next/link';

const categories = [
  { icon: 'home', name: 'All Discussions', active: true },
  { icon: 'campaign', name: 'Announcements' },
  { icon: 'package_2', name: 'Supplier Sourcing' },
  { icon: 'trending_up', name: 'Growth & Marketing' },
  { icon: 'globe', name: 'Cross-Border Trade' },
];

const discussions = [
  {
    pinned: true,
    author: 'Team myzone',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQxQzHk4DLUwKeReKXguN39Hrb1UBCvXQJOyXfZE3W9vPuHdUBRazzbq0FzQ2uXO3Cq9qLDCcTFIW0giXM2REB8W64bU00Sp3Mlmo8RwdRBJU23cLqvlqQXd6I_9mnpL0k0lCRFLOgYhui9zEtjQwzJgBqy7XnEfILy4DLsQIj9keJgg9ffdaqLbcg0QZQbV4RqZLCeP6Ax-yTQRv_cOiVpZusqOTvgmEOw31tf1t1agmFtZWvsx99aABWtbgJFYpsyK3pEIP5abXJ',
    badge: 'Announcement',
    title: 'Introducing the new AI-Powered Seller Dashboard',
    preview: 'We are thrilled to announce a major update to your seller dashboard. Our new agentic features will help you automate inventory management and predict market trends...',
    replies: 142,
    views: '5.2k',
    time: '',
  },
  {
    pinned: false,
    author: 'GlobalSeller88',
    verified: true,
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbuKViPJNxTa8a-xKdeDP1V2WTrQ8m5idNGMW6drpOg5jc5BbO_7W37b0Kblf5rGAS2o_lvTDxzyyRYgD0pMWtRKB94cog9h5zcHr4eVRwaVwWHgFvslxKqg-seI4LrCM5gm7yTE_Z9kOdseLRmrgVP4M9tk8VmQYI1mNSHqJMeyqgdrH36kfYr2tSohz4OLowKb_ufABcNWQCVtZqN_d_qakJnDTBmlvANg7t3ygxb35DW4nCm5yHZg_lt6vu-HrZ-ABEpiQZ909i',
    category: 'Cross-Border Trade',
    title: 'Best practices for handling customs delays in Q4?',
    preview: 'We are seeing a lot of holdups in the EU region recently. Has anyone found a reliable workaround or specific carrier that is performing better for electronics?',
    replies: 24,
    views: '1.2k',
    time: '2 hours ago',
  },
  {
    pinned: false,
    author: 'GreenStore_UK',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDE-MvQ8Zc0sgED_q6t9XNs0_wXQf1s-BaP0mGC0ViIBNxzMiVQpHxN_tFTApDj78UsnmmTsBkzCh4shpw7YODXBGahxs-F7yID9suMcyG0wLcE2_G_V-P3CNmivOGLJ9MJZgRtB9InlIzTQNVXmlr23IvCR0sPZSRUL7QgUCflrCm_RVWGUf0DEjV-CLGQ0v6nIZ_Z80a5oDG44IVN3LSkrrOZkn6qjAiqn7UeXAx2J_b-BEAd5aDMkrM4gKUPwSkaDXaiYTf6eMOV',
    category: 'Supplier Sourcing',
    title: 'Supplier recommendations for eco-friendly packaging',
    preview: 'Looking for certified biodegradable packing peanuts suppliers based in Vietnam. Any leads on factories that have good MOQs for small businesses?',
    replies: 12,
    views: '850',
    time: '5 hours ago',
  },
  {
    pinned: false,
    author: 'TechDeals_Direct',
    verified: true,
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbuKViPJNxTa8a-xKdeDP1V2WTrQ8m5idNGMW6drpOg5jc5BbO_7W37b0Kblf5rGAS2o_lvTDxzyyRYgD0pMWtRKB94cog9h5zcHr4eVRwaVwWHgFvslxKqg',
    category: 'Growth & Marketing',
    title: 'How I increased my conversion rate by 300% with AI product descriptions',
    preview: 'I started using the new AI description generator last month and my click-through rates have been incredible. Here is my complete strategy...',
    replies: 67,
    views: '3.4k',
    time: '8 hours ago',
  },
];

export default function ForumPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 py-3 lg:px-10">
        <div className="flex items-center gap-8 w-full max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-4 text-slate-900 dark:text-white shrink-0">
            <div className="size-8 text-primary">
              <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z" fill="currentColor" fillRule="evenodd"></path>
              </svg>
            </div>
            <h2 className="text-xl font-bold leading-tight">myzone <span className="text-primary font-normal">Community</span></h2>
          </Link>
          <div className="hidden md:flex flex-1 max-w-lg">
            <div className="flex w-full items-center rounded-lg bg-slate-100 dark:bg-slate-800 border border-transparent focus-within:border-primary/50 focus-within:ring-2 focus-within:ring-primary/20 transition-all">
              <div className="pl-3 text-slate-500 dark:text-slate-400">
                <span className="material-symbols-outlined text-[20px]">search</span>
              </div>
              <input className="w-full bg-transparent border-none py-2 px-3 text-sm text-slate-900 dark:text-white placeholder-slate-500 focus:ring-0" placeholder="Search discussions, sellers, or topics..." type="text" />
            </div>
          </div>
          <div className="flex flex-1 justify-end items-center gap-6">
            <nav className="hidden lg:flex items-center gap-6">
              <Link href="/products" className="text-sm font-medium hover:text-primary transition-colors text-slate-700 dark:text-slate-300">Marketplace</Link>
              <Link href="/seller/dashboard" className="text-sm font-medium hover:text-primary transition-colors text-slate-700 dark:text-slate-300">Dashboard</Link>
              <Link href="/forum" className="text-sm font-medium text-primary">Community</Link>
            </nav>
            <div className="flex items-center gap-3 pl-6 border-l border-slate-200 dark:border-slate-800">
              <button className="relative text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-0 right-0 size-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
              </button>
              <div className="bg-center bg-no-repeat bg-cover rounded-full size-9 ring-2 ring-slate-100 dark:ring-slate-800 cursor-pointer" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBaXWOmt74Ev52p3EeXzhtJT2i_kTWXnZ8VsEoWJ8CFzjoguOIvaGGSwX-I7QacQG9UTSOxuk9VzhVCB6kqcYFt9zjdwP4NSG5Ii5sDKvD8hSklOSQRIFENxVbLc3WWTL0gLX3vKijPHH19V34HUiM09mEVZVcqjzkWnOG42hKLYEkYp00yqrWBTHh9jKesR-AfpVylSC5a24Rc2u0OTsRMVTRWkrKD-gHZ4fseYo5BXxqzmUXMPxcL0uCxdmSJ3woMcXz82B3F4XTp")' }}></div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          <aside className="hidden lg:block lg:col-span-3 sticky top-24">
            <button className="w-full mb-6 flex items-center justify-center gap-2 rounded-lg bg-primary py-3 px-4 text-white font-bold text-sm hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-[20px]">add</span>
              <span>Start New Topic</span>
            </button>
            <nav className="flex flex-col gap-1">
              <div className="px-3 pb-2 pt-1">
                <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Categories</h3>
              </div>
              {categories.map((cat) => (
                <Link
                  key={cat.name}
                  href="#"
                  className={`group flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                    cat.active
                      ? 'bg-white dark:bg-slate-800 shadow-sm ring-1 ring-slate-900/5 dark:ring-white/10 text-primary font-medium'
                      : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <span className={`material-symbols-outlined text-[22px] ${cat.active ? '' : 'text-slate-400 group-hover:text-primary'}`} style={cat.active ? { fontVariationSettings: "'FILL' 1" } : {}}>
                    {cat.icon}
                  </span>
                  <span>{cat.name}</span>
                </Link>
              ))}
              <div className="my-4 border-t border-slate-200 dark:border-slate-800"></div>
              <div className="px-3 pb-2">
                <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">My Activity</h3>
              </div>
              <Link href="#" className="group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors">
                <span className="material-symbols-outlined text-[22px] text-slate-400 group-hover:text-primary">forum</span>
                <span>My Threads</span>
              </Link>
              <Link href="#" className="group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors">
                <span className="material-symbols-outlined text-[22px] text-slate-400 group-hover:text-primary">bookmark</span>
                <span>Saved Topics</span>
              </Link>
            </nav>
          </aside>

          <section className="lg:col-span-6 flex flex-col gap-6">
            <div className="lg:hidden">
              <button className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary py-3 px-4 text-white font-bold text-sm shadow-md">
                <span className="material-symbols-outlined">add</span>
                <span>Start New Topic</span>
              </button>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 px-4">
              <div className="flex gap-8 overflow-x-auto">
                <Link href="#" className="flex items-center justify-center border-b-2 border-primary py-4 px-1">
                  <span className="text-primary text-sm font-bold tracking-wide">Latest</span>
                </Link>
                <Link href="#" className="flex items-center justify-center border-b-2 border-transparent py-4 px-1 hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                  <span className="text-slate-500 dark:text-slate-400 text-sm font-bold tracking-wide">Top</span>
                </Link>
                <Link href="#" className="flex items-center justify-center border-b-2 border-transparent py-4 px-1 hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                  <span className="text-slate-500 dark:text-slate-400 text-sm font-bold tracking-wide">Unanswered</span>
                </Link>
                <Link href="#" className="flex items-center justify-center border-b-2 border-transparent py-4 px-1 hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                  <span className="text-slate-500 dark:text-slate-400 text-sm font-bold tracking-wide">Following</span>
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {discussions.map((post, idx) => (
                <article
                  key={idx}
                  className={`flex flex-col sm:flex-row gap-4 bg-white dark:bg-slate-900 p-5 rounded-xl border shadow-sm group hover:border-slate-300 dark:hover:border-slate-700 transition-all ${
                    post.pinned ? 'border-primary/20 relative overflow-hidden' : 'border-slate-200 dark:border-slate-800'
                  }`}
                >
                  {post.pinned && <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>}
                  <div className="shrink-0 pt-1">
                    <div className="bg-center bg-no-repeat bg-cover rounded-full size-12 shadow-sm ring-2 ring-slate-100 dark:ring-slate-800" style={{ backgroundImage: `url("${post.avatar}")` }}></div>
                  </div>
                  <div className="flex flex-1 flex-col gap-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-slate-500 dark:text-slate-400 text-xs font-medium">{post.author}</span>
                      {post.verified && (
                        <span className="flex items-center gap-0.5 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-bold px-1.5 py-0.5 rounded border border-green-200 dark:border-green-800">
                          <span className="material-symbols-outlined text-[12px]">verified</span> Verified Seller
                        </span>
                      )}
                      {post.badge && (
                        <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">{post.badge}</span>
                      )}
                      {post.time && (
                        <>
                          <span className="text-slate-300 dark:text-slate-600">•</span>
                          <span className="text-slate-400 dark:text-slate-500 text-xs">{post.time}</span>
                        </>
                      )}
                      {post.category && (
                        <>
                          <span className="text-slate-300 dark:text-slate-600">•</span>
                          <span className="text-slate-500 dark:text-slate-400 text-xs font-medium">in {post.category}</span>
                        </>
                      )}
                    </div>
                    <h3 className="text-slate-900 dark:text-white text-lg font-semibold leading-tight group-hover:text-primary transition-colors cursor-pointer">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-2">
                      {post.preview}
                    </p>
                    <div className="flex items-center gap-4 mt-2">
                      <button className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-xs font-medium hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-[16px]">chat_bubble</span>
                        <span>{post.replies} Replies</span>
                      </button>
                      <button className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-xs font-medium hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-[16px]">visibility</span>
                        <span>{post.views} Views</span>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <aside className="hidden lg:block lg:col-span-3 sticky top-24">
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
              <h3 className="font-bold text-slate-900 dark:text-white mb-4">Top Contributors</h3>
              <div className="space-y-4">
                {[
                  { name: 'Alex Chen', replies: 1247, badge: 'Gold' },
                  { name: 'Sarah Miller', replies: 892, badge: 'Silver' },
                  { name: 'Mike Johnson', replies: 654, badge: 'Bronze' },
                ].map((user, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="size-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-600 dark:text-slate-300">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-900 dark:text-white">{user.name}</p>
                      <p className="text-xs text-slate-500">{user.replies} replies</p>
                    </div>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                      user.badge === 'Gold' ? 'bg-yellow-100 text-yellow-700' :
                      user.badge === 'Silver' ? 'bg-gray-100 text-gray-700' :
                      'bg-orange-100 text-orange-700'
                    }`}>{user.badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
