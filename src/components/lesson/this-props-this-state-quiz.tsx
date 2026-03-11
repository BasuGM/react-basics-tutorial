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

const thisPropsThisStateQuiz: QuizData = {
  lessonSlug: "class-components-legacy/this-props-this-state",
  lessonTitle: "this.props & this.state Quiz",
  description: "Test your understanding of props and state in class components",
  passPercentage: 60,
  lessonId: 5,
  contentSlug: "this-props-this-state",
  questions: [
    {
      question: "How do you access props in a class component?",
      options: [
        "props.name",
        "this.props.name",
        "state.props.name",
        "this.name"
      ],
      correct: 1
    },
    {
      question: "How do you access state in a class component?",
      options: [
        "state.count",
        "this.state.count",
        "props.state.count",
        "this[state].count"
      ],
      correct: 1
    },
    {
      question: "Where should you initialize state in a class component?",
      options: [
        "In the render method",
        "In the constructor",
        "At the top of the file",
        "Using props"
      ],
      correct: 1
    },
    {
      question: "Can you directly modify props in a class component?",
      options: [
        "Yes, anytime",
        "No, props are immutable",
        "Only in the constructor",
        "Only if using setState"
      ],
      correct: 1
    },
    {
      question: "How do you update state in a class component?",
      options: [
        "Direct assignment: this.state.count = 5",
        "Using this.setState()",
        "Using props",
        "Modifying the constructor"
      ],
      correct: 1
    }
  ]
};

export default function ThisPropsThisStateQuiz() {
  return <QuizTemplate data={thisPropsThisStateQuiz} />;
}
