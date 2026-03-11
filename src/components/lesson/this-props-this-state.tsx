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
          In class components, you access both props and state using the <code>this</code> keyword.
          <code>this.props</code> gives you read-only access to data passed from parent components, 
          while <code>this.state</code> holds mutable data managed by the component itself.
        </p>
        <ul>
          <li><strong>this.props</strong>: Read-only data from parent components</li>
          <li><strong>this.state</strong>: Mutable data initialized in constructor</li>
          <li><strong>Immutable props</strong>: Never modify props directly</li>
          <li><strong>this.setState()</strong>: Update state in class components</li>
        </ul>
      </>
    )
  },
  {
    title: "Accessing Props with this.props",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Props are passed from parent components and accessed using <code>this.props</code>.
        </p>
        <CodeBlock
          lines={[
            'class UserProfile extends React.Component {',
            '  render() {',
            '    return (',
            '      <div>',
            '        <h2>{this.props.name}</h2>',
            '        <p>Email: {this.props.email}</p>',
            '        <p>Age: {this.props.age}</p>',
            '      </div>',
            '    );',
            '  }',
            '}',
            '',
            '// Usage:',
            '<UserProfile name="Alice" email="alice@example.com" age={30} />'
          ]}
        />
      </>
    )
  },
  {
    title: "Managing State with this.state",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          State is initialized in the constructor and updated using <code>this.setState()</code>.
        </p>
        <CodeBlock
          lines={[
            'class Counter extends React.Component {',
            '  constructor(props) {',
            '    super(props);',
            '    // Initialize state in constructor',
            '    this.state = {',
            '      count: 0,',
            '      name: "Counter"',
            '    };',
            '  }',
            '',
            '  increment = () => {',
            '    // Update state with setState',
            '    this.setState({ count: this.state.count + 1 });',
            '  }',
            '',
            '  render() {',
            '    return (',
            '      <div>',
            '        <h2>{this.state.name}</h2>',
            '        <p>Count: {this.state.count}</p>',
            '        <button onClick={this.increment}>+1</button>',
            '      </div>',
            '    );',
            '  }',
            '}'
          ]}
        />
      </>
    )
  },
  {
    title: "Using Props and State Together",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Often you use props to initialize state or combine props with state in the render method.
        </p>
        <CodeBlock
          lines={[
            'class Greeting extends React.Component {',
            '  constructor(props) {',
            '    super(props);',
            '    // Initialize state from props',
            '    this.state = {',
            '      visits: 0,',
            '      lastVisit: null',
            '    };',
            '  }',
            '',
            '  handleVisit = () => {',
            '    this.setState({',
            '      visits: this.state.visits + 1,',
            '      lastVisit: new Date().toLocaleDateString()',
            '    });',
            '  }',
            '',
            '  render() {',
            '    return (',
            '      <div>',
            '        <h1>Welcome, {this.props.userName}!</h1>',
            '        <p>Total visits: {this.state.visits}</p>',
            '        {this.state.lastVisit && (',
            '          <p>Last visit: {this.state.lastVisit}</p>',
            '        )}',
            '        <button onClick={this.handleVisit}>Record Visit</button>',
            '      </div>',
            '    );',
            '  }',
            '}'
          ]}
        />
      </>
    )
  },
  {
    title: "Key Differences from Functional Components",
    content: (
      <ul>
        <li>Class: <code>this.props.name</code> vs Functional: <code>props.name</code> or <code>{"{ name }"}</code></li>
        <li>Class: <code>this.state.count</code> vs Functional: <code>count</code> from useState</li>
        <li>Class: <code>this.setState()</code> vs Functional: setter from useState</li>
        <li>Props are still read-only in both - never modify them directly</li>
        <li>Class state is one object; functional components can have multiple useState hooks</li>
        <li>Understanding <code>this</code> context is crucial in class components</li>
      </ul>
    )
  }
];

export default function ThisPropsThisStatePage() {
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
            <h1 className="text-3xl font-bold tracking-tight">this.props & this.state</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Accessing props and state in class components
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
          quizLink="/lesson/class-components-legacy/this-props-this-state/quiz"
          lessonId={5}
          contentSlug="this-props-this-state"
        />
      </div>
    </div>
  );
}
