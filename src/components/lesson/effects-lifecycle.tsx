"use client";
import { LessonTemplate, LessonPageData } from "@/components/common/lesson-template";

const effectsLifecycleLesson: LessonPageData = {
  id: 7,
  title: "Effects & Lifecycle",
  description: "Master side effects and component lifecycle with React hooks.",
  link: "/lesson/effects-lifecycle",
  content: [
    { id: 701, title: "useEffect", slug: "use-effect" },
    { id: 702, title: "Dependency array rules", slug: "dependency-array-rules" },
    { id: 703, title: "Cleanup functions", slug: "cleanup-functions" },
    { id: 704, title: "Common infinite loop mistakes", slug: "common-infinite-loop-mistakes" },
    { id: 705, title: "Mapping to class lifecycle methods", slug: "mapping-to-class-lifecycle-methods" }
  ]
};

export default function EffectsLifecyclePage() {
  return <LessonTemplate data={effectsLifecycleLesson} />;
}
