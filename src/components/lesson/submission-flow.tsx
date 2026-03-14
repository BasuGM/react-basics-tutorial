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
          Understanding the form submission flow is crucial for handling user input properly in React.
          This includes preventing default behavior, validating data, and communicating with a server.
        </p>
        <ul>
          <li><strong>Prevent default</strong>: Stop the browser's default form submission</li>
          <li><strong>Validate data</strong>: Check that the form data is correct</li>
          <li><strong>Send to server</strong>: Submit validated data to your backend</li>
          <li><strong>Handle response</strong>: Process success or error responses</li>
        </ul>
      </>
    )
  },
  {
    title: "Basic Form Submission",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          The first step is to prevent the browser's default form submission behavior and handle it in React.
        </p>
        <CodeBlock
          lines={[
            "const handleSubmit = (e) => {",
            "  e.preventDefault(); // Stop default form submission",
            "  console.log(form);",
            "};",
            "",
            "return (",
            "  <form onSubmit={handleSubmit}>",
            "    <input name='email' value={form.email} onChange={handleChange} />",
            "    <button type='submit'>Submit</button>",
            "  </form>",
            ");"
          ]}
        />
        <p className="mt-4 text-muted-foreground">
          Always call <code>e.preventDefault()</code> to prevent the page from reloading.
        </p>
      </>
    )
  },
  {
    title: "Validating Before Submission",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Always validate your form data before sending it to the server.
        </p>
        <CodeBlock
          lines={[
            "const handleSubmit = (e) => {",
            "  e.preventDefault();",
            "",
            "  // Validate",
            "  if (!form.email || !form.password) {",
            "    setErrors('All fields are required');",
            "    return;",
            "  }",
            "",
            "  // Submit if valid",
            "  submitForm(form);",
            "};"
          ]}
        />
      </>
    )
  },
  {
    title: "Submitting to Server",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Send validated form data to your backend using fetch or another HTTP library.
        </p>
        <CodeBlock
          lines={[
            "const [loading, setLoading] = useState(false);",
            "",
            "const handleSubmit = async (e) => {",
            "  e.preventDefault();",
            "  setLoading(true);",
            "",
            "  try {",
            "    const response = await fetch('/api/form', {",
            "      method: 'POST',",
            "      headers: { 'Content-Type': 'application/json' },",
            "      body: JSON.stringify(form)",
            "    });",
            "",
            "    if (response.ok) {",
            "      setSuccess('Form submitted successfully');",
            "      setForm({ email: '', password: '' });",
            "    } else {",
            "      setErrors('Submission failed');",
            "    }",
            "  } catch (error) {",
            "    setErrors('Network error');",
            "  } finally {",
            "    setLoading(false);",
            "  }",
            "};"
          ]}
        />
      </>
    )
  },
  {
    title: "Handling Submission States",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Manage different states during form submission to provide good UX feedback.
        </p>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Loading State</h4>
            <p className="text-sm text-muted-foreground mb-2">Disable submit button while submitting</p>
            <CodeBlock
              lines={[
                '<button type="submit" disabled={loading}>',
                '  {loading ? "Submitting..." : "Submit"}',
                '</button>'
              ]}
            />
          </div>
          <div>
            <h4 className="font-semibold mb-2">Success/Error Messages</h4>
            <p className="text-sm text-muted-foreground mb-2">Show feedback after submission</p>
            <CodeBlock
              lines={[
                '{success && <div className="success">{success}</div>}',
                '{errors && <div className="error">{errors}</div>}'
              ]}
            />
          </div>
        </div>
      </>
    )
  },
  {
    title: "Best Practices",
    content: (
      <ul>
        <li>Always call <code>preventDefault()</code> on form submission</li>
        <li>Validate data before sending to the server</li>
        <li>Use loading state while submitting</li>
        <li>Disable submit button during submission</li>
        <li>Show clear success and error messages</li>
        <li>Reset form after successful submission</li>
        <li>Always validate on the server - never trust client validation alone</li>
        <li>Handle network errors gracefully</li>
      </ul>
    )
  }
];

export default function SubmissionFlowPage() {
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
            <h1 className="text-3xl font-bold tracking-tight">Submission Flow</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Handling form submission, validation, and server communication
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
          quizLink="/lesson/forms-basics/submission-flow/quiz"
          lessonId={10}
          contentSlug="submission-flow"
        />
      </div>
    </div>
  );
}
