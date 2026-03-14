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

const handlingMultipleInputsQuiz: QuizData = {
  lessonSlug: "forms-basics/handling-multiple-inputs",
  lessonTitle: "Handling Multiple Inputs Quiz",
  description: "Test your understanding of managing multiple form fields",
  passPercentage: 60,
  lessonId: 10,
  contentSlug: "handling-multiple-inputs",
  questions: [
    {
      question: "What is the advantage of using object state for forms?",
      options: [
        "It reduces the number of state variables",
        "It eliminates the need for onChange handlers",
        "It automatically validates the form",
        "It prevents re-rendering"
      ],
      correct: 0
    },
    {
      question: "When should you use individual state for form inputs?",
      options: [
        "Always, for consistency",
        "For forms with a few fields only",
        "Never, always use object state",
        "Only for file inputs"
      ],
      correct: 1
    },
    {
      question: "What property on an input allows a single change handler to identify which field changed?",
      options: [
        "id",
        "value",
        "name",
        "onChange"
      ],
      correct: 2
    },
    {
      question: "When is useReducer useful for form handling?",
      options: [
        "Never, useState is always better",
        "For simple forms with few fields",
        "For complex forms with validation or conditional logic",
        "Only when using TypeScript"
      ],
      correct: 2
    },
    {
      question: "How should you update nested form state immutably?",
      options: [
        "Directly modify the state object",
        "Use Object.assign()",
        "Use the spread operator (...)",
        "Both b and c are correct"
      ],
      correct: 3
    }
  ]
};

export default function HandlingMultipleInputsQuiz() {
  return <QuizTemplate data={handlingMultipleInputsQuiz} />;
}
