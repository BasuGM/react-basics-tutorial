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
          In React, form inputs can be managed in two different ways: <strong>controlled</strong> and <strong>uncontrolled</strong> components.
          Understanding the difference is crucial for building robust forms.
        </p>
        <ul>
          <li><strong>Controlled</strong>: React state manages the input value</li>
          <li><strong>Uncontrolled</strong>: The DOM manages the input value directly</li>
        </ul>
      </>
    )
  },
  {
    title: "Controlled Components",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          In a controlled component, React state controls the input value. Every change updates the state.
        </p>
        <CodeBlock
          lines={[
            "import { useState } from 'react';",
            "",
            "export default function ControlledInput() {",
            "  const [value, setValue] = useState('');",
            "",
            "  return (",
            "    <input",
            "      value={value}",
            "      onChange={(e) => setValue(e.target.value)}",
            "      placeholder='Type something...'",
            "    />",
            "  );",
            "}"
          ]}
        />
        <p className="mt-4 text-muted-foreground">
          With controlled components, you have immediate access to the input value at any time through state.
        </p>
      </>
    )
  },
  {
    title: "Uncontrolled Components",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          In an uncontrolled component, the DOM manages the input value. You access it only when needed using refs.
        </p>
        <CodeBlock
          lines={[
            "import { useRef } from 'react';",
            "",
            "export default function UncontrolledInput() {",
            "  const inputRef = useRef(null);",
            "",
            "  const handleSubmit = () => {",
            "    console.log(inputRef.current.value);",
            "  };",
            "",
            "  return (",
            "    <>",
            "      <input ref={inputRef} placeholder='Type something...' />",
            "      <button onClick={handleSubmit}>Submit</button>",
            "    </>",
            "  );",
            "}"
          ]}
        />
        <p className="mt-4 text-muted-foreground">
          With uncontrolled components, you only access the value when you need it (e.g., on form submission).
        </p>
      </>
    )
  },
  {
    title: "Comparing the Two",
    content: (
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold mb-2">Controlled Components</h4>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            <li>React controls the input value</li>
            <li>State updates on every keystroke</li>
            <li>Better for validation and conditional rendering</li>
            <li>More predictable and easier to test</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Uncontrolled Components</h4>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            <li>DOM controls the input value</li>
            <li>State only updates when accessed</li>
            <li>Better for file inputs and integrations</li>
            <li>Slightly simpler for simple cases</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: "When to Use Each",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          <strong>Use Controlled Components:</strong>
        </p>
        <ul className="list-disc list-inside mb-4 text-muted-foreground">
          <li>When you need real-time validation</li>
          <li>When input affects other parts of the UI</li>
          <li>When you need to clear or reset the form programmatically</li>
          <li>For most form inputs in React apps</li>
        </ul>
        <p className="mb-4 text-muted-foreground">
          <strong>Use Uncontrolled Components:</strong>
        </p>
        <ul className="list-disc list-inside text-muted-foreground">
          <li>For file inputs</li>
          <li>When integrating with non-React code</li>
          <li>For simple forms where you only need the value on submit</li>
        </ul>
      </>
    )
  }
];

export default function ControlledVsUncontrolledPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Navigation */}
        <div className="mb-6">
          <Link
            href="/lesson/forms-basics"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Forms Basics
          </Link>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Code className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold tracking-tight">Controlled vs Uncontrolled</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Understanding different approaches to managing form inputs in React
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
          quizLink="/lesson/forms-basics/controlled-vs-uncontrolled/quiz"
          lessonId={10}
          contentSlug="controlled-vs-uncontrolled"
        />
      </div>
    </div>
  );
}
