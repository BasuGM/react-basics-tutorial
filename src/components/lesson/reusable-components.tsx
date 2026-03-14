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
          A reusable component is a React component designed to be used in multiple places throughout your application.
          Rather than writing the same code repeatedly, you extract it into a component that can be configured through props.
        </p>
        <ul>
          <li><strong>Reduces code duplication</strong>: Write once, use many times</li>
          <li><strong>Easier maintenance</strong>: Update the component in one place</li>
          <li><strong>Consistent behavior</strong>: All instances behave the same way</li>
          <li><strong>Easier testing</strong>: Test the component once, reuse many times</li>
        </ul>
      </>
    )
  },
  {
    title: "Non-Reusable Component",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          This component is hardcoded with specific values and cannot be customized:
        </p>
        <CodeBlock
          lines={[
            'function UserCard() {',
            '  return (',
            '    <div className="card">',
            '      <h2>John Doe</h2>',
            '      <p>john@example.com</p>',
            '      <button>View Profile</button>',
            '    </div>',
            '  );',
            '}'
          ]}
        />
        <p className="mt-4 text-muted-foreground">
          If you need to display a different user, you have to create a new component or duplicate this code.
        </p>
      </>
    )
  },
  {
    title: "Making it Reusable",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Extract hardcoded values into props to make the component reusable:
        </p>
        <CodeBlock
          lines={[
            'interface UserCardProps {',
            '  name: string;',
            '  email: string;',
            '  onViewProfile?: () => void;',
            '}',
            '',
            'function UserCard({ name, email, onViewProfile }: UserCardProps) {',
            '  return (',
            '    <div className="card">',
            '      <h2>{name}</h2>',
            '      <p>{email}</p>',
            '      <button onClick={onViewProfile}>View Profile</button>',
            '    </div>',
            '  );',
            '}'
          ]}
        />
        <p className="mt-4 text-muted-foreground">
          Now you can use <code>UserCard</code> with different data:
        </p>
        <CodeBlock
          lines={[
            '<UserCard',
            '  name="John Doe"',
            '  email="john@example.com"',
            '  onViewProfile={() => alert("View John")}',
            '/>',
            '',
            '<UserCard',
            '  name="Jane Smith"',
            '  email="jane@example.com"',
            '  onViewProfile={() => alert("View Jane")}',
            '/>'
          ]}
        />
      </>
    )
  },
  {
    title: "Making it More Flexible",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Use <code>children</code> prop to make components even more flexible:
        </p>
        <CodeBlock
          lines={[
            'interface CardProps {',
            '  title: string;',
            '  children: React.ReactNode;',
            '}',
            '',
            'function Card({ title, children }: CardProps) {',
            '  return (',
            '    <div className="card">',
            '      <h2>{title}</h2>',
            '      {children}',
            '    </div>',
            '  );',
            '}'
          ]}
        />
        <p className="mt-4 text-muted-foreground">
          This generic Card component can be used for anything:
        </p>
        <CodeBlock
          lines={[
            '<Card title="User Profile">',
            '  <p>Email: john@example.com</p>',
            '</Card>',
            '',
            '<Card title="Product">',
            '  <img src="product.jpg" />',
            '  <p>Price: $29.99</p>',
            '</Card>'
          ]}
        />
      </>
    )
  },
  {
    title: "Best Practices",
    content: (
      <ul>
        <li>Keep component logic simple and focused on one responsibility</li>
        <li>Define clear, well-documented props using TypeScript interfaces</li>
        <li>Provide sensible default values where appropriate</li>
        <li>Use <code>children</code> prop for flexible content composition</li>
        <li>Avoid hardcoding values that might vary between uses</li>
        <li>Test reusable components thoroughly before using them widely</li>
      </ul>
    )
  }
];

export default function ReusableComponentsPage() {
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
            <h1 className="text-3xl font-bold tracking-tight">Reusable Components</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Design components that can be used in multiple places throughout your application
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
          quizLink="/lesson/component-reusability-structure/reusable-components/quiz"
          lessonId={12}
          contentSlug="reusable-components"
        />
      </div>
    </div>
  );
}
