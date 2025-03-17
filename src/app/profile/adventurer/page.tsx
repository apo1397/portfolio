"use client";

import { MainLayout } from '@/components/layout/MainLayout';
import { ProfileBanner } from '@/components/profile/ProfileBanner';
import { CardRow } from '@/components/profile/CardRow';

// Using the same data as recruiter profile since the image showed that
const topPicksCards = [
  {
    label: "Work Permit",
    imageUrl: "https://ext.same-assets.com/765978894/1547844267.jpeg",
    href: "/work-permit"
  },
  {
    label: "Skills",
    imageUrl: "https://ext.same-assets.com/1220158125/3720419446.jpeg",
    href: "/skills"
  },
  {
    label: "Experience",
    imageUrl: "https://ext.same-assets.com/3238125034/3909040876.jpeg",
    href: "/work-experience"
  },
  {
    label: "Certifications",
    imageUrl: "https://ext.same-assets.com/1351483615/3904835365.jpeg",
    href: "/certifications"
  },
  {
    label: "Recommendations",
    imageUrl: "https://ext.same-assets.com/3813304014/3945536945.jpeg",
    href: "/recommendations"
  },
  {
    label: "Projects",
    imageUrl: "https://ext.same-assets.com/312113732/4271935993.jpeg",
    href: "/projects"
  },
  {
    label: "Contact Me",
    imageUrl: "https://ext.same-assets.com/1596903051/209138278.jpeg",
    href: "/contact-me"
  }
];

// Continue Watching cards data for adventurer
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
    label: "Contact Me",
    imageUrl: "https://ext.same-assets.com/510926375/3953493526.jpeg",
    href: "/contact-me"
  }
];

export default function AdventurerProfile() {
  return (
    <MainLayout>
      <ProfileBanner
        backgroundImage="https://ext.same-assets.com/2325684012/2846338995.gif"
      />

      <CardRow
        title="Today's Top Picks for adventurer"
        cards={topPicksCards}
      />

      <CardRow
        title="Continue Watching for adventurer"
        cards={continueWatchingCards}
        isWatching={true}
      />
    </MainLayout>
  );
}
