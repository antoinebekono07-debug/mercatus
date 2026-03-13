'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ConsultationFeedbackPage() {
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
      <header className="flex items-center justify-between border-b border-[#f0f2f4] dark:border-[#2a3844] bg-white dark:bg-[#1a2632] px-6 lg:px-10 py-3 sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-4">
          <div className="size-8 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-3xl">grid_view</span>
          </div>
          <h2 className="text-lg font-bold">myzone</h2>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="#" className="text-sm font-medium hover:text-primary">Dashboard</Link>
          <Link href="#" className="text-sm font-medium hover:text-primary">Experts</Link>
          <Link href="#" className="text-sm font-medium hover:text-primary">Messages</Link>
        </div>
        <div className="w-10 h-10 rounded-full bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCrt_vnn0KUbr-UA-8wQevixW_M1dJfjKzMdLm1G-9gWJKlVxps94Ffkg-B3xqZJVPDIZGJv1yqy0Lq8Ky8tOk0xq7O5VlTw4_nkjeU0UtiwZqfUQHqO9FvcKsUT8kq0IgaPHl0ytLSbkQY9kpUNM8UdoIFVILUbu0ELFeIhB844Cvf_X6FePDqK5E4eHa2JVBrjTr1IMsEjnfw3lEuLBuQVH3Ffy7K1OXVQ1xnEYS6hCIEq6sNhztysbybBIPhPZrXAVywZBuLmMxZ")' }}></div>
      </header>

      <main className="flex-1 flex items-center justify-center py-10 px-4">
        <div className="max-w-[600px] w-full bg-white dark:bg-[#1a2632] rounded-xl shadow-sm border border-gray-200 dark:border-[#2a3844] overflow-hidden">
          <div className="p-8 pb-0 text-center">
            <h1 className="text-2xl font-bold mb-2">Session Feedback</h1>
            <p className="text-[#617589] text-sm">
              Your feedback helps us maintain the highest standards of trust and excellence.
            </p>
          </div>

          <div className="p-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="material-symbols-outlined text-5xl text-green-600">check_circle</span>
                </div>
                <h2 className="text-xl font-bold mb-2">Thank You!</h2>
                <p className="text-[#617589] mb-6">Your feedback has been submitted successfully.</p>
                <Link href="/" className="inline-block px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-blue-600">
                  Back to Home
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="text-center">
                  <p className="font-medium mb-4">How would you rate your consultation with Dr. Sarah Chen?</p>
                  <div className="flex justify-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => setRating(star)}
                        className="p-1"
                      >
                        <span className={`material-symbols-outlined text-4xl transition-colors ${
                          star <= rating ? 'text-yellow-500' : 'text-gray-300'
                        }`} style={{ fontVariationSettings: "'FILL' 1" }}>
                          star
                        </span>
                      </button>
                    ))}
                  </div>
                  <p className="text-sm text-[#617589] mt-2">
                    {rating === 1 && 'Poor'}
                    {rating === 2 && 'Fair'}
                    {rating === 3 && 'Good'}
                    {rating === 4 && 'Very Good'}
                    {rating === 5 && 'Excellent'}
                    {!rating && 'Click to rate'}
                  </p>
                </div>

                <div>
                  <label className="block font-medium mb-2">What did you find most helpful?</label>
                  <div className="flex flex-wrap gap-2">
                    {['Expert Knowledge', 'Practical Advice', 'Clear Communication', 'Actionable Insights', 'Follow-up Resources'].map((tag) => (
                      <label key={tag} className="flex items-center gap-2 px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer hover:border-primary">
                        <input type="checkbox" className="rounded text-primary" />
                        <span className="text-sm">{tag}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block font-medium mb-2">Additional Comments</label>
                  <textarea
                    className="w-full p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 min-h-[100px]"
                    placeholder="Share your experience..."
                  ></textarea>
                </div>

                <div className="flex items-center gap-3">
                  <input type="checkbox" id="public" className="rounded text-primary" />
                  <label htmlFor="public" className="text-sm text-[#617589]">
                    Allow my feedback to be displayed publicly
                  </label>
                </div>

                <button
                  onClick={() => setSubmitted(true)}
                  disabled={rating === 0}
                  className="w-full py-3 bg-primary text-white rounded-lg font-bold hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Submit Feedback
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
