import Link from "next/link";

const categories = [
  { name: "Electronics", count: "12,543 Products", icon: "devices", color: "blue" },
  { name: "Apparel", count: "8,230 Products", icon: "styler", color: "purple" },
  { name: "Home", count: "15,100 Products", icon: "chair", color: "green" },
  { name: "Beauty", count: "5,670 Products", icon: "spa", color: "pink" },
  { name: "Sports", count: "4,215 Products", icon: "sports_soccer", color: "orange" },
  { name: "Industrial", count: "9,850 Products", icon: "precision_manufacturing", color: "gray" },
];

const featuredProducts = [
  {
    title: "Pro Audio Noise Canceling Headphones",
    price: "$299.00",
    originalPrice: "$350.00",
    label: "Editor's Choice",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQN4mv102jACuPwSSwbCXKKS1c3fU28k8lUDvvG5PVxp1Sek29zbwml6EIwa6p0pBD6Ss2AEuTQ5DUwPqtlVPCeOgGTePfeUoiCdWz5a2rYsEgcTculfAzA15of5EOhdoWeFzTWFJh7Yl3kPY1nR68Y35ac9mqSKNMp5lOGcrh-8fMIunfnscNRNoA-z75aniG5GsUzZ5xFwsstw8ATKaElW1LWYh67Lmm80ZrAG8XRmbL8kiEW3g2HqxC3grFxlENJYkkl1vRbl5b",
    large: true,
  },
  {
    title: "Premium Leather Weekender",
    subtitle: "Handcrafted in Italy",
    price: "$450.00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuByLvVo_QztNQcTo-PWgzRPTtqXzxkDAHUvgGR72ginSM3N-5-9zz0l_FBpieJoQZDh0qQm-AUNHpAIZ_rqsgMofDpOUpo5NrC3JLT-L_mjNvHjrHAAQe2zAFAaZIjJ6GxGX6vwszWK8NN_RQR3GOsMUlao6UzI71uA1i1mzLyGK2QFxIa5qAPepLrYHdYtPw4b_vlqoz6YYZDQjwDiCGmp4XuHLLzW2r94JnerhiImHOd1RlSp5-KthSiWniH-CqiZCKZhzHoZjITt",
    large: false,
  },
  {
    title: "Smart Fitness Watch Pro",
    subtitle: "AI Health Tracking",
    price: "$199.00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnnkxGYcD1Db1HJ9cnvOsNZZnZrgX-4R14Ka6XRKudixKjtFracuQwns3bw1VuHJBUFWs2KUnVQ_eC9S8CPRotL9WMGw9mX7-3JnJHoo-ES05Gr9iBeiZszevqkPfHkEC_UW7LK3FtD0C5srTovWRks5W5fg4qiBNqjnF2WPTDS1jN9fJsjZbdGuJRnHZBtpQBRMuewNLbY-LUEkYN5IndMIcesxu60bBLOLzEe_58iRWHtLCLI7D5BiMUXTc4ebaCBFzj2J2XaCC7",
    large: false,
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <section className="w-full bg-white dark:bg-background-dark py-12 lg:py-24 px-4 lg:px-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40%] h-[60%] bg-gradient-to-bl from-blue-50/50 to-transparent dark:from-blue-900/10 pointer-events-none rounded-bl-full"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-20 items-center">
            <div className="flex-1 flex flex-col gap-8 text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 text-primary px-3 py-1.5 rounded-full w-fit">
                <span className="material-symbols-outlined text-sm filled-icon">verified_user</span>
                <span className="text-xs font-bold uppercase tracking-wider">Trusted by 10k+ Global Partners</span>
              </div>
              <h1 className="text-[#111418] dark:text-white text-4xl lg:text-6xl font-black leading-[1.1] tracking-tight">
                The Trusted Future of{" "}
                <span className="text-primary relative inline-block">
                  Global Commerce
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-yellow-400 opacity-60" preserveAspectRatio="none" viewBox="0 0 100 10">
                    <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="8"></path>
                  </svg>
                </span>
              </h1>
              <h2 className="text-[#4b5563] dark:text-gray-300 text-lg lg:text-xl font-normal leading-relaxed">
                A verified ecosystem where intelligent agents connect ambitious sellers with discerning buyers. Experience operational excellence powered by trust.
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <Link href="/products" className="flex items-center justify-center gap-3 w-full sm:w-auto min-w-[180px] cursor-pointer rounded-full h-14 px-8 bg-primary text-white text-base font-bold leading-normal hover:bg-primary-dark transition-all shadow-lg hover:shadow-blue-500/25">
                  <span className="material-symbols-outlined">shopping_bag</span>
                  <span>Discover Products</span>
                </Link>
                <Link href="/seller/register" className="flex items-center justify-center gap-3 w-full sm:w-auto min-w-[180px] cursor-pointer rounded-full h-14 px-8 bg-white dark:bg-[#1f2937] text-[#111418] dark:text-white border-2 border-[#e5e7eb] dark:border-[#374151] text-base font-bold leading-normal hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-all">
                  <span className="material-symbols-outlined">storefront</span>
                  <span>Become a Seller</span>
                </Link>
              </div>
              <div className="flex items-center gap-6 mt-4 pt-6 border-t border-gray-100 dark:border-gray-800">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-white dark:border-[#101922] bg-gray-200"></div>
                  <div className="w-10 h-10 rounded-full border-2 border-white dark:border-[#101922] bg-gray-300"></div>
                  <div className="w-10 h-10 rounded-full border-2 border-white dark:border-[#101922] bg-gray-400"></div>
                  <div className="w-10 h-10 rounded-full border-2 border-white dark:border-[#101922] bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-xs font-bold text-gray-500 dark:text-gray-300">+2k</div>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-yellow-400 text-sm filled-icon">star</span>
                    <span className="material-symbols-outlined text-yellow-400 text-sm filled-icon">star</span>
                    <span className="material-symbols-outlined text-yellow-400 text-sm filled-icon">star</span>
                    <span className="material-symbols-outlined text-yellow-400 text-sm filled-icon">star</span>
                    <span className="material-symbols-outlined text-yellow-400 text-sm filled-icon">star</span>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">Trusted by top businesses</span>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full lg:h-auto relative">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-60"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl opacity-60"></div>
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-[#1a2632] border border-gray-100 dark:border-gray-700">
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 to-white dark:from-[#1a2632] dark:to-[#101922]"></div>
                <div className="absolute inset-4 bg-white dark:bg-[#1f2937] rounded-xl shadow-lg border border-gray-100 dark:border-gray-600 flex flex-col overflow-hidden">
                  <div className="h-12 border-b border-gray-100 dark:border-gray-700 flex items-center px-4 gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                    </div>
                  </div>
                  <div className="flex-1 p-4 grid grid-cols-3 gap-4">
                    <div className="col-span-2 flex flex-col gap-4">
                      <div className="h-32 rounded-lg bg-blue-50 dark:bg-[#2a3441] relative overflow-hidden p-3">
                        <div className="absolute bottom-0 left-0 right-0 top-8 flex items-end justify-between px-3 pb-2 gap-1">
                          <div className="w-full bg-blue-200 dark:bg-blue-900 h-[40%] rounded-t-sm"></div>
                          <div className="w-full bg-blue-300 dark:bg-blue-800 h-[60%] rounded-t-sm"></div>
                          <div className="w-full bg-blue-400 dark:bg-blue-700 h-[30%] rounded-t-sm"></div>
                          <div className="w-full bg-blue-500 dark:bg-blue-600 h-[80%] rounded-t-sm"></div>
                          <div className="w-full bg-primary h-[65%] rounded-t-sm"></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <div className="aspect-square rounded-lg bg-gray-50 dark:bg-[#2a3441] p-3 flex flex-col justify-center items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 flex items-center justify-center">
                          <span className="material-symbols-outlined text-lg">psychology</span>
                        </div>
                      </div>
                      <div className="aspect-square rounded-lg bg-gray-50 dark:bg-[#2a3441] p-3 flex flex-col justify-center items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-600 flex items-center justify-center">
                          <span className="material-symbols-outlined text-lg">public</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 bg-white dark:bg-[#1a2632] px-4 py-3 rounded-lg shadow-xl border border-gray-100 dark:border-gray-600 z-20 flex items-center gap-3">
                  <div className="bg-green-100 dark:bg-green-900/30 p-1.5 rounded-full">
                    <span className="material-symbols-outlined text-green-600 text-lg filled-icon">shield</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#111418] dark:text-white">Verified Supplier</p>
                    <p className="text-[10px] text-gray-500">Identity Confirmed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f8f9fa] dark:bg-[#0b1219] py-20 px-4 lg:px-20 border-y border-[#e5e7eb] dark:border-[#1f2937]">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-[#111418] dark:text-white text-3xl font-black leading-tight tracking-tight mb-4">
              Reimagining Marketplace Trust
            </h2>
            <p className="text-[#4b5563] dark:text-gray-400 text-lg font-normal leading-relaxed">
              We&apos;ve built a platform where transparency isn&apos;t just a promise—it&apos;s engineered into every interaction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group flex flex-col bg-white dark:bg-[#1a2632] rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-[#2a3441]">
              <div className="w-14 h-14 rounded-xl bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">smart_toy</span>
              </div>
              <h3 className="text-[#111418] dark:text-white text-xl font-bold mb-3">AI-Driven Recommendations</h3>
              <p className="text-[#617589] dark:text-gray-400 text-sm leading-relaxed mb-6">
                Our intelligent agents analyze market trends to suggest products that maximize your profit margins and meet buyer demand.
              </p>
            </div>
            <div className="group flex flex-col bg-white dark:bg-[#1a2632] rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-[#2a3441]">
              <div className="w-14 h-14 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">payments</span>
              </div>
              <h3 className="text-[#111418] dark:text-white text-xl font-bold mb-3">Transparent Pricing</h3>
              <p className="text-[#617589] dark:text-gray-400 text-sm leading-relaxed mb-6">
                No hidden fees. See the full breakdown of costs including logistics, duties, and commissions before you commit.
              </p>
            </div>
            <div className="group flex flex-col bg-white dark:bg-[#1a2632] rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-[#2a3441]">
              <div className="w-14 h-14 rounded-xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">verified</span>
              </div>
              <h3 className="text-[#111418] dark:text-white text-xl font-bold mb-3">Verified Suppliers</h3>
              <p className="text-[#617589] dark:text-gray-400 text-sm leading-relaxed mb-6">
                Every partner is rigorously vetted. We verify business licenses, production capabilities, and ethical standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white dark:bg-background-dark py-16 px-4 lg:px-20 border-b border-[#e5e7eb] dark:border-[#2a3441]">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col md:flex-row justify-between items-end gap-4">
              <div>
                <h2 className="text-[#111418] dark:text-white text-3xl font-black leading-tight tracking-tight mb-2">Trending Categories</h2>
                <p className="text-[#617589] dark:text-gray-400 text-lg font-normal">Explore high-growth sectors for your business.</p>
              </div>
              <Link href="/products" className="text-primary font-bold text-sm hover:underline flex items-center gap-1 group">
                View All Categories <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={`/products?category=${category.name.toLowerCase()}`}
                  className="group flex flex-col gap-5 p-6 rounded-2xl bg-[#f8f9fa] dark:bg-[#1f2937] hover:bg-white dark:hover:bg-[#2a3441] border border-transparent hover:border-gray-100 dark:hover:border-gray-700 hover:shadow-lg transition-all duration-300 items-center text-center"
                >
                  <div className={`w-32 h-32 rounded-full bg-${category.color}-100 dark:bg-${category.color}-900/30 text-${category.color}-600 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <span className="material-symbols-outlined filled-icon text-6xl">{category.icon}</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-bold text-[#111418] dark:text-white text-lg leading-tight group-hover:text-primary transition-colors">{category.name}</h3>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">({category.count})</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f8f9fa] dark:bg-[#0b1219] py-16 px-4 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-8">
            <div className="flex justify-between items-end">
              <div>
                <h2 className="text-[#111418] dark:text-white text-3xl font-black leading-tight tracking-tight mb-2">Featured Products</h2>
                <p className="text-[#617589] dark:text-gray-400 text-lg font-normal">Our editor&apos;s top picks for this season.</p>
              </div>
              <Link href="/products?featured=true" className="text-primary font-bold text-sm hover:underline flex items-center gap-1 group">
                View All Featured <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProducts.map((product, index) => (
                <Link
                  key={index}
                  href={`/products/${index + 1}`}
                  className={`relative group rounded-2xl overflow-hidden cursor-pointer shadow-soft ${product.large ? 'lg:col-span-2 h-[300px] lg:h-[400px]' : 'h-[240px]'}`}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url("${product.image}")` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                  <div className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col items-start gap-2">
                    {product.label && (
                      <span className="bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-2">{product.label}</span>
                    )}
                    <h3 className="text-white text-xl lg:text-3xl font-bold leading-tight">{product.title}</h3>
                    {product.subtitle && (
                      <p className="text-white/90 text-sm mb-2">{product.subtitle}</p>
                    )}
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-white text-2xl font-black">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-gray-300 line-through text-lg">{product.originalPrice}</span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-primary py-20 px-4 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white text-3xl lg:text-4xl font-black leading-tight tracking-tight mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-white/80 text-lg font-normal leading-relaxed mb-8">
            Join thousands of businesses already leveraging our AI-powered marketplace to grow faster and smarter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/seller/register"
              className="flex items-center justify-center gap-3 w-full sm:w-auto min-w-[180px] cursor-pointer rounded-full h-14 px-8 bg-white text-primary text-base font-bold leading-normal hover:bg-gray-100 transition-all"
            >
              <span>Start Selling Today</span>
            </Link>
            <Link
              href="/products"
              className="flex items-center justify-center gap-3 w-full sm:w-auto min-w-[180px] cursor-pointer rounded-full h-14 px-8 bg-transparent text-white border-2 border-white text-base font-bold leading-normal hover:bg-white/10 transition-all"
            >
              <span>Browse Products</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
