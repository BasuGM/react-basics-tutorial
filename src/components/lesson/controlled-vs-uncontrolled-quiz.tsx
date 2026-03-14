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

const controlledVsUncontrolledQuiz: QuizData = {
  lessonSlug: "forms-basics/controlled-vs-uncontrolled",
  lessonTitle: "Controlled vs Uncontrolled Quiz",
  description: "Test your understanding of controlled and uncontrolled components",
  passPercentage: 60,
  lessonId: 10,
  contentSlug: "controlled-vs-uncontrolled",
  questions: [
    {
      question: "In a controlled component, what manages the input value?",
      options: [
        "The DOM directly",
        "React state",
        "A class property",
        "Local variables"
      ],
      correct: 1
    },
    {
      question: "How do you access the value of an uncontrolled input?",
      options: [
        "Through state",
        "Through a ref",
        "Through props",
        "From the props object"
      ],
      correct: 1
    },
    {
      question: "Which approach is better for real-time validation?",
      options: [
        "Uncontrolled components",
        "Controlled components",
        "Both are equal",
        "Neither supports validation"
      ],
      correct: 1
    },
    {
      question: "What is a good use case for uncontrolled components?",
      options: [
        "Real-time form validation",
        "File inputs",
        "Dynamic form fields",
        "Complex form logic"
      ],
      correct: 1
    },
    {
      question: "In a controlled component, what triggers a state update?",
      options: [
        "Form submission",
        "Component mounting",
        "The onChange event",
        "Button clicks only"
      ],
      correct: 2
    }
  ]
};

export default function ControlledVsUncontrolledQuiz() {
  return <QuizTemplate data={controlledVsUncontrolledQuiz} />;
}
