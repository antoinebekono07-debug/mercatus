import Link from "next/link";

export default function SellerSettingsPage() {
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
            { icon: "analytics", label: "Analytics", href: "/seller/analytics" },
            { icon: "settings", label: "Settings", href: "/seller/settings", active: true },
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
        <header className="h-16 flex items-center justify-between px-6 border-b border-[#e5e7eb] dark:border-[#2d3b4e] bg-white dark:bg-[#1A2633]">
          <h2 className="text-xl font-bold text-[#111418] dark:text-white">Settings</h2>
        </header>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-3xl space-y-6">
            <div className="bg-white dark:bg-[#1A2633] rounded-xl border border-[#e5e7eb] dark:border-[#2d3b4e] p-6">
              <h3 className="text-lg font-bold text-[#111418] dark:text-white mb-4">Business Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#111418] dark:text-white mb-2">Company Name</label>
                  <input type="text" defaultValue="TechHaven Inc." className="w-full h-11 px-4 rounded-lg border border-[#e5e7eb] dark:border-[#2d3b4e] bg-white dark:bg-[#101922] text-[#111418] dark:text-white focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#111418] dark:text-white mb-2">Business Email</label>
                  <input type="email" defaultValue="contact@techhaven.com" className="w-full h-11 px-4 rounded-lg border border-[#e5e7eb] dark:border-[#2d3b4e] bg-white dark:bg-[#101922] text-[#111418] dark:text-white focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#111418] dark:text-white mb-2">Phone</label>
                  <input type="tel" defaultValue="+1 (555) 123-4567" className="w-full h-11 px-4 rounded-lg border border-[#e5e7eb] dark:border-[#2d3b4e] bg-white dark:bg-[#101922] text-[#111418] dark:text-white focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#111418] dark:text-white mb-2">Tax ID</label>
                  <input type="text" defaultValue="XX-XXXXXXX" className="w-full h-11 px-4 rounded-lg border border-[#e5e7eb] dark:border-[#2d3b4e] bg-white dark:bg-[#101922] text-[#111418] dark:text-white focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-[#1A2633] rounded-xl border border-[#e5e7eb] dark:border-[#2d3b4e] p-6">
              <h3 className="text-lg font-bold text-[#111418] dark:text-white mb-4">Shipping Settings</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-[#111418] dark:text-white">Free Shipping</p>
                    <p className="text-sm text-[#617589]">Enable free shipping for orders above $100</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-[#111418] dark:text-white">Express Shipping</p>
                    <p className="text-sm text-[#617589]">Offer express shipping options</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-[#1A2633] rounded-xl border border-[#e5e7eb] dark:border-[#2d3b4e] p-6">
              <h3 className="text-lg font-bold text-[#111418] dark:text-white mb-4">Notifications</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-[#111418] dark:text-white">Email Notifications</p>
                    <p className="text-sm text-[#617589]">Receive email for new orders</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-[#111418] dark:text-white">SMS Notifications</p>
                    <p className="text-sm text-[#617589]">Receive SMS for critical updates</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <button className="px-6 py-2.5 border border-[#e5e7eb] dark:border-[#2d3b4e] rounded-lg text-[#111418] dark:text-white font-medium hover:bg-gray-50 dark:hover:bg-[#2d3b4e]">
                Cancel
              </button>
              <button className="px-6 py-2.5 bg-primary hover:bg-primary-dark rounded-lg text-white font-medium">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
