import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-[#1a2632] border-t border-[#e5e7eb] dark:border-[#2a3441] px-4 lg:px-10 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-8">
          <div className="col-span-2">
            <div className="flex items-center gap-3 text-primary mb-4">
              <div className="size-8 flex items-center justify-center">
                <svg
                  className="w-full h-full"
                  fill="currentColor"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-black leading-tight tracking-tight text-[#111418] dark:text-white">
                myzone
              </h2>
            </div>
            <p className="text-[#617589] dark:text-gray-400 text-sm mb-4">
              The intelligent global marketplace connecting buyers and sellers worldwide.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-[#617589] hover:text-primary transition-colors">
                <span className="material-symbols-outlined">twitter</span>
              </a>
              <a href="#" className="text-[#617589] hover:text-primary transition-colors">
                <span className="material-symbols-outlined">linkedin</span>
              </a>
              <a href="#" className="text-[#617589] hover:text-primary transition-colors">
                <span className="material-symbols-outlined">facebook</span>
              </a>
              <a href="#" className="text-[#617589] hover:text-primary transition-colors">
                <span className="material-symbols-outlined">instagram</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[#111418] dark:text-white font-semibold text-sm mb-4">Marketplace</h3>
            <ul className="space-y-2">
              <li><Link href="/products" className="text-[#617589] dark:text-gray-400 text-sm hover:text-primary transition-colors">Browse Products</Link></li>
              <li><Link href="/products?category=electronics" className="text-[#617589] dark:text-gray-400 text-sm hover:text-primary transition-colors">Electronics</Link></li>
              <li><Link href="/products?category=fashion" className="text-[#617589] dark:text-gray-400 text-sm hover:text-primary transition-colors">Fashion</Link></li>
              <li><Link href="/products?category=home" className="text-[#617589] dark:text-gray-400 text-sm hover:text-primary transition-colors">Home & Living</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#111418] dark:text-white font-semibold text-sm mb-4">For Sellers</h3>
            <ul className="space-y-2">
              <li><Link href="/seller/register" className="text-[#617589] dark:text-gray-400 text-sm hover:text-primary transition-colors">Start Selling</Link></li>
              <li><Link href="/seller/dashboard" className="text-[#617589] dark:text-gray-400 text-sm hover:text-primary transition-colors">Seller Dashboard</Link></li>
              <li><Link href="/seller/analytics" className="text-[#617589] dark:text-gray-400 text-sm hover:text-primary transition-colors">Analytics</Link></li>
              <li><Link href="/seller/support" className="text-[#617589] dark:text-gray-400 text-sm hover:text-primary transition-colors">Seller Support</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#111418] dark:text-white font-semibold text-sm mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-[#617589] dark:text-gray-400 text-sm hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="text-[#617589] dark:text-gray-400 text-sm hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="/press" className="text-[#617589] dark:text-gray-400 text-sm hover:text-primary transition-colors">Press</Link></li>
              <li><Link href="/contact" className="text-[#617589] dark:text-gray-400 text-sm hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#111418] dark:text-white font-semibold text-sm mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/help" className="text-[#617589] dark:text-gray-400 text-sm hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link href="/help/shipping" className="text-[#617589] dark:text-gray-400 text-sm hover:text-primary transition-colors">Shipping Info</Link></li>
              <li><Link href="/help/returns" className="text-[#617589] dark:text-gray-400 text-sm hover:text-primary transition-colors">Returns</Link></li>
              <li><Link href="/help/privacy" className="text-[#617589] dark:text-gray-400 text-sm hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#e5e7eb] dark:border-[#2a3441] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#617589] dark:text-gray-400 text-sm">
            © 2024 myzone. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/help/terms" className="text-[#617589] dark:text-gray-400 text-sm hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/help/privacy" className="text-[#617589] dark:text-gray-400 text-sm hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/help/cookies" className="text-[#617589] dark:text-gray-400 text-sm hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
