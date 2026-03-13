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
          Derived state—storing values in state that can be computed from props or other state—is a common source of bugs in React.
          When you store derived values, they can become out of sync with their source, leading to confusing behavior.
        </p>
        <ul>
          <li><strong>Derived state</strong>: Values that are calculated from props or other state</li>
          <li>Derived state often causes synchronization bugs</li>
          <li>The solution is usually to calculate values on each render instead</li>
        </ul>
      </>
    )
  },
  {
    title: "Anti-Pattern: Mirroring Props in State",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          The most common mistake: copying props to state and forgetting to update them when props change.
        </p>
        <CodeBlock
          lines={[
            "// ❌ Anti-pattern: This can get out of sync",
            "function UserDisplay({ userId }) {",
            "  const [id, setId] = useState(userId);",
            "",
            "  // If userId prop changes, id state won't update automatically",
            "  return <div>User ID: {id}</div>;",
            "}",
            "",
            "// Parent changes userId prop, but child still shows old id"
          ]}
        />
        <p className="mt-4 text-muted-foreground">
          Even if you use useEffect to sync it, you're adding unnecessary complexity.
        </p>
      </>
    )
  },
  {
    title: "Anti-Pattern: Computing in useEffect",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Don't store computed values in state and update them with useEffect. Calculate them directly.
        </p>
        <CodeBlock
          lines={[
            "// ❌ Anti-pattern: Computing in useEffect",
            "function PriceCalculator({ items }) {",
            "  const [total, setTotal] = useState(0);",
            "",
            "  useEffect(() => {",
            "    const newTotal = items.reduce((sum, item) => sum + item.price, 0);",
            "    setTotal(newTotal); // Triggers extra render!",
            "  }, [items]);",
            "",
            "  return <div>Total: ${total}</div>;",
            "}",
            "",
            "// ✅ Better: Calculate directly",
            "function PriceCalculator({ items }) {",
            "  const total = items.reduce((sum, item) => sum + item.price, 0);",
            "  return <div>Total: ${total}</div>;",
            "}"
          ]}
        />
      </>
    )
  },
  {
    title: "Anti-Pattern: Conditional Derived State",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Storing derived state that depends on conditions can create hard-to-track bugs.
        </p>
        <CodeBlock
          lines={[
            "// ❌ Anti-pattern: Derived state",
            "function Greeting({ user, isAdmin }) {",
            "  const [greeting, setGreeting] = useState('');",
            "",
            "  useEffect(() => {",
            "    if (isAdmin) {",
            "      setGreeting(`Welcome, Admin ${user.name}`);",
            "    } else {",
            "      setGreeting(`Hello, ${user.name}`);",
            "    }",
            "  }, [user, isAdmin]); // What if one updates but not the other?",
            "",
            "  return <h1>{greeting}</h1>;",
            "}",
            "",
            "// ✅ Better: Derive it directly",
            "function Greeting({ user, isAdmin }) {",
            "  const greeting = isAdmin",
            "    ? `Welcome, Admin ${user.name}`",
            "    : `Hello, ${user.name}`;",
            "  return <h1>{greeting}</h1>;",
            "}"
          ]}
        />
      </>
    )
  },
  {
    title: "When Derived State IS Acceptable",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          There are rare cases where storing a \"snapshot\" of props is necessary:
        </p>
        <ul>
          <li>When you intentionally want local edits that don't affect the parent (e.g., form draft)</li>
          <li>When you need to detect prop changes with useEffect for side effects</li>
          <li>When the computation is extremely expensive (but cache/memoize instead if possible)</li>
        </ul>
        <CodeBlock
          lines={[
            "// ✅ Acceptable: Local editing disconnected from parent",
            "function EditableProfile({ user }) {",
            "  const [name, setName] = useState(user.name);",
            "",
            "  const handleSave = () => {",
            "    // Send updated name to parent/server",
            "  };",
            "",
            "  return (",
            "    <>",
            "      <input value={name} onChange={(e) => setName(e.target.value)} />",
            "      <button onClick={handleSave}>Save</button>",
            "    </>",
            "  );",
            "}"
          ]}
        />
      </>
    )
  },
  {
    title: "The Rule: Single Source of Truth",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          For any piece of data, there should be a single source of truth:
        </p>
        <ul>
          <li>If a value should live in the parent → use props</li>
          <li>If a value is computed from props → calculate it, don't store it</li>
          <li>If a value belongs to this component only → use state</li>
          <li>If a value needs to persist but not trigger renders → use useRef</li>
        </ul>
      </>
    )
  }
];

export default function DerivedStateAntiPatternsPage() {
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
            <h1 className="text-3xl font-bold tracking-tight">Derived State Anti-Patterns</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            How to avoid common mistakes with computed state
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
          quizLink="/lesson/props-state-derived/derived-state-anti-patterns/quiz"
          lessonId={8}
          contentSlug="derived-state-anti-patterns"
        />
      </div>
    </div>
  );
}
