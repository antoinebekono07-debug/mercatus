import Link from "next/link";

const cartItems = [
  {
    id: 1,
    name: "ZonePro XR1 Headset",
    description: "Premium noise-canceling wireless headset",
    price: 299.00,
    quantity: 1,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQN4mv102jACuPwSSwbCXKKS1c3fU28k8lUDvvG5PVxp1Sek29zbwml6EIwa6p0pBD6Ss2AEuTQ5DUwPqtlVPCeOgGTePfeUoiCdWz5a2rYsEgcTculfAzA15of5EOhdoWeFzTWFJh7Yl3kPY1nR68Y35ac9mqSKNMp5lOGcrh-8fMIunfnscNRNoA-z75aniG5GsUzZ5xFwsstw8ATKaElW1LWYh67Lmm80ZrAG8XRmbL8kiEW3g2HqxC3grFxlENJYkkl1vRbl5b",
    inStock: true,
  },
  {
    id: 2,
    name: "Smart Fitness Watch Pro",
    description: "AI-powered health monitoring",
    price: 199.00,
    quantity: 2,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnnkxGYcD1Db1HJ9cnvOsNZZnZrgX-4R14Ka6XRKudixKjtFracuQwns3bw1VuHJBUFWs2KUnVQ_eC9S8CPRotL9WMGw9mX7-3JnJHoo-ES05Gr9iBeiZszevqkPfHkEC_UW7LK3FtD0C5srTovWRks5W5fg4qiBNqjnF2WPTDS1jN9fJsjZbdGuJRnHZBtpQBRMuewNLbY-LUEkYN5IndMIcesxu60bBLOLzEe_58iRWHtLCLI7D5BiMUXTc4ebaCBFzj2J2XaCC7",
    inStock: true,
  },
];

export default function CartPage() {
  const subtotal = cartItems.reduce((sum: number, item) => sum + item.price * item.quantity, 0);
  const shipping = 0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="flex flex-col">
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-[#111418] dark:text-white text-2xl font-bold mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 flex flex-col gap-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 p-4 bg-white dark:bg-[#1a2632] rounded-xl border border-[#e5e7eb] dark:border-[#2a3441]">
                <div className="w-24 h-24 rounded-lg overflow-hidden bg-gray-100 dark:bg-[#222f3e] shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-[#111418] dark:text-white font-semibold">{item.name}</h3>
                      <p className="text-sm text-[#617589] dark:text-gray-400">{item.description}</p>
                    </div>
                    <button className="text-[#617589] hover:text-red-500 transition-colors">
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center border border-[#e5e7eb] dark:border-[#3e4a5b] rounded-lg overflow-hidden">
                      <button className="flex items-center justify-center w-8 h-8 text-[#617589] hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-sm">remove</span>
                      </button>
                      <span className="w-8 text-center text-sm text-[#111418] dark:text-white">{item.quantity}</span>
                      <button className="flex items-center justify-center w-8 h-8 text-[#617589] hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-sm">add</span>
                      </button>
                    </div>
                    <span className="text-lg font-bold text-[#111418] dark:text-white">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))}

            <Link href="/products" className="flex items-center gap-2 text-primary font-medium hover:underline">
              <span className="material-symbols-outlined">arrow_back</span>
              Continue Shopping
            </Link>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-[#1a2632] rounded-xl border border-[#e5e7eb] dark:border-[#2a3441] p-6 sticky top-24">
              <h2 className="text-[#111418] dark:text-white text-lg font-bold mb-6">Order Summary</h2>
              
              <div className="flex flex-col gap-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-[#617589] dark:text-gray-400">Subtotal</span>
                  <span className="text-[#111418] dark:text-white font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#617589] dark:text-gray-400">Shipping</span>
                  <span className="text-green-600 font-medium">{shipping === 0 ? 'Free' : `$${Number(shipping).toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#617589] dark:text-gray-400">Tax (8%)</span>
                  <span className="text-[#111418] dark:text-white font-medium">${tax.toFixed(2)}</span>
                </div>
                <div className="h-px bg-[#e5e7eb] dark:bg-[#3e4a5b] my-2"></div>
                <div className="flex justify-between">
                  <span className="text-[#111418] dark:text-white font-bold">Total</span>
                  <span className="text-[#111418] dark:text-white font-bold text-xl">${total.toFixed(2)}</span>
                </div>
              </div>

              <Link
                href="/checkout"
                className="flex items-center justify-center w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-lg transition-colors shadow-soft"
              >
                Proceed to Checkout
              </Link>

              <div className="flex items-center justify-center gap-4 mt-6 text-[#617589] dark:text-gray-400">
                <span className="material-symbols-outlined text-2xl">lock</span>
                <span className="text-xs">Secure checkout powered by myzone</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
