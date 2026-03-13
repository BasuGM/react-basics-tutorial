'use client'

import { ArrowLeft, Code, BookOpen } from "lucide-react";
import Link from "next/link";
import LessonSection from "../common/LessonSection";
import CodeBlock from "../common/CodeBlock";
import LessonQuizCTA from "../common/LessonQuizCTA";

const sections = [
  {
    title: "Introduction",
    icon: BookOpen,
    content: (
      <>
        <p>
          <code>useState</code> is the most important React Hook for managing state in functional components.
          It allows you to add state to components without writing a class.
        </p>
        <ul>
          <li>Returns an array with two elements: the current state value and a function to update it</li>
          <li>Can be called multiple times to manage different state values</li>
          <li>State updates trigger re-renders of the component</li>
        </ul>
      </>
    )
  },
  {
    title: "Basic useState Usage",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          The basic syntax for <code>useState</code> is simple: call the hook and destructure the state value and setter function.
        </p>
        <CodeBlock
          lines={[
            'import { useState } from "react";',
            '',
            'export default function Counter() {',
            '  const [count, setCount] = useState(0);',
            '',
            '  return (',
            '    <div>',
            '      <p>Count: {count}</p>',
            '      <button onClick={() => setCount(count + 1)}>',
            '        Increment',
            '      </button>',
            '    </div>',
            '  );',
            '}'
          ]}
        />
      </>
    )
  },
  {
    title: "Understanding the Setter Function",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          The setter function (e.g., <code>setCount</code>) updates the state and triggers a re-render.
          You can pass a new value or a function that receives the previous state.
        </p>
        <CodeBlock
          lines={[
            'const [count, setCount] = useState(0);',
            '',
            '// Direct value update',
            'setCount(5);',
            '',
            '// Functional update (useful for updates based on previous state)',
            'setCount(prevCount => prevCount + 1);'
          ]}
        />
      </>
    )
  },
  {
    title: "Multiple State Variables",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          You can call <code>useState</code> multiple times to manage different pieces of state.
        </p>
        <CodeBlock
          lines={[
            'export default function Form() {',
            '  const [name, setName] = useState("");',
            '  const [email, setEmail] = useState("");',
            '  const [isSubmitted, setIsSubmitted] = useState(false);',
            '',
            '  const handleSubmit = () => {',
            '    // Process form',
            '    setIsSubmitted(true);',
            '  };',
            '',
            '  return ( /* JSX */ );',
            '}'
          ]}
        />
      </>
    )
  },
  {
    title: "State with Objects and Arrays",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          When state is an object or array, remember to create a new object/array rather than mutating the existing one.
        </p>
        <CodeBlock
          lines={[
            'const [user, setUser] = useState({ name: "", age: 0 });',
            '',
            '// Wrong: mutating directly',
            '// user.name = "John"; // Don\'t do this!',
            '',
            '// Correct: create a new object',
            'setUser({ ...user, name: "John" });',
            '',
            'const [items, setItems] = useState([]);',
            '',
            '// Add item',
            'setItems([...items, newItem]);',
            '',
            '// Remove item',
            'setItems(items.filter(item => item.id !== idToRemove));'
          ]}
        />
      </>
    )
  },
  {
    title: "Best Practices",
    content: (
      <ul>
        <li>Use functional updates when new state depends on previous state</li>
        <li>Keep state as simple as possible - split complex state into multiple useState calls</li>
        <li>Never mutate state directly - always create new objects/arrays</li>
        <li>State updates are asynchronous - don't rely on state being updated immediately</li>
        <li>Use <code>useCallback</code> if setter functions are passed to child components</li>
      </ul>
    )
  }
];

export default function UseStatePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Navigation */}
        <div className="mb-6">
          <Link
            href="/lesson/state-events"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to State & Events
          </Link>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Code className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold tracking-tight">useState Hook</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Managing component state in functional components
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <LessonSection key={index} title={section.title} icon={section.icon}>
              {section.content}
            </LessonSection>
          ))}
        </div>

        <LessonQuizCTA
          title="Ready to test your understanding?"
          subtitle="5 questions • 2 min"
          quizLink="/lesson/state-events/use-state/quiz"
          lessonId={6}
          contentSlug="use-state"
        />
      </div>
    </div>
  );
}
