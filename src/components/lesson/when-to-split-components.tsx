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
          Knowing when to split a component into smaller pieces is an important skill.
          A component that does too much becomes hard to understand, test, and maintain.
        </p>
        <ul>
          <li><strong>Readability</strong>: Smaller components are easier to understand</li>
          <li><strong>Reusability</strong>: Smaller components can be reused in more contexts</li>
          <li><strong>Testability</strong>: Smaller components are easier to test</li>
          <li><strong>Maintainability</strong>: Changes are localized and less risky</li>
        </ul>
      </>
    )
  },
  {
    title: "Signs Your Component is Too Large",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          These are indicators that you should split your component:
        </p>
        <CodeBlock
          lines={[
            '// Too large component - hard to understand',
            'function Dashboard() {',
            '  // 50+ lines of state declarations',
            '  const [users, setUsers] = useState([]);',
            '  const [products, setProducts] = useState([]);',
            '  const [orders, setOrders] = useState([]);',
            '',
            '  // Multiple useEffect hooks',
            '  useEffect(() => { /* fetch users */ }, []);',
            '  useEffect(() => { /* fetch products */ }, []);',
            '  useEffect(() => { /* fetch orders */ }, []);',
            '',
            '  // Complex rendering logic',
            '  return (',
            '    <div>',
            '      {/* 100+ lines of JSX */}',
            '    </div>',
            '  );',
            '}'
          ]}
        />
        <ul className="mt-4">
          <li>Component is more than 300-400 lines long</li>
          <li>Multiple unrelated pieces of state</li>
          <li>Many useEffect hooks</li>
          <li>Complex nested JSX that's hard to follow</li>
          <li>Scrolling through the file to find what you need</li>
        </ul>
      </>
    )
  },
  {
    title: "How to Decide What to Extract",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Look for logical sections or features within your component:
        </p>
        <CodeBlock
          lines={[
            '// Component with distinct sections',
            'function UserProfile({ userId }) {',
            '  // Section 1: User info',
            '  const [user, setUser] = useState(null);',
            '  useEffect(() => { fetchUser(userId); }, [userId]);',
            '',
            '  // Section 2: User posts',
            '  const [posts, setPosts] = useState([]);',
            '  useEffect(() => { fetchUserPosts(userId); }, [userId]);',
            '',
            '  // Section 3: User settings',
            '  const [settings, setSettings] = useState({});',
            '  const handleSettingChange = (key, value) => { ... };',
            '',
            '  return (',
            '    <div>',
            '      <UserInfo user={user} />',
            '      <UserPosts posts={posts} />',
            '      <UserSettings settings={settings} onUpdate={handleSettingChange} />',
            '    </div>',
            '  );',
            '}'
          ]}
        />
        <p className="mt-4 text-muted-foreground">
          In this case, each section could become its own component or custom hook.
        </p>
      </>
    )
  },
  {
    title: "Extract by Responsibility",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Create a new component when something handles a distinct responsibility:
        </p>
        <CodeBlock
          lines={[
            '// Before: Everything in one component',
            'function Form() {',
            '  const [formData, setFormData] = useState({});',
            '  const [errors, setErrors] = useState({});',
            '  const [isSubmitting, setIsSubmitting] = useState(false);',
            '',
            '  const handleSubmit = async () => { ... };',
            '',
            '  return (',
            '    <form onSubmit={handleSubmit}>',
            '      {/* 50+ lines of input fields and validation messages */}',
            '    </form>',
            '  );',
            '}',
            '',
            '// After: Split by responsibility',
            'function Form() {',
            '  const { formData, setFormData, errors, submit } = useForm();',
            '  return (',
            '    <form onSubmit={submit}>',
            '      <FormFields data={formData} onChange={setFormData} />',
            '      <FormErrors errors={errors} />',
            '      <SubmitButton />',
            '    </form>',
            '  );',
            '}'
          ]}
        />
      </>
    )
  },
  {
    title: "Good Split Points",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          <strong>Extract conditionally rendered sections:</strong>
        </p>
        <CodeBlock
          lines={[
            'function App() {',
            '  const { isLoggedIn } = useAuth();',
            '',
            '  return (',
            '    <div>',
            '      {isLoggedIn ? <Dashboard /> : <LoginPage />}',
            '    </div>',
            '  );',
            '}'
          ]}
        />
        <p className="mt-4 text-muted-foreground">
          <strong>Extract lists and their items:</strong>
        </p>
        <CodeBlock
          lines={[
            '// Instead of rendering logic inline',
            '{items.map(item => (',
            '  <div key={item.id}>/* 20+ lines */</div>',
            '))}',
            '',
            '// Extract to separate component',
            '{items.map(item => (',
            '  <ListItem key={item.id} item={item} />',
            '))}'
          ]}
        />
        <p className="mt-4 text-muted-foreground">
          <strong>Extract third-party integrations:</strong> Components wrapping charts, maps, date pickers, etc.
        </p>
      </>
    )
  },
  {
    title: "When NOT to Split",
    content: (
      <ul>
        <li>Don't over-engineer: A small component used only once might not need splitting</li>
        <li>Avoid prop drilling: If the split creates 5+ props, consider using context or custom hooks instead</li>
        <li>Keep related logic together: Don't split logic that's tightly coupled</li>
        <li>Single-use wrappers: Don't create components that just wrap other components with fixed props</li>
      </ul>
    )
  }
];

export default function WhenToSplitComponentsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Navigation */}
        <div className="mb-6">
          <Link
            href="/lesson/component-reusability-structure"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Component Reusability & Structure
          </Link>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Code className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold tracking-tight">When to Split Components</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Learning to break down components into smaller, more maintainable pieces
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
          quizLink="/lesson/component-reusability-structure/when-to-split-components/quiz"
          lessonId={12}
          contentSlug="when-to-split-components"
        />
      </div>
    </div>
  );
}
