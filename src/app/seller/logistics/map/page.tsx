'use client';

import Link from 'next/link';

export default function SupplyChainMapPage() {
  return (
    <div className="flex flex-col h-screen bg-background-light dark:bg-background-dark overflow-hidden">
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-[#101922] px-6 py-3 z-50">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-3 text-primary">
            <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
              <span className="material-symbols-outlined">hub</span>
            </div>
            <h2 className="text-slate-900 dark:text-white text-lg font-bold">myzone <span className="font-normal text-slate-500">Seller Hub</span></h2>
          </Link>
          <div className="hidden lg:flex items-center gap-6">
            <Link href="/seller/dashboard" className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm font-medium">Dashboard</Link>
            <Link href="/seller/logistics/map" className="text-primary text-sm font-bold border-b-2 border-primary">Supply Chain Map</Link>
            <Link href="/seller/products" className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm font-medium">Inventory</Link>
            <Link href="/seller/analytics" className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm font-medium">Analytics</Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex">
            <div className="flex items-center rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#1c2127] h-10 px-3">
              <span className="material-symbols-outlined text-slate-400">search</span>
              <input className="bg-transparent border-none focus:ring-0 text-sm ml-2" placeholder="Search PO # or Tracking..." />
            </div>
          </div>
          <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg relative">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-[#101922]"></span>
          </button>
        </div>
      </header>

      <main className="flex flex-1 overflow-hidden">
        <aside className="w-16 lg:w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-[#101922] flex flex-col">
          <nav className="flex-1 flex flex-col gap-1 p-2">
            <Link href="/seller/logistics/map" className="flex items-center gap-3 px-3 py-3 rounded-lg bg-primary/10 text-primary">
              <span className="material-symbols-outlined">public</span>
              <span className="text-sm font-semibold hidden lg:block">Global Map</span>
            </Link>
            <Link href="/seller/logistics" className="flex items-center gap-3 px-3 py-3 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800">
              <span className="material-symbols-outlined">package_2</span>
              <span className="text-sm font-medium hidden lg:block">Active Shipments</span>
            </Link>
            <Link href="#" className="flex items-center gap-3 px-3 py-3 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800">
              <span className="material-symbols-outlined">factory</span>
              <span className="text-sm font-medium hidden lg:block">Suppliers</span>
            </Link>
            <Link href="#" className="flex items-center gap-3 px-3 py-3 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800">
              <span className="material-symbols-outlined">local_shipping</span>
              <span className="text-sm font-medium hidden lg:block">Carriers</span>
            </Link>
            <Link href="#" className="flex items-center gap-3 px-3 py-3 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800">
              <span className="material-symbols-outlined">inventory</span>
              <span className="text-sm font-medium hidden lg:block">Warehouses</span>
            </Link>
          </nav>
        </aside>

        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-bold">Global Supply Chain</h1>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-xs font-medium text-green-500">Live</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1.5 text-sm font-medium bg-slate-100 dark:bg-slate-800 rounded-lg">Last 24h</button>
              <button className="px-3 py-1.5 text-sm font-medium text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">Last 7 days</button>
              <button className="px-3 py-1.5 text-sm font-medium text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">Last 30 days</button>
            </div>
          </div>

          <div className="flex-1 flex">
            <div className="flex-1 relative bg-gradient-to-br from-[#1c2127] to-[#101922] flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, #137fec 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-primary/10 border-2 border-primary/30 mb-4">
                  <span className="material-symbols-outlined text-5xl text-primary">public</span>
                </div>
                <p className="text-slate-500 text-sm">Interactive map visualization</p>
                <p className="text-slate-600 text-xs mt-1">Connect to live logistics API</p>
              </div>
              {[
                { top: '30%', left: '25%', label: 'Shanghai', shipments: 1240 },
                { top: '35%', left: '75%', label: 'Los Angeles', shipments: 856 },
                { top: '40%', left: '50%', label: 'Rotterdam', shipments: 642 },
                { top: '45%', left: '20%', label: 'New York', shipments: 923 },
              ].map((loc, idx) => (
                <div key={idx} className="absolute" style={{ top: loc.top, left: loc.left }}>
                  <div className="relative">
                    <div className="w-3 h-3 bg-primary rounded-full pulse-blue"></div>
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                      <span className="text-xs font-medium text-white">{loc.label}</span>
                    </div>
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-primary/20 px-2 py-0.5 rounded text-xs text-primary font-bold">
                      {loc.shipments}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-80 border-l border-slate-200 dark:border-slate-800 bg-white dark:bg-[#101922] overflow-y-auto">
              <div className="p-4 border-b border-slate-200 dark:border-slate-800">
                <h3 className="font-bold mb-3">Active Shipments</h3>
                <div className="space-y-3">
                  {[
                    { id: 'MZ-88291', from: 'Shanghai', to: 'Los Angeles', status: 'In Transit', progress: 65 },
                    { id: 'MZ-88290', from: 'Rotterdam', to: 'New York', status: 'Customs', progress: 80 },
                    { id: 'MZ-88289', from: 'Shenzhen', to: 'Hamburg', status: 'Delivered', progress: 100 },
                  ].map((shipment, idx) => (
                    <div key={idx} className="p-3 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-primary cursor-pointer">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-semibold text-sm">{shipment.id}</span>
                        <span className={`text-xs px-2 py-0.5 rounded ${
                          shipment.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                          shipment.status === 'Customs' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-blue-100 text-blue-700'
                        }`}>{shipment.status}</span>
                      </div>
                      <p className="text-xs text-slate-500">{shipment.from} → {shipment.to}</p>
                      <div className="mt-2 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: `${shipment.progress}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-bold mb-3">Route Analytics</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Avg. Transit Time</span>
                    <span className="font-medium">12.4 days</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">On-Time Rate</span>
                    <span className="font-medium text-green-500">94.2%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Active Routes</span>
                    <span className="font-medium">48</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Pending Customs</span>
                    <span className="font-medium text-yellow-500">12</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
