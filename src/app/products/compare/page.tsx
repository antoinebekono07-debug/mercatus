'use client';

import { useState } from 'react';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: "Smart Home Hub v2",
    brand: "MyZone Tech",
    price: 129.00,
    originalPrice: 149.00,
    rating: 4.8,
    reviews: 2450,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNmzlLZU7W8K2RKckjZPmjIjz8SCMNihU_TGgKlLiJFeOH3QV1AVbO4I-RUWS1cPMEqKf_hs3hLz2F8G2E0Rz2FupH5vBJGCTqcjO6krh1tHJQH1ftqUdi6dlHfBEAAmDXEOKONpWxLZE2isFqSk4ItjCTkQshIIWwYNVeJv4Hu7S_wsisk8Jq-OKRFs4-nc90MGw0dNt8Bea0hUOLLJhkjqmULMJu5Zh2bI5IpN7F_ZMz2sAVCLg1677kLrOUVbcGPwKQ-HeWuyx_",
    elite: true,
    features: {
      "Connectivity": { value: "WiFi 6, Bluetooth 5.2", highlight: true },
      "Voice AI": { value: "Advanced AI Assistant", highlight: true },
      "Power": { value: "15W Fast Charging", highlight: false },
      "Compatibility": { value: "Matter, Thread, Zigbee", highlight: true },
    },
  },
  {
    id: 2,
    name: "Audio Core Gen 5",
    brand: "CoreAudio",
    price: 49.99,
    originalPrice: null,
    rating: 4.2,
    reviews: 12800,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1Zot1E14a7l35KMlqf7K-miojpIW0gHjBnP9VDJ6wGErZ8thGhcF_AtSil_2GdWkBi-oEkXdal23YH7-IBoWdwbx5MfMEdmV6h-hMQW5hC5VM2HybQmwxKJLtaHKKA5aqMJd3X1SX9LljTnmrAxJapE9tiTpDjloSidqrDS3ISexwaTpPU5Fwbl6eK02gFQHChs2_JKZ5Nqu4ZboAGTZdVaMH3TbtfpRYRwY_45tGKw4g5-lWF4TzEIfzt5CVd9tBn_iV-c49PT7r",
    elite: false,
    features: {
      "Connectivity": { value: "WiFi 5, Bluetooth 5.0", highlight: false },
      "Voice AI": { value: "Basic Voice Control", highlight: false },
      "Power": { value: "10W Standard", highlight: false },
      "Compatibility": { value: "Bluetooth Only", highlight: false },
    },
  },
  {
    id: 3,
    name: "Sonic Sphere Studio",
    brand: "StudioTech",
    price: 99.99,
    originalPrice: null,
    rating: 4.6,
    reviews: 8320,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfjNcCcEQ8h9G7eZsTDRCshLOR19THpeB-tq_XNjln3QOVjgljfl3_-4NgIFajDFnaUH8rgddJ9X96k3IUkrvYEwVrZx95AVckn1LFwrcbsfqfdCOM9s7bWHk-3XuN0qz9d4JkUEpaO7Yn7WkS0NZF8X_qbzOXCOYs5YAyppvjSQ9x4dXdB8aCEqsoUpifPFCVfD94L3H90D6QTdeHgi7edJOw7Gp_ysX9WuTW_WBawYJmPAG1R0OqChK1pt189MEQ_PXyOkbpyXnU",
    elite: false,
    features: {
      "Connectivity": { value: "WiFi 5, Bluetooth 5.0", highlight: false },
      "Voice AI": { value: "Basic Voice Control", highlight: false },
      "Power": { value: "12W Fast Charging", highlight: false },
      "Compatibility": { value: "WiFi, Bluetooth", highlight: false },
    },
  },
];

