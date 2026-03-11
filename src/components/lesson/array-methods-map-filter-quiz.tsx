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

const arrayMethodsMapFilterQuiz: QuizData = {
  lessonSlug: "javascript-basics-for-react/array-methods-map-filter",
  lessonTitle: "Array Methods Quiz",
  description: "Test your understanding of map() and filter() methods",
  passPercentage: 60,
  lessonId: 1,
  contentSlug: "array-methods-map-filter",
  questions: [
    {
      question: "What does the map() method do?",
      options: [
        "It modifies the original array",
        "It creates a new array by transforming each element using a function",
        "It searches for a specific element in the array",
        "It removes elements from the array"
      ],
      correct: 1
    },
    {
      question: "What will this code return? [1, 2, 3].map(n => n * 2)",
      options: [
        "[2, 4, 6]",
        "[1, 2, 3]",
        "6",
        "undefined"
      ],
      correct: 0
    },
    {
      question: "What does the filter() method do?",
      options: [
        "It transforms each element in an array",
        "It removes all elements from an array",
        "It creates a new array with only elements that pass a test",
        "It sorts the array"
      ],
      correct: 2
    },
    {
      question: "What will this return? [1, 2, 3, 4, 5].filter(n => n > 3)",
      options: [
        "[1, 2, 3]",
        "[4, 5]",
        "[3, 4, 5]",
        "3"
      ],
      correct: 1
    },
    {
      question: "Which is the correct way to render a list in React?",
      options: [
        "users.forEach(u => <div>{u.name}</div>)",
        "users.filter(u => <div>{u.name}</div>)",
        "users.map(u => <div key={u.id}>{u.name}</div>)",
        "users.reduce((a, u) => <div>{u.name}</div>)"
      ],
      correct: 2
    }
  ]
};

export default function ArrayMethodsMapFilterQuiz() {
  return <QuizTemplate data={arrayMethodsMapFilterQuiz} />;
}
