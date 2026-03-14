"use client";
import { LessonTemplate, LessonPageData } from "@/components/common/lesson-template";

const componentReusabilityStructureLesson: LessonPageData = {
  id: 12,
  title: "Component Reusability & Structure",
  description: "Learn how to design reusable components and structure your React applications for scalability and maintainability.",
  link: "/lesson/component-reusability-structure",
  content: [
    { id: 1201, title: "Reusable components", slug: "reusable-components" },
    { id: 1202, title: "Props design", slug: "props-design" },
    { id: 1203, title: "Folder structure", slug: "folder-structure" },
    { id: 1204, title: "Presentational vs container components", slug: "presentational-vs-container-components" },
    { id: 1205, title: "When to split components", slug: "when-to-split-components" }
  ]
};

export default function ComponentReusabilityStructurePage() {
  return <LessonTemplate data={componentReusabilityStructureLesson} />;
}
