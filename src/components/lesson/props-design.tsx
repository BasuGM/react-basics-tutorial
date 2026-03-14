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
          Props design is about creating clear, intuitive interfaces for your React components.
          Good props design makes components easier to use, understand, and maintain.
        </p>
        <ul>
          <li><strong>Clarity</strong>: Props should be self-documenting and easy to understand</li>
          <li><strong>Flexibility</strong>: Accept what varies, don't hardcode what's reused</li>
          <li><strong>Consistency</strong>: Follow naming conventions across your components</li>
          <li><strong>Type Safety</strong>: Use TypeScript to prevent mistakes at development time</li>
        </ul>
      </>
    )
  },
  {
    title: "Keep Props Focused",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Each component should have a clear purpose. Only accept props directly related to that purpose.
        </p>
        <CodeBlock
          lines={[
            '// Too many unrelated props',
            'function Button({ label, onClick, color, size, disabled, tooltip, id, className }) {',
            '  // ...',
            '}',
            '',
            '// Better: Props grouped by concern',
            'interface ButtonProps {',
            '  label: string;',
            '  onClick: () => void;',
            '  variant?: "primary" | "secondary";',
            '  size?: "sm" | "md" | "lg";',
            '  disabled?: boolean;',
            '}',
            '',
            'function Button({ label, onClick, variant = "primary", size = "md", disabled }: ButtonProps) {',
            '  // ...',
            '}'
          ]}
        />
      </>
    )
  },
  {
    title: "Use Semantic Names",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Props should have clear, semantic names that indicate their purpose:
        </p>
        <CodeBlock
          lines={[
            '// Unclear naming',
            '<UserCard data={user} handler={handleClick} flag={isAdmin} />',
            '',
            '// Clear, semantic names',
            '<UserCard',
            '  user={user}',
            '  onView={handleClick}',
            '  isAdmin={isAdmin}',
            '/>'
          ]}
        />
        <p className="mt-4 text-muted-foreground">
          <strong>Naming conventions:</strong>
        </p>
        <ul>
          <li>Use <code>on*</code> prefix for event handlers: <code>onClick</code>, <code>onSubmit</code></li>
          <li>Use <code>is*</code>, <code>has*</code> prefix for booleans: <code>isLoading</code>, <code>hasError</code></li>
          <li>Use descriptive names for data: <code>user</code>, <code>items</code>, not <code>data</code>, <code>list</code></li>
        </ul>
      </>
    )
  },
  {
    title: "Provide Sensible Defaults",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Use default values for optional props to reduce boilerplate:
        </p>
        <CodeBlock
          lines={[
            'interface InputProps {',
            '  value: string;',
            '  onChange: (value: string) => void;',
            '  type?: string;',
            '  placeholder?: string;',
            '  disabled?: boolean;',
            '}',
            '',
            'function Input({',
            '  value,',
            '  onChange,',
            '  type = "text",',
            '  placeholder = "Enter text...",',
            '  disabled = false',
            '}: InputProps) {',
            '  return (',
            '    <input',
            '      type={type}',
            '      value={value}',
            '      onChange={(e) => onChange(e.target.value)}',
            '      placeholder={placeholder}',
            '      disabled={disabled}',
            '    />',
            '  );',
            '}'
          ]}
        />
      </>
    )
  },
  {
    title: "Separate Concerns",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Avoid mixing data props with styling props. Keep them separate:
        </p>
        <CodeBlock
          lines={[
            '// Mixing concerns',
            'interface CardProps {',
            '  title: string;',
            '  backgroundColor: string;',
            '  padding: string;',
            '  borderColor: string;',
            '}',
            '',
            '// Better: Use className for styling',
            'interface CardProps {',
            '  title: string;',
            '  children: React.ReactNode;',
            '  className?: string;',
            '}',
            '',
            'function Card({ title, children, className }: CardProps) {',
            '  return (',
            '    <div className={`card ${className || ""}`}>',
            '      <h2>{title}</h2>',
            '      {children}',
            '    </div>',
            '  );',
            '}'
          ]}
        />
      </>
    )
  },
  {
    title: "Avoid Spread Props",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Be explicit about which props a component accepts. Avoid spreading unknown props:
        </p>
        <CodeBlock
          lines={[
            '// Unclear what props are accepted',
            'function Button({ children, ...rest }) {',
            '  return <button {...rest}>{children}</button>;',
            '}',
            '',
            '// Better: Explicit about what is accepted',
            'interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {',
            '  variant?: "primary" | "secondary";',
            '}',
            '',
            'function Button({ variant = "primary", children, ...rest }: ButtonProps) {',
            '  return (',
            '    <button className={`btn-${variant}`} {...rest}>',
            '      {children}',
            '    </button>',
            '  );',
            '}'
          ]}
        />
      </>
    )
  }
];

export default function PropsDesignPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Navigation */}
        <div className="mb-6">
          <Link
            href="/lesson/component-reusability-structure"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Component Reusability & Structure
          </Link>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Code className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold tracking-tight">Props Design</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Creating clear, intuitive prop interfaces for your React components
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
          quizLink="/lesson/component-reusability-structure/props-design/quiz"
          lessonId={12}
          contentSlug="props-design"
        />
      </div>
    </div>
  );
}
