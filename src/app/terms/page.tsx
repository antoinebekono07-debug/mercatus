'use client';

import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
      <header className="sticky top-0 w-full flex items-center justify-between border-b border-[#f0f2f4] dark:border-gray-800 bg-white/90 dark:bg-[#101922]/90 backdrop-blur-md px-6 lg:px-10 py-3 z-50">
        <Link href="/" className="flex items-center gap-4">
          <div className="size-8 flex items-center justify-center bg-primary/10 rounded-lg text-primary">
            <span className="material-symbols-outlined text-2xl">spa</span>
          </div>
          <h2 className="text-lg font-bold">myzone</h2>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/products" className="text-sm font-medium hover:text-primary">Marketplace</Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary">About Us</Link>
          <Link href="/help" className="text-sm font-medium hover:text-primary">Help Center</Link>
        </nav>
      </header>

      <main className="flex-1 max-w-4xl mx-auto p-6 lg:p-12">
        <aside className="hidden lg:block fixed left-8 top-32 w-64">
          <nav className="flex flex-col gap-1">
            <h3 className="px-3 pb-3 text-xs font-bold text-gray-500 uppercase">Contents</h3>
            <Link href="#introduction" className="px-3 py-2 text-sm font-medium text-primary bg-primary/5 rounded-md">Introduction</Link>
            <Link href="#user-responsibilities" className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-primary">User Responsibilities</Link>
            <Link href="#seller-obligations" className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-primary">Seller Obligations</Link>
            <Link href="#intellectual-property" className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-primary">Intellectual Property</Link>
            <Link href="#payment-terms" className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-primary">Payment Terms</Link>
            <Link href="#liability" className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-primary">Limitation of Liability</Link>
            <Link href="#contact" className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-primary">Contact Us</Link>
          </nav>
        </aside>

        <div className="lg:ml-80">
          <h1 className="text-4xl font-black mb-8">Terms of Service</h1>
          <p className="text-[#617589] mb-8">Last updated: January 15, 2024</p>

          <div className="space-y-8">
            <section id="introduction">
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-[#617589] leading-relaxed">
                Welcome to myzone. By accessing and using our platform, you agree to be bound by these Terms of Service. 
                These terms govern your use of myzone&apos;s intelligent global marketplace, including all features, services, 
                and tools provided through our website and mobile applications.
              </p>
            </section>

            <section id="user-responsibilities">
              <h2 className="text-2xl font-bold mb-4">2. User Responsibilities</h2>
              <p className="text-[#617589] leading-relaxed mb-4">
                As a user of myzone, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#617589]">
                <li>Provide accurate and complete information during registration</li>
                <li>Maintain the security of your account credentials</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not engage in any fraudulent or illegal activities</li>
                <li>Respect the rights of other users and third parties</li>
              </ul>
            </section>

            <section id="seller-obligations">
              <h2 className="text-2xl font-bold mb-4">3. Seller Obligations</h2>
              <p className="text-[#617589] leading-relaxed mb-4">
                Sellers on myzone must:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#617589]">
                <li>Only list items that are legal to sell in their jurisdiction</li>
                <li>Provide accurate product descriptions and images</li>
                <li>Ship products within the stated timeframe</li>
                <li>Comply with tax obligations in their region</li>
                <li>Maintain adequate inventory for listed items</li>
              </ul>
            </section>

            <section id="intellectual-property">
              <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
              <p className="text-[#617589] leading-relaxed">
                All content, trademarks, and materials on myzone are the property of myzone or its licensors. 
                You may not copy, reproduce, or distribute any content from our platform without prior written consent.
              </p>
            </section>

            <section id="payment-terms">
              <h2 className="text-2xl font-bold mb-4">5. Payment Terms</h2>
              <p className="text-[#617589] leading-relaxed">
                Payments are processed securely through our platform. Sellers receive payouts according to our 
                payout schedule, minus applicable fees. All prices are in the currency specified at checkout.
              </p>
            </section>

            <section id="liability">
              <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
              <p className="text-[#617589] leading-relaxed">
                myzone is not liable for any indirect, incidental, or consequential damages arising from 
                your use of the platform. Our total liability is limited to the amount you paid for 
                transactions directly related to the claim.
              </p>
            </section>

            <section id="contact">
              <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
              <p className="text-[#617589] leading-relaxed">
                If you have questions about these Terms of Service, please contact us at{' '}
                <a href="mailto:legal@myzone.com" className="text-primary hover:underline">legal@myzone.com</a>
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
