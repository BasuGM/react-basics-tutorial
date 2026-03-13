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

const stateImmutabilityQuiz: QuizData = {
  lessonSlug: "state-events/state-immutability",
  lessonTitle: "State Immutability Quiz",
  description: "Test your understanding of immutability in React state",
  passPercentage: 60,
  lessonId: 6,
  contentSlug: "state-immutability",
  questions: [
    {
      question: "Why is immutability important in React state?",
      options: [
        "It makes code run faster",
        "React uses object identity to detect changes; immutability ensures proper re-renders",
        "It's required by the JavaScript language",
        "It prevents memory leaks"
      ],
      correct: 1
    },
    {
      question: "What happens when you mutate state directly?",
      options: [
        "React throws an error immediately",
        "The change happens but React may not detect it and won't re-render",
        "Nothing happens at all",
        "React automatically converts it to an immutable update"
      ],
      correct: 1
    },
    {
      question: "What is the correct way to update a property in a state object?",
      options: [
        "user.name = 'Jane'; setUser(user);",
        "setUser({ ...user, name: 'Jane' });",
        "setUser(user); user.name = 'Jane';",
        "user.name = 'Jane'; // No setter needed"
      ],
      correct: 1
    },
    {
      question: "When updating nested objects, what principle must you follow?",
      options: [
        "You don't need to create new objects for nested properties",
        "You must create new objects at each level of nesting",
        "You can mutate nested objects as long as the root object is new",
        "Nested objects are automatically immutable"
      ],
      correct: 1
    },
    {
      question: "Which array method should you use to add an item immutably?",
      options: [
        "push()",
        "[...array, item] or array.concat(item)",
        "splice()",
        "Array.prototype.push() is immutable in React"
      ],
      correct: 1
    }
  ]
};

export default function StateImmutabilityQuiz() {
  return <QuizTemplate data={stateImmutabilityQuiz} />;
}
