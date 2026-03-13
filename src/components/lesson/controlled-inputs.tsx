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
          A controlled input is a form element whose value is controlled by React state.
          Instead of the DOM managing the input value, React state becomes the single source of truth.
        </p>
        <ul>
          <li><strong>Controlled input</strong>: React state controls the value</li>
          <li><strong>Uncontrolled input</strong>: The DOM manages the value</li>
          <li>Controlled inputs make it easier to validate and manipulate form data</li>
          <li>React provides real-time synchronization between state and the DOM</li>
        </ul>
      </>
    )
  },
  {
    title: "Creating a Controlled Input",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          To create a controlled input, set the input's <code>value</code> to a state variable and update it with <code>onChange</code>.
        </p>
        <CodeBlock
          lines={[
            'import { useState } from "react";',
            '',
            'export default function NameInput() {',
            '  const [name, setName] = useState("");',
            '',
            '  return (',
            '    <input',
            '      type="text"',
            '      value={name}',
            '      onChange={(e) => setName(e.target.value)}',
            '      placeholder="Enter your name"',
            '    />',
            '  );',
            '}'
          ]}
        />
      </>
    )
  },
  {
    title: "Multiple Controlled Inputs",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          You can create multiple controlled inputs by using separate state variables or a single object.
        </p>
        <CodeBlock
          lines={[
            'export default function Form() {',
            '  const [formData, setFormData] = useState({',
            '    name: "",',
            '    email: "",',
            '    message: ""',
            '  });',
            '',
            '  const handleChange = (e) => {',
            '    const { name, value } = e.target;',
            '    setFormData(prev => ({',
            '      ...prev,',
            '      [name]: value',
            '    }));',
            '  };',
            '',
            '  return (',
            '    <>',
            '      <input name="name" value={formData.name} onChange={handleChange} />',
            '      <input name="email" value={formData.email} onChange={handleChange} />',
            '      <textarea name="message" value={formData.message} onChange={handleChange} />',
            '    </>',
            '  );',
            '}'
          ]}
        />
      </>
    )
  },
  {
    title: "Validation with Controlled Inputs",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Controlled inputs make real-time validation easy since React controls the value.
        </p>
        <CodeBlock
          lines={[
            'export default function EmailInput() {',
            '  const [email, setEmail] = useState("");',
            '  const [error, setError] = useState("");',
            '',
            '  const handleChange = (e) => {',
            '    const value = e.target.value;',
            '    setEmail(value);',
            '    ',
            '    if (!value.includes("@")) {',
            '      setError("Email must contain @");',
            '    } else {',
            '      setError("");',
            '    }',
            '  };',
            '',
            '  return (',
            '    <>',
            '      <input value={email} onChange={handleChange} />',
            '      {error && <p className="error">{error}</p>}',
            '    </>',
            '  );',
            '}'
          ]}
        />
      </>
    )
  },
  {
    title: "Controlled Checkboxes and Selects",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Checkboxes and select elements can also be controlled in React.
        </p>
        <CodeBlock
          lines={[
            '// Controlled checkbox',
            'const [isChecked, setIsChecked] = useState(false);',
            '<input',
            '  type="checkbox"',
            '  checked={isChecked}',
            '  onChange={(e) => setIsChecked(e.target.checked)}',
            '/>',
            '',
            '// Controlled select',
            'const [color, setColor] = useState("red");',
            '<select value={color} onChange={(e) => setColor(e.target.value)}>',
            '  <option value="red">Red</option>',
            '  <option value="blue">Blue</option>',
            '</select>'
          ]}
        />
      </>
    )
  },
  {
    title: "Best Practices",
    content: (
      <ul>
        <li>Use controlled inputs for better form handling and validation</li>
        <li>Keep form state close to where it's needed</li>
        <li>Use a single object for related form fields to keep state organized</li>
        <li>Implement validation as the user types for better UX</li>
        <li>Provide clear error messages to guide the user</li>
        <li>Consider performance when handling frequent onChange updates</li>
      </ul>
    )
  }
];

export default function ControlledInputsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Navigation */}
        <div className="mb-6">
          <Link
            href="/lesson/state-events"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to State & Events
          </Link>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Code className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold tracking-tight">Controlled Inputs</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Using React state to control form input values
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
          quizLink="/lesson/state-events/controlled-inputs/quiz"
          lessonId={6}
          contentSlug="controlled-inputs"
        />
      </div>
    </div>
  );
}
