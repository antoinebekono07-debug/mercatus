'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ProductReviewPage() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
      <header className="w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="size-8 text-primary">
                <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fillRule="evenodd"></path>
                </svg>
              </div>
              <h2 className="text-lg font-bold">myzone</h2>
            </Link>
            <div className="hidden md:flex flex-1 max-w-lg">
              <div className="relative w-full">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                <input className="w-full pl-10 pr-3 py-2 border-none rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Search products..." />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/cart" className="relative text-slate-600 dark:text-slate-300 hover:text-primary">
                <span className="material-symbols-outlined">shopping_cart</span>
              </Link>
              <Link href="/auth/login" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary">Sign In</Link>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-12">
        <div className="mb-8">
          <Link href="/products/1" className="flex items-center gap-2 text-sm text-[#617589] hover:text-primary mb-4">
            <span className="material-symbols-outlined">arrow_back</span>
            Back to product
          </Link>
          <h1 className="text-3xl font-black">Write a Review</h1>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-800">
          <div className="flex gap-6 mb-8 pb-8 border-b border-slate-200 dark:border-slate-800">
            <div className="w-24 h-24 rounded-xl bg-slate-100 dark:bg-slate-800 overflow-hidden flex-shrink-0">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQN4mv102jACuPwSSwbCXKKS1c3fU28k8lUDvvG5PVxp1Sek29zbwml6EIwa6p0pBD6Ss2AEuTQ5DUwPqtlVPCeOgGTePfeUoiCdWz5a2rYsEgcTculfAzA15of5EOhdoWeFzTWFJh7Yl3kPY1nR68Y35ac9mqSKNMp5lOGcrh-8fMIunfnscNRNoA-z75aniG5GsUzZ5xFwsstw8ATKaElW1LWYh67Lmm80ZrAG8XRmbL8kiEW3g2HqxC3grFxlENJYkkl1vRbl5b" alt="Product" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">ZonePro XR1 Headset</h2>
              <p className="text-[#617589] text-sm">Premium Wireless Gaming Headset with Active Noise Cancellation</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-yellow-500 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="material-symbols-outlined text-sm">star</span>
                  ))}
                </span>
                <span className="text-sm text-[#617589]">4.8 (124 reviews)</span>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <label className="block text-lg font-bold mb-4">Overall Rating</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="p-1"
                  >
                    <span className={`material-symbols-outlined text-4xl transition-colors ${
                      star <= (hoverRating || rating) ? 'text-yellow-500' : 'text-gray-300 dark:text-gray-600'
                    }`} style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                  </button>
                ))}
              </div>
              <p className="text-sm text-[#617589] mt-2">
                {rating === 1 && 'Poor - Did not meet expectations'}
                {rating === 2 && 'Fair - Below average'}
                {rating === 3 && 'Good - Meets expectations'}
                {rating === 4 && 'Very Good - Exceeds expectations'}
                {rating === 5 && 'Excellent - Outstanding product!'}
                {!rating && 'Click to rate'}
              </p>
            </div>

            <div>
              <label className="block text-lg font-bold mb-4">What did you like?</label>
              <div className="flex flex-wrap gap-3">
                {['Sound Quality', 'Comfort', 'Battery Life', 'Build Quality', 'Value for Money', 'Noise Cancellation'].map((tag) => (
                  <label key={tag} className="flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-full cursor-pointer hover:border-primary">
                    <input type="checkbox" className="rounded text-primary" />
                    <span className="text-sm">{tag}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-lg font-bold mb-4">What could be improved?</label>
              <div className="flex flex-wrap gap-3">
                {['Nothing', 'Price', 'Weight', 'Connectivity', 'App Support', 'Packaging'].map((tag) => (
                  <label key={tag} className="flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-full cursor-pointer hover:border-primary">
                    <input type="checkbox" className="rounded text-primary" />
                    <span className="text-sm">{tag}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-lg font-bold mb-4">Your Review</label>
              <textarea
                className="w-full p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 min-h-[150px] focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Share your experience with this product. What stood out? What would you tell other buyers?"
              ></textarea>
              <p className="text-sm text-[#617589] mt-2 text-right">0 / 500 words</p>
            </div>

            <div>
              <label className="block text-lg font-bold mb-4">Add Photos</label>
              <div className="border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl p-8 text-center">
                <span className="material-symbols-outlined text-4xl text-slate-400 mb-2">add_photo_alternate</span>
                <p className="text-[#617589]">Drag and drop photos or <span className="text-primary cursor-pointer">browse</span></p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <input type="checkbox" id="verified" className="rounded text-primary" />
              <label htmlFor="verified" className="text-sm text-[#617589]">
                I purchased this product on myzone
              </label>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <button className="flex-1 py-3 border border-slate-200 dark:border-slate-700 rounded-lg font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              Cancel
            </button>
            <button className="flex-1 py-3 bg-primary text-white rounded-lg font-bold hover:bg-blue-600 transition-colors">
              Submit Review
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
