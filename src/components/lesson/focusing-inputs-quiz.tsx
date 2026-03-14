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

const focusingInputsQuiz: QuizData = {
  lessonSlug: "refs-dom-access/focusing-inputs",
  lessonTitle: "Focusing Inputs Quiz",
  description: "Test your understanding of managing input focus with refs",
  passPercentage: 60,
  lessonId: 11,
  contentSlug: "focusing-inputs",
  questions: [
    {
      question: "How do you programmatically focus an input element with a ref?",
      options: [
        "inputRef.focus()",
        "inputRef.current.focus()",
        "inputRef.current.focusOn()",
        "focus(inputRef.current)"
      ],
      correct: 1
    },
    {
      question: "Which hook would you use to focus an input when the component first mounts?",
      options: [
        "useState",
        "useCallback",
        "useEffect",
        "useContext"
      ],
      correct: 2
    },
    {
      question: "When is it appropriate to use focus management with refs?",
      options: [
        "Only for buttons",
        "For form validation errors and better UX",
        "Never - let users navigate naturally",
        "Only in modal dialogs"
      ],
      correct: 1
    },
    {
      question: "What should you check before calling methods on a ref's current property?",
      options: [
        "Check if it's a string",
        "Check if it's null",
        "Check if it's undefined",
        "Nothing - it's always safe"
      ],
      correct: 1
    },
    {
      question: "Which scenario is NOT a good use case for focusing an input with a ref?",
      options: [
        "Focusing on form validation error",
        "Focusing next input after completing current one",
        "Focusing because data in state changed",
        "Focusing on modal open for accessibility"
      ],
      correct: 2
    }
  ]
};

export default function FocusingInputsQuiz() {
  return <QuizTemplate data={focusingInputsQuiz} />;
}
