"use client";
import { LessonTemplate, LessonPageData } from "@/components/common/lesson-template";

const jsxRenderingLesson: LessonPageData = {
  id: 3,
  title: "JSX & Rendering",
  description: "Learn how JSX works and how React renders components to the DOM.",
  link: "/lesson/jsx-rendering",
  content: [
    { id: 301, title: "JSX rules", slug: "jsx-rules" },
    { id: 302, title: "Expressions vs statements", slug: "expressions-vs-statements" },
    { id: 303, title: "Conditional rendering", slug: "conditional-rendering" },
    { id: 304, title: "Lists & keys", slug: "lists-keys" },
    { id: 305, title: "Fragments", slug: "fragments" }
  ]
};

export default function JSXRenderingPage() {
  return <LessonTemplate data={jsxRenderingLesson} />;
}