const specifications = [
  { category: "General Overview", items: [
    { name: "User Rating", key: "rating", type: "rating" },
    { name: "Brand", key: "brand", type: "text" },
    { name: "Release Year", key: "year", values: ["2023", "2022", "2020"], highlight: [true, false, false] },
    { name: "Warranty", key: "warranty", values: ["1 Year Limited", "1 Year Limited", "1 Year Limited"], highlight: [false, false, false] },
  ]},
  { category: "Technical Specifications", items: [
    { name: "Connectivity", key: "connectivity", type: "feature" },
    { name: "Voice AI", key: "voice_ai", type: "feature" },
    { name: "Power", key: "power", type: "feature" },
    { name: "Compatibility", key: "compatibility", type: "feature" },
  ]},
];

export default function ProductComparisonPage() {
  const [hideIdentical, setHideIdentical] = useState(false);
  const [highlightDifferences, setHighlightDifferences] = useState(true);

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display">
      <header className="bg-surface-light border-b border-border-color sticky top-0 z-[60]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">
            <div className="flex items-center gap-8 shrink-0">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="w-8 h-8 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-3xl">all_inclusive</span>
                </div>
                <h1 className="text-xl font-bold tracking-tight text-text-main group-hover:text-primary transition-colors">myzone</h1>
              </Link>
              <nav className="hidden md:flex items-center gap-6">
                <Link href="/products" className="text-sm font-semibold hover:text-primary transition-colors">Marketplace</Link>
                <Link href="/recommendations" className="text-sm font-semibold hover:text-primary transition-colors">Solutions</Link>
              </nav>
            </div>
            <div className="hidden md:flex flex-1 max-w-md mx-auto">
              <div className="relative w-full text-text-muted focus-within:text-primary">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-xl">search</span>
                </div>
                <input className="block w-full pl-10 pr-3 py-2 border border-border-color rounded-lg bg-slate-50 focus:ring-2 focus:ring-primary/20 focus:bg-white focus:border-primary transition-all text-sm placeholder:text-text-muted/60" placeholder="Compare specific models..." type="text"/>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button className="p-2 text-text-main hover:bg-slate-100 rounded-lg transition-colors">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <Link href="/auth/login" className="p-2 text-text-main hover:bg-slate-100 rounded-lg transition-colors">
                <span className="material-symbols-outlined">account_circle</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow flex flex-col w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav aria-label="Breadcrumb" className="flex mb-6">
          <ol className="flex items-center space-x-2">
            <li><Link href="/products" className="text-text-muted hover:text-primary text-xs font-bold uppercase tracking-wider">Catalog</Link></li>
            <li><span className="text-text-muted/50 text-xs">/</span></li>
            <li><Link href="/products" className="text-text-muted hover:text-primary text-xs font-bold uppercase tracking-wider">Smart Devices</Link></li>
            <li><span className="text-text-muted/50 text-xs">/</span></li>
            <li><span aria-current="page" className="text-text-main text-xs font-bold uppercase tracking-wider">Comparison Hub</span></li>
          </ol>
        </nav>
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div className="flex flex-col gap-1">
            <h2 className="text-3xl font-extrabold tracking-tight text-text-main">Compare Devices</h2>
            <p className="text-text-muted text-sm font-medium">Evaluate key metrics across {products.length} selected smart home hubs</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center bg-white rounded-lg border border-border-color shadow-sm overflow-hidden">
              <button className="px-4 py-2 text-sm font-bold text-text-muted hover:bg-slate-50 flex items-center gap-2 transition-colors">
                <span className="material-symbols-outlined text-lg">share</span>
                Share
              </button>
              <div className="w-px h-8 bg-border-color"></div>
              <button className="px-4 py-2 text-sm font-bold text-red-600 hover:bg-red-50 flex items-center gap-2 transition-colors">
                <span className="material-symbols-outlined text-lg">delete</span>
                Clear All
              </button>
            </div>
            <div className="flex items-center gap-4 bg-white px-4 py-2 rounded-lg border border-border-color shadow-sm">
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className="relative inline-flex items-center">
                  <input 
                    className="sr-only peer" 
                    type="checkbox"
                    checked={hideIdentical}
                    onChange={(e) => setHideIdentical(e.target.checked)}
                  />
                  <div className="w-10 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                </div>
                <span className="text-sm font-bold text-text-main group-hover:text-primary transition-colors">Hide Identical</span>
              </label>
              <div className="w-px h-6 bg-border-color"></div>
              <label className="flex items-center gap-2 cursor-pointer group">
                <input 
                  className="form-checkbox rounded border-slate-300 text-primary focus:ring-primary/20 h-4 w-4 transition-all" 
                  type="checkbox"
                  checked={highlightDifferences}
                  onChange={(e) => setHighlightDifferences(e.target.checked)}
                />
                <span className="text-sm font-bold text-text-main group-hover:text-primary transition-colors">Highlight Differences</span>
              </label>
            </div>
          </div>
        </div>
        
        <div className="w-full bg-white rounded-2xl shadow-xl border border-border-color overflow-hidden">
          <div className="overflow-x-auto">
            <div className="comparison-grid min-w-[1200px]" style={{ gridTemplateColumns: `240px repeat(${products.length}, minmax(280px, 1fr)) 120px` }}>
              <div className="sticky top-0 left-0 p-6 border-b border-r border-border-color flex flex-col justify-end bg-white z-50">
                <div className="bg-primary/5 text-primary text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded inline-block w-fit mb-2">Specs View</div>
                <span className="text-sm font-extrabold text-slate-400 uppercase tracking-widest">Attributes</span>
              </div>
              
              {products.map((product) => (
                <div key={product.id} className="sticky top-0 p-6 border-b border-r border-border-color group bg-white">
                  <div className="flex flex-col gap-4">
                    <div className="relative aspect-[4/3] w-full rounded-xl bg-slate-50 overflow-hidden ring-1 ring-border-color transition-transform duration-300 group-hover:scale-[1.02]">
                      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url("${product.image}")` }}></div>
                      {product.elite && (
                        <div className="absolute top-2 left-2 bg-primary text-white text-[10px] font-black px-2 py-1 rounded shadow-sm uppercase">Elite Choice</div>
                      )}
                      <button className="absolute top-2 right-2 p-1.5 bg-white/90 backdrop-blur rounded-full text-text-muted hover:text-red-500 hover:bg-white shadow-sm transition-all opacity-0 group-hover:opacity-100">
                        <span className="material-symbols-outlined text-lg">close</span>
                      </button>
                    </div>
                    <div>
                      <h3 className="font-extrabold text-lg text-text-main leading-tight mb-1">{product.name}</h3>
                      <div className="flex items-center gap-1.5 mb-2">
                        <span className="text-lg font-black text-primary">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-xs text-text-muted line-through">${product.originalPrice}</span>
                        )}
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="flex text-amber-400">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: i < Math.floor(product.rating) ? "'FILL' 1" : "'FILL' 0" }}>
                              {i < Math.floor(product.rating) ? 'star' : i < product.rating ? 'star_half' : 'star'}
                            </span>
                          ))}
                        </div>
                        <span className="text-xs font-bold text-text-main ml-1">{product.rating}</span>
                        <span className="text-xs text-text-muted">({product.reviews.toLocaleString()})</span>
                      </div>
                    </div>
                    <Link href={`/products/${product.id}`} className="w-full bg-slate-900 hover:bg-black text-white font-bold py-2.5 rounded-lg text-sm transition-all shadow-md active:scale-95 flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-sm">shopping_bag</span>
                      Buy Now
                    </Link>
                  </div>
                </div>
              ))}
              
              <div className="sticky top-0 p-6 border-b border-border-color flex flex-col items-center justify-center bg-white">
                <button className="w-full h-full min-h-[160px] border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center gap-3 text-slate-400 hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all group">
                  <span className="material-symbols-outlined text-3xl">add_circle</span>
                  <span className="font-bold text-xs uppercase tracking-widest">Add Device</span>
                </button>
              </div>
              
              {specifications.map((spec, specIdx) => (
                <>
                  <div key={`header-${specIdx}`} className="col-span-full bg-slate-50/80 px-6 py-3 border-b border-border-color">
                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      {spec.category}
                    </h3>
                  </div>
                  {spec.items.map((item, itemIdx) => (
                    <div key={`${specIdx}-${itemIdx}`} className={`contents ${highlightDifferences ? 'row-diff' : ''}`}>
                      <div className="sticky left-0 p-5 border-b border-r border-border-color text-sm font-bold text-slate-500 flex items-center gap-2 shadow-[4px_0_12px_-4px_rgba(0,0,0,0.05)] bg-white">
                        {item.name}
                        {highlightDifferences && item.type !== 'rating' && (
                          <span className="material-symbols-outlined text-amber-500 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>error</span>
                        )}
                      </div>
                      {item.type === 'rating' ? (
                        products.map((product) => (
                          <div key={product.id} className="p-5 border-b border-r border-border-color">
                            <div className="flex flex-col gap-1">
                              <div className="flex items-center gap-1">
                                <span className="text-base font-black text-text-main">{product.rating}</span>
                                <div className="flex text-amber-400">
                                  {[...Array(5)].map((_, i) => (
                                    <span key={i} className="material-symbols-outlined text-xs" style={{ fontVariationSettings: i < Math.floor(product.rating) ? "'FILL' 1" : "'FILL' 0" }}>
                                      {i < Math.floor(product.rating) ? 'star' : i < product.rating ? 'star_half' : 'star'}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              <span className="text-[11px] font-bold text-text-muted">{product.reviews.toLocaleString()} Reviews</span>
                            </div>
                          </div>
                        ))
                      ) : item.type === 'feature' ? (
                        products.map((product) => (
                          <div key={product.id} className={`p-5 border-b border-r border-border-color text-sm ${(product.features as Record<string, {value: string, highlight: boolean}>)[item.key]?.highlight ? 'bg-amber-50' : ''}`}>
                            <div className="flex flex-col gap-1">
                              <span className={`font-bold ${(product.features as Record<string, {value: string, highlight: boolean}>)[item.key]?.highlight ? 'text-primary' : 'text-text-main'}`}>
                                {(product.features as Record<string, {value: string, highlight: boolean}>)[item.key]?.value}
                              </span>
                            </div>
                          </div>
                        ))
                      ) : (
                        item.values?.map((value, idx) => (
                          <div key={idx} className={`p-5 border-b border-r border-border-color text-sm font-medium text-text-main ${item.highlight?.[idx] ? 'bg-amber-50' : ''}`}>
                            {value}
                            {item.highlight?.[idx] && (
                              <span className="ml-2 text-[10px] text-primary bg-primary/10 px-1.5 rounded">Newest</span>
                            )}
                          </div>
                        ))
                      )}
                      <div className="border-b border-border-color bg-white"></div>
                    </div>
                  ))}
                </>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 p-6 bg-gradient-to-r from-primary/10 to-blue-600/10 rounded-xl border border-primary/20">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-text-main mb-2">Need help choosing?</h3>
              <p className="text-text-muted text-sm">
                Our AI-powered assistant can help you find the perfect product based on your needs.
              </p>
            </div>
            <Link href="/recommendations" className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-blue-600 text-white font-bold rounded-full transition-colors shadow-lg shadow-primary/25">
              <span className="material-symbols-outlined">smart_toy</span>
              Get AI Recommendations
            </Link>
          </div>
        </div>
      </main>
      
      <style jsx global>{`
        .comparison-grid {
          display: grid;
        }
        .row-diff {
          background-color: #fffbeb !important;
        }
        .row-diff > div:first-child {
          background-color: #fffbeb !important;
        }
      `}</style>
    </div>
  );
}
