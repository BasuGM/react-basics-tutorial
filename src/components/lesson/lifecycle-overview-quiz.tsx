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

const lifecycleOverviewQuiz: QuizData = {
  lessonSlug: "class-components-legacy/lifecycle-overview",
  lessonTitle: "Lifecycle Overview Quiz",
  description: "Test your understanding of lifecycle methods in class components",
  passPercentage: 60,
  lessonId: 5,
  contentSlug: "lifecycle-overview",
  questions: [
    {
      question: "When is componentDidMount() called?",
      options: [
        "Before the component renders",
        "Immediately after the component is inserted into the DOM",
        "When the component is updated",
        "When the component is removed from the DOM"
      ],
      correct: 1
    },
    {
      question: "What is the best use case for componentDidMount()?",
      options: [
        "Rendering JSX",
        "Displaying props",
        "Fetching data from an API",
        "Updating state directly"
      ],
      correct: 2
    },
    {
      question: "When is componentWillUnmount() called?",
      options: [
        "Before the component is mounted",
        "When the component is updated",
        "Just before the component is removed from the DOM",
        "Every time render() is called"
      ],
      correct: 2
    },
    {
      question: "What should you do in componentWillUnmount()?",
      options: [
        "Fetch new data",
        "Update state",
        "Clean up side effects like timers and subscriptions",
        "Render the component"
      ],
      correct: 2
    },
    {
      question: "What is componentDidUpdate() used for?",
      options: [
        "Initial setup when the component mounts",
        "Responding to prop or state changes",
        "Removing the component",
        "Getting props from parent"
      ],
      correct: 1
    }
  ]
};

export default function LifecycleOverviewQuiz() {
  return <QuizTemplate data={lifecycleOverviewQuiz} />;
}
