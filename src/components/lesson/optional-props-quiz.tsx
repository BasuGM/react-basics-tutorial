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

const optionalPropsQuiz: QuizData = {
  lessonSlug: "typescript-basics/optional-props",
  lessonTitle: "Optional Props Quiz",
  description: "Test your understanding of optional React component props",
  passPercentage: 60,
  lessonId: 2,
  contentSlug: "optional-props",
  questions: [
    {
      question: "How do you mark a prop as optional in TypeScript?",
      options: [
        "Use the ! operator",
        "Use the ? operator",
        "Use the & operator",
        "Use the * operator"
      ],
      correct: 1
    },
    {
      question: "What happens if you don't provide an optional prop?",
      options: [
        "The component throws an error",
        "The prop becomes null by default",
        "The prop is undefined unless you provide a default value",
        "The component won't render"
      ],
      correct: 2
    },
    {
      question: "How do you provide a default value for an optional prop?",
      options: [
        "In the interface definition",
        "Using destructuring assignment with = in the function parameters",
        "Using the ?? operator in the function body",
        "Both B and C work"
      ],
      correct: 3
    },
    {
      question: "Which pattern safely handles an optional prop before using it?",
      options: [
        "Just use it directly: {optionalProp.method()}",
        "Check if it exists: {optionalProp && <Component prop={optionalProp} />}",
        "Use optional chaining: {optionalProp?.method()}",
        "Both B and C"
      ],
      correct: 3
    },
    {
      question: "When should you make a prop optional?",
      options: [
        "Always make all props optional",
        "Never make props optional",
        "When the prop has a sensible default or isn't always needed",
        "When the prop is unlikely to be used"
      ],
      correct: 2
    }
  ]
};

export default function OptionalPropsQuiz() {
  return <QuizTemplate data={optionalPropsQuiz} />;
}
