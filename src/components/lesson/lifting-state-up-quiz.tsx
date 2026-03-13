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

const liftingStateUpQuiz: QuizData = {
  lessonSlug: "props-state-derived/lifting-state-up",
  lessonTitle: "Lifting State Up Quiz",
  description: "Test your understanding of lifting state up in React",
  passPercentage: 60,
  lessonId: 8,
  contentSlug: "lifting-state-up",
  questions: [
    {
      question: "When should you lift state up to a parent component?",
      options: [
        "When you want to make the code more confusing",
        "When multiple sibling components need to share the same data",
        "When you're using class components",
        "Lifting state up is never a good idea"
      ],
      correct: 1
    },
    {
      question: "What is the primary benefit of lifting state up?",
      options: [
        "It makes the code shorter",
        "It allows multiple components to share and synchronize the same state",
        "It eliminates the need for props",
        "It improves performance significantly"
      ],
      correct: 1
    },
    {
      question: "How do child components receive shared state from a parent?",
      options: [
        "Through imports",
        "Through global variables",
        "Through props",
        "Through direct variable access"
      ],
      correct: 2
    },
    {
      question: "How do child components update shared state owned by the parent?",
      options: [
        "By directly modifying the state",
        "By calling callback functions passed as props",
        "By using the window object",
        "Child components cannot update parent state"
      ],
      correct: 1
    },
    {
      question: "What's a potential problem with lifting state too high?",
      options: [
        "The code becomes too simple",
        "It can lead to prop drilling through many intermediate components",
        "React will throw an error",
        "State becomes immutable"
      ],
      correct: 1
    }
  ]
};

export default function LiftingStateUpQuiz() {
  return <QuizTemplate data={liftingStateUpQuiz} />;
}
