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
          Event handling in React allows you to respond to user interactions like clicks, form submissions, and input changes.
          React uses a synthetic event system that wraps native browser events for cross-browser compatibility.
        </p>
        <ul>
          <li>React events are named using camelCase (onClick, onChange) instead of lowercase (onclick, onchange)</li>
          <li>Event handlers are passed as functions, not strings</li>
          <li>React uses event delegation for better performance</li>
        </ul>
      </>
    )
  },
  {
    title: "Basic Event Handling",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Attach event handlers to elements using camelCase attribute names.
        </p>
        <CodeBlock
          lines={[
            'export default function Button() {',
            '  const handleClick = () => {',
            '    console.log("Button clicked!");',
            '  };',
            '',
            '  return <button onClick={handleClick}>Click me</button>;',
            '}'
          ]}
        />
      </>
    )
  },
  {
    title: "Passing Arguments to Event Handlers",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          You can pass additional arguments to event handlers using arrow functions or bind.
        </p>
        <CodeBlock
          lines={[
            'export default function ItemList() {',
            '  const handleDelete = (id) => {',
            '    console.log("Delete item:", id);',
            '  };',
            '',
            '  return (',
            '    <button onClick={() => handleDelete(123)}>',
            '      Delete Item',
            '    </button>',
            '  );',
            '}'
          ]}
        />
      </>
    )
  },
  {
    title: "Common Events",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          React supports all standard DOM events with camelCase naming.
        </p>
        <CodeBlock
          lines={[
            '// Click events',
            '<button onClick={handleClick}>Click</button>',
            '',
            '// Input events',
            '<input onChange={handleChange} />',
            '',
            '// Form events',
            '<form onSubmit={handleSubmit}></form>',
            '',
            '// Focus events',
            '<input onFocus={handleFocus} onBlur={handleBlur} />',
            '',
            '// Mouse events',
            '<div onMouseEnter={handleHover} onMouseLeave={handleLeave} />'
          ]}
        />
      </>
    )
  },
  {
    title: "The Event Object",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Event handlers receive a synthetic event object with useful properties and methods.
        </p>
        <CodeBlock
          lines={[
            'export default function Form() {',
            '  const handleChange = (e) => {',
            '    console.log(e.target.value); // Get input value',
            '  };',
            '',
            '  const handleSubmit = (e) => {',
            '    e.preventDefault(); // Prevent default form submission',
            '    // Handle form submission',
            '  };',
            '',
            '  return <input onChange={handleChange} />;',
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
        <li>Name event handlers with <code>handle</code> prefix (handleClick, handleChange)</li>
        <li>Use arrow functions inline for simple handlers or define them outside for reusability</li>
        <li>Call <code>preventDefault()</code> to prevent default browser behavior when needed</li>
        <li>Don't call the handler function directly - pass the function reference</li>
        <li>Event objects are pooled in React for performance - save needed values before async operations</li>
      </ul>
    )
  }
];

export default function EventHandlingPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Navigation */}
        <div className="mb-6">
          <Link
            href="/lesson/state-events"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to State & Events
          </Link>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Code className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold tracking-tight">Event Handling</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Responding to user interactions in React
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
          quizLink="/lesson/state-events/event-handling/quiz"
          lessonId={6}
          contentSlug="event-handling"
        />
      </div>
    </div>
  );
}
