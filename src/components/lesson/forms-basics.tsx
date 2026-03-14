"use client";
import { LessonTemplate, LessonPageData } from "@/components/common/lesson-template";

const formsBasicsLesson: LessonPageData = {
  id: 10,
  title: "Forms Basics",
  description: "Learn how to build and manage forms in React with controlled components and proper validation.",
  link: "/lesson/forms-basics",
  content: [
    { id: 1001, title: "Controlled vs uncontrolled", slug: "controlled-vs-uncontrolled" },
    { id: 1002, title: "Handling multiple inputs", slug: "handling-multiple-inputs" },
    { id: 1003, title: "Validation basics", slug: "validation-basics" },
    { id: 1004, title: "Submission flow", slug: "submission-flow" }
  ]
};

export default function FormsBasicsPage() {
  return <LessonTemplate data={formsBasicsLesson} />;
}
