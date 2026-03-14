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

const submissionFlowQuiz: QuizData = {
  lessonSlug: "forms-basics/submission-flow",
  lessonTitle: "Submission Flow Quiz",
  description: "Test your understanding of form submission in React",
  passPercentage: 60,
  lessonId: 10,
  contentSlug: "submission-flow",
  questions: [
    {
      question: "Why should you call preventDefault() on form submission?",
      options: [
        "To improve performance",
        "To stop the browser's default form submission behavior",
        "To validate the form data",
        "To send data to the server"
      ],
      correct: 1
    },
    {
      question: "When should you validate form data?",
      options: [
        "Only on the server",
        "Only on the client",
        "Before sending to the server",
        "After receiving the server response"
      ],
      correct: 2
    },
    {
      question: "What should a submit button do while the form is being submitted?",
      options: [
        "Enable all inputs",
        "Show a loading indicator and be disabled",
        "Submit the form again",
        "Clear all fields"
      ],
      correct: 1
    },
    {
      question: "What should you do after a successful form submission?",
      options: [
        "Reload the entire page",
        "Reset the form and show a success message",
        "Do nothing",
        "Disable the form permanently"
      ],
      correct: 1
    },
    {
      question: "Is client-side form validation enough for security?",
      options: [
        "Yes, it's completely secure",
        "No, you must also validate on the server",
        "Only for simple forms",
        "Only if you use HTTPS"
      ],
      correct: 1
    }
  ]
};

export default function SubmissionFlowQuiz() {
  return <QuizTemplate data={submissionFlowQuiz} />;
}
