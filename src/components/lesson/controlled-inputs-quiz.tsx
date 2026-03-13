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

const controlledInputsQuiz: QuizData = {
  lessonSlug: "state-events/controlled-inputs",
  lessonTitle: "Controlled Inputs Quiz",
  description: "Test your understanding of controlled form inputs in React",
  passPercentage: 60,
  lessonId: 6,
  contentSlug: "controlled-inputs",
  questions: [
    {
      question: "What makes an input 'controlled' in React?",
      options: [
        "It has an onChange handler",
        "Its value is managed by React state",
        "It's inside a form element",
        "It has validation logic"
      ],
      correct: 1
    },
    {
      question: "What two attributes are required for a controlled text input?",
      options: [
        "name and id",
        "value and onChange",
        "defaultValue and onChange",
        "data-value and onInput"
      ],
      correct: 1
    },
    {
      question: "How do you get the value from a controlled input in the onChange handler?",
      options: [
        "this.state.value",
        "event.value",
        "event.target.value",
        "event.currentTarget.value"
      ],
      correct: 2
    },
    {
      question: "For a controlled checkbox, which attribute replaces 'value'?",
      options: [
        "value",
        "selected",
        "checked",
        "active"
      ],
      correct: 2
    },
    {
      question: "What is the benefit of controlled inputs for form validation?",
      options: [
        "Validation happens automatically",
        "You can validate and update state in real-time as the user types",
        "You don't need to validate at all",
        "Validation is only done on form submission"
      ],
      correct: 1
    }
  ]
};

export default function ControlledInputsQuiz() {
  return <QuizTemplate data={controlledInputsQuiz} />;
}
