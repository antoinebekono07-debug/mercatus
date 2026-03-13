'use client';

import Link from 'next/link';

export default function OrderFulfillmentPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
      <header className="sticky top-0 z-50 w-full border-b border-[#f0f2f4] dark:border-gray-800 bg-white dark:bg-[#101922] px-4 md:px-10 py-3 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-4 text-primary">
            <div className="size-6">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fillRule="evenodd"></path>
              </svg>
            </div>
            <h2 className="text-xl font-bold tracking-tight">myzone</h2>
          </Link>
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/seller/dashboard" className="text-sm font-semibold hover:text-primary transition-colors">Dashboard</Link>
            <Link href="/seller/orders" className="text-sm font-semibold border-b-2 border-primary pb-1">Orders</Link>
            <Link href="/seller/products" className="text-sm font-semibold hover:text-primary transition-colors">Inventory</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <span className="material-symbols-outlined absolute left-3 top-2.5 text-gray-400">search</span>
            <input className="w-64 bg-[#f0f2f4] dark:bg-gray-800 border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary" placeholder="Search orders..." type="text" />
          </div>
          <button className="p-2 rounded-lg bg-[#f0f2f4] dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <div className="size-9 rounded-full bg-cover bg-center border border-gray-200" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAbaGpv7583CFNPqSfVYNGlwp79Bn4GmFGyQPFRu1q5kaw-SrElZy9iphWPkgpjS2OPT2cgpA_zo742ZV_LOaJcPh0WlDDBdlkd81oAK44ILGGFsbWBEwMy6mFUcfNsui8ijVNkworw3WdM4RcSmiq6XE9AChcpqVYKMEkvvTHeJXib46O54zqqwUMZc9FWlJwWsEyReS3rFwlje7Pf0yuZtnB_ewqWY3yKd3qg4qe6KgH_87_qkHDu4WeAnUobREoUTm7DsDlpYbAj")' }}></div>
        </div>
      </header>

      <main className="max-w-[1280px] mx-auto px-4 md:px-10 py-6">
        <div className="flex items-center gap-2 mb-4 text-sm font-medium text-[#617589]">
          <Link href="/seller/dashboard" className="hover:text-primary">Dashboard</Link>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <Link href="/seller/orders" className="hover:text-primary">Orders</Link>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="text-[#111418] dark:text-white font-bold">Fulfillment Detail</span>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-black">Order #MZ-88291</h1>
              <div className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">International Order</div>
            </div>
            <p className="text-[#617589]">Placed on Oct 18, 2023 • $1,247.00</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-blue-600">
              <span className="material-symbols-outlined">local_shipping</span>
              Ship Package
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
              <span className="material-symbols-outlined">print</span>
              Print Label
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white dark:bg-[#1a2632] rounded-xl border border-gray-200 dark:border-gray-700 p-6">
              <h2 className="text-lg font-bold mb-4">Order Items</h2>
              <div className="space-y-4">
                {[
                  { name: 'ZonePro XR1 Headset', qty: 2, price: 299, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQN4mv102jACuPwSSwbCXKKS1c3fU28k8lUDvvG5PVxp1Sek29zbwml6EIwa6p0pBD6Ss2AEuTQ5DUwPqtlVPCeOgGTePfeUoiCdWz5a2rYsEgcTculfAzA15of5EOhdoWeFzTWFJh7Yl3kPY1nR68Y35ac9mqSKNMp5lOGcrh-8fMIunfnscNRNoA-z75aniG5GsUzZ5xFwsstw8ATKaElW1LWYh67Lmm80ZrAG8XRmbL8kiEW3g2HqxC3grFxlENJYkkl1vRbl5b' },
                  { name: 'Smart Fitness Watch Pro', qty: 1, price: 199, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnnkxGYcD1Db1HJ9cnvOsNZZnZrgX-4R14Ka6XRKudixKjtFracuQwns3bw1VuHJBUFWs2KUnVQ_eC9S8CPRotL9WMGw9mX7-3JnJHoo-ES05Gr9iBeiZszevqkPfHkEC_UW7LK3FtD0C5srTovWRks5W5fg4qiBNqjnF2WPTDS1jN9fJsjZbdGuJRnHZBtpQBRMuewNLbY-LUEkYN5IndMIcesxu60bBLOLzEe_58iRWHtLCLI7D5BiMUXTc4ebaCBFzj2J2XaCC7' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-4 border border-gray-100 dark:border-gray-700 rounded-lg">
                    <div className="w-16 h-16 rounded-lg bg-gray-100 overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-[#617589]">Qty: {item.qty}</p>
                    </div>
                    <p className="font-bold">${item.price * item.qty}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-[#1a2632] rounded-xl border border-gray-200 dark:border-gray-700 p-6">
              <h2 className="text-lg font-bold mb-4">Shipping Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-semibold text-[#617589] mb-2">Delivery Address</h3>
                  <p className="font-medium">Alex Johnson</p>
                  <p className="text-[#617589]">123 Silicon Valley Way, Suite 400</p>
                  <p className="text-[#617589]">San Francisco, CA 94105</p>
                  <p className="text-[#617589]">United States</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#617589] mb-2">Shipping Method</h3>
                  <p className="font-medium">myzone Express Air</p>
                  <p className="text-sm text-[#617589]">Estimated delivery: Oct 24-26</p>
                  <p className="text-sm text-primary">Customs cleared</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-[#1a2632] rounded-xl border border-gray-200 dark:border-gray-700 p-6">
              <h2 className="text-lg font-bold mb-4">Order Timeline</h2>
              <div className="space-y-4">
                {[
                  { status: 'Order Placed', time: 'Oct 18, 2023 - 2:34 PM', done: true },
                  { status: 'Payment Confirmed', time: 'Oct 18, 2023 - 2:35 PM', done: true },
                  { status: 'Processing', time: 'Oct 19, 2023 - 9:00 AM', done: true },
                  { status: 'Shipped', time: 'Oct 20, 2023 - 3:22 PM', done: true },
                  { status: 'In Transit', time: 'Oct 22, 2023 - 8:15 AM', done: true },
                  { status: 'Out for Delivery', time: 'Expected Oct 25', done: false },
                ].map((event, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <div className={`w-3 h-3 rounded-full ${event.done ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                      {idx < 5 && <div className={`w-0.5 flex-1 ${event.done ? 'bg-green-500' : 'bg-gray-200'}`}></div>}
                    </div>
                    <div>
                      <p className={`font-medium ${event.done ? 'text-[#111418] dark:text-white' : 'text-gray-400'}`}>{event.status}</p>
                      <p className="text-xs text-[#617589]">{event.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-[#1a2632] rounded-xl border border-gray-200 dark:border-gray-700 p-6">
              <h2 className="text-lg font-bold mb-4">Customer</h2>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                <div>
                  <p className="font-medium">Alex Johnson</p>
                  <p className="text-sm text-[#617589]">12 orders</p>
                </div>
              </div>
              <button className="w-full mt-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-sm font-medium">
                View Profile
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
