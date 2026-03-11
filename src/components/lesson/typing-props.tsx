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
          Props in React are how parent components pass data to child components. TypeScript allows us to define
          the shape and types of props, ensuring type safety and better IDE support.
        </p>
        <ul>
          <li><strong>Props typing</strong>: Define what data a component accepts</li>
          <li><strong>Type safety</strong>: Catch errors at compile time, not runtime</li>
          <li><strong>Better documentation</strong>: Props types serve as inline documentation</li>
        </ul>
      </>
    )
  },
  {
    title: "Basic Props Typing",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Define props using an <code>interface</code> or <code>type</code>.
        </p>
        <CodeBlock
          lines={[
            'interface ButtonProps {',
            '  label: string;',
            '  onClick: () => void;',
            '  disabled?: boolean;',
            '}',
            '',
            'function Button({ label, onClick, disabled }: ButtonProps) {',
            '  return <button onClick={onClick} disabled={disabled}>{label}</button>;',
            '}'
          ]}
        />
      </>
    )
  },
  {
    title: "Optional Props",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Use the <code>?</code> operator to make props optional.
        </p>
        <CodeBlock
          lines={[
            'interface CardProps {',
            '  title: string;',
            '  description?: string; // Optional',
            '  image?: string; // Optional',
            '}',
            '',
            'function Card({ title, description, image }: CardProps) {',
            '  return (',
            '    <div>',
            '      <h2>{title}</h2>',
            '      {description && <p>{description}</p>}',
            '      {image && <img src={image} />}',
            '    </div>',
            '  );',
            '}'
          ]}
        />
      </>
    )
  },
  {
    title: "Complex Props Types",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Props can have complex types including objects, arrays, and functions.
        </p>
        <CodeBlock
          lines={[
            'interface UserCardProps {',
            '  user: {',
            '    id: number;',
            '    name: string;',
            '    email: string;',
            '  };',
            '  tags: string[];',
            '  onUpdate: (id: number, data: unknown) => void;',
            '}',
            '',
            'function UserCard({ user, tags, onUpdate }: UserCardProps) {',
            '  return <div>{user.name}</div>;',
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
        <li>Always type your component props explicitly</li>
        <li>Use interfaces for object shapes, types for unions and primitives</li>
        <li>Keep prop interfaces close to where they're used</li>
        <li>Use optional chaining and nullish coalescing for optional props</li>
        <li>Avoid using <code>any</code> - be specific with your types</li>
      </ul>
    )
  }
];

export default function TypingPropsPage() {
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
            <h1 className="text-3xl font-bold tracking-tight">Typing Props</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            How to type React component props for type safety
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
          quizLink="/lesson/typescript-basics/typing-props/quiz"
          lessonId={2}
          contentSlug="typing-props"
        />
      </div>
    </div>
  );
}
