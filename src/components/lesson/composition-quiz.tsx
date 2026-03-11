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

const compositionQuiz: QuizData = {
  lessonSlug: "functional-components/composition",
  lessonTitle: "Composition Quiz",
  description: "Test your understanding of component composition",
  passPercentage: 60,
  lessonId: 4,
  contentSlug: "composition",
  questions: [
    {
      question: "What is component composition?",
      options: [
        "Using CSS to style components",
        "Building larger components from smaller ones",
        "Inheriting from other components",
        "Writing all code in one file"
      ],
      correct: 1
    },
    {
      question: "What does the children prop allow you to do?",
      options: [
        "Create child components automatically",
        "Pass data to child components",
        "Pass content/elements as props to a component",
        "Manage state in child components"
      ],
      correct: 2
    },
    {
      question: "What is the benefit of composition over inheritance?",
      options: [
        "It's faster",
        "It requires less code",
        "It's more flexible and easier to maintain",
        "It uses less memory"
      ],
      correct: 2
    },
    {
      question: "How should you approach building UIs in React?",
      options: [
        "Create one large component with all functionality",
        "Build many small, reusable components and compose them",
        "Use inheritance to extend components",
        "Avoid components and use functions instead"
      ],
      correct: 1
    },
    {
      question: "When would you use the children prop?",
      options: [
        "To pass data to child components",
        "To make components more flexible by accepting content as props",
        "To manage component state",
        "To style components"
      ],
      correct: 1
    }
  ]
};

export default function CompositionQuiz() {
  return <QuizTemplate data={compositionQuiz} />;
}
