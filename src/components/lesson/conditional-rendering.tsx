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
          Conditional rendering in React allows you to render different content based on conditions.
          This is one of the most common patterns in building interactive user interfaces.
        </p>
        <ul>
          <li><strong>Ternary operator</strong>: For simple if-else logic</li>
          <li><strong>Logical AND (&&)</strong>: For showing or hiding elements</li>
          <li><strong>If statements</strong>: For complex logic outside JSX</li>
          <li><strong>Switch statements</strong>: For multiple conditions</li>
        </ul>
      </>
    )
  },
  {
    title: "Ternary Operator",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          The ternary operator is perfect for simple conditional rendering with two options.
        </p>
        <CodeBlock
          lines={[
            '// Basic ternary',
            'const message = isLoggedIn ? "Welcome back!" : "Please log in";',
            '',
            '// In JSX',
            '<div>',
            '  {isLoggedIn ? <Dashboard /> : <LoginForm />}',
            '</div>',
            '',
            '// Nested ternary (not recommended for readability)',
            '<div>',
            '  {status === "loading" ? <Spinner /> : status === "error" ? <Error /> : <Content />}',
            '</div>'
          ]}
        />
      </>
    )
  },
  {
    title: "Logical AND Operator (&&)",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Use && when you only want to show something if a condition is true (no else case).
        </p>
        <CodeBlock
          lines={[
            '// Show element only if condition is true',
            '{isAdmin && <AdminPanel />}',
            '',
            '// Show message only if there are errors',
            '{errors.length > 0 && <ErrorMessage errors={errors} />}',
            '',
            '// Combine conditions',
            '{isLoggedIn && hasPermission && <SecretContent />}',
            '',
            '// With text',
            '{unreadCount > 0 && <span className="badge">{unreadCount}</span>}'
          ]}
        />
      </>
    )
  },
  {
    title: "If Statements and Functions",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          For complex logic, move conditionals outside JSX and use the result inside.
        </p>
        <CodeBlock
          lines={[
            'function getStatusColor(status) {',
            '  if (status === "success") return "green";',
            '  if (status === "error") return "red";',
            '  if (status === "warning") return "yellow";',
            '  return "gray";',
            '}',
            '',
            '// In JSX',
            '<div className={getStatusColor(status)}>',
            '  {status}',
            '</div>'
          ]}
        />
      </>
    )
  },
  {
    title: "Switch Statements",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Use switch statements when you have multiple conditions to check.
        </p>
        <CodeBlock
          lines={[
            'function renderStatus(status) {',
            '  switch (status) {',
            '    case "loading":',
            '      return <Spinner />;',
            '    case "error":',
            '      return <Error />;',
            '    case "success":',
            '      return <Success />;',
            '    default:',
            '      return null;',
            '  }',
            '}',
            '',
            '// In JSX',
            '<div>{renderStatus(status)}</div>'
          ]}
        />
      </>
    )
  },
  {
    title: "Best Practices",
    content: (
      <ul>
        <li>Use ternary operators for simple two-option conditionals</li>
        <li>Use && for showing/hiding single elements</li>
        <li>Move complex logic outside JSX into separate functions</li>
        <li>Use switch statements for multiple conditions</li>
        <li>Avoid nested ternary operators - they reduce readability</li>
        <li>Don't render falsy values like 0 or empty strings by accident</li>
      </ul>
    )
  }
];

export default function ConditionalRenderingPage() {
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
            <h1 className="text-3xl font-bold tracking-tight">Conditional Rendering</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Rendering different content based on conditions
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
          quizLink="/lesson/jsx-rendering/conditional-rendering/quiz"
          lessonId={3}
          contentSlug="conditional-rendering"
        />
      </div>
    </div>
  );
}
