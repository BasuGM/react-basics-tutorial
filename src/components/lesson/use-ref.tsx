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
          <code>useRef</code> is a React Hook that lets you access DOM elements or keep mutable values that persist across renders.
          Unlike state, updating a ref does not trigger a re-render.
        </p>
        <ul>
          <li><strong>DOM Access:</strong> Get direct access to DOM elements</li>
          <li><strong>Mutable values:</strong> Store values that persist but don't cause re-renders</li>
          <li><strong>Performance:</strong> Useful when you need to interact with the DOM directly without state updates</li>
        </ul>
      </>
    )
  },
  {
    title: "Creating a Ref",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Create a ref using <code>useRef()</code> with an initial value. The ref has a <code>current</code> property that holds the actual value.
        </p>
        <CodeBlock
          lines={[
            'import { useRef } from "react";',
            '',
            'export default function TextInput() {',
            '  const inputRef = useRef(null);',
            '',
            '  const focusInput = () => {',
            '    inputRef.current.focus();',
            '  };',
            '',
            '  return (',
            '    <>',
            '      <input ref={inputRef} />',
            '      <button onClick={focusInput}>Focus Input</button>',
            '    </>',
            '  );',
            '}'
          ]}
        />
      </>
    )
  },
  {
    title: "Refs vs State",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Refs are different from state. Updating a ref doesn't trigger a re-render.
        </p>
        <CodeBlock
          lines={[
            '// State causes re-render when updated',
            'const [count, setCount] = useState(0);',
            '',
            '// Ref does NOT cause re-render when updated',
            'const countRef = useRef(0);',
            '',
            'const increment = () => {',
            '  countRef.current += 1;',
            '  console.log(countRef.current); // Updates but no re-render',
            '};'
          ]}
        />
      </>
    )
  },
  {
    title: "Accessing DOM Elements",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Use refs to access DOM properties directly without state:
        </p>
        <CodeBlock
          lines={[
            'function TextInput() {',
            '  const inputRef = useRef(null);',
            '',
            '  const handleClick = () => {',
            '    // Access DOM element directly',
            '    console.log(inputRef.current.value);',
            '    inputRef.current.style.borderColor = "red";',
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
    title: "When to Use Refs",
    content: (
      <ul>
        <li>Managing focus on input elements</li>
        <li>Triggering animations</li>
        <li>Integrating with third-party DOM libraries</li>
        <li>Selecting text or media playback</li>
        <li>Storing timeout or interval IDs</li>
      </ul>
    )
  },
  {
    title: "When NOT to Use Refs",
    content: (
      <ul>
        <li>Anything that can be expressed declaratively (use state instead)</li>
        <li>Storing component logic that should trigger re-renders</li>
        <li>Managing data that affects the UI</li>
        <li>Replacing normal prop-based communication between components</li>
      </ul>
    )
  }
];

export default function UseRefPage() {
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
            <h1 className="text-3xl font-bold tracking-tight">useRef</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Accessing DOM elements and storing mutable values with useRef
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
          quizLink="/lesson/refs-dom-access/use-ref/quiz"
          lessonId={11}
          contentSlug="use-ref"
        />
      </div>
    </div>
  );
}
