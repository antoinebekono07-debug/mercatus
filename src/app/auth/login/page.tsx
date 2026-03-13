import Link from "next/link";

export default function LoginPage() {
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
        <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-[#f0f2f4] dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-[#111418] dark:text-gray-200 text-sm font-bold leading-normal transition-colors">
          <span className="truncate">Need Help?</span>
        </button>
      </header>

      <main className="flex-grow flex flex-col justify-center items-center px-4 py-8 sm:px-6">
        <div className="w-full max-w-[440px] bg-white dark:bg-[#16202a] rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.2)] border border-[#f0f2f4] dark:border-gray-800 p-8 flex flex-col">
          <div className="mb-8 text-center">
            <h1 className="text-[#111418] dark:text-white tracking-tight text-3xl font-bold leading-tight mb-2">Log in</h1>
            <p className="text-[#617589] dark:text-gray-400 text-base font-normal leading-normal">Access your intelligent marketplace.</p>
          </div>

          <form action="#" className="flex flex-col gap-5" method="POST">
            <div className="flex flex-col gap-2">
              <label className="text-[#111418] dark:text-gray-200 text-sm font-medium leading-normal" htmlFor="email">Email or username</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#617589] dark:text-gray-500">
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                </div>
                <input autoComplete="email" className="form-input flex w-full min-w-0 resize-none overflow-hidden rounded-lg text-[#111418] dark:text-white border border-[#dbe0e6] dark:border-gray-700 bg-white dark:bg-[#101922] h-12 pl-10 pr-4 placeholder:text-[#617589] dark:placeholder:text-gray-500 text-base font-normal leading-normal focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm" id="email" placeholder="name@example.com" required type="email"/>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[#111418] dark:text-gray-200 text-sm font-medium leading-normal" htmlFor="password">Password</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#617589] dark:text-gray-500">
                  <span className="material-symbols-outlined text-[20px]">lock</span>
                </div>
                <input className="form-input flex w-full min-w-0 resize-none overflow-hidden rounded-lg text-[#111418] dark:text-white border border-[#dbe0e6] dark:border-gray-700 bg-white dark:bg-[#101922] h-12 pl-10 pr-10 placeholder:text-[#617589] dark:placeholder:text-gray-500 text-base font-normal leading-normal focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm" id="password" placeholder="Enter your password" required type="password"/>
                <button aria-label="Toggle password visibility" className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#617589] dark:text-gray-500 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer" type="button">
                  <span className="material-symbols-outlined text-[20px]">visibility</span>
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"/>
                <span className="text-sm text-[#617589] dark:text-gray-400">Remember me</span>
              </label>
              <a href="/auth/htmlForgot-password" className="text-sm font-medium text-primary hover:underline">Forgot password?</a>
            </div>

            <button type="submit" className="flex items-center justify-center cursor-pointer rounded-lg h-12 px-4 bg-primary hover:bg-primary-dark text-white text-base font-bold leading-normal transition-colors shadow-sm">
              Log In
            </button>
          </form>

          <div className="relative flex items-center py-5">
            <div className="flex-grow border-t border-[#e5e7eb] dark:border-gray-700"></div>
            <span className="flex-shrink-0 mx-4 text-[#617589] dark:text-gray-500 text-sm">or continue with</span>
            <div className="flex-grow border-t border-[#e5e7eb] dark:border-gray-700"></div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 cursor-pointer rounded-lg h-11 px-4 bg-white dark:bg-[#101922] border border-[#dbe0e6] dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-sm font-medium text-[#111418] dark:text-white">Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 cursor-pointer rounded-lg h-11 px-4 bg-[#111418] dark:bg-white border border-transparent hover:bg-[#1f2937] dark:hover:bg-gray-100 transition-colors">
              <svg className="w-5 h-5 text-white dark:text-[#111418]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
              </svg>
              <span className="text-sm font-medium text-white dark:text-[#111418]">Apple</span>
            </button>
          </div>

          <p className="mt-8 text-center text-sm text-[#617589] dark:text-gray-400">
            Don&apos;t have an account?{" "}
            <Link href="/auth/register" className="font-medium text-primary hover:underline">Sign up</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
