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

const destructuringQuiz: QuizData = {
  lessonSlug: "javascript-basics-for-react/destructuring",
  lessonTitle: "Destructuring Quiz",
  description: "Test your understanding of JavaScript destructuring",
  passPercentage: 60,
  lessonId: 1,
  contentSlug: "destructuring",
  questions: [
    {
      question: "What is the correct syntax to destructure an object?",
      options: [
        "const [name, age] = person;",
        "const { name, age } = person;",
        "const name, age = person;",
        "const person.[name, age];"
      ],
      correct: 1
    },
    {
      question: "How do you skip elements when destructuring an array?",
      options: [
        "const [first, null, third] = arr;",
        "const [first, , third] = arr;",
        "const [first, skip, third] = arr;",
        "const [first, third] = arr; // automatic skip"
      ],
      correct: 1
    },
    {
      question: "What does the rest operator (...) do in destructuring?",
      options: [
        "It pauses the destructuring process",
        "It collects remaining values into a new array or object",
        "It creates a copy of the original value",
        "It removes properties from the object"
      ],
      correct: 1
    },
    {
      question: "How can you provide a default value in object destructuring?",
      options: [
        "const { name: 'John', age } = obj;",
        "const { name = 'John', age } = obj;",
        "const { name || 'John', age } = obj;",
        "default { name: 'John' } from obj;"
      ],
      correct: 1
    },
    {
      question: "What does this code do? const { name: fullName } = person;",
      options: [
        "It destructures the name property and renames it to fullName",
        "It creates a new property called fullName",
        "It doesn't work - syntax error",
        "It destructures both name and fullName properties"
      ],
      correct: 0
    }
  ]
};

export default function DestructuringQuiz() {
  return <QuizTemplate data={destructuringQuiz} />;
}
