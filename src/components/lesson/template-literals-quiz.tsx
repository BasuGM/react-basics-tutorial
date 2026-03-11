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

const templateLiteralsQuiz: QuizData = {
  lessonSlug: "javascript-basics-for-react/template-literals",
  lessonTitle: "Template Literals Quiz",
  description: "Test your understanding of JavaScript template literals",
  passPercentage: 60,
  lessonId: 1,
  contentSlug: "template-literals",
  questions: [
    {
      question: "What character do template literals use?",
      options: [
        'Single quote: \'',
        'Double quote: "',
        "Backtick: `",
        "Dollar sign: $"
      ],
      correct: 2
    },
    {
      question: "How do you embed a variable in a template literal?",
      options: [
        "`${variable}`",
        "`${variable}:`",
        "`$variable`",
        "`\\${variable}`"
      ],
      correct: 0
    },
    {
      question: "What will this output? const name = 'Alice'; console.log(`Hello, ${name}!`);",
      options: [
        "Hello, ${name}!",
        "Hello, Alice!",
        "Hello, undefined!",
        "undefined"
      ],
      correct: 1
    },
    {
      question: "Can template literals span multiple lines?",
      options: [
        "No, they must be on a single line",
        "Yes, newlines are preserved",
        "Only if you use escape characters",
        "Only in React components"
      ],
      correct: 1
    },
    {
      question: "What will this output? `The sum is ${5 + 3}`",
      options: [
        "The sum is ${5 + 3}",
        "The sum is 5 + 3",
        "The sum is 8",
        "Syntax error"
      ],
      correct: 2
    }
  ]
};

export default function TemplateLiteralsQuiz() {
  return <QuizTemplate data={templateLiteralsQuiz} />;
}
