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
          <code>useEffect</code> is a React Hook that lets you perform side effects in functional components.
          Side effects are operations that interact with the outside world: API calls, subscriptions, timers, logging, etc.
        </p>
        <ul>
          <li>Runs after the component renders</li>
          <li>Can specify when to run using a dependency array</li>
          <li>Replaces class component lifecycle methods: componentDidMount, componentDidUpdate, componentWillUnmount</li>
          <li>You can define cleanup functions to prevent memory leaks</li>
        </ul>
      </>
    )
  },
  {
    title: "Basic useEffect",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          The simplest form of <code>useEffect</code> runs after every render.
        </p>
        <CodeBlock
          lines={[
            'import { useEffect } from "react";',
            '',
            'export default function MyComponent() {',
            '  useEffect(() => {',
            '    console.log("Component rendered!");',
            '  });',
            '',
            '  return <div>Hello</div>;',
            '}'
          ]}
        />
        <p className="mt-4 text-muted-foreground">
          Without a dependency array, the effect runs after every render. This can cause performance issues if used carelessly.
        </p>
      </>
    )
  },
  {
    title: "Dependency Array",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          The dependency array controls when the effect runs. It's the second argument to <code>useEffect</code>.
        </p>
        <CodeBlock
          lines={[
            '// Runs once on mount',
            'useEffect(() => {',
            '  console.log("Mounted!");',
            '}, []);',
            '',
            '// Runs when count changes',
            'useEffect(() => {',
            '  console.log("Count:", count);',
            '}, [count]);',
            '',
            '// Runs when count or user changes',
            'useEffect(() => {',
            '  console.log("Count or user changed");',
            '}, [count, user]);',
            '',
            '// Runs after every render (no dependency array)',
            'useEffect(() => {',
            '  console.log("After every render");',
            '});'
          ]}
        />
      </>
    )
  },
  {
    title: "Cleanup Functions",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Return a cleanup function from <code>useEffect</code> to unsubscribe or cancel operations when the component unmounts or before the effect runs again.
        </p>
        <CodeBlock
          lines={[
            'useEffect(() => {',
            '  const subscription = api.subscribe("news", (data) => {',
            '    setNews(data);',
            '  });',
            '',
            '  // Cleanup function',
            '  return () => {',
            '    subscription.unsubscribe();',
            '  };',
            '}, []);',
            '',
            '// Timer cleanup example',
            'useEffect(() => {',
            '  const timer = setTimeout(() => {',
            '    console.log("Logged after 5 seconds");',
            '  }, 5000);',
            '',
            '  return () => clearTimeout(timer);',
            '}, []);'
          ]}
        />
      </>
    )
  },
  {
    title: "Common Patterns",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Learn common useEffect patterns for typical use cases.
        </p>
        <CodeBlock
          lines={[
            '// Fetch data on mount',
            'useEffect(() => {',
            '  fetch("/api/user")',
            '    .then(res => res.json())',
            '    .then(data => setUser(data));',
            '}, []);',
            '',
            '// Update document title',
            'useEffect(() => {',
            '  document.title = `Hello ${name}`;',
            '}, [name]);',
            '',
            '// Local storage sync',
            'useEffect(() => {',
            '  localStorage.setItem("theme", theme);',
            '}, [theme]);'
          ]}
        />
      </>
    )
  },
  {
    title: "Best Practices",
    content: (
      <ul>
        <li>Always include a dependency array to control when the effect runs</li>
        <li>List all dependencies that the effect uses - don't skip any</li>
        <li>Use cleanup functions to prevent memory leaks and cancel subscriptions</li>
        <li>Keep effects focused on a single concern - create multiple effects if needed</li>
        <li>Avoid changing state during render to prevent infinite loops</li>
        <li>Be careful with object/function dependencies - they're created on every render</li>
      </ul>
    )
  }
];

export default function UseEffectPage() {
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
            <h1 className="text-3xl font-bold tracking-tight">useEffect Hook</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Handling side effects in React functional components
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
          quizLink="/lesson/effects-lifecycle/use-effect/quiz"
          lessonId={7}
          contentSlug="use-effect"
        />
      </div>
    </div>
  );
}
