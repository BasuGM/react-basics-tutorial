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

const reusabilityQuiz: QuizData = {
  lessonSlug: "functional-components/reusability",
  lessonTitle: "Reusability Quiz",
  description: "Test your understanding of component reusability",
  passPercentage: 60,
  lessonId: 4,
  contentSlug: "reusability",
  questions: [
    {
      question: "What is the main benefit of creating reusable components?",
      options: [
        "They run faster",
        "They reduce code duplication and improve maintainability",
        "They automatically handle state",
        "They require less CSS"
      ],
      correct: 1
    },
    {
      question: "How do you make a component reusable?",
      options: [
        "By hardcoding all values",
        "By using props and composition to customize behavior",
        "By creating a new component for each use case",
        "By using global variables"
      ],
      correct: 1
    },
    {
      question: "What is composition in React?",
      options: [
        "Combining CSS styles",
        "Building complex components by combining simpler ones",
        "Writing multiple functions in one file",
        "Using only functional components"
      ],
      correct: 1
    },
    {
      question: "When you update a reusable component, what happens?",
      options: [
        "Only the current instance is updated",
        "You have to manually update each place it's used",
        "All instances of the component are updated automatically",
        "The update only applies to new instances"
      ],
      correct: 2
    },
    {
      question: "Why are default props useful?",
      options: [
        "They make components less flexible",
        "They provide sensible defaults so not all props must be specified",
        "They replace the need for state",
        "They improve performance"
      ],
      correct: 1
    }
  ]
};

export default function ReusabilityQuiz() {
  return <QuizTemplate data={reusabilityQuiz} />;
}
