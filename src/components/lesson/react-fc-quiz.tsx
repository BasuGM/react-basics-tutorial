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

const reactFCQuiz: QuizData = {
  lessonSlug: "typescript-basics/react-fc",
  lessonTitle: "React.FC Quiz",
  description: "Test your understanding of React.FC in TypeScript",
  passPercentage: 60,
  lessonId: 2,
  contentSlug: "react-fc",
  questions: [
    {
      question: "What does React.FC stand for?",
      options: [
        "React.FunctionComponent",
        "React.Factory Component",
        "React.Functional Callback",
        "React.Fragment Container"
      ],
      correct: 0
    },
    {
      question: "What does React.FC automatically include in its type definition?",
      options: [
        "Only the props",
        "Props and children",
        "Props and state",
        "Props, state, and refs"
      ],
      correct: 1
    },
    {
      question: "How do you use React.FC with a custom props interface?",
      options: [
        "React.FC(ButtonProps)",
        "React.FC<ButtonProps>",
        "React.FC: ButtonProps",
        "React.FC ButtonProps"
      ],
      correct: 1
    },
    {
      question: "Is React.FC required to type a functional component?",
      options: [
        "Yes, always required",
        "No, you can type the function parameters directly and achieve the same type safety",
        "Only required for components with props",
        "Only required for components that return JSX"
      ],
      correct: 1
    },
    {
      question: "Why do some modern developers avoid using React.FC?",
      options: [
        "It makes code slower",
        "It's outdated and no longer works",
        "Props typing alone provides full type safety, and React.FC adds unnecessary overhead",
        "You cannot use hooks with React.FC"
      ],
      correct: 2
    }
  ]
};

export default function ReactFCQuiz() {
  return <QuizTemplate data={reactFCQuiz} />;
}
