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
          Destructuring is a convenient way to extract values from objects and arrays in JavaScript (ES6+).
          It allows you to unpack values and assign them to variables in a single, concise statement.
        </p>
        <ul>
          <li><strong>Array destructuring</strong>: Extract values from arrays by position</li>
          <li><strong>Object destructuring</strong>: Extract properties from objects by name</li>
          <li><strong>Cleaner syntax</strong>: Reduces repetitive property/element access</li>
        </ul>
      </>
    )
  },
  {
    title: "Array Destructuring",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Extract values from arrays using square brackets.
        </p>
        <CodeBlock
          lines={[
            '// Without destructuring',
            'const colors = ["red", "green", "blue"];',
            'const first = colors[0];',
            'const second = colors[1];',
            '',
            '// With destructuring',
            'const [first, second, third] = ["red", "green", "blue"];',
            'console.log(first);  // "red"',
            'console.log(second); // "green"',
            'console.log(third);  // "blue"',
            '',
            '// Skip elements',
            'const [primary, , tertiary] = ["red", "green", "blue"];',
            'console.log(primary);  // "red"',
            'console.log(tertiary); // "blue"'
          ]}
        />
      </>
    )
  },
  {
    title: "Object Destructuring",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Extract properties from objects using curly braces.
        </p>
        <CodeBlock
          lines={[
            '// Without destructuring',
            'const person = { name: "Alice", age: 30, city: "NYC" };',
            'const name = person.name;',
            'const age = person.age;',
            '',
            '// With destructuring',
            'const { name, age, city } = person;',
            'console.log(name); // "Alice"',
            'console.log(age);  // 30',
            'console.log(city); // "NYC"',
            '',
            '// Rename properties',
            'const { name: fullName, age: years } = person;',
            'console.log(fullName); // "Alice"',
            'console.log(years);    // 30'
          ]}
        />
      </>
    )
  },
  {
    title: "Destructuring with Default Values",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Provide default values when properties might be undefined.
        </p>
        <CodeBlock
          lines={[
            '// Object destructuring with defaults',
            'const { name = "Unknown", age = 0, country = "USA" } = { name: "Bob" };',
            'console.log(name);    // "Bob"',
            'console.log(age);     // 0 (default)',
            'console.log(country); // "USA" (default)',
            '',
            '// Array destructuring with defaults',
            'const [first = "N/A", second = "N/A"] = ["orange"];',
            'console.log(first);  // "orange"',
            'console.log(second); // "N/A" (default)'
          ]}
        />
      </>
    )
  },
  {
    title: "Nested and Rest Destructuring",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Handle nested structures and collect remaining values using the rest operator.
        </p>
        <CodeBlock
          lines={[
            '// Nested destructuring',
            'const user = { name: "Charlie", address: { city: "LA", zip: "90001" } };',
            'const { name, address: { city } } = user;',
            'console.log(name); // "Charlie"',
            'console.log(city); // "LA"',
            '',
            '// Rest operator in arrays',
            'const [first, ...rest] = [1, 2, 3, 4, 5];',
            'console.log(first); // 1',
            'console.log(rest);  // [2, 3, 4, 5]',
            '',
            '// Rest operator in objects',
            'const { name, ...otherProps } = { name: "Dave", age: 25, city: "Boston" };',
            'console.log(name);       // "Dave"',
            'console.log(otherProps); // { age: 25, city: "Boston" }'
          ]}
        />
      </>
    )
  },
  {
    title: "Destructuring in Function Parameters",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Use destructuring directly in function parameters for cleaner code.
        </p>
        <CodeBlock
          lines={[
            '// Regular parameters',
            'function greet(user) {',
            '  console.log(`Hello, ${user.name}!`);',
            '}',
            '',
            '// Destructured parameters',
            'function greet({ name, age }) {',
            '  console.log(`Hello, ${name}! You are ${age} years old.`);',
            '}',
            '',
            'greet({ name: "Eve", age: 28 });',
            '',
            '// With React components',
            'function Button({ text = "Click", onClick }) {',
            '  return <button onClick={onClick}>{text}</button>;',
            '}'
          ]}
        />
      </>
    )
  },
  {
    title: "Best Practices",
    content: (
      <ul>
        <li>Use destructuring for objects and arrays when extracting multiple properties/elements</li>
        <li>Provide default values for properties that might be undefined</li>
        <li>Use the rest operator to collect remaining values</li>
        <li>Destructure function parameters for cleaner, more readable code</li>
        <li>Rename properties if the destructured name would be unclear</li>
        <li>Keep destructuring simple - avoid deeply nested destructuring patterns</li>
      </ul>
    )
  }
];

export default function DestructuringPage() {
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
            <h1 className="text-3xl font-bold tracking-tight">Destructuring</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Extract values from objects and arrays with clean, concise syntax
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
          quizLink="/lesson/javascript-basics-for-react/destructuring/quiz"
          lessonId={1}
          contentSlug="destructuring"
        />
      </div>
    </div>
  );
}
