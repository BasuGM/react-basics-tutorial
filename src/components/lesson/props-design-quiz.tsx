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

const propsDesignQuiz: QuizData = {
  lessonSlug: "component-reusability-structure/props-design",
  lessonTitle: "Props Design Quiz",
  description: "Test your understanding of designing effective component props",
  passPercentage: 60,
  lessonId: 12,
  contentSlug: "props-design",
  questions: [
    {
      question: "What is the main goal of good props design?",
      options: [
        "To accept as many props as possible",
        "To create clear, intuitive component interfaces",
        "To make components more complex",
        "To avoid using TypeScript"
      ],
      correct: 1
    },
    {
      question: "What naming convention should you use for event handler props?",
      options: [
        "Use underscores: event_click",
        "Use 'on' prefix: onClick, onSubmit",
        "Use 'handle' prefix: handleClick",
        "Use any name you prefer"
      ],
      correct: 1
    },
    {
      question: "What naming convention should you use for boolean props?",
      options: [
        "Use 'has' or 'is' prefix: hasError, isLoading",
        "Use 'get' prefix: getLoading",
        "Use 'bool' suffix: loadingBool",
        "Use any name you prefer"
      ],
      correct: 0
    },
    {
      question: "Why should you provide sensible defaults for optional props?",
      options: [
        "To make the component more complex",
        "To reduce boilerplate and make the component easier to use",
        "To force users to specify all props",
        "Defaults are not important"
      ],
      correct: 1
    },
    {
      question: "What is a disadvantage of using spread props (...rest)?",
      options: [
        "It makes the component more efficient",
        "It makes unclear which props the component accepts",
        "It improves type safety",
        "Spread props have no disadvantages"
      ],
      correct: 1
    }
  ]
};

export default function PropsDesignQuiz() {
  return <QuizTemplate data={propsDesignQuiz} />;
}
