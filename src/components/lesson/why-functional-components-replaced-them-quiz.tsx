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

const whyFunctionalComponentsReplacedThemQuiz: QuizData = {
  lessonSlug: "class-components-legacy/why-functional-components-replaced-them",
  lessonTitle: "Why Functional Components Replaced Them Quiz",
  description: "Test your understanding of why functional components became the standard",
  passPercentage: 60,
  lessonId: 5,
  contentSlug: "why-functional-components-replaced-them",
  questions: [
    {
      question: "Why are functional components simpler than class components?",
      options: [
        "They run faster",
        "They require less boilerplate code and use simpler JavaScript syntax",
        "They don't need props",
        "They automatically handle state"
      ],
      correct: 1
    },
    {
      question: "What feature of functional components made them more appealing?",
      options: [
        "Classes are more powerful",
        "Hooks (useState, useEffect) provide cleaner state and side effect management",
        "Functional components don't need to return JSX",
        "They use the 'this' keyword better"
      ],
      correct: 1
    },
    {
      question: "How does useEffect improve on lifecycle methods?",
      options: [
        "It's the same thing with a different name",
        "It allows related logic to stay together instead of being split across methods",
        "Lifecycle methods are better",
        "useEffect doesn't exist yet"
      ],
      correct: 1
    },
    {
      question: "What is a common problem with 'this' in class components?",
      options: [
        "It's too simple",
        "It makes code more readable",
        "Context binding issues lead to bugs if not handled carefully",
        "'this' doesn't exist in class components"
      ],
      correct: 2
    },
    {
      question: "What does React officially recommend now?",
      options: [
        "Class components are the only way",
        "Functional components with Hooks",
        "Both equally",
        "Neither - use a different framework"
      ],
      correct: 1
    }
  ]
};

export default function WhyFunctionalComponentsReplacedThemQuiz() {
  return <QuizTemplate data={whyFunctionalComponentsReplacedThemQuiz} />;
}
