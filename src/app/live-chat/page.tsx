"use client";

import { useState } from "react";
import Link from "next/link";

interface Message {
  id: number;
  sender: "user" | "support";
  text: string;
  time: string;
}

const initialMessages: Message[] = [
  { id: 1, sender: "support", text: "Hello! Welcome to myzone support. How can I help you today?", time: "10:00 AM" },
  { id: 2, sender: "user", text: "Hi, I have a question about my recent order #ORD-2024-7829", time: "10:02 AM" },
  { id: 3, sender: "support", text: "Of course! I'd be happy to help with your order. What would you like to know?", time: "10:03 AM" },
];

const quickReplies = [
  "Track my order",
  "Return an item",
  "Change shipping address",
  "Payment issue",
];

export default function LiveChatPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (!newMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      sender: "user",
      text: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages([...messages, userMessage]);
    setNewMessage("");

    setTimeout(() => {
      const supportMessage: Message = {
        id: messages.length + 2,
        sender: "support",
        text: "Thank you for your message. Let me check that for you...",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, supportMessage]);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#f0f2f4] dark:border-gray-800 bg-white dark:bg-[#1a2632] px-4 lg:px-10 py-4 sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-3 text-[#111418] dark:text-white">
          <div className="size-8 text-primary">
            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fillRule="evenodd"></path>
            </svg>
          </div>
          <h2 className="text-xl font-black leading-tight tracking-tight">myzone</h2>
        </Link>
      </header>

      <div className="flex-1 flex">
        <div className="hidden md:flex w-80 flex-col border-r border-[#e5e7eb] dark:border-[#2a3441] bg-white dark:bg-[#101922]">
          <div className="p-4 border-b border-[#e5e7eb] dark:border-[#2a3441]">
            <h2 className="font-bold text-[#111418] dark:text-white">Support</h2>
            <p className="text-sm text-green-500 flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Online
            </p>
          </div>
          <div className="flex-1 p-4">
            <h3 className="text-sm font-medium text-[#617589] mb-3">Quick Actions</h3>
            <div className="space-y-2">
              {quickReplies.map((reply) => (
                <button
                  key={reply}
                  onClick={() => setNewMessage(reply)}
                  className="w-full text-left p-3 rounded-lg border border-[#e5e7eb] dark:border-[#2a3441] text-sm text-[#111418] dark:text-white hover:border-primary transition-colors"
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col bg-[#f8f9fa] dark:bg-[#0b1219]">
          <div className="flex-1 overflow-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                    message.sender === "user"
                      ? "bg-primary text-white"
                      : "bg-white dark:bg-[#1a2632] text-[#111418] dark:text-white border border-[#e5e7eb] dark:border-[#2a3441]"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className={`text-xs mt-1 ${message.sender === "user" ? "text-white/70" : "text-[#617589]"}`}>
                    {message.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-white dark:bg-[#1a2632] border-t border-[#e5e7eb] dark:border-[#2a3441]">
            <div className="flex gap-3">
              <button className="p-3 text-[#617589] hover:text-primary transition-colors">
                <span className="material-symbols-outlined">attach_file</span>
              </button>
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message..."
                className="flex-1 h-12 px-4 rounded-xl border border-[#e5e7eb] dark:border-[#3e4a5b] bg-[#f8f9fa] dark:bg-[#101922] text-[#111418] dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                onClick={handleSend}
                className="px-6 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-colors"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
