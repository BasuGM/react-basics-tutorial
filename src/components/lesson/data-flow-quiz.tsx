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

const dataFlowQuiz: QuizData = {
  lessonSlug: "props-state-derived/data-flow",
  lessonTitle: "Data Flow Quiz",
  description: "Test your understanding of React data flow",
  passPercentage: 60,
  lessonId: 8,
  contentSlug: "data-flow",
  questions: [
    {
      question: "In React, what direction does data flow?",
      options: [
        "Bidirectional - both parent and child can pass data",
        "Unidirectional - from parent to child",
        "Unidirectional - from child to parent",
        "No specific direction"
      ],
      correct: 1
    },
    {
      question: "What is the primary characteristic of props?",
      options: [
        "Props can be modified by the child component",
        "Props are read-only and passed from parent to child",
        "Props are stored in the component's state",
        "Props are only used in class components"
      ],
      correct: 1
    },
    {
      question: "How does a child component send data back to its parent?",
      options: [
        "By directly modifying the parent's state",
        "By using callback functions passed as props",
        "By using the context API",
        "Child components cannot send data to parents"
      ],
      correct: 1
    },
    {
      question: "Who 'owns' the state in a React component?",
      options: [
        "The parent component always owns all state",
        "The component itself owns its own state",
        "The child component owns the state",
        "State is always global"
      ],
      correct: 1
    },
    {
      question: "When a prop changes in React, what happens?",
      options: [
        "Nothing happens",
        "The component is re-rendered with the new prop value",
        "Only the parent component is re-rendered",
        "An error is thrown"
      ],
      correct: 1
    }
  ]
};

export default function DataFlowQuiz() {
  return <QuizTemplate data={dataFlowQuiz} />;
}
