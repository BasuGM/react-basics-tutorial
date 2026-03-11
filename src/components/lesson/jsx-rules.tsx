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
          JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files.
          However, JSX has specific rules you need to follow for it to work correctly.
        </p>
        <ul>
          <li><strong>Single root element</strong>: JSX expressions must return one root element</li>
          <li><strong>Close all tags</strong>: All tags must be properly closed</li>
          <li><strong>Use camelCase</strong>: HTML attributes use camelCase instead of kebab-case</li>
          <li><strong>className instead of class</strong>: Use className for CSS classes (class is reserved)</li>
        </ul>
      </>
    )
  },
  {
    title: "Single Root Element",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          JSX expressions must return a single root element. You cannot return multiple elements at the top level.
        </p>
        <CodeBlock
          lines={[
            '// ❌ This will not work - multiple root elements',
            '<div>Hello</div>',
            '<div>World</div>',
            '',
            '// ✅ This works - single root element',
            '<div>',
            '  <div>Hello</div>',
            '  <div>World</div>',
            '</div>'
          ]}
        />
      </>
    )
  },
  {
    title: "Close All Tags",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          All tags must be properly closed, including self-closing tags.
        </p>
        <CodeBlock
          lines={[
            '// ❌ Incorrect - unclosed img tag',
            '<img src="image.jpg">',
            '',
            '// ✅ Correct - self-closing tag',
            '<img src="image.jpg" />',
            '',
            '// ✅ Correct - properly closed tag',
            '<input type="text"></input>'
          ]}
        />
      </>
    )
  },
  {
    title: "CamelCase Attributes",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          HTML attributes in JSX use camelCase instead of kebab-case.
        </p>
        <CodeBlock
          lines={[
            '// ❌ Incorrect - kebab-case',
            '<div on-click={handleClick}>Click me</div>',
            '',
            '// ✅ Correct - camelCase',
            '<div onClick={handleClick}>Click me</div>',
            '',
            '// Other common camelCase attributes:',
            'onChange // instead of on-change',
            'onMouseEnter // instead of on-mouse-enter',
            'onFocus // instead of on-focus'
          ]}
        />
      </>
    )
  },
  {
    title: "className Instead of class",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Use <code>className</code> instead of <code>class</code> because <code>class</code> is a reserved keyword in JavaScript.
        </p>
        <CodeBlock
          lines={[
            '// ❌ Incorrect - class is reserved',
            '<div class="container">Content</div>',
            '',
            '// ✅ Correct - use className',
            '<div className="container">Content</div>',
            '',
            '// Dynamic classes',
            '<div className={isActive ? "active" : "inactive"}>',
            '  Toggle me',
            '</div>'
          ]}
        />
      </>
    )
  },
  {
    title: "Best Practices",
    content: (
      <ul>
        <li>Always return a single root element from your component</li>
        <li>Close all tags, including self-closing ones with <code>/&gt;</code></li>
        <li>Use camelCase for all event handlers and HTML attributes</li>
        <li>Remember <code>className</code> not <code>class</code></li>
        <li>Use fragments <code>&lt;&gt;&lt;/&gt;</code> when you need multiple root elements without a wrapper</li>
      </ul>
    )
  }
];

export default function JSXRulesPage() {
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
            <h1 className="text-3xl font-bold tracking-tight">JSX Rules</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Essential rules for writing valid JSX code
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
          quizLink="/lesson/jsx-rendering/jsx-rules/quiz"
          lessonId={3}
          contentSlug="jsx-rules"
        />
      </div>
    </div>
  );
}
