import Link from "next/link";

const sidebarItems = [
  { icon: "dashboard", label: "Dashboard", href: "/seller/dashboard", active: true },
  { icon: "inventory_2", label: "Products", href: "/seller/products" },
  { icon: "shopping_cart", label: "Orders", href: "/seller/orders" },
  { icon: "analytics", label: "Analytics", href: "/seller/analytics" },
  { icon: "payments", label: "Earnings", href: "/seller/earnings" },
  { icon: "people", label: "Customers", href: "/seller/customers" },
  { icon: "mail", label: "Messages", href: "/seller/messages", badge: 5 },
  { icon: "support_agent", label: "Support", href: "/seller/support" },
  { icon: "settings", label: "Settings", href: "/seller/settings" },
];

const stats = [
  { label: "Total Revenue", value: "$45,231", change: "+12.5%", positive: true },
  { label: "Orders", value: "1,234", change: "+8.2%", positive: true },
  { label: "Products", value: "156", change: "+3", positive: true },
  { label: "Avg. Order Value", value: "$189", change: "-2.4%", positive: false },
];

const recentOrders = [
  { id: "#ORD-7829", customer: "John Smith", product: "ZonePro XR1 Headset", amount: "$299.00", status: "Processing" },
  { id: "#ORD-7828", customer: "Sarah Johnson", product: "Smart Fitness Watch", amount: "$199.00", status: "Shipped" },
  { id: "#ORD-7827", customer: "Mike Wilson", product: "Premium Leather Bag", amount: "$450.00", status: "Delivered" },
  { id: "#ORD-7826", customer: "Emily Brown", product: "EcoSmart Hub", amount: "$599.00", status: "Pending" },
];

const topProducts = [
  { name: "ZonePro XR1 Headset", sales: 234, revenue: "$70,066" },
  { name: "Smart Fitness Watch Pro", sales: 189, revenue: "$37,611" },
  { name: "Premium Leather Weekender", sales: 156, revenue: "$70,200" },
  { name: "EcoSmart Home Hub", sales: 98, revenue: "$58,702" },
];

export default function SellerDashboardPage() {
  return (
    <div className="flex min-h-screen bg-background-light dark:bg-background-dark">
      <aside className="hidden lg:flex w-72 flex-col border-r border-[#f0f2f4] dark:border-gray-800 bg-white dark:bg-[#101922]">
        <div className="p-4 border-b border-[#f0f2f4] dark:border-gray-800">
          <div className="flex gap-3 items-center p-2 rounded-lg">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white font-bold">T</div>
            <div className="flex flex-col">
              <h1 className="text-[#111418] dark:text-white text-base font-medium">TechHaven</h1>
              <p className="text-[#617589] text-sm">Seller Portal</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {sidebarItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                item.active
                  ? "bg-primary/10 text-primary"
                  : "text-[#617589] dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
              <span className="flex-1">{item.label}</span>
              {item.badge && (
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-[#f0f2f4] dark:border-gray-800">
          <Link href="/" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-[#617589] dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <span className="material-symbols-outlined text-[20px]">logout</span>
            <span>Log Out</span>
          </Link>
        </div>
      </aside>

      <main className="flex-1 flex flex-col">
        <header className="flex items-center justify-between px-6 py-4 border-b border-[#f0f2f4] dark:border-gray-800 bg-white dark:bg-[#101922]">
          <div className="flex items-center gap-4">
            <button className="lg:hidden p-2 text-[#617589]">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <h1 className="text-xl font-bold text-[#111418] dark:text-white">Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-[#617589] hover:text-primary transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          </div>
        </header>

        <div className="flex-1 p-6 overflow-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white dark:bg-[#1a2632] rounded-xl p-6 border border-[#e5e7eb] dark:border-[#2a3441]">
                <p className="text-sm text-[#617589] dark:text-gray-400 mb-2">{stat.label}</p>
                <div className="flex items-end justify-between">
                  <span className="text-2xl font-bold text-[#111418] dark:text-white">{stat.value}</span>
                  <span className={`text-sm font-medium ${stat.positive ? "text-green-600" : "text-red-500"}`}>
                    {stat.change}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-white dark:bg-[#1a2632] rounded-xl border border-[#e5e7eb] dark:border-[#2a3441]">
              <div className="flex items-center justify-between p-6 border-b border-[#e5e7eb] dark:border-[#2a3441]">
                <h2 className="text-lg font-bold text-[#111418] dark:text-white">Recent Orders</h2>
                <Link href="/seller/orders" className="text-sm text-primary font-medium hover:underline">
                  View All
                </Link>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                          <span className="material-symbols-outlined text-[#617589]">shopping_bag</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-[#111418] dark:text-white">{order.id}</p>
                          <p className="text-xs text-[#617589]">{order.customer}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-[#111418] dark:text-white">{order.amount}</p>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          order.status === "Delivered" ? "bg-green-100 text-green-700" :
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

            <div className="bg-white dark:bg-[#1a2632] rounded-xl border border-[#e5e7eb] dark:border-[#2a3441]">
              <div className="flex items-center justify-between p-6 border-b border-[#e5e7eb] dark:border-[#2a3441]">
                <h2 className="text-lg font-bold text-[#111418] dark:text-white">Top Products</h2>
                <Link href="/seller/products" className="text-sm text-primary font-medium hover:underline">
                  View All
                </Link>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {topProducts.map((product, index) => (
                    <div key={product.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center">
                          {index + 1}
                        </span>
                        <div>
                          <p className="text-sm font-medium text-[#111418] dark:text-white">{product.name}</p>
                          <p className="text-xs text-[#617589]">{product.sales} sales</p>
                        </div>
                      </div>
                      <span className="text-sm font-bold text-[#111418] dark:text-white">{product.revenue}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#1a2632] rounded-xl border border-[#e5e7eb] dark:border-[#2a3441] p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-[#111418] dark:text-white">Quick Actions</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/seller/products/add" className="flex flex-col items-center gap-3 p-6 rounded-xl border border-[#e5e7eb] dark:border-[#2a3441] hover:border-primary hover:bg-primary/5 transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-2xl">add</span>
                </div>
                <span className="text-sm font-medium text-[#111418] dark:text-white">Add Product</span>
              </Link>
              <Link href="/seller/orders" className="flex flex-col items-center gap-3 p-6 rounded-xl border border-[#e5e7eb] dark:border-[#2a3441] hover:border-primary hover:bg-primary/5 transition-colors">
                <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-blue-600 text-2xl">local_shipping</span>
                </div>
                <span className="text-sm font-medium text-[#111418] dark:text-white">Manage Orders</span>
              </Link>
              <Link href="/seller/analytics" className="flex flex-col items-center gap-3 p-6 rounded-xl border border-[#e5e7eb] dark:border-[#2a3441] hover:border-primary hover:bg-primary/5 transition-colors">
                <div className="w-12 h-12 rounded-full bg-green-50 dark:bg-green-900/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-green-600 text-2xl">analytics</span>
                </div>
                <span className="text-sm font-medium text-[#111418] dark:text-white">View Analytics</span>
              </Link>
              <Link href="/seller/messages" className="flex flex-col items-center gap-3 p-6 rounded-xl border border-[#e5e7eb] dark:border-[#2a3441] hover:border-primary hover:bg-primary/5 transition-colors">
                <div className="w-12 h-12 rounded-full bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-purple-600 text-2xl">chat</span>
                </div>
                <span className="text-sm font-medium text-[#111418] dark:text-white">Messages</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
