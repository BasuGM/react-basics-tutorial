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
          One of the most practical uses of refs is managing focus on input elements.
          This allows you to programmatically direct user attention to a specific input field without relying on state changes.
        </p>
        <ul>
          <li><strong>Focus management:</strong> Direct user attention to specific inputs</li>
          <li><strong>Better UX:</strong> Improve user experience with intentional focus control</li>
          <li><strong>Imperative action:</strong> A perfect use case for refs since it's imperative DOM manipulation</li>
        </ul>
      </>
    )
  },
  {
    title: "Basic Focus Example",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Use a ref to access an input element and call its <code>focus()</code> method:
        </p>
        <CodeBlock
          lines={[
            'import { useRef } from "react";',
            '',
            'export default function TextInput() {',
            '  const inputRef = useRef(null);',
            '',
            '  const handleClick = () => {',
            '    inputRef.current.focus();',
            '  };',
            '',
            '  return (',
            '    <>',
            '      <input ref={inputRef} placeholder="Click to focus" />',
            '      <button onClick={handleClick}>',
            '        Focus Input',
            '      </button>',
            '    </>',
            '  );',
            '}'
          ]}
        />
      </>
    )
  },
  {
    title: "Focusing When Component Mounts",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Use <code>useEffect</code> to focus an input when the component first mounts:
        </p>
        <CodeBlock
          lines={[
            'import { useRef, useEffect } from "react";',
            '',
            'export default function SearchInput() {',
            '  const searchRef = useRef(null);',
            '',
            '  useEffect(() => {',
            '    // Focus on mount',
            '    searchRef.current.focus();',
            '  }, []);',
            '',
            '  return (',
            '    <input',
            '      ref={searchRef}',
            '      type="search"',
            '      placeholder="Search..."',
            '    />',
            '  );',
            '}'
          ]}
        />
      </>
    )
  },
  {
    title: "Focusing on Error",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Focus an input when validation fails, directing user attention to the error:
        </p>
        <CodeBlock
          lines={[
            'import { useRef, useState } from "react";',
            '',
            'export default function Form() {',
            '  const emailRef = useRef(null);',
            '  const [email, setEmail] = useState("");',
            '  const [error, setError] = useState("");',
            '',
            '  const handleSubmit = (e) => {',
            '    e.preventDefault();',
            '    if (!email.includes("@")) {',
            '      setError("Invalid email");',
            '      emailRef.current.focus();',
            '      return;',
            '    }',
            '    // Submit form',
            '  };',
            '',
            '  return (',
            '    <form onSubmit={handleSubmit}>',
            '      <input',
            '        ref={emailRef}',
            '        value={email}',
            '        onChange={(e) => setEmail(e.target.value)}',
            '        placeholder="Email"',
            '      />',
            '      {error && <p>{error}</p>}',
            '      <button type="submit">Submit</button>',
            '    </form>',
            '  );',
            '}'
          ]}
        />
      </>
    )
  },
  {
    title: "Focusing Next Input",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Focus the next input field after the user completes the current one:
        </p>
        <CodeBlock
          lines={[
            'function MultiInputForm() {',
            '  const input1Ref = useRef(null);',
            '  const input2Ref = useRef(null);',
            '',
            '  const handleInput1Change = () => {',
            '    if (input1Ref.current.value.length === 3) {',
            '      input2Ref.current.focus();',
            '    }',
            '  };',
            '',
            '  return (',
            '    <>',
            '      <input',
            '        ref={input1Ref}',
            '        onChange={handleInput1Change}',
            '        maxLength="3"',
            '        placeholder="Enter 3 chars"',
            '      />',
            '      <input ref={input2Ref} placeholder="Auto-focuses" />',
            '    </>',
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
        <li>Only focus for good UX reasons (errors, form flow, accessibility)</li>
        <li>Use <code>useEffect</code> with proper dependencies for focus on mount</li>
        <li>Consider accessibility: focus should feel natural to the user</li>
        <li>Don't overuse focus management - let users navigate naturally when possible</li>
        <li>Always null-check the ref before calling methods on it</li>
      </ul>
    )
  }
];

export default function FocusingInputsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Navigation */}
        <div className="mb-6">
          <Link
            href="/lesson/refs-dom-access"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Refs & DOM Access
          </Link>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Code className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold tracking-tight">Focusing Inputs</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Managing input focus with refs for better user experience
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
          quizLink="/lesson/refs-dom-access/focusing-inputs/quiz"
          lessonId={11}
          contentSlug="focusing-inputs"
        />
      </div>
    </div>
  );
}
