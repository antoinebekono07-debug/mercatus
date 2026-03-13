'use client';

import Link from 'next/link';

export default function SellerReturnsLogisticsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
      <header className="flex items-center justify-between border-b border-[#f0f2f4] dark:border-gray-800 bg-white dark:bg-[#1a2632] px-6 lg:px-10 py-3 sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-4">
          <div className="size-8 text-primary">
            <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fillRule="evenodd"></path>
            </svg>
          </div>
          <h2 className="text-xl font-bold">myzone</h2>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/seller/dashboard" className="text-sm font-medium hover:text-primary">Dashboard</Link>
          <Link href="/seller/orders" className="text-sm font-medium hover:text-primary">Orders</Link>
          <Link href="/seller/products" className="text-sm font-medium hover:text-primary">Inventory</Link>
          <Link href="/seller/logistics" className="text-sm font-medium text-primary">Logistics</Link>
          <Link href="/seller/settings" className="text-sm font-medium hover:text-primary">Settings</Link>
        </nav>
        <div className="w-10 h-10 rounded-full bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBpYAae9WGZ6BD3du--IAJSHZsbL-OYdu0qIFhaHuEjVh2HgSc94qIHJlPsVjEpN8fxfXkmmcU9WRcrfNbc_UeT35bePpKeKQu3JjdZXTTXD0m_Sm4N_9SXRNhWeUH00MzzN76qBptMR8ukeG8iTV-CoE6t5k_YcbVlBWmBADve-U8JttsFjDX8zQMPHTsmgKj-FcXviGedT5Chz8Epp_1zAtP06cCDF8gQF8yXlcsLBw5k6yUIDmAFCT6H7nSWe753kdP7Fto7HkHY")' }}></div>
      </header>

      <main className="flex-1 max-w-[1440px] mx-auto px-6 py-6">
        <div className="flex items-center gap-2 mb-6 text-sm">
          <Link href="/seller/dashboard" className="text-[#617589] hover:text-primary">Dashboard</Link>
          <span className="text-[#617589]">/</span>
          <Link href="/seller/logistics" className="text-[#617589] hover:text-primary">Logistics</Link>
          <span className="text-[#617589]">/</span>
          <span>Returns Processing</span>
        </div>

        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-black mb-2">Returns Logistics</h1>
            <p className="text-[#617589]">Manage inbound returns, inspections, and inventory updates</p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center gap-2">
              <span className="material-symbols-outlined">history</span>
              History
            </button>
            <button className="px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-blue-600 flex items-center gap-2">
              <span className="material-symbols-outlined">print</span>
              Generate Return Label
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white dark:bg-[#1a2632] rounded-xl p-5 border border-gray-200 dark:border-gray-700">
            <div className="flex justify-between items-start mb-2">
              <span className="text-[#617589] text-sm">Pending Returns</span>
              <span className="material-symbols-outlined text-amber-500">hourglass_empty</span>
            </div>
            <p className="text-3xl font-bold">12</p>
          </div>
          <div className="bg-white dark:bg-[#1a2632] rounded-xl p-5 border border-gray-200 dark:border-gray-700">
            <div className="flex justify-between items-start mb-2">
              <span className="text-[#617589] text-sm">In Transit</span>
              <span className="material-symbols-outlined text-blue-500">local_shipping</span>
            </div>
            <p className="text-3xl font-bold">8</p>
          </div>
          <div className="bg-white dark:bg-[#1a2632] rounded-xl p-5 border border-gray-200 dark:border-gray-700">
            <div className="flex justify-between items-start mb-2">
              <span className="text-[#617589] text-sm">Inspected Today</span>
              <span className="material-symbols-outlined text-green-500">fact_check</span>
            </div>
            <p className="text-3xl font-bold">24</p>
          </div>
          <div className="bg-white dark:bg-[#1a2632] rounded-xl p-5 border border-gray-200 dark:border-gray-700">
            <div className="flex justify-between items-start mb-2">
              <span className="text-[#617589] text-sm">Refund Processed</span>
              <span className="material-symbols-outlined text-primary">payments</span>
            </div>
            <p className="text-3xl font-bold">$2,450</p>
          </div>
        </div>

        <div className="bg-white dark:bg-[#1a2632] rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="p-5 border-b border-gray-200 dark:border-gray-700">
            <h2 className="font-bold">Recent Returns</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-800/50">
                <tr>
                  <th className="px-5 py-3 text-left text-xs font-semibold text-[#617589] uppercase">Return ID</th>
                  <th className="px-5 py-3 text-left text-xs font-semibold text-[#617589] uppercase">Product</th>
                  <th className="px-5 py-3 text-left text-xs font-semibold text-[#617589] uppercase">Reason</th>
                  <th className="px-5 py-3 text-left text-xs font-semibold text-[#617589] uppercase">Status</th>
                  <th className="px-5 py-3 text-left text-xs font-semibold text-[#617589] uppercase">Date</th>
                  <th className="px-5 py-3 text-left text-xs font-semibold text-[#617589] uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {[
                  { id: 'RET-001', product: 'ZonePro XR1 Headset', reason: 'Defective', status: 'In Transit', date: 'Jan 15, 2024' },
                  { id: 'RET-002', product: 'Smart Watch Pro', reason: 'Wrong Item', status: 'Pending', date: 'Jan 15, 2024' },
                  { id: 'RET-003', product: 'Home Hub Mini', reason: 'Changed Mind', status: 'Inspected', date: 'Jan 14, 2024' },
                  { id: 'RET-004', product: 'Wireless Earbuds', reason: 'Not as Described', status: 'Refunded', date: 'Jan 14, 2024' },
                ].map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="px-5 py-4 font-medium">{item.id}</td>
                    <td className="px-5 py-4">{item.product}</td>
                    <td className="px-5 py-4 text-[#617589]">{item.reason}</td>
                    <td className="px-5 py-4">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        item.status === 'In Transit' ? 'bg-blue-100 text-blue-700' :
                        item.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                        item.status === 'Inspected' ? 'bg-green-100 text-green-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>{item.status}</span>
                    </td>
                    <td className="px-5 py-4 text-[#617589]">{item.date}</td>
                    <td className="px-5 py-4">
                      <button className="text-primary text-sm font-medium hover:underline">View Details</button>
                    </td>
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
