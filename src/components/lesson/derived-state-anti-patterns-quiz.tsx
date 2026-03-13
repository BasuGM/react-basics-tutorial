'use client'

import QuizTemplate from "../common/QuizTemplate";

interface Question {
  question: string;
  options: string[];
  correct: number;
}

interface QuizData {
  lessonSlug: string;
  lessonTitle: string;
  description: string;
  passPercentage?: number;
  questions: Question[];
  lessonId: number;
  contentSlug: string;
}

const derivedStateAntiPatternsQuiz: QuizData = {
  lessonSlug: "props-state-derived/derived-state-anti-patterns",
  lessonTitle: "Derived State Anti-Patterns Quiz",
  description: "Test your understanding of derived state anti-patterns",
  passPercentage: 60,
  lessonId: 8,
  contentSlug: "derived-state-anti-patterns",
  questions: [
    {
      question: "What is a derived state anti-pattern?",
      options: [
        "Using state for values that can be computed",
        "Using props instead of state",
        "Using hooks in class components",
        "Using too many state variables"
      ],
      correct: 0
    },
    {
      question: "What's the problem with copying props to state?",
      options: [
        "It uses more memory",
        "It can get out of sync if props change",
        "It makes the code slower",
        "There's no problem with it"
      ],
      correct: 1
    },
    {
      question: "What should you do with computed values like totals?",
      options: [
        "Store them in state and update with useEffect",
        "Calculate them directly on each render",
        "Store them in a global variable",
        "Compute them in useEffect and cache the result"
      ],
      correct: 1
    },
    {
      question: "When is it acceptable to store a snapshot of props in state?",
      options: [
        "Always - it's a best practice",
        "Never - always use props directly",
        "When you intentionally want local edits disconnected from the parent",
        "Only in class components"
      ],
      correct: 2
    },
    {
      question: "What's the principle you should follow for data?",
      options: [
        "Store everything in state",
        "Store everything in props",
        "Have a single source of truth for each piece of data",
        "Duplicate data across multiple places"
      ],
      correct: 2
    }
  ]
};

export default function DerivedStateAntiPatternsQuiz() {
  return <QuizTemplate data={derivedStateAntiPatternsQuiz} />;
}
