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
          Data flow is one of the most important concepts in React. Understanding how data moves through your application
          is essential for building maintainable and predictable components.
        </p>
        <ul>
          <li><strong>Props</strong>: Data passed from parent to child (unidirectional)</li>
          <li><strong>State</strong>: Data that belongs to a component and can change</li>
          <li><strong>Derived State</strong>: Values calculated from props or state (often unnecessary)</li>
        </ul>
      </>
    )
  },
  {
    title: "Unidirectional Data Flow",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          React enforces a unidirectional (one-way) data flow. Data flows from parent components down to child components through props.
        </p>
        <CodeBlock
          lines={[
            "// Parent Component",
            "export function Parent() {",
            "  const userName = 'Alice';",
            "  return <Child name={userName} />;",
            "}",
            "",
            "// Child Component",
            "function Child({ name }) {",
            "  return <div>Hello, {name}!</div>;",
            "}"
          ]}
        />
        <p className="mt-4 text-muted-foreground">
          The Parent component owns the userName state and passes it down to Child as a prop.
        </p>
      </>
    )
  },
  {
    title: "Props Are Read-Only",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Child components cannot modify props directly. Props are like function parameters - they're read-only.
        </p>
        <CodeBlock
          lines={[
            "function Child({ name }) {",
            "  // ❌ This won't work",
            "  // name = 'Bob';",
            "",
            "  // ✅ To update data, communicate back to parent",
            "  const handleChange = () => {",
            "    // Call a callback prop",
            "  };",
            "",
            "  return <div>{name}</div>;",
            "}"
          ]}
        />
      </>
    )
  },
  {
    title: "Communication Back to Parent",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          To send data from child back to parent, use callback functions passed as props.
        </p>
        <CodeBlock
          lines={[
            "// Parent",
            "function Parent() {",
            "  const [name, setName] = useState('Alice');",
            "",
            "  const handleNameChange = (newName) => {",
            "    setName(newName);",
            "  };",
            "",
            "  return <Child name={name} onNameChange={handleNameChange} />;",
            "}",
            "",
            "// Child",
            "function Child({ name, onNameChange }) {",
            "  return (",
            "    <input",
            "      value={name}",
            "      onChange={(e) => onNameChange(e.target.value)}",
            "    />",
            "  );",
            "}"
          ]}
        />
      </>
    )
  },
  {
    title: "State vs Props Summary",
    content: (
      <>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Aspect</th>
                <th className="text-left p-2">Props</th>
                <th className="text-left p-2">State</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2 font-semibold">Owner</td>
                <td className="p-2">Parent component</td>
                <td className="p-2">The component itself</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-semibold">Mutable</td>
                <td className="p-2">Read-only</td>
                <td className="p-2">Can be changed</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-semibold">Passed down</td>
                <td className="p-2">Yes</td>
                <td className="p-2">No (unless lifted)</td>
              </tr>
              <tr>
                <td className="p-2 font-semibold">Triggers re-render</td>
                <td className="p-2">Yes</td>
                <td className="p-2">Yes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    )
  }
];

export default function DataFlowPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Navigation */}
        <div className="mb-6">
          <Link
            href="/lesson/props-state-derived"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Props vs State vs Derived State
          </Link>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Code className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold tracking-tight">Data Flow</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Understanding how data moves through React components
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
          quizLink="/lesson/props-state-derived/data-flow/quiz"
          lessonId={8}
          contentSlug="data-flow"
        />
      </div>
    </div>
  );
}
