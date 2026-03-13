import Link from "next/link";

const cartItems = [
  {
    id: 1,
    name: "ZonePro XR1 Headset",
    price: 299.00,
    quantity: 1,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQN4mv102jACuPwSSwbCXKKS1c3fU28k8lUDvvG5PVxp1Sek29zbwml6EIwa6p0pBD6Ss2AEuTQ5DUwPqtlVPCeOgGTePfeUoiCdWz5a2rYsEgcTculfAzA15of5EOhdoWeFzTWFJh7Yl3kPY1nR68Y35ac9mqSKNMp5lOGcrh-8fMIunfnscNRNoA-z75aniG5GsUzZ5xFwsstw8ATKaElW1LWYh67Lmm80ZrAG8XRmbL8kiEW3g2HqxC3grFxlENJYkkl1vRbl5b",
  },
  {
    id: 2,
    name: "Smart Fitness Watch Pro",
    price: 199.00,
    quantity: 2,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnnkxGYcD1Db1HJ9cnvOsNZZnZrgX-4R14Ka6XRKudixKjtFracuQwns3bw1VuHJBUFWs2KUnVQ_eC9S8CPRotL9WMGw9mX7-3JnJHoo-ES05Gr9iBeiZszevqkPfHkEC_UW7LK3FtD0C5srTovWRks5W5fg4qiBNqjnF2WPTDS1jN9fJsjZbdGuJRnHZBtpQBRMuewNLbY-LUEkYN5IndMIcesxu60bBLOLzEe_58iRWHtLCLI7D5BiMUXTc4ebaCBFzj2J2XaCC7",
  },
];

export default function CheckoutPage() {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="flex flex-col">
      <header className="w-full bg-white dark:bg-[#1c2631] border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-white font-bold text-lg">m</div>
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">myzone</span>
            </Link>
          </div>
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
            <span className="material-symbols-outlined text-lg">lock</span>
            <span className="text-sm font-medium">Secure Checkout</span>
          </div>
        </div>
      </header>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <section className="lg:col-span-7 space-y-8">
          <nav className="flex items-center text-sm font-medium text-slate-500 dark:text-slate-400 mb-6">
            <span className="text-primary cursor-pointer hover:underline">Cart</span>
            <span className="material-symbols-outlined text-sm mx-2">chevron_right</span>
            <span className="text-slate-900 dark:text-white">Shipping & Address</span>
            <span className="material-symbols-outlined text-sm mx-2">chevron_right</span>
            <span className="text-slate-300 dark:text-slate-600">Payment</span>
          </nav>

          <div className="bg-white dark:bg-[#1c2631] rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Fast Checkout</h2>
              <span className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-900/30 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:text-blue-300 ring-1 ring-inset ring-blue-700/10 dark:ring-blue-400/20">
                <span className="material-symbols-outlined text-[14px] mr-1">bolt</span> One-Tap
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button className="relative flex items-center justify-center w-full h-12 bg-black hover:bg-gray-900 text-white rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black dark:focus:ring-offset-slate-800 shadow-sm group">
                <span className="material-symbols-outlined text-xl mr-2">apple</span>
                <span className="font-semibold text-sm">Pay</span>
              </button>
              <button className="relative flex items-center justify-center w-full h-12 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-600 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 shadow-sm group">
                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="font-semibold text-sm">Google Pay</span>
              </button>
            </div>
          </div>

          <div className="relative flex items-center py-5">
            <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
            <span className="flex-shrink-0 mx-4 text-slate-400 dark:text-slate-500 text-sm">or continue with</span>
            <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
          </div>

          <div className="bg-white dark:bg-[#1c2631] rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Contact Information</h2>
            <form className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">First Name</label>
                  <input type="text" className="h-11 px-4 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary" placeholder="John" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Last Name</label>
                  <input type="text" className="h-11 px-4 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Doe" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</label>
                <input type="email" className="h-11 px-4 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary" placeholder="john@example.com" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Phone Number</label>
                <input type="tel" className="h-11 px-4 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary" placeholder="+1 (555) 000-0000" />
              </div>
            </form>
          </div>

          <div className="bg-white dark:bg-[#1c2631] rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Shipping Address</h2>
            <form className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Street Address</label>
                <input type="text" className="h-11 px-4 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary" placeholder="123 Main Street" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Apartment, suite, etc.</label>
                <input type="text" className="h-11 px-4 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Apt 4B" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="flex flex-col gap-2 col-span-2 sm:col-span-1">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">City</label>
                  <input type="text" className="h-11 px-4 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary" placeholder="New York" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">State</label>
                  <select className="h-11 px-4 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>NY</option>
                    <option>CA</option>
                    <option>TX</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">ZIP Code</label>
                  <input type="text" className="h-11 px-4 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary" placeholder="10001" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Country</label>
                <select className="h-11 px-4 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>United States</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                </select>
              </div>
            </form>
          </div>

          <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl transition-colors shadow-lg">
            Continue to Payment
          </button>
        </section>

        <section className="lg:col-span-5">
          <div className="bg-white dark:bg-[#1c2631] rounded-xl border border-slate-200 dark:border-slate-700 p-6 sticky top-24">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Order Summary</h2>
            <div className="flex flex-col gap-4 mb-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 dark:bg-slate-800 shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-slate-900 dark:text-white line-clamp-1">{item.name}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Qty: {item.quantity}</p>
                  </div>
                  <span className="text-sm font-medium text-slate-900 dark:text-white">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-slate-200 dark:border-slate-700 pt-4 flex flex-col gap-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500 dark:text-slate-400">Subtotal</span>
                <span className="text-slate-900 dark:text-white font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500 dark:text-slate-400">Shipping</span>
                <span className="text-green-600 font-medium">Free</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500 dark:text-slate-400">Tax</span>
                <span className="text-slate-900 dark:text-white font-medium">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between pt-3 border-t border-slate-200 dark:border-slate-700">
                <span className="font-bold text-slate-900 dark:text-white">Total</span>
                <span className="font-bold text-xl text-slate-900 dark:text-white">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
