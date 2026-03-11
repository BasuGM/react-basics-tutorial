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

const listsKeysQuiz: QuizData = {
  lessonSlug: "jsx-rendering/lists-keys",
  lessonTitle: "Lists & Keys Quiz",
  description: "Test your understanding of rendering lists and using keys in React",
  passPercentage: 60,
  lessonId: 3,
  contentSlug: "lists-keys",
  questions: [
    {
      question: "Why are keys important when rendering lists in React?",
      options: [
        "They make the code look cleaner",
        "They help React identify which items have changed",
        "They are required by JavaScript",
        "They improve the styling of lists"
      ],
      correct: 1
    },
    {
      question: "What is the best source for a key value?",
      options: [
        "The array index",
        "A random number",
        "A unique ID from your data",
        "The item's position in the list"
      ],
      correct: 2
    },
    {
      question: "Why shouldn't you use array index as a key?",
      options: [
        "It causes syntax errors",
        "It makes the code slower",
        "It causes bugs when the list order changes",
        "It's not compatible with React"
      ],
      correct: 2
    },
    {
      question: "What function is commonly used to render lists in React?",
      options: [
        "filter()",
        "map()",
        "reduce()",
        "forEach()"
      ],
      correct: 1
    },
    {
      question: "What happens if you don't provide keys when rendering a list?",
      options: [
        "The code will throw an error",
        "React will use index as key automatically",
        "Component state may be lost and lists may render incorrectly",
        "The list won't render at all"
      ],
      correct: 2
    }
  ]
};

export default function ListsKeysQuiz() {
  return <QuizTemplate data={listsKeysQuiz} />;
}
