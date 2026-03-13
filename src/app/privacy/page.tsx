import Link from "next/link";

export default function PrivacyPage() {
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
        <Link href="/help" className="text-[#111418] dark:text-gray-300 hover:text-primary font-medium text-sm">
          Back to Help
        </Link>
      </header>

      <main className="flex-1 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-black text-[#111418] dark:text-white mb-8">Privacy Policy</h1>
          <p className="text-[#617589] dark:text-gray-400 mb-8">Last updated: March 2024</p>

          <div className="prose dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-bold text-[#111418] dark:text-white mb-4">1. Introduction</h2>
              <p className="text-[#4b5563] dark:text-gray-300">
                At myzone, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our marketplace platform.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#111418] dark:text-white mb-4">2. Information We Collect</h2>
              <p className="text-[#4b5563] dark:text-gray-300 mb-4">
                We collect information you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#4b5563] dark:text-gray-300">
                <li>Account information (name, email, phone number)</li>
                <li>Business information (company name, address, tax ID)</li>
                <li>Payment information (processed securely through our payment partners)</li>
                <li>Communication data (messages, support tickets)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#111418] dark:text-white mb-4">3. How We Use Your Information</h2>
              <p className="text-[#4b5563] dark:text-gray-300 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#4b5563] dark:text-gray-300">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Verify seller identities and business credentials</li>
                <li>Send you technical notices, updates, and support messages</li>
                <li>Respond to your comments, questions, and requests</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#111418] dark:text-white mb-4">4. Information Sharing</h2>
              <p className="text-[#4b5563] dark:text-gray-300">
                We do not sell your personal information. We may share information with service providers who assist us in operating our platform, conducting our business, or servicing you. All such third parties are obligated to maintain the confidentiality of your information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#111418] dark:text-white mb-4">5. Data Security</h2>
              <p className="text-[#4b5563] dark:text-gray-300">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#111418] dark:text-white mb-4">6. Your Rights</h2>
              <p className="text-[#4b5563] dark:text-gray-300 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#4b5563] dark:text-gray-300">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to processing of your personal information</li>
                <li>Request restriction of processing your personal information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#111418] dark:text-white mb-4">7. Contact Us</h2>
              <p className="text-[#4b5563] dark:text-gray-300">
                If you have any questions about this Privacy Policy, please contact us at privacy@myzone.com.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
