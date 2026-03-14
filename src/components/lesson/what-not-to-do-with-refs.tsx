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
          While refs are powerful tools, they can easily be misused. Understanding what NOT to do with refs is just as
          important as knowing when to use them. Poor ref usage leads to buggy, hard-to-maintain code.
        </p>
        <ul>
          <li><strong>Avoid:</strong> Using refs to "make things happen" in the UI</li>
          <li><strong>Avoid:</strong> Treating refs like state for data that should trigger renders</li>
          <li><strong>Avoid:</strong> Overcomplicating code by mixing refs and state</li>
          <li><strong>Remember:</strong> State should drive your UI, not refs</li>
        </ul>
      </>
    )
  },
  {
    title: "Anti-Pattern: Using Refs Like State",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          DON'T use refs to store data that should trigger a re-render:
        </p>
        <CodeBlock
          lines={[
            '// ❌ WRONG: Using ref as state',
            'function Counter() {',
            '  const countRef = useRef(0);',
            '',
            '  const increment = () => {',
            '    countRef.current += 1;',
            '    console.log(countRef.current); // Updates but no re-render!',
            '  };',
            '',
            '  return (',
            '    <>',
            '      <p>Count: {countRef.current}</p>',
            '      <button onClick={increment}>Increment</button>',
            '    </>',
            '  );',
            '}',
            '',
            '// ✅ RIGHT: Use state',
            'function Counter() {',
            '  const [count, setCount] = useState(0);',
            '',
            '  const increment = () => {',
            '    setCount(count + 1);',
            '  };',
            '',
            '  return (',
            '    <>',
            '      <p>Count: {count}</p>',
            '      <button onClick={increment}>Increment</button>',
            '    </>',
            '  );',
            '}'
          ]}
        />
      </>
    )
  },
  {
    title: "Anti-Pattern: Controlling the UI With Refs",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          DON'T use refs to manually control what gets rendered:
        </p>
        <CodeBlock
          lines={[
            '// ❌ WRONG: Using ref to control visibility',
            'function Modal() {',
            '  const isOpenRef = useRef(false);',
            '',
            '  const toggle = () => {',
            '    isOpenRef.current = !isOpenRef.current;',
            '    // Manual DOM manipulation needed!',
            '  };',
            '',
            '  return (',
            '    <>',
            '      <button onClick={toggle}>Toggle Modal</button>',
            '    </>',
            '  );',
            '}',
            '',
            '// ✅ RIGHT: Use state to control rendering',
            'function Modal() {',
            '  const [isOpen, setIsOpen] = useState(false);',
            '',
            '  return (',
            '    <>',
            '      <button onClick={() => setIsOpen(!isOpen)}>',
            '        Toggle Modal',
            '      </button>',
            '      {isOpen && <ModalContent />}',
            '    </>',
            '  );',
            '}'
          ]}
        />
      </>
    )
  },
  {
    title: "Anti-Pattern: Accessing Refs Before Render",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          DON'T access refs in the render method or before the component is mounted:
        </p>
        <CodeBlock
          lines={[
            '// ❌ WRONG: Accessing ref in render',
            'function MyComponent() {',
            '  const inputRef = useRef(null);',
            '  const value = inputRef.current?.value; // null in render!',
            '',
            '  return <input ref={inputRef} />;',
            '}',
            '',
            '// ✅ RIGHT: Access refs in effects or event handlers',
            'function MyComponent() {',
            '  const inputRef = useRef(null);',
            '',
            '  const handleClick = () => {',
            '    // Safe to access here',
            '    console.log(inputRef.current.value);',
            '  };',
            '',
            '  return (',
            '    <>',
            '      <input ref={inputRef} />',
            '      <button onClick={handleClick}>Get Value</button>',
            '    </>',
            '  );',
            '}'
          ]}
        />
      </>
    )
  },
  {
    title: "Anti-Pattern: Passing Refs Like Props",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Refs can't be passed as normal props. Use <code>forwardRef</code> if you absolutely need to:
        </p>
        <CodeBlock
          lines={[
            '// ❌ WRONG: Passing ref as a prop',
            'function Input({ ref }) {',
            '  return <input ref={ref} />;',
            '}',
            '',
            '// ✅ RIGHT: Use forwardRef',
            'const Input = forwardRef((props, ref) => {',
            '  return <input ref={ref} />;',
            '});',
            '',
            '// Now you can use it:',
            'function Parent() {',
            '  const inputRef = useRef(null);',
            '  return <Input ref={inputRef} />;',
            '}'
          ]}
        />
      </>
    )
  },
  {
    title: "Best Practices Summary",
    content: (
      <ul>
        <li>Use <strong>state</strong> for any data that should update the UI</li>
        <li>Use <strong>refs</strong> only for imperative DOM access</li>
        <li>Access refs safely in effects and event handlers, not in render</li>
        <li>If you find yourself reaching for a ref, ask if state would work better</li>
        <li>Remember: <strong>Refs break the declarative model of React</strong></li>
        <li>Most React apps should rarely need refs</li>
      </ul>
    )
  }
];

export default function WhatNotToDoWithRefsPage() {
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
            <h1 className="text-3xl font-bold tracking-tight">What NOT to Do With Refs</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Common pitfalls and anti-patterns when using refs
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
          quizLink="/lesson/refs-dom-access/what-not-to-do-with-refs/quiz"
          lessonId={11}
          contentSlug="what-not-to-do-with-refs"
        />
      </div>
    </div>
  );
}
