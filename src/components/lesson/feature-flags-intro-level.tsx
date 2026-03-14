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
          Feature flags (also called feature toggles) are a technique that allows you to enable or disable features without
          deploying new code. They're useful for A/B testing, gradual rollouts, and controlling feature availability.
        </p>
        <ul>
          <li><strong>Feature flags</strong>: Boolean values that control whether a feature is visible</li>
          <li><strong>Gradual rollout</strong>: Enable features for a percentage of users</li>
          <li><strong>A/B testing</strong>: Show different versions to different users</li>
          <li><strong>Kill switches</strong>: Quickly disable problematic features</li>
        </ul>
      </>
    )
  },
  {
    title: "Simple Feature Flags",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          The simplest approach is to use a configuration object with boolean flags.
        </p>
        <CodeBlock
          lines={[
            'const featureFlags = {',
            '  showNewDashboard: true,',
            '  enableBeta: false,',
            '  darkModeSupport: true',
            '};',
            '',
            'function App() {',
            '  return (',
            '    <div>',
            '      {featureFlags.showNewDashboard && <NewDashboard />}',
            '      {featureFlags.enableBeta && <BetaFeatures />}',
            '    </div>',
            '  );',
            '}'
          ]}
        />
      </>
    )
  },
  {
    title: "Feature Flags from Environment Variables",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Use environment variables to control feature flags without changing code.
        </p>
        <CodeBlock
          lines={[
            '// .env.local',
            'NEXT_PUBLIC_BETA_FEATURES=false',
            'NEXT_PUBLIC_NEW_DASHBOARD=true',
            '',
            '// In your component',
            'function App() {',
            '  const betaEnabled = process.env.NEXT_PUBLIC_BETA_FEATURES === "true";',
            '  const newDashboard = process.env.NEXT_PUBLIC_NEW_DASHBOARD === "true";',
            '',
            '  return (',
            '    <div>',
            '      {newDashboard && <NewDashboard />}',
            '      {betaEnabled && <BetaFeatures />}',
            '    </div>',
            '  );',
            '}'
          ]}
        />
      </>
    )
  },
  {
    title: "User-Specific Feature Flags",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Show features to specific users based on their role or beta status.
        </p>
        <CodeBlock
          lines={[
            'function Dashboard({ user }) {',
            '  return (',
            '    <div>',
            '      <h1>Dashboard</h1>',
            '      {user.isBetaTester && (',
            '        <section>',
            '          <h2>Beta Features</h2>',
            '          <ExperimentalChart />',
            '        </section>',
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
    title: "Feature Flag Helper Hook",
    content: (
      <>
        <p className="mb-4 text-muted-foreground">
          Create a custom hook to manage feature flags consistently across your app.
        </p>
        <CodeBlock
          lines={[
            '// hooks/useFeatureFlag.ts',
            'function useFeatureFlag(flagName) {',
            '  const flags = {',
            '    newSearch: process.env.NEXT_PUBLIC_NEW_SEARCH === "true",',
            '    darkMode: process.env.NEXT_PUBLIC_DARK_MODE === "true",',
            '    betaDashboard: process.env.NEXT_PUBLIC_BETA_DASHBOARD === "true"',
            '  };',
            '  return flags[flagName] || false;',
            '}',
            '',
            '// In a component',
            'function SearchPage() {',
            '  const useNewSearch = useFeatureFlag("newSearch");',
            '',
            '  return useNewSearch ? <NewSearch /> : <OldSearch />;',
            '}'
          ]}
        />
      </>
    )
  },
  {
    title: "Real-World Use Cases",
    content: (
      <ul>
        <li><strong>Gradual rollout</strong>: Enable a new feature for 10%, then 50%, then 100% of users</li>
        <li><strong>A/B testing</strong>: Show version A to 50% of users and version B to the other 50%</li>
        <li><strong>Emergency kill switch</strong>: Disable a problematic feature without redeploying</li>
        <li><strong>Development features</strong>: Hide unfinished features from production</li>
        <li><strong>Maintenance mode</strong>: Show a maintenance page to all but admin users</li>
      </ul>
    )
  },
  {
    title: "Best Practices",
    content: (
      <ul>
        <li>Keep feature flags simple and focused on one feature</li>
        <li>Use environment variables for configuration</li>
        <li>Create a centralized system for managing flags</li>
        <li>Clean up old flags once a feature is fully rolled out</li>
        <li>Document what each flag does and when it was added</li>
        <li>Consider using a feature flag service for complex scenarios</li>
      </ul>
    )
  }
];

export default function FeatureFlagsIntroLevelPage() {
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
            <h1 className="text-3xl font-bold tracking-tight">Feature Flags (Intro Level)</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Control feature visibility without deploying new code
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
          quizLink="/lesson/conditional-dynamic-ui/feature-flags-intro-level/quiz"
          lessonId={9}
          contentSlug="feature-flags-intro-level"
        />
      </div>
    </div>
  );
}
