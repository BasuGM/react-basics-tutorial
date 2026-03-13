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
          State immutability is a core principle in React that means never directly changing state values.
          Instead, you create new objects or arrays when state needs to change.
        </p>
        <ul>
          <li><strong>Immutability</strong>: Once created, data cannot be changed</li>
          <li>React relies on object identity to detect changes and trigger re-renders</li>
          <li>Immutable updates prevent subtle bugs and make your code more predictable</li>
          <li>Immutability enables React to optimize performance through memoization</li>
        </ul>
      </>
    )
  },
  {
    title: "Why Immutability Matters",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          React uses object identity (reference comparison) to detect if state has changed. If you mutate an object directly,
          the reference stays the same and React won't detect the change.
        </p>
        <CodeBlock
          lines={[
            '// WRONG: Mutation - React won\'t detect this change',
            'const [user, setUser] = useState({ name: "John", age: 30 });',
            '',
            'const updateUser = () => {',
            '  user.age = 31; // ❌ Mutating directly',
            '  setUser(user); // React sees same reference, no re-render',
            '};',
            '',
            '// CORRECT: Create new object - React detects the change',
            'const updateUser = () => {',
            '  setUser({ ...user, age: 31 }); // ✓ New object created',
            '};'
          ]}
        />
      </>
    )
  },
  {
    title: "Immutable Object Updates",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          The spread operator (<code>...</code>) is the most common way to create new objects while preserving immutability.
        </p>
        <CodeBlock
          lines={[
            'const [user, setUser] = useState({ name: "John", age: 30 });',
            '',
            '// Update one property',
            'setUser({ ...user, age: 31 });',
            '',
            '// Update multiple properties',
            'setUser({ ...user, age: 31, city: "New York" });',
            '',
            '// Add new property',
            'setUser({ ...user, email: "john@example.com" });',
            '',
            '// With nested objects',
            'const [state, setState] = useState({',
            '  user: { name: "John" },',
            '  settings: { theme: "dark" }',
            '});',
            '',
            'setState({',
            '  ...state,',
            '  user: { ...state.user, name: "Jane" }',
            '});'
          ]}
        />
      </>
    )
  },
  {
    title: "Immutable Array Updates",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Use array methods that create new arrays rather than methods that mutate the original.
        </p>
        <CodeBlock
          lines={[
            'const [items, setItems] = useState([1, 2, 3]);',
            '',
            '// WRONG mutations to avoid:',
            'items.push(4); // ❌ push mutates',
            'items[0] = 10; // ❌ assignment mutates',
            'items.sort(); // ❌ sort mutates',
            'items.reverse(); // ❌ reverse mutates',
            '',
            '// CORRECT immutable operations:',
            'setItems([...items, 4]); // ✓ Add to end',
            'setItems(items.concat(4)); // ✓ Also adds to end',
            'setItems([0, ...items]); // ✓ Add to start',
            'setItems(items.map((x, i) => i === 0 ? 10 : x)); // ✓ Update',
            'setItems(items.filter(x => x !== 2)); // ✓ Remove',
            'setItems([...items].sort()); // ✓ Sort copy'
          ]}
        />
      </>
    )
  },
  {
    title: "Common Immutability Patterns",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Learn patterns for common immutable operations in React state.
        </p>
        <CodeBlock
          lines={[
            '// Toggle a boolean in an object',
            'setUser({ ...user, isActive: !user.isActive });',
            '',
            '// Update nested list',
            'const [todos, setTodos] = useState([..]);',
            'setTodos(todos.map(todo =>',
            '  todo.id === id ? { ...todo, completed: true } : todo',
            '));',
            '',
            '// Add to nested object array',
            'setUser({',
            '  ...user,',
            '  posts: [...user.posts, newPost]',
            '});',
            '',
            '// Remove from nested array',
            'setUser({',
            '  ...user,',
            '  posts: user.posts.filter(post => post.id !== postId)',
            '});'
          ]}
        />
      </>
    )
  },
  {
    title: "Best Practices",
    content: (
      <ul>
        <li>Always create new objects/arrays when updating state - never mutate</li>
        <li>Use the spread operator for shallow copies: <code>&lbrace;...obj&rbrace;</code></li>
        <li>For nested immutability, spread at each level: <code>&lbrace;...obj, nested: &lbrace;...obj.nested, prop: val&rbrace;&rbrace;</code></li>
        <li>Use immutable array methods: map, filter, concat instead of push, pop, splice</li>
        <li>For complex state, consider useReducer to handle immutable updates more cleanly</li>
        <li>Immutability enables React's performance optimizations and prevents hard-to-find bugs</li>
      </ul>
    )
  }
];

export default function StateImmutabilityPage() {
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
            <h1 className="text-3xl font-bold tracking-tight">State Immutability</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Understanding and implementing immutable state updates in React
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
          quizLink="/lesson/state-events/state-immutability/quiz"
          lessonId={6}
          contentSlug="state-immutability"
        />
      </div>
    </div>
  );
}
