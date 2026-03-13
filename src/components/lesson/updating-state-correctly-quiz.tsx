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

const updatingStateCorrectlyQuiz: QuizData = {
  lessonSlug: "state-events/updating-state-correctly",
  lessonTitle: "Updating State Correctly Quiz",
  description: "Test your understanding of proper state update patterns in React",
  passPercentage: 60,
  lessonId: 6,
  contentSlug: "updating-state-correctly",
  questions: [
    {
      question: "Why shouldn't you mutate state directly?",
      options: [
        "It's not allowed by React syntax",
        "React won't detect the change and won't re-render",
        "It causes memory leaks",
        "It's slower than using setState"
      ],
      correct: 1
    },
    {
      question: "What's the correct way to add a property to a state object?",
      options: [
        "state.newProp = value;",
        "setState(state.newProp = value);",
        "setState({ ...state, newProp: value });",
        "setState(state) with state.newProp = value"
      ],
      correct: 2
    },
    {
      question: "When should you use functional updates (prev => ...)?",
      options: [
        "Always, for every state update",
        "When the new state depends on the previous state",
        "Only for objects, not primitives",
        "Never, it's deprecated"
      ],
      correct: 1
    },
    {
      question: "What is true about React state updates?",
      options: [
        "They happen immediately and synchronously",
        "They're asynchronous and may be batched",
        "They only update when the component re-renders",
        "State updates pause all other code execution"
      ],
      correct: 1
    },
    {
      question: "How do you correctly add an item to an array in state?",
      options: [
        "items.push(newItem); setState(items);",
        "setState([...items, newItem]);",
        "setState(items.concat(newItem));",
        "Both B and C are correct"
      ],
      correct: 3
    }
  ]
};

export default function UpdatingStateCorrectlyQuiz() {
  return <QuizTemplate data={updatingStateCorrectlyQuiz} />;
}
