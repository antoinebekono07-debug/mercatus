'use client';

import { useState } from 'react';
import Link from 'next/link';

const configOptions = {
  base: [
    { id: 'x500', name: 'Sentinel X-500', price: 45000, selected: true },
    { id: 'x700', name: 'Sentinel X-700', price: 62000, selected: false },
    { id: 'x900', name: 'Sentinel X-900', price: 85000, selected: false },
  ],
  payload: [
    { id: 'std', name: 'Standard 5kg', price: 0 },
    { id: 'hd', name: 'Heavy Duty 10kg', price: 2500 },
    { id: 'uhd', name: 'Ultra Heavy 15kg', price: 4500 },
  ],
  reach: [
    { id: 'std', name: 'Standard 1.2m', price: 0 },
    { id: 'ext', name: 'Extended 1.8m', price: 3200 },
    { id: 'long', name: 'Long Reach 2.5m', price: 5800 },
  ],
  control: [
    { id: 'basic', name: 'Basic Controller', price: 0 },
    { id: 'pro', name: 'Pro Controller + AI', price: 4500 },
    { id: 'ent', name: 'Enterprise Suite', price: 8900 },
  ],
  warranty: [
    { id: '1y', name: '1 Year Standard', price: 0 },
    { id: '2y', name: '2 Year Extended', price: 1200 },
    { id: '3y', name: '3 Year Premium', price: 2100 },
  ],
};

