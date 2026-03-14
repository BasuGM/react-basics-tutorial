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
          Presentational and container components are two patterns for organizing React code.
          Container components handle logic, while presentational components focus on rendering.
        </p>
        <ul>
          <li><strong>Container components</strong>: Handle logic, state, and data fetching</li>
          <li><strong>Presentational components</strong>: Focus on UI and receive data via props</li>
          <li>This pattern makes components more reusable and testable</li>
          <li>Also known as "smart" and "dumb" or "stateful" and "stateless" components</li>
        </ul>
      </>
    )
  },
  {
    title: "Presentational Components",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Presentational components are focused purely on rendering UI. They receive all data via props.
        </p>
        <CodeBlock
          lines={[
            'interface UserListProps {',
            '  users: User[];',
            '  onSelectUser: (id: number) => void;',
            '}',
            '',
            'function UserList({ users, onSelectUser }: UserListProps) {',
            '  return (',
            '    <ul>',
            '      {users.map(user => (',
            '        <li key={user.id} onClick={() => onSelectUser(user.id)}>',
            '          {user.name}',
            '        </li>',
            '      ))}',
            '    </ul>',
            '  );',
            '}'
          ]}
        />
        <p className="mt-4 text-muted-foreground">
          <strong>Characteristics:</strong> No state, receives all data as props, easy to test, reusable.
        </p>
      </>
    )
  },
  {
    title: "Container Components",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Container components handle the logic and pass data down to presentational components.
        </p>
        <CodeBlock
          lines={[
            'function UserListContainer() {',
            '  const [users, setUsers] = useState<User[]>([]);',
            '  const [selectedId, setSelectedId] = useState<number | null>(null);',
            '',
            '  useEffect(() => {',
            '    fetchUsers().then(data => setUsers(data));',
            '  }, []);',
            '',
            '  const handleSelectUser = (id: number) => {',
            '    setSelectedId(id);',
            '  };',
            '',
            '  return (',
            '    <div>',
            '      <UserList',
            '        users={users}',
            '        onSelectUser={handleSelectUser}',
            '      />',
            '      {selectedId && <UserDetails id={selectedId} />}',
            '    </div>',
            '  );',
            '}'
          ]}
        />
        <p className="mt-4 text-muted-foreground">
          <strong>Characteristics:</strong> Manages state, fetches data, handles logic, passes data to presentational components.
        </p>
      </>
    )
  },
  {
    title: "Benefits of This Pattern",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          <strong>Separation of Concerns:</strong> Logic and UI are separated, making code cleaner.
        </p>
        <CodeBlock
          lines={[
            '// Easy to test presentational components',
            'test("UserList renders all users", () => {',
            '  const users = [{ id: 1, name: "John" }, { id: 2, name: "Jane" }];',
            '  render(<UserList users={users} onSelectUser={() => {}} />);',
            '  expect(screen.getByText("John")).toBeInTheDocument();',
            '});'
          ]}
        />
        <p className="mt-4 text-muted-foreground">
          <strong>Reusability:</strong> Presentational components can be reused with different containers.
        </p>
        <p className="mt-4 text-muted-foreground">
          <strong>Maintainability:</strong> Easier to find and modify logic or UI independently.
        </p>
      </>
    )
  },
  {
    title: "Modern Alternative: Custom Hooks",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Modern React often uses custom hooks instead of container components. Hooks separate logic without creating wrapper components:
        </p>
        <CodeBlock
          lines={[
            'function useUserList() {',
            '  const [users, setUsers] = useState<User[]>([]);',
            '',
            '  useEffect(() => {',
            '    fetchUsers().then(data => setUsers(data));',
            '  }, []);',
            '',
            '  return users;',
            '}',
            '',
            'function UserListPage() {',
            '  const users = useUserList();',
            '  return <UserList users={users} onSelectUser={() => {}} />;',
            '}'
          ]}
        />
        <p className="mt-4 text-muted-foreground">
          This achieves the same separation of concerns without the extra wrapper component.
        </p>
      </>
    )
  }
];

export default function PresentationalVsContainerComponentsPage() {
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
            <h1 className="text-3xl font-bold tracking-tight">Presentational vs Container Components</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Understanding the pattern of separating UI rendering from business logic
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
          quizLink="/lesson/component-reusability-structure/presentational-vs-container-components/quiz"
          lessonId={12}
          contentSlug="presentational-vs-container-components"
        />
      </div>
    </div>
  );
}
