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

const spreadOperatorQuiz: QuizData = {
  lessonSlug: "javascript-basics-for-react/spread-operator",
  lessonTitle: "Spread Operator Quiz",
  description: "Test your understanding of JavaScript spread operator",
  passPercentage: 60,
  lessonId: 1,
  contentSlug: "spread-operator",
  questions: [
    {
      question: "What does the spread operator (...) do with arrays?",
      options: [
        "It combines two arrays into a single nested array",
        "It expands an array into individual elements",
        "It removes the first and last elements",
        "It converts an array into an object"
      ],
      correct: 1
    },
    {
      question: "How do you copy an array using the spread operator?",
      options: [
        "const copy = array;",
        "const copy = [...array];",
        "const copy = array.copy();",
        "const copy = new Array(array);"
      ],
      correct: 1
    },
    {
      question: "What happens when you merge objects with spread? const merged = { ...obj1, ...obj2 }",
      options: [
        "Properties from obj2 override properties from obj1",
        "Properties from obj1 override properties from obj2",
        "Both objects are nested inside merged",
        "The merge fails - you cannot merge objects"
      ],
      correct: 0
    },
    {
      question: "What is the main difference between spread and rest operators?",
      options: [
        "Spread expands arrays, rest collects elements into arrays",
        "They are the same thing, just different names",
        "Rest is only for objects, spread is only for arrays",
        "Spread is for numbers, rest is for strings"
      ],
      correct: 0
    },
    {
      question: "How would you update a React state object immutably?",
      options: [
        "state.name = 'John';",
        "setState(state.name = 'John');",
        "setState({ ...state, name: 'John' });",
        "state.name.update('John');"
      ],
      correct: 2
    }
  ]
};

export default function SpreadOperatorQuiz() {
  return <QuizTemplate data={spreadOperatorQuiz} />;
}
