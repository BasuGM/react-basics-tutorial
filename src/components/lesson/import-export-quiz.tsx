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

const importExportQuiz: QuizData = {
  lessonSlug: "javascript-basics-for-react/import-export",
  lessonTitle: "Import and Export Quiz",
  description: "Test your understanding of ES6 modules",
  passPercentage: 60,
  lessonId: 1,
  contentSlug: "import-export",
  questions: [
    {
      question: "What is a named export?",
      options: [
        "An export that can only have one item per file",
        "An export with a specific name that you import using destructuring",
        "An export without a name",
        "An export that uses the default keyword"
      ],
      correct: 1
    },
    {
      question: "How do you import a default export?",
      options: [
        "import { default } from './module.js';",
        "import default from './module.js';",
        "import moduleName from './module.js';",
        "import [moduleName] from './module.js';"
      ],
      correct: 2
    },
    {
      question: "How many default exports can a file have?",
      options: [
        "Zero",
        "One",
        "Multiple, as many as you need",
        "It depends on the file size"
      ],
      correct: 1
    },
    {
      question: "What does this code do? import * as utils from './math.js'",
      options: [
        "Imports all default exports as 'utils'",
        "Imports all named exports as properties of the 'utils' object",
        "Imports nothing",
        "Causes a syntax error"
      ],
      correct: 1
    },
    {
      question: "How do you rename an import to avoid naming conflicts?",
      options: [
        "import oldName.newName from './module.js';",
        "import { oldName as newName } from './module.js';",
        "import { newName: oldName } from './module.js';",
        "import newName(oldName) from './module.js';"
      ],
      correct: 1
    }
  ]
};

export default function ImportExportQuiz() {
  return <QuizTemplate data={importExportQuiz} />;
}