export default function CPQPage() {
  const [selectedBase, setSelectedBase] = useState('x500');
  const [selectedPayload, setSelectedPayload] = useState('hd');
  const [selectedReach, setSelectedReach] = useState('ext');
  const [selectedControl, setSelectedControl] = useState('pro');
  const [selectedWarranty, setSelectedWarranty] = useState('2y');
  const [quantity, setQuantity] = useState(3);
  const [priceUpdated, setPriceUpdated] = useState(false);

  const basePrice = configOptions.base.find(b => b.id === selectedBase)?.price || 0;
  const payloadPrice = configOptions.payload.find(p => p.id === selectedPayload)?.price || 0;
  const reachPrice = configOptions.reach.find(r => r.id === selectedReach)?.price || 0;
  const controlPrice = configOptions.control.find(c => c.id === selectedControl)?.price || 0;
  const warrantyPrice = configOptions.warranty.find(w => w.id === selectedWarranty)?.price || 0;

  const unitPrice = basePrice + payloadPrice + reachPrice + controlPrice + warrantyPrice;
  const totalPrice = unitPrice * quantity;

  const handleQuote = () => {
    setPriceUpdated(true);
    setTimeout(() => setPriceUpdated(false), 1000);
  };

  return (
    <div className="min-h-screen flex flex-col font-display bg-background-light dark:bg-background-dark">
      <header className="bg-white border-b border-[#f0f2f4] sticky top-0 z-50">
        <div className="max-w-[1440px] mx-auto px-4 md:px-10 py-3 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="size-8 bg-primary/10 rounded flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[24px]">view_in_ar</span>
              </div>
              <h2 className="text-[#111418] text-lg font-bold">myzone</h2>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/products" className="text-[#111418] text-sm font-medium hover:text-primary">Marketplace</Link>
              <Link href="/products" className="text-[#111418] text-sm font-medium hover:text-primary">Configurator</Link>
              <span className="text-primary text-sm font-medium">Quotes</span>
              <Link href="/help" className="text-[#111418] text-sm font-medium hover:text-primary">Support</Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#617589]">
                <span className="material-symbols-outlined text-[20px]">search</span>
              </span>
              <input className="block w-full rounded-lg border-none bg-[#f0f2f4] py-2 pl-10 pr-4 text-sm text-[#111418] placeholder-[#617589] focus:ring-2 focus:ring-primary/20" placeholder="Search SKU or Quote ID..." type="text"/>
            </div>
            <div className="size-9 bg-gray-200 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBydoy_L7BfpM-KAuE4nNI_Ax8mD7GTUhv8JUPM506qlHJkmaHzJZjdKTU2RO5heFKlXaCB-ciXOphHAv_PqpiGHA2tg55F2lRq3ByFMSzVqEiUyNuiw29hZQVCZSX2gskGwUH453auPOSAB8ZMPW2-zYZ70W-3Q_8a7BSzIEkqgqY65oKUyCHT_08IssNo3gaM1ctofaDUv5uEDcvj1CBPB4ZDXwZw0HE4USs6jq0hamOBJSS_zh-FkPHJR1mRIBjGemb-my9CX-ZN")' }}></div>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full max-w-[1440px] mx-auto px-4 md:px-10 py-6">
        <div className="flex flex-wrap items-center gap-2 mb-4 text-sm text-[#617589]">
          <Link href="/products" className="hover:text-primary">Industrial Robotics</Link>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          <Link href="/products" className="hover:text-primary">Sentinel Series</Link>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          <span className="text-[#111418] font-medium">Quote #8823-X99</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-[#111418] tracking-tight mb-2">Quote Summary: Sentinel X-500</h1>
            <p className="text-[#617589] text-base">Quote ID: #8823-X99 | Created: Oct 24, 2024</p>
          </div>
          <div className="flex items-center gap-2 text-green-700 font-medium bg-green-50 px-3 py-1.5 rounded-full border border-green-200 text-sm">
            <span className="material-symbols-outlined text-[18px]">check_circle</span>
            Configuration Validated
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:min-h-[600px]">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="relative flex-1 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex items-center justify-center p-8" style={{ backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
              <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
                <button aria-label="Rotate View" className="size-10 bg-white/90 backdrop-blur rounded-lg border border-gray-200 text-[#617589] hover:text-primary hover:border-primary shadow-sm flex items-center justify-center transition-all">
                  <span className="material-symbols-outlined">360</span>
                </button>
                <button aria-label="Zoom In" className="size-10 bg-white/90 backdrop-blur rounded-lg border border-gray-200 text-[#617589] hover:text-primary hover:border-primary shadow-sm flex items-center justify-center transition-all">
                  <span className="material-symbols-outlined">zoom_in</span>
                </button>
                <button aria-label="Toggle Wireframe" className="size-10 bg-white/90 backdrop-blur rounded-lg border border-gray-200 text-[#617589] hover:text-primary hover:border-primary shadow-sm flex items-center justify-center transition-all">
                  <span className="material-symbols-outlined">grid_4x4</span>
                </button>
                <button aria-label="Fullscreen" className="size-10 bg-white/90 backdrop-blur rounded-lg border border-gray-200 text-[#617589] hover:text-primary hover:border-primary shadow-sm flex items-center justify-center transition-all">
                  <span className="material-symbols-outlined">fullscreen</span>
                </button>
              </div>

              <div className="relative w-full h-full flex items-center justify-center">
                <div className="w-full h-full bg-contain bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDyXsYCUftvQqPSaQPbCZy280_kfuqv2wEpB6vMgRl1m2YmFmGBUO13tqawJ8pAJ2el-kcWg8b3kwtgCDpYw4ACPVxJrRL8lRngDTcRzDmW0ZiIEHjSuvAOIMvCHEn_WN0hYBanMqwycazsFuG1cMtTVC24U-BYFLJMjPRmxK0zdzb-6itHAOUEYyweSWg4YIXReXu7-Ze6KWXMleDEp62XzOECASNgqi2J-e2TpFkOWKs_ALxAgC336_XY5i2HVXRzVBWclEurAfvL")' }}></div>
                <div className="absolute top-[35%] left-[45%]">
                  <div className="relative flex items-center justify-center cursor-pointer">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full size-3 bg-primary border-2 border-white shadow-sm"></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <h3 className="text-sm font-bold text-[#111418] mb-3">Configuration Summary</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {[
                  { label: 'Model', value: configOptions.base.find(b => b.id === selectedBase)?.name },
                  { label: 'Payload', value: configOptions.payload.find(p => p.id === selectedPayload)?.name },
                  { label: 'Reach', value: configOptions.reach.find(r => r.id === selectedReach)?.name },
                  { label: 'Controller', value: configOptions.control.find(c => c.id === selectedControl)?.name },
                  { label: 'Warranty', value: configOptions.warranty.find(w => w.id === selectedWarranty)?.name },
                ].map((item, idx) => (
                  <div key={idx} className="text-center p-2 bg-gray-50 rounded-lg">
                    <p className="text-[10px] text-[#617589] uppercase">{item.label}</p>
                    <p className="text-xs font-semibold text-[#111418]">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-[#111418] mb-4">Configure Your System</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-[#617589] uppercase mb-2 block">Base Model</label>
                  <div className="space-y-2">
                    {configOptions.base.map((option) => (
                      <label key={option.id} className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-all ${selectedBase === option.id ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-gray-300'}`}>
                        <div className="flex items-center gap-3">
                          <input type="radio" name="base" checked={selectedBase === option.id} onChange={() => setSelectedBase(option.id)} className="sr-only"/>
                          <span className={`size-4 rounded-full border-2 flex items-center justify-center ${selectedBase === option.id ? 'border-primary' : 'border-gray-300'}`}>
                            {selectedBase === option.id && <span className="size-2 rounded-full bg-primary"></span>}
                          </span>
                          <span className="text-sm font-medium text-[#111418]">{option.name}</span>
                        </div>
                        <span className="text-sm font-bold text-[#111418]">${option.price.toLocaleString()}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#617589] uppercase mb-2 block">Payload Capacity</label>
                  <div className="grid grid-cols-3 gap-2">
                    {configOptions.payload.map((option) => (
                      <button key={option.id} onClick={() => setSelectedPayload(option.id)} className={`p-2 rounded-lg border text-center transition-all ${selectedPayload === option.id ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-gray-300'}`}>
                        <span className="text-xs font-medium text-[#111418] block">{option.name}</span>
                        <span className="text-[10px] text-[#617589]">{option.price > 0 ? `+$${option.price}` : 'Included'}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#617589] uppercase mb-2 block">Arm Reach</label>
                  <div className="grid grid-cols-3 gap-2">
                    {configOptions.reach.map((option) => (
                      <button key={option.id} onClick={() => setSelectedReach(option.id)} className={`p-2 rounded-lg border text-center transition-all ${selectedReach === option.id ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-gray-300'}`}>
                        <span className="text-xs font-medium text-[#111418] block">{option.name}</span>
                        <span className="text-[10px] text-[#617589]">{option.price > 0 ? `+$${option.price}` : 'Included'}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#617589] uppercase mb-2 block">Control System</label>
                  <div className="space-y-2">
                    {configOptions.control.map((option) => (
                      <label key={option.id} className={`flex items-center justify-between p-2 rounded-lg border cursor-pointer transition-all ${selectedControl === option.id ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-gray-300'}`}>
                        <span className="text-sm font-medium text-[#111418]">{option.name}</span>
                        <span className="text-xs text-[#617589]">{option.price > 0 ? `+$${option.price}` : 'Included'}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#617589] uppercase mb-2 block">Warranty</label>
                  <select value={selectedWarranty} onChange={(e) => setSelectedWarranty(e.target.value)} className="w-full p-2 rounded-lg border border-gray-200 text-sm">
                    {configOptions.warranty.map((option) => (
                      <option key={option.id} value={option.id}>{option.name} {option.price > 0 ? `(+$${option.price})` : ''}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#617589] uppercase mb-2 block">Quantity</label>
                  <div className="flex items-center gap-3">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="size-8 rounded-lg border border-gray-200 flex items-center justify-center hover:border-gray-300">
                      <span className="material-symbols-outlined text-sm">remove</span>
                    </button>
                    <input type="number" value={quantity} onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))} className="w-16 text-center rounded-lg border border-gray-200 py-1"/>
                    <button onClick={() => setQuantity(quantity + 1)} className="size-8 rounded-lg border border-gray-200 flex items-center justify-center hover:border-gray-300">
                      <span className="material-symbols-outlined text-sm">add</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-24">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-[#617589]">Unit Price</span>
                <span className={`text-lg font-bold text-[#111418] transition-all ${priceUpdated ? 'price-updated' : ''}`}>${unitPrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-[#617589]">Quantity</span>
                <span className="text-sm font-medium text-[#111418]">{quantity}</span>
              </div>
              <div className="border-t border-gray-200 pt-4 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-base font-bold text-[#111418]">Total</span>
                  <span className={`text-2xl font-black text-primary transition-all ${priceUpdated ? 'price-updated' : ''}`}>${totalPrice.toLocaleString()}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button onClick={handleQuote} className="flex-1 bg-primary hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition-colors">
                  Update Quote
                </button>
                <button className="px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <span className="material-symbols-outlined">share</span>
                </button>
                <button className="px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <span className="material-symbols-outlined">download</span>
                </button>
              </div>
              <button className="w-full mt-3 bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition-colors">
                Proceed to Order
              </button>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        .price-updated {
          animation: price-pulse 0.6s ease-in-out;
          color: #166534;
        }
        @keyframes price-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
}
