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
          Folder structure is crucial for keeping your React application organized and maintainable.
          A good folder structure makes it easier to find files, understand the project, and scale as it grows.
        </p>
        <ul>
          <li><strong>Organization</strong>: Group related files together logically</li>
          <li><strong>Scalability</strong>: Structure that grows with your project</li>
          <li><strong>Clarity</strong>: Other developers should understand the structure quickly</li>
          <li><strong>Consistency</strong>: Follow conventions throughout the project</li>
        </ul>
      </>
    )
  },
  {
    title: "By Feature Structure",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Organize folders by feature or domain. This groups all related components, logic, and styles together.
        </p>
        <CodeBlock
          lines={[
            'src/',
            '├── features/',
            '│   ├── users/',
            '│   │   ├── components/',
            '│   │   ├── hooks/',
            '│   │   ├── services/',
            '│   │   └── types.ts',
            '│   ├── products/',
            '│   │   ├── components/',
            '│   │   ├── hooks/',
            '│   │   └── types.ts',
            '│   └── orders/',
            '│       ├── components/',
            '│       └── types.ts',
            '├── shared/',
            '│   ├── components/',
            '│   ├── hooks/',
            '│   ├── utils/',
            '│   └── types.ts',
            '└── App.tsx'
          ]}
        />
        <p className="mt-4 text-muted-foreground">
          <strong>Benefits:</strong> Easy to find related files, self-contained features, can be removed/renamed easily.
        </p>
      </>
    )
  },
  {
    title: "By Type Structure",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Organize folders by file type (components, hooks, utils, etc.). Good for small projects.
        </p>
        <CodeBlock
          lines={[
            'src/',
            '├── components/',
            '│   ├── Button.tsx',
            '│   ├── Card.tsx',
            '│   ├── Header.tsx',
            '│   └── ...',
            '├── hooks/',
            '│   ├── useAuth.ts',
            '│   ├── useFetch.ts',
            '│   └── ...',
            '├── utils/',
            '│   ├── helpers.ts',
            '│   ├── validators.ts',
            '│   └── ...',
            '├── services/',
            '│   ├── api.ts',
            '│   └── auth.ts',
            '└── App.tsx'
          ]}
        />
        <p className="mt-4 text-muted-foreground">
          <strong>Benefits:</strong> Simple structure, easy to start with. <strong>Drawbacks:</strong> Scales poorly, becomes hard to find things in large projects.
        </p>
      </>
    )
  },
  {
    title: "Best Practices",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          <strong>Index files:</strong> Use <code>index.ts</code>/<code>index.tsx</code> for clean imports:
        </p>
        <CodeBlock
          lines={[
            '// components/Button/Button.tsx',
            'export function Button() { ... }',
            '',
            '// components/Button/index.ts',
            'export * from "./Button";',
            '',
            '// Usage: cleaner imports',
            'import { Button } from "@/components/Button";'
          ]}
        />
        <p className="mt-4 text-muted-foreground">
          <strong>Share common code:</strong> Use <code>shared</code>, <code>common</code>, or <code>lib</code> folders for utilities used across features.
        </p>
        <p className="mt-4 text-muted-foreground">
          <strong>Co-locate styles:</strong> Keep component styles next to the component:
        </p>
        <CodeBlock
          lines={[
            'components/Button/',
            '├── Button.tsx',
            '├── Button.module.css',
            '└── index.ts'
          ]}
        />
        <p className="mt-4 text-muted-foreground">
          <strong>Avoid deep nesting:</strong> Keep your folder structure relatively flat. Max 3-4 levels deep.
        </p>
      </>
    )
  },
  {
    title: "Folder Naming Conventions",
    content: (
      <ul>
        <li>Use <strong>kebab-case</strong> for folder names: <code>user-profile</code>, <code>product-list</code></li>
        <li>Use <strong>PascalCase</strong> for component folder names: <code>Button</code>, <code>UserCard</code></li>
        <li>Use plural for collection folders: <code>components</code>, <code>hooks</code>, <code>utils</code></li>
        <li>Use singular or descriptive names for feature folders: <code>auth</code>, <code>dashboard</code></li>
      </ul>
    )
  }
];

export default function FolderStructurePage() {
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
            <h1 className="text-3xl font-bold tracking-tight">Folder Structure</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Organizing your React project for scalability and maintainability
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
          quizLink="/lesson/component-reusability-structure/folder-structure/quiz"
          lessonId={12}
          contentSlug="folder-structure"
        />
      </div>
    </div>
  );
}
