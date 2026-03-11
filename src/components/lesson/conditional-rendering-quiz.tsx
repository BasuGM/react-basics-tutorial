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

const conditionalRenderingQuiz: QuizData = {
  lessonSlug: "jsx-rendering/conditional-rendering",
  lessonTitle: "Conditional Rendering Quiz",
  description: "Test your understanding of conditional rendering in React",
  passPercentage: 60,
  lessonId: 3,
  contentSlug: "conditional-rendering",
  questions: [
    {
      question: "When should you use the ternary operator for conditional rendering?",
      options: [
        "When you have three or more conditions",
        "When you want to show/hide a single element",
        "For simple if-else logic with two options",
        "Only in complex components"
      ],
      correct: 2
    },
    {
      question: "What does the && operator do in conditional rendering?",
      options: [
        "It renders both sides of the condition",
        "It shows an error if the condition is false",
        "It renders the element only if the condition is true",
        "It combines multiple components"
      ],
      correct: 2
    },
    {
      question: "Which is the correct way to conditionally render a component?",
      options: [
        "<div>{if (isOpen) <Modal />}</div>",
        "<div>{isOpen && <Modal />}</div>",
        "<div>{isOpen ? <Modal /> : null}</div>",
        "Both B and C are correct"
      ],
      correct: 3
    },
    {
      question: "When should you move conditional logic outside of JSX?",
      options: [
        "Always; JSX should be simple",
        "Never; all logic should be in JSX",
        "When the logic is complex or repeated",
        "Only for performance reasons"
      ],
      correct: 2
    },
    {
      question: "What's a problem with nested ternary operators?",
      options: [
        "They don't work in React",
        "They reduce code readability",
        "They cause performance issues",
        "None; they're always the best choice"
      ],
      correct: 1
    }
  ]
};

export default function ConditionalRenderingQuiz() {
  return <QuizTemplate data={conditionalRenderingQuiz} />;
}
