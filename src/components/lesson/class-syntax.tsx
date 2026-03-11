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
          Before React introduced Hooks and functional components, <strong>class components</strong> were the primary way to build React applications.
          Class components extend <code>React.Component</code> and use the object-oriented programming paradigm.
        </p>
        <ul>
          <li><strong>Class syntax</strong>: Components are JavaScript classes</li>
          <li><strong>render() method</strong>: Required method that returns JSX</li>
          <li><strong>this keyword</strong>: Access props and state using <code>this</code></li>
          <li><strong>Lifecycle methods</strong>: Hook into component lifecycle</li>
        </ul>
      </>
    )
  },
  {
    title: "Basic Class Component",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          A simple class component that extends <code>React.Component</code>.
        </p>
        <CodeBlock
          lines={[
            'import React from "react";',
            '',
            'class Welcome extends React.Component {',
            '  render() {',
            '    return <h1>Hello, World!</h1>;',
            '  }',
            '}',
            '',
            'export default Welcome;'
          ]}
        />
      </>
    )
  },
  {
    title: "Constructor and Props",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Class components access props through <code>this.props</code>. The constructor receives props.
        </p>
        <CodeBlock
          lines={[
            'class Greeting extends React.Component {',
            '  constructor(props) {',
            '    super(props);  // Must call super(props)',
            '  }',
            '',
            '  render() {',
            '    return <h1>Hello, {this.props.name}!</h1>;',
            '  }',
            '}',
            '',
            '// Usage:',
            '<Greeting name="Alice" />'
          ]}
        />
      </>
    )
  },
  {
    title: "State in Class Components",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          State is initialized in the constructor and accessed via <code>this.state</code>. Update it with <code>this.setState()</code>.
        </p>
        <CodeBlock
          lines={[
            'class Counter extends React.Component {',
            '  constructor(props) {',
            '    super(props);',
            '    this.state = { count: 0 };',
            '  }',
            '',
            '  increment = () => {',
            '    this.setState({ count: this.state.count + 1 });',
            '  }',
            '',
            '  render() {',
            '    return (',
            '      <div>',
            '        <p>Count: {this.state.count}</p>',
            '        <button onClick={this.increment}>+1</button>',
            '      </div>',
            '    );',
            '  }',
            '}'
          ]}
        />
      </>
    )
  },
  {
    title: "Key Differences from Functional Components",
    content: (
      <ul>
        <li>Class components use <code>this</code> to access props and state</li>
        <li>State is initialized in constructor: <code>this.state = {"{ ... }"}</code></li>
        <li>Update state with <code>this.setState()</code>, not direct assignment</li>
        <li>Must have a <code>render()</code> method that returns JSX</li>
        <li>Use lifecycle methods like <code>componentDidMount()</code> instead of Hooks</li>
        <li>More verbose than modern functional components with Hooks</li>
      </ul>
    )
  }
];

export default function ClassSyntaxPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Navigation */}
        <div className="mb-6">
          <Link
            href="/lesson/class-components-legacy"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Class Components
          </Link>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Code className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold tracking-tight">Class Syntax</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Understanding React class component syntax
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
          quizLink="/lesson/class-components-legacy/class-syntax/quiz"
          lessonId={5}
          contentSlug="class-syntax"
        />
      </div>
    </div>
  );
}
