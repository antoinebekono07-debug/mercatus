'use client';

import Link from 'next/link';

export default function AIDecisionReviewPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
      <header className="flex items-center justify-between whitespace-nowrap border-b border-[#f0f2f4] dark:border-gray-800 px-6 lg:px-10 py-3 bg-white dark:bg-[#101922]">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-4 text-[#111418] dark:text-white">
            <div className="size-6 text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">auto_awesome</span>
            </div>
            <h2 className="text-lg font-bold">myzone</h2>
          </Link>
          <div className="hidden md:flex flex-1 max-w-64">
            <div className="flex items-center rounded-lg bg-[#f0f2f4] dark:bg-[#1c2632] h-10 px-3 w-full">
              <span className="material-symbols-outlined text-xl text-[#617589]">search</span>
              <input className="bg-transparent border-none focus:ring-0 text-sm ml-2" placeholder="Search" />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/seller/dashboard" className="text-sm font-medium">Dashboard</Link>
            <Link href="#" className="text-sm font-medium">Agent Activity</Link>
            <Link href="/products" className="text-sm font-medium">Marketplace</Link>
            <Link href="/seller/settings" className="text-sm font-medium">Settings</Link>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-[#f0f2f4] dark:bg-[#1c2632]">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-[#f0f2f4] dark:bg-[#1c2632]">
              <span className="material-symbols-outlined">account_circle</span>
            </button>
            <div className="w-10 h-10 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB3qlY0hBdQJFuM6Fr2q0WM5gvVDQtAYelhts3y7ESE-EkJskaplKR2wi5unTOEppA5jHju9LmjRrQkriy_QDazGEQ3ueQhtFpoMdqXi-wZ3PXilYqz40RtZPEzoHKDcJsYcBEf-Tl_M26vOKNImH57mnOx4I7452FLztj1zfS5hXMdPDv0BzTFTpCeeORwxc7iLkBDc5VGO1VT9tgI-XQrr0--0yfJMDNxfi83BEIqJTbFBJvbQgM7h4FpXyH54HKbNGfnr3Ozup5C")' }}></div>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-12">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-[#617589] mb-4">
            <Link href="#" className="hover:text-primary">Agent Activity</Link>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <span>Decision Review</span>
          </div>
          <h1 className="text-3xl font-black">AI Decision Review</h1>
          <p className="text-[#617589] mt-2">Review and approve AI-suggested actions</p>
        </div>

        <div className="space-y-6">
          <div className="bg-white dark:bg-[#1a2632] rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">shopping_cart</span>
                </div>
                <div>
                  <h3 className="font-bold">Auto-Reorder Suggestion</h3>
                  <p className="text-sm text-[#617589]">ZonePro XR1 Headset is running low</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded-full">PENDING</span>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 mb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-primary text-sm">auto_awesome</span>
                <span className="text-sm font-semibold">AI Recommendation</span>
              </div>
              <p className="text-sm text-[#617589]">
                Based on your purchase history and current stock levels, the AI suggests reordering 10 units of ZonePro XR1 Headset to maintain availability.
              </p>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 py-2 bg-red-100 text-red-700 font-semibold rounded-lg hover:bg-red-200">
                Reject
              </button>
              <button className="flex-1 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-blue-600">
                Approve Order
              </button>
            </div>
          </div>

          <div className="bg-white dark:bg-[#1a2632] rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="material-symbols-outlined text-green-600">savings</span>
                </div>
                <div>
                  <h3 className="font-bold">Price Optimization</h3>
                  <p className="text-sm text-[#617589]">Dynamic pricing opportunity detected</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">APPROVED</span>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-green-600 text-sm">check_circle</span>
                <span className="text-sm font-semibold">Price adjusted</span>
              </div>
              <p className="text-sm text-[#617589]">
                Your Smart Fitness Watch Pro price was adjusted from $199 to $189 based on market analysis. Estimated monthly revenue increase: +12%
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-[#1a2632] rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="material-symbols-outlined text-blue-600">translate</span>
                </div>
                <div>
                  <h3 className="font-bold">Listing Translation</h3>
                  <p className="text-sm text-[#617589]">New translations ready for review</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">READY</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {['Spanish', 'French', 'German', 'Japanese'].map((lang) => (
                <div key={lang} className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <span className="font-medium">{lang}</span>
                  <button className="text-primary text-sm font-medium">View</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
