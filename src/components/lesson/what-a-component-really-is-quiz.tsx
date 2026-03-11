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

const whatAComponentReallyIsQuiz: QuizData = {
  lessonSlug: "functional-components/what-a-component-really-is",
  lessonTitle: "What a Component Really Is Quiz",
  description: "Test your understanding of React components",
  passPercentage: 60,
  lessonId: 4,
  contentSlug: "what-a-component-really-is",
  questions: [
    {
      question: "At its core, a React component is:",
      options: [
        "A class that extends React.Component",
        "A JavaScript function that returns JSX",
        "An HTML element",
        "A CSS template"
      ],
      correct: 1
    },
    {
      question: "What are inputs to a component called?",
      options: [
        "State",
        "Props",
        "Methods",
        "Handlers"
      ],
      correct: 1
    },
    {
      question: "How is data passed from a parent component to a child component?",
      options: [
        "Through global variables",
        "Through state management only",
        "Through props",
        "Through direct mutation"
      ],
      correct: 2
    },
    {
      question: "What is component composition?",
      options: [
        "Writing CSS for components",
        "Building complex UIs from smaller, reusable components",
        "Managing component state",
        "Testing components"
      ],
      correct: 1
    },
    {
      question: "What must a component always return?",
      options: [
        "A string",
        "An object",
        "Valid JSX",
        "Nothing"
      ],
      correct: 2
    }
  ]
};

export default function WhatAComponentReallyIsQuiz() {
  return <QuizTemplate data={whatAComponentReallyIsQuiz} />;
}
