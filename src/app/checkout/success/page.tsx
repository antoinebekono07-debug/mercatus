import Link from "next/link";

export default function CheckoutSuccessPage() {
  return (
    <div className="flex flex-col">
      <header className="w-full bg-white dark:bg-[#1c2631] border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-white font-bold text-lg">m</div>
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">myzone</span>
          </Link>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center py-16 px-4">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
            <span className="material-symbols-outlined text-green-600 text-5xl">check_circle</span>
          </div>
          
          <h1 className="text-3xl font-bold text-[#111418] dark:text-white mb-4">Order Confirmed!</h1>
          <p className="text-[#617589] dark:text-gray-400 mb-8">
            Thank you for your purchase. We&apos;ve sent a confirmation email with your order details.
          </p>

          <div className="bg-white dark:bg-[#1a2632] rounded-xl border border-[#e5e7eb] dark:border-[#2a3441] p-6 mb-8">
            <div className="flex justify-between mb-4 pb-4 border-b border-[#e5e7eb] dark:border-[#2a3441]">
              <span className="text-[#617589]">Order Number</span>
              <span className="font-bold text-[#111418] dark:text-white">#ORD-2024-7829</span>
            </div>
            <div className="flex justify-between mb-4 pb-4 border-b border-[#e5e7eb] dark:border-[#2a3441]">
              <span className="text-[#617589]">Estimated Delivery</span>
              <span className="font-bold text-[#111418] dark:text-white">Mar 15, 2024</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#617589]">Total</span>
              <span className="font-bold text-lg text-[#111418] dark:text-white">$697.00</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Link
              href="/orders"
              className="flex items-center justify-center w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-xl transition-colors"
            >
              Track Order
            </Link>
            <Link
              href="/products"
              className="flex items-center justify-center w-full bg-white dark:bg-[#1a2632] border border-[#e5e7eb] dark:border-[#2a3441] text-[#111418] dark:text-white font-bold py-3 rounded-xl hover:bg-gray-50 dark:hover:bg-[#2a3441] transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
