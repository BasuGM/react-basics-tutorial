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
          The spread operator (<code>...</code>) in JavaScript allows an iterable (like an array or string) to be expanded in places where zero or more elements are expected.
          It's a powerful feature for working with arrays, objects, and function arguments.
        </p>
        <ul>
          <li><strong>Expand arrays</strong>: Copy or merge arrays easily</li>
          <li><strong>Expand objects</strong>: Shallow copy or merge objects</li>
          <li><strong>Function arguments</strong>: Pass array elements as individual arguments</li>
        </ul>
      </>
    )
  },
  {
    title: "Spread with Arrays",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          The spread operator allows you to copy and merge arrays efficiently.
        </p>
        <CodeBlock
          lines={[
            '// Copying an array',
            'const original = [1, 2, 3];',
            'const copy = [...original];',
            'console.log(copy); // [1, 2, 3]',
            '',
            '// Merging arrays',
            'const arr1 = [1, 2, 3];',
            'const arr2 = [4, 5, 6];',
            'const merged = [...arr1, ...arr2];',
            'console.log(merged); // [1, 2, 3, 4, 5, 6]',
            '',
            '// Adding elements while spreading',
            'const numbers = [1, 2, 3];',
            'const withExtra = [0, ...numbers, 4, 5];',
            'console.log(withExtra); // [0, 1, 2, 3, 4, 5]'
          ]}
        />
      </>
    )
  },
  {
    title: "Spread with Objects",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Use the spread operator to copy and merge objects while avoiding mutations.
        </p>
        <CodeBlock
          lines={[
            '// Copying an object',
            'const user = { name: "Alice", age: 30 };',
            'const userCopy = { ...user };',
            'console.log(userCopy); // { name: "Alice", age: 30 }',
            '',
            '// Merging objects',
            'const defaults = { theme: "light", lang: "en" };',
            'const settings = { theme: "dark" };',
            'const merged = { ...defaults, ...settings };',
            'console.log(merged); // { theme: "dark", lang: "en" }',
            '',
            '// Adding properties while spreading',
            'const person = { name: "Bob", age: 25 };',
            'const updated = { ...person, city: "NYC", age: 26 };',
            'console.log(updated); // { name: "Bob", age: 26, city: "NYC" }'
          ]}
        />
      </>
    )
  },
  {
    title: "Spread in Function Calls",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Pass array elements as individual function arguments using the spread operator.
        </p>
        <CodeBlock
          lines={[
            '// Function that takes multiple arguments',
            'function sum(a, b, c) {',
            '  return a + b + c;',
            '}',
            '',
            '// Using spread to pass array elements as arguments',
            'const numbers = [1, 2, 3];',
            'console.log(sum(...numbers)); // 6',
            '',
            '// Math functions with spread',
            'const values = [10, 50, 30, 20];',
            'console.log(Math.max(...values)); // 50',
            'console.log(Math.min(...values)); // 10'
          ]}
        />
      </>
    )
  },
  {
    title: "Spread vs Rest Operator",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Both use <code>...</code> syntax but serve different purposes. Spread expands values, rest collects values.
        </p>
        <CodeBlock
          lines={[
            '// SPREAD: Expanding arrays/objects',
            'const arr = [1, 2, 3];',
            'const expanded = [...arr, 4, 5]; // 1, 2, 3, 4, 5',
            '',
            '// REST: Collecting remaining arguments/elements',
            'function sum(...numbers) { // numbers is an array',
            '  return numbers.reduce((a, b) => a + b, 0);',
            '}',
            'console.log(sum(1, 2, 3, 4)); // 10',
            '',
            'const [first, ...rest] = [1, 2, 3, 4];',
            'console.log(first); // 1',
            'console.log(rest);  // [2, 3, 4]'
          ]}
        />
      </>
    )
  },
  {
    title: "Common Use Cases in React",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          The spread operator is essential for immutable state updates in React.
        </p>
        <CodeBlock
          lines={[
            '// Adding to state array (immutable)',
            'const [items, setItems] = useState([]);',
            'const addItem = (item) => setItems([...items, item]);',
            '',
            '// Updating state object (immutable)',
            'const [user, setUser] = useState({ name: "", age: 0 });',
            'const updateUser = (updates) => setUser({ ...user, ...updates });',
            'updateUser({ name: "John" }); // { name: "John", age: 0 }',
            '',
            '// Passing props to child components',
            'const props = { id: 1, title: "Lesson" };',
            '<LessonCard {...props} />'
          ]}
        />
      </>
    )
  },
  {
    title: "Best Practices",
    content: (
      <ul>
        <li>Use spread operator for shallow copies of arrays and objects</li>
        <li>Spread is ideal for avoiding mutations in React state updates</li>
        <li>Be careful with nested objects - spread only copies the first level</li>
        <li>Use spread when merging multiple arrays or objects</li>
        <li>Spread is cleaner than <code>concat()</code> or <code>Object.assign()</code></li>
        <li>Don't confuse spread operator with rest parameters - they're opposite operations</li>
      </ul>
    )
  }
];

export default function SpreadOperatorPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Navigation */}
        <div className="mb-6">
          <Link
            href="/lesson/javascript-basics-for-react"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to JavaScript Basics
          </Link>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Code className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold tracking-tight">Spread Operator</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Master the spread operator for arrays, objects, and function arguments
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
          quizLink="/lesson/javascript-basics-for-react/spread-operator/quiz"
          lessonId={1}
          contentSlug="spread-operator"
        />
      </div>
    </div>
  );
}
