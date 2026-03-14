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
          Conditional rendering allows you to render different content based on conditions. In React, you control what gets displayed
          based on state, props, or other logic.
        </p>
        <ul>
          <li><strong>Ternary operators</strong>: Most common for inline conditionals</li>
          <li><strong>Logical operators (&& and ||)</strong>: For simple true/false rendering</li>
          <li><strong>If/else statements</strong>: For complex logic (outside JSX)</li>
          <li><strong>Switch statements</strong>: For multiple conditions</li>
          <li><strong>Dedicated components</strong>: For reusable conditional logic</li>
        </ul>
      </>
    )
  },
  {
    title: "Ternary Operator",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          The ternary operator is the most common way to conditionally render inline in JSX.
        </p>
        <CodeBlock
          lines={[
            'function UserProfile({ isLoggedIn, name }) {',
            '  return (',
            '    <div>',
            '      {isLoggedIn ? (',
            '        <p>Welcome, {name}!</p>',
            '      ) : (',
            '        <p>Please log in</p>',
            '      )}',
            '    </div>',
            '  );',
            '}'
          ]}
        />
      </>
    )
  },
  {
    title: "Logical && Operator",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Use the && operator to render something only if a condition is true.
        </p>
        <CodeBlock
          lines={[
            'function Dashboard({ hasNotifications }) {',
            '  return (',
            '    <div>',
            '      <h1>Dashboard</h1>',
            '      {hasNotifications && (',
            '        <div className="alert">You have new notifications!</div>',
            '      )}',
            '    </div>',
            '  );',
            '}'
          ]}
        />
        <p className="mt-4 text-sm text-muted-foreground">
          <strong>⚠️ Tip:</strong> Avoid rendering numbers with &&. Use <code>hasNotifications === true</code> or <code>Boolean(count)</code> to be safe.
        </p>
      </>
    )
  },
  {
    title: "If/Else Statements",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          For complex logic, use if/else statements outside of JSX, then return different content.
        </p>
        <CodeBlock
          lines={[
            'function StatusBadge({ status }) {',
            '  let color, label;',
            '',
            '  if (status === "active") {',
            '    color = "green";',
            '    label = "Active";',
            '  } else if (status === "pending") {',
            '    color = "yellow";',
            '    label = "Pending";',
            '  } else {',
            '    color = "red";',
            '    label = "Inactive";',
            '  }',
            '',
            '  return <span className={`badge ${color}`}>{label}</span>;',
            '}'
          ]}
        />
      </>
    )
  },
  {
    title: "Switch Statements",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Switch statements are useful for handling many different cases.
        </p>
        <CodeBlock
          lines={[
            'function RoleDisplay({ userRole }) {',
            '  let permissions;',
            '',
            '  switch (userRole) {',
            '    case "admin":',
            '      permissions = "Full access";',
            '      break;',
            '    case "editor":',
            '      permissions = "Can edit content";',
            '      break;',
            '    case "viewer":',
            '      permissions = "Read-only";',
            '      break;',
            '    default:',
            '      permissions = "No access";',
            '  }',
            '',
            '  return <p>Role: {permissions}</p>;',
            '}'
          ]}
        />
      </>
    )
  },
  {
    title: "Conditional Components",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Create separate components for different conditions to keep your code clean and reusable.
        </p>
        <CodeBlock
          lines={[
            'function LoginMessage() {',
            '  return <p>Please log in to view this content</p>;',
            '}',
            '',
            'function Content() {',
            '  return <div>Protected content</div>;',
            '}',
            '',
            'function App({ isLoggedIn }) {',
            '  return isLoggedIn ? <Content /> : <LoginMessage />;',
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
        <li>Keep conditional logic simple and readable</li>
        <li>Avoid deeply nested ternaries - use if/else or components instead</li>
        <li>Extract complex conditions into variables with descriptive names</li>
        <li>Use dedicated components for reusable conditional patterns</li>
        <li>Test all branches of your conditional logic</li>
      </ul>
    )
  }
];

export default function ConditionalRenderingPatternsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Navigation */}
        <div className="mb-6">
          <Link
            href="/lesson/conditional-dynamic-ui"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Conditional & Dynamic UI
          </Link>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Code className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold tracking-tight">Conditional Rendering Patterns</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Master different ways to conditionally render content in React
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
          quizLink="/lesson/conditional-dynamic-ui/conditional-rendering-patterns/quiz"
          lessonId={9}
          contentSlug="conditional-rendering-patterns"
        />
      </div>
    </div>
  );
}
