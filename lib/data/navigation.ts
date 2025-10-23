"use client";

import {
  IconCalendar,
  IconCamera,
  IconDashboard,
  IconHelp,
  IconMap,
  IconSettings,
} from "@tabler/icons-react";

export const navigations = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/home",
      icon: IconDashboard,
    },
    {
      title: "User Management",
      icon: IconCamera,
      url: "#",
      items: [
        {
          title: "Users",
          url: "/users",
        },
        {
          title: "Clubs",
          url: "#",
        },
      ],
    },
    {
      title: "Venue Management",
      icon: IconMap,
      url: "#",
      items: [
        {
          title: "Venues",
          url: "#",
        },
        {
          title: "Package & Pricing",
          url: "#",
        },
      ],
    },
    {
      title: "Booking Management",
      icon: IconCalendar,
      url: "#",
      items: [
        {
          title: "Availability/Schedule",
          url: "#",
        },
        {
          title: "Payments",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Get Help",
      url: "#",
      icon: IconHelp,
    },
  ],
};
