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
          React Fragments let you group a list of elements without adding extra nodes to the DOM.
          They're useful when a component needs to return multiple elements but you don't want to wrap them in a div.
        </p>
        <ul>
          <li><strong>Fragment syntax</strong>: <code>&lt;&gt;&lt;/&gt;</code></li>
          <li><strong>Fragment import</strong>: <code>React.Fragment</code> or short syntax</li>
          <li><strong>Use case</strong>: Return multiple elements without a wrapper div</li>
          <li><strong>Benefits</strong>: Cleaner DOM structure, avoids unnecessary nesting</li>
        </ul>
      </>
    )
  },
  {
    title: "What are Fragments?",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Fragments are a way to return multiple elements from a component without wrapping them in a parent element.
        </p>
        <CodeBlock
          lines={[
            '// Without Fragment - creates an extra div',
            'function MyComponent() {',
            '  return (',
            '    <div>',
            '      <h1>Title</h1>',
            '      <p>Content</p>',
            '    </div>',
            '  );',
            '}',
            '',
            '// With Fragment - no extra div',
            'function MyComponent() {',
            '  return (',
            '    <>',
            '      <h1>Title</h1>',
            '      <p>Content</p>',
            '    </>',
            '  );',
            '}'
          ]}
        />
      </>
    )
  },
  {
    title: "Fragment Syntax",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          There are two ways to use fragments in React.
        </p>
        <CodeBlock
          lines={[
            '// Short syntax (most common)',
            'import React from "react";',
            '',
            '<>',
            '  <Header />',
            '  <Main />',
            '  <Footer />',
            '</>',
            '',
            '// Full Fragment syntax',
            '<React.Fragment>',
            '  <Header />',
            '  <Main />',
            '  <Footer />',
            '</React.Fragment>'
          ]}
        />
      </>
    )
  },
  {
    title: "When to Use Fragments",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Fragments are helpful in several scenarios.
        </p>
        <CodeBlock
          lines={[
            '// Rendering columns in a table',
            'function Columns() {',
            '  return (',
            '    <>',
            '      <td>Name</td>',
            '      <td>Email</td>',
            '    </>',
            '  );',
            '}',
            '',
            '// Grouping elements without wrapper',
            'function Dialog({ title, message }) {',
            '  return (',
            '    <>',
            '      <h1>{title}</h1>',
            '      <p>{message}</p>',
            '    </>',
            '  );',
            '}'
          ]}
        />
      </>
    )
  },
  {
    title: "Fragment with Key",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          When rendering fragments in a list, you need to use the full <code>React.Fragment</code> syntax with a key prop.
        </p>
        <CodeBlock
          lines={[
            'import React from "react";',
            '',
            'function List({ items }) {',
            '  return (',
            '    <ul>',
            '      {items.map(item => (',
            '        <React.Fragment key={item.id}>',
            '          <li>{item.title}</li>',
            '          <li className="subtitle">{item.subtitle}</li>',
            '        </React.Fragment>',
            '      ))}',
            '    </ul>',
            '  );',
            '}',
            '',
            '// Note: Short syntax <></> cannot be used with key prop'
          ]}
        />
      </>
    )
  },
  {
    title: "Best Practices",
    content: (
      <ul>
        <li>Use the short syntax <code>&lt;&gt;&lt;/&gt;</code> when you don't need a key</li>
        <li>Use <code>React.Fragment</code> when rendering fragments in a list with keys</li>
        <li>Use fragments instead of unnecessary div wrappers to keep the DOM clean</li>
        <li>Fragments don't add any extra nodes to the DOM</li>
        <li>Common use cases: table rows, list items, grouping related elements</li>
      </ul>
    )
  }
];

export default function FragmentsPage() {
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
            <h1 className="text-3xl font-bold tracking-tight">Fragments</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Grouping elements without adding extra DOM nodes
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
          quizLink="/lesson/jsx-rendering/fragments/quiz"
          lessonId={3}
          contentSlug="fragments"
        />
      </div>
    </div>
  );
}
