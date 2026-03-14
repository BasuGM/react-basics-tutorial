"use client";
import { LessonTemplate, LessonPageData } from "@/components/common/lesson-template";

const conditionalDynamicUILesson: LessonPageData = {
  id: 9,
  title: "Conditional & Dynamic UI",
  description: "Learn how to render UI conditionally and create dynamic interfaces based on state and props.",
  link: "/lesson/conditional-dynamic-ui",
  content: [
    { id: 901, title: "Conditional rendering patterns", slug: "conditional-rendering-patterns" },
    { id: 902, title: "Dynamic classes", slug: "dynamic-classes" },
    { id: 903, title: "Rendering based on permissions", slug: "rendering-based-on-permissions" },
    { id: 904, title: "Feature flags (intro-level)", slug: "feature-flags-intro-level" }
  ]
};

export default function ConditionalDynamicUIPage() {
  return <LessonTemplate data={conditionalDynamicUILesson} />;
}
