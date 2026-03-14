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
          Not every situation requires a ref. Understanding when to use refs versus state is crucial for writing clean React code.
          Refs should be used sparingly and only when necessary for specific use cases.
        </p>
        <ul>
          <li><strong>Refs:</strong> For imperative DOM manipulation</li>
          <li><strong>State:</strong> For declarative UI updates</li>
          <li>Most React code should use state and props, not refs</li>
        </ul>
      </>
    )
  },
  {
    title: "When Refs ARE Necessary",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Use refs only when you need to do something that can't be done with props and state:
        </p>
        <CodeBlock
          lines={[
            '// Managing focus on an input',
            'function TextInput() {',
            '  const inputRef = useRef(null);',
            '',
            '  const focus = () => inputRef.current.focus();',
            '',
            '  return (',
            '    <>',
            '      <input ref={inputRef} />',
            '      <button onClick={focus}>Focus</button>',
            '    </>',
            '  );',
            '}'
          ]}
        />
        <p className="mt-4 text-muted-foreground">
          Other valid use cases: triggering animations, integrating with third-party DOM libraries, text/media selection.
        </p>
      </>
    )
  },
  {
    title: "When Refs are NOT Necessary",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Use state instead of refs for anything that should trigger a re-render:
        </p>
        <CodeBlock
          lines={[
            '// WRONG: Using ref for form input value',
            'const inputRef = useRef("");',
            'const handleChange = (e) => {',
            '  inputRef.current = e.target.value; // No re-render!',
            '};',
            '',
            '// RIGHT: Using state for form input value',
            'const [value, setValue] = useState("");',
            'const handleChange = (e) => {',
            '  setValue(e.target.value); // Re-renders with new value',
            '};'
          ]}
        />
      </>
    )
  },
  {
    title: "Examples: When NOT to Use Refs",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Common scenarios where state is better than refs:
        </p>
        <ul>
          <li><strong>Form values:</strong> Use state to track input values</li>
          <li><strong>Toggle visibility:</strong> Use state for showing/hiding modals</li>
          <li><strong>Counters:</strong> Use state for incrementing numbers</li>
          <li><strong>Lists:</strong> Use state for adding/removing items</li>
          <li><strong>Conditional rendering:</strong> Use state to decide what to render</li>
        </ul>
        <CodeBlock
          lines={[
            '// Use state for displaying a modal',
            'const [isOpen, setIsOpen] = useState(false);',
            '',
            'return (',
            '  <>',
            '    <button onClick={() => setIsOpen(true)}>Open</button>',
            '    {isOpen && <Modal onClose={() => setIsOpen(false)} />}',
            '  </>',
            ');'
          ]}
        />
      </>
    )
  },
  {
    title: "Decision Guide",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Ask yourself these questions:
        </p>
        <ul>
          <li>Does the UI need to update based on this value? → Use <strong>state</strong></li>
          <li>Do I need direct access to a DOM element? → Use <strong>ref</strong></li>
          <li>Should this trigger a re-render? → Use <strong>state</strong></li>
          <li>Is this imperative DOM manipulation? → Use <strong>ref</strong></li>
          <li>Can this be done declaratively? → Use <strong>state</strong></li>
        </ul>
      </>
    )
  },
  {
    title: "Best Practices",
    content: (
      <ul>
        <li>Default to state for most use cases</li>
        <li>Only use refs when absolutely necessary for DOM manipulation</li>
        <li>Avoid using refs to "make things happen" - let state drive the UI</li>
        <li>Document why you're using a ref in your code</li>
        <li>Don't access refs in lifecycle methods - refs can be changed at any time</li>
      </ul>
    )
  }
];

export default function WhenRefsAreNecessaryPage() {
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
            <h1 className="text-3xl font-bold tracking-tight">When Refs Are Necessary</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Understanding when to use refs versus state
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
          quizLink="/lesson/refs-dom-access/when-refs-are-necessary/quiz"
          lessonId={11}
          contentSlug="when-refs-are-necessary"
        />
      </div>
    </div>
  );
}
