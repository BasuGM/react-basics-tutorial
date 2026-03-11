"use client";
import { LessonTemplate, LessonPageData } from "@/components/common/lesson-template";

const typeScriptBasicsLesson: LessonPageData = {
  id: 2,
  title: "TypeScript Basics",
  description: "Master the essential TypeScript concepts needed for React development.",
  link: "/lesson/typescript-basics",
  content: [
    { id: 201, title: "Types vs interfaces", slug: "types-vs-interfaces" },
    { id: 202, title: "Typing props", slug: "typing-props" },
    { id: 203, title: "Typing state", slug: "typing-state" },
    { id: 204, title: "Union types", slug: "union-types" },
    { id: 205, title: "Optional props", slug: "optional-props" },
    { id: 206, title: "React.FC", slug: "react-fc" }
  ]
};

export default function TypeScriptBasicsForReactPage() {
  return <LessonTemplate data={typeScriptBasicsLesson} />;
}
