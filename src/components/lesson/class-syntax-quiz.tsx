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

const classSyntaxQuiz: QuizData = {
  lessonSlug: "class-components-legacy/class-syntax",
  lessonTitle: "Class Syntax Quiz",
  description: "Test your understanding of React class component syntax",
  passPercentage: 60,
  lessonId: 5,
  contentSlug: "class-syntax",
  questions: [
    {
      question: "What do class components in React extend?",
      options: [
        "JavaScript classes directly",
        "React.Component",
        "React.Function",
        "React objects"
      ],
      correct: 1
    },
    {
      question: "How do you access props in a class component?",
      options: [
        "Using the props parameter",
        "Using this.props",
        "Using a useState hook",
        "Using props.this"
      ],
      correct: 1
    },
    {
      question: "What is the required method in a class component?",
      options: [
        "constructor()",
        "render()",
        "setState()",
        "componentDidMount()"
      ],
      correct: 1
    },
    {
      question: "How do you initialize state in a class component?",
      options: [
        "Using this.state = {...} in the constructor",
        "Using useState hook",
        "Using props",
        "In the render method"
      ],
      correct: 0
    },
    {
      question: "What must you call in the constructor before using 'this'?",
      options: [
        "this.initialize()",
        "this.setup()",
        "super(props)",
        "this.parent(props)"
      ],
      correct: 2
    }
  ]
};

export default function ClassSyntaxQuiz() {
  return <QuizTemplate data={classSyntaxQuiz} />;
}
