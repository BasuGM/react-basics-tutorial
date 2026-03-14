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

const whenRefsAreNecessaryQuiz: QuizData = {
  lessonSlug: "refs-dom-access/when-refs-are-necessary",
  lessonTitle: "When Refs Are Necessary Quiz",
  description: "Test your understanding of when to use refs vs state",
  passPercentage: 60,
  lessonId: 11,
  contentSlug: "when-refs-are-necessary",
  questions: [
    {
      question: "Should you use a ref to store a form input value?",
      options: [
        "Yes, refs are always better for forms",
        "No, use state to track form values",
        "Only if the form is very large",
        "Refs and state are the same for forms"
      ],
      correct: 1
    },
    {
      question: "Which situation requires a ref?",
      options: [
        "Showing and hiding a modal",
        "Counting button clicks",
        "Managing focus on an input element",
        "Displaying a list of items"
      ],
      correct: 2
    },
    {
      question: "What is the main difference in how refs and state affect the component?",
      options: [
        "Refs are slower than state",
        "State triggers a re-render, refs do not",
        "Refs trigger a re-render, state does not",
        "There is no difference"
      ],
      correct: 1
    },
    {
      question: "When should you use refs to toggle a modal's visibility?",
      options: [
        "Always use refs for modals",
        "Use state instead - modals should update the UI",
        "Only if the modal is complex",
        "Refs and state work equally for this"
      ],
      correct: 1
    },
    {
      question: "Which of these is a valid use case for refs?",
      options: [
        "Storing the current input value for form submission",
        "Triggering a CSS animation on a DOM element",
        "Keeping track of component state",
        "Determining which component to render"
      ],
      correct: 1
    }
  ]
};

export default function WhenRefsAreNecessaryQuiz() {
  return <QuizTemplate data={whenRefsAreNecessaryQuiz} />;
}
