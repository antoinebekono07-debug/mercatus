'use client';

import { useState } from 'react';
import Link from 'next/link';

const questions = [
  {
    id: 1,
    question: "What are you looking for?",
    type: "single",
    options: [
      { icon: "headphones", label: "Audio & Headphones" },
      { icon: "watch", label: "Wearables & Smartwatches" },
      { icon: "laptop", label: "Computers & Laptops" },
      { icon: "phone_iphone", label: "Phones & Tablets" },
      { icon: "home", label: "Smart Home Devices" },
      { icon: "fitness_center", label: "Fitness & Health" },
    ]
  },
  {
    id: 2,
    question: "What's your budget range?",
    type: "range",
    min: 0,
    max: 2000,
    labels: ["Budget", "Premium"]
  },
  {
    id: 3,
    question: "Which features matter most to you?",
    type: "multi",
    options: [
      { icon: "bolt", label: "Fast Performance" },
      { icon: "battery_charging_full", label: "Long Battery Life" },
      { icon: "camera", label: "Camera Quality" },
      { icon: "water_drop", label: "Water Resistance" },
      { icon: "wifi", label: "Connectivity" },
      { icon: "design_services", label: "Design & Aesthetics" },
    ]
  },
  {
    id: 4,
    question: "How will you primarily use this product?",
    type: "single",
    options: [
      { icon: "work", label: "Work & Productivity" },
      { icon: "sports_esports", label: "Gaming" },
      { icon: "music_note", label: "Entertainment" },
      { icon: "fitness_center", label: "Fitness Tracking" },
      { icon: "school", label: "Education" },
      { icon: "travel_explore", label: "Travel" },
    ]
  },
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [budget, setBudget] = useState(500);

  const handleAnswer = (questionId: number, answer: any) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-[#f0f2f4] dark:border-gray-800 bg-white dark:bg-[#101922] px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="size-8 text-primary">
            <svg className="w-full h-full" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fillRule="evenodd"></path>
            </svg>
          </div>
          <h2 className="text-xl font-bold">myzone</h2>
        </Link>
        <Link href="/products" className="text-sm font-medium text-[#617589] hover:text-primary">
          Skip Quiz
        </Link>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center py-12 px-4">
        <div className="w-full max-w-2xl">
          <div className="mb-8">
            <div className="flex justify-between text-sm text-[#617589] mb-2">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span>{Math.round(progress)}% complete</span>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-primary transition-all duration-300" style={{ width: `${progress}%` }}></div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#1a2632] rounded-2xl p-8 shadow-card">
            <h1 className="text-2xl font-bold text-[#111418] dark:text-white mb-8 text-center">
              {questions[currentQuestion].question}
            </h1>

            {questions[currentQuestion].type === 'single' && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {questions[currentQuestion].options?.map((option: any, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(questions[currentQuestion].id, option.label)}
                    className={`flex flex-col items-center gap-3 p-4 rounded-xl border-2 transition-all ${
                      answers[questions[currentQuestion].id] === option.label
                        ? 'border-primary bg-primary/5'
                        : 'border-gray-200 dark:border-gray-700 hover:border-primary/50'
                    }`}
                  >
                    <span className="material-symbols-outlined text-3xl text-primary">{option.icon}</span>
                    <span className="text-sm font-medium text-center">{option.label}</span>
                  </button>
                ))}
              </div>
            )}

            {questions[currentQuestion].type === 'multi' && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {questions[currentQuestion].options?.map((option: any, idx: number) => {
                  const selected = (answers[questions[currentQuestion].id] || []).includes(option.label);
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        const current = answers[questions[currentQuestion].id] || [];
                        const updated = selected
                          ? current.filter((v: string) => v !== option.label)
                          : [...current, option.label];
                        handleAnswer(questions[currentQuestion].id, updated);
                      }}
                      className={`flex flex-col items-center gap-3 p-4 rounded-xl border-2 transition-all ${
                        selected
                          ? 'border-primary bg-primary/5'
                          : 'border-gray-200 dark:border-gray-700 hover:border-primary/50'
                      }`}
                    >
                      <span className="material-symbols-outlined text-3xl text-primary">{option.icon}</span>
                      <span className="text-sm font-medium text-center">{option.label}</span>
                    </button>
                  );
                })}
              </div>
            )}

            {questions[currentQuestion].type === 'range' && (
              <div className="px-4">
                <div className="text-center mb-8">
                  <span className="text-4xl font-black text-primary">${budget}</span>
                </div>
                <input
                  type="range"
                  min={questions[currentQuestion].min}
                  max={questions[currentQuestion].max}
                  value={budget}
                  onChange={(e) => {
                    setBudget(Number(e.target.value));
                    handleAnswer(questions[currentQuestion].id, Number(e.target.value));
                  }}
                  className="w-full"
                />
                <div className="flex justify-between mt-2 text-sm text-[#617589]">
                  <span>${questions[currentQuestion].min}</span>
                  <span>${questions[currentQuestion].max}+</span>
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-between mt-8">
            <button
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium ${
                currentQuestion === 0
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-[#111418] dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <span className="material-symbols-outlined">arrow_back</span>
              Back
            </button>
            <button
              onClick={nextQuestion}
              disabled={currentQuestion === questions.length - 1}
              className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
            >
              Next
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
