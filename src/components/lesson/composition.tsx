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
          Component composition is the practice of combining smaller components together to build larger, more complex UIs.
          Instead of creating one large component, you break it down into smaller, manageable pieces and combine them.
        </p>
        <ul>
          <li><strong>Small components</strong>: Each component has a single responsibility</li>
          <li><strong>Combine them</strong>: Use smaller components within larger ones</li>
          <li><strong>Flexible layouts</strong>: Use the children prop for flexible content</li>
          <li><strong>Better maintainability</strong>: Easier to understand and modify individual pieces</li>
        </ul>
      </>
    )
  },
  {
    title: "Basic Composition",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Composition means building larger components from smaller ones.
        </p>
        <CodeBlock
          lines={[
            'function Header() {',
            '  return <header><h1>My App</h1></header>;',
            '}',
            '',
            'function Footer() {',
            '  return <footer><p>&copy; 2024</p></footer>;',
            '}',
            '',
            'function Layout({ children }) {',
            '  return (',
            '    <div>',
            '      <Header />',
            '      <main>{children}</main>',
            '      <Footer />',
            '    </div>',
            '  );',
            '}'
          ]}
        />
      </>
    )
  },
  {
    title: "Children Prop Pattern",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          The children prop allows you to pass content as props, making components highly flexible.
        </p>
        <CodeBlock
          lines={[
            'function Container({ children, className }) {',
            '  return (',
            '    <div className={`container ${className}`}>',
            '      {children}',
            '    </div>',
            '  );',
            '}',
            '',
            'function Button({ children, onClick }) {',
            '  return <button onClick={onClick}>{children}</button>;',
            '}',
            '',
            '// Usage - children can be anything:',
            '<Container>',
            '  <h2>Welcome</h2>',
            '  <p>This is flexible content</p>',
            '</Container>',
            '',
            '<Button onClick={handleClick}>',
            '  <span>Click Me</span>',
            '</Button>'
          ]}
        />
      </>
    )
  },
  {
    title: "Composition vs Inheritance",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          React favors composition over inheritance. Instead of extending components, compose them together.
        </p>
        <CodeBlock
          lines={[
            '// ❌ Avoid: Try to extend/inherit',
            '// class SpecialButton extends Button { ... }',
            '',
            '// ✅ DO: Compose components together',
            'function SpecialButton({ children }) {',
            '  return (',
            '    <Button className="special">',
            '      <Icon /> {children}',
            '    </Button>',
            '  );',
            '}',
            '',
            '// Or use wrapper components:',
            'function BorderedButton({ children }) {',
            '  return (',
            '    <div className="border">',
            '      <Button>{children}</Button>',
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
        <li>Keep components small and focused on one responsibility</li>
        <li>Use the children prop for flexible components</li>
        <li>Compose components together instead of trying to inherit</li>
        <li>Name components based on what they do, not how they look</li>
        <li>Think of components as building blocks</li>
        <li>Don't be afraid to have many small components</li>
        <li>Test composed components to ensure they work together</li>
      </ul>
    )
  }
];

export default function CompositionPage() {
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
            <h1 className="text-3xl font-bold tracking-tight">Composition</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Building larger components from smaller pieces
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
          quizLink="/lesson/functional-components/composition/quiz"
          lessonId={4}
          contentSlug="composition"
        />
      </div>
    </div>
  );
}
