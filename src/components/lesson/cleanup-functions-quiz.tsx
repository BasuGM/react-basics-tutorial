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

const cleanupFunctionsQuiz: QuizData = {
  lessonSlug: "effects-lifecycle/cleanup-functions",
  lessonTitle: "Cleanup Functions Quiz",
  description: "Test your understanding of cleanup functions in useEffect",
  passPercentage: 60,
  lessonId: 7,
  contentSlug: "cleanup-functions",
  questions: [
    {
      question: "When does a cleanup function in useEffect run?",
      options: [
        "Before the effect runs",
        "After the effect completes",
        "When the component unmounts and before the effect re-runs",
        "Only when the component unmounts"
      ],
      correct: 2
    },
    {
      question: "What is the main purpose of cleanup functions?",
      options: [
        "To format code and make it cleaner",
        "To prevent memory leaks and cancel pending operations",
        "To speed up the component rendering",
        "To validate props"
      ],
      correct: 1
    },
    {
      question: "What should you do with a setTimeout in useEffect?",
      options: [
        "Leave it as is, React handles cleanup automatically",
        "Wrap it in try-catch",
        "Clear it in the cleanup function using clearTimeout",
        "Convert it to setInterval instead"
      ],
      correct: 2
    },
    {
      question: "How do you unsubscribe from an event in a cleanup function?",
      options: [
        "Call the subscription method again",
        "Return a function that unsubscribes",
        "Set the subscription to null",
        "Event listeners automatically unsubscribe"
      ],
      correct: 1
    },
    {
      question: "What happens if you don't clean up event listeners?",
      options: [
        "They automatically get removed",
        "The component won't render",
        "Multiple listeners accumulate causing memory leaks and duplicate actions",
        "React throws an error"
      ],
      correct: 2
    }
  ]
};

export default function CleanupFunctionsQuiz() {
  return <QuizTemplate data={cleanupFunctionsQuiz} />;
}
