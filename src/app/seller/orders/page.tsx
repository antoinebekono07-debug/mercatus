import Link from "next/link";

const orders = [
  { id: "ORD-2024-7829", customer: "Tech Solutions Inc", email: "order@techsolutions.com", product: "ZonePro XR1 Headset", quantity: 50, amount: 14950, status: "Processing", date: "2024-03-10" },
  { id: "ORD-2024-7828", customer: "Global Retail Co", email: "procurement@globalretail.com", product: "Smart Fitness Watch Pro", quantity: 100, amount: 19900, status: "Shipped", date: "2024-03-09" },
  { id: "ORD-2024-7827", customer: "Alpha Distributors", email: "orders@alphadist.com", product: "Premium Leather Weekender", quantity: 25, amount: 11250, status: "Pending", date: "2024-03-09" },
  { id: "ORD-2024-7826", customer: "Beta Electronics", email: "buy@betaelec.com", product: "EcoSmart Home Hub", quantity: 15, amount: 8985, status: "Delivered", date: "2024-03-08" },
  { id: "ORD-2024-7825", customer: "Gamma Supplies", email: "purchasing@gammasupplies.com", product: "ZonePro XR1 Headset", quantity: 30, amount: 8970, status: "Delivered", date: "2024-03-07" },
];

export default function SellerOrdersPage() {
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
            { icon: "shopping_cart", label: "Orders", href: "/seller/orders", active: true },
            { icon: "inventory_2", label: "Inventory", href: "/seller/products" },
            { icon: "analytics", label: "Analytics", href: "/seller/analytics" },
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
          <h2 className="text-xl font-bold text-[#111418] dark:text-white">Orders</h2>
          <div className="flex items-center gap-4">
            <select className="h-10 px-3 rounded-lg border border-[#e5e7eb] dark:border-[#2d3b4e] bg-white dark:bg-[#1A2633] text-sm">
              <option>All Status</option>
              <option>Pending</option>
              <option>Processing</option>
              <option>Shipped</option>
              <option>Delivered</option>
            </select>
          </div>
        </header>

        <div className="flex-1 overflow-auto p-6">
          <div className="bg-white dark:bg-[#1A2633] rounded-xl border border-[#e5e7eb] dark:border-[#2d3b4e] overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#e5e7eb] dark:border-[#2d3b4e]">
                  <th className="text-left p-4 text-sm font-medium text-[#617589]">Order ID</th>
                  <th className="text-left p-4 text-sm font-medium text-[#617589]">Customer</th>
                  <th className="text-left p-4 text-sm font-medium text-[#617589]">Product</th>
                  <th className="text-left p-4 text-sm font-medium text-[#617589]">Qty</th>
                  <th className="text-left p-4 text-sm font-medium text-[#617589]">Amount</th>
                  <th className="text-left p-4 text-sm font-medium text-[#617589]">Status</th>
                  <th className="text-left p-4 text-sm font-medium text-[#617589]">Date</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-b border-[#e5e7eb] dark:border-[#2d3b4e] last:border-0">
                    <td className="p-4 font-medium text-primary">{order.id}</td>
                    <td className="p-4">
                      <p className="text-[#111418] dark:text-white font-medium">{order.customer}</p>
                      <p className="text-xs text-[#617589]">{order.email}</p>
                    </td>
                    <td className="p-4 text-[#111418] dark:text-white">{order.product}</td>
                    <td className="p-4 text-[#111418] dark:text-white">{order.quantity}</td>
                    <td className="p-4 font-bold text-[#111418] dark:text-white">${order.amount.toLocaleString()}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        order.status === "Delivered" ? "bg-green-100 text-green-700" :
                        order.status === "Shipped" ? "bg-blue-100 text-blue-700" :
                        order.status === "Processing" ? "bg-yellow-100 text-yellow-700" :
                        "bg-gray-100 text-gray-700"
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="p-4 text-[#617589]">{order.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
