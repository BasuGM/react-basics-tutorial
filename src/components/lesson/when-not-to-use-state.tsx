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
          Not everything should be state in React. Understanding when NOT to use state is just as important as knowing when to use it.
          Overusing state can make your code harder to maintain, slower, and more error-prone.
        </p>
        <ul>
          <li>State should only store data that affects the UI</li>
          <li>Computed values should not be state</li>
          <li>Props can often replace state</li>
          <li>Some values don't need to trigger re-renders</li>
        </ul>
      </>
    )
  },
  {
    title: "❌ Don't Use State for Computed Values",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Never store computed or derived values in state. They should be calculated on each render.
        </p>
        <CodeBlock
          lines={[
            "// ❌ Bad - storing computed value in state",
            "function Cart({ items }) {",
            "  const [total, setTotal] = useState(0);",
            "",
            "  useEffect(() => {",
            "    setTotal(items.reduce((sum, item) => sum + item.price, 0));",
            "  }, [items]);",
            "",
            "  return <div>Total: ${total}</div>;",
            "}",
            "",
            "// ✅ Good - calculate directly",
            "function Cart({ items }) {",
            "  const total = items.reduce((sum, item) => sum + item.price, 0);",
            "  return <div>Total: ${total}</div>;",
            "}"
          ]}
        />
      </>
    )
  },
  {
    title: "❌ Don't Use State Instead of Props",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          If a value comes from a parent, use props directly. Don't copy it into state unless you need local modifications.
        </p>
        <CodeBlock
          lines={[
            "// ❌ Bad - redundant state",
            "function UserProfile({ name, email }) {",
            "  const [userName, setUserName] = useState(name);",
            "  const [userEmail, setUserEmail] = useState(email);",
            "  return <div>{userName} - {userEmail}</div>;",
            "}",
            "",
            "// ✅ Good - use props directly",
            "function UserProfile({ name, email }) {",
            "  return <div>{name} - {email}</div>;",
            "}"
          ]}
        />
        <p className="mt-4 text-muted-foreground">
          Only copy props to state if you need to allow LOCAL editing without affecting the parent.
        </p>
      </>
    )
  },
  {
    title: "❌ Don't Use State for Long-Lived Values",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Values that don't change or are only needed as "instance variables" should use useRef, not useState.
        </p>
        <CodeBlock
          lines={[
            "// ❌ Bad - state triggers unnecessary re-renders",
            "function StopWatch() {",
            "  const [intervalId, setIntervalId] = useState(null);",
            "  // Every time this changes, component re-renders unnecessarily",
            "  return <div>...</div>;",
            "}",
            "",
            "// ✅ Good - use useRef for values that don't need re-renders",
            "function StopWatch() {",
            "  const intervalId = useRef(null);",
            "  // Changing this doesn't trigger a re-render",
            "  return <div>...</div>;",
            "}"
          ]}
        />
      </>
    )
  },
  {
    title: "❌ Don't Use State for Temporary Values",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Form input values don't need state if they're only used once. Use ref or handle them at submission.
        </p>
        <CodeBlock
          lines={[
            "// ❌ Bad - state for every keystroke",
            "function SearchForm() {",
            "  const [search, setSearch] = useState('');",
            "  return (",
            "    <input",
            "      value={search}",
            "      onChange={(e) => setSearch(e.target.value)}",
            "    />",
            "  );",
            "}",
            "",
            "// ✅ Good - use ref for one-time reads",
            "function SearchForm() {",
            "  const searchRef = useRef(null);",
            "  const handleSearch = () => {",
            "    const query = searchRef.current.value;",
            "    // Do something with query",
            "  };",
            "  return <input ref={searchRef} />;",
            "}"
          ]}
        />
      </>
    )
  },
  {
    title: "State Decision Tree",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Ask yourself these questions:
        </p>
        <ol className="space-y-2">
          <li><strong>Does it change?</strong> No → Don't use state</li>
          <li><strong>Do multiple components need it?</strong> Yes → Lift state up or use Context</li>
          <li><strong>Can it be computed?</strong> Yes → Don't use state</li>
          <li><strong>Does changing it require a re-render?</strong> No → Use useRef instead</li>
          <li><strong>Can the parent provide it?</strong> Yes → Use props instead</li>
        </ol>
      </>
    )
  }
];

export default function WhenNotToUseStatePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Navigation */}
        <div className="mb-6">
          <Link
            href="/lesson/props-state-derived"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Props vs State vs Derived State
          </Link>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Code className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold tracking-tight">When NOT to Use State</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Avoiding common state misuse patterns
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
          quizLink="/lesson/props-state-derived/when-not-to-use-state/quiz"
          lessonId={8}
          contentSlug="when-not-to-use-state"
        />
      </div>
    </div>
  );
}
