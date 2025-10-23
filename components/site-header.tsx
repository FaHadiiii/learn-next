"use client";

import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useTheme } from "next-themes";
import { ThemeSwitcher } from "./ui/shadcn-io/theme-switcher";
import { BellRing } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { DynamicBreadcrumb } from "./app-breadcrumb";

export function SiteHeader() {
  const { theme, setTheme } = useTheme();

  const unreadCount = 3;

  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <DynamicBreadcrumb />

        <div className="ml-auto flex items-center gap-2">
          {/* Theme Switcher */}
          <ThemeSwitcher
            defaultValue={theme as "light" | "dark" | "system" | undefined}
            onChange={(value) => setTheme(value)}
            value={theme as "light" | "dark" | "system" | undefined}
          />

          {/* Notification Bell with Badge */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="relative rounded-full p-0"
              >
                <BellRing className="h-[1.2rem] w-[1.2rem]" />
                {unreadCount > 0 && (
                  <span className="absolute top-1 right-1 flex h-2.5 w-2.5 items-center justify-center">
                    <span className="absolute inline-flex h-2 w-2 rounded-full bg-red-500 ring-2 dark:ring-zinc-900" />
                  </span>
                )}
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-64">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                📄 Your document “Invoice #123” was approved.
              </DropdownMenuItem>
              <DropdownMenuItem>⚙️ System update available.</DropdownMenuItem>
              <DropdownMenuItem>📬 New message from admin.</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-center text-sm text-muted-foreground">
                View all notifications
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
