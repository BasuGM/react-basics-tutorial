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
          ES6 modules allow you to organize code into separate files and share functionality between them using <code>import</code> and <code>export</code>.
          This makes code more maintainable, reusable, and easier to test.
        </p>
        <ul>
          <li><strong>export</strong>: Share functions, variables, or classes from a file</li>
          <li><strong>import</strong>: Use exported code from other files</li>
          <li><strong>Modules</strong>: Each file is its own isolated scope</li>
        </ul>
      </>
    )
  },
  {
    title: "Named Exports",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Named exports allow you to export multiple items from a file. Import them using destructuring syntax.
        </p>
        <CodeBlock
          lines={[
            '// math.js - exporting functions',
            'export const add = (a, b) => a + b;',
            'export const subtract = (a, b) => a - b;',
            'export const multiply = (a, b) => a * b;',
            '',
            '// app.js - importing named exports',
            'import { add, subtract } from "./math.js";',
            'console.log(add(5, 3));      // 8',
            'console.log(subtract(5, 3)); // 2',
            '',
            '// Import all named exports as a namespace',
            'import * as math from "./math.js";',
            'console.log(math.add(5, 3));      // 8',
            'console.log(math.multiply(5, 3)); // 15'
          ]}
        />
      </>
    )
  },
  {
    title: "Default Exports",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Each file can have one default export, which is imported without destructuring syntax.
        </p>
        <CodeBlock
          lines={[
            '// logger.js - default export',
            'export default function logger(message) {',
            '  console.log(`[LOG] ${message}`);',
            '}',
            '',
            '// app.js - importing default export',
            'import logger from "./logger.js";',
            'logger("Application started"); // [LOG] Application started',
            '',
            '// Button.js - exporting a React component',
            'export default function Button({ text, onClick }) {',
            '  return <button onClick={onClick}>{text}</button>;',
            '}',
            '',
            '// App.js - importing the component',
            'import Button from "./Button.js";'
          ]}
        />
      </>
    )
  },
  {
    title: "Mixing Named and Default Exports",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          A file can have both named exports and one default export.
        </p>
        <CodeBlock
          lines={[
            '// utils.js',
            'export const helper = () => console.log("helper");',
            'export const format = (str) => str.toUpperCase();',
            '',
            'export default function main() {',
            '  console.log("Main function");',
            '}',
            '',
            '// app.js - import both named and default',
            'import main, { helper, format } from "./utils.js";',
            'main();          // Main function',
            'helper();        // helper',
            'console.log(format("hello")); // HELLO'
          ]}
        />
      </>
    )
  },
  {
    title: "Renaming Imports/Exports",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Use the <code>as</code> keyword to rename imports and exports to avoid naming conflicts.
        </p>
        <CodeBlock
          lines={[
            '// math.js',
            'export { add as addition };',
            'export { subtract as subtraction };',
            '',
            '// app.js - rename on import',
            'import { add as sum } from "./math.js";',
            'console.log(sum(5, 3)); // 8',
            '',
            '// Import with same name but different source',
            'import { formatDate as dateFormatter } from "./dateUtils.js";',
            'import { formatDate as dateStringifier } from "./stringUtils.js";'
          ]}
        />
      </>
    )
  },
  {
    title: "Common Patterns",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Common patterns for organizing module exports and imports in real applications.
        </p>
        <CodeBlock
          lines={[
            '// services/api.js - API calls',
            'export const fetchUsers = () => { /* ... */ };',
            'export const createUser = (user) => { /* ... */ };',
            '',
            '// hooks/useUsers.js - Custom hook',
            'import { fetchUsers, createUser } from "../services/api.js";',
            'export default function useUsers() { /* ... */ }',
            '',
            '// components/UserList.js - React component',
            'import useUsers from "../hooks/useUsers.js";',
            'export default function UserList() { /* ... */ }',
            '',
            '// App.js - Main app file',
            'import UserList from "./components/UserList.js";'
          ]}
        />
      </>
    )
  },
  {
    title: "Best Practices",
    content: (
      <ul>
        <li>Use named exports for multiple items, default for a primary export</li>
        <li>Keep modules focused on a single responsibility</li>
        <li>Use descriptive file names that reflect what they export</li>
        <li>Avoid circular imports - import A uses B, B uses A</li>
        <li>Export at the end of the file for better overview of what's public</li>
        <li>Use default exports for React components when there's only one per file</li>
        <li>Consider using a barrel file (index.js) to re-export multiple modules</li>
      </ul>
    )
  }
];

export default function ImportExportPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Navigation */}
        <div className="mb-6">
          <Link
            href="/lesson/javascript-basics-for-react"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to JavaScript Basics
          </Link>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Code className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold tracking-tight">Import and Export</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Organize code with ES6 modules
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
          quizLink="/lesson/javascript-basics-for-react/import-export/quiz"
          lessonId={1}
          contentSlug="import-export"
        />
      </div>
    </div>
  );
}
