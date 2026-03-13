import Link from "next/link";

const analytics = [
  { label: "Total Revenue", value: "$124,567", change: "+18.2%", positive: true },
  { label: "Orders", value: "1,847", change: "+12.5%", positive: true },
  { label: "Conversion Rate", value: "3.24%", change: "+0.8%", positive: true },
  { label: "Avg. Order Value", value: "$312", change: "-2.1%", positive: false },
];

const topProducts = [
  { name: "ZonePro XR1 Headset", sales: 547, revenue: "$163,553" },
  { name: "Smart Fitness Watch Pro", sales: 423, revenue: "$84,177" },
  { name: "Premium Leather Weekender", sales: 289, revenue: "$130,050" },
  { name: "EcoSmart Home Hub", sales: 156, revenue: "$93,444" },
];

const topCountries = [
  { country: "United States", orders: 847, revenue: "$54,234" },
  { country: "Germany", orders: 423, revenue: "$28,901" },
  { country: "United Kingdom", orders: 312, revenue: "$19,876" },
  { country: "France", orders: 189, revenue: "$12,345" },
];

export default function SellerAnalyticsPage() {
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
            { icon: "analytics", label: "Analytics", href: "/seller/analytics", active: true },
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
        <header className="h-16 flex items-center justify-between px-6 border-b border-[#e5e7eb] dark:border-[#2d3b4e] bg-white dark:bg-[#1A2633]">
          <h2 className="text-xl font-bold text-[#111418] dark:text-white">Analytics</h2>
          <select className="h-10 px-3 rounded-lg border border-[#e5e7eb] dark:border-[#2d3b4e] bg-white dark:bg-[#1A2633] text-sm">
            <option>Last 30 Days</option>
            <option>Last 7 Days</option>
            <option>Last 90 Days</option>
            <option>This Year</option>
          </select>
        </header>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {analytics.map((stat) => (
              <div key={stat.label} className="bg-white dark:bg-[#1A2633] rounded-xl p-6 border border-[#e5e7eb] dark:border-[#2d3b4e]">
                <p className="text-sm text-[#617589] mb-2">{stat.label}</p>
                <div className="flex items-end justify-between">
                  <span className="text-2xl font-bold text-[#111418] dark:text-white">{stat.value}</span>
                  <span className={`text-sm font-medium ${stat.positive ? "text-green-500" : "text-red-500"}`}>
                    {stat.change}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-[#1A2633] rounded-xl border border-[#e5e7eb] dark:border-[#2d3b4e]">
              <div className="p-6 border-b border-[#e5e7eb] dark:border-[#2d3b4e]">
                <h3 className="text-lg font-bold text-[#111418] dark:text-white">Top Products</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {topProducts.map((product, index) => (
                    <div key={product.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center">
                          {index + 1}
                        </span>
                        <span className="text-[#111418] dark:text-white font-medium">{product.name}</span>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-[#111418] dark:text-white">{product.revenue}</p>
                        <p className="text-xs text-[#617589]">{product.sales} sales</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-[#1A2633] rounded-xl border border-[#e5e7eb] dark:border-[#2d3b4e]">
              <div className="p-6 border-b border-[#e5e7eb] dark:border-[#2d3b4e]">
                <h3 className="text-lg font-bold text-[#111418] dark:text-white">Top Countries</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {topCountries.map((item) => (
                    <div key={item.country} className="flex items-center justify-between">
                      <span className="text-[#111418] dark:text-white font-medium">{item.country}</span>
                      <div className="text-right">
                        <p className="font-bold text-[#111418] dark:text-white">{item.revenue}</p>
                        <p className="text-xs text-[#617589]">{item.orders} orders</p>
                      </div>
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
