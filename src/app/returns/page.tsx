'use client';

import Link from 'next/link';

const returnReasons = [
  'Wrong item received',
  'Item not as described',
  'Defective or damaged',
  'Changed mind',
  'Better price elsewhere',
  'Arrived too late',
];

export default function ReturnsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
      <header className="bg-white dark:bg-[#1a2632] border-b border-[#f0f2f4] dark:border-gray-800 sticky top-0 z-50">
        <div className="px-6 lg:px-10 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-3">
              <div className="text-primary size-8">
                <svg className="w-full h-full" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fillRule="evenodd"></path>
                </svg>
              </div>
              <h2 className="text-[#111418] dark:text-white text-lg font-bold">myzone</h2>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/products" className="text-[#111418] dark:text-gray-300 text-sm font-medium hover:text-primary transition-colors">Marketplace</Link>
              <Link href="/orders" className="text-[#111418] dark:text-gray-300 text-sm font-medium hover:text-primary transition-colors">Orders</Link>
              <Link href="/help" className="text-[#111418] dark:text-gray-300 text-sm font-medium hover:text-primary transition-colors">Support</Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex w-full max-w-64 items-center rounded-lg bg-[#f0f2f4] dark:bg-gray-800 h-10 px-3">
              <span className="material-symbols-outlined text-[#617589]">search</span>
              <input className="w-full bg-transparent border-none focus:ring-0 text-[#111418] dark:text-white placeholder-[#617589] text-sm" placeholder="Search orders..." />
            </div>
            <Link href="/cart" className="relative text-[#617589] hover:text-primary">
              <span className="material-symbols-outlined">shopping_cart</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 justify-center py-8 px-4 sm:px-8">
        <div className="w-full max-w-[1100px] mx-auto flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-[#111418] dark:text-white text-3xl font-bold tracking-tight">Return Request</h1>
                <p className="text-[#617589] dark:text-gray-400 text-sm mt-1">Order #9988-AZ • Placed on Oct 14, 2023</p>
              </div>
              <Link href="/orders" className="text-[#617589] dark:text-gray-400 hover:text-primary flex items-center gap-1 text-sm font-medium transition-colors">
                <span className="material-symbols-outlined text-lg">arrow_back</span>
                Back to Order Details
              </Link>
            </div>
            <div className="bg-primary/5 dark:bg-primary/10 border border-primary/10 dark:border-primary/20 p-4 rounded-lg flex items-start gap-3 mt-4">
              <span className="material-symbols-outlined text-primary mt-0.5">info</span>
              <p className="text-[#111418] dark:text-gray-200 text-sm leading-relaxed">
                Please select the items you wish to return and choose a reason. <strong className="text-primary font-semibold">Our AI agent will review your request instantly</strong> to expedite your refund.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1 w-full flex flex-col gap-8">
              <div className="border border-[#dbe0e6] dark:border-gray-700 rounded-lg bg-white dark:bg-[#1a2632] overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-[#f8fafc] dark:bg-[#15202b] border-b border-[#dbe0e6] dark:border-gray-700">
                      <tr>
                        <th className="py-4 px-6 w-16 text-center">
                          <input className="rounded border-gray-300 text-primary focus:ring-primary/20 size-5 cursor-pointer" type="checkbox" defaultChecked />
                        </th>
                        <th className="py-4 px-4 text-sm font-semibold text-[#617589] uppercase tracking-wider">Product</th>
                        <th className="py-4 px-4 text-sm font-semibold text-[#617589] uppercase tracking-wider w-32">Price</th>
                        <th className="py-4 px-4 text-sm font-semibold text-[#617589] uppercase tracking-wider w-64">Reason</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#dbe0e6] dark:divide-gray-700">
                      <tr className="group hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td className="py-4 px-6 text-center">
                          <input className="rounded border-gray-300 text-primary focus:ring-primary/20 size-5 cursor-pointer" type="checkbox" defaultChecked />
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-lg bg-gray-100 dark:bg-gray-800 overflow-hidden">
                              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDv5MUrXadMrkSWH9Qp5hRWhl4vrAcKicIk_Vqa8Esn8y6rqx3YwamcHZIrTkOppv94G1qtPTC56z2mAFzu5M55z1VIlbGI9oLf9VNAjC9sqSzFVQuFBg9vHNXVt-lGTYEQ8lSoBWs9JYivq1jFKIEEXvbHcviBhhceXnibPVicwEPdTOOsi3yt4VQgc-nGA44KUA4eZFYSyckolOhPHDh5owkGIGHrZZIn42cds94znSSm-bi0c9QRzYj1Ewv-Tl5VgPmlLKu4SRX_" alt="Smart Watch" className="w-full h-full object-cover" />
                            </div>
                            <div>
                              <p className="font-semibold text-[#111418] dark:text-white">Smart Chrono Series 5</p>
                              <p className="text-sm text-[#617589]">Ceramic White / 42mm</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <span className="font-semibold text-[#111418] dark:text-white">$299.00</span>
                        </td>
                        <td className="py-4 px-4">
                          <select className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-[#111418] dark:text-white text-sm p-2 focus:ring-primary focus:border-primary">
                            <option>Select a reason...</option>
                            {returnReasons.map((reason) => (
                              <option key={reason}>{reason}</option>
                            ))}
                          </select>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-white dark:bg-[#1a2632] border border-[#dbe0e6] dark:border-gray-700 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-bold text-[#111418] dark:text-white mb-4">Return Shipping</h3>
                <div className="space-y-4">
                  <label className="flex items-center justify-between p-4 border border-primary rounded-lg bg-primary/5 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <input name="shipping" type="radio" defaultChecked className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-semibold text-[#111418] dark:text-white">myzone Prepaid Label</p>
                        <p className="text-sm text-[#617589]">Free return shipping via our logistics network</p>
                      </div>
                    </div>
                    <span className="text-primary font-bold">FREE</span>
                  </label>
                  <label className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer hover:border-gray-300">
                    <div className="flex items-center gap-3">
                      <input name="shipping" type="radio" className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-semibold text-[#111418] dark:text-white">Self-Ship</p>
                        <p className="text-sm text-[#617589]">Use your own shipping method</p>
                      </div>
                    </div>
                    <span className="text-[#111418] dark:text-white font-semibold">-$5.00</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-80">
              <div className="bg-white dark:bg-[#1a2632] border border-[#dbe0e6] dark:border-gray-700 rounded-lg p-6 shadow-sm sticky top-24">
                <h3 className="text-lg font-bold text-[#111418] dark:text-white mb-4">Return Summary</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#617589]">Item refund</span>
                    <span className="font-medium text-[#111418] dark:text-white">$299.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#617589]">Return shipping</span>
                    <span className="font-medium text-green-600">FREE</span>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-3 mt-3">
                    <div className="flex justify-between">
                      <span className="font-semibold text-[#111418] dark:text-white">Total refund</span>
                      <span className="font-bold text-xl text-green-600">$299.00</span>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-6 bg-primary hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-colors">
                  Submit Return Request
                </button>
                <p className="text-xs text-[#617589] mt-4 text-center">
                  By submitting, you agree to our Return Policy
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
