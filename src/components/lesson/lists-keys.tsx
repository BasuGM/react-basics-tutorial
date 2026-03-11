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
          When rendering lists in React, each item needs a unique <code>key</code> prop.
          Keys help React identify which items have changed, been added, or been removed.
        </p>
        <ul>
          <li><strong>Keys</strong>: Unique identifiers for each item in a list</li>
          <li><strong>Why keys matter</strong>: They help React optimize re-renders and maintain component state</li>
          <li><strong>Common mistake</strong>: Using array index as a key can cause bugs</li>
          <li><strong>Best practice</strong>: Use a unique ID from your data</li>
        </ul>
      </>
    )
  },
  {
    title: "Rendering Lists",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Use the <code>map()</code> function to render a list of items.
        </p>
        <CodeBlock
          lines={[
            'const items = ["Apple", "Banana", "Orange"];',
            '',
            '// Rendering a list of strings',
            '<ul>',
            '  {items.map((item, index) => (',
            '    <li key={index}>{item}</li>',
            '  ))}',
            '</ul>',
            '',
            '// Better: with objects',
            'const users = [',
            '  { id: 1, name: "Alice" },',
            '  { id: 2, name: "Bob" }',
            '];',
            '',
            '<ul>',
            '  {users.map(user => (',
            '    <li key={user.id}>{user.name}</li>',
            '  ))}',
            '</ul>'
          ]}
        />
      </>
    )
  },
  {
    title: "Why Keys Matter",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Keys help React track which items are which, especially when the list changes.
        </p>
        <CodeBlock
          lines={[
            '// Without proper keys, React might:',
            '// - Get confused about item identity',
            '// - Lose component state (like form inputs)',
            '// - Render items in the wrong order',
            '// - Have performance issues',
            '',
            '// With proper keys, React:',
            '// - Correctly identifies each item',
            '// - Maintains component state',
            '// - Updates the DOM efficiently'
          ]}
        />
      </>
    )
  },
  {
    title: "Don\'t Use Index as Key",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Using the array index as a key is problematic when the list can be reordered, filtered, or have items added/removed.
        </p>
        <CodeBlock
          lines={[
            '// ❌ Bad - using index',
            '{items.map((item, index) => (',
            '  <li key={index}>{item}</li>',
            '))}',
            '',
            '// ✅ Good - using unique ID',
            '{items.map(item => (',
            '  <li key={item.id}>{item.name}</li>',
            '))}',
            '',
            '// ✅ Good - using uuid for generated data',
             'import { v4 as uuidv4 } from "uuid";',
            '',
            '{items.map(item => (',
            '  <li key={uuidv4()}>{item}</li>',
            '))}' 
          ]}
        />
      </>
    )
  },
  {
    title: "Complex List Example",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Here's a more complex example with components and conditional rendering.
        </p>
        <CodeBlock
          lines={[
            'function TodoList({ todos }) {',
            '  return (',
            '    <ul>',
            '      {todos.map(todo => (',
            '        <li key={todo.id} className={todo.completed ? "done" : ""}>',
            '          <input type="checkbox" defaultChecked={todo.completed} />',
            '          <span>{todo.text}</span>',
            '        </li>',
            '      ))}',
            '    </ul>',
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
        <li>Always provide a <code>key</code> when rendering lists</li>
        <li>Use a unique, stable identifier (like an ID from your data)</li>
        <li>Avoid using array index as a key unless the list is static</li>
        <li>Keys should be consistent - the same item should have the same key every render</li>
        <li>Keys don't need to be consecutive or globally unique - just unique within the list</li>
      </ul>
    )
  }
];

export default function ListsKeysPage() {
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
            <h1 className="text-3xl font-bold tracking-tight">Lists & Keys</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Rendering lists efficiently with proper keys
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
          quizLink="/lesson/jsx-rendering/lists-keys/quiz"
          lessonId={3}
          contentSlug="lists-keys"
        />
      </div>
    </div>
  );
}
