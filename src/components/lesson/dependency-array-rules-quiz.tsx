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

const dependencyArrayRulesQuiz: QuizData = {
  lessonSlug: "effects-lifecycle/dependency-array-rules",
  lessonTitle: "Dependency Array Rules Quiz",
  description: "Test your understanding of dependency arrays in useEffect",
  passPercentage: 60,
  lessonId: 7,
  contentSlug: "dependency-array-rules",
  questions: [
    {
      question: "What should an empty dependency array [] do in useEffect?",
      options: [
        "Run the effect after every render",
        "Never run the effect",
        "Run the effect once when the component mounts",
        "Run the effect every time the component updates"
      ],
      correct: 2
    },
    {
      question: "What happens if you use a variable in useEffect but forget to add it to the dependency array?",
      options: [
        "The code won't compile",
        "The effect may use a stale (old) value of that variable",
        "The variable is automatically added to dependencies",
        "The effect never runs"
      ],
      correct: 1
    },
    {
      question: "How does React determine if a dependency has changed?",
      options: [
        "Deep comparison of all properties",
        "Shallow comparison using === operator",
        "String comparison",
        "Type comparison"
      ],
      correct: 1
    },
    {
      question: "If an effect uses a newly created object as a dependency, what will happen?",
      options: [
        "The effect will never run",
        "The effect will only run once",
        "The effect will run after every render (because the object is new each time)",
        "An error will be thrown"
      ],
      correct: 2
    },
    {
      question: "Which ESLint rule helps catch missing dependencies in useEffect?",
      options: [
        "no-missing-vars",
        "exhaustive-deps",
        "effect-dependencies",
        "react/hooks-deps"
      ],
      correct: 1
    }
  ]
};

export default function DependencyArrayRulesQuiz() {
  return <QuizTemplate data={dependencyArrayRulesQuiz} />;
}
