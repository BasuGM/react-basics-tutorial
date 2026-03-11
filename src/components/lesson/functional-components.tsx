"use client";
import { LessonTemplate, LessonPageData } from "@/components/common/lesson-template";

const functionalComponentsLesson: LessonPageData = {
  id: 4,
  title: "Functional Components",
  description: "Learn how to build reusable and composable functional components in React.",
  link: "/lesson/functional-components",
  content: [
    { id: 401, title: "What a component really is", slug: "what-a-component-really-is" },
    { id: 402, title: "Props", slug: "props" },
    { id: 403, title: "Reusability", slug: "reusability" },
    { id: 404, title: "Composition", slug: "composition" },
    { id: 405, title: "Default props patterns", slug: "default-props-patterns" }
  ]
};

export default function FunctionalComponentsPage() {
  return <LessonTemplate data={functionalComponentsLesson} />;
}
