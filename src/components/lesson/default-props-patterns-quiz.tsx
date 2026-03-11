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

const defaultPropsPatterns: QuizData = {
  lessonSlug: "functional-components/default-props-patterns",
  lessonTitle: "Default Props & Patterns Quiz",
  description: "Test your understanding of default props patterns",
  passPercentage: 60,
  lessonId: 4,
  contentSlug: "default-props-patterns",
  questions: [
    {
      question: "What is the purpose of default props?",
      options: [
        "To make components run faster",
        "To provide fallback values when props aren't provided",
        "To replace the need for state",
        "To share data between components"
      ],
      correct: 1
    },
    {
      question: "How do you provide a default value for a prop in a functional component?",
      options: [
        "Using the `defaultProps` object",
        "Using JavaScript default parameters in the function signature",
        "Using the `useState` hook",
        "Using environment variables"
      ],
      correct: 1
    },
    {
      question: "When should you use default props?",
      options: [
        "Always, for every prop",
        "Never, props should always be required",
        "For optional props that have sensible defaults",
        "Only for state management"
      ],
      correct: 2
    },
    {
      question: "What happens if you don't provide a prop that has a default?",
      options: [
        "An error is thrown",
        "The component doesn't render",
        "The default value is used",
        "The prop becomes undefined permanently"
      ],
      correct: 2
    },
    {
      question: "Which is a good example of a sensible default prop?",
      options: [
        "variant = 'primary' for a Button component",
        "Complex nested object structures",
        "API endpoints",
        "File paths"
      ],
      correct: 0
    }
  ]
};

export default function DefaultPropsPatternQuiz() {
  return <QuizTemplate data={defaultPropsPatterns} />;
}
