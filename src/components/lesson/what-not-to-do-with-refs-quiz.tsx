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

const whatNotToDoWithRefsQuiz: QuizData = {
  lessonSlug: "refs-dom-access/what-not-to-do-with-refs",
  lessonTitle: "What NOT to Do With Refs Quiz",
  description: "Test your understanding of ref anti-patterns and best practices",
  passPercentage: 60,
  lessonId: 11,
  contentSlug: "what-not-to-do-with-refs",
  questions: [
    {
      question: "Should you use a ref to store data that changes the UI?",
      options: [
        "Yes, refs are ideal for UI data",
        "No, use state instead",
        "Only for small UI changes",
        "Refs and state are the same"
      ],
      correct: 1
    },
    {
      question: "What happens if you try to use a ref's value in the render method?",
      options: [
        "It works fine",
        "The ref is null during render time",
        "It causes an infinite loop",
        "It automatically sets the state"
      ],
      correct: 1
    },
    {
      question: "How can you safely pass a ref to a custom component?",
      options: [
        "Pass it as a regular prop named 'ref'",
        "Use forwardRef to wrap the component",
        "Store it in a context",
        "You cannot pass refs to components"
      ],
      correct: 1
    },
    {
      question: "What is the main problem with using refs to control visibility of modals?",
      options: [
        "It's too fast",
        "It breaks React's declarative model and needs manual DOM manipulation",
        "Modals can't use refs",
        "It uses too much memory"
      ],
      correct: 1
    },
    {
      question: "Which statement is true about using refs?",
      options: [
        "Most React apps should use many refs",
        "Refs should be your first choice for state management",
        "You should rarely need refs - use state instead",
        "Refs are better than state in all situations"
      ],
      correct: 2
    }
  ]
};

export default function WhatNotToDoWithRefsQuiz() {
  return <QuizTemplate data={whatNotToDoWithRefsQuiz} />;
}
