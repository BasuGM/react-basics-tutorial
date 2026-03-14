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

const folderStructureQuiz: QuizData = {
  lessonSlug: "component-reusability-structure/folder-structure",
  lessonTitle: "Folder Structure Quiz",
  description: "Test your understanding of organizing React projects",
  passPercentage: 60,
  lessonId: 12,
  contentSlug: "folder-structure",
  questions: [
    {
      question: "What is a key benefit of organizing by feature?",
      options: [
        "It makes the project structure more complex",
        "It groups all related code together, making it easy to find and maintain",
        "It requires less folder nesting",
        "It eliminates the need for shared code"
      ],
      correct: 1
    },
    {
      question: "Which structure works better for larger projects?",
      options: [
        "Organizing everything by type (components, utils, etc.)",
        "Organizing by feature or domain",
        "Mixing features and types randomly",
        "All structures are equally good for large projects"
      ],
      correct: 1
    },
    {
      question: "What is the purpose of an index.ts file in a component folder?",
      options: [
        "It stores CSS for the component",
        "It creates a single export point for cleaner imports",
        "It's required for the component to work",
        "It has no practical purpose"
      ],
      correct: 1
    },
    {
      question: "What naming convention is recommended for folder names?",
      options: [
        "UPPERCASE_WITH_UNDERSCORES",
        "camelCase",
        "kebab-case for features, PascalCase for components",
        "whatever you prefer"
      ],
      correct: 2
    },
    {
      question: "How deep should your folder structure be?",
      options: [
        "As deep as needed, no limit",
        "Maximum 3-4 levels deep to keep it relatively flat",
        "Only 1 level deep",
        "Depth doesn't matter"
      ],
      correct: 1
    }
  ]
};

export default function FolderStructureQuiz() {
  return <QuizTemplate data={folderStructureQuiz} />;
}
