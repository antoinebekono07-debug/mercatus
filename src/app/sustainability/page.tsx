'use client';

import Link from 'next/link';

export default function SustainabilityPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f6f8f6] dark:bg-[#102216] font-display">
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#f0f4f2] dark:border-[#1d3d27] bg-white dark:bg-[#102216] px-6 lg:px-10 py-3 sticky top-0 z-40">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-4 text-[#111813] dark:text-white">
            <div className="size-6 text-primary">
              <span className="material-symbols-outlined text-3xl">eco</span>
            </div>
            <h2 className="text-lg font-bold leading-tight">myzone</h2>
          </Link>
          <nav className="hidden md:flex items-center gap-9">
            <Link href="/products" className="text-sm font-medium hover:text-primary transition-colors">Marketplace</Link>
            <Link href="/sustainability" className="text-sm font-medium text-primary">Sustainability</Link>
            <Link href="/seller/register" className="text-sm font-medium hover:text-primary transition-colors">Sellers</Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
          </nav>
        </div>
        <div className="flex flex-1 justify-end gap-6 items-center">
          <div className="hidden lg:flex">
            <div className="flex items-center rounded-lg bg-[#f0f4f2] dark:bg-[#1d3d27] h-10 px-3">
              <span className="material-symbols-outlined text-xl text-[#61896f]">search</span>
              <input className="bg-transparent border-none focus:ring-0 text-[#111813] dark:text-white placeholder-[#61896f] text-sm ml-2" placeholder="Search eco-products" />
            </div>
          </div>
          <Link href="/auth/login" className="flex items-center justify-center rounded-lg h-10 px-4 bg-primary text-[#111813] text-sm font-bold">
            Sign In
          </Link>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center">
        <div className="w-full max-w-[960px] px-4 py-8">
          <nav className="flex flex-wrap gap-2 py-4">
            <Link href="/" className="text-[#61896f] text-sm font-medium hover:underline">Home</Link>
            <span className="text-[#61896f] text-sm font-medium">/</span>
            <Link href="#" className="text-[#61896f] text-sm font-medium hover:underline">Certified Sellers</Link>
            <span className="text-[#61896f] text-sm font-medium">/</span>
            <span className="text-[#111813] dark:text-white text-sm font-medium">GreenEarth Collective</span>
          </nav>

          <div className="flex flex-col md:flex-row gap-6 p-6 bg-white dark:bg-[#162e1e] rounded-xl shadow-sm border border-[#f0f4f2] dark:border-[#1d3d27] mb-8">
            <div className="relative">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32 border-4 border-primary/20" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA54NkmDRuIL5rAVSwCt9TbyjxVTKPaci1j7BhVkyOan_reNq2-D955uX9l0WMohsIXWYh_QFY8_VljoO2k3eapQSyz9Aq0qOrlOiPURzOiyVHlnxHAsL-3-uvT-qjoc4vntZ3R8nsZSyyBz9yi8hKocU59Aw38kusGNoVruTzNm9Pmlq38LL2tbK4YozEXRa9FZtFmr8qFbLL-aFdNUaTB719DpKacFc77W2kDc80IeAdCzx4qlR-01deLTX2BZZsbsoT-0dzeKklm")' }}></div>
              <div className="absolute -bottom-1 -right-1 bg-white dark:bg-[#102216] rounded-full p-1 shadow-lg">
                <div className="bg-gradient-to-br from-primary to-green-600 p-1.5 rounded-full flex items-center justify-center text-white border border-yellow-500/30">
                  <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>shield_with_heart</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center flex-1">
              <div className="flex items-center gap-3">
                <h1 className="text-[#111813] dark:text-white text-2xl font-bold">GreenEarth Collective</h1>
                <span className="bg-primary/10 text-green-600 px-2 py-0.5 rounded text-xs font-bold uppercase border border-primary/20">Elite Seller</span>
              </div>
              <p className="text-[#61896f] text-base font-normal mt-1 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">verified_user</span>
                Member since 2022 • Carbon Neutral Verified
              </p>
              <div className="flex gap-4 mt-4">
                <button className="bg-primary text-[#111813] px-6 py-2 rounded-lg font-bold text-sm">Message Seller</button>
                <button className="bg-[#f0f4f2] dark:bg-[#1d3d27] text-[#111813] dark:text-white px-6 py-2 rounded-lg font-bold text-sm">Follow</button>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#162e1e] rounded-2xl shadow-lg overflow-hidden">
            <div className="relative h-40 bg-gradient-to-br from-[#102216] to-[#1d3d27] flex flex-col items-center justify-center text-center p-6 border-b border-primary/20">
              <div className="mb-3 relative">
                <div className="bg-gradient-to-br from-primary to-green-600 w-16 h-16 rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(19,236,91,0.4)] border-2 border-yellow-500/40">
                  <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>shield_with_heart</span>
                </div>
                <div className="absolute -top-1 -right-1 bg-yellow-500 w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#102216]">
                  <span className="material-symbols-outlined text-[10px] text-[#102216] font-bold">star</span>
                </div>
              </div>
              <h2 className="text-white text-2xl font-bold">Eco-Conscious Excellence</h2>
              <p className="text-primary text-sm font-medium uppercase tracking-[0.2em] mt-1">Certified Elite Performance</p>
            </div>

            <div className="p-8">
              <div className="mb-8">
                <h3 className="text-[#111813] dark:text-white text-lg font-bold mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">verified</span>
                  Rigorous Certification Criteria
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 group">
                    <div className="mt-1 bg-primary/10 text-primary p-1 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-lg">check</span>
                    </div>
                    <div>
                      <p className="font-bold text-[#111813] dark:text-white">Elite Eco-Score Grade &apos;A&apos;</p>
                      <p className="text-sm text-[#61896f]">Maintains a consistent top-tier sustainability rating based on manufacturing, material sourcing, and waste management.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="mt-1 bg-primary/10 text-primary p-1 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-lg">check</span>
                    </div>
                    <div>
                      <p className="font-bold text-[#111813] dark:text-white">Carbon Neutral Shipping</p>
                      <p className="text-sm text-[#61896f]">Offsets 100% of carbon emissions from shipping through verified carbon credit programs.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="mt-1 bg-primary/10 text-primary p-1 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-lg">check</span>
                    </div>
                    <div>
                      <p className="font-bold text-[#111813] dark:text-white">Plastic-Free Packaging</p>
                      <p className="text-sm text-[#61896f]">Uses 100% recyclable or biodegradable packaging materials in all shipments.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="mt-1 bg-primary/10 text-primary p-1 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-lg">check</span>
                    </div>
                    <div>
                      <p className="font-bold text-[#111813] dark:text-white">Ethical Supply Chain</p>
                      <p className="text-sm text-[#61896f]">Verified fair labor practices and sustainable sourcing throughout the entire supply chain.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { icon: 'forest', value: '2,450 kg', label: 'CO₂ Offset' },
                  { icon: 'delete', value: '15,000+', label: 'Plastic Items Saved' },
                  { icon: 'volunteer_activism', value: '$25,000', label: 'Green Donations' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-[#f6f8f6] dark:bg-[#102216] rounded-xl p-4 text-center">
                    <span className="material-symbols-outlined text-3xl text-primary mb-2">{stat.icon}</span>
                    <p className="text-2xl font-bold text-[#111813] dark:text-white">{stat.value}</p>
                    <p className="text-sm text-[#61896f]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
