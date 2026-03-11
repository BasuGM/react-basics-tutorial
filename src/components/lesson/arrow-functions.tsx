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
          Arrow functions are a concise syntax for writing functions in JavaScript (ES6+).
          They use the <code>=&gt;</code> (arrow) operator and provide a shorter alternative to traditional function declarations.
        </p>
        <ul>
          <li><strong>Concise syntax</strong>: Shorter than traditional function declarations</li>
          <li><strong>Implicit return</strong>: Single expressions return automatically</li>
          <li><strong>Lexical this binding</strong>: Inherits `this` from surrounding scope, unlike regular functions</li>
        </ul>
      </>
    )
  },
  {
    title: "Basic Syntax",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Arrow functions can be written in several ways depending on the number of parameters and expression complexity.
        </p>
        <CodeBlock
          lines={[
            '// Single parameter, single expression',
            'const square = x => x * x;',
            'console.log(square(5)); // 25',
            '',
            '// Multiple parameters',
            'const add = (a, b) => a + b;',
            'console.log(add(2, 3)); // 5',
            '',
            '// No parameters',
            'const greet = () => "Hello!";',
            'console.log(greet()); // "Hello!"'
          ]}
        />
      </>
    )
  },
  {
    title: "Implicit vs Explicit Return",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Single expressions return implicitly, but function bodies require explicit return.
        </p>
        <CodeBlock
          lines={[
            '// Implicit return (single expression)',
            'const multiply = (a, b) => a * b;',
            '',
            '// Explicit return (function body with braces)',
            'const multiply = (a, b) => {',
            '  const result = a * b;',
            '  return result;',
            '};',
            '',
            '// Returning an object requires parentheses',
            'const getUser = (name) => ({ name: name, active: true });'
          ]}
        />
      </>
    )
  },
  {
    title: "Arrow Functions vs Regular Functions",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Arrow functions differ in syntax and how they handle the `this` keyword.
        </p>
        <CodeBlock
          lines={[
            '// Regular function',
            'function add(a, b) {',
            '  return a + b;',
            '}',
            '',
            '// Arrow function equivalent',
            'const add = (a, b) => a + b;',
            '',
            '// this binding - arrow functions vs methods',
            'const person = {',
            '  name: "Alice",',
            '  arrowGreet: () => `Hello from ${this.name}`, // this is undefined',
            '  methodGreet() { return `Hello from ${this.name}`; } // this works correctly',
            '};'
          ]}
        />
      </>
    )
  },
  {
    title: "Common Use Cases",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Arrow functions are ideal for array methods and callbacks due to their concise syntax.
        </p>
        <CodeBlock
          lines={[
            '// Array methods with arrow functions',
            'const numbers = [1, 2, 3, 4, 5];',
            'const squared = numbers.map(n => n * n);',
            'console.log(squared); // [1, 4, 9, 16, 25]',
            '',
            'const evens = numbers.filter(n => n % 2 === 0);',
            'console.log(evens); // [2, 4]',
            '',
            '// In React components',
            '<button onClick={() => handleClick()}>Click me</button>'
          ]}
        />
      </>
    )
  },
  {
    title: "Best Practices",
    content: (
      <ul>
        <li>Use arrow functions for callbacks and array methods (.map, .filter, .reduce)</li>
        <li>Avoid arrow functions for object methods where you need `this` binding</li>
        <li>Keep arrow function bodies simple - prefer explicit return for complex logic</li>
        <li>Arrow functions cannot be used as constructors (no `new` keyword)</li>
        <li>Use arrow functions for React event handlers and event listeners</li>
      </ul>
    )
  }
];

export default function ArrowFunctionsPage() {
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
            <h1 className="text-3xl font-bold tracking-tight">Arrow Functions</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Mastering the modern syntax for writing functions
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
          quizLink="/lesson/javascript-basics-for-react/arrow-functions/quiz"
          lessonId={1}
          contentSlug="arrow-functions"
        />
      </div>
    </div>
  );
}
