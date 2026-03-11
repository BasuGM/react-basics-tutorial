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

const renderQuiz: QuizData = {
  lessonSlug: "class-components-legacy/render",
  lessonTitle: "render() Method Quiz",
  description: "Test your understanding of the render method in class components",
  passPercentage: 60,
  lessonId: 5,
  contentSlug: "render",
  questions: [
    {
      question: "Is the render() method required in a class component?",
      options: [
        "No, it's optional",
        "Yes, it's the only required method",
        "Only if you use props",
        "Only if you use state"
      ],
      correct: 1
    },
    {
      question: "What should the render() method return?",
      options: [
        "A string",
        "An object",
        "JSX or null",
        "A component class"
      ],
      correct: 2
    },
    {
      question: "Can you call setState() inside render()?",
      options: [
        "Yes, anytime",
        "No, render should be pure",
        "Only on the first render",
        "Only if you use lifecycle methods"
      ],
      correct: 1
    },
    {
      question: "How do you access props inside the render method?",
      options: [
        "Using props directly",
        "Using this.props",
        "Using the props parameter",
        "Using useState"
      ],
      correct: 1
    },
    {
      question: "What does a pure function mean for render()?",
      options: [
        "No colors are allowed",
        "No side effects or state mutations",
        "No JSX allowed",
        "No conditionals allowed"
      ],
      correct: 1
    }
  ]
};

export default function RenderQuiz() {
  return <QuizTemplate data={renderQuiz} />;
}
