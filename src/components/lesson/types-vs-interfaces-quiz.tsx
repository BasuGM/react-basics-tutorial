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

const typesVsInterfacesQuiz: QuizData = {
  lessonSlug: "typescript-basics/types-vs-interfaces",
  lessonTitle: "Types vs Interfaces Quiz",
  description: "Test your understanding of TypeScript types and interfaces",
  passPercentage: 60,
  lessonId: 2,
  contentSlug: "types-vs-interfaces",
  questions: [
    {
      question: "What is the primary purpose of using 'interface' in TypeScript?",
      options: [
        "To create primitive type aliases",
        "To define contracts for object shapes",
        "To replace JavaScript classes",
        "To create union types"
      ],
      correct: 1
    },
    {
      question: "Which of the following can you do with 'type' but not 'interface'?",
      options: [
        "Extend another type/interface",
        "Define object shapes",
        "Create union types",
        "Declare methods"
      ],
      correct: 2
    },
    {
      question: "When extending an interface, which keyword do you use?",
      options: [
        "extends",
        "implements",
        "&",
        "merge"
      ],
      correct: 0
    },
    {
      question: "How do you combine multiple types together?",
      options: [
        "Using 'extends'",
        "Using the '&' (intersection) operator",
        "Using 'merge'",
        "You cannot combine types"
      ],
      correct: 1
    },
    {
      question: "What is declaration merging in TypeScript?",
      options: [
        "Combining two variables into one",
        "Combining multiple interface definitions with the same name into one",
        "Creating a new type from existing types",
        "Merging objects at runtime"
      ],
      correct: 1
    }
  ]
};

export default function TypesVsInterfacesQuiz() {
  return <QuizTemplate data={typesVsInterfacesQuiz} />;
}
