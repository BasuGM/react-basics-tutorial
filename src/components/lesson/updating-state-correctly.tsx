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
          Updating state correctly is crucial for building reliable React applications.
          React has specific rules for state updates that you must follow to ensure your components behave predictably.
        </p>
        <ul>
          <li><strong>Never mutate state directly</strong> - always create new objects or arrays</li>
          <li><strong>State updates are asynchronous</strong> - use functional updates when needed</li>
          <li><strong>State updates may be batched</strong> - React optimizes multiple updates</li>
          <li>React uses object identity to detect changes, not deep comparisons</li>
        </ul>
      </>
    )
  },
  {
    title: "The Golden Rule: Never Mutate State",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Never modify state directly. Always create new objects or arrays when updating state.
        </p>
        <CodeBlock
          lines={[
            '// WRONG: Mutating state directly',
            'const [user, setUser] = useState({ name: "John", age: 30 });',
            'user.age = 31; // Don\'t do this!',
            '',
            '// CORRECT: Create a new object',
            'setUser({ ...user, age: 31 });',
            '',
            '// WRONG: Mutating arrays',
            'const [items, setItems] = useState([1, 2, 3]);',
            'items.push(4); // Don\'t do this!',
            '',
            '// CORRECT: Create a new array',
            'setItems([...items, 4]);'
          ]}
        />
      </>
    )
  },
  {
    title: "State Updates Are Asynchronous",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          State updates don't happen immediately. React batches updates for performance.
          Don't rely on state being updated right after calling the setter function.
        </p>
        <CodeBlock
          lines={[
            'const [count, setCount] = useState(0);',
            '',
            'const handleClick = () => {',
            '  setCount(count + 1);',
            '  console.log(count); // Still logs 0 (state not updated yet)',
            '};',
            '',
            '// If you need the new value, use a functional update:',
            'const handleClick = () => {',
            '  setCount(prevCount => {',
            '    const newCount = prevCount + 1;',
            '    console.log("New count:", newCount); // Logs the new value',
            '    return newCount;',
            '  });',
            '};'
          ]}
        />
      </>
    )
  },
  {
    title: "Functional Updates",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Use functional updates when your new state depends on the previous state.
          This guarantees you have the correct previous value, even with async updates.
        </p>
        <CodeBlock
          lines={[
            '// GOOD: Direct update when new state is independent',
            'setEmail("user@example.com");',
            '',
            '// BETTER: Functional update when depending on previous state',
            'setCount(prevCount => prevCount + 1);',
            '',
            '// With objects',
            'setUser(prevUser => ({',
            '  ...prevUser,',
            '  name: "Jane",',
            '  lastUpdated: new Date()',
            '}));'
          ]}
        />
      </>
    )
  },
  {
    title: "Immutable Array Operations",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          When working with arrays, use methods that create new arrays instead of mutating the original.
        </p>
        <CodeBlock
          lines={[
            'const [items, setItems] = useState([1, 2, 3]);',
            '',
            '// Add to array',
            'setItems([...items, 4]); // or items.concat(4)',
            '',
            '// Remove from array',
            'setItems(items.filter(item => item !== 2));',
            '',
            '// Update specific item',
            'setItems(items.map(item => item === 2 ? 20 : item));',
            '',
            '// Insert at specific position',
            'setItems([...items.slice(0, 1), 99, ...items.slice(1)]);'
          ]}
        />
      </>
    )
  },
  {
    title: "Best Practices",
    content: (
      <ul>
        <li>Always create new objects/arrays when updating state - never mutate directly</li>
        <li>Use functional updates when new state depends on previous state</li>
        <li>Don't rely on state being updated immediately after calling the setter</li>
        <li>For complex state, consider using useReducer for better control</li>
        <li>Use the spread operator (<code>...</code>) to create copies of objects and arrays</li>
        <li>Keep state as simple as possible to reduce update complexity</li>
      </ul>
    )
  }
];

export default function UpdatingStateCorrectlyPage() {
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
            <h1 className="text-3xl font-bold tracking-tight">Updating State Correctly</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Best practices for managing state updates in React
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
          quizLink="/lesson/state-events/updating-state-correctly/quiz"
          lessonId={6}
          contentSlug="updating-state-correctly"
        />
      </div>
    </div>
  );
}
