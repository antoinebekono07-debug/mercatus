import Link from "next/link";

const orders = [
  {
    id: "ORD-2024-7829",
    date: "Mar 10, 2024",
    status: "Shipped",
    items: [
      { name: "ZonePro XR1 Headset", price: 299.00, quantity: 1, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQN4mv102jACuPwSSwbCXKKS1c3fU28k8lUDvvG5PVxp1Sek29zbwml6EIwa6p0pBD6Ss2AEuTQ5DUwPqtlVPCeOgGTePfeUoiCdWz5a2rYsEgcTculfAzA15of5EOhdoWeFzTWFJh7Yl3kPY1nR68Y35ac9mqSKNMp5lOGcrh-8fMIunfnscNRNoA-z75aniG5GsUzZ5xFwsstw8ATKaElW1LWYh67Lmm80ZrAG8XRmbL8kiEW3g2HqxC3grFxlENJYkkl1vRbl5b" }
    ],
    total: 299.00,
  },
  {
    id: "ORD-2024-7756",
    date: "Mar 5, 2024",
    status: "Delivered",
    items: [
      { name: "Smart Fitness Watch Pro", price: 199.00, quantity: 2, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnnkxGYcD1Db1HJ9cnvOsNZZnZrgX-4R14Ka6XRKudixKjtFracuQwns3bw1VuHJBUFWs2KUnVQ_eC9S8CPRotL9WMGw9mX7-3JnJHoo-ES05Gr9iBeiZszevqkPfHkEC_UW7LK3FtD0C5srTovWRks5W5fg4qiBNqjnF2WPTDS1jN9fJsjZbdGuJRnHZBtpQBRMuewNLbY-LUEkYN5IndMIcesxu60bBLOLzEe_58iRWHtLCLI7D5BiMUXTc4ebaCBFzj2J2XaCC7" }
    ],
    total: 398.00,
  },
  {
    id: "ORD-2024-7690",
    date: "Feb 28, 2024",
    status: "Delivered",
    items: [
      { name: "Premium Leather Weekender", price: 450.00, quantity: 1, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuByLvVo_QztNQcTo-PWgzRPTtqXzxkDAHUvgGR72ginSM3N-5-9zz0l_FBpieJoQZDh0qQm-AUNHpAIZ_rqsgMofDpOUpo5NrC3JLT-L_mjNvHjrHAAQe2zAFAaZIjJ6GxGX6vwszWK8NN_RQR3GOsMUlao6UzI71uA1i1mzLyGK2QFxIa5qAPepLrYHdYtPw4b_vlqoz6YYZDQjwDiCGmp4XuHLLzW2r94JnerhiImHOd1RlSp5-KthSiWniH-CqiZCKZhzHoZjITt" }
    ],
    total: 450.00,
  },
];

const statusSteps = [
  { status: "Order Placed", date: "Mar 8, 2024", completed: true },
  { status: "Processing", date: "Mar 9, 2024", completed: true },
  { status: "Shipped", date: "Mar 10, 2024", completed: true, current: true },
  { status: "Out for Delivery", date: "Mar 12, 2024", completed: false },
  { status: "Delivered", date: "Mar 13, 2024", completed: false },
];

export default function OrdersPage() {
  return (
    <div className="flex flex-col">
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#f0f2f4] dark:border-gray-800 bg-white dark:bg-[#1a2632] px-4 lg:px-10 py-4 sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-3 text-[#111418] dark:text-white">
          <div className="size-8 text-primary">
            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fillRule="evenodd"></path>
            </svg>
          </div>
          <h2 className="text-xl font-black leading-tight tracking-tight">myzone</h2>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/cart" className="relative text-[#617589] hover:text-primary">
            <span className="material-symbols-outlined">shopping_cart</span>
          </Link>
          <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        </div>
      </header>

      <main className="flex-1 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-[#111418] dark:text-white mb-8">My Orders</h1>

          <div className="bg-white dark:bg-[#1a2632] rounded-xl border border-[#e5e7eb] dark:border-[#2a3441] overflow-hidden mb-8">
            <div className="p-6 border-b border-[#e5e7eb] dark:border-[#2a3441]">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-lg font-bold text-[#111418] dark:text-white">Order #{orders[0].id}</h2>
                  <p className="text-sm text-[#617589]">Placed on {orders[0].date}</p>
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">Shipped</span>
              </div>
              
              <div className="relative">
                <div className="flex justify-between">
                  {statusSteps.map((step, index) => (
                    <div key={step.status} className="flex flex-col items-center relative z-10">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        step.completed 
                          ? step.current 
                            ? 'bg-primary' 
                            : 'bg-green-500' 
                          : 'bg-gray-200 dark:bg-gray-700'
                      }`}>
                        {step.completed ? (
                          <span className={`material-symbols-outlined text-sm ${step.current ? 'text-white' : 'text-white'}`}>
                            {step.current ? 'radio_button_checked' : 'check'}
                          </span>
                        ) : (
                          <span className="material-symbols-outlined text-sm text-gray-400">{index + 1}</span>
                        )}
                      </div>
                      <span className={`text-xs mt-2 text-center ${step.current ? 'text-primary font-bold' : 'text-[#617589]'}`}>
                        {step.status}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="absolute top-4 left-0 right-0 h-0.5 bg-gray-200 dark:bg-gray-700 -z-0"></div>
                <div className="absolute top-4 left-0 w-3/4 h-0.5 bg-primary -z-0"></div>
              </div>
            </div>

            <div className="p-6">
              {orders[0].items.map((item) => (
                <div key={item.name} className="flex gap-4">
                  <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#111418] dark:text-white">{item.name}</h3>
                    <p className="text-sm text-[#617589]">Qty: {item.quantity}</p>
                    <p className="font-bold text-[#111418] dark:text-white mt-1">${item.price}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="px-6 pb-6">
              <div className="flex justify-between items-center pt-4 border-t border-[#e5e7eb] dark:border-[#2a3441]">
                <div>
                  <p className="text-sm text-[#617589]">Estimated Delivery</p>
                  <p className="font-bold text-[#111418] dark:text-white">Mar 13, 2024</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-[#617589]">Total</p>
                  <p className="font-bold text-lg text-[#111418] dark:text-white">${orders[0].total}</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-xl font-bold text-[#111418] dark:text-white mb-4">Order History</h2>
          <div className="space-y-4">
            {orders.slice(1).map((order) => (
              <div key={order.id} className="bg-white dark:bg-[#1a2632] rounded-xl border border-[#e5e7eb] dark:border-[#2a3441] p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-[#111418] dark:text-white">Order #{order.id}</h3>
                    <p className="text-sm text-[#617589]">{order.date}</p>
                  </div>
                  <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                    order.status === 'Delivered' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {order.status}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-3">
                    {order.items.map((item) => (
                      <div key={item.name} className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-[#111418] dark:text-white">${order.total}</p>
                    <Link href={`/orders/${order.id}`} className="text-sm text-primary hover:underline">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
