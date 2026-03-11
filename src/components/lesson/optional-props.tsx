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
          Optional props are component properties that don't have to be provided by the parent component. They're useful
          for making components more flexible and reusable when certain data is not always available.
        </p>
        <ul>
          <li><strong>Optional syntax</strong>: Use the <code>?</code> operator in TypeScript</li>
          <li><strong>Default values</strong>: Provide default behavior when optional props aren't passed</li>
          <li><strong>Better reusability</strong>: Optional props make components more flexible</li>
        </ul>
      </>
    )
  },
  {
    title: "Making Props Optional",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Use the <code>?</code> operator to mark props as optional.
        </p>
        <CodeBlock
          lines={[
            'interface AlertProps {',
            '  message: string; // Required',
            '  type?: "info" | "warning" | "error"; // Optional',
            '  onClose?: () => void; // Optional',
            '}',
            '',
            'function Alert({ message, type = "info", onClose }: AlertProps) {',
            '  return (',
            '    <div className={`alert-${type}`}>',
            '      {message}',
            '      {onClose && <button onClick={onClose}>Close</button>}',
            '    </div>',
            '  );',
            '}'
          ]}
        />
      </>
    )
  },
  {
    title: "Default Values",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Provide default values for optional props using destructuring assignment.
        </p>
        <CodeBlock
          lines={[
            'interface CardProps {',
            '  title: string;',
            '  variant?: "primary" | "secondary";',
            '  shadow?: boolean;',
            '}',
            '',
            'function Card({ title, variant = "primary", shadow = true }: CardProps) {',
            '  return (',
            '    <div className={`card card-${variant} ${shadow ? "shadow" : ""}`}>',
            '      <h2>{title}</h2>',
            '    </div>',
            '  );',
            '}'
          ]}
        />
      </>
    )
  },
  {
    title: "Checking for Optional Props",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Check if optional props were provided before using them.
        </p>
        <CodeBlock
          lines={[
            'interface UserCardProps {',
            '  name: string;',
            '  avatar?: string;',
            '  bio?: string;',
            '}',
            '',
            'function UserCard({ name, avatar, bio }: UserCardProps) {',
            '  return (',
            '    <div>',
            '      <h3>{name}</h3>',
            '      {avatar && <img src={avatar} alt={name} />}',
            '      {bio && <p>{bio}</p>}',
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
        <li>Make props optional only if they have sensible defaults or aren't always needed</li>
        <li>Use default values in destructuring to avoid repetitive checks</li>
        <li>Check for optional props with conditional rendering before using them</li>
        <li>Document what happens when optional props aren't provided</li>
        <li>Keep related optional props together in your interface definition</li>
      </ul>
    )
  }
];

export default function OptionalPropsPage() {
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
            <h1 className="text-3xl font-bold tracking-tight">Optional Props</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Making component props flexible and optional
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
          quizLink="/lesson/typescript-basics/optional-props/quiz"
          lessonId={2}
          contentSlug="optional-props"
        />
      </div>
    </div>
  );
}
