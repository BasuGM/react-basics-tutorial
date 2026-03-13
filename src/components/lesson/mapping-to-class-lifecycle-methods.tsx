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
          Understanding how <code>useEffect</code> maps to class component lifecycle methods helps you transition between the two patterns.
          Both approaches solve the same problems, but hooks provide a more flexible and composable way to handle side effects.
        </p>
        <ul>
          <li><code>componentDidMount</code> → <code>useEffect</code> with empty dependency array</li>
          <li><code>componentDidUpdate</code> → <code>useEffect</code> with dependencies</li>
          <li><code>componentWillUnmount</code> → cleanup function in <code>useEffect</code></li>
          <li>Hooks combine all three in a single function</li>
        </ul>
      </>
    )
  },
  {
    title: "Mount: componentDidMount",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          <code>componentDidMount</code> runs once when the component mounts. Use <code>useEffect</code> with an empty dependency array.
        </p>
        <CodeBlock
          lines={[
            '// Class component',
            'class MyComponent extends React.Component {',
            '  componentDidMount() {',
            '    console.log("Component mounted");',
            '    this.getData();',
            '  }',
            '',
            '  render() {',
            '    return <div>Hello</div>;',
            '  }',
            '}',
            '',
            '// Functional component with hook',
            'function MyComponent() {',
            '  useEffect(() => {',
            '    console.log("Component mounted");',
            '    getData();',
            '  }, []);',
            '',
            '  return <div>Hello</div>;',
            '}'
          ]}
        />
      </>
    )
  },
  {
    title: "Update: componentDidUpdate",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          <code>componentDidUpdate</code> runs after every update. Use <code>useEffect</code> with a dependency array but without dependencies, or with specific dependencies.
        </p>
        <CodeBlock
          lines={[
            '// Class component',
            'class MyComponent extends React.Component {',
            '  componentDidUpdate(prevProps, prevState) {',
            '    if (prevProps.id !== this.props.id) {',
            '      this.fetchUser(this.props.id);',
            '    }',
            '  }',
            '}',
            '',
            '// Functional component with hook',
            'function MyComponent({ id }) {',
            '  useEffect(() => {',
            '    fetchUser(id);',
            '  }, [id]); // Runs whenever id changes',
            '}',
            '',
            '// Run after every render (like componentDidUpdate without condition)',
            'useEffect(() => {',
            '  console.log("Component updated");',
            '}); // No dependency array'
          ]}
        />
      </>
    )
  },
  {
    title: "Unmount: componentWillUnmount",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          <code>componentWillUnmount</code> runs when the component unmounts. Use the cleanup function returned from <code>useEffect</code>.
        </p>
        <CodeBlock
          lines={[
            '// Class component',
            'class MyComponent extends React.Component {',
            '  componentDidMount() {',
            '    this.subscription = subscribe();',
            '  }',
            '',
            '  componentWillUnmount() {',
            '    this.subscription.unsubscribe();',
            '  }',
            '}',
            '',
            '// Functional component with hook',
            'function MyComponent() {',
            '  useEffect(() => {',
            '    const subscription = subscribe();',
            '',
            '    // Cleanup function (like componentWillUnmount)',
            '    return () => {',
            '      subscription.unsubscribe();',
            '    };',
            '  }, []);',
            '}'
          ]}
        />
      </>
    )
  },
  {
    title: "Combining Lifecycle Methods",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Class components often need multiple lifecycle methods. Hooks can combine them into a single effect for better organization.
        </p>
        <CodeBlock
          lines={[
            '// Class component - lifecycle spread across methods',
            'class DataComponent extends React.Component {',
            '  componentDidMount() {',
            '    this.subscribe();',
            '    this.startTimer();',
            '  }',
            '',
            '  componentWillUnmount() {',
            '    this.unsubscribe();',
            '    clearInterval(this.timer);',
            '  }',
            '}',
            '',
            '// Hooks - cleaner, all related logic together',
            'function DataComponent() {',
            '  useEffect(() => {',
            '    subscribe();',
            '    const timer = setInterval(...);',
            '',
            '    return () => {',
            '      unsubscribe();',
            '      clearInterval(timer);',
            '    };',
            '  }, []);',
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
        <li>Use <code>useEffect</code> with empty array <code>[]</code> for mount/unmount logic</li>
        <li>Use <code>useEffect</code> with specific dependencies for update logic</li>
        <li>Always return a cleanup function if you set up subscriptions or timers</li>
        <li>Multiple <code>useEffect</code> calls are better than trying to handle everything in one</li>
        <li>Hooks make it easier to extract and reuse logic between components</li>
        <li>Understand the mapping to class lifecycle methods when migrating legacy code</li>
      </ul>
    )
  }
];

export default function MappingToClassLifecycleMethodsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Navigation */}
        <div className="mb-6">
          <Link
            href="/lesson/effects-lifecycle"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Effects & Lifecycle
          </Link>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Code className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold tracking-tight">Mapping to Class Lifecycle Methods</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Understanding how useEffect relates to class component lifecycle methods
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
          quizLink="/lesson/effects-lifecycle/mapping-to-class-lifecycle-methods/quiz"
          lessonId={7}
          contentSlug="mapping-to-class-lifecycle-methods"
        />
      </div>
    </div>
  );
}
