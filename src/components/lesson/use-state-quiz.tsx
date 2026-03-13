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

const useStateQuiz: QuizData = {
  lessonSlug: "state-events/use-state",
  lessonTitle: "useState Hook Quiz",
  description: "Test your understanding of React's useState hook",
  passPercentage: 60,
  lessonId: 6,
  contentSlug: "use-state",
  questions: [
    {
      question: "What does useState return?",
      options: [
        "Just the state value",
        "An array with the state value and a setter function",
        "An object with state and methods",
        "The previous state value"
      ],
      correct: 1
    },
    {
      question: "What is the initial value in useState(0)?",
      options: [
        "The function itself",
        "The state variable name",
        "The initial state value (0 in this case)",
        "Nothing, it must be provided later"
      ],
      correct: 2
    },
    {
      question: "When you call a setter function like setCount(5), what happens?",
      options: [
        "The state updates immediately and synchronously",
        "The state is queued for update and the component re-renders",
        "Nothing happens until the component unmounts",
        "The state is stored but never used"
      ],
      correct: 1
    },
    {
      question: "When should you use the functional form of setState (prevState => ...)?",
      options: [
        "Never, it's not necessary",
        "When the new state depends on the previous state",
        "Only for string values",
        "When using objects instead of primitives"
      ],
      correct: 1
    },
    {
      question: "What's the correct way to update an object in state?",
      options: [
        "Mutate it directly: user.name = 'John'",
        "Create a new object: setUser({ ...user, name: 'John' })",
        "Use setUser(user); user.name = 'John'",
        "Object updates don't work in React"
      ],
      correct: 1
    }
  ]
};

export default function UseStateQuiz() {
  return <QuizTemplate data={useStateQuiz} />;
}
