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

const eventHandlingQuiz: QuizData = {
  lessonSlug: "state-events/event-handling",
  lessonTitle: "Event Handling Quiz",
  description: "Test your understanding of event handling in React",
  passPercentage: 60,
  lessonId: 6,
  contentSlug: "event-handling",
  questions: [
    {
      question: "How do you name event handlers in React?",
      options: [
        "Using lowercase names like onclick, onchange",
        "Using camelCase names like onClick, onChange",
        "Using uppercase names like ONCLICK, ONCHANGE",
        "Any naming convention works in React"
      ],
      correct: 1
    },
    {
      question: "What's the correct way to attach a click handler to a button?",
      options: [
        "<button onclick={handleClick()}>Click</button>",
        "<button onClick={handleClick()}>Click</button>",
        "<button onClick={handleClick}>Click</button>",
        "<button on-click={handleClick}>Click</button>"
      ],
      correct: 2
    },
    {
      question: "How do you pass arguments to an event handler?",
      options: [
        "<button onClick={handleClick(id)}>Click</button>",
        "<button onClick={() => handleClick(id)}>Click</button>",
        "<button onClick={handleClick} data-id={id}>Click</button>",
        "You can't pass arguments in React event handlers"
      ],
      correct: 1
    },
    {
      question: "What does e.preventDefault() do in an event handler?",
      options: [
        "Stops the event from being handled",
        "Prevents the event from bubbling up",
        "Stops the browser's default behavior for that event",
        "Clears the event object"
      ],
      correct: 2
    },
    {
      question: "In React, is the event object a native browser event?",
      options: [
        "Yes, it's always the native browser event",
        "No, React uses a synthetic event system wrapping native events",
        "It depends on the type of event",
        "React doesn't use event objects"
      ],
      correct: 1
    }
  ]
};

export default function EventHandlingQuiz() {
  return <QuizTemplate data={eventHandlingQuiz} />;
}
