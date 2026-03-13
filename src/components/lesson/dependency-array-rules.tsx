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
          The dependency array in <code>useEffect</code> is crucial for controlling when your side effects run.
          It tells React which variables your effect depends on, so it knows when to re-run the effect.
        </p>
        <ul>
          <li>Dependency array is the second argument to <code>useEffect</code></li>
          <li>React uses shallow comparison to detect changes in dependencies</li>
          <li>Every variable used inside the effect should be listed in dependencies</li>
          <li>Forgetting dependencies can cause stale closures and bugs</li>
        </ul>
      </>
    )
  },
  {
    title: "Three Dependency Array Patterns",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          There are three main patterns for dependency arrays, each with different behavior.
        </p>
        <CodeBlock
          lines={[
            '// No dependency array - runs after every render',
            'useEffect(() => {',
            '  console.log("After every render");',
            '});',
            '',
            '// Empty dependency array - runs once on mount',
            'useEffect(() => {',
            '  console.log("Only on mount");',
            '}, []);',
            '',
            '// With dependencies - runs when dependencies change',
            'useEffect(() => {',
            '  console.log("When count or user changes");',
            '}, [count, user]);'
          ]}
        />
      </>
    )
  },
  {
    title: "Stale Closures",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          One of the most common bugs is when an effect uses an old value of a variable. This happens when you forget to add variables to the dependency array.
        </p>
        <CodeBlock
          lines={[
            '// PROBLEM: Stale closure - count is always 0',
            'const [count, setCount] = useState(0);',
            '',
            'useEffect(() => {',
            '  const timer = setInterval(() => {',
            '    console.log(count); // Always logs 0!',
            '  }, 1000);',
            '',
            '  return () => clearInterval(timer);',
            '}, []); // Missing count dependency!',
            '',
            '// SOLUTION: Add count to dependencies',
            'useEffect(() => {',
            '  const timer = setInterval(() => {',
            '    console.log(count); // Logs current count',
            '  }, 1000);',
            '',
            '  return () => clearInterval(timer);',
            '}, [count]); // Include all dependencies'
          ]}
        />
      </>
    )
  },
  {
    title: "Including All Dependencies",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Every variable from the component scope that is used in the effect must be included in the dependency array.
        </p>
        <CodeBlock
          lines={[
            'const [name, setName] = useState("");',
            'const [age, setAge] = useState(0);',
            'const friend = "Alice"; // Constant value',
            '',
            '// CORRECT: Include all used variables',
            'useEffect(() => {',
            '  console.log(`${name} is ${age} years old`);',
            '  console.log(`Best friend: ${friend}`);',
            '}, [name, age, friend]); // All dependencies listed',
            '',
            '// With object/function dependencies',
            'const user = { name, age };',
            'const handleSave = () => {};',
            '',
            'useEffect(() => {',
            '  api.saveUser(user);',
            '  handleSave();',
            '}, [user, handleSave]); // Include objects and functions too'
          ]}
        />
      </>
    )
  },
  {
    title: "Object and Function Dependencies",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Objects and functions are created new on every render, so including them always causes the effect to re-run. Use memoization to avoid this.
        </p>
        <CodeBlock
          lines={[
            'import { useCallback, useMemo } from "react";',
            '',
            '// PROBLEM: Effect runs every render because user is a new object',
            'const user = { id: 1, name: "John" };',
            'useEffect(() => {',
            '  api.saveUser(user);',
            '}, [user]); // Runs every render!',
            '',
            '// SOLUTION: Memoize the object',
            'const user = useMemo(() => ({ id: 1, name: "John" }), []);',
            'useEffect(() => {',
            '  api.saveUser(user);',
            '}, [user]); // Now runs only once',
            '',
            '// SOLUTION: Memoize callback',
            'const handleClick = useCallback(() => {',
            '  setCount(c => c + 1);',
            '}, []);',
            'useEffect(() => {',
            '  button.addEventListener("click", handleClick);',
            '}, [handleClick]); // Stable function reference'
          ]}
        />
      </>
    )
  },
  {
    title: "Best Practices",
    content: (
      <ul>
        <li>Always include a dependency array - never skip it</li>
        <li>List every variable used in the effect that comes from outside</li>
        <li>Use ESLint rule <code>exhaustive-deps</code> to catch missing dependencies</li>
        <li>Use empty array <code>[]</code> for effects that should run only once on mount</li>
        <li>Memoize objects and functions with <code>useMemo</code> and <code>useCallback</code> if needed</li>
        <li>When in doubt, include the variable in the dependency array</li>
      </ul>
    )
  }
];

export default function DependencyArrayRulesPage() {
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
            <h1 className="text-3xl font-bold tracking-tight">Dependency Array Rules</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Mastering dependency arrays in useEffect
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
          quizLink="/lesson/effects-lifecycle/dependency-array-rules/quiz"
          lessonId={7}
          contentSlug="dependency-array-rules"
        />
      </div>
    </div>
  );
}
