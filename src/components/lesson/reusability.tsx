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
          Component reusability is one of React's greatest strengths. Instead of writing the same code multiple times,
          you can create a component once and use it many times with different props. This follows the DRY (Don't Repeat Yourself) principle.
        </p>
        <ul>
          <li><strong>Write once, use everywhere</strong>: Create a component and reuse it throughout your app</li>
          <li><strong>Flexibility through props</strong>: Change component behavior with different props</li>
          <li><strong>Maintainability</strong>: Update the component in one place, changes apply everywhere</li>
          <li><strong>Consistency</strong>: All instances of a component behave the same way</li>
        </ul>
      </>
    )
  },
  {
    title: "Creating a Reusable Component",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Build a component that accepts props to customize its behavior, making it reusable in different contexts.
        </p>
        <CodeBlock
          lines={[
            'function Button({ label, onClick, variant = "primary" }) {',
            '  return (',
            '    <button',
            '      onClick={onClick}',
            '      className={`btn btn-${variant}`}',
            '    >',
            '      {label}',
            '    </button>',
            '  );',
            '}',
            '',
            '// Usage in different places:',
            '<Button label="Save" onClick={handleSave} />',
            '<Button label="Cancel" onClick={handleCancel} variant="secondary" />'
          ]}
        />
      </>
    )
  },
  {
    title: "Composition for Reusability",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Use composition to build flexible components that can be reused with different content.
        </p>
        <CodeBlock
          lines={[
            'function Card({ title, children }) {',
            '  return (',
            '    <div className="card">',
            '      <div className="card-header">',
            '        <h2>{title}</h2>',
            '      </div>',
            '      <div className="card-body">',
            '        {children}',
            '      </div>',
            '    </div>',
            '  );',
            '}',
            '',
            '// Reuse with different content:',
            '<Card title="User Info">',
            '  <p>Alice, 25 years old</p>',
            '</Card>',
            '',
            '<Card title="Product">',
            '  <img src="product.jpg" />',
            '  <p>Price: $99</p>',
            '</Card>'
          ]}
        />
      </>
    )
  },
  {
    title: "Default Props and Patterns",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Use default values to make components reusable without requiring all props to be specified.
        </p>
        <CodeBlock
          lines={[
            'function Alert({ message, type = "info", onClose }) {',
            '  return (',
            '    <div className={`alert alert-${type}`}>',
            '      <p>{message}</p>',
            '      {onClose && (',
            '        <button onClick={onClose}>Close</button>',
            '      )}',
            '    </div>',
            '  );',
            '}',
            '',
            '// Can use with minimal props:',
            '<Alert message="Operation complete" />',
            '',
            '// Or with all props:',
            '<Alert',
            '  message="Error occurred"',
            '  type="error"',
            '  onClose={handleClose}',
            '/>'
          ]}
        />
      </>
    )
  },
  {
    title: "Best Practices",
    content: (
      <ul>
        <li>Design components to be flexible with props and composition</li>
        <li>Use default props for sensible defaults</li>
        <li>Keep components focused on a single responsibility</li>
        <li>Document what props a component expects</li>
        <li>Avoid hardcoding values - use props instead</li>
        <li>Create a component library as your app grows</li>
        <li>Test components thoroughly to ensure they're truly reusable</li>
      </ul>
    )
  }
];

export default function ReusabilityPage() {
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
            <h1 className="text-3xl font-bold tracking-tight">Reusability</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Creating components that work in multiple contexts
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
          quizLink="/lesson/functional-components/reusability/quiz"
          lessonId={4}
          contentSlug="reusability"
        />
      </div>
    </div>
  );
}
