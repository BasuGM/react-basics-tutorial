"use client";
import { LessonTemplate, LessonPageData } from "@/components/common/lesson-template";

const classComponentsLegacyLesson: LessonPageData = {
  id: 5,
  title: "Class Components (Legacy)",
  description: "Understand class components - the original way to build React components. Learn why modern React favors functional components.",
  link: "/lesson/class-components-legacy",
  content: [
    { id: 501, title: "Class Syntax", slug: "class-syntax" },
    { id: 502, title: "render() Method", slug: "render" },
    { id: 503, title: "this.props & this.state", slug: "this-props-this-state" },
    { id: 504, title: "Lifecycle Overview", slug: "lifecycle-overview" },
    { id: 505, title: "Why Functional Components Replaced Them", slug: "why-functional-components-replaced-them" }
  ]
};

export default function ClassComponentsLegacyPage() {
  return <LessonTemplate data={classComponentsLegacyLesson} />;
}
