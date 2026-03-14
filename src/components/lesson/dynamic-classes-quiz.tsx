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

const dynamicClassesQuiz: QuizData = {
  lessonSlug: "conditional-dynamic-ui/dynamic-classes",
  lessonTitle: "Dynamic Classes Quiz",
  description: "Test your understanding of applying CSS classes dynamically in React",
  passPercentage: 60,
  lessonId: 9,
  contentSlug: "dynamic-classes",
  questions: [
    {
      question: "Which syntax is best for simple conditional classes?",
      options: [
        "Creating separate component files",
        "Template literals with ternary operators",
        "Importing external CSS files",
        "Using inline style objects"
      ],
      correct: 1
    },
    {
      question: "What is the main advantage of using the classnames library?",
      options: [
        "It makes CSS faster",
        "It reduces file size",
        "It provides cleaner syntax for multiple conditional classes",
        "It automatically generates CSS"
      ],
      correct: 2
    },
    {
      question: "Which code example correctly applies conditional classes?",
      options: [
        '<div className={`btn ${isActive && \"btn-active\"}`}>',
        '<div className=\"btn ${isActive ? \"btn-active\" : \"\"}\">',
        '<div className={`btn ${isActive ? \"btn-active\" : \"\"}`}>',
        '<div className={btn isActive ? btn-active : null}>'
      ],
      correct: 2
    },
    {
      question: "What is a common issue with dynamic Tailwind classes?",
      options: [
        "They don't work with React",
        "Tailwind can't detect dynamically generated class names",
        "They cause performance issues",
        "They conflict with CSS modules"
      ],
      correct: 1
    },
    {
      question: "When should you extract class logic into a helper function?",
      options: [
        "Always, for performance",
        "Never, Use inline classes",
        "When class logic is complex or hard to read",
        "Only when using CSS-in-JS"
      ],
      correct: 2
    }
  ]
};

export default function DynamicClassesQuiz() {
  return <QuizTemplate data={dynamicClassesQuiz} />;
}
