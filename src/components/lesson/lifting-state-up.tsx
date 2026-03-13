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
          "Lifting state up" is a common pattern in React where you move state from child components up to a shared parent component.
          This allows multiple children to share and synchronize the same state.
        </p>
        <ul>
          <li>When multiple components need to share state, move that state to their common ancestor</li>
          <li>The parent component manages the state and passes it down via props</li>
          <li>Child components communicate back via callback functions</li>
        </ul>
      </>
    )
  },
  {
    title: "Problem: Isolated State in Children",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          When each child component has its own state, they can't share data with siblings.
        </p>
        <CodeBlock
          lines={[
            "// Child 1 - has its own state",
            "function TemperatureInput() {",
            "  const [temp, setTemp] = useState('');",
            "  return <input value={temp} onChange={(e) => setTemp(e.target.value)} />;",
            "}",
            "",
            "// Child 2 - also has its own state",
            "function TemperatureDisplay() {",
            "  const [temp, setTemp] = useState('');",
            "  return <p>Temperature: {temp}</p>;",
            "}",
            "",
            "// Parent",
            "function App() {",
            "  return (",
            "    <>",
            "      <TemperatureInput /> {/* State not shared */}",
            "      <TemperatureDisplay /> {/* Can't see input changes */}",
            "    </>",
            "  );",
            "}"
          ]}
        />
      </>
    )
  },
  {
    title: "Solution: Lift State to Parent",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Move the shared state to the parent component and pass it down via props to both children.
        </p>
        <CodeBlock
          lines={[
            "// Parent - owns the shared state",
            "function App() {",
            "  const [temp, setTemp] = useState('');",
            "",
            "  return (",
            "    <>",
            "      <TemperatureInput value={temp} onChange={setTemp} />",
            "      <TemperatureDisplay value={temp} />",
            "    </>",
            "  );",
            "}",
            "",
            "// Child 1 - receives props",
            "function TemperatureInput({ value, onChange }) {",
            "  return <input value={value} onChange={(e) => onChange(e.target.value)} />;",
            "}",
            "",
            "// Child 2 - receives props",
            "function TemperatureDisplay({ value }) {",
            "  return <p>Temperature: {value}</p>;",
            "}"
          ]}
        />
      </>
    )
  },
  {
    title: "When to Lift State",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Lift state up when:
        </p>
        <ul>
          <li>Multiple components need to display the same data</li>
          <li>Child components need to synchronize with each other</li>
          <li>Multiple children need to update shared data</li>
          <li>You want a "single source of truth" for your data</li>
        </ul>
        <p className="mt-4 text-muted-foreground">
          Don't lift state up if only one component uses it - keep it local for simplicity.
        </p>
      </>
    )
  },
  {
    title: "Best Practices",
    content: (
      <ul>
        <li>Lift state only as high as needed - don't lift prematurely</li>
        <li>Prefer local state when only one component needs data</li>
        <li>Use prop drilling carefully - consider Context API for deeply nested components</li>
        <li>Name callback props clearly (e.g., <code>onChange</code>, <code>onUpdate</code>)</li>
        <li>Remember: the component that owns state should control it, not children</li>
      </ul>
    )
  }
];

export default function LiftingStateUpPage() {
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
            <h1 className="text-3xl font-bold tracking-tight">Lifting State Up</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Sharing state between sibling components
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
          quizLink="/lesson/props-state-derived/lifting-state-up/quiz"
          lessonId={8}
          contentSlug="lifting-state-up"
        />
      </div>
    </div>
  );
}
