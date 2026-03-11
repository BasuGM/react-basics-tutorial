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
          <code>React.FC</code> (React.FunctionComponent) is a TypeScript type that explicitly types a functional React component.
          It provides type safety for component properties and the overall component structure.
        </p>
        <ul>
          <li><strong>React.FC</strong>: A type for functional React components</li>
          <li><strong>Automatic typing</strong>: Automatically includes typing for common properties</li>
          <li><strong>Props typing</strong>: Easily combine with props interfaces</li>
        </ul>
      </>
    )
  },
  {
    title: "Basic React.FC Usage",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Use <code>React.FC&lt;Props&gt;</code> to type a functional component with its props.
        </p>
        <CodeBlock
          lines={[
            'interface ButtonProps {',
            '  label: string;',
            '  onClick: () => void;',
            '}',
            '',
            'const Button: React.FC<ButtonProps> = ({ label, onClick }) => {',
            '  return <button onClick={onClick}>{label}</button>;',
            '};',
            '',
            'export default Button;'
          ]}
        />
      </>
    )
  },
  {
    title: "React.FC with Children",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          <code>React.FC</code> includes <code>children</code> in its type definition automatically.
        </p>
        <CodeBlock
          lines={[
            'interface CardProps {',
            '  title: string;',
            '  // children is automatically included in React.FC',
            '}',
            '',
            'const Card: React.FC<CardProps> = ({ title, children }) => {',
            '  return (',
            '    <div className="card">',
            '      <h2>{title}</h2>',
            '      {children}',
            '    </div>',
            '  );',
            '};'
          ]}
        />
      </>
    )
  },
  {
    title: "React.FC vs Function Declaration",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          <code>React.FC</code> is optional - you can type components without it.
        </p>
        <CodeBlock
          lines={[
            '// With React.FC',
            'const Button: React.FC<ButtonProps> = ({ label }) => (',
            '  <button>{label}</button>',
            ');',
            '',
            '// Without React.FC - manual prop typing',
            'function Button({ label }: ButtonProps) {',
            '  return <button>{label}</button>;',
            '}',
            '',
            '// Both approaches work - choose what your team prefers'
          ]}
        />
      </>
    )
  },
  {
    title: "Modern Approach",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Many developers now prefer NOT using <code>React.FC</code> because prop typing alone is sufficient.
        </p>
        <CodeBlock
          lines={[
            '// Modern approach (no React.FC needed)',
            'interface ButtonProps {',
            '  label: string;',
            '  onClick: () => void;',
            '}',
            '',
            'export default function Button({ label, onClick }: ButtonProps) {',
            '  return <button onClick={onClick}>{label}</button>;',
            '}',
            '',
            '// This provides the same type safety as React.FC'
          ]}
        />
      </>
    )
  },
  {
    title: "Best Practices",
    content: (
      <ul>
        <li><code>React.FC</code> is optional - choose based on team preference</li>
        <li>If using <code>React.FC</code>, remember it includes <code>children</code> automatically</li>
        <li>Modern React development often uses function declarations with prop typing instead</li>
        <li>Both approaches provide full type safety</li>
        <li>Be consistent with your team's convention</li>
      </ul>
    )
  }
];

export default function ReactFCPage() {
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
            <h1 className="text-3xl font-bold tracking-tight">React.FC</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Typing React functional components with React.FC
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
          quizLink="/lesson/typescript-basics/react-fc/quiz"
          lessonId={2}
          contentSlug="react-fc"
        />
      </div>
    </div>
  );
}
