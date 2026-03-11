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
          Template literals are a convenient way to work with strings in JavaScript (ES6+). They use backticks (<code>`</code>) instead of quotes
          and allow you to embed variables and expressions directly into strings.
        </p>
        <ul>
          <li><strong>String interpolation</strong>: Embed variables using <code>${'{}'}</code></li>
          <li><strong>Multi-line strings</strong>: Create strings across multiple lines without escape characters</li>
          <li><strong>Tagged templates</strong>: Process template literals with functions for advanced use cases</li>
        </ul>
      </>
    )
  },
  {
    title: "Basic String Interpolation",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Use template literals to embed variables and expressions directly into strings with <code>${'{}'}</code> syntax.
        </p>
        <CodeBlock
          lines={[
            '// Traditional string concatenation',
            'const name = "Alice";',
            'const greeting = "Hello, " + name + "!";',
            'console.log(greeting); // "Hello, Alice!"',
            '',
            '// With template literals',
            'const name = "Alice";',
            'const greeting = `Hello, ${name}!`;',
            'console.log(greeting); // "Hello, Alice!"',
            '',
            '// Expressions in template literals',
            'const x = 10;',
            'const y = 20;',
            'console.log(`${x} + ${y} = ${x + y}`); // "10 + 20 = 30"'
          ]}
        />
      </>
    )
  },
  {
    title: "Multi-line Strings",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Template literals preserve newlines, making it easy to create multi-line strings without escape characters.
        </p>
        <CodeBlock
          lines={[
            '// Traditional approach with escape characters',
            'const message = "Line 1\\nLine 2\\nLine 3";',
            '',
            '// With template literals',
            'const message = `Line 1',
            'Line 2',
            'Line 3`;',
            '',
            '// HTML with template literals',
            'const user = { name: "Bob", age: 25 };',
            'const html = `',
            '  <div>',
            '    <h1>${user.name}</h1>',
            '    <p>Age: ${user.age}</p>',
            '  </div>',
            '`;'
          ]}
        />
      </>
    )
  },
  {
    title: "Complex Expressions",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Template literals can contain any JavaScript expression inside the <code>${'{}'}</code> placeholders.
        </p>
        <CodeBlock
          lines={[
            '// Function calls',
            'const name = "alice";',
            'console.log(`Hello, ${name.toUpperCase()}!`); // "Hello, ALICE!"',
            '',
            '// Ternary operators',
            'const age = 20;',
            'const status = `You are ${age >= 18 ? "an adult" : "a minor"}`;',
            'console.log(status); // "You are an adult"',
            '',
            '// Object properties',
            'const user = { name: "Charlie", email: "charlie@example.com" };',
            'console.log(`Contact: ${user.name} at ${user.email}`);',
            '',
            '// Array operations',
            'const numbers = [1, 2, 3, 4, 5];',
            'console.log(`Sum: ${numbers.reduce((a, b) => a + b, 0)}`);'
          ]}
        />
      </>
    )
  },
  {
    title: "Template Literals in React",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Template literals are widely used in React for styling, conditionals, and dynamic content.
        </p>
        <CodeBlock
          lines={[
            '// Conditional className',
            'const isActive = true;',
            'const className = `button ${isActive ? "active" : "inactive"}`;',
            '',
            '// Building URLs',
            'const userId = 123;',
            'const profileURL = `/users/${userId}/profile`;',
            '',
            '// Multi-line JSX and HTML',
            'const Alert = ({ message, type }) => (',
            '  <div className={`alert alert-${type}`}>',
            '    {message}',
            '  </div>',
            ');',
            '',
            '// CSS-in-JS',
            'const styles = `',
            '  .button {',
            '    background: ${primaryColor};',
            '    padding: ${padding}px;',
            '  }',
            '`;'
          ]}
        />
      </>
    )
  },
  {
    title: "Escaping and Special Cases",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Learn how to handle special characters and edge cases with template literals.
        </p>
        <CodeBlock
          lines={[
            '// Escaping backticks',
            'const message = `He said \\`hello\\` to me`;',
            'console.log(message); // He said `hello` to me',
            '',
            '// Dollar sign without interpolation',
            'const price = "$100";',
            'const message = `The price is \\${price}`;',
            'console.log(message); // The price is ${price}',
            '',
            '// Nested template literals',
            'const name = "Alice";',
            'const outer = `Hello ${`Mr. ${name}`}`;',
            'console.log(outer); // Hello Mr. Alice',
            '',
            '// Empty placeholders default to undefined',
            'let value;',
            'console.log(`Value: ${value}`); // Value: undefined'
          ]}
        />
      </>
    )
  },
  {
    title: "Best Practices",
    content: (
      <ul>
        <li>Always use template literals instead of string concatenation with <code>+</code></li>
        <li>Keep expressions inside <code>${'{}'}</code> simple and readable</li>
        <li>Extract complex logic to separate variables before using in template literals</li>
        <li>Use template literals for multi-line strings to improve readability</li>
        <li>In React, consider extracting dynamic classes to variables for clarity</li>
        <li>Be careful with whitespace in multi-line template literals - it's preserved</li>
        <li>Use template literals when building URLs, SQL queries, or HTML</li>
      </ul>
    )
  }
];

export default function TemplateLiteralsPage() {
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
            <h1 className="text-3xl font-bold tracking-tight">Template Literals</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Master string interpolation and multi-line strings with backticks
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
          quizLink="/lesson/javascript-basics-for-react/template-literals/quiz"
          lessonId={1}
          contentSlug="template-literals"
        />
      </div>
    </div>
  );
}
