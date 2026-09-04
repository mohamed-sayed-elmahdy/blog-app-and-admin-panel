"use client"
import Image from "next/image"
import Link from "next/link"
import {
  BookOpen,
  BrainCircuit,
  Bug,
  ClipboardList,
  FileText,
  Flame,
  GraduationCap,
  LayoutDashboard,
  Lightbulb,
  LifeBuoy,
  Map,
  NotebookPen,
  PieChart,
  Rocket,
  ScrollText,
  Send,
  Settings2,
  ShieldCheck,
  Sparkles,
  Swords,
  Trophy,
  WandSparkles,
  Wrench,
  Frame, Command

} from "lucide-react"


import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useLocale } from "next-intl";


const data = {
  user: {
    name: "Mohamed Sayed",
    email: "[m@example.com](mailto:m@example.com)",
    avatar: "https://ui.shadcn.com/avatars/shadcn.jpg",
  },

  navMain: [
    // =========================
    // DASHBOARD & FEED
    // =========================
    {
      title: "My Feed",
      url: "/dashboard",
      icon: LayoutDashboard,
      colorIcon: "#3B82F6",
      items: [
        {
          title: "Trending Tutorials",
          url: "/dashboard/feed/trending-tutorials",
        },
        {
          title: "Latest Challenges",
          url: "/dashboard/feed/latest-challenges",
        },
        {
          title: "Continue Learning",
          url: "/dashboard/feed/continue-learning",
        },
      ],
    },


    // =========================
    // CAREER & INTERVIEWS
    // =========================
    {
      title: "Mock Interviews",
      url: "/dashboard/mock-interviews",
      icon: BrainCircuit,
      colorIcon: "#8B5CF6",
      items: [
        {
          title: "Mock Interview with Human",
          url: "/dashboard/mock-interviews/human",
        },
        {
          title: "Mock Interview with AI",
          url: "/dashboard/mock-interviews/ai",
        },
        {
          title: "Interview Feedback",
          url: "/dashboard/mock-interviews/feedback",
        },
      ],
    },

    {
      title: "Interviews",
      url: "/dashboard/interviews",
      icon: ClipboardList,
      colorIcon: "#06B6D4",
      items: [
        {
          title: "React Interviews",
          url: "/dashboard/interviews/react",
        },
        {
          title: "JavaScript Interviews",
          url: "/dashboard/interviews/javascript",
        },
        {
          title: "Next.js Interviews",
          url: "/dashboard/interviews/nextjs",
        },
        {
          title: "TypeScript Interviews",
          url: "/dashboard/interviews/typescript",
        },
      ],
    },

    {
      title: "Resume Review",
      url: "/dashboard/resume-review",
      icon: FileText,
      colorIcon: "#F97316",
      items: [
        {
          title: "Review with Human",
          url: "/dashboard/resume-review/human",
        },
        {
          title: "Review with AI",
          url: "/dashboard/resume-review/ai",
        },
        {
          title: "ATS Score Checker",
          url: "/dashboard/resume-review/ats-score",
        },
      ],
    },

    {
      title: "Roadmaps",
      url: "/dashboard/roadmaps",
      icon: Map,
      colorIcon: "#22C55E",
      items: [
        {
          title: "Frontend Roadmap",
          url: "/dashboard/roadmaps/frontend",
        },
        {
          title: "React Roadmap",
          url: "/dashboard/roadmaps/react",
        },
        {
          title: "Next.js Roadmap",
          url: "/dashboard/roadmaps/nextjs",
        },
      ],
    },

    // =========================
    // LEARNING
    // =========================
    {
      title: "Tutorials",
      url: "/dashboard/tutorials",
      icon: GraduationCap,
      colorIcon: "#EAB308",
      items: [
        {
          title: "React Tutorials",
          url: "/dashboard/tutorials/react",
        },
        {
          title: "Next.js Tutorials",
          url: "/dashboard/tutorials/nextjs",
        },
        {
          title: "TypeScript Tutorials",
          url: "/dashboard/tutorials/typescript",
        },
      ],
    },

    {
      title: "How To",
      url: "/dashboard/how-to",
      icon: Wrench,
      colorIcon: "#EF4444",
      items: [
        {
          title: "Build Authentication",
          url: "/dashboard/how-to/authentication",
        },
        {
          title: "Deploy Next.js App",
          url: "/dashboard/how-to/deployment",
        },
        {
          title: "Optimize Performance",
          url: "/dashboard/how-to/performance",
        },
      ],
    },

    {
      title: "Tips & Tricks",
      url: "/dashboard/tips-and-tricks",
      icon: Lightbulb,
      colorIcon: "#FACC15",
      items: [
        {
          title: "React Tips",
          url: "/dashboard/tips-and-tricks/react",
        },
        {
          title: "JavaScript Tricks",
          url: "/dashboard/tips-and-tricks/javascript",
        },
        {
          title: "Developer Productivity",
          url: "/dashboard/tips-and-tricks/productivity",
        },
      ],
    },

    {
      title: "Cheat Sheets",
      url: "/dashboard/cheat-sheets",
      icon: ScrollText,
      colorIcon: "#14B8A6",
      items: [
        {
          title: "React Cheat Sheet",
          url: "/dashboard/cheat-sheets/react",
        },
        {
          title: "TypeScript Cheat Sheet",
          url: "/dashboard/cheat-sheets/typescript",
        },
        {
          title: "Git Cheat Sheet",
          url: "/dashboard/cheat-sheets/git",
        },
      ],
    },

    {
      title: "Best Practices",
      url: "/dashboard/best-practices",
      icon: ShieldCheck,
      colorIcon: "#10B981",
      items: [
        {
          title: "Clean Code",
          url: "/dashboard/best-practices/clean-code",
        },
        {
          title: "Project Structure",
          url: "/dashboard/best-practices/project-structure",
        },
        {
          title: "Performance Optimization",
          url: "/dashboard/best-practices/performance",
        },
      ],
    },

    {
      title: "Troubleshooting",
      url: "/dashboard/troubleshooting",
      icon: Bug,
      colorIcon: "#DC2626",
      items: [
        {
          title: "Fix Hydration Errors",
          url: "/dashboard/troubleshooting/hydration-errors",
        },
        {
          title: "Debug React Apps",
          url: "/dashboard/troubleshooting/debugging",
        },
        {
          title: "Fix Build Issues",
          url: "/dashboard/troubleshooting/build-errors",
        },
      ],
    },

    // =========================
    // PRODUCTIVITY
    // =========================
    {
      title: "Challenges",
      url: "/dashboard/challenges",
      icon: Trophy,
      colorIcon: "#F59E0B",
      items: [
        {
          title: "Easy Challenges",
          url: "/dashboard/challenges/easy",
        },
        {
          title: "Medium Challenges",
          url: "/dashboard/challenges/medium",
        },
        {
          title: "Hard Challenges",
          url: "/dashboard/challenges/hard",
        },
      ],
    },

    {
      title: "Notes",
      url: "/dashboard/notes",
      icon: NotebookPen,
      colorIcon: "#6366F1",
      items: [
        {
          title: "My Notes",
          url: "/dashboard/notes/my-notes",
        },
        {
          title: "Saved Snippets",
          url: "/dashboard/notes/snippets",
        },
        {
          title: "Quick Drafts",
          url: "/dashboard/notes/drafts",
        },
      ],
    },

    {
      title: "Bookmarks",
      url: "/dashboard/bookmarks",
      icon: Flame,
      colorIcon: "#FB7185",
      items: [
        {
          title: "Saved Blogs",
          url: "/dashboard/bookmarks/blogs",
        },
        {
          title: "Saved Tutorials",
          url: "/dashboard/bookmarks/tutorials",
        },
        {
          title: "Saved Interviews",
          url: "/dashboard/bookmarks/interviews",
        },
      ],
    },

    // =========================
    // CONTENT
    // =========================
    {
      title: "Blogs",
      url: "/dashboard/blogs",
      icon: BookOpen,
      colorIcon: "#0EA5E9",
      items: [
        {
          title: "All Blogs",
          url: "/dashboard/blogs/all",
        },
        {
          title: "Popular Posts",
          url: "/dashboard/blogs/popular",
        },
        {
          title: "Latest Articles",
          url: "/dashboard/blogs/latest",
        },
      ],
    },

    {
      title: "Documentation",
      url: "/dashboard/documentation",
      icon: Rocket,
      colorIcon: "#9333EA",
      items: [
        {
          title: "Getting Started",
          url: "/dashboard/documentation/getting-started",
        },
        {
          title: "API Reference",
          url: "/dashboard/documentation/api-reference",
        },
        {
          title: "Components",
          url: "/dashboard/documentation/components",
        },
        {
          title: "Changelog",
          url: "/dashboard/documentation/changelog",
        },
      ],
    },

    // =========================
    // AI TOOLS
    // =========================
    {
      title: "AI Assistant",
      url: "/dashboard/ai-assistant",
      icon: WandSparkles,
      colorIcon: "#A855F7",
      items: [
        {
          title: "Explain Code",
          url: "/dashboard/ai-assistant/explain-code",
        },
        {
          title: "Fix Errors",
          url: "/dashboard/ai-assistant/fix-errors",
        },
        {
          title: "Generate Components",
          url: "/dashboard/ai-assistant/generate-components",
        },
      ],
    },

    // =========================
    // SETTINGS
    // =========================
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: Settings2,
      colorIcon: "#64748B",
      items: [
        {
          title: "General",
          url: "/dashboard/settings/general",
        },
        {
          title: "Appearance",
          url: "/dashboard/settings/appearance",
        },
        {
          title: "Notifications",
          url: "/dashboard/settings/notifications",
        },
        {
          title: "Billing",
          url: "/dashboard/settings/billing",
        },
      ],
    },


  ],

  navSecondary: [
    {
      title: "Support",
      url: "/support",
      icon: LifeBuoy,

    },
    {
      title: "Feedback",
      url: "/feedback",
      icon: Send,
    },
  ],

  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}


export function AppSidebar({
  ...props
}) {
  const locale = useLocale();
  return (
    <Sidebar variant="inset" {...props} side={locale === "ar" ? "right" : "left"}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div
                  className="flex  items-center justify-center ps-4">
                  <Image src="/logo3.png" alt="Frontend Forge Logo" width={50} height={40}  />

                </div>
                <div className="flex  text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Frontend Forge</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
