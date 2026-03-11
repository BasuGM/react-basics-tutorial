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
          Lifecycle methods are special methods in class components that are called at different stages of a component's life.
          They allow you to run code at specific times: when the component is created, updated, or destroyed.
        </p>
        <ul>
          <li><strong>Mounting</strong>: Component is being created and inserted into the DOM</li>
          <li><strong>Updating</strong>: Component is being re-rendered due to props or state changes</li>
          <li><strong>Unmounting</strong>: Component is being removed from the DOM</li>
          <li><strong>Error handling</strong>: Catching errors in components</li>
        </ul>
      </>
    )
  },
  {
    title: "componentDidMount()",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Called once immediately after the component is mounted (inserted into the DOM). Perfect for API calls, subscriptions, and setup.
        </p>
        <CodeBlock
          lines={[
            'class DataFetcher extends React.Component {',
            '  constructor(props) {',
            '    super(props);',
            '    this.state = { data: null, loading: true };',
            '  }',
            '',
            '  componentDidMount() {',
            '    // Fetch data after component is mounted',
            '    fetch("/api/data")',
            '      .then(res => res.json())',
            '      .then(data => {',
            '        this.setState({ data, loading: false });',
            '      });',
            '  }',
            '',
            '  render() {',
            '    if (this.state.loading) return <p>Loading...</p>;',
            '    return <div>{this.state.data}</div>;',
            '  }',
            '}'
          ]}
        />
      </>
    )
  },
  {
    title: "componentDidUpdate()",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Called after the component is updated. Useful for responding to prop/state changes.
        </p>
        <CodeBlock
          lines={[
            'class SearchComponent extends React.Component {',
            '  constructor(props) {',
            '    super(props);',
            '    this.state = { query: "", results: [] };',
            '  }',
            '',
            '  componentDidUpdate(prevProps, prevState) {',
            '    // Only fetch if query changed',
            '    if (this.state.query !== prevState.query) {',
            '      this.performSearch(this.state.query);',
            '    }',
            '  }',
            '',
            '  performSearch = (query) => {',
            '    fetch(`/api/search?q=${query}`)',
            '      .then(res => res.json())',
            '      .then(results => this.setState({ results }));',
            '  }',
            '',
            '  render() {',
            '    return (',
            '      <div>',
            '        <input onChange={(e) => this.setState({ query: e.target.value })} />',
            '        {/* Display results */}',
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
    title: "componentWillUnmount()",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Called just before the component is removed from the DOM. Used for cleanup (cancel requests, unsubscribe, etc).
        </p>
        <CodeBlock
          lines={[
            'class TimerComponent extends React.Component {',
            '  constructor(props) {',
            '    super(props);',
            '    this.state = { seconds: 0 };',
            '    this.intervalId = null;',
            '  }',
            '',
            '  componentDidMount() {',
            '    // Start timer',
            '    this.intervalId = setInterval(() => {',
            '      this.setState({ seconds: this.state.seconds + 1 });',
            '    }, 1000);',
            '  }',
            '',
            '  componentWillUnmount() {',
            '    // Clean up: stop the timer',
            '    clearInterval(this.intervalId);',
            '  }',
            '',
            '  render() {',
            '    return <p>Elapsed: {this.state.seconds}s</p>;',
            '  }',
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
        <li>Use <code>componentDidMount()</code> for initial data fetching and setup</li>
        <li>Use <code>componentDidUpdate()</code> to respond to prop/state changes</li>
        <li>Always clean up in <code>componentWillUnmount()</code> (timers, subscriptions, etc)</li>
        <li>Avoid side effects in <code>render()</code> - use lifecycle methods instead</li>
        <li>Remember modern React prefers Hooks (<code>useEffect</code>) over lifecycle methods</li>
        <li>Check previous props/state in <code>componentDidUpdate()</code> to avoid infinite loops</li>
      </ul>
    )
  }
];

export default function LifecycleOverviewPage() {
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
            <h1 className="text-3xl font-bold tracking-tight">Lifecycle Overview</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Understanding component lifecycle methods
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
          quizLink="/lesson/class-components-legacy/lifecycle-overview/quiz"
          lessonId={5}
          contentSlug="lifecycle-overview"
        />
      </div>
    </div>
  );
}
