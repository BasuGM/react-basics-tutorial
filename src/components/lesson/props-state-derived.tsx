"use client";
import { LessonTemplate, LessonPageData } from "@/components/common/lesson-template";

const propsStateDerivedLesson: LessonPageData = {
  id: 8,
  title: "Props vs State vs Derived State",
  description: "Understand the differences between props, state, and derived state, and learn best practices for managing data in React.",
  link: "/lesson/props-state-derived",
  content: [
    { id: 801, title: "Data flow", slug: "data-flow" },
    { id: 802, title: "Lifting state up", slug: "lifting-state-up" },
    { id: 803, title: "When NOT to use state", slug: "when-not-to-use-state" },
    { id: 804, title: "Derived state anti-patterns", slug: "derived-state-anti-patterns" }
  ]
};

export default function PropsStateDerivedPage() {
  return <LessonTemplate data={propsStateDerivedLesson} />;
}
