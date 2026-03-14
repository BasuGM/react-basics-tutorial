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

const reusableComponentsQuiz: QuizData = {
  lessonSlug: "component-reusability-structure/reusable-components",
  lessonTitle: "Reusable Components Quiz",
  description: "Test your understanding of designing reusable React components",
  passPercentage: 60,
  lessonId: 12,
  contentSlug: "reusable-components",
  questions: [
    {
      question: "What is the main benefit of creating reusable components?",
      options: [
        "They make your code slower",
        "They reduce code duplication and help with maintenance",
        "They are required by React",
        "They automatically handle state management"
      ],
      correct: 1
    },
    {
      question: "How do you make a component reusable?",
      options: [
        "Hardcode all values into the component",
        "Extract configurable values into props",
        "Use global variables everywhere",
        "Create a separate component for each use case"
      ],
      correct: 1
    },
    {
      question: "What is the purpose of the 'children' prop?",
      options: [
        "To declare the component's children in TypeScript",
        "To allow flexible content composition",
        "To replace all other props",
        "To automatically style child elements"
      ],
      correct: 1
    },
    {
      question: "Which approach is more reusable?",
      options: [
        "A component with hardcoded values",
        "A component that accepts all values as props",
        "A component that uses only global state",
        "A component with no props at all"
      ],
      correct: 1
    },
    {
      question: "What is a best practice when defining props for reusable components?",
      options: [
        "Use any type for all props",
        "Provide documentation through TypeScript interfaces",
        "Accept as few props as possible",
        "Make props optional without default values"
      ],
      correct: 1
    }
  ]
};

export default function ReusableComponentsQuiz() {
  return <QuizTemplate data={reusableComponentsQuiz} />;
}
