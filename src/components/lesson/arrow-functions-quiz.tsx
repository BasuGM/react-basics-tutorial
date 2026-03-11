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

const arrowFunctionsQuiz: QuizData = {
  lessonSlug: "javascript-basics-for-react/arrow-functions",
  lessonTitle: "Arrow Functions Quiz",
  description: "Test your understanding of JavaScript arrow functions",
  passPercentage: 60,
  lessonId: 1,
  contentSlug: "arrow-functions",
  questions: [
    {
      question: "What is the correct syntax for an arrow function with one parameter?",
      options: [
        "const func = x => x * 2;",
        "const func = (x) => x * 2;",
        "Both are correct",
        "const func = {x} => x * 2;"
      ],
      correct: 2
    },
    {
      question: "What is an implicit return in an arrow function?",
      options: [
        "A return statement inside the function",
        "A return statement that happens automatically for single expressions without braces",
        "Returning the parameter name",
        "Returning undefined"
      ],
      correct: 1
    },
    {
      question: "How do arrow functions handle the 'this' keyword?",
      options: [
        "They create their own 'this' context",
        "They inherit 'this' from the surrounding scope (lexical binding)",
        "'this' is always undefined",
        "'this' refers to the global object"
      ],
      correct: 1
    },
    {
      question: "Which scenario is best for using an arrow function?",
      options: [
        "As a method in an object that needs 'this'",
        "As a constructor with the 'new' keyword",
        "As a callback in array methods like .map() or .filter()",
        "As a generator function"
      ],
      correct: 2
    },
    {
      question: "What syntax is needed to return an object from an arrow function?",
      options: [
        "const getObj = () => { name: 'John' };",
        "const getObj = () => ({ name: 'John' });",
        "const getObj = () => new Object({ name: 'John' });",
        "const getObj = () => Object({ name: 'John' });"
      ],
      correct: 1
    }
  ]
};

export default function ArrowFunctionsQuiz() {
  return <QuizTemplate data={arrowFunctionsQuiz} />;
}
