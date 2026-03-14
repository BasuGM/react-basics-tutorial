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

const conditionalRenderingPatternsQuiz: QuizData = {
  lessonSlug: "conditional-dynamic-ui/conditional-rendering-patterns",
  lessonTitle: "Conditional Rendering Patterns Quiz",
  description: "Test your understanding of conditional rendering in React",
  passPercentage: 60,
  lessonId: 9,
  contentSlug: "conditional-rendering-patterns",
  questions: [
    {
      question: "What is the most common way to conditionally render inline in JSX?",
      options: [
        "if/else statements",
        "Ternary operator",
        "Switch statements",
        "Logical AND operator"
      ],
      correct: 1
    },
    {
      question: "Which operator should you use to render something only if a condition is true?",
      options: [
        "||",
        "?:",
        "&&",
        "if"
      ],
      correct: 2
    },
    {
      question: "What will this code render? {count && <p>You have {count} items</p>}",
      options: [
        "Always renders the paragraph",
        "Renders nothing if count is 0",
        "Renders '0' if count is 0, which is problematic",
        "Throws an error"
      ],
      correct: 2
    },
    {
      question: "When should you use a dedicated component for conditional rendering?",
      options: [
        "Never, inline JSX is always better",
        "When the conditional logic is simple",
        "When the pattern is reused or the logic is complex",
        "Only for development purposes"
      ],
      correct: 2
    },
    {
      question: "What is the main advantage of using if/else statements outside JSX?",
      options: [
        "They run faster",
        "They allow for complex logic without cluttering JSX",
        "They prevent re-renders",
        "They improve type safety"
      ],
      correct: 1
    }
  ]
};

export default function ConditionalRenderingPatternsQuiz() {
  return <QuizTemplate data={conditionalRenderingPatternsQuiz} />;
}
