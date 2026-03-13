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

const whenNotToUseStateQuiz: QuizData = {
  lessonSlug: "props-state-derived/when-not-to-use-state",
  lessonTitle: "When NOT to Use State Quiz",
  description: "Test your understanding of when state should be avoided",
  passPercentage: 60,
  lessonId: 8,
  contentSlug: "when-not-to-use-state",
  questions: [
    {
      question: "Should you store computed values in state?",
      options: [
        "Yes, always",
        "No, calculate them directly on each render",
        "Only if the computation is expensive",
        "Only if you're using class components"
      ],
      correct: 1
    },
    {
      question: "What should you do if a value comes from props and doesn't change locally?",
      options: [
        "Copy it to state",
        "Use it directly from props",
        "Store it in a global variable",
        "Convert it to a computed value"
      ],
      correct: 1
    },
    {
      question: "When should you use useRef instead of useState?",
      options: [
        "Never",
        "When you need to display the value",
        "When you need to store a value that doesn't trigger re-renders",
        "When you're in a class component"
      ],
      correct: 2
    },
    {
      question: "Is it a bad practice to duplicate prop values in state?",
      options: [
        "No, it's always fine",
        "Yes, unless you need local modifications",
        "It depends on the component size",
        "No, it's a recommended pattern"
      ],
      correct: 1
    },
    {
      question: "What's the best way to handle interval IDs in React?",
      options: [
        "Store them in state",
        "Store them in a global variable",
        "Use useRef to store them",
        "Don't store them at all"
      ],
      correct: 2
    }
  ]
};

export default function WhenNotToUseStateQuiz() {
  return <QuizTemplate data={whenNotToUseStateQuiz} />;
}
