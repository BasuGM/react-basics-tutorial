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

const useRefQuiz: QuizData = {
  lessonSlug: "refs-dom-access/use-ref",
  lessonTitle: "useRef Quiz",
  description: "Test your understanding of useRef and when to use it",
  passPercentage: 60,
  lessonId: 11,
  contentSlug: "use-ref",
  questions: [
    {
      question: "What does useRef return?",
      options: [
        "A state value and setter function",
        "An object with a 'current' property",
        "A DOM element directly",
        "An array with the ref and its dependencies"
      ],
      correct: 1
    },
    {
      question: "What happens when you update a ref?",
      options: [
        "The component re-renders",
        "The component does not re-render",
        "It throws an error",
        "It updates the state"
      ],
      correct: 1
    },
    {
      question: "How do you access the value stored in a ref?",
      options: [
        "ref.value",
        "ref.current",
        "ref()",
        "ref.get()"
      ],
      correct: 1
    },
    {
      question: "Which is a good use case for refs?",
      options: [
        "Storing UI data that affects rendering",
        "Managing a form input value",
        "Focusing an input element",
        "Updating component state"
      ],
      correct: 2
    },
    {
      question: "When should you NOT use a ref?",
      options: [
        "When you need to store a value that doesn't change",
        "When you need to access DOM properties",
        "When anything can be expressed declaratively with state",
        "When integrating with third-party libraries"
      ],
      correct: 2
    }
  ]
};

export default function UseRefQuiz() {
  return <QuizTemplate data={useRefQuiz} />;
}
