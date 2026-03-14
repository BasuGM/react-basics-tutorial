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

const featureFlagsIntroLevelQuiz: QuizData = {
  lessonSlug: "conditional-dynamic-ui/feature-flags-intro-level",
  lessonTitle: "Feature Flags (Intro Level) Quiz",
  description: "Test your understanding of feature flags in React applications",
  passPercentage: 60,
  lessonId: 9,
  contentSlug: "feature-flags-intro-level",
  questions: [
    {
      question: "What is a feature flag?",
      options: [
        "A CSS flag icon used for country selection",
        "A boolean value that controls whether a feature is visible",
        "A React component that displays warnings",
        "A server error status code"
      ],
      correct: 1
    },
    {
      question: "What is the main advantage of using feature flags?",
      options: [
        "They make code run faster",
        "They reduce the file size of your app",
        "You can enable/disable features without redeploying",
        "They replace the need for testing"
      ],
      correct: 2
    },
    {
      question: "How should you manage environment-based feature flags?",
      options: [
        "Hard-code them directly in components",
        "Store them in local storage only",
        "Use environment variables like NEXT_PUBLIC_FEATURE_NAME",
        "Pass them through URL parameters only"
      ],
      correct: 2
    },
    {
      question: "Which is a valid use case for feature flags?",
      options: [
        "Replacing all conditional rendering",
        "Gradually rolling out new features to users",
        "Improving CSS performance",
        "Compressing image files"
      ],
      correct: 1
    },
    {
      question: "Why should you clean up old feature flags?",
      options: [
        "To make code faster",
        "To reduce confusion and maintain code clarity",
        "To save disk space",
        "Because they cause bugs"
      ],
      correct: 1
    }
  ]
};

export default function FeatureFlagsIntroLevelQuiz() {
  return <QuizTemplate data={featureFlagsIntroLevelQuiz} />;
}
