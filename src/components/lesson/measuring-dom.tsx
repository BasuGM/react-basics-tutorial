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
          Refs allow you to measure and inspect DOM elements to get their dimensions, positions, and other properties.
          This is useful for responsive designs, animations, and detecting user interactions with specific elements.
        </p>
        <ul>
          <li><strong>Dimensions:</strong> Get width, height, and other sizes</li>
          <li><strong>Position:</strong> Find element location on the page</li>
          <li><strong>Scroll:</strong> Access scroll position and dimensions</li>
          <li><strong>Attributes:</strong> Read DOM properties and values</li>
        </ul>
      </>
    )
  },
  {
    title: "Getting Element Dimensions",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Use <code>offsetWidth</code>, <code>offsetHeight</code>, and <code>getBoundingClientRect()</code> to measure elements:
        </p>
        <CodeBlock
          lines={[
            'import { useRef } from "react";',
            '',
            'export default function MeasureBox() {',
            '  const boxRef = useRef(null);',
            '',
            '  const handleMeasure = () => {',
            '    const element = boxRef.current;',
            '    console.log("Width:", element.offsetWidth);',
            '    console.log("Height:", element.offsetHeight);',
            '  };',
            '',
            '  return (',
            '    <>',
            '      <div',
            '        ref={boxRef}',
            '        style={{ width: "200px", height: "100px", background: "blue" }}',
            '      />',
            '      <button onClick={handleMeasure}>',
            '        Measure',
            '      </button>',
            '    </>',
            '  );',
            '}'
          ]}
        />
      </>
    )
  },
  {
    title: "Using getBoundingClientRect()",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          <code>getBoundingClientRect()</code> provides detailed position and size information relative to the viewport:
        </p>
        <CodeBlock
          lines={[
            'function GetElementPosition() {',
            '  const elementRef = useRef(null);',
            '',
            '  const handleGetPosition = () => {',
            '    const rect = elementRef.current.getBoundingClientRect();',
            '    console.log("Top:", rect.top);',
            '    console.log("Left:", rect.left);',
            '    console.log("Width:", rect.width);',
            '    console.log("Height:", rect.height);',
            '    console.log("Is visible:", rect.top < window.innerHeight);',
            '  };',
            '',
            '  return (',
            '    <>',
            '      <div ref={elementRef}>Measure me</div>',
            '      <button onClick={handleGetPosition}>',
            '        Get Position',
            '      </button>',
            '    </>',
            '  );',
            '}'
          ]}
        />
      </>
    )
  },
  {
    title: "Measuring Scroll Position",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Access scroll-related properties of containers:
        </p>
        <CodeBlock
          lines={[
            'function ScrollContainer() {',
            '  const containerRef = useRef(null);',
            '',
            '  const handleCheckScroll = () => {',
            '    const el = containerRef.current;',
            '    console.log("Scroll Top:", el.scrollTop);',
            '    console.log("Scroll Height:", el.scrollHeight);',
            '    console.log("Client Height:", el.clientHeight);',
            '    console.log("At bottom:", el.scrollTop + el.clientHeight >= el.scrollHeight);',
            '  };',
            '',
            '  return (',
            '    <>',
            '      <div',
            '        ref={containerRef}',
            '        onScroll={handleCheckScroll}',
            '        style={{',
            '          height: "200px",',
            '          overflow: "auto",',
            '          border: "1px solid #ccc"',
            '        }}',
            '      >',
            '        {/* Large content here */}',
            '      </div>',
            '    </>',
            '  );',
            '}'
          ]}
        />
      </>
    )
  },
  {
    title: "Intersection Observer Pattern",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          For advanced measuring, combine refs with Intersection Observer:
        </p>
        <CodeBlock
          lines={[
            'function ObserveVisibility() {',
            '  const elementRef = useRef(null);',
            '  const [isVisible, setIsVisible] = useState(false);',
            '',
            '  useEffect(() => {',
            '    const observer = new IntersectionObserver(([entry]) => {',
            '      setIsVisible(entry.isIntersecting);',
            '    });',
            '',
            '    if (elementRef.current) {',
            '      observer.observe(elementRef.current);',
            '    }',
            '',
            '    return () => observer.disconnect();',
            '  }, []);',
            '',
            '  return (',
            '    <div ref={elementRef}>',
            '      {isVisible ? "Visible!" : "Not visible"}',
            '    </div>',
            '  );',
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
        <li>Measure after the component has rendered (not in render method)</li>
        <li>Use <code>useEffect</code> for measurements that need to respond to changes</li>
        <li>Consider performance - measuring large numbers of elements can be slow</li>
        <li>Use <code>getBoundingClientRect()</code> for viewport-relative positions</li>
        <li>Check that ref.current is not null before measuring</li>
        <li>Consider using Intersection Observer for visibility detection</li>
      </ul>
    )
  }
];

export default function MeasuringDomPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Navigation */}
        <div className="mb-6">
          <Link
            href="/lesson/refs-dom-access"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Refs & DOM Access
          </Link>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Code className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold tracking-tight">Measuring DOM</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Getting dimensions, positions, and properties of DOM elements
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
          quizLink="/lesson/refs-dom-access/measuring-dom/quiz"
          lessonId={11}
          contentSlug="measuring-dom"
        />
      </div>
    </div>
  );
}
