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

const validationBasicsQuiz: QuizData = {
  lessonSlug: "forms-basics/validation-basics",
  lessonTitle: "Validation Basics Quiz",
  description: "Test your understanding of form validation in React",
  passPercentage: 60,
  lessonId: 10,
  contentSlug: "validation-basics",
  questions: [
    {
      question: "Which of the following is a built-in HTML5 validation attribute?",
      options: [
        "validate",
        "check",
        "required",
        "test"
      ],
      correct: 2
    },
    {
      question: "When should you validate forms on the server?",
      options: [
        "Never, client-side validation is enough",
        "Only if client-side validation fails",
        "Always, for security and data integrity",
        "Only for sensitive forms"
      ],
      correct: 2
    },
    {
      question: "What is a disadvantage of real-time validation?",
      options: [
        "It's too slow",
        "It can be annoying while the user is typing",
        "It doesn't work with HTML5",
        "It requires server-side validation"
      ],
      correct: 1
    },
    {
      question: "Which validation happens after a form submission attempt?",
      options: [
        "Real-time validation",
        "On-blur validation",
        "On-submit validation",
        "Async validation"
      ],
      correct: 2
    },
    {
      question: "Why should you never rely only on client-side validation?",
      options: [
        "It slows down the application",
        "It can be bypassed by users",
        "It doesn't support all input types",
        "It requires additional libraries"
      ],
      correct: 1
    }
  ]
};

export default function ValidationBasicsQuiz() {
  return <QuizTemplate data={validationBasicsQuiz} />;
}
