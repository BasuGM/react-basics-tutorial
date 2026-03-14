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

const whenToSplitComponentsQuiz: QuizData = {
  lessonSlug: "component-reusability-structure/when-to-split-components",
  lessonTitle: "When to Split Components Quiz",
  description: "Test your understanding of when to break down React components",
  passPercentage: 60,
  lessonId: 12,
  contentSlug: "when-to-split-components",
  questions: [
    {
      question: "What is a sign that your component might be too large?",
      options: [
        "It has a clear single responsibility",
        "It's more than 300-400 lines long",
        "It uses TypeScript",
        "It has only one useState hook"
      ],
      correct: 1
    },
    {
      question: "Why should you split a large component?",
      options: [
        "To make it run faster",
        "Because React requires small components",
        "To improve readability, reusability, testability, and maintainability",
        "To reduce the number of imports"
      ],
      correct: 2
    },
    {
      question: "Which of these is a good indication to extract a component?",
      options: [
        "A function that's used once",
        "A logical section handling a distinct responsibility",
        "Any block of code that's more than 5 lines",
        "Every prop that gets passed down"
      ],
      correct: 1
    },
    {
      question: "What is a risk of splitting when you have many props?",
      options: [
        "Components become too small",
        "Prop drilling - too many props passed between components",
        "The component becomes unreadable",
        "State management becomes impossible"
      ],
      correct: 1
    },
    {
      question: "When should you NOT split a component?",
      options: [
        "When it has more than 200 lines",
        "When it's a small component used only once",
        "When it handles multiple features",
        "When it uses multiple hooks"
      ],
      correct: 1
    }
  ]
};

export default function WhenToSplitComponentsQuiz() {
  return <QuizTemplate data={whenToSplitComponentsQuiz} />;
}
