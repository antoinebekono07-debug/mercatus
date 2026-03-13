import Link from "next/link";

const mockProduct = {
  id: 1,
  name: "ZonePro XR1 Headset",
  description: "Experience unparalleled audio quality with our flagship wireless headset. Featuring AI-powered sound optimization, adaptive noise cancellation, and 40-hour battery life. Perfect for professionals who demand the best.",
  price: 299.00,
  originalPrice: 349.00,
  category: "Electronics",
  brand: "ZoneTech",
  sku: "ZPX-XR1-BLK",
  stock: 45,
  rating: 4.8,
  reviews: 2341,
  images: [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBQN4mv102jACuPwSSwbCXKKS1c3fU28k8lUDvvG5PVxp1Sek29zbwml6EIwa6p0pBD6Ss2AEuTQ5DUwPqtlVPCeOgGTePfeUoiCdWz5a2rYsEgcTculfAzA15of5EOhdoWeFzTWFJh7Yl3kPY1nR68Y35ac9mqSKNMp5lOGcrh-8fMIunfnscNRNoA-z75aniG5GsUzZ5xFwsstw8ATKaElW1LWYh67Lmm80ZrAG8XRmbL8kiEW3g2HqxC3grFxlENJYkkl1vRbl5b",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCnnkxGYcD1Db1HJ9cnvOsNZZnZrgX-4R14Ka6XRKudixKjtFracuQwns3bw1VuHJBUFWs2KUnVQ_eC9S8CPRotL9WMGw9mX7-3JnJHoo-ES05Gr9iBeiZszevqkPfHkEC_UW7LK3FtD0C5srTovWRks5W5fg4qiBNqjnF2WPTDS1jN9fJsjZbdGuJRnHZBtpQBRMuewNLbY-LUEkYN5IndMIcesxu60bBLOLzEe_58iRWHtLCLI7D5BiMUXTc4ebaCBFzj2J2XaCC7",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuByLvVo_QztNQcTo-PWgzRPTtqXzxkDAHUvgGR72ginSM3N-5-9zz0l_FBpieJoQZDh0qQm-AUNHpAIZ_rqsgMofDpOUpo5NrC3JLT-L_mjNvHjrHAAQe2zAFAaZIjJ6GxGX6vwszWK8NN_RQR3GOsMUlao6UzI71uA1i1mzLyGK2QFxIa5qAPepLrYHdYtPw4b_vlqoz6YYZDQjwDiCGmp4XuHLLzW2r94JnerhiImHOd1RlSp5-KthSiWniH-CqiZCKZhzHoZjITt",
  ],
  features: [
    "AI-Powered Sound Optimization",
    "Adaptive Active Noise Cancellation",
    "40-hour Battery Life",
    "Premium Memory Foam Cushions",
    "Multi-device Pairing",
    "Voice Assistant Integration",
  ],
  specifications: {
    "Driver Size": "40mm",
    "Frequency Response": "20Hz - 20kHz",
    "Bluetooth Version": "5.3",
    "Weight": "250g",
    "Charging": "USB-C, Fast Charge",
    "Microphones": "6 Array MEMS",
  },
};

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = mockProduct;

  return (
    <div className="flex flex-col">
      <main className="flex-1 max-w-screen-xl mx-auto w-full px-4 md:px-10 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
          <nav className="flex flex-wrap gap-2 text-sm text-[#617589] dark:text-gray-400">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
            <span>/</span>
            <Link href={`/products?category=${product.category.toLowerCase()}`} className="hover:text-primary transition-colors">{product.category}</Link>
            <span>/</span>
            <span className="text-[#111418] dark:text-white font-medium">{product.name}</span>
          </nav>
          <div className="hidden md:flex items-center gap-2 text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full self-start">
            <span className="material-symbols-outlined text-sm">verified</span>
            Verified Seller
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="flex flex-col gap-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 dark:bg-[#222f3e]">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.slice(1).map((image, index) => (
                <div key={index} className="aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-[#222f3e]">
                  <img src={image} alt={`${product.name} ${index + 2}`} className="w-full h-full object-cover" />
                </div>
              ))}
              <button className="aspect-square rounded-xl border-2 border-dashed border-[#e5e7eb] dark:border-[#3e4a5b] flex flex-col items-center justify-center gap-2 text-[#617589] hover:text-primary hover:border-primary transition-colors">
                <span className="material-symbols-outlined text-3xl">view_in_ar</span>
                <span className="text-xs font-medium">View in 3D</span>
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-medium text-[#617589] dark:text-gray-400">{product.brand}</span>
                <span className="text-xs text-gray-300 dark:text-gray-600">•</span>
                <span className="text-sm font-medium text-[#617589] dark:text-gray-400">SKU: {product.sku}</span>
              </div>
              <h1 className="text-[#111418] dark:text-white text-3xl font-bold mb-3">{product.name}</h1>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className={`material-symbols-outlined text-sm ${star <= Math.floor(product.rating) ? 'text-yellow-400 filled-icon' : 'text-gray-300'}`}>star</span>
                  ))}
                </div>
                <span className="text-sm font-medium text-[#111418] dark:text-white">{product.rating}</span>
                <span className="text-sm text-[#617589] dark:text-gray-400">({product.reviews.toLocaleString()} reviews)</span>
              </div>
              <p className="text-[#617589] dark:text-gray-400 leading-relaxed">{product.description}</p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-3xl font-black text-[#111418] dark:text-white">${product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-[#617589] dark:text-gray-400 line-through">${product.originalPrice}</span>
                  <span className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                    SAVE ${product.originalPrice - product.price}
                  </span>
                </>
              )}
            </div>

            <div className="flex items-center gap-3">
              <span className={`flex items-center gap-2 text-sm font-medium ${product.stock > 10 ? 'text-green-600' : 'text-orange-600'}`}>
                <span className={`w-2 h-2 rounded-full ${product.stock > 10 ? 'bg-green-600' : 'bg-orange-600'}`}></span>
                {product.stock > 10 ? 'In Stock' : `Only ${product.stock} left`}
              </span>
              <span className="text-sm text-[#617589] dark:text-gray-400">|</span>
              <span className="text-sm text-[#617589] dark:text-gray-400">Free shipping</span>
            </div>

            <div className="flex gap-4">
              <div className="flex items-center border border-[#e5e7eb] dark:border-[#3e4a5b] rounded-lg overflow-hidden">
                <button className="flex items-center justify-center w-10 h-12 text-[#617589] hover:text-primary hover:bg-gray-50 dark:hover:bg-[#2a3441] transition-colors">
                  <span className="material-symbols-outlined">remove</span>
                </button>
                <input type="text" value="1" className="w-12 text-center border-none bg-transparent text-[#111418] dark:text-white font-medium focus:outline-none" />
                <button className="flex items-center justify-center w-10 h-12 text-[#617589] hover:text-primary hover:bg-gray-50 dark:hover:bg-[#2a3441] transition-colors">
                  <span className="material-symbols-outlined">add</span>
                </button>
              </div>
              <button className="flex-1 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-3 rounded-lg transition-colors shadow-soft">
                Add to Cart
              </button>
              <button className="flex items-center justify-center size-12 rounded-lg border border-[#e5e7eb] dark:border-[#3e4a5b] text-[#617589] hover:text-red-500 hover:border-red-500 transition-colors">
                <span className="material-symbols-outlined">favorite</span>
              </button>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 flex items-center justify-center gap-2 border border-[#e5e7eb] dark:border-[#3e4a5b] rounded-lg py-3 text-[#111418] dark:text-white font-medium hover:bg-gray-50 dark:hover:bg-[#2a3441] transition-colors">
                <span className="material-symbols-outlined">storefront</span>
                Buy Now
              </button>
            </div>

            <div className="border-t border-[#e5e7eb] dark:border-[#2a3441] pt-6">
              <h3 className="text-[#111418] dark:text-white font-bold mb-4">Key Features</h3>
              <div className="grid grid-cols-1 gap-2">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-green-500 text-sm filled-icon">check_circle</span>
                    <span className="text-sm text-[#617589] dark:text-gray-400">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-[#e5e7eb] dark:border-[#2a3441] pt-6">
              <h3 className="text-[#111418] dark:text-white font-bold mb-4">Specifications</h3>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between text-sm">
                    <span className="text-[#617589] dark:text-gray-400">{key}</span>
                    <span className="text-[#111418] dark:text-white font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
