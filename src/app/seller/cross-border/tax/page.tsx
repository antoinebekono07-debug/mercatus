'use client';

import Link from 'next/link';

export default function CrossBorderTaxPage() {
  return (
    <div className="flex h-screen bg-background-light dark:bg-background-dark">
      <aside className="w-64 bg-white dark:bg-[#1a2632] border-r border-gray-200 dark:border-[#2a3845] flex flex-col">
        <div className="p-4">
          <div className="flex gap-3 items-center mb-8">
            <div className="w-10 h-10 rounded-full bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDXxWwmLqBodmcumNMDvRhGCL88YOGOMTgXAfJA75wicZyawGgtu617u7qud4En-BXYN8xER8-c7FvQ0ygj1ie_UIUGPH08cSRaFya8vwWRTqRnClWIaR82-cWT42zHLwvJdCxsDt608wZi41kU0iKqCOb1MrhCo2yM5eY1TAaJOJr1FHuLJn7L7mSJrAMDD5uvYJ8vMpi7LvnLhfqRBzFwPPM8V65gpBukiTnFjexf_lx-gM4eq7qKqPhkXhwXCAHy9mCrO2R3s4XZ")' }}></div>
            <div>
              <h1 className="text-base font-bold">myzone</h1>
              <p className="text-xs text-[#617589]">Seller Dashboard</p>
            </div>
          </div>
          <nav className="flex flex-col gap-2">
            <Link href="/seller/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#2a3845]">
              <span className="material-symbols-outlined">dashboard</span>
              <span className="text-sm font-medium">Overview</span>
            </Link>
            <Link href="/seller/logistics" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#2a3845]">
              <span className="material-symbols-outlined">local_shipping</span>
              <span className="text-sm font-medium">Logistics</span>
            </Link>
            <Link href="/seller/cross-border" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary">
              <span className="material-symbols-outlined">payments</span>
              <span className="text-sm font-medium">Finance & Tax</span>
            </Link>
            <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#2a3845]">
              <span className="material-symbols-outlined">gavel</span>
              <span className="text-sm font-medium">Compliance</span>
            </Link>
            <Link href="/seller/settings" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#2a3845]">
              <span className="material-symbols-outlined">settings</span>
              <span className="text-sm font-medium">Settings</span>
            </Link>
          </nav>
        </div>
        <div className="mt-auto p-4">
          <button className="w-full py-2 bg-primary text-white rounded-lg font-bold hover:bg-blue-600">
            Create Shipment
          </button>
        </div>
      </aside>

      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white dark:bg-[#1a2632] border-b border-gray-200 dark:border-[#2a3845] px-8 py-5">
          <div className="max-w-[1400px] mx-auto">
            <h1 className="text-2xl font-black mb-1">Cross-Border Tax Management</h1>
            <p className="text-[#617589] text-sm">Manage global duties, taxes, and automate compliance rules.</p>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-[1400px] mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-[#1a2632] rounded-xl p-6 border border-gray-200 dark:border-[#2a3845]">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[#617589] text-sm">Total Duties Paid (YTD)</span>
                  <span className="material-symbols-outlined text-[#617589]">account_balance</span>
                </div>
                <p className="text-3xl font-bold">$4,230.15</p>
                <span className="text-green-600 text-xs font-medium">↑ 12%</span>
              </div>
              <div className="bg-white dark:bg-[#1a2632] rounded-xl p-6 border border-gray-200 dark:border-[#2a3845]">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[#617589] text-sm">Processed Declarations</span>
                  <span className="material-symbols-outlined text-[#617589]">receipt_long</span>
                </div>
                <p className="text-3xl font-bold">842</p>
                <span className="text-[#617589] text-xs">This Month</span>
              </div>
              <div className="bg-white dark:bg-[#1a2632] rounded-xl p-6 border border-gray-200 dark:border-[#2a3845]">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[#617589] text-sm">Compliance Issues</span>
                  <span className="material-symbols-outlined text-amber-500">warning</span>
                </div>
                <p className="text-3xl font-bold">2</p>
                <span className="text-amber-600 text-sm">HS Code Mismatch</span>
              </div>
            </div>

            <div className="bg-white dark:bg-[#1a2632] rounded-xl border border-gray-200 dark:border-[#2a3845] overflow-hidden">
              <div className="px-6 py-5 border-b border-gray-200 dark:border-[#2a3845] flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">globe_uk</span>
                    Automated Tax & Duty Rules
                  </h2>
                  <p className="text-sm text-[#617589]">Configure automated calculations and tax remittance by jurisdiction.</p>
                </div>
                <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-blue-600 flex items-center gap-2">
                  <span className="material-symbols-outlined">add</span>
                  Add Jurisdiction
                </button>
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { region: 'EU', code: 'EU', name: 'European Union', scheme: 'IOSS Scheme', status: 'Active', rate: 'Dynamic', deMinimis: '€150.00' },
                  { region: 'UK', code: 'UK', name: 'United Kingdom', scheme: 'HMRC Integrated', status: 'Active', rate: '20.00%', deMinimis: '£135.00' },
                  { region: 'CA', code: 'CA', name: 'Canada', scheme: 'CBSA (DDP)', status: 'Setup Required', rate: '5% - 15%', deMinimis: 'CAD $40.00', warning: true },
                ].map((jurisdiction, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-gray-200 dark:border-[#2a3845] hover:border-primary/50 transition-all">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`size-10 rounded-full flex items-center justify-center font-bold text-sm ${
                          jurisdiction.code === 'EU' ? 'bg-blue-100 text-blue-600' :
                          jurisdiction.code === 'UK' ? 'bg-red-100 text-red-600' :
                          'bg-gray-100 text-gray-600'
                        }`}>
                          {jurisdiction.code}
                        </div>
                        <div>
                          <p className="font-bold">{jurisdiction.name}</p>
                          <p className="text-xs text-[#617589]">{jurisdiction.scheme}</p>
                        </div>
                      </div>
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                        jurisdiction.status === 'Active' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-amber-100 text-amber-700'
                      }`}>
                        {jurisdiction.status}
                      </span>
                    </div>
                    <div className="space-y-2 mb-4 p-3 bg-gray-50 dark:bg-[#202d3a] rounded-lg">
                      <div className="flex justify-between text-xs">
                        <span className="text-[#617589]">{jurisdiction.code === 'EU' ? 'Applied Rate' : jurisdiction.code === 'UK' ? 'Standard VAT' : 'GST/HST'}</span>
                        <span className="font-bold">{jurisdiction.rate}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-[#617589]">De Minimis</span>
                        <span className="font-medium">{jurisdiction.deMinimis}</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold">Auto-Calculate Duties</span>
                      <button className={`w-9 h-5 rounded-full ${jurisdiction.status === 'Active' ? 'bg-primary' : 'bg-gray-300'} relative`}>
                        <span className={`absolute top-1 w-3.5 h-3.5 bg-white rounded-full transition-transform ${jurisdiction.status === 'Active' ? 'left-5' : 'left-1'}`}></span>
                      </button>
                    </div>
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
