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

const presentationalVsContainerComponentsQuiz: QuizData = {
  lessonSlug: "component-reusability-structure/presentational-vs-container-components",
  lessonTitle: "Presentational vs Container Components Quiz",
  description: "Test your understanding of the presentational vs container component pattern",
  passPercentage: 60,
  lessonId: 12,
  contentSlug: "presentational-vs-container-components",
  questions: [
    {
      question: "What is the main responsibility of a container component?",
      options: [
        "Rendering UI and styling",
        "Handling logic, state, and data fetching",
        "Providing animations and effects",
        "Managing CSS classes"
      ],
      correct: 1
    },
    {
      question: "What is the main responsibility of a presentational component?",
      options: [
        "Fetching data from an API",
        "Managing application state",
        "Rendering UI based on props received",
        "Handling business logic"
      ],
      correct: 2
    },
    {
      question: "Why is this pattern useful?",
      options: [
        "It makes components more complex",
        "It separates concerns, making code more testable and reusable",
        "It eliminates the need for state",
        "It improves performance significantly"
      ],
      correct: 1
    },
    {
      question: "What modern React feature can replace container components?",
      options: [
        "CSS modules",
        "Props drilling",
        "Custom hooks",
        "Fragment components"
      ],
      correct: 2
    },
    {
      question: "Which component should have useState and useEffect?",
      options: [
        "Presentational components",
        "Container components",
        "Both equally",
        "Neither, use context instead"
      ],
      correct: 1
    }
  ]
};

export default function PresentationalVsContainerComponentsQuiz() {
  return <QuizTemplate data={presentationalVsContainerComponentsQuiz} />;
}
