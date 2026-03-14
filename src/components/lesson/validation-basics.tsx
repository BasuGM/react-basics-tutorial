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
          Form validation ensures that users submit correct and useful data. There are two main approaches to validating forms in React:
          client-side validation and server-side validation.
        </p>
        <ul>
          <li><strong>Client-side validation</strong>: Provides instant feedback to the user</li>
          <li><strong>Server-side validation</strong>: Ensures data integrity and security</li>
          <li><strong>Combined approach</strong>: Best practice - both client and server validation</li>
        </ul>
      </>
    )
  },
  {
    title: "HTML5 Validation",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          HTML5 provides built-in validation attributes that work without JavaScript.
        </p>
        <CodeBlock
          lines={[
            '<input type="email" required />',
            '<input type="number" min="1" max="100" />',
            '<input type="text" minLength="3" maxLength="20" />',
            '<input type="password" required />',
            '<input type="url" required />'
          ]}
        />
        <p className="mt-4 text-muted-foreground">
          Use HTML5 attributes like <code>required</code>, <code>type</code>, <code>minLength</code>, and <code>maxLength</code> for basic validation.
        </p>
      </>
    )
  },
  {
    title: "Custom Validation",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          For complex validation logic, implement custom validation in your change handler.
        </p>
        <CodeBlock
          lines={[
            "const [email, setEmail] = useState('');",
            "const [emailError, setEmailError] = useState('');",
            "",
            "const validateEmail = (value) => {",
            "  const regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;",
            "  if (!regex.test(value)) {",
            "    setEmailError('Invalid email address');",
            "  } else {",
            "    setEmailError('');",
            "  }",
            "};",
            "",
            "const handleEmailChange = (e) => {",
            "  setEmail(e.target.value);",
            "  validateEmail(e.target.value);",
            "};"
          ]}
        />
      </>
    )
  },
  {
    title: "Real-time vs On-Submit Validation",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Choose when to validate based on your user experience goals.
        </p>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Real-time Validation</h4>
            <p className="text-muted-foreground mb-2">Validates as the user types</p>
            <CodeBlock
              lines={[
                "const handleChange = (e) => {",
                "  const value = e.target.value;",
                "  setValue(value);",
                "  validateField(value); // Immediate feedback",
                "};"
              ]}
            />
            <p className="text-sm text-muted-foreground mt-2"><strong>Pros:</strong> Instant feedback. <strong>Cons:</strong> Can be annoying while typing.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">On-Submit Validation</h4>
            <p className="text-muted-foreground mb-2">Validates when form is submitted</p>
            <CodeBlock
              lines={[
                "const handleSubmit = (e) => {",
                "  e.preventDefault();",
                "  if (validateForm(form)) {",
                "    submitForm(form);",
                "  }",
                "};"
              ]}
            />
            <p className="text-sm text-muted-foreground mt-2"><strong>Pros:</strong> User-friendly. <strong>Cons:</strong> Delayed feedback.</p>
          </div>
        </div>
      </>
    )
  },
  {
    title: "Best Practices",
    content: (
      <ul>
        <li>Use HTML5 validation attributes as a first line of defense</li>
        <li>Implement client-side validation for better UX</li>
        <li>Always validate on the server for security</li>
        <li>Show clear error messages to the user</li>
        <li>Disable submit button while form has errors</li>
        <li>Use real-time validation sparingly - consider on-blur validation</li>
        <li>Don't rely on client-side validation alone</li>
      </ul>
    )
  }
];

export default function ValidationBasicsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Navigation */}
        <div className="mb-6">
          <Link
            href="/lesson/forms-basics"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Forms Basics
          </Link>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Code className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold tracking-tight">Validation Basics</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Ensuring forms contain valid data with client-side validation
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
          quizLink="/lesson/forms-basics/validation-basics/quiz"
          lessonId={10}
          contentSlug="validation-basics"
        />
      </div>
    </div>
  );
}
