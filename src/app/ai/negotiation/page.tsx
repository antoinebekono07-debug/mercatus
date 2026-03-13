'use client';

import Link from 'next/link';

export default function NegotiationHubPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
      <header className="flex items-center justify-between whitespace-nowrap border-b border-[#283039] px-6 lg:px-40 py-3 bg-white dark:bg-[#101922]">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-4 text-white">
            <div className="size-6 text-primary flex items-center justify-center">
              <span className="material-symbols-outlined">hub</span>
            </div>
            <h2 className="text-white text-lg font-bold">myzone</h2>
          </Link>
          <div className="hidden md:flex items-center gap-9">
            <Link href="/products" className="text-[#9dabb9] hover:text-white text-sm font-medium">Marketplace</Link>
            <Link href="#" className="text-white text-sm font-medium">Agent Hub</Link>
            <Link href="#" className="text-[#9dabb9] hover:text-white text-sm font-medium">Vault</Link>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="hidden lg:flex items-center rounded-lg bg-[#283039] h-10 px-3">
            <span className="material-symbols-outlined text-sm text-[#9dabb9]">search</span>
            <input className="bg-transparent border-none focus:ring-0 text-sm text-white ml-2 placeholder:text-[#9dabb9]" placeholder="Search orders..." />
          </div>
          <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-[#283039] text-white">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <div className="w-10 h-10 rounded-full bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDkLKvEtMEp8M3HD0No1h2-WGWIaM92aZNjEMlviT6LSv2PkHXj59p47xZykmq3iW-CG1umeRO-5shr_d4kDJ0jmhvEQQ8xdAECviz6zs4L2UgSOxgbMhS0lTAZF-4qKG9ZJdSQRYjPre8U9JqLsjScUUagp8XLf1NSXeizRv_eT68W7s0B9XbzTluf4XPBr7wRe1IWl41-LhnRSoK7Q8bjJOmqHIdxdtrEeNJfP9AmS1geuBSvoXx3yA0gsKfeJToPPHJ4XFpyMqHC")' }}></div>
        </div>
      </header>

      <main className="flex-1 p-6 lg:p-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-black text-white mb-2">Negotiation Hub</h1>
            <p className="text-[#9dabb9]">Manage AI-powered price negotiations with buyers</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-[#1c252e] rounded-2xl border border-[#283039] overflow-hidden">
                <div className="p-4 border-b border-[#283039] flex items-center justify-between">
                  <h2 className="font-bold text-white">Active Negotiations</h2>
                  <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">3 Active</span>
                </div>
                <div className="divide-y divide-[#283039]">
                  {[
                    { buyer: 'TechGiant Inc.', item: 'ZonePro XR1 (500 units)', offer: '$12,500', target: '$15,000', status: 'Counter-offer' },
                    { buyer: 'GlobalRetail', item: 'Smart Watch Pro (1000 units)', offer: '$18,000', target: '$20,000', status: 'Awaiting Response' },
                    { buyer: 'StartupXYZ', item: 'Home Hub Mini (250 units)', offer: '$5,500', target: '$6,000', status: 'Near Agreement' },
                  ].map((negotiation, idx) => (
                    <div key={idx} className="p-4 flex items-center justify-between hover:bg-[#283039]/30">
                      <div>
                        <p className="font-semibold text-white">{negotiation.buyer}</p>
                        <p className="text-sm text-[#9dabb9]">{negotiation.item}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-[#9dabb9]">Offer: <span className="text-white font-medium">{negotiation.offer}</span></p>
                        <p className="text-xs text-[#9dabb9]">Target: {negotiation.target}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        negotiation.status === 'Near Agreement' ? 'bg-green-500/20 text-green-400' :
                        negotiation.status === 'Counter-offer' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>{negotiation.status}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#1c252e] rounded-2xl border border-[#283039] p-6">
                <h2 className="font-bold text-white mb-4">Negotiation Details</h2>
                <div className="space-y-4">
                  <div className="p-4 bg-[#283039] rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="material-symbols-outlined text-blue-400">shopping_cart</span>
                      <span className="font-medium text-white">TechGiant Inc.</span>
                    </div>
                    <p className="text-sm text-[#9dabb9] mb-3">Initial offer: $12,500 for 500 units</p>
                    <div className="space-y-2 pl-4 border-l-2 border-blue-500">
                      <p className="text-sm text-white">Counter: $13,200</p>
                      <p className="text-sm text-white">Counter: $14,000</p>
                      <p className="text-sm text-blue-400">Current: $14,500</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-[#1c252e] rounded-2xl border border-[#283039] p-6">
                <h2 className="font-bold text-white mb-4">AI Insights</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary">insights</span>
                    <p className="text-sm text-[#9dabb9]">Buyer has history of accepting 8% below asking price</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-green-400">trending_up</span>
                    <p className="text-sm text-[#9dabb9]">Market demand for this product is high - you have leverage</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-yellow-400">schedule</span>
                    <p className="text-sm text-[#9dabb9]">Average response time: 2 hours</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-primary/10 rounded-xl border border-primary/20">
                  <p className="text-sm text-white font-medium mb-2">AI Recommendation</p>
                  <p className="text-sm text-[#9dabb9]">Counter at $14,800 - highest probability of acceptance</p>
                </div>
              </div>

              <div className="bg-[#1c252e] rounded-2xl border border-[#283039] p-6">
                <h2 className="font-bold text-white mb-4">Quick Actions</h2>
                <div className="space-y-3">
                  <button className="w-full py-3 bg-primary text-white rounded-lg font-medium hover:bg-blue-600">
                    Make Counter Offer
                  </button>
                  <button className="w-full py-3 border border-[#283039] text-white rounded-lg font-medium hover:bg-[#283039]">
                    Accept Current Offer
                  </button>
                  <button className="w-full py-3 border border-red-500/50 text-red-400 rounded-lg font-medium hover:bg-red-500/10">
                    End Negotiation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
