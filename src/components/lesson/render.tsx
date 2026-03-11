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
          The <code>render()</code> method is the only <strong>required method</strong> in a class component.
          It returns the JSX that should be displayed on the screen. The render method must be pure and cannot modify state or side effects.
        </p>
        <ul>
          <li><strong>Required method</strong>: Every class component must have a render method</li>
          <li><strong>Returns JSX</strong>: Describes what should appear on screen</li>
          <li><strong>Pure function</strong>: Should not modify state or have side effects</li>
          <li><strong>Called frequently</strong>: React calls render whenever props or state change</li>
        </ul>
      </>
    )
  },
  {
    title: "Basic render() Method",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          The simplest render method returns a single JSX element or fragment.
        </p>
        <CodeBlock
          lines={[
            'class Welcome extends React.Component {',
            '  render() {',
            '    return <h1>Welcome to React</h1>;',
            '  }',
            '}',
            '',
            '// Equivalent functional component:',
            'function Welcome() {',
            '  return <h1>Welcome to React</h1>;',
            '}'
          ]}
        />
      </>
    )
  },
  {
    title: "Using props and state in render()",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Access props with <code>this.props</code> and state with <code>this.state</code> inside render().
        </p>
        <CodeBlock
          lines={[
            'class UserCard extends React.Component {',
            '  constructor(props) {',
            '    super(props);',
            '    this.state = { isOnline: false };',
            '  }',
            '',
            '  render() {',
            '    return (',
            '      <div className="card">',
            '        <h2>{this.props.name}</h2>',
            '        <p>Status: {this.state.isOnline ? "Online" : "Offline"}</p>',
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
    title: "Conditional Rendering in render()",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          You can use conditional logic inside render() to display different content based on props or state.
        </p>
        <CodeBlock
          lines={[
            'class LoginButton extends React.Component {',
            '  constructor(props) {',
            '    super(props);',
            '    this.state = { isLoggedIn: false };',
            '  }',
            '',
            '  render() {',
            '    if (this.state.isLoggedIn) {',
            '      return <button>Logout</button>;',
            '    }',
            '    return <button>Login</button>;',
            '  }',
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
        <li>Keep render() pure - no side effects or state mutations</li>
        <li>Don't call setState() inside render()</li>
        <li>Extract complex logic into separate methods</li>
        <li>Use conditional rendering to display different content</li>
        <li>Return null to render nothing</li>
        <li>Avoid creating new objects/arrays directly in render()</li>
        <li>For side effects, use lifecycle methods like componentDidMount()</li>
      </ul>
    )
  }
];

export default function RenderPage() {
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
            <h1 className="text-3xl font-bold tracking-tight">render() Method</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            The required method that returns JSX
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
          quizLink="/lesson/class-components-legacy/render/quiz"
          lessonId={5}
          contentSlug="render"
        />
      </div>
    </div>
  );
}
