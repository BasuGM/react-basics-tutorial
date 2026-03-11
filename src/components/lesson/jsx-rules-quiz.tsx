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

const jsxRulesQuiz: QuizData = {
  lessonSlug: "jsx-rendering/jsx-rules",
  lessonTitle: "JSX Rules Quiz",
  description: "Test your understanding of JSX syntax rules",
  passPercentage: 60,
  lessonId: 3,
  contentSlug: "jsx-rules",
  questions: [
    {
      question: "How many root elements can a JSX expression return?",
      options: [
        "As many as you want",
        "Only one",
        "Up to three",
        "It depends on the component"
      ],
      correct: 1
    },
    {
      question: "Which of the following is the correct way to write a self-closing tag in JSX?",
      options: [
        "<img src='image.jpg'>",
        "<img src='image.jpg'></img>",
        "<img src='image.jpg' />",
        "<Image src='image.jpg'>"
      ],
      correct: 2
    },
    {
      question: "In JSX, what do you use instead of the 'class' attribute?",
      options: [
        "css",
        "styles",
        "className",
        "styleClass"
      ],
      correct: 2
    },
    {
      question: "Which is the correct camelCase event handler?",
      options: [
        "onclick",
        "on-click",
        "onClick",
        "onclicked"
      ],
      correct: 2
    },
    {
      question: "What is used to wrap multiple elements without adding an extra DOM node?",
      options: [
        "<div></div>",
        "<container></container>",
        "<> </>",
        "<wrapper></wrapper>"
      ],
      correct: 2
    }
  ]
};

export default function JSXRulesQuiz() {
  return <QuizTemplate data={jsxRulesQuiz} />;
}
