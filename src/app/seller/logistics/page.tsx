import Link from "next/link";

const shipments = [
  { id: "SHP-7829", destination: "Germany", status: "In Transit", eta: "Mar 15, 2024", items: 150, value: "$24,500" },
  { id: "SHP-7828", destination: "United Kingdom", status: "Delivered", eta: "Mar 12, 2024", items: 85, value: "$12,300" },
  { id: "SHP-7827", destination: "France", status: "Customs", eta: "Mar 18, 2024", items: 200, value: "$35,000" },
  { id: "SHP-7826", destination: "Japan", status: "In Transit", eta: "Mar 20, 2024", items: 50, value: "$18,750" },
];

export default function SellerLogisticsPage() {
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
            { icon: "local_shipping", label: "Logistics", href: "/seller/logistics", active: true },
            { icon: "public", label: "Cross-Border", href: "/seller/cross-border" },
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
        <header className="h-16 flex items-center justify-between px-6 border-b border-[#e5e7eb] dark:border-[#2d3b4e] bg-white dark:bg-[#1A2633]">
          <h2 className="text-xl font-bold text-[#111418] dark:text-white">Logistics</h2>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-dark rounded-lg text-white font-medium">
            <span className="material-symbols-outlined">add</span>
            Create Shipment
          </button>
        </header>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white dark:bg-[#1A2633] rounded-xl p-6 border border-[#e5e7eb] dark:border-[#2d3b4e]">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-blue-500">local_shipping</span>
                <p className="text-sm text-[#617589]">In Transit</p>
              </div>
              <p className="text-2xl font-bold text-[#111418] dark:text-white">24</p>
            </div>
            <div className="bg-white dark:bg-[#1A2633] rounded-xl p-6 border border-[#e5e7eb] dark:border-[#2d3b4e]">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-yellow-500">hourglass_empty</span>
                <p className="text-sm text-[#617589]">Pending</p>
              </div>
              <p className="text-2xl font-bold text-[#111418] dark:text-white">8</p>
            </div>
            <div className="bg-white dark:bg-[#1A2633] rounded-xl p-6 border border-[#e5e7eb] dark:border-[#2d3b4e]">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-purple-500">fact_check</span>
                <p className="text-sm text-[#617589]">Customs</p>
              </div>
              <p className="text-2xl font-bold text-[#111418] dark:text-white">5</p>
            </div>
            <div className="bg-white dark:bg-[#1A2633] rounded-xl p-6 border border-[#e5e7eb] dark:border-[#2d3b4e]">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-green-500">check_circle</span>
                <p className="text-sm text-[#617589]">Delivered</p>
              </div>
              <p className="text-2xl font-bold text-[#111418] dark:text-white">156</p>
            </div>
          </div>

          <div className="bg-white dark:bg-[#1A2633] rounded-xl border border-[#e5e7eb] dark:border-[#2d3b4e]">
            <div className="p-6 border-b border-[#e5e7eb] dark:border-[#2d3b4e]">
              <h3 className="text-lg font-bold text-[#111418] dark:text-white">Active Shipments</h3>
            </div>
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#e5e7eb] dark:border-[#2d3b4e]">
                  <th className="text-left p-4 text-sm font-medium text-[#617589]">Shipment ID</th>
                  <th className="text-left p-4 text-sm font-medium text-[#617589]">Destination</th>
                  <th className="text-left p-4 text-sm font-medium text-[#617589]">Items</th>
                  <th className="text-left p-4 text-sm font-medium text-[#617589]">Value</th>
                  <th className="text-left p-4 text-sm font-medium text-[#617589]">Status</th>
                  <th className="text-left p-4 text-sm font-medium text-[#617589]">ETA</th>
                </tr>
              </thead>
              <tbody>
                {shipments.map((shipment) => (
                  <tr key={shipment.id} className="border-b border-[#e5e7eb] dark:border-[#2d3b4e] last:border-0">
                    <td className="p-4 font-medium text-primary">{shipment.id}</td>
                    <td className="p-4 text-[#111418] dark:text-white">{shipment.destination}</td>
                    <td className="p-4 text-[#111418] dark:text-white">{shipment.items}</td>
                    <td className="p-4 font-bold text-[#111418] dark:text-white">${shipment.value}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        shipment.status === "Delivered" ? "bg-green-100 text-green-700" :
                        shipment.status === "In Transit" ? "bg-blue-100 text-blue-700" :
                        "bg-yellow-100 text-yellow-700"
                      }`}>
                        {shipment.status}
                      </span>
                    </td>
                    <td className="p-4 text-[#617589]">{shipment.eta}</td>
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
