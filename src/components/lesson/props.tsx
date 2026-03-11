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
          Props (short for properties) are the way to pass data from a parent component to a child component.
          They are <strong>read-only</strong> and allow you to customize component behavior without modifying the component itself.
        </p>
        <ul>
          <li><strong>Props</strong>: Data passed from parent to child</li>
          <li><strong>Read-only</strong>: Child components cannot modify props</li>
          <li><strong>Customization</strong>: Props make components flexible and reusable</li>
          <li><strong>Function arguments</strong>: Props are like function parameters</li>
        </ul>
      </>
    )
  },
  {
    title: "Passing Basic Props",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Props are passed to components as attributes, similar to HTML attributes.
        </p>
        <CodeBlock
          lines={[
            'function Welcome({ name, age }) {',
            '  return (',
            '    <div>',
            '      <p>Hello, {name}!</p>',
            '      <p>You are {age} years old</p>',
            '    </div>',
            '  );',
            '}',
            '',
            '// Usage:',
            '<Welcome name="Alice" age={25} />'
          ]}
        />
      </>
    )
  },
  {
    title: "Props are Read-Only",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          You cannot modify props in a component. If you need to change data, use state instead.
        </p>
        <CodeBlock
          lines={[
            'function Counter({ initialValue }) {',
            '  // ❌ DON\'T do this - props are read-only!',
            '  // initialValue = 10;',
            '',
            '  // ✅ DO this - use state for values that change',
            '  const [count, setCount] = useState(initialValue);',
            '',
            '  return (',
            '    <div>',
            '      <p>Count: {count}</p>',
            '      <button onClick={() => setCount(count + 1)}>',
            '        Increment',
            '      </button>',
            '    </div>',
            '  );',
            '}'
          ]}
        />
      </>
    )
  },
  {
    title: "Props with Objects and Arrays",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Props can be any JavaScript type, including objects and arrays.
        </p>
        <CodeBlock
          lines={[
            'function UserProfile({ user, hobbies }) {',
            '  return (',
            '    <div>',
            '      <h2>{user.name}</h2>',
            '      <p>Email: {user.email}</p>',
            '',
            '      <h3>Hobbies:</h3>',
            '      <ul>',
            '        {hobbies.map((hobby, index) => (',
            '          <li key={index}>{hobby}</li>',
            '        ))}',
            '      </ul>',
            '    </div>',
            '  );',
            '}',
            '',
            '// Usage:',
            'const userData = { name: "Bob", email: "bob@example.com" };',
            'const userHobbies = ["Reading", "Gaming", "Coding"];',
            '',
            '<UserProfile user={userData} hobbies={userHobbies} />'
          ]}
        />
      </>
    )
  },
  {
    title: "Best Practices",
    content: (
      <ul>
        <li>Use destructuring to access props for cleaner code</li>
        <li>Don't try to modify props directly</li>
        <li>Pass functions as props to handle events in children</li>
        <li>Use TypeScript or PropTypes to document what props a component expects</li>
        <li>Give props clear, descriptive names</li>
        <li>Consider using composition (children prop) for flexible layouts</li>
      </ul>
    )
  }
];

export default function PropsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Navigation */}
        <div className="mb-6">
          <Link
            href="/lesson/functional-components"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Functional Components
          </Link>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Code className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold tracking-tight">Props</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Passing data to components
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
          quizLink="/lesson/functional-components/props/quiz"
          lessonId={4}
          contentSlug="props"
        />
      </div>
    </div>
  );
}
