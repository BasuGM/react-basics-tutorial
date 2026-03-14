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
          Rendering content based on user permissions is a common pattern in web applications. You need to ensure that only
          authorized users can see certain features, buttons, or pages.
        </p>
        <ul>
          <li><strong>Role-based access control</strong>: Show content based on user roles (admin, editor, viewer)</li>
          <li><strong>Permission-based access</strong>: Show content based on specific permissions</li>
          <li><strong>Client-side rendering</strong>: Hide UI elements from unauthorized users</li>
          <li><strong>Server-side protection</strong>: Always validate permissions on the backend</li>
        </ul>
      </>
    )
  },
  {
    title: "Role-Based Rendering",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Conditionally render UI based on the user's role.
        </p>
        <CodeBlock
          lines={[
            'function Dashboard({ user }) {',
            '  return (',
            '    <div>',
            '      <h1>Dashboard</h1>',
            '      {user.role === "admin" && (',
            '        <AdminPanel />',
            '      )}',
            '      {(user.role === "admin" || user.role === "editor") && (',
            '        <EditTools />',
            '      )}',
            '    </div>',
            '  );',
            '}'
          ]}
        />
      </>
    )
  },
  {
    title: "Permission-Based Rendering",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Check if a user has specific permissions before rendering features.
        </p>
        <CodeBlock
          lines={[
            'function DocumentActions({ user, document }) {',
            '  const canEdit = user.permissions?.includes("edit_document");',
            '  const canDelete = user.permissions?.includes("delete_document");',
            '',
            '  return (',
            '    <div>',
            '      {canEdit && <button>Edit</button>}',
            '      {canDelete && <button>Delete</button>}',
            '    </div>',
            '  );',
            '}'
          ]}
        />
      </>
    )
  },
  {
    title: "Helper Functions",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Create reusable helper functions to check permissions cleanly.
        </p>
        <CodeBlock
          lines={[
            'function hasPermission(user, permission) {',
            '  return user?.permissions?.includes(permission) ?? false;',
            '}',
            '',
            'function isAdmin(user) {',
            '  return user?.role === "admin";',
            '}',
            '',
            'function DeleteButton({ user, itemId }) {',
            '  if (!hasPermission(user, "delete_items")) {',
            '    return null;',
            '  }',
            '  return <button onClick={() => deleteItem(itemId)}>Delete</button>;',
            '}'
          ]}
        />
      </>
    )
  },
  {
    title: "Protected Components",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Create wrapper components that handle permission checks.
        </p>
        <CodeBlock
          lines={[
            'function ProtectedFeature({ user, requiredPermission, children }) {',
            '  const hasAccess = user?.permissions?.includes(requiredPermission);',
            '',
            '  if (!hasAccess) {',
            '    return null; // or return <LockedMessage />;',
            '  }',
            '',
            '  return children;',
            '}',
            '',
            'function App({ user }) {',
            '  return (',
            '    <ProtectedFeature user={user} requiredPermission="view_analytics">',
            '      <AnalyticsDashboard />',
            '    </ProtectedFeature>',
            '  );',
            '}'
          ]}
        />
      </>
    )
  },
  {
    title: "Important: Always Validate on Backend",
    content: (
      <>
        <p className="mb-4 text-muted-foreground font-semibold text-amber-700">
          ⚠️ Client-side permission checks are only for UI/UX. Always validate permissions on the server!
        </p>
        <CodeBlock
          lines={[
            '// Client-side: Hide the button',
            'if (!user.permissions.includes("delete")) {',
            '  return null; // Button is hidden',
            '}',
            '',
            '// But someone could still call the API directly!',
            '// Server MUST check permissions again:',
            'app.delete("/api/items/:id", (req, res) => {',
            '  const user = req.user;',
            '  if (!user.permissions.includes("delete")) {',
            '    return res.status(403).json({ error: "Forbidden" });',
            '  }',
            '  // Safe to delete',
            '});'
          ]}
        />
      </>
    )
  },
  {
    title: "Best Practices",
    content: (
      <ul>
        <li>Always validate permissions on both client and server</li>
        <li>Create reusable permission helper functions</li>
        <li>Use protected component wrappers for common patterns</li>
        <li>Fail securely - hide features if permissions are unclear</li>
        <li>Don't trust client-side permission data - always verify on server</li>
        <li>Log permission checks and denied access attempts</li>
        <li>Consider loading states while fetching user permissions</li>
      </ul>
    )
  }
];

export default function RenderingBasedOnPermissionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Navigation */}
        <div className="mb-6">
          <Link
            href="/lesson/conditional-dynamic-ui"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Conditional & Dynamic UI
          </Link>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Code className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold tracking-tight">Rendering Based on Permissions</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Control what users see based on their role and permissions
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
          quizLink="/lesson/conditional-dynamic-ui/rendering-based-on-permissions/quiz"
          lessonId={9}
          contentSlug="rendering-based-on-permissions"
        />
      </div>
    </div>
  );
}
