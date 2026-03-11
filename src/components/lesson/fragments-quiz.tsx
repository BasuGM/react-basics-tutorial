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

const fragmentsQuiz: QuizData = {
  lessonSlug: "jsx-rendering/fragments",
  lessonTitle: "Fragments Quiz",
  description: "Test your understanding of React Fragments",
  passPercentage: 60,
  lessonId: 3,
  contentSlug: "fragments",
  questions: [
    {
      question: "What is the main purpose of React Fragments?",
      options: [
        "To improve component styling",
        "To group elements without adding extra DOM nodes",
        "To replace CSS",
        "To handle events"
      ],
      correct: 1
    },
    {
      question: "What is the short syntax for a Fragment?",
      options: [
        "<Fragment></Fragment>",
        "<React.Fragment></React.Fragment>",
        "<></>",
        "<div></div>"
      ],
      correct: 2
    },
    {
      question: "When rendering fragments in a list, what syntax should you use?",
      options: [
        "Always use the short syntax <>",
        "Use React.Fragment with a key prop",
        "Use a div wrapper instead",
        "Fragments cannot be used in lists"
      ],
      correct: 1
    },
    {
      question: "Can you use a key prop with the short fragment syntax <>?",
      options: [
        "Yes, always",
        "No, you need to use React.Fragment",
        "Yes, but it's not recommended",
        "Only in production"
      ],
      correct: 1
    },
    {
      question: "What is a common use case for fragments?",
      options: [
        "Improving component performance",
        "Rendering table columns or list items without extra wrappers",
        "Replacing props",
        "Managing component state"
      ],
      correct: 1
    }
  ]
};

export default function FragmentsQuiz() {
  return <QuizTemplate data={fragmentsQuiz} />;
}
