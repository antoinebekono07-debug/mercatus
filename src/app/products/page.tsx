'use client';

import { useState } from 'react';
import Link from 'next/link';

const mockProducts = [
  {
    id: 1,
    name: "SonicPro X5 Noise Cancelling Wireless Headphones",
    seller: "AudioTech Hub",
    price: 249.00,
    originalPrice: null,
    rating: 4.8,
    reviews: 2140,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCo-Bu0JL1dhOGhuuq43iFHvelEP-fvMeQ-UL8Lt17ZI9cYdNd94dDN696wWkwtjNGPMs9uNSVqsnemqIosxsvycnGJ_PZHcp_cL9JfLsJW6nGbcL4LN-NF0Es9ZdCx6_q5a6C9tC89DxpxONa3vvKAJ8yxCLY4pWhF-nSKVuYdbUpInPkCV3WoIcY7ToACJH4hnSTb_wkfgvJwTYEHHt6CBTU9NIBkkkaa9qM0VRyo6eh-_3FbzsLs3Y_z655VxUhWSsp9l98E6sx7",
    smartMatch: true,
    freeShipping: true,
  },
  {
    id: 2,
    name: "WH-1000XM5 Wireless Noise Canceling Headphones",
    seller: "SmartLiving Agents",
    price: 348.00,
    originalPrice: null,
    rating: 4.5,
    reviews: 856,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDd3_nUBRKjf3h2wt765B6X4D0xcRUI0C0SZOwEWNjrG1IEkQ3pEf-7oa138hcELNVgVSosFVwZPcBF-Yh1XMTAiBgFj-JIEElcwi3h-8U8r2kFT6oFBVgq_aTgzH_3KaaIIpEMquIhjA1A1vE98rvgzbNSFMIMHZzXdrsVvRpeQzrLsBHzGZJmh8Hbff8yGVxOcoqP1HvZC9IwR_aLJpU3ZZtMpMK_lSfNtusBMzxntVl7ZOkRCzIEHfhclQprUz0yVxCwMhQwfp4l",
    smartMatch: false,
    freeShipping: false,
    inCompare: true,
  },
  {
    id: 3,
    name: "HyperCloud Alpha Wireless Gaming Headset",
    seller: "GameZone Pro",
    price: 159.00,
    originalPrice: 199.00,
    rating: 5.0,
    reviews: 3402,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7djq-ofD63rYo_XE9mwIJLt4fAiLt3VAEUnCrICaK4n3p47u-ezbMIMrjrw7WJ6NrVIExPHR4iX_vBd93_1XtXWPvq8aaVq-Sln87UFcL91M4wG8hHaNGvVmSEsU1lJk6VxG09ZBiCibX1LkHv4R1gLmKtqvo1-WbOy1ohmRohPD2_DghucDhas9oRY6XxX7DXOi5k8slxFNltvv4juyQERnvEUylCZ1DcTUGFUI2UlJqMP0Pos8nv06-ZDegx32DWsHXOfjFGfQp",
    smartMatch: false,
    freeShipping: true,
    discount: "20% OFF",
  },
  {
    id: 4,
    name: "AirPod Pro (2nd Generation) with MagSafe",
    seller: "TechDirect",
    price: 249.00,
    originalPrice: null,
    rating: 4.7,
    reviews: 5621,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgXMA0QNGgGQ7D58_tasaOjCazt5CvmYndZMXm6FRkDQTAsc_AIk-JwfB5ifWwt-o4Mr4n5Ng7MMFb22WUGrFWa1o-l28qcKpskWFFl_VanMSzoMf9j2wH_bNuqvVvWxIhp9DzdxZhumfigH9zkdfs-Qx2l-JwIw2mbDj-PNkhBf-HTXnqjTH6z8pY_hiMJNFv1Rm7DpD6TxzlHnh8bgNGqhcDYQgkyIGkDOmTZalQEDdrPFH1Bafbg0pFvAmMpEHNSmIkHm-xylr9",
    smartMatch: false,
    freeShipping: true,
  },
  {
    id: 5,
    name: "ZonePro XR1 Headset",
    seller: "ZoneTech",
    price: 299.00,
    originalPrice: 349.00,
    rating: 4.8,
    reviews: 2341,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQN4mv102jACuPwSSwbCXKKS1c3fU28k8lUDvvG5PVxp1Sek29zbwml6EIwa6p0pBD6Ss2AEuTQ5DUwPqtlVPCeOgGTePfeUoiCdWz5a2rYsEgcTculfAzA15of5EOhdoWeFzTWFJh7Yl3kPY1nR68Y35ac9mqSKNMp5lOGcrh-8fMIunfnscNRNoA-z75aniG5GsUzZ5xFwsstw8ATKaElW1LWYh67Lmm80ZrAG8XRmbL8kiEW3g2HqxC3grFxlENJYkkl1vRbl5b",
    smartMatch: false,
    freeShipping: false,
    discount: "SAVE $50",
  },
  {
    id: 6,
    name: "Premium Leather Weekender",
    seller: "LuxeTravel",
    price: 450.00,
    originalPrice: null,
    rating: 4.9,
    reviews: 856,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuByLvVo_QztNQcTo-PWgzRPTtqXzxkDAHUvgGR72ginSM3N-5-9zz0l_FBpieJoQZDh0qQm-AUNHpAIZ_rqsgMofDpOUpo5NrC3JLT-L_mjNvHjrHAAQe2zAFAaZIjJ6GxGX6vwszWK8NN_RQR3GOsMUlao6UzI71uA1i1mzLyGK2QFxIa5qAPepLrYHdYtPw4b_vlqoz6YYZDQjwDiCGmp4XuHLLzW2r94JnerhiImHOd1RlSp5-KthSiWniH-CqiZCKZhzHoZjITt",
    smartMatch: false,
    freeShipping: true,
  },
  {
    id: 7,
    name: "Smart Fitness Watch Pro",
    seller: "ZoneFit",
    price: 199.00,
    originalPrice: 249.00,
    rating: 4.7,
    reviews: 3421,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnnkxGYcD1Db1HJ9cnvOsNZZnZrgX-4R14Ka6XRKudixKjtFracuQwns3bw1VuHJBUFWs2KUnVQ_eC9S8CPRotL9WMGw9mX7-3JnJHoo-ES05Gr9iBeiZszevqkPfHkEC_UW7LK3FtD0C5srTovWRks5W5fg4qiBNqjnF2WPTDS1jN9fJsjZbdGuJRnHZBtpQBRMuewNLbY-LUEkYN5IndMIcesxu60bBLOLzEe_58iRWHtLCLI7D5BiMUXTc4ebaCBFzj2J2XaCC7",
    smartMatch: false,
    freeShipping: false,
  },
  {
    id: 8,
    name: "EcoSmart Home Hub",
    seller: "EcoZone",
    price: 599.00,
    originalPrice: null,
    rating: 4.6,
    reviews: 1234,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEbDnlB5njN18aAkpOZY8GsQVntop2Q26wTg7WPpBT_kqAktpAjln7j5IJybTJhuq0JpI1ec1cVdKS_q3qklTVg4ZxKvK-WgTRbabLrGCdUBYKNxu_Zq_eFeQu_gek02eswuED9BX-lUh7KQeN2-1UnOXfoVYAbsFEt8S8UCIlyyari6e4bajzgL2in3EIVxYzzlVgZn1pvNd9c_F68MHuOc-hDBbXMTIBTF3ghcPsWLoOpHrBBFaChfbC3JXtiq57gf73X8MID9tC",
    smartMatch: false,
    freeShipping: true,
  },
];

