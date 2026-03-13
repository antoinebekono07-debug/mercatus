'use client';

import Link from 'next/link';

export default function MessagesPage() {
  const conversations = [
    { id: 1, name: 'TechHaven Official', message: 'Your order has been shipped!', time: '2 min ago', unread: true, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXxWwmLqBodmcumNMDvRhGCL88YOGOMTgXAfJA75wicZyawGgtu617u7qud4En-BXYN8xER8-c7FvQ0ygj1ie_UIUGPH08cSRaFya8vwWRTqRnClWIaR82' },
    { id: 2, name: 'Sarah Chen', message: 'Thanks for your inquiry about the consultation', time: '1 hour ago', unread: true, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbuKViPJNxTa8a-xKdeDP1V2WTrQ8m5idNGMW6drpOg5jc5BbO_7W37b0Kblf5rGAS2o_lvTDxzyyRYgD0pMWtRKB94cog9h5zcHr4eVRwaVwWHgFvslxKqg' },
    { id: 3, name: 'GlobalShip Logistics', message: 'Your package is out for delivery', time: '3 hours ago', unread: false, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpYAae9WGZ6BD3du--IAJSHZsbL-OYdu0qIFhaHuEjVh2HgSc94qIHJlPsVjEpN8fxfXkmmcU9WRcrfNbc_UeT35bePpKeKQu3JjdZXTTXD0m_Sm4N_9SXRNhWeUH00MzzN76qBptMR8ukeG8iTV' },
  ];

  return (
    <div className="flex h-screen bg-background-light dark:bg-background-dark">
      <div className="flex-1 flex flex-col">
        <header className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1a2632] px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="size-8 text-primary">
              <svg className="w-full h-full" fill="currentColor" viewBox="0 0 48 48">
                <path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fillRule="evenodd"></path>
              </svg>
            </div>
            <span className="text-xl font-bold">myzone</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/cart" className="relative text-[#617589] hover:text-primary">
              <span className="material-symbols-outlined">shopping_cart</span>
            </Link>
            <div className="w-10 h-10 rounded-full bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD9Rxhck3AOy2Us5IBCGOQKcIcET1nVRyYZkWiFpjaq0XP9uTJwlGByS2KD514rl1b5zTW4PjCuGBxN8LsQmYVjI1TRYtROWS0lAu9ActaQ7WF3vZ7w9CqdeQqj6XlMf0nrtbIxQqFjWCa8V6N3g0k3d7o_2AHiDu8xwgoCkcL6RVTrcUf8nMyTiGFIUE_IHdjpT50lU8PNXgj1obwke62WnSO49qBC5iyoyTIq2cyL3Lu3XDXMAm-RZLytWPdu4CQX41BtltqiqihP")' }}></div>
          </div>
        </header>

        <div className="flex-1 flex overflow-hidden">
          <div className="w-80 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1a2632] flex flex-col">
            <div className="p-4 border-b border-gray-200 dark:border-gray-800">
              <h1 className="text-xl font-bold">Messages</h1>
            </div>
            <div className="flex-1 overflow-y-auto">
              {conversations.map((conv) => (
                <div key={conv.id} className={`p-4 border-b border-gray-100 dark:border-gray-700 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 ${conv.unread ? 'bg-primary/5' : ''}`}>
                  <div className="flex gap-3">
                    <div className="w-12 h-12 rounded-full bg-cover flex-shrink-0" style={{ backgroundImage: `url("${conv.avatar}")` }}></div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <p className={`font-medium ${conv.unread ? 'font-bold' : ''}`}>{conv.name}</p>
                        <span className="text-xs text-[#617589]">{conv.time}</span>
                      </div>
                      <p className={`text-sm truncate ${conv.unread ? 'font-medium' : 'text-[#617589]'}`}>{conv.message}</p>
                    </div>
                    {conv.unread && <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 flex flex-col bg-white dark:bg-[#1a2632]">
            <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDXxWwmLqBodmcumNMDvRhGCL88YOGOMTgXAfJA75wicZyawGgtu617u7qud4En-BXYN8xER8-c7FvQ0ygj1ie_UIUGPH08cSRaFya8vwWRTqRnClWIaR82")' }}></div>
              <div>
                <p className="font-bold">TechHaven Official</p>
                <p className="text-xs text-green-500">Online</p>
              </div>
            </div>
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              <div className="flex justify-end">
                <div className="bg-primary text-white rounded-2xl px-4 py-2 max-w-md">
                  <p>Hi! I wanted to let you know that your order has been shipped.</p>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl px-4 py-2 max-w-md">
                  <p>Thanks! When will it arrive?</p>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-primary text-white rounded-2xl px-4 py-2 max-w-md">
                  <p>Based on your location, it should arrive within 2-3 business days via Express shipping.</p>
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-gray-200 dark:border-gray-800">
              <div className="flex gap-2">
                <input type="text" placeholder="Type a message..." className="flex-1 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800" />
                <button className="p-2 bg-primary text-white rounded-full">
                  <span className="material-symbols-outlined">send</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
