'use client';

import { useState } from 'react';
import Link from 'next/link';

const personas = [
  { id: 'professional', name: 'Professional Assistant', icon: 'work', desc: 'Formal, efficient, business-focused' },
  { id: 'friendly', name: 'Friendly Helper', icon: 'sentiment_satisfied', desc: 'Warm, casual, approachable' },
  { id: 'expert', name: 'Domain Expert', icon: 'psychology', desc: 'Knowledgeable, detailed, technical' },
  { id: 'creative', name: 'Creative Consultant', icon: 'palette', desc: 'Innovative, inspiring, artistic' },
];

export default function AIAgentSetupPage() {
  const [selectedPersona, setSelectedPersona] = useState('professional');
  const [agentName, setAgentName] = useState('Shopping Assistant');
  const [tone, setTone] = useState(50);

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
      <header className="flex items-center justify-between whitespace-nowrap border-b border-gray-200 dark:border-gray-800 px-6 lg:px-10 py-3 bg-white dark:bg-[#101922] sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-4 text-[#111418] dark:text-white">
          <div className="size-6 text-primary">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fillRule="evenodd"></path>
            </svg>
          </div>
          <h2 className="text-lg font-bold">myzone</h2>
        </Link>
        <nav className="flex items-center gap-9">
          <Link href="/products" className="text-sm font-medium hover:text-primary">Marketplace</Link>
          <Link href="#" className="text-primary text-sm font-semibold border-b-2 border-primary">My Agent</Link>
          <Link href="#" className="text-sm font-medium hover:text-primary">Security</Link>
        </nav>
        <div className="flex gap-2">
          <button className="flex items-center justify-center rounded-lg h-10 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-3">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <div className="w-10 h-10 rounded-full bg-cover bg-center border-2 border-primary" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBilTLdxvEXGWmRtBuH8qRSmIZovO_ktPrGGMPOak5lxEbd747hEnsfwTstU04KpQG7V5hNstSPHOtyiSfTpqECjgqzqd8Q3h3ww0dH_hk9wGErAAS9PEFO6_AKxUYFz97WIP8XXHuEShLgIXkNw-f_MCnD0IMou-PcjHUFe1ZpDOjYHLmB51007PtU6hGU-ov4x9yJze657GHtkIWNV_GqzuHRjic68r4OyWFWwnbtrIPwOwYVlIRr0EBJ9KL6G8QaTiGXLiOh6OCt")' }}></div>
        </div>
      </header>

      <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-black mb-2">AI Agent Setup</h1>
          <p className="text-[#617589]">Customize your personal AI shopping assistant</p>
        </div>

        <div className="space-y-8">
          <div className="bg-white dark:bg-[#1a2632] rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold mb-6">Choose Your Agent Persona</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {personas.map((persona) => (
                <button
                  key={persona.id}
                  onClick={() => setSelectedPersona(persona.id)}
                  className={`flex items-start gap-4 p-4 rounded-xl border-2 transition-all text-left ${
                    selectedPersona === persona.id
                      ? 'border-primary bg-primary/5'
                      : 'border-gray-200 dark:border-gray-700 hover:border-primary/50'
                  }`}
                >
                  <span className={`material-symbols-outlined text-3xl ${
                    selectedPersona === persona.id ? 'text-primary' : 'text-gray-400'
                  }`}>{persona.icon}</span>
                  <div>
                    <p className="font-bold">{persona.name}</p>
                    <p className="text-sm text-[#617589]">{persona.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-[#1a2632] rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold mb-6">Agent Details</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Agent Name</label>
                <input
                  type="text"
                  value={agentName}
                  onChange={(e) => setAgentName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-4">Communication Tone</label>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-[#617589]">Professional</span>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={tone}
                    onChange={(e) => setTone(Number(e.target.value))}
                    className="flex-1"
                  />
                  <span className="text-sm text-[#617589]">Casual</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#1a2632] rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold mb-6">Agent Capabilities</h2>
            <div className="space-y-4">
              {[
                { name: 'Product Recommendations', enabled: true },
                { name: 'Price Tracking', enabled: true },
                { name: 'Order Updates', enabled: true },
                { name: 'Negotiation Assistant', enabled: false },
                { name: 'Market Analysis', enabled: false },
              ].map((feature) => (
                <label key={feature.name} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer">
                  <span className="font-medium">{feature.name}</span>
                  <div className={`w-12 h-6 rounded-full p-1 transition-colors ${
                    feature.enabled ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'
                  }`}>
                    <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                      feature.enabled ? 'translate-x-6' : ''
                    }`}></div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <button className="flex-1 py-3 border border-gray-200 dark:border-gray-700 rounded-lg font-bold hover:bg-gray-50 dark:hover:bg-gray-800">
              Reset to Default
            </button>
            <button className="flex-1 py-3 bg-primary text-white rounded-lg font-bold hover:bg-blue-600">
              Save Changes
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
