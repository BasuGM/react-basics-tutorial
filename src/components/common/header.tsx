"use client"

import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { usePathname } from "next/navigation";
import { lessons } from "@/lib/lessons";

export function Header() {
  const pathname = usePathname();
  
  // Parse pathname to extract lesson and content slugs
  const pathParts = pathname.split("/").filter(Boolean);
  let currentLesson = null;
  let currentContent = null;
  let title = "React Basics Tutorial";

  // Match lesson paths: /lesson/{lesson-slug} or /lesson/{lesson-slug}/{content-slug}
  if (pathParts[0] === "lesson" && pathParts[1]) {
    const lessonSlug = pathParts[1];
    currentLesson = lessons.find((l) => l.slug === lessonSlug);
    
    if (currentLesson) {
      title = currentLesson.title;
      
      // Check if there's a content slug (lesson or quiz page)
      if (pathParts[2]) {
        const contentSlug = pathParts[2];
        currentContent = currentLesson.content.find((c) => c.slug === contentSlug);
        
        if (currentContent) {
          // Show breadcrumb-style title for content/quiz pages
          title = `${currentLesson.title} · ${currentContent.title}`;
        }
      }
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between max-w-6xl mx-auto w-full px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-2xl">{title}</span>
        </Link>
        <nav className="flex items-center">
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
