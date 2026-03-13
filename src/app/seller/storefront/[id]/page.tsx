import Link from "next/link";

export default function SellerStorefrontPage() {
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
          <Link href="/auth/login" className="text-[#111418] dark:text-white font-medium hover:text-primary">Sign In</Link>
        </div>
      </header>

      <main className="flex-1">
        <div className="bg-gradient-to-r from-primary to-blue-800 py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white flex items-center justify-center text-4xl font-bold text-primary">TH</div>
            <h1 className="text-3xl md:text-4xl font-black text-white mb-4">TechHaven</h1>
            <p className="text-blue-100 mb-6">Premium Electronics & Smart Devices</p>
            <div className="flex justify-center gap-4">
              <span className="flex items-center gap-1 text-white">
                <span className="material-symbols-outlined text-yellow-400">star</span>
                4.8 (2,341 reviews)
              </span>
              <span className="flex items-center gap-1 text-white">
                <span className="material-symbols-outlined">location_on</span>
                San Francisco, CA
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "ZonePro XR1 Headset", price: 299, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQN4mv102jACuPwSSwbCXKKS1c3fU28k8lUDvvG5PVxp1Sek29zbwml6EIwa6p0pBD6Ss2AEuTQ5DUwPqtlVPCeOgGTePfeUoiCdWz5a2rYsEgcTculfAzA15of5EOhdoWeFzTWFJh7Yl3kPY1nR68Y35ac9mqSKNMp5lOGcrh-8fMIunfnscNRNoA-z75aniG5GsUzZ5xFwsstw8ATKaElW1LWYh67Lmm80ZrAG8XRmbL8kiEW3g2HqxC3grFxlENJYkkl1vRbl5b" },
              { name: "Smart Fitness Watch Pro", price: 199, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnnkxGYcD1Db1HJ9cnvOsNZZnZrgX-4R14Ka6XRKudixKjtFracuQwns3bw1VuHJBUFWs2KUnVQ_eC9S8CPRotL9WMGw9mX7-3JnJHoo-ES05Gr9iBeiZszevqkPfHkEC_UW7LK3FtD0C5srTovWRks5W5fg4qiBNqjnF2WPTDS1jN9fJsjZbdGuJRnHZBtpQBRMuewNLbY-LUEkYN5IndMIcesxu60bBLOLzEe_58iRWHtLCLI7D5BiMUXTc4ebaCBFzj2J2XaCC7" },
              { name: "EcoSmart Home Hub", price: 599, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEbDnlB5njN18aAkpOZY8GsQVntop2Q26wTg7WPpBT_kqAktpAjln7j5IJybTJhuq0JpI1ec1cVdKS_q3qklTVg4ZxKvK-WgTRbabLrGCdUBYKNxu_Zq_eFeQu_gek02eswuED9BX-lUh7KQeN2-1UnOXfoVYAbsFEt8S8UCIlyyari6e4bajzgL2in3EIVxYzzlVgZn1pvNd9c_F68MHuOc-hDBbXMTIBTF3ghcPsWLoOpHrBBFaChfbC3JXtiq57gf73X8MID9tC" },
            ].map((product) => (
              <Link key={product.name} href="/products/1" className="group bg-white dark:bg-[#1a2632] rounded-xl border border-[#e5e7eb] dark:border-[#2a3441] overflow-hidden hover:shadow-lg transition-all">
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-[#111418] dark:text-white mb-1">{product.name}</h3>
                  <p className="text-lg font-bold text-[#111418] dark:text-white">${product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
