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

const renderingBasedOnPermissionsQuiz: QuizData = {
  lessonSlug: "conditional-dynamic-ui/rendering-based-on-permissions",
  lessonTitle: "Rendering Based on Permissions Quiz",
  description: "Test your understanding of permission-based UI rendering",
  passPercentage: 60,
  lessonId: 9,
  contentSlug: "rendering-based-on-permissions",
  questions: [
    {
      question: "What is the purpose of checking permissions on the client side?",
      options: [
        "To prevent all unauthorized access",
        "To improve user experience by hiding unavailable features",
        "To secure the server from attacks",
        "To reduce database queries"
      ],
      correct: 1
    },
    {
      question: "Why must you always validate permissions on the server?",
      options: [
        "Because client-side code can be bypassed or manipulated",
        "For better performance",
        "To save bandwidth",
        "It prevents the need for client-side checks"
      ],
      correct: 0
    },
    {
      question: "Which pattern is best for reusing permission checks?",
      options: [
        "Duplicating the check in every component",
        "Creating helper functions and protected components",
        "Storing permissions in global CSS variables",
        "Checking permissions only at the router level"
      ],
      correct: 1
    },
    {
      question: "How should you handle a user without permission to see content?",
      options: [
        "Show an error message with technical details",
        "Return null to hide it, or show a limited access message",
        "Still render it but disable interactions",
        "Redirect to a 404 page"
      ],
      correct: 1
    },
    {
      question: "What is the secure approach to deleting a resource?",
      options: [
        "Hide the delete button on the client side",
        "Check permissions on both client and server",
        "Only check permissions on the client side",
        "Trust the user's browser to enforce rules"
      ],
      correct: 1
    }
  ]
};

export default function RenderingBasedOnPermissionsQuiz() {
  return <QuizTemplate data={renderingBasedOnPermissionsQuiz} />;
}
