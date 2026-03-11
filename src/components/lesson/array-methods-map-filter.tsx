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
          Array methods like <code>map()</code>, <code>filter()</code>, and others are essential for transforming and manipulating arrays in JavaScript.
          They provide a functional programming approach to working with collections of data.
        </p>
        <ul>
          <li><strong>map()</strong>: Transform each element and return a new array</li>
          <li><strong>filter()</strong>: Select elements that match a condition</li>
          <li><strong>Non-mutating</strong>: These methods return new arrays without modifying the original</li>
        </ul>
      </>
    )
  },
  {
    title: "The map() Method",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          <code>map()</code> transforms each element in an array using a function and returns a new array with the results.
        </p>
        <CodeBlock
          lines={[
            '// Basic example: double each number',
            'const numbers = [1, 2, 3, 4, 5];',
            'const doubled = numbers.map(num => num * 2);',
            'console.log(doubled); // [2, 4, 6, 8, 10]',
            '',
            '// Transform objects',
            'const users = [',
            '  { name: "Alice", age: 30 },',
            '  { name: "Bob", age: 25 }',
            '];',
            'const names = users.map(user => user.name);',
            'console.log(names); // ["Alice", "Bob"]',
            '',
            '// Using index and array parameters',
            'const indexed = [10, 20, 30].map((num, index) => ({',
            '  value: num,',
            '  position: index',
            '}));',
            '// [{ value: 10, position: 0 }, { value: 20, position: 1 }, ...]'
          ]}
        />
      </>
    )
  },
  {
    title: "The filter() Method",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          <code>filter()</code> creates a new array with only elements that pass a test condition.
        </p>
        <CodeBlock
          lines={[
            '// Filter numbers greater than 3',
            'const numbers = [1, 2, 3, 4, 5];',
            'const largeNums = numbers.filter(num => num > 3);',
            'console.log(largeNums); // [4, 5]',
            '',
            '// Filter objects by property',
            'const users = [',
            '  { name: "Alice", active: true },',
            '  { name: "Bob", active: false },',
            '  { name: "Charlie", active: true }',
            '];',
            'const activeUsers = users.filter(user => user.active);',
            '// [{ name: "Alice", active: true }, { name: "Charlie", active: true }]',
            '',
            '// Filter strings',
            'const words = ["apple", "banana", "apricot", "cherry"];',
            'const startsWithA = words.filter(word => word.startsWith("a"));',
            'console.log(startsWithA); // ["apple", "apricot"]'
          ]}
        />
      </>
    )
  },
  {
    title: "Combining map() and filter()",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Chain <code>map()</code> and <code>filter()</code> together to transform and select data in one operation.
        </p>
        <CodeBlock
          lines={[
            '// Get names of users over 25',
            'const users = [',
            '  { name: "Alice", age: 30 },',
            '  { name: "Bob", age: 22 },',
            '  { name: "Charlie", age: 28 }',
            '];',
            '',
            'const olderUserNames = users',
            '  .filter(user => user.age > 25)',
            '  .map(user => user.name);',
            'console.log(olderUserNames); // ["Alice", "Charlie"]',
            '',
            '// Get doubled even numbers',
            'const numbers = [1, 2, 3, 4, 5, 6];',
            'const doubled = numbers',
            '  .filter(num => num % 2 === 0)',
            '  .map(num => num * 2);',
            'console.log(doubled); // [4, 8, 12]'
          ]}
        />
      </>
    )
  },
  {
    title: "Other Useful Array Methods",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          JavaScript provides additional array methods for common operations.
        </p>
        <CodeBlock
          lines={[
            '// reduce() - accumulate values',
            'const numbers = [1, 2, 3, 4, 5];',
            'const sum = numbers.reduce((acc, num) => acc + num, 0);',
            'console.log(sum); // 15',
            '',
            '// find() - get first matching element',
            'const users = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];',
            'const user = users.find(u => u.id === 2);',
            'console.log(user); // { id: 2, name: "Bob" }',
            '',
            '// some() - check if any element passes test',
            'const hasEven = [1, 3, 5, 8].some(num => num % 2 === 0);',
            'console.log(hasEven); // true',
            '',
            '// every() - check if all elements pass test',
            'const allPositive = [1, 2, 3].every(num => num > 0);',
            'console.log(allPositive); // true'
          ]}
        />
      </>
    )
  },
  {
    title: "Array Methods in React",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Array methods are crucial for rendering lists and transforming data in React components.
        </p>
        <CodeBlock
          lines={[
            '// Rendering a list with map()',
            'function UserList({ users }) {',
            '  return (',
            '    <ul>',
            '      {users.map(user => (',
            '        <li key={user.id}>{user.name}</li>',
            '      ))}',
            '    </ul>',
            '  );',
            '}',
            '',
            '// Filter and render',
            'const [selectedRole, setRole] = useState("all");',
            'const filtered = selectedRole === "all"',
            '  ? users',
            '  : users.filter(u => u.role === selectedRole);',
            '',
            'return (',
            '  <div>{filtered.map(u => <UserCard key={u.id} {...u} />)}</div>',
            ');'
          ]}
        />
      </>
    )
  },
  {
    title: "Best Practices",
    content: (
      <ul>
        <li>Use <code>map()</code> to transform data for rendering lists in React</li>
        <li>Always provide a unique <code>key</code> prop when rendering lists with <code>map()</code></li>
        <li>Chain <code>filter()</code> and <code>map()</code> for complex transformations</li>
        <li>Array methods return new arrays - they don't mutate the original</li>
        <li>Use <code>filter()</code> then <code>map()</code> rather than nested loops</li>
        <li>Consider performance when chaining multiple array methods on large arrays</li>
      </ul>
    )
  }
];

export default function ArrayMethodsMapFilterPage() {
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
            <h1 className="text-3xl font-bold tracking-tight">Array Methods: map() and filter()</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Master essential array transformation and filtering techniques
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
          quizLink="/lesson/javascript-basics-for-react/array-methods-map-filter/quiz"
          lessonId={1}
          contentSlug="array-methods-map-filter"
        />
      </div>
    </div>
  );
}
