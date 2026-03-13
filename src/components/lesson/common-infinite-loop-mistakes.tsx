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
          Infinite loops in <code>useEffect</code> are one of the most common bugs in React applications.
          They occur when the effect itself causes changes to its own dependencies, triggering the effect to run again and again.
        </p>
        <ul>
          <li>Infinite loops waste resources and freeze the browser</li>
          <li>Most are caused by missing or incorrect dependency arrays</li>
          <li>Others are caused by state updates inside effects that affect dependencies</li>
          <li>Learning to recognize and prevent them is essential for React development</li>
        </ul>
      </>
    )
  },
  {
    title: "Missing Dependency Array",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          The most common cause: calling <code>setState</code> in an effect without a dependency array causes the effect to run after every render.
        </p>
        <CodeBlock
          lines={[
            '// WRONG: No dependency array - infinite loop!',
            'const [count, setCount] = useState(0);',
            '',
            'useEffect(() => {',
            '  setCount(count + 1); // Updates state',
            '  // Component re-renders',
            '  // Effect runs again because no dependency array',
            '  // Infinite loop!',
            '});',
            '',
            '// CORRECT: Add dependency array',
            'useEffect(() => {',
            '  setCount(count + 1);',
            '}, []); // Run only once on mount'
          ]}
        />
      </>
    )
  },
  {
    title: "State Dependency Mistakes",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Including state in dependencies while updating that state can cause infinite loops.
        </p>
        <CodeBlock
          lines={[
            '// WRONG: Uses count, increments count, has count as dependency',
            'const [count, setCount] = useState(0);',
            '',
            'useEffect(() => {',
            '  setCount(count + 1); // Updates count',
            '}, [count]); // count changes, effect runs again - infinite loop!',
            '',
            '// CORRECT: Use functional update to remove dependency',
            'useEffect(() => {',
            '  setCount(prevCount => prevCount + 1);',
            '}, []); // No dependencies needed, uses previous value',
            '',
            '// OR: Only depend on what you need',
            'useEffect(() => {',
            '  if (count < 10) {',
            '    setCount(count + 1);',
            '  }',
            '}, [count]); // Eventual termination'
          ]}
        />
      </>
    )
  },
  {
    title: "Object and Array Dependencies",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Objects and arrays created in the component body are new on every render, causing infinite loops when used as dependencies.
        </p>
        <CodeBlock
          lines={[
            '// WRONG: Object created every render',
            'const config = { url: "api/data" }; // New object each render',
            '',
            'useEffect(() => {',
            '  fetch(config.url); // Depends on config',
            '}, [config]); // config is always new, infinite loop!',
            '',
            '// CORRECT: Memoize the object',
            'const config = useMemo(() => ({ url: "api/data" }), []);',
            'useEffect(() => {',
            '  fetch(config.url);',
            '}, [config]); // config stays same, no infinite loop',
            '',
            '// OR: Use values directly',
            'const url = "api/data";',
            'useEffect(() => {',
            '  fetch(url);',
            '}, [url]); // Primitive value works fine'
          ]}
        />
      </>
    )
  },
  {
    title: "API Calls and Fetch",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Forgetting dependencies when fetching data can cause repeated API calls.
        </p>
        <CodeBlock
          lines={[
            '// WRONG: Fetches repeatedly',
            'useEffect(() => {',
            '  fetch("/api/user").then(res => res.json()).then(setUser);',
            '}); // No dependency array!',
            '',
            '// CORRECT: Fetch once on mount',
            'useEffect(() => {',
            '  fetch("/api/user").then(res => res.json()).then(setUser);',
            '}, []); // Empty array - fetch only once',
            '',
            '// With dependencies - fetch when ID changes',
            'useEffect(() => {',
            '  fetch(`/api/user/${userId}`)',
            '    .then(res => res.json())',
            '    .then(setUser);',
            '}, [userId]); // Fetch when userId changes'
          ]}
        />
      </>
    )
  },
  {
    title: "Best Practices to Avoid Infinite Loops",
    content: (
      <ul>
        <li>Always include a dependency array - never forget it</li>
        <li>List all dependencies that your effect uses</li>
        <li>Use functional updates (<code>prevState =&gt; ...</code>) to avoid state dependencies</li>
        <li>Memoize objects and functions with <code>useMemo</code> and <code>useCallback</code></li>
        <li>Use browser DevTools to detect infinite loops (check Network tab for repeated requests)</li>
        <li>Enable ESLint's <code>exhaustive-deps</code> rule to catch missing dependencies</li>
        <li>If you need to update state based on props, consider lifting state up instead</li>
      </ul>
    )
  }
];

export default function CommonInfiniteLoopMistakesPage() {
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
            <h1 className="text-3xl font-bold tracking-tight">Common Infinite Loop Mistakes</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Identifying and preventing infinite loops in useEffect
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
          quizLink="/lesson/effects-lifecycle/common-infinite-loop-mistakes/quiz"
          lessonId={7}
          contentSlug="common-infinite-loop-mistakes"
        />
      </div>
    </div>
  );
}
