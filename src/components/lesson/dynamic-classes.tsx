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
          Dynamic classes allow you to conditionally apply CSS classes to elements based on state, props, or other logic.
          This is essential for creating interactive and responsive UI components.
        </p>
        <ul>
          <li><strong>String interpolation</strong>: Using template literals for dynamic class names</li>
          <li><strong>Conditional classes</strong>: Adding classes based on conditions</li>
          <li><strong>Class libraries</strong>: Using tools like classname or clsx for cleaner syntax</li>
          <li><strong>Tailwind CSS</strong>: Conditional Tailwind classes</li>
        </ul>
      </>
    )
  },
  {
    title: "String Interpolation",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          The simplest way to apply dynamic classes is using template literals.
        </p>
        <CodeBlock
          lines={[
            'function Button({ isActive }) {',
            '  return (',
            '    <button className={`btn ${isActive ? "btn-active" : "btn-inactive"}`}>',
            '      Click me',
            '    </button>',
            '  );',
            '}'
          ]}
        />
      </>
    )
  },
  {
    title: "Conditional Classes with Ternary",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Use ternary operators to conditionally apply different class names.
        </p>
        <CodeBlock
          lines={[
            'function StatusIndicator({ status }) {',
            '  return (',
            '    <div className={status === "success" ? "text-green-600" : "text-red-600"}>',
            '      Status: {status}',
            '    </div>',
            '  );',
            '}'
          ]}
        />
      </>
    )
  },
  {
    title: "Using classnames Library",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          The <code>classnames</code> library (or clsx) provides a cleaner syntax for conditional classes.
        </p>
        <CodeBlock
          lines={[
            'import classnames from "classnames";',
            '',
            'function Card({ isSelected, isDisabled }) {',
            '  return (',
            '    <div className={classnames("card", {',
            '      "card-selected": isSelected,',
            '      "card-disabled": isDisabled',
            '    })}>',
            '      Card content',
            '    </div>',
            '  );',
            '}'
          ]}
        />
        <p className="mt-4 text-sm text-muted-foreground">
          <strong>Install:</strong> <code>npm install classnames</code>
        </p>
      </>
    )
  },
  {
    title: "Dynamic Tailwind Classes",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          With Tailwind CSS, you can conditionally apply utility classes.
        </p>
        <CodeBlock
          lines={[
            'function Alert({ severity }) {',
            '  const bgColor = severity === "error" ? "bg-red-100" : "bg-yellow-100";',
            '  const textColor = severity === "error" ? "text-red-800" : "text-yellow-800";',
            '',
            '  return (',
            '    <div className={`${bgColor} ${textColor} p-4 rounded`}>',
            '      Alert message',
            '    </div>',
            '  );',
            '}'
          ]}
        />
        <p className="mt-4 text-sm text-muted-foreground">
          <strong>Tip:</strong> Avoid dynamic class names as strings. Always use complete class names in your code for Tailwind to detect them.
        </p>
      </>
    )
  },
  {
    title: "Complex Class Logic",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          For complex logic, extract class assignment into a function or variable.
        </p>
        <CodeBlock
          lines={[
            'function FormInput({ hasError, isRequired, isDisabled }) {',
            '  const getInputClass = () => {',
            '    let classes = "input";',
            '    if (hasError) classes += " input-error";',
            '    if (isRequired) classes += " input-required";',
            '    if (isDisabled) classes += " input-disabled";',
            '    return classes;',
            '  };',
            '',
            '  return <input className={getInputClass()} />;',
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
        <li>Use template literals for simple conditional classes</li>
        <li>Use classnames/clsx library for multiple conditions</li>
        <li>Extract complex class logic into helper functions or variables</li>
        <li>Keep class logic readable - avoid deeply nested ternaries</li>
        <li>With Tailwind, use complete class names (avoid generating them dynamically)</li>
        <li>Consider CSS variables for complex theme-based styling</li>
      </ul>
    )
  }
];

export default function DynamicClassesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Navigation */}
        <div className="mb-6">
          <Link
            href="/lesson/conditional-dynamic-ui"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Conditional & Dynamic UI
          </Link>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Code className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold tracking-tight">Dynamic Classes</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Learn how to apply CSS classes dynamically based on component state and props
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
          quizLink="/lesson/conditional-dynamic-ui/dynamic-classes/quiz"
          lessonId={9}
          contentSlug="dynamic-classes"
        />
      </div>
    </div>
  );
}
