import Link from "next/link";

const earnings = [
  { label: "Available Balance", value: "$45,231.00" },
  { label: "Pending", value: "$12,450.00" },
  { label: "This Month", value: "$67,890.00" },
  { label: "Lifetime", value: "$892,456.00" },
];

const transactions = [
  { id: "TXN-7829", type: "Sale", amount: "$14,950.00", status: "Completed", date: "Mar 10, 2024" },
  { id: "TXN-7828", type: "Sale", amount: "$19,900.00", status: "Completed", date: "Mar 9, 2024" },
  { id: "TXN-7827", type: "Payout", amount: "-$5,000.00", status: "Completed", date: "Mar 8, 2024" },
  { id: "TXN-7826", type: "Sale", amount: "$8,985.00", status: "Completed", date: "Mar 7, 2024" },
  { id: "TXN-7825", type: "Refund", amount: "-$299.00", status: "Completed", date: "Mar 6, 2024" },
];

export default function SellerEarningsPage() {
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
            { icon: "payments", label: "Earnings", href: "/seller/earnings", active: true },
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
          <h2 className="text-xl font-bold text-[#111418] dark:text-white">Earnings</h2>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-dark rounded-lg text-white font-medium">
            <span className="material-symbols-outlined">account_balance</span>
            Request Payout
          </button>
        </header>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {earnings.map((item) => (
              <div key={item.label} className="bg-white dark:bg-[#1A2633] rounded-xl p-6 border border-[#e5e7eb] dark:border-[#2d3b4e]">
                <p className="text-sm text-[#617589] mb-2">{item.label}</p>
                <p className="text-2xl font-bold text-[#111418] dark:text-white">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="bg-white dark:bg-[#1A2633] rounded-xl border border-[#e5e7eb] dark:border-[#2d3b4e]">
            <div className="p-6 border-b border-[#e5e7eb] dark:border-[#2d3b4e]">
              <h3 className="text-lg font-bold text-[#111418] dark:text-white">Recent Transactions</h3>
            </div>
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#e5e7eb] dark:border-[#2d3b4e]">
                  <th className="text-left p-4 text-sm font-medium text-[#617589]">Transaction ID</th>
                  <th className="text-left p-4 text-sm font-medium text-[#617589]">Type</th>
                  <th className="text-left p-4 text-sm font-medium text-[#617589]">Amount</th>
                  <th className="text-left p-4 text-sm font-medium text-[#617589]">Status</th>
                  <th className="text-left p-4 text-sm font-medium text-[#617589]">Date</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((txn) => (
                  <tr key={txn.id} className="border-b border-[#e5e7eb] dark:border-[#2d3b4e] last:border-0">
                    <td className="p-4 font-medium text-primary">{txn.id}</td>
                    <td className="p-4 text-[#111418] dark:text-white">{txn.type}</td>
                    <td className={`p-4 font-bold ${txn.type === "Payout" || txn.type === "Refund" ? "text-red-500" : "text-green-500"}`}>
                      {txn.amount}
                    </td>
                    <td className="p-4">
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
                        {txn.status}
                      </span>
                    </td>
                    <td className="p-4 text-[#617589]">{txn.date}</td>
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
