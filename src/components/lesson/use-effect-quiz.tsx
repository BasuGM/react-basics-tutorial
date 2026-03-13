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

const useEffectQuiz: QuizData = {
  lessonSlug: "effects-lifecycle/use-effect",
  lessonTitle: "useEffect Hook Quiz",
  description: "Test your understanding of the useEffect hook",
  passPercentage: 60,
  lessonId: 7,
  contentSlug: "use-effect",
  questions: [
    {
      question: "What does useEffect do?",
      options: [
        "Manages component state",
        "Performs side effects after the component renders",
        "Handles events and user input",
        "Optimizes component performance"
      ],
      correct: 1
    },
    {
      question: "When does useEffect run with an empty dependency array?",
      options: [
        "After every render",
        "Only once when the component mounts",
        "Never, the dependencies must have values",
        "When any prop changes"
      ],
      correct: 1
    },
    {
      question: "What does the dependency array control?",
      options: [
        "Which state variables can be used",
        "How many times the component can render",
        "When the effect runs",
        "The order of effect execution"
      ],
      correct: 2
    },
    {
      question: "When should you return a function from useEffect?",
      options: [
        "Always, to prevent memory leaks",
        "To create a cleanup function that runs before unmount or re-run",
        "When you want to update state",
        "Never, functions can't be returned from hooks"
      ],
      correct: 1
    },
    {
      question: "What happens if you forget to add a dependency to the dependency array?",
      options: [
        "The code won't compile",
        "Nothing, the effect just won't run",
        "The effect may use stale values from previous renders",
        "React throws a runtime error"
      ],
      correct: 2
    }
  ]
};

export default function UseEffectQuiz() {
  return <QuizTemplate data={useEffectQuiz} />;
}
