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

const mappingToClassLifecycleMethodsQuiz: QuizData = {
  lessonSlug: "effects-lifecycle/mapping-to-class-lifecycle-methods",
  lessonTitle: "Mapping to Class Lifecycle Methods Quiz",
  description: "Test your understanding of useEffect and class lifecycle methods",
  passPercentage: 60,
  lessonId: 7,
  contentSlug: "mapping-to-class-lifecycle-methods",
  questions: [
    {
      question: "What class lifecycle method does useEffect with an empty dependency array match?",
      options: [
        "componentDidUpdate",
        "componentDidMount",
        "componentWillUnmount",
        "render()"
      ],
      correct: 1
    },
    {
      question: "How do you replicate componentDidUpdate behavior with useEffect?",
      options: [
        "useEffect(() => {...}, []);",
        "useEffect(() => {...});",
        "useEffect(() => {...}, [dependency]);",
        "useEffect without any dependencies"
      ],
      correct: 2
    },
    {
      question: "Which part of useEffect corresponds to componentWillUnmount?",
      options: [
        "The main effect function",
        "The cleanup function returned from useEffect",
        "The dependency array",
        "The second parameter"
      ],
      correct: 1
    },
    {
      question: "What is an advantage of hooks over class lifecycle methods?",
      options: [
        "Class lifecycle methods are always better",
        "You can't reuse logic in hooks",
        "Related logic can be kept together in a single effect",
        "Hooks always run multiple times"
      ],
      correct: 2
    },
    {
      question: "In a class component, where would you cancel a subscription set up in componentDidMount?",
      options: [
        "In another componentDidMount call",
        "In componentDidUpdate",
        "In componentWillUnmount",
        "In the render method"
      ],
      correct: 2
    }
  ]
};

export default function MappingToClassLifecycleMethodsQuiz() {
  return <QuizTemplate data={mappingToClassLifecycleMethodsQuiz} />;
}
