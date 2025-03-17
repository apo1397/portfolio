"use client";

import { MainLayout } from '@/components/layout/MainLayout';
import { ProfileBanner } from '@/components/profile/ProfileBanner';
import { CardRow } from '@/components/profile/CardRow';

// Top Picks cards data for developer
const topPicksCards = [
  {
    label: "Skills",
    imageUrl: "https://ext.same-assets.com/3270053717/2125858806.jpeg",
    href: "/skills"
  },
  {
    label: "Projects",
    imageUrl: "https://ext.same-assets.com/3314575979/2217304362.jpeg",
    href: "/projects"
  },
  {
    label: "Certifications",
    imageUrl: "https://ext.same-assets.com/3899245635/374238908.jpeg",
    href: "/certifications"
  },
  {
    label: "Experience",
    imageUrl: "https://ext.same-assets.com/3238125034/3909040876.jpeg",
    href: "/work-experience"
  },
  {
    label: "Recommendations",
    imageUrl: "https://ext.same-assets.com/3813304014/3945536945.jpeg",
    href: "/recommendations"
  },
  {
    label: "Contact Me",
    imageUrl: "https://ext.same-assets.com/1596903051/209138278.jpeg",
    href: "/contact-me"
  }
];

// Continue Watching cards data for developer
const continueWatchingCards = [
  {
    label: "Music",
    imageUrl: "https://ext.same-assets.com/2856441299/1368048024.jpeg",
    href: "/music"
  },
  {
    label: "Reading",
    imageUrl: "https://ext.same-assets.com/1802888828/1476284012.jpeg",
    href: "/reading"
  },
  {
    label: "Blogs",
    imageUrl: "https://ext.same-assets.com/2637683392/3018728848.jpeg",
    href: "/blogs"
  },
  {
    label: "Certifications",
    imageUrl: "https://ext.same-assets.com/1351483615/3904835365.jpeg",
    href: "/certifications"
  },
  {
    label: "Contact Me",
    imageUrl: "https://ext.same-assets.com/1596903051/209138278.jpeg",
    href: "/contact-me"
  }
];

export default function DeveloperProfile() {
  return (
    <MainLayout>
      <ProfileBanner
        backgroundImage="https://ext.same-assets.com/2325684012/2846338995.gif"
      />

      <CardRow
        title="Today's Top Picks for developer"
        cards={topPicksCards}
      />

      <CardRow
        title="Continue Watching for developer"
        cards={continueWatchingCards}
        isWatching={true}
      />
    </MainLayout>
  );
}
