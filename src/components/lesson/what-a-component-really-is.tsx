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
          A React component is ultimately a <strong>JavaScript function that returns JSX</strong>. React components are reusable,
          self-contained pieces of your UI that can accept inputs (props) and manage their own state.
        </p>
        <ul>
          <li><strong>Components</strong>: Functions that return JSX describing what to render</li>
          <li><strong>Props</strong>: Inputs passed to components to customize behavior</li>
          <li><strong>State</strong>: Data that a component can change and manage internally</li>
          <li><strong>JSX</strong>: Syntax that lets you write HTML-like code in JavaScript</li>
        </ul>
      </>
    )
  },
  {
    title: "The Simplest Component",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          At its core, a component is just a function that returns JSX.
        </p>
        <CodeBlock
          lines={[
            'function Welcome() {',
            '  return <h1>Hello, World!</h1>;',
            '}',
            '',
            'export default Welcome;'
          ]}
        />
      </>
    )
  },
  {
    title: "Components with Props",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Components receive props (properties) as function arguments to customize their behavior.
        </p>
        <CodeBlock
          lines={[
            'function Greeting({ name }) {',
            '  return <h1>Hello, {name}!</h1>;',
            '}',
            '',
            '// Usage:',
            '<Greeting name="Alice" />'
          ]}
        />
      </>
    )
  },
  {
    title: "Component Composition",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Components can contain other components, allowing you to build complex UIs from smaller, reusable pieces.
        </p>
        <CodeBlock
          lines={[
            'function Card({ title, children }) {',
            '  return (',
            '    <div className="card">',
            '      <h2>{title}</h2>',
            '      {children}',
            '    </div>',
            '  );',
            '}',
            '',
            'function App() {',
            '  return (',
            '    <Card title="My Card">',
            '      <p>Content goes here</p>',
            '    </Card>',
            '  );',
            '}'
          ]}
        />
      </>
    )
  },
  {
    title: "Key Concepts",
    content: (
      <ul>
        <li><strong>Reusability</strong>: Write once, use everywhere</li>
        <li><strong>Isolation</strong>: Components manage their own logic</li>
        <li><strong>Props flow</strong>: Data flows down from parent to child</li>
        <li><strong>Composition</strong>: Build large UIs from small components</li>
        <li><strong>Return JSX</strong>: Components must always return valid JSX</li>
      </ul>
    )
  }
];

export default function WhatAComponentReallyIsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Navigation */}
        <div className="mb-6">
          <Link
            href="/lesson/functional-components"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Functional Components
          </Link>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Code className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold tracking-tight">What a Component Really Is</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Understanding React components at their core
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
          quizLink="/lesson/functional-components/what-a-component-really-is/quiz"
          lessonId={4}
          contentSlug="what-a-component-really-is"
        />
      </div>
    </div>
  );
}
