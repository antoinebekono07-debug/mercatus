"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

export function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const { totalItems } = useCart();

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e5e7eb] dark:border-[#2a3441] bg-white dark:bg-[#1a2632] px-4 lg:px-10 py-4 sticky top-0 z-50">
      <div className="flex items-center gap-8">
        <Link href="/" className="flex items-center gap-3 text-primary">
          <div className="size-8 flex items-center justify-center">
            <svg
              className="w-full h-full"
              fill="currentColor"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
          </div>
          <h2 className="text-[#111418] dark:text-white text-xl font-black leading-tight tracking-tight">
            myzone
          </h2>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/products?category=buyers"
            className="text-[#111418] dark:text-gray-300 hover:text-primary font-medium text-sm transition-colors"
          >
            For Buyers
          </Link>
          <Link
            href="/products?seller=browse"
            className="text-[#111418] dark:text-gray-300 hover:text-primary font-medium text-sm transition-colors"
          >
            Browse Sellers
          </Link>
          <Link
            href="/products?category=sellers"
            className="text-[#111418] dark:text-gray-300 hover:text-primary font-medium text-sm transition-colors"
          >
            For Sellers
          </Link>
          <Link
            href="/enterprise"
            className="text-[#111418] dark:text-gray-300 hover:text-primary font-medium text-sm transition-colors"
          >
            Enterprise
          </Link>
        </nav>
      </div>

      <div className="flex flex-1 justify-center max-w-xl px-8 hidden lg:flex">
        <form action="/products" method="GET" className="flex w-full h-11 relative group">
          <div className="flex w-full flex-1 items-stretch rounded-full h-full ring-1 ring-[#e5e7eb] dark:ring-[#3e4a5b] focus-within:ring-2 focus-within:ring-primary transition-all shadow-sm bg-background-light dark:bg-[#222f3e]">
            <div className="text-[#617589] dark:text-gray-400 flex border-none items-center justify-center pl-4">
              <span className="material-symbols-outlined text-[20px]">search</span>
            </div>
            <input
              type="text"
              name="q"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-full text-[#111418] dark:text-white focus:outline-0 border-none bg-transparent h-full placeholder:text-[#617589] dark:placeholder:text-gray-500 px-4 text-sm font-normal leading-normal"
              placeholder="Ask myzone to find premium leather bags..."
            />
          </div>
        </form>
      </div>

      <div className="flex items-center gap-4">
        <Link href="/cart" className="relative flex items-center justify-center size-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
          <span className="material-symbols-outlined">shopping_cart</span>
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-white font-bold">
              {totalItems}
            </span>
          )}
        </Link>
        <Link
          href="/auth/login"
          className="text-[#111418] dark:text-gray-300 font-medium text-sm hidden sm:block hover:text-primary transition-colors"
        >
          Log In
        </Link>
        <Link
          href="/auth/register"
          className="bg-primary text-white text-sm font-bold px-6 py-2.5 rounded-full hover:bg-primary-dark transition-colors shadow-soft"
        >
          Sign Up
        </Link>
      </div>
    </header>
  );
}

export function MobileNavigation() {
  return (
    <nav className="md:hidden flex items-center gap-4 px-4 py-3 border-b border-[#e5e7eb] dark:border-[#2a3441] bg-white dark:bg-[#1a2632]">
      <Link
        href="/products?category=buyers"
        className="text-[#111418] dark:text-gray-300 font-medium text-sm"
      >
        For Buyers
      </Link>
      <Link
        href="/products?seller=browse"
        className="text-[#111418] dark:text-gray-300 font-medium text-sm"
      >
        Browse Sellers
      </Link>
      <Link
        href="/products?category=sellers"
        className="text-[#111418] dark:text-gray-300 font-medium text-sm"
      >
        For Sellers
      </Link>
      <Link
        href="/enterprise"
        className="text-[#111418] dark:text-gray-300 font-medium text-sm"
      >
        Enterprise
      </Link>
    </nav>
  );
}
