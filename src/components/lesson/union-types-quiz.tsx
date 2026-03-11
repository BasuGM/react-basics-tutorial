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

const unionTypesQuiz: QuizData = {
  lessonSlug: "typescript-basics/union-types",
  lessonTitle: "Union Types Quiz",
  description: "Test your understanding of TypeScript union types",
  passPercentage: 60,
  lessonId: 2,
  contentSlug: "union-types",
  questions: [
    {
      question: "How do you create a union type with multiple types?",
      options: [
        "type Value = string & number;",
        "type Value = string | number;",
        "type Value = [string, number];",
        "type Value = string extends number;"
      ],
      correct: 1
    },
    {
      question: "What is type narrowing?",
      options: [
        "Making a type smaller by removing properties",
        "Using code to check which type a value is, allowing TypeScript to understand the specific type in that block",
        "Converting a type to another type",
        "Combining multiple types into one"
      ],
      correct: 1
    },
    {
      question: "Which operator is used to narrow types when you have a union of different data types?",
      options: [
        "instanceof",
        "typeof",
        "Both typeof and instanceof",
        "Neither works for type narrowing"
      ],
      correct: 2
    },
    {
      question: "What will happen if you call a string method on a union type without narrowing?",
      options: [
        "It will work fine",
        "TypeScript will show an error because the value might not be a string",
        "It will automatically convert to string",
        "It will throw a runtime error"
      ],
      correct: 1
    },
    {
      question: "What is a discriminated union?",
      options: [
        "A union of primitive types like string | number",
        "A union of objects with a common property that identifies which object shape it is",
        "A union that cannot be narrowed",
        "A union that extends another type"
      ],
      correct: 1
    }
  ]
};

export default function UnionTypesQuiz() {
  return <QuizTemplate data={unionTypesQuiz} />;
}
