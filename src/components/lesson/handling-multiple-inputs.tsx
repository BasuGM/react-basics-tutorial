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
          Most real-world forms have multiple input fields. Managing each input individually can become tedious.
          This lesson covers efficient patterns for handling multiple form inputs in React.
        </p>
        <ul>
          <li><strong>Individual state</strong>: Separate state for each input</li>
          <li><strong>Object state</strong>: Single state object with all inputs</li>
          <li><strong>Form libraries</strong>: Tools for complex form management</li>
        </ul>
      </>
    )
  },
  {
    title: "Individual State Approach",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Managing each input with its own state variable. Simple for small forms.
        </p>
        <CodeBlock
          lines={[
            "export default function SimpleForm() {",
            "  const [firstName, setFirstName] = useState('');",
            "  const [lastName, setLastName] = useState('');",
            "  const [email, setEmail] = useState('');",
            "",
            "  return (",
            "    <>",
            "      <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />",
            "      <input value={lastName} onChange={(e) => setLastName(e.target.value)} />",
            "      <input value={email} onChange={(e) => setEmail(e.target.value)} />",
            "    </>",
            "  );",
            "}"
          ]}
        />
        <p className="mt-4 text-muted-foreground">
          <strong>Pros:</strong> Simple and clear. <strong>Cons:</strong> Repetitive for many fields.
        </p>
      </>
    )
  },
  {
    title: "Object State Approach",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Using a single state object to store all form data. Better for larger forms.
        </p>
        <CodeBlock
          lines={[
            "export default function FormWithObject() {",
            "  const [form, setForm] = useState({",
            "    firstName: '',",
            "    lastName: '',",
            "    email: ''",
            "  });",
            "",
            "  const handleChange = (e) => {",
            "    const { name, value } = e.target;",
            "    setForm(prev => ({",
            "      ...prev,",
            "      [name]: value",
            "    }));",
            "  };",
            "",
            "  return (",
            "    <>",
            "      <input name='firstName' value={form.firstName} onChange={handleChange} />",
            "      <input name='lastName' value={form.lastName} onChange={handleChange} />",
            "      <input name='email' value={form.email} onChange={handleChange} />",
            "    </>",
            "  );",
            "}"
          ]}
        />
        <p className="mt-4 text-muted-foreground">
          <strong>Pros:</strong> Scales well, single change handler. <strong>Cons:</strong> Slightly more setup.
        </p>
      </>
    )
  },
  {
    title: "Using useReducer for Complex Forms",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          For complex forms with validation or conditional logic, <code>useReducer</code> is more powerful.
        </p>
        <CodeBlock
          lines={[
            "const formReducer = (state, action) => {",
            "  switch (action.type) {",
            "    case 'CHANGE':",
            "      return { ...state, [action.name]: action.value };",
            "    case 'RESET':",
            "      return { firstName: '', lastName: '', email: '' };",
            "    default:",
            "      return state;",
            "  }",
            "};",
            "",
            "export default function Form() {",
            "  const [form, dispatch] = useReducer(formReducer, {",
            "    firstName: '', lastName: '', email: ''",
            "  });",
            "",
            "  const handleChange = (e) => {",
            "    dispatch({",
            "      type: 'CHANGE',",
            "      name: e.target.name,",
            "      value: e.target.value",
            "    });",
            "  };",
            "",
            "  return (...);",
            "}"
          ]}
        />
      </>
    )
  },
  {
    title: "Best Practices",
    content: (
      <ul>
        <li>Use object state for forms with 3+ fields</li>
        <li>Use a single change handler with <code>name</code> attributes on inputs</li>
        <li>Consider form libraries (React Hook Form, Formik) for complex validation</li>
        <li>Always use spread operator to update nested state immutably</li>
        <li>Validate state before submission</li>
      </ul>
    )
  }
];

export default function HandlingMultipleInputsPage() {
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
            <h1 className="text-3xl font-bold tracking-tight">Handling Multiple Inputs</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Efficient patterns for managing multiple form fields in React
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
          quizLink="/lesson/forms-basics/handling-multiple-inputs/quiz"
          lessonId={10}
          contentSlug="handling-multiple-inputs"
        />
      </div>
    </div>
  );
}