const categories = [
  { name: "All Electronics", count: 45 },
  { name: "Over-Ear Headphones", count: 12, selected: true },
  { name: "In-Ear Earbuds", count: 18 },
  { name: "Gaming Headsets", count: 15 },
];

const brands = [
  { name: "Sony", count: 12, selected: true },
  { name: "Bose", count: 8, selected: false },
  { name: "Sennheiser", count: 5, selected: false },
  { name: "Apple", count: 15, selected: false },
];

const features = [
  { name: "Noise Cancelling", selected: false },
  { name: "Wireless", selected: false },
  { name: "Water Resistant", selected: false },
];

const colors = ["black", "white", "gray", "blue", "red"];

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("Wireless head");
  const [priceMin, setPriceMin] = useState(50);
  const [priceMax, setPriceMax] = useState(300);
  const [showSearch, setShowSearch] = useState(true);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const toggleColor = (color: string) => {
    setSelectedColors(prev => 
      prev.includes(color) 
        ? prev.filter(c => c !== color)
        : [...prev, color]
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
      <header className="bg-white dark:bg-[#1a2632] border-b border-[#f0f2f4] dark:border-[#2a3642] sticky top-0 z-50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 gap-8">
            <div className="flex items-center gap-3 text-[#111418] dark:text-white shrink-0">
              <Link href="/" className="size-7 text-primary">
                <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fillRule="evenodd"></path>
                </svg>
              </Link>
              <h2 className="text-lg font-bold">myzone</h2>
            </div>
            
            <div className="hidden md:flex flex-1 max-w-xl relative group z-50">
              <div className="absolute top-0 left-0 w-full bg-white dark:bg-[#1a2632] rounded-xl shadow-2xl border border-[#f0f2f4] dark:border-[#2a3642] overflow-hidden transition-all origin-top scale-100 opacity-100">
                <div className="flex items-center w-full h-10 border-b border-[#f0f2f4] dark:border-[#2a3642] bg-[#f8f9fa] dark:bg-[#202b36]">
                  <div className="text-primary flex items-center justify-center pl-3 pr-2">
                    <span className="material-symbols-outlined text-[20px]">search</span>
                  </div>
                  <input 
                    className="flex w-full min-w-0 flex-1 bg-transparent border-none focus:ring-0 text-[#111418] dark:text-white placeholder:text-[#617589] px-2 text-sm font-medium h-full" 
                    placeholder="Search..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <div className="pr-2 flex items-center gap-1">
                    <button className="size-6 flex items-center justify-center rounded-full hover:bg-[#e0e4e9] dark:hover:bg-[#2a3642] text-[#617589] transition-colors">
                      <span className="material-symbols-outlined text-[16px]">close</span>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col max-h-[70vh] overflow-y-auto">
                  <div className="p-2">
                    <Link href="/products" className="block bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-3 group/ai border border-blue-100 dark:border-blue-800/30 hover:border-blue-200 dark:hover:border-blue-700/50 transition-all">
                      <div className="flex items-start justify-between">
                        <div className="flex gap-3">
                          <div className="mt-0.5 size-6 rounded-full bg-primary text-white flex items-center justify-center shadow-sm">
                            <span className="material-symbols-outlined text-[14px] filled">auto_awesome</span>
                          </div>
                          <div>
                            <p className="text-xs font-bold text-primary mb-0.5">AI Best Match</p>
                            <p className="text-sm font-bold text-[#111418] dark:text-white leading-tight">
                              Wireless Headphones <span className="font-normal opacity-80">with Active Noise Cancellation</span>
                            </p>
                          </div>
                        </div>
                        <span className="material-symbols-outlined text-[18px] text-primary opacity-0 -translate-x-2 group-hover/ai:opacity-100 group-hover/ai:translate-x-0 transition-all">arrow_forward</span>
                      </div>
                    </Link>
                  </div>
                  <div className="pb-2">
                    <h3 className="px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#617589]">Suggestions</h3>
                    <ul className="flex flex-col">
                      {["Wireless headphones sony", "Wireless headphones bose", "Wireless headsets gaming"].map((suggestion, idx) => (
                        <li key={idx}>
                          <Link href="/products" className="flex items-center justify-between px-4 py-2 hover:bg-[#f0f2f4] dark:hover:bg-[#2a3642] group/item transition-colors cursor-pointer">
                            <div className="flex items-center gap-3 overflow-hidden">
                              <span className="material-symbols-outlined text-[18px] text-[#617589]">search</span>
                              <span className="text-sm text-[#617589] dark:text-gray-400 truncate">
                                <span className="text-[#111418] dark:text-white font-semibold">Wireless head</span>{suggestion.replace("Wireless head", "")}
                              </span>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t border-[#f0f2f4] dark:border-[#2a3642] pt-2 pb-1">
                    <div className="px-4 py-1 flex items-center justify-between">
                      <h3 className="text-[10px] font-bold uppercase tracking-wider text-[#617589]">Products</h3>
                      <Link href="/products" className="text-[10px] font-medium text-primary hover:underline">View all (124)</Link>
                    </div>
                    {mockProducts.slice(0, 2).map((product) => (
                      <Link key={product.id} href={`/products/${product.id}`} className="flex items-center gap-3 px-4 py-2 hover:bg-[#f0f2f4] dark:hover:bg-[#2a3642] group/prod transition-colors">
                        <div className="size-10 rounded-md bg-gray-100 dark:bg-gray-800 border border-[#f0f2f4] dark:border-[#2a3642] overflow-hidden shrink-0">
                          <img alt="Product" className="w-full h-full object-cover" src={product.image} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-[#111418] dark:text-white truncate group-hover/prod:text-primary transition-colors">{product.name}</p>
                          <p className="text-xs text-[#617589]">{product.seller} • Audio</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-bold text-[#111418] dark:text-white">${product.price}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="border-t border-[#f0f2f4] dark:border-[#2a3642] p-2 bg-[#f8f9fa] dark:bg-[#1a2632]">
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-2 py-1 rounded bg-white dark:bg-[#2a3642] border border-[#dbe0e6] dark:border-[#374151] text-[10px] font-medium text-[#111418] dark:text-gray-300 hover:border-primary hover:text-primary transition-colors cursor-pointer">
                        in <span className="font-bold ml-1">Electronics</span>
                      </span>
                      <span className="inline-flex items-center px-2 py-1 rounded bg-white dark:bg-[#2a3642] border border-[#dbe0e6] dark:border-[#374151] text-[10px] font-medium text-[#111418] dark:text-gray-300 hover:border-primary hover:text-primary transition-colors cursor-pointer">
                        Brand: <span className="font-bold ml-1">Sony</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 md:gap-6">
              <div className="hidden lg:flex items-center gap-5">
                <Link href="/products" className="text-[#111418] dark:text-gray-200 text-sm font-medium hover:text-primary transition-colors">Categories</Link>
                <Link href="/recommendations" className="text-[#111418] dark:text-gray-200 text-sm font-medium hover:text-primary transition-colors">Deals</Link>
                <Link href="/ai/agent" className="text-[#111418] dark:text-gray-200 text-sm font-medium hover:text-primary transition-colors">Agentic Hub</Link>
              </div>
              <div className="flex gap-2">
                <Link href="/auth/login" className="hidden sm:flex h-9 px-4 bg-primary hover:bg-blue-600 text-white text-xs font-bold items-center justify-center rounded-lg transition-colors">
                  Log In
                </Link>
                <Link href="/cart" className="flex size-9 items-center justify-center rounded-lg bg-[#f0f2f4] dark:bg-[#2a3642] text-[#111418] dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors relative">
                  <span className="material-symbols-outlined text-[18px]">shopping_cart</span>
                  <span className="absolute top-1 right-1 size-1.5 bg-red-500 rounded-full"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex-1 max-w-[1600px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-6">
        <nav className="flex mb-4 overflow-hidden text-xs">
          <ol className="flex items-center gap-2 text-[#617589]">
            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><span className="material-symbols-outlined text-xs align-middle">chevron_right</span></li>
            <li><Link href="/products" className="hover:text-primary transition-colors">Electronics</Link></li>
            <li><span className="material-symbols-outlined text-xs align-middle">chevron_right</span></li>
            <li className="font-medium text-[#111418] dark:text-white truncate">Wireless Headphones</li>
          </ol>
        </nav>
        
        <div className="flex flex-col lg:flex-row gap-6">
          <aside className="w-full lg:w-64 shrink-0 hidden lg:block">
            <div className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pr-2 pb-8">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#f0f2f4] dark:border-[#2a3642]">
                <h3 className="text-sm font-bold text-[#111418] dark:text-white flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[20px]">tune</span>
                  Filters
                </h3>
                <button className="text-[10px] font-bold text-primary hover:text-blue-600 uppercase tracking-wide px-1.5 py-0.5 hover:bg-primary/5 rounded transition-colors">Clear All</button>
              </div>
              
              <div className="space-y-4">
                <details className="group" open>
                  <summary className="flex items-center justify-between cursor-pointer mb-2 select-none">
                    <h4 className="font-bold text-[#111418] dark:text-white text-xs">Categories</h4>
                    <span className="material-symbols-outlined text-[16px] text-[#617589] transform transition-transform duration-200 group-open:rotate-180">expand_more</span>
                  </summary>
                  <div className="space-y-0.5 pl-1">
                    {categories.map((cat) => (
                      <label key={cat.name} className="flex items-center gap-2 py-1 cursor-pointer group/item">
                        <input 
                          type="radio" 
                          name="category" 
                          defaultChecked={cat.selected}
                          className="sr-only peer" 
                        />
                        <span className="size-3.5 rounded-full border border-gray-300 dark:border-gray-600 peer-checked:border-primary peer-checked:border-[4px] transition-all"></span>
                        <span className="text-xs text-[#617589] peer-checked:text-[#111418] dark:peer-checked:text-white peer-checked:font-medium group-hover/item:text-primary transition-colors">{cat.name}</span>
                      </label>
                    ))}
                  </div>
                </details>
                
                <div className="w-full h-px bg-[#f0f2f4] dark:bg-[#2a3642]"></div>
                
                <details className="group" open>
                  <summary className="flex items-center justify-between cursor-pointer mb-2 select-none">
                    <h4 className="font-bold text-[#111418] dark:text-white text-xs">Price Range</h4>
                    <span className="material-symbols-outlined text-[16px] text-[#617589] transform transition-transform duration-200 group-open:rotate-180">expand_more</span>
                  </summary>
                  <div className="px-1 pt-2 pb-2">
                    <div className="relative h-1 bg-gray-200 dark:bg-gray-700 rounded-full mb-5 mx-1">
                      <div className="absolute left-[20%] right-[30%] top-0 bottom-0 bg-primary rounded-full"></div>
                      <div className="absolute left-[20%] top-1/2 -translate-y-1/2 size-3.5 bg-white border-2 border-primary rounded-full shadow-sm cursor-pointer hover:scale-110 transition-transform"></div>
                      <div className="absolute right-[30%] top-1/2 -translate-y-1/2 size-3.5 bg-white border-2 border-primary rounded-full shadow-sm cursor-pointer hover:scale-110 transition-transform"></div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="relative w-full">
                        <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[#617589] text-[10px] font-medium">$</span>
                        <input 
                          className="w-full pl-5 pr-1 py-1.5 text-xs border border-[#dbe0e6] dark:border-[#2a3642] rounded bg-white dark:bg-[#1a2632] text-[#111418] dark:text-white focus:ring-1 focus:ring-primary focus:border-primary transition-shadow" 
                          placeholder="Min" 
                          type="number" 
                          value={priceMin}
                          onChange={(e) => setPriceMin(Number(e.target.value))}
                        />
                      </div>
                      <span className="text-[#617589] text-xs">-</span>
                      <div className="relative w-full">
                        <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[#617589] text-[10px] font-medium">$</span>
                        <input 
                          className="w-full pl-5 pr-1 py-1.5 text-xs border border-[#dbe0e6] dark:border-[#2a3642] rounded bg-white dark:bg-[#1a2632] text-[#111418] dark:text-white focus:ring-1 focus:ring-primary focus:border-primary transition-shadow" 
                          placeholder="Max" 
                          type="number"
                          value={priceMax}
                          onChange={(e) => setPriceMax(Number(e.target.value))}
                        />
                      </div>
                    </div>
                  </div>
                </details>
                
                <div className="w-full h-px bg-[#f0f2f4] dark:bg-[#2a3642]"></div>
                
                <details className="group" open>
                  <summary className="flex items-center justify-between cursor-pointer mb-2 select-none">
                    <h4 className="font-bold text-[#111418] dark:text-white text-xs">Brands</h4>
                    <span className="material-symbols-outlined text-[16px] text-[#617589] transform transition-transform duration-200 group-open:rotate-180">expand_more</span>
                  </summary>
                  <div className="space-y-2">
                    {brands.map((brand) => (
                      <label key={brand.name} className="flex items-center justify-between cursor-pointer group/label">
                        <div className="flex items-center gap-2">
                          <input 
                            type="checkbox" 
                            defaultChecked={brand.selected}
                            className="size-3.5 rounded border-gray-300 dark:border-gray-600 text-primary focus:ring-primary/20 cursor-pointer transition-colors" 
                          />
                          <span className="text-xs text-[#111418] dark:text-gray-200 group-hover/label:text-primary transition-colors">{brand.name}</span>
                        </div>
                        <span className="text-[10px] text-[#617589] bg-[#f0f2f4] dark:bg-[#2a3642] px-1.5 py-0.5 rounded">{brand.count}</span>
                      </label>
                    ))}
                    <button className="mt-2 text-[10px] font-medium text-primary hover:text-blue-600 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">add</span>
                      Show more
                    </button>
                  </div>
                </details>
                
                <div className="w-full h-px bg-[#f0f2f4] dark:bg-[#2a3642]"></div>
                
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer mb-2 select-none">
                    <h4 className="font-bold text-[#111418] dark:text-white text-xs">Features</h4>
                    <span className="material-symbols-outlined text-[16px] text-[#617589] transform transition-transform duration-200 group-open:rotate-180">expand_more</span>
                  </summary>
                  <div className="space-y-2">
                    {features.map((feature) => (
                      <label key={feature.name} className="flex items-center gap-2 cursor-pointer group/label">
                        <input type="checkbox" className="size-3.5 rounded border-gray-300 dark:border-gray-600 text-primary focus:ring-primary/20 cursor-pointer" />
                        <span className="text-xs text-[#111418] dark:text-gray-200 group-hover/label:text-primary transition-colors">{feature.name}</span>
                      </label>
                    ))}
                  </div>
                </details>
                
                <div className="w-full h-px bg-[#f0f2f4] dark:bg-[#2a3642]"></div>
                
                <details className="group" open>
                  <summary className="flex items-center justify-between cursor-pointer mb-2 select-none">
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-bold text-[#111418] dark:text-white text-xs">Seller Trust</h4>
                      <span className="material-symbols-outlined text-[#617589] text-[14px] cursor-help" title="Only show verified agents">info</span>
                    </div>
                    <span className="material-symbols-outlined text-[16px] text-[#617589] transform transition-transform duration-200 group-open:rotate-180">expand_more</span>
                  </summary>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer group/label bg-primary/5 dark:bg-primary/10 p-1.5 rounded-md -mx-1.5 border border-primary/10 hover:border-primary/30 transition-colors">
                      <input type="checkbox" defaultChecked className="size-3.5 rounded border-gray-300 dark:border-gray-600 text-primary focus:ring-primary/20 cursor-pointer" />
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold text-[#111418] dark:text-white">Verified Agents Only</span>
                        <span className="text-[10px] text-[#617589]">Vetted for authenticity</span>
                      </div>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer group/label px-1.5 -mx-1.5">
                      <input type="checkbox" className="size-3.5 rounded border-gray-300 dark:border-gray-600 text-primary focus:ring-primary/20 cursor-pointer" />
                      <span className="text-xs text-[#111418] dark:text-gray-200 group-hover/label:text-primary transition-colors">Top Rated (4.5+)</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer group/label px-1.5 -mx-1.5">
                      <input type="checkbox" className="size-3.5 rounded border-gray-300 dark:border-gray-600 text-primary focus:ring-primary/20 cursor-pointer" />
                      <span className="text-xs text-[#111418] dark:text-gray-200 group-hover/label:text-primary transition-colors">Fast Shipping</span>
                    </label>
                  </div>
                </details>
                
                <div className="w-full h-px bg-[#f0f2f4] dark:bg-[#2a3642]"></div>
                
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer mb-2 select-none">
                    <h4 className="font-bold text-[#111418] dark:text-white text-xs">Color</h4>
                    <span className="material-symbols-outlined text-[16px] text-[#617589] transform transition-transform duration-200 group-open:rotate-180">expand_more</span>
                  </summary>
                  <div className="flex flex-wrap gap-2">
                    {colors.map((color) => (
                      <button 
                        key={color}
                        aria-label={color}
                        onClick={() => toggleColor(color)}
                        className={`size-5 rounded-full border border-gray-300 hover:ring-2 ring-primary ring-offset-2 dark:ring-offset-[#101922] transition-all ${
                          selectedColors.includes(color) ? 'ring-2 ring-primary' : ''
                        } ${
                          color === 'black' ? 'bg-black' :
                          color === 'white' ? 'bg-white' :
                          color === 'gray' ? 'bg-gray-500' :
                          color === 'blue' ? 'bg-blue-600' :
                          'bg-red-600'
                        }`}
                      ></button>
                    ))}
                  </div>
                </details>
              </div>
            </div>
          </aside>
          
          <main className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-4">
              <div>
                <h1 className="text-2xl font-bold text-[#111418] dark:text-white mb-1">Wireless Headphones</h1>
                <p className="text-[#617589] text-xs">Showing 1-12 of 124 products found</p>
              </div>
              <div className="flex items-center gap-2">
                <button className="lg:hidden flex items-center justify-center h-8 px-3 gap-1.5 rounded border border-[#dbe0e6] dark:border-[#2a3642] bg-white dark:bg-[#1a2632] text-xs font-medium text-[#111418] dark:text-white">
                  <span className="material-symbols-outlined text-[16px]">filter_list</span>
                  Filters
                </button>
                <div className="relative min-w-[150px]">
                  <select className="appearance-none w-full h-8 pl-3 pr-8 rounded border border-[#dbe0e6] dark:border-[#2a3642] bg-white dark:bg-[#1a2632] text-[#111418] dark:text-white text-xs font-medium focus:border-primary focus:ring-0 cursor-pointer">
                    <option>Sort by: Relevance</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Seller Rating</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-2.5 top-2 pointer-events-none text-[#617589] text-[16px]">expand_more</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                Over-Ear
                <button className="hover:text-blue-800 flex items-center justify-center rounded-full hover:bg-primary/20 p-0.5 transition-colors"><span className="material-symbols-outlined text-[14px]">close</span></button>
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                $50 - $300
                <button className="hover:text-blue-800 flex items-center justify-center rounded-full hover:bg-primary/20 p-0.5 transition-colors"><span className="material-symbols-outlined text-[14px]">close</span></button>
              </span>
              <button className="text-xs text-[#617589] hover:text-primary font-medium ml-1 underline decoration-1 underline-offset-2 transition-colors">Clear all</button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 relative">
              {mockProducts.map((product) => (
                <div key={product.id} className="group bg-white dark:bg-[#1a2632] rounded-xl border border-[#f0f2f4] dark:border-[#2a3642] overflow-hidden hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 flex flex-col relative z-0 h-full">
                  <div className="relative aspect-[4/3] bg-gray-50 dark:bg-gray-800 overflow-hidden">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" alt={product.name} src={product.image} />
                    
                    {product.smartMatch && (
                      <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
                        <div className="bg-white/95 dark:bg-black/80 backdrop-blur text-[#111418] dark:text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm border border-black/5 dark:border-white/10">
                          <span className="material-symbols-outlined text-[14px] text-primary filled">auto_awesome</span>
                          Smart Match
                        </div>
                      </div>
                    )}
                    
                    {product.discount && (
                      <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
                        <div className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-sm">
                          {product.discount}
                        </div>
                      </div>
                    )}
                    
                    <div className="absolute inset-x-0 bottom-0 p-3 flex justify-center gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-20 pb-4 bg-gradient-to-t from-black/40 to-transparent">
                      <Link href={`/products/${product.id}`} className="h-9 px-4 rounded-full bg-white text-[#111418] hover:bg-primary hover:text-white text-xs font-bold shadow-lg transition-all duration-200 flex items-center gap-1.5" title="Quick View">
                        <span className="material-symbols-outlined text-[16px]">visibility</span>
                        Quick View
                      </Link>
                    </div>
                    
                    <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 dark:bg-black/60 backdrop-blur-sm text-[#617589] hover:text-red-500 hover:bg-white dark:hover:bg-gray-800 transition-all duration-200 shadow-sm opacity-0 group-hover:opacity-100 z-20">
                      <span className="material-symbols-outlined text-[18px]">favorite</span>
                    </button>
                  </div>
                  
                  <div className="p-4 flex flex-col flex-1 relative">
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <div className="flex flex-col">
                        <p className="text-[10px] font-semibold tracking-wide uppercase text-[#617589] mb-1">{product.seller}</p>
                        <Link href={`/products/${product.id}`} className="text-[#111418] dark:text-white font-bold text-base leading-snug line-clamp-2 hover:text-primary cursor-pointer transition-colors">
                          {product.name}
                        </Link>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="material-symbols-outlined text-[14px]">
                            {i < Math.floor(product.rating) ? 'star' : i < product.rating ? 'star_half' : 'star'}
                          </span>
                        ))}
                      </div>
                      <span className="text-[11px] font-medium text-[#617589]">({product.reviews.toLocaleString()})</span>
                    </div>
                    
                    <div className="mt-auto pt-3 border-t border-dashed border-gray-100 dark:border-gray-800 flex items-center justify-between gap-3">
                      <div className="flex flex-col">
                        <div className="flex items-baseline gap-2">
                          {product.originalPrice && (
                            <p className="text-xs text-[#617589] line-through decoration-slate-400 decoration-1 font-medium">${product.originalPrice}</p>
                          )}
                          <p className={`text-xl font-bold tracking-tight ${product.originalPrice ? 'text-red-600 dark:text-red-400' : 'text-[#111418] dark:text-white'}`}>${product.price}</p>
                        </div>
                        {product.freeShipping ? (
                          <p className="text-[10px] font-medium text-green-600 bg-green-50 dark:bg-green-900/20 px-1.5 py-0.5 rounded w-fit mt-1">Free Shipping</p>
                        ) : (
                          <p className="text-[10px] font-medium text-[#617589] mt-1">Ships in 2 days</p>
                        )}
                      </div>
                      <div className="flex items-center gap-1">
                        <Link href="/products/compare" className={`size-9 flex items-center justify-center rounded-lg border ${product.inCompare ? 'border-primary text-primary bg-primary/5' : 'border-gray-200 dark:border-gray-700 text-[#617589]'} hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-200`} title="Add to Compare">
                          <span className="material-symbols-outlined text-[18px]">{product.inCompare ? 'check' : 'compare_arrows'}</span>
                        </Link>
                        <Link href="/cart" className="h-9 px-3 flex items-center justify-center rounded-lg bg-primary hover:bg-primary-dark text-white font-medium text-xs shadow-sm hover:shadow-md transition-all duration-200 gap-1.5">
                          <span className="material-symbols-outlined text-[16px]">add_shopping_cart</span>
                          Add
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-8">
              <div className="flex items-center gap-2">
                <button className="flex items-center justify-center size-10 rounded-lg border border-[#e5e7eb] dark:border-[#3e4a5b] bg-white dark:bg-[#1a2632] text-[#617589] dark:text-gray-400 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="flex items-center justify-center size-10 rounded-lg bg-primary text-white font-medium">1</button>
                <button className="flex items-center justify-center size-10 rounded-lg border border-[#e5e7eb] dark:border-[#3e4a5b] bg-white dark:bg-[#1a2632] text-[#617589] dark:text-gray-400 hover:text-primary transition-colors">2</button>
                <button className="flex items-center justify-center size-10 rounded-lg border border-[#e5e7eb] dark:border-[#3e4a5b] bg-white dark:bg-[#1a2632] text-[#617589] dark:text-gray-400 hover:text-primary transition-colors">3</button>
                <span className="px-2 text-[#617589] dark:text-gray-400">...</span>
                <button className="flex items-center justify-center size-10 rounded-lg border border-[#e5e7eb] dark:border-[#3e4a5b] bg-white dark:bg-[#1a2632] text-[#617589] dark:text-gray-400 hover:text-primary transition-colors">10</button>
                <button className="flex items-center justify-center size-10 rounded-lg border border-[#e5e7eb] dark:border-[#3e4a5b] bg-white dark:bg-[#1a2632] text-[#617589] dark:text-gray-400 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
