"use client";
import { LessonTemplate, LessonPageData } from "@/components/common/lesson-template";

const stateEventsLesson: LessonPageData = {
  id: 6,
  title: "State & Events",
  description: "Learn how to manage component state and handle user interactions in React.",
  link: "/lesson/state-events",
  content: [
    { id: 601, title: "useState", slug: "use-state" },
    { id: 602, title: "Event handling", slug: "event-handling" },
    { id: 603, title: "Controlled inputs", slug: "controlled-inputs" },
    { id: 604, title: "Updating state correctly", slug: "updating-state-correctly" },
    { id: 605, title: "State immutability", slug: "state-immutability" }
  ]
};

export default function StateEventsPage() {
  return <LessonTemplate data={stateEventsLesson} />;
}
