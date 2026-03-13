import Link from "next/link";

const sidebarItems = [
  { icon: "dashboard", label: "Dashboard", href: "/seller/hub", active: true },
  { icon: "shopping_cart", label: "Orders", href: "/seller/orders", badge: 12 },
  { icon: "inventory_2", label: "Inventory", href: "/seller/products" },
  { icon: "local_shipping", label: "Logistics", href: "/seller/logistics" },
  { icon: "public", label: "Cross-Border", href: "/seller/cross-border" },
  { icon: "payments", label: "Payments", href: "/seller/earnings" },
  { icon: "analytics", label: "Analytics", href: "/seller/analytics" },
  { icon: "support_agent", label: "Support", href: "/help" },
  { icon: "settings", label: "Settings", href: "/seller/settings" },
];

const stats = [
  { label: "Total Revenue", value: "$124,567", change: "+18.2%", positive: true },
  { label: "Orders", value: "1,847", change: "+12.5%", positive: true },
  { label: "Conversion Rate", value: "3.24%", change: "+0.8%", positive: true },
  { label: "Avg. Order Value", value: "$312", change: "-2.1%", positive: false },
];

const recentOrders = [
  { id: "ORD-7829", customer: "Tech Solutions Inc", product: "ZonePro XR1 x50", amount: "$14,950", status: "Processing" },
  { id: "ORD-7828", customer: "Global Retail Co", product: "Smart Watch x100", amount: "$19,900", status: "Shipped" },
  { id: "ORD-7827", customer: "Alpha Distributors", product: "Leather Bags x25", amount: "$11,250", status: "Pending" },
];

export default function SellerHubPage() {
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
          {sidebarItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                item.active
                  ? "bg-primary/10 text-primary"
                  : "text-[#617589] dark:text-[#94a3b8] hover:bg-[#f0f2f4] dark:hover:bg-[#2d3b4e] hover:text-[#111418] dark:hover:text-white"
              }`}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
              {item.badge && (
                <span className="ml-auto bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </Link>
          ))}
        </nav>
      </aside>

      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 flex items-center justify-between px-6 border-b border-[#e5e7eb] dark:border-[#2d3b4e] bg-white dark:bg-[#1A2633]">
          <h2 className="text-xl font-bold text-[#111418] dark:text-white">Dashboard</h2>
          <div className="flex items-center gap-4">
            <button className="p-2 text-[#617589] hover:text-primary">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
              TH
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => (
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white dark:bg-[#1A2633] rounded-xl border border-[#e5e7eb] dark:border-[#2d3b4e]">
              <div className="p-6 border-b border-[#e5e7eb] dark:border-[#2d3b4e]">
                <h3 className="text-lg font-bold text-[#111418] dark:text-white">Recent Orders</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 rounded-lg bg-[#f8f9fa] dark:bg-[#101922]">
                      <div>
                        <p className="font-medium text-[#111418] dark:text-white">{order.id}</p>
                        <p className="text-sm text-[#617589]">{order.customer}</p>
                        <p className="text-xs text-[#617589]">{order.product}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-[#111418] dark:text-white">{order.amount}</p>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          order.status === "Shipped" ? "bg-blue-100 text-blue-700" :
                          order.status === "Processing" ? "bg-yellow-100 text-yellow-700" :
                          "bg-gray-100 text-gray-700"
                        }`}>
                          {order.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-[#1A2633] rounded-xl border border-[#e5e7eb] dark:border-[#2d3b4e] p-6">
              <h3 className="text-lg font-bold text-[#111418] dark:text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link href="/seller/products" className="flex items-center gap-3 p-3 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                  <span className="material-symbols-outlined">add</span>
                  <span className="text-sm font-medium">Add Product</span>
                </Link>
                <Link href="/seller/orders" className="flex items-center gap-3 p-3 rounded-lg bg-[#f8f9fa] dark:bg-[#101922] text-[#111418] dark:text-white hover:bg-gray-100 dark:hover:bg-[#2d3b4e] transition-colors">
                  <span className="material-symbols-outlined">local_shipping</span>
                  <span className="text-sm font-medium">Process Orders</span>
                </Link>
                <Link href="/seller/analytics" className="flex items-center gap-3 p-3 rounded-lg bg-[#f8f9fa] dark:bg-[#101922] text-[#111418] dark:text-white hover:bg-gray-100 dark:hover:bg-[#2d3b4e] transition-colors">
                  <span className="material-symbols-outlined">analytics</span>
                  <span className="text-sm font-medium">View Analytics</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
