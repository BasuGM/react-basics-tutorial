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

const measuringDomQuiz: QuizData = {
  lessonSlug: "refs-dom-access/measuring-dom",
  lessonTitle: "Measuring DOM Quiz",
  description: "Test your understanding of measuring DOM elements with refs",
  passPercentage: 60,
  lessonId: 11,
  contentSlug: "measuring-dom",
  questions: [
    {
      question: "Which property gives you the width of an element?",
      options: [
        "element.width",
        "element.offsetWidth",
        "element.clientWidth",
        "All of the above work the same"
      ],
      correct: 1
    },
    {
      question: "What does getBoundingClientRect() return?",
      options: [
        "Only the width and height",
        "Position relative to the entire page",
        "Position relative to the viewport",
        "Only scroll position"
      ],
      correct: 2
    },
    {
      question: "Which property tells you if an element has reached the bottom while scrolling?",
      options: [
        "scrollTop === scrollHeight",
        "scrollTop + clientHeight >= scrollHeight",
        "scrollTop === clientHeight",
        "scrollHeight === scrollTop"
      ],
      correct: 1
    },
    {
      question: "When should you measure a DOM element?",
      options: [
        "In the render method",
        "Directly in the component body",
        "In useEffect after the element is rendered",
        "In the constructor"
      ],
      correct: 2
    },
    {
      question: "What is a performance-friendly way to detect if an element is visible on screen?",
      options: [
        "Use getBoundingClientRect() on every scroll event",
        "Manually calculate scroll position",
        "Use Intersection Observer API",
        "Poll the element position every 100ms"
      ],
      correct: 2
    }
  ]
};

export default function MeasuringDomQuiz() {
  return <QuizTemplate data={measuringDomQuiz} />;
}
