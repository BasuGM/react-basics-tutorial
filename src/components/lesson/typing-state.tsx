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
          State in React components needs to be typed for type safety. TypeScript helps you define what type of data
          your state can hold and prevents accidental data type mismatches.
        </p>
        <ul>
          <li><strong>useState typing</strong>: Define the type of state values</li>
          <li><strong>Type inference</strong>: TypeScript can infer types from initial values</li>
          <li><strong>Union types</strong>: Handle state that can be multiple types</li>
        </ul>
      </>
    )
  },
  {
    title: "Basic useState Typing",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Use generics to specify the state type in <code>useState&lt;T&gt;</code>.
        </p>
        <CodeBlock
          lines={[
            'import { useState } from "react";',
            '',
            'function Counter() {',
            '  const [count, setCount] = useState<number>(0);',
            '  ',
            '  return (',
            '    <div>',
            '      <p>Count: {count}</p>',
            '      <button onClick={() => setCount(count + 1)}>',
            '        Increment',
            '      </button>',
            '    </div>',
            '  );',
            '}'
          ]}
        />
      </>
    )
  },
  {
    title: "Type Inference",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          TypeScript can infer the state type from the initial value, so you can omit the generic.
        </p>
        <CodeBlock
          lines={[
            '// TypeScript infers const [count, setCount] = useState<number>(0);',
            'const [count, setCount] = useState(0);',
            '',
            '// TypeScript infers const [name, setName] = useState<string>("");',
            'const [name, setName] = useState("");',
            '',
            '// TypeScript infers const [user, setUser] = useState<User | undefined>(undefined);',
            'const [user, setUser] = useState<User | undefined>(undefined);'
          ]}
        />
      </>
    )
  },
  {
    title: "Complex State Types",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          State can be objects, arrays, or unions of multiple types.
        </p>
        <CodeBlock
          lines={[
            'interface User {',
            '  id: number;',
            '  name: string;',
            '  email: string;',
            '}',
            '',
            'function UserProfile() {',
            '  const [user, setUser] = useState<User | null>(null);',
            '  const [users, setUsers] = useState<User[]>([]);',
            '  const [loading, setLoading] = useState<boolean>(false);',
            '  ',
            '  return <div>{user?.name}</div>;',
            '}'
          ]}
        />
      </>
    )
  },
  {
    title: "Union Types for State",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Use union types when state can be one of several values.
        </p>
        <CodeBlock
          lines={[
            'type Status = "idle" | "loading" | "success" | "error";',
            '',
            'function DataFetcher() {',
            '  const [status, setStatus] = useState<Status>("idle");',
            '  ',
            '  if (status === "loading") return <p>Loading...</p>;',
            '  if (status === "error") return <p>Error occurred</p>;',
            '  if (status === "success") return <p>Data loaded</p>;',
            '  ',
            '  return <button onClick={() => setStatus("loading")}>Fetch</button>;',
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
        <li>Always type complex state objects explicitly with interfaces/types</li>
        <li>Use type inference for primitive types if the initial value is clear</li>
        <li>Use union types to represent state that can be multiple values</li>
        <li>Keep state types close to where they're defined</li>
        <li>Avoid using <code>any</code> for state - be specific with types</li>
      </ul>
    )
  }
];

export default function TypingStatePage() {
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
            <h1 className="text-3xl font-bold tracking-tight">Typing State</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            How to type React state with TypeScript
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
          quizLink="/lesson/typescript-basics/typing-state/quiz"
          lessonId={2}
          contentSlug="typing-state"
        />
      </div>
    </div>
  );
}
