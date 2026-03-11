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

const typingStateQuiz: QuizData = {
  lessonSlug: "typescript-basics/typing-state",
  lessonTitle: "Typing State Quiz",
  description: "Test your understanding of typing React state with TypeScript",
  passPercentage: 60,
  lessonId: 2,
  contentSlug: "typing-state",
  questions: [
    {
      question: "How do you specify the type for useState in TypeScript?",
      options: [
        "useState(type: string)",
        "useState<Type>(initialValue)",
        "useState[Type]",
        "useState: Type"
      ],
      correct: 1
    },
    {
      question: "What happens if you initialize useState with a value but no type?",
      options: [
        "TypeScript throws an error",
        "TypeScript infers the type from the initial value",
        "The state is typed as 'any'",
        "You cannot use useState without explicit typing"
      ],
      correct: 1
    },
    {
      question: "Which of the following correctly types a state that can be a number or null?",
      options: [
        "useState<number>(null)",
        "useState<number | null>(null)",
        "useState<number?>(null)",
        "useState<number | undefined>(null)"
      ],
      correct: 1
    },
    {
      question: "How do you type a state that holds an array of user objects?",
      options: [
        "useState<User>([])",
        "useState<User[]>([])",
        "useState<Array<User>>([])",
        "useState<List<User>>([])"
      ],
      correct: 1
    },
    {
      question: "What is a union type and when is it useful for state?",
      options: [
        "A type that combines multiple values with &",
        "A type that can be one of several specific types, useful for state like 'loading' | 'error' | 'success'",
        "A type that merges two interfaces",
        "A type that extends another type"
      ],
      correct: 1
    }
  ]
};

export default function TypingStateQuiz() {
  return <QuizTemplate data={typingStateQuiz} />;
}
