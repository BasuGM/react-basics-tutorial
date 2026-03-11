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

const typingPropsQuiz: QuizData = {
  lessonSlug: "typescript-basics/typing-props",
  lessonTitle: "Typing Props Quiz",
  description: "Test your understanding of typing React component props",
  passPercentage: 60,
  lessonId: 2,
  contentSlug: "typing-props",
  questions: [
    {
      question: "What is the primary purpose of typing props in React?",
      options: [
        "To make components render faster",
        "To provide type safety and catch errors at compile time",
        "To reduce the size of the component bundle",
        "To automatically generate documentation"
      ],
      correct: 1
    },
    {
      question: "How do you mark a prop as optional in TypeScript?",
      options: [
        "Using !",
        "Using &",
        "Using ?",
        "Using *"
      ],
      correct: 2
    },
    {
      question: "What is the best way to type a component prop that accepts a function?",
      options: [
        "onClick: Function",
        "onClick: any",
        "onClick: (id: number) => void",
        "onClick: function"
      ],
      correct: 2
    },
    {
      question: "Which is better for typing component props?",
      options: [
        "Only use 'type'",
        "Only use 'interface'",
        "Use 'interface' for object shapes (props), 'type' for unions",
        "It doesn't matter, they're identical"
      ],
      correct: 2
    },
    {
      question: "What does this syntax mean: user?: User?",
      options: [
        "The user prop is required",
        "The user prop is optional and can be undefined",
        "The user prop must be a union type",
        "The user prop is an array"
      ],
      correct: 1
    }
  ]
};

export default function TypingPropsQuiz() {
  return <QuizTemplate data={typingPropsQuiz} />;
}
