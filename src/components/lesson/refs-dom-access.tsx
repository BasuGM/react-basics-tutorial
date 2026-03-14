"use client";
import { LessonTemplate, LessonPageData } from "@/components/common/lesson-template";

const refsDomAccessLesson: LessonPageData = {
  id: 11,
  title: "Refs & DOM Access",
  description: "Learn how to access and interact with DOM elements directly using refs in React.",
  link: "/lesson/refs-dom-access",
  content: [
    { id: 1101, title: "useRef", slug: "use-ref" },
    { id: 1102, title: "When refs are necessary", slug: "when-refs-are-necessary" },
    { id: 1103, title: "Focusing inputs", slug: "focusing-inputs" },
    { id: 1104, title: "Measuring DOM", slug: "measuring-dom" },
    { id: 1105, title: "What NOT to do with refs", slug: "what-not-to-do-with-refs" }
  ]
};

export default function RefsDomAccessPage() {
  return <LessonTemplate data={refsDomAccessLesson} />;
}
