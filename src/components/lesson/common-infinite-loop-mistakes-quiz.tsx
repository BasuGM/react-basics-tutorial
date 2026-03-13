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

const commonInfiniteLoopMistakesQuiz: QuizData = {
  lessonSlug: "effects-lifecycle/common-infinite-loop-mistakes",
  lessonTitle: "Common Infinite Loop Mistakes Quiz",
  description: "Test your understanding of infinite loop prevention in useEffect",
  passPercentage: 60,
  lessonId: 7,
  contentSlug: "common-infinite-loop-mistakes",
  questions: [
    {
      question: "What is the most common cause of infinite loops in useEffect?",
      options: [
        "Using too many effect hooks",
        "Missing or incorrect dependency array",
        "Not using useState",
        "Using class components instead of functional"
      ],
      correct: 1
    },
    {
      question: "What happens when you use setState inside an effect without a dependency array?",
      options: [
        "The state never updates",
        "The effect runs once after mount",
        "The effect runs after every render, causing an infinite loop",
        "React prevents it with an error"
      ],
      correct: 2
    },
    {
      question: "Which of these will cause an infinite loop?",
      options: [
        "useEffect(() => { setCount(count + 1); }, []);",
        "useEffect(() => { setCount(prev => prev + 1); }, []);",
        "useEffect(() => { setCount(count + 1); }, [count]);",
        "Both A and C"
      ],
      correct: 3
    },
    {
      question: "Why do objects and arrays in dependency arrays cause infinite loops?",
      options: [
        "React doesn't support them as dependencies",
        "They're recreated on every render so they're always 'different'",
        "They cause syntax errors",
        "They automatically update their dependencies"
      ],
      correct: 1
    },
    {
      question: "How can you prevent infinite loops when updating state based on previous state?",
      options: [
        "Remove the dependency array completely",
        "Add all state variables as dependencies",
        "Use functional updates: setState(prev => newValue)",
        "Use setInterval instead of useEffect"
      ],
      correct: 2
    }
  ]
};

export default function CommonInfiniteLoopMistakesQuiz() {
  return <QuizTemplate data={commonInfiniteLoopMistakesQuiz} />;
}
