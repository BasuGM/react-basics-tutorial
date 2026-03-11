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
          Understanding the difference between expressions and statements is crucial for writing effective React code.
          In JSX, you can only use <strong>expressions</strong>, not statements.
        </p>
        <ul>
          <li><strong>Expression</strong>: Code that evaluates to a value and can be used anywhere a value is expected</li>
          <li><strong>Statement</strong>: Code that performs an action but doesn't return a value</li>
          <li>JSX curly braces <code>{'{}'}</code> only accept expressions, not statements</li>
        </ul>
      </>
    )
  },
  {
    title: "What are Expressions?",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Expressions evaluate to a value that can be used in your code.
        </p>
        <CodeBlock
          lines={[
            '// All of these are expressions:',
            '5 + 3                    // evaluates to 8',
            'name === "Alice"         // evaluates to true or false',
            'name ? "Hello" : "Hi"    // ternary operator returns a value',
            'Math.max(10, 5)          // function call returns a value',
            '[1, 2, 3].map(x => x * 2) // returns new array'
          ]}
        />
      </>
    )
  },
  {
    title: "What are Statements?",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Statements are instructions that perform actions but don't evaluate to a value.
        </p>
        <CodeBlock
          lines={[
            '// All of these are statements:',
            'if (condition) { }        // control flow',
            'for (let i = 0; i < 10; i++) { } // loop',
            'while (isTrue) { }        // loop',
            'function myFunc() { }     // function declaration',
            'let x = 5;                // variable declaration'
          ]}
        />
      </>
    )
  },
  {
    title: "Expressions in JSX",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          You can use expressions inside JSX curly braces, but not statements.
        </p>
        <CodeBlock
          lines={[
            '// ✅ Expressions - these work',
            '<div>{5 + 3}</div>  // Shows: 8',
            '<div>{isOpen ? "Open" : "Closed"}</div>',
            '<div>{items.map(item => <li key={item}>{item}</li>)}</div>',
            '',
            '// ❌ Statements - these don\'t work',
            '<div>{if (isOpen) { return "Open"; }}</div>',
            '<div>{for (let i = 0; i < 5; i++) { }}</div>',
            '<div>{let name = "Alice";}</div>'
          ]}
        />
      </>
    )
  },
  {
    title: "Common Patterns",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Here are common ways to use expressions in JSX:
        </p>
        <CodeBlock
          lines={[
            '// Ternary operator for conditional rendering',
            '<div>{isLoggedIn ? <Dashboard /> : <Login />}</div>',
            '',
            '// Logical AND operator',
            '<div>{isLoggedIn && <Logout />}</div>',
            '',
            '// Array methods',
            '<ul>',
            '  {items.map(item => <li key={item.id}>{item.name}</li>)}',
            '</ul>',
            '',
            '// Function calls',
            '<div>{getUserGreeting(user)}</div>'
          ]}
        />
      </>
    )
  },
  {
    title: "Best Practices",
    content: (
      <ul>
        <li>Use ternary operators <code>? :</code> for simple conditional rendering</li>
        <li>Use logical AND <code>&&</code> for showing/hiding elements</li>
        <li>For complex logic, move it outside JSX into variables or functions</li>
        <li>Remember: JSX curly braces only accept expressions that return values</li>
        <li>If you need statements, define them outside the JSX and call the result</li>
      </ul>
    )
  }
];

export default function ExpressionsVsStatementsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Navigation */}
        <div className="mb-6">
          <Link
            href="/lesson/jsx-rendering"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to JSX & Rendering
          </Link>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Code className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold tracking-tight">Expressions vs Statements</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Understanding what can and cannot be used inside JSX
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
          quizLink="/lesson/jsx-rendering/expressions-vs-statements/quiz"
          lessonId={3}
          contentSlug="expressions-vs-statements"
        />
      </div>
    </div>
  );
}
