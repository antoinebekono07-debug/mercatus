'use client';

import Link from 'next/link';

const mannequinProfiles = [
  { id: 1, name: 'Casual Female', age: '25-34', height: '5\'6"', bodyType: 'Athletic', skinTone: 'Medium', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbuKViPJNxTa8a-xKdeDP1V2WTrQ8m5idNGMW6drpOg5jc5BbO_7W37b0Kblf5rGAS2o_lvTDxzyyRYgD0pMWtRKB94cog9h5zcHr4eVRwaVwWHgFvslxKqg' },
  { id: 2, name: 'Professional Male', age: '35-44', height: '5\'10"', bodyType: 'Average', skinTone: 'Light', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpYAae9WGZ6BD3du--IAJSHZsbL-OYdu0qIFhaHuEjVh2HgSc94qIHJlPsVjEpN8fxfXkmmcU9WRcrfNbc_UeT35bePpKeKQu3JjdZXTTXD0m_Sm4N_9SXRNhWeUH00MzzN76qBptMR8ukeG8iTV' },
  { id: 3, name: 'Athletic Female', age: '18-24', height: '5\'8"', bodyType: 'Athletic', skinTone: 'Tan', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3qlY0hBdQJFuM6Fr2q0WM5gvVDQtAYelhts3y7ESE-EkJskaplKR2wi5unTOEppA5jHju9LmjRrQkriy_QDazGEQ3ueQhtFpoMdqXi-wZ3PXilYqz40RtZPEzoHKDcJsYcBEf' },
];

export default function MannequinProfilePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-[#f0f2f4] dark:border-gray-800 bg-white dark:bg-[#111418] px-6 lg:px-10 py-3">
        <Link href="/" className="flex items-center gap-4">
          <div className="size-8 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-3xl">shopping_bag</span>
          </div>
          <h2 className="text-lg font-bold">myzone</h2>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/products" className="text-sm font-medium hover:text-primary">Shop</Link>
          <Link href="#" className="text-sm font-medium hover:text-primary">Categories</Link>
          <Link href="#" className="text-sm font-medium hover:text-primary">Deals</Link>
          <Link href="/seller/register" className="text-sm font-medium hover:text-primary">Sell</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/cart" className="text-[#617589] hover:text-primary">
            <span className="material-symbols-outlined">shopping_cart</span>
          </Link>
          <Link href="/auth/login" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium">Sign In</Link>
        </div>
      </header>

      <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-black mb-2">Virtual Try-On Profiles</h1>
          <p className="text-[#617589]">Create and manage your mannequin profiles for virtual try-on experience</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {mannequinProfiles.map((profile) => (
            <div key={profile.id} className="bg-white dark:bg-[#1a2632] rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[3/4] bg-gray-100 dark:bg-gray-800 relative">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url("${profile.image}")` }}></div>
                <div className="absolute top-3 right-3">
                  <button className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:bg-gray-100">
                    <span className="material-symbols-outlined text-sm">edit</span>
                  </button>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg mb-3">{profile.name}</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="text-[#617589]">Age Range</p>
                    <p className="font-medium">{profile.age}</p>
                  </div>
                  <div>
                    <p className="text-[#617589]">Height</p>
                    <p className="font-medium">{profile.height}</p>
                  </div>
                  <div>
                    <p className="text-[#617589]">Body Type</p>
                    <p className="font-medium">{profile.bodyType}</p>
                  </div>
                  <div>
                    <p className="text-[#617589]">Skin Tone</p>
                    <p className="font-medium">{profile.skinTone}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="bg-white dark:bg-[#1a2632] rounded-2xl border-2 border-dashed border-gray-300 dark:border-gray-600 flex flex-col items-center justify-center p-8 hover:border-primary transition-colors cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-3xl text-gray-400">add</span>
            </div>
            <p className="font-bold text-lg mb-1">Create New Profile</p>
            <p className="text-sm text-[#617589] text-center">Add your measurements for accurate virtual try-on</p>
          </div>
        </div>

        <div className="bg-white dark:bg-[#1a2632] rounded-xl border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="font-bold text-lg mb-4">How Virtual Try-On Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">person</span>
              </div>
              <h3 className="font-bold mb-2">1. Create Profile</h3>
              <p className="text-sm text-[#617589]">Add your body measurements and preferences</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">checkroom</span>
              </div>
              <h3 className="font-bold mb-2">2. Browse Products</h3>
              <p className="text-sm text-[#617589]">Shop with confidence using virtual try-on</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">view_in_ar</span>
              </div>
              <h3 className="font-bold mb-2">3. See How It Looks</h3>
              <p className="text-sm text-[#617589]">Preview clothes on your personalized mannequin</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
