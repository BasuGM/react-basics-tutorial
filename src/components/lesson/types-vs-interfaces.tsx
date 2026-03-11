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
          In TypeScript, <code>type</code> and <code>interface</code> are two ways to define object shapes and contracts.
          While they're similar, they have important differences in how they work and when to use them.
        </p>
        <ul>
          <li><strong>Interface</strong>: Primarily for defining object shapes and contracts</li>
          <li><strong>Type</strong>: A more flexible way to define any shape, including primitives</li>
          <li>Interfaces can be extended and merged, while types use intersection</li>
        </ul>
      </>
    )
  },
  {
    title: "Using type",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          <code>type</code> creates an alias for any type, including primitives, unions, and object shapes.
        </p>
        <CodeBlock
          lines={[
            'type User = {',
            '  id: number;',
            '  name: string;',
            '  email: string;',
            '};',
            '',
            'const user: User = {',
            '  id: 1,',
            '  name: "John",',
            '  email: "john@example.com"',
            '};'
          ]}
        />
      </>
    )
  },
  {
    title: "Using interface",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          <code>interface</code> defines a contract for object shapes. It's cleaner for most object definitions.
        </p>
        <CodeBlock
          lines={[
            'interface User {',
            '  id: number;',
            '  name: string;',
            '  email: string;',
            '}',
            '',
            'const user: User = {',
            '  id: 1,',
            '  name: "John",',
            '  email: "john@example.com"',
            '};'
          ]}
        />
      </>
    )
  },
  {
    title: "Key Differences",
    content: (
      <>
        <p className="mb-4 text-muted-foreground font-semibold">
          Interface can be extended:
        </p>
        <CodeBlock
          lines={[
            'interface User {',
            '  id: number;',
            '  name: string;',
            '}',
            '',
            'interface Admin extends User {',
            '  role: "admin";',
            '  permissions: string[];',
            '}'
          ]}
        />
        <p className="mt-4 mb-4 text-muted-foreground font-semibold">
          Type uses intersection:
        </p>
        <CodeBlock
          lines={[
            'type User = {',
            '  id: number;',
            '  name: string;',
            '};',
            '',
            'type Admin = User & {',
            '  role: "admin";',
            '  permissions: string[];',
            '};'
          ]}
        />
      </>
    )
  },
  {
    title: "When to Use Each",
    content: (
      <>
        <p className="mb-4 text-muted-foreground font-semibold">
          Use <code>interface</code> when:
        </p>
        <ul>
          <li>Defining object contracts (especially for React props)</li>
          <li>You want to use declaration merging</li>
          <li>Building libraries or public APIs</li>
        </ul>
        <p className="mt-4 mb-4 text-muted-foreground font-semibold">
          Use <code>type</code> when:
        </p>
        <ul>
          <li>You need union types</li>
          <li>You need mapped types or advanced TypeScript features</li>
          <li>You're creating primitive aliases</li>
        </ul>
      </>
    )
  }
];

export default function TypesVsInterfacesPage() {
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
            <h1 className="text-3xl font-bold tracking-tight">Types vs Interfaces</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Understanding the differences and when to use each
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
          quizLink="/lesson/typescript-basics/types-vs-interfaces/quiz"
          lessonId={2}
          contentSlug="types-vs-interfaces"
        />
      </div>
    </div>
  );
}
