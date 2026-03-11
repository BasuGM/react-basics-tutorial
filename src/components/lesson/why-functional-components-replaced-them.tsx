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
          While class components were the foundation of React for years, <strong>functional components with Hooks have become the modern standard</strong>.
          This shift happened because functional components are simpler, more concise, and easier to understand and maintain.
        </p>
        <ul>
          <li><strong>Simpler syntax</strong>: Functional components are just JavaScript functions</li>
          <li><strong>Hooks for state</strong>: useState and useEffect replace lifecycle methods</li>
          <li><strong>Better code organization</strong>: Related logic stays together</li>
          <li><strong>Easier to test</strong>: Fewer dependencies and simpler structure</li>
        </ul>
      </>
    )
  },
  {
    title: "Verbosity of Class Components",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Class components require more boilerplate code compared to functional components.
        </p>
        <CodeBlock
          lines={[
            '// Class component - lots of boilerplate',
            'class Counter extends React.Component {',
            '  constructor(props) {',
            '    super(props);',
            '    this.state = { count: 0 };',
            '  }',
            '',
            '  increment = () => {',
            '    this.setState({ count: this.state.count + 1 });',
            '  }',
            '',
            '  render() {',
            '    return (',
            '      <div>',
            '        <p>Count: {this.state.count}</p>',
            '        <button onClick={this.increment}>+1</button>',
            '      </div>',
            '    );',
            '  }',
            '}',
            '',
            '// Functional component - much simpler',
            'function Counter() {',
            '  const [count, setCount] = useState(0);',
            '  return (',
            '    <div>',
            '      <p>Count: {count}</p>',
            '      <button onClick={() => setCount(count + 1)}>+1</button>',
            '    </div>',
            '  );',
            '}'
          ]}
        />
      </>
    )
  },
  {
    title: "Lifecycle Methods vs Hooks",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Hooks like useEffect make handling side effects much cleaner than spreading logic across lifecycle methods.
        </p>
        <CodeBlock
          lines={[
            '// Class component - split across lifecycle methods',
            'class Fetcher extends React.Component {',
            '  componentDidMount() {',
            '    // Subscribe to data',
            '    subscribe();',
            '  }',
            '',
            '  componentWillUnmount() {',
            '    // Unsubscribe',
            '    unsubscribe();',
            '  }',
            '',
            '  render() { /* ... */ }',
            '}',
            '',
            '// Functional component - logic together',
            'function Fetcher() {',
            '  useEffect(() => {',
            '    subscribe();',
            '    return () => unsubscribe();',
            '  }, []);',
            '}'
          ]}
        />
      </>
    )
  },
  {
    title: "Understanding \"this\" Context",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Class components require careful handling of the <code>this</code> keyword, which is a common source of bugs. Functional components avoid this entirely.
        </p>
        <CodeBlock
          lines={[
            '// Class component - "this" confusion',
            'class Button extends React.Component {',
            '  handleClick() {',
            '    // ❌ this is undefined without arrow function or binding',
            '    this.setState({ /* ... */ });',
            '  }',
            '',
            '  // Must use arrow function or bind in constructor',
            '  handleClickArrow = () => {',
            '    this.setState({ /* ... */ });',
            '  }',
            '}',
            '',
            '// Functional component - no "this" needed',
            'function Button() {',
            '  const [state, setState] = useState({});',
            '  // Function works naturally',
            '  const handleClick = () => setState({ /* ... */ });',
            '}'
          ]}
        />
      </>
    )
  },
  {
    title: "Modern React Standard",
    content: (
      <ul>
        <li><strong>Official recommendation</strong>: React docs now recommend functional components with Hooks</li>
        <li><strong>New features in Hooks</strong>: New React features are added as Hooks first</li>
        <li><strong>Better performance</strong>: Easier code splitting and optimization with functional components</li>
        <li><strong>Community adoption</strong>: Most modern libraries and tutorials use functional components</li>
        <li><strong>Class components still work</strong>: They're not going away but are no longer the recommended approach</li>
        <li><strong>Learning Hooks is essential</strong>: Modern React development requires understanding Hooks</li>
      </ul>
    )
  }
];

export default function WhyFunctionalComponentsReplacedThemPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Navigation */}
        <div className="mb-6">
          <Link
            href="/lesson/class-components-legacy"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Class Components
          </Link>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Code className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold tracking-tight">Why Functional Components Replaced Them</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Understanding the shift from class to functional components
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
          quizLink="/lesson/class-components-legacy/why-functional-components-replaced-them/quiz"
          lessonId={5}
          contentSlug="why-functional-components-replaced-them"
        />
      </div>
    </div>
  );
}
