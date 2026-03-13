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
          Cleanup functions in <code>useEffect</code> are optional functions that run before the component unmounts or before the effect runs again.
          They're essential for preventing memory leaks and cleaning up resources.
        </p>
        <ul>
          <li>Cleanup functions run when the component unmounts</li>
          <li>They also run before an effect re-runs if dependencies change</li>
          <li>Used to cancel subscriptions, clear timers, and remove event listeners</li>
          <li>Helps prevent memory leaks and resource exhaustion</li>
        </ul>
      </>
    )
  },
  {
    title: "Basic Cleanup Pattern",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Return a function from <code>useEffect</code> to define cleanup logic.
        </p>
        <CodeBlock
          lines={[
            'useEffect(() => {',
            '  // Setup code',
            '  console.log("Effect running");',
            '',
            '  // Cleanup function',
            '  return () => {',
            '    console.log("Cleaning up");',
            '  };',
            '}, []);'
          ]}
        />
      </>
    )
  },
  {
    title: "Cleaning Up Timers",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Always clear timers and intervals to prevent them from running after unmount.
        </p>
        <CodeBlock
          lines={[
            'useEffect(() => {',
            '  const timer = setTimeout(() => {',
            '    setCount(c => c + 1);',
            '  }, 1000);',
            '',
            '  // Cleanup: clear the timeout',
            '  return () => clearTimeout(timer);',
            '}, []);',
            '',
            'useEffect(() => {',
            '  const interval = setInterval(() => {',
            '    console.log("Tick");',
            '  }, 1000);',
            '',
            '  // Cleanup: clear the interval',
            '  return () => clearInterval(interval);',
            '}, []);'
          ]}
        />
      </>
    )
  },
  {
    title: "Cleaning Up Subscriptions",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Unsubscribe from event emitters, real-time databases, and APIs to prevent memory leaks.
        </p>
        <CodeBlock
          lines={[
            'useEffect(() => {',
            '  const subscription = eventEmitter.subscribe("message", (data) => {',
            '    console.log(data);',
            '  });',
            '',
            '  // Cleanup: unsubscribe when component unmounts',
            '  return () => subscription.unsubscribe();',
            '}, []);',
            '',
            '// Firebase example',
            'useEffect(() => {',
            '  const unsubscribe = db.collection("users").onSnapshot(snap => {',
            '    setUsers(snap.docs);',
            '  });',
            '',
            '  return () => unsubscribe();',
            '}, []);'
          ]}
        />
      </>
    )
  },
  {
    title: "Cleaning Up Event Listeners",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Remove event listeners to prevent duplicate handlers and memory leaks.
        </p>
        <CodeBlock
          lines={[
            'useEffect(() => {',
            '  const handleResize = () => {',
            '    console.log("Window resized");',
            '  };',
            '',
            '  window.addEventListener("resize", handleResize);',
            '',
            '  // Cleanup: remove the event listener',
            '  return () => {',
            '    window.removeEventListener("resize", handleResize);',
            '  };',
            '}, []);',
            '',
            '// Multiple listeners',
            'useEffect(() => {',
            '  const handleKeyPress = (e) => { /* ... */ };',
            '  const handleMouseMove = (e) => { /* ... */ };',
            '',
            '  document.addEventListener("keydown", handleKeyPress);',
            '  document.addEventListener("mousemove", handleMouseMove);',
            '',
            '  return () => {',
            '    document.removeEventListener("keydown", handleKeyPress);',
            '    document.removeEventListener("mousemove", handleMouseMove);',
            '  };',
            '}, []);'
          ]}
        />
      </>
    )
  },
  {
    title: "Best Practices",
    content: (
      <ul>
        <li>Always clean up side effects that could cause memory leaks</li>
        <li>Clear timers and intervals in the cleanup function</li>
        <li>Unsubscribe from streams and real-time databases</li>
        <li>Remove event listeners that you added</li>
        <li>Close WebSocket connections and API connections</li>
        <li>Cancel any pending async operations (use AbortController)</li>
        <li>The cleanup function runs before unmount and before the effect re-runs</li>
      </ul>
    )
  }
];

export default function CleanupFunctionsPage() {
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
            <h1 className="text-3xl font-bold tracking-tight">Cleanup Functions</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Preventing memory leaks with useEffect cleanup
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
          quizLink="/lesson/effects-lifecycle/cleanup-functions/quiz"
          lessonId={7}
          contentSlug="cleanup-functions"
        />
      </div>
    </div>
  );
}
