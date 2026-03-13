import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <div className="flex flex-col">
      <header className="w-full bg-white dark:bg-[#16202a] border-b border-[#f0f2f4] dark:border-gray-800 px-6 py-4 lg:px-10 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3 text-[#111418] dark:text-white">
          <div className="w-8 h-8 text-primary">
            <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
          </div>
          <h2 className="text-xl font-bold leading-tight tracking-[-0.015em] select-none">myzone</h2>
        </div>
      </header>

      <main className="flex-grow flex flex-col justify-center items-center px-4 py-8 sm:px-6">
        <div className="w-full max-w-[440px] bg-white dark:bg-[#16202a] rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.2)] border border-[#f0f2f4] dark:border-gray-800 p-8 flex flex-col">
          <div className="mb-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
              <span className="material-symbols-outlined text-4xl text-primary">mail</span>
            </div>
            <h1 className="text-[#111418] dark:text-white tracking-tight text-3xl font-bold leading-tight mb-2">Forgot password?</h1>
            <p className="text-[#617589] dark:text-gray-400 text-base font-normal leading-normal">
              No worries, we&apos;ll send you reset instructions.
            </p>
          </div>

          <form action="#" className="flex flex-col gap-5" method="POST">
            <div className="flex flex-col gap-2">
              <label className="text-[#111418] dark:text-gray-200 text-sm font-medium leading-normal" htmlFor="email">Email</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#617589] dark:text-gray-500">
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                </div>
                <input autoComplete="email" className="form-input flex w-full min-w-0 resize-none overflow-hidden rounded-lg text-[#111418] dark:text-white border border-[#dbe0e6] dark:border-gray-700 bg-white dark:bg-[#101922] h-12 pl-10 pr-4 placeholder:text-[#617589] dark:placeholder:text-gray-500 text-base font-normal leading-normal focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm" id="email" placeholder="Enter your email" required type="email"/>
              </div>
            </div>

            <button type="submit" className="flex items-center justify-center cursor-pointer rounded-lg h-12 px-4 bg-primary hover:bg-primary-dark text-white text-base font-bold leading-normal transition-colors shadow-sm">
              Reset Password
            </button>
          </form>

          <Link href="/auth/login" className="mt-6 flex items-center justify-center gap-2 text-[#617589] dark:text-gray-400 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
            <span className="text-sm font-medium">Back to log in</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
