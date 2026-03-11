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

const propsQuiz: QuizData = {
  lessonSlug: "functional-components/props",
  lessonTitle: "Props Quiz",
  description: "Test your understanding of React props",
  passPercentage: 60,
  lessonId: 4,
  contentSlug: "props",
  questions: [
    {
      question: "What are props used for?",
      options: [
        "To store data that changes over time",
        "To pass data from parent to child components",
        "To create global variables",
        "To style components"
      ],
      correct: 1
    },
    {
      question: "Are props read-only?",
      options: [
        "No, you can modify props freely",
        "Yes, props cannot be modified by child components",
        "Only if they are functions",
        "Only if they are objects"
      ],
      correct: 1
    },
    {
      question: "How do you access props in a functional component?",
      options: [
        "Using this.props",
        "Using global variables",
        "As function parameters",
        "Using the useState hook"
      ],
      correct: 2
    },
    {
      question: "What should you do if you need to change a prop's value?",
      options: [
        "Modify the prop directly",
        "Use state in the parent component",
        "Use state in the child component",
        "Use a global variable"
      ],
      correct: 2
    },
    {
      question: "Can props be functions?",
      options: [
        "No, props can only be strings or numbers",
        "Yes, props can be any JavaScript type, including functions",
        "Only if they are arrow functions",
        "Only in class components"
      ],
      correct: 1
    }
  ]
};

export default function PropsQuiz() {
  return <QuizTemplate data={propsQuiz} />;
}
