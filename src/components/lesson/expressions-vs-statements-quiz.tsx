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

const expressionsVsStatementsQuiz: QuizData = {
  lessonSlug: "jsx-rendering/expressions-vs-statements",
  lessonTitle: "Expressions vs Statements Quiz",
  description: "Test your understanding of expressions and statements in JSX",
  passPercentage: 60,
  lessonId: 3,
  contentSlug: "expressions-vs-statements",
  questions: [
    {
      question: "Which of the following is an expression?",
      options: [
        "if (isOpen) { }",
        "for (let i = 0; i < 5; i++) { }",
        "5 + 3",
        "function myFunc() { }"
      ],
      correct: 2
    },
    {
      question: "Can you use statements directly inside JSX curly braces?",
      options: [
        "Yes, always",
        "No, only expressions are allowed",
        "Only if statements",
        "Only for loops"
      ],
      correct: 1
    },
    {
      question: "Which is a valid use of an expression in JSX?",
      options: [
        "<div>{if (isOpen) { return 'Open'; }}</div>",
        "<div>{isOpen ? 'Open' : 'Closed'}</div>",
        "<div>{for (let i = 0; i < 5; i++) { }}</div>",
        "<div>{let name = 'Alice';}</div>"
      ],
      correct: 1
    },
    {
      question: "What does a ternary operator return?",
      options: [
        "Nothing, it just performs an action",
        "A value, making it an expression",
        "Always a boolean",
        "Always undefined"
      ],
      correct: 1
    },
    {
      question: "Which statement type can be converted to an expression for JSX?",
      options: [
        "None, statements can never be used",
        "Move the logic outside JSX and call the resulting function",
        "Wrap it in curly braces",
        "Use the return keyword"
      ],
      correct: 1
    }
  ]
};

export default function ExpressionsVsStatementsQuiz() {
  return <QuizTemplate data={expressionsVsStatementsQuiz} />;
}
