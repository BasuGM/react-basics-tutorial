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
          Default props allow you to provide sensible default values for props when they're not explicitly passed.
          This makes your components more flexible and reduces the need to pass props every time you use a component.
        </p>
        <ul>
          <li><strong>Default values</strong>: Provide fallback values for props</li>
          <li><strong>Optional props</strong>: Some props don't need to be required</li>
          <li><strong>Cleaner usage</strong>: Less verbose component calls</li>
          <li><strong>Better API</strong>: Components work well with minimal configuration</li>
        </ul>
      </>
    )
  },
  {
    title: "Using Default Parameters",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          The simplest way to provide defaults is using JavaScript default parameters.
        </p>
        <CodeBlock
          lines={[
            'function Card({ title = "Untitled", variant = "default" }) {',
            '  return (',
            '    <div className={`card card-${variant}`}>',
            '      <h2>{title}</h2>',
            '    </div>',
            '  );',
            '}',
            '',
            '// Usage:',
            '<Card />  // Uses defaults',
            '<Card title="My Card" />  // Uses provided title, default variant',
            '<Card title="Special" variant="featured" />  // All provided'
          ]}
        />
      </>
    )
  },
  {
    title: "Conditional Rendering with Defaults",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Use defaults to conditionally render parts of your component.
        </p>
        <CodeBlock
          lines={[
            'function Button({ children, icon = null, disabled = false }) {',
            '  return (',
            '    <button disabled={disabled}>',
            '      {icon && <span>{icon}</span>}',
            '      {children}',
            '    </button>',
            '  );',
            '}',
            '',
            '// Usage:',
            '<Button>Submit</Button>',
            '<Button icon="📧">Send Email</Button>',
            '<Button disabled>Disabled</Button>'
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
          Here are common patterns for providing defaults and handling optional props.
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
            'function UserCard({ user, showEmail = false, detailed = false }) {',
            '  return (',
            '    <div className="card">',
            '      <h3>{user.name}</h3>',
            '      {showEmail && <p>{user.email}</p>}',
            '      {detailed && <p>{user.bio}</p>}',
            '    </div>',
            '  );',
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
        <li>Provide sensible defaults that work for common use cases</li>
        <li>Use boolean defaults for optional features</li>
        <li>Document what the defaults are when using components</li>
        <li>Keep default values simple - avoid complex logic</li>
        <li>Consider what makes sense for users of your component</li>
        <li>Use TypeScript to document prop types and defaults</li>
        <li>Test components with and without providing optional props</li>
      </ul>
    )
  }
];

export default function DefaultPropsPatterns() {
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
            <h1 className="text-3xl font-bold tracking-tight">Default Props & Patterns</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Providing sensible defaults for component props
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
          quizLink="/lesson/functional-components/default-props-patterns/quiz"
          lessonId={4}
          contentSlug="default-props-patterns"
        />
      </div>
    </div>
  );
}
