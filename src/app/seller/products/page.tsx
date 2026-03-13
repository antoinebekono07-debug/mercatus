import Link from "next/link";

const products = [
  { id: 1, name: "ZonePro XR1 Headset", category: "Electronics", price: 299.00, stock: 45, status: "Active", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQN4mv102jACuPwSSwbCXKKS1c3fU28k8lUDvvG5PVxp1Sek29zbwml6EIwa6p0pBD6Ss2AEuTQ5DUwPqtlVPCeOgGTePfeUoiCdWz5a2rYsEgcTculfAzA15of5EOhdoWeFzTWFJh7Yl3kPY1nR68Y35ac9mqSKNMp5lOGcrh-8fMIunfnscNRNoA-z75aniG5GsUzZ5xFwsstw8ATKaElW1LWYh67Lmm80ZrAG8XRmbL8kiEW3g2HqxC3grFxlENJYkkl1vRbl5b" },
  { id: 2, name: "Smart Fitness Watch Pro", category: "Electronics", price: 199.00, stock: 120, status: "Active", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnnkxGYcD1Db1HJ9cnvOsNZZnZrgX-4R14Ka6XRKudixKjtFracuQwns3bw1VuHJBUFWs2KUnVQ_eC9S8CPRotL9WMGw9mX7-3JnJHoo-ES05Gr9iBeiZszevqkPfHkEC_UW7LK3FtD0C5srTovWRks5W5fg4qiBNqjnF2WPTDS1jN9fJsjZbdGuJRnHZBtpQBRMuewNLbY-LUEkYN5IndMIcesxu60bBLOLzEe_58iRWHtLCLI7D5BiMUXTc4ebaCBFzj2J2XaCC7" },
  { id: 3, name: "Premium Leather Weekender", category: "Fashion", price: 450.00, stock: 0, status: "Out of Stock", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuByLvVo_QztNQcTo-PWgzRPTtqXzxkDAHUvgGR72ginSM3N-5-9zz0l_FBpieJoQZDh0qQm-AUNHpAIZ_rqsgMofDpOUpo5NrC3JLT-L_mjNvHjrHAAQe2zAFAaZIjJ6GxGX6vwszWK8NN_RQR3GOsMUlao6UzI71uA1i1mzLyGK2QFxIa5qAPepLrYHdYtPw4b_vlqoz6YYZDQjwDiCGmp4XuHLLzW2r94JnerhiImHOd1RlSp5-KthSiWniH-CqiZCKZhzHoZjITt" },
  { id: 4, name: "EcoSmart Home Hub", category: "Electronics", price: 599.00, stock: 28, status: "Active", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEbDnlB5njN18aAkpOZY8GsQVntop2Q26wTg7WPpBT_kqAktpAjln7j5IJybTJhuq0JpI1ec1cVdKS_q3qklTVg4ZxKvK-WgTRbabLrGCdUBYKNxu_Zq_eFeQu_gek02eswuED9BX-lUh7KQeN2-1UnOXfoVYAbsFEt8S8UCIlyyari6e4bajzgL2in3EIVxYzzlVgZn1pvNd9c_F68MHuOc-hDBbXMTIBTF3ghcPsWLoOpHrBBFaChfbC3JXtiq57gf73X8MID9tC" },
];

export default function SellerProductsPage() {
  return (
    <div className="flex min-h-screen bg-background-light dark:bg-background-dark">
      <aside className="hidden lg:flex w-72 flex-col border-r border-[#f0f2f4] dark:border-gray-800 bg-white dark:bg-[#101922]">
        <div className="p-4 border-b border-[#f0f2f4] dark:border-gray-800">
          <div className="flex gap-3 items-center p-2 rounded-lg">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white font-bold">T</div>
            <div className="flex flex-col">
              <h1 className="text-[#111418] dark:text-white text-base font-medium">TechHaven</h1>
              <p className="text-[#617589] text-sm">Seller Portal</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {[
            { icon: "dashboard", label: "Dashboard", href: "/seller/dashboard" },
            { icon: "inventory_2", label: "Products", href: "/seller/products", active: true },
            { icon: "shopping_cart", label: "Orders", href: "/seller/orders" },
            { icon: "analytics", label: "Analytics", href: "/seller/analytics" },
            { icon: "settings", label: "Settings", href: "/seller/settings" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                item.active
                  ? "bg-primary/10 text-primary"
                  : "text-[#617589] dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
              <span className="flex-1">{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>

      <main className="flex-1 flex flex-col">
        <header className="flex items-center justify-between px-6 py-4 border-b border-[#f0f2f4] dark:border-gray-800 bg-white dark:bg-[#101922]">
          <div className="flex items-center gap-4">
            <button className="lg:hidden p-2 text-[#617589]">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <h1 className="text-xl font-bold text-[#111418] dark:text-white">Products</h1>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg transition-colors">
            <span className="material-symbols-outlined">add</span>
            Add Product
          </button>
        </header>

        <div className="flex-1 p-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#617589] material-symbols-outlined">search</span>
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full h-11 pl-10 pr-4 rounded-lg border border-[#e5e7eb] dark:border-[#3e4a5b] bg-white dark:bg-[#1a2632] text-[#111418] dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            <select className="h-11 px-4 rounded-lg border border-[#e5e7eb] dark:border-[#3e4a5b] bg-white dark:bg-[#1a2632] text-[#111418] dark:text-white focus:outline-none focus:ring-2 focus:ring-primary">
              <option>All Categories</option>
              <option>Electronics</option>
              <option>Fashion</option>
              <option>Home</option>
            </select>
            <select className="h-11 px-4 rounded-lg border border-[#e5e7eb] dark:border-[#3e4a5b] bg-white dark:bg-[#1a2632] text-[#111418] dark:text-white focus:outline-none focus:ring-2 focus:ring-primary">
              <option>All Status</option>
              <option>Active</option>
              <option>Out of Stock</option>
              <option>Draft</option>
            </select>
          </div>

          <div className="bg-white dark:bg-[#1a2632] rounded-xl border border-[#e5e7eb] dark:border-[#2a3441] overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#e5e7eb] dark:border-[#2a3441]">
                  <th className="text-left p-4 text-sm font-medium text-[#617589]">Product</th>
                  <th className="text-left p-4 text-sm font-medium text-[#617589]">Category</th>
                  <th className="text-left p-4 text-sm font-medium text-[#617589]">Price</th>
                  <th className="text-left p-4 text-sm font-medium text-[#617589]">Stock</th>
                  <th className="text-left p-4 text-sm font-medium text-[#617589]">Status</th>
                  <th className="text-left p-4 text-sm font-medium text-[#617589]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b border-[#e5e7eb] dark:border-[#2a3441] last:border-0">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100">
                          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                        </div>
                        <span className="font-medium text-[#111418] dark:text-white">{product.name}</span>
                      </div>
                    </td>
                    <td className="p-4 text-[#617589]">{product.category}</td>
                    <td className="p-4 font-medium text-[#111418] dark:text-white">${product.price}</td>
                    <td className="p-4">
                      <span className={product.stock === 0 ? "text-red-500" : "text-[#111418] dark:text-white"}>
                        {product.stock}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        product.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}>
                        {product.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <button className="p-2 text-[#617589] hover:text-primary transition-colors">
                          <span className="material-symbols-outlined text-sm">edit</span>
                        </button>
                        <button className="p-2 text-[#617589] hover:text-red-500 transition-colors">
                          <span className="material-symbols-outlined text-sm">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-center mt-6">
            <div className="flex items-center gap-2">
              <button className="flex items-center justify-center size-10 rounded-lg border border-[#e5e7eb] dark:border-[#3e4a5b] bg-white dark:bg-[#1a2632] text-[#617589] dark:text-gray-400">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="flex items-center justify-center size-10 rounded-lg bg-primary text-white font-medium">1</button>
              <button className="flex items-center justify-center size-10 rounded-lg border border-[#e5e7eb] dark:border-[#3e4a5b] bg-white dark:bg-[#1a2632] text-[#617589] dark:text-gray-400">2</button>
              <button className="flex items-center justify-center size-10 rounded-lg border border-[#e5e7eb] dark:border-[#3e4a5b] bg-white dark:bg-[#1a2632] text-[#617589] dark:text-gray-400">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
