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
          Union types allow a value to be one of several types. They're useful when a variable or parameter can accept
          multiple different types and you want to handle each type appropriately.
        </p>
        <ul>
          <li><strong>Union type syntax</strong>: Use the pipe (<code>|</code>) operator to combine types</li>
          <li><strong>Type narrowing</strong>: Checking which type you have allows TypeScript to narrow the type</li>
          <li><strong>Common in React</strong>: Props and state often have union types</li>
        </ul>
      </>
    )
  },
  {
    title: "Basic Union Types",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Create a union type using the pipe (<code>|</code>) operator.
        </p>
        <CodeBlock
          lines={[
            'type Status = "success" | "error" | "loading";',
            '',
            'function handleStatus(status: Status) {',
            '  console.log(`Status is: ${status}`);',
            '}',
            '',
            'handleStatus("success"); // ✓ Works',
            'handleStatus("pending"); // ✗ Error - not in union'
          ]}
        />
      </>
    )
  },
  {
    title: "Union of Different Types",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Union types can combine different types, not just string literals.
        </p>
        <CodeBlock
          lines={[
            'type ID = string | number;',
            '',
            'function getUser(id: ID) {',
            '  if (typeof id === "string") {',
            '    return db.getUserByUsername(id);',
            '  } else {',
            '    return db.getUserById(id);',
            '  }',
            '}',
            '',
            'getUser("john"); // ✓ Works with string',
            'getUser(123); // ✓ Works with number'
          ]}
        />
      </>
    )
  },
  {
    title: "Type Narrowing",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Type narrowing allows TypeScript to understand which type you're working with in a specific block.
        </p>
        <CodeBlock
          lines={[
            'type Value = string | number;',
            '',
            'function process(value: Value) {',
            '  // value is string | number here',
            '  ',
            '  if (typeof value === "string") {',
            '    // value is string here - TypeScript knows this',
            '    console.log(value.toUpperCase());',
            '  } else {',
            '    // value is number here - TypeScript knows this',
            '    console.log(value.toFixed(2));',
            '  }',
            '}'
          ]}
        />
      </>
    )
  },
  {
    title: "Union Types with Objects",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Union types can also combine different object shapes.
        </p>
        <CodeBlock
          lines={[
            'type Result =',
            '  | { status: "success"; data: string }',
            '  | { status: "error"; error: Error };',
            '',
            'function handleResult(result: Result) {',
            '  if (result.status === "success") {',
            '    console.log(result.data); // ✓ data exists here',
            '  } else {',
            '    console.log(result.error); // ✓ error exists here',
            '  }',
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
        <li>Use union types when a variable can be multiple different types</li>
        <li>Use literal types in unions to create discriminated unions (union of objects with different shapes)</li>
        <li>Always narrow types before using type-specific methods</li>
        <li>Use type guards (<code>typeof</code>, <code>instanceof</code>) to narrow types</li>
        <li>Consider using discriminated unions for complex object unions</li>
      </ul>
    )
  }
];

export default function UnionTypesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Navigation */}
        <div className="mb-6">
          <Link
            href="/lesson/typescript-basics"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to TypeScript Basics
          </Link>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Code className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold tracking-tight">Union Types</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Allowing variables to be one of multiple types
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
          quizLink="/lesson/typescript-basics/union-types/quiz"
          lessonId={2}
          contentSlug="union-types"
        />
      </div>
    </div>
  );
}
