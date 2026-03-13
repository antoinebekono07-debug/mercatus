import Link from "next/link";

const paymentGateways = [
  { name: "Stripe Connect", currency: "USD, EUR, GBP, CAD", nextPayout: "Tomorrow, 4:00 PM", status: "Healthy", color: "#635BFF" },
  { name: "PayPal Commerce", currency: "USD, EUR, GBP", nextPayout: "Nov 15, 9:00 AM", status: "Healthy", color: "#003087" },
];

const countries = [
  { code: "US", name: "United States", orders: 847, revenue: "$124,567" },
  { code: "DE", name: "Germany", orders: 423, revenue: "$67,234" },
  { code: "GB", name: "United Kingdom", orders: 312, revenue: "$45,891" },
  { code: "FR", name: "France", orders: 289, revenue: "$38,456" },
  { code: "JP", name: "Japan", orders: 156, revenue: "$28,901" },
  { code: "CA", name: "Canada", orders: 134, revenue: "$19,876" },
];

const regulations = [
  { country: "EU", requirement: "VAT Registration", status: "Compliant" },
  { country: "US", requirement: "FDA Approval", status: "Pending" },
  { country: "China", requirement: "CCC Certification", status: "Compliant" },
];

export default function SellerCrossBorderPage() {
  return (
    <div className="flex h-screen bg-background-light dark:bg-background-dark">
      <aside className="w-64 bg-white dark:bg-[#1A2633] border-r border-[#e5e7eb] dark:border-[#2d3b4e] flex flex-col shrink-0">
        <div className="h-16 flex items-center px-6 border-b border-[#f0f2f4] dark:border-[#2d3b4e]">
          <div className="flex items-center gap-3">
            <div className="bg-primary aspect-square rounded-lg size-8 flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-[20px]">hub</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-[#111418] dark:text-white text-lg font-bold">myzone</h1>
              <span className="text-[#617589] dark:text-[#94a3b8] text-xs font-medium">Seller Hub</span>
            </div>
          </div>
        </div>
        <nav className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-1">
          {[
            { icon: "dashboard", label: "Dashboard", href: "/seller/hub" },
            { icon: "shopping_cart", label: "Orders", href: "/seller/orders" },
            { icon: "inventory_2", label: "Inventory", href: "/seller/products" },
            { icon: "local_shipping", label: "Logistics", href: "/seller/logistics" },
            { icon: "public", label: "Cross-Border", href: "/seller/cross-border", active: true },
            { icon: "payments", label: "Earnings", href: "/seller/earnings" },
            { icon: "settings", label: "Settings", href: "/seller/settings" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                item.active
                  ? "bg-primary/10 text-primary"
                  : "text-[#617589] dark:text-[#94a3b8] hover:bg-[#f0f2f4] dark:hover:bg-[#2d3b4e]"
              }`}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>

      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white dark:bg-[#1A2633] border-b border-[#e5e7eb] dark:border-[#2d3b4e] px-8 py-5">
          <div className="flex flex-wrap justify-between items-end gap-3 max-w-[1400px] mx-auto w-full">
            <div className="flex flex-col gap-1">
              <p className="text-2xl font-black text-[#111418] dark:text-white">Cross-Border Multi-Currency Payments</p>
              <p className="text-sm text-[#617589]">Centralized hub for global transactions, payouts, and currency management.</p>
            </div>
            <div className="hidden md:flex items-center gap-3 bg-green-50 dark:bg-green-900/30 border border-green-100 dark:border-green-800 rounded-full pl-3 pr-4 py-1.5">
              <div className="bg-green-500 rounded-full p-1 text-white">
                <span className="material-symbols-outlined text-[16px]">check</span>
              </div>
              <span className="text-green-900 dark:text-green-200 text-xs font-medium">All payment gateways operational</span>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-[#1A2633] shadow-sm border border-[#e5e7eb] dark:border-[#2d3b4e]">
              <div className="flex justify-between items-start">
                <p className="text-sm text-[#617589]">Total Available Balance</p>
                <span className="material-symbols-outlined text-[#617589]">account_balance_wallet</span>
              </div>
              <div className="flex items-baseline gap-2 mt-1">
                <p className="text-3xl font-bold text-[#111418] dark:text-white">$24,892.40</p>
                <div className="flex items-center text-green-600 bg-green-50 dark:bg-green-900/20 px-1.5 py-0.5 rounded text-xs font-medium">
                  <span className="material-symbols-outlined text-[14px] mr-0.5">trending_up</span>
                  +5.2%
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-[#1A2633] shadow-sm border border-[#e5e7eb] dark:border-[#2d3b4e]">
              <div className="flex justify-between items-start">
                <p className="text-sm text-[#617589]">Pending Settlements</p>
                <span className="material-symbols-outlined text-[#617589]">hourglass_top</span>
              </div>
              <div className="flex items-baseline gap-2 mt-1">
                <p className="text-3xl font-bold text-[#111418] dark:text-white">$3,150.00</p>
                <span className="text-[#617589] bg-gray-100 dark:bg-gray-700/50 px-1.5 py-0.5 rounded text-xs font-medium">
                  Across 3 Currencies
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-[#1A2633] shadow-sm border border-[#e5e7eb] dark:border-[#2d3b4e]">
              <div className="flex justify-between items-start">
                <p className="text-sm text-[#617589]">Exchange Rate Savings</p>
                <span className="material-symbols-outlined text-primary">currency_exchange</span>
              </div>
              <div className="flex items-baseline gap-2 mt-1">
                <p className="text-3xl font-bold text-[#111418] dark:text-white">$412.85</p>
                <span className="text-primary text-sm font-medium">YTD vs Banks</span>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-white dark:bg-[#1A2633] shadow-sm border border-[#e5e7eb] dark:border-[#2d3b4e] mb-6">
            <div className="px-6 py-5 border-b border-[#e5e7eb] dark:border-[#2d3b4e] flex flex-wrap justify-between items-center gap-4 bg-gray-50/50 dark:bg-[#202d3a]/30">
              <div>
                <h3 className="text-lg font-bold text-[#111418] dark:text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">payments</span>
                  Connected Payment Systems
                </h3>
                <p className="text-sm text-[#617589] mt-1">Manage integrations, payout schedules, and gateway health.</p>
              </div>
              <button className="bg-primary hover:bg-primary/90 text-white text-sm font-bold py-2 px-4 rounded-lg flex items-center gap-2 transition-colors shadow-sm">
                <span className="material-symbols-outlined text-[20px]">add_link</span>
                Add Payment Method
              </button>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {paymentGateways.map((gateway) => (
                <div key={gateway.name} className="p-4 rounded-xl border border-[#e5e7eb] dark:border-[#2d3b4e] bg-white dark:bg-[#1A2633] hover:border-primary/50 hover:shadow-md transition-all group">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-full flex items-center justify-center font-bold text-lg border" style={{ backgroundColor: `${gateway.color}10`, color: gateway.color, borderColor: `${gateway.color}20` }}>
                        {gateway.name[0]}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#111418] dark:text-white group-hover:text-primary transition-colors">{gateway.name}</p>
                        <p className="text-xs text-[#617589]">{gateway.name === "Stripe Connect" ? "Primary Gateway" : "Alternative Method"}</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400 border border-green-100 dark:border-green-800">
                      <span className="size-1.5 rounded-full bg-green-500 mr-1.5"></span>
                      {gateway.status}
                    </span>
                  </div>
                  <div className="space-y-2 mb-4 p-3 bg-gray-50 dark:bg-[#202d3a] rounded-lg">
                    <div className="flex justify-between text-xs">
                      <span className="text-[#617589]">Currencies</span>
                      <span className="font-bold text-[#111418] dark:text-white">{gateway.currency}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-[#617589]">Next Payout</span>
                      <span className="font-medium text-[#111418] dark:text-white">{gateway.nextPayout}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-[#111418] dark:text-white">Daily Payouts</span>
                    <button className="relative inline-flex h-5 w-9 items-center rounded-full bg-primary transition-colors focus:outline-none cursor-pointer">
                      <span className="translate-x-4 inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow-sm"></span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-[#1A2633] rounded-xl p-6 border border-[#e5e7eb] dark:border-[#2d3b4e]">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-primary">public</span>
                <p className="text-sm text-[#617589]">Countries Served</p>
              </div>
              <p className="text-2xl font-bold text-[#111418] dark:text-white">24</p>
            </div>
            <div className="bg-white dark:bg-[#1A2633] rounded-xl p-6 border border-[#e5e7eb] dark:border-[#2d3b4e]">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-green-500">verified</span>
                <p className="text-sm text-[#617589]">Compliance Rate</p>
              </div>
              <p className="text-2xl font-bold text-[#111418] dark:text-white">98%</p>
            </div>
            <div className="bg-white dark:bg-[#1A2633] rounded-xl p-6 border border-[#e5e7eb] dark:border-[#2d3b4e]">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-purple-500">translate</span>
                <p className="text-sm text-[#617589]">Duties Collected</p>
              </div>
              <p className="text-2xl font-bold text-[#111418] dark:text-white">$12,456</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-[#1A2633] rounded-xl border border-[#e5e7eb] dark:border-[#2d3b4e]">
              <div className="p-6 border-b border-[#e5e7eb] dark:border-[#2d3b4e]">
                <h3 className="text-lg font-bold text-[#111418] dark:text-white">Top Markets</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {countries.map((country) => (
                    <div key={country.code} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded bg-primary/10 text-primary text-xs font-bold flex items-center justify-center">
                          {country.code}
                        </span>
                        <span className="text-[#111418] dark:text-white font-medium">{country.name}</span>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-[#111418] dark:text-white">{country.revenue}</p>
                        <p className="text-xs text-[#617589]">{country.orders} orders</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-[#1A2633] rounded-xl border border-[#e5e7eb] dark:border-[#2d3b4e]">
              <div className="p-6 border-b border-[#e5e7eb] dark:border-[#2d3b4e]">
                <h3 className="text-lg font-bold text-[#111418] dark:text-white">Compliance Status</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {regulations.map((reg) => (
                    <div key={reg.country} className="flex items-center justify-between p-4 rounded-lg bg-[#f8f9fa] dark:bg-[#101922]">
                      <div>
                        <p className="font-medium text-[#111418] dark:text-white">{reg.country}</p>
                        <p className="text-sm text-[#617589]">{reg.requirement}</p>
                      </div>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        reg.status === "Compliant" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                      }`}>
                        {reg.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
