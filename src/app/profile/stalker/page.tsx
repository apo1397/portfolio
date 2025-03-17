"use client";

import { MainLayout } from '@/components/layout/MainLayout';
import { ProfileBanner } from '@/components/profile/ProfileBanner';
import { CardRow } from '@/components/profile/CardRow';

// Top Picks cards data for stalker
const topPicksCards = [
  {
    label: "Recommendations",
    imageUrl: "https://ext.same-assets.com/224139478/1311787017.jpeg",
    href: "/recommendations"
  },
  {
    label: "Contact Me",
    imageUrl: "https://ext.same-assets.com/2048175221/3850879599.jpeg",
    href: "/contact-me"
  },
  {
    label: "Projects",
    imageUrl: "https://ext.same-assets.com/4114331370/720750085.jpeg",
    href: "/projects"
  },
  {
    label: "Experience",
    imageUrl: "https://ext.same-assets.com/486919288/773235577.jpeg",
    href: "/work-experience"
  },
  {
    label: "Certifications",
    imageUrl: "https://ext.same-assets.com/2282112143/2454832506.jpeg",
    href: "/certifications"
  }
];

// Continue Watching cards data for stalker
const continueWatchingCards = [
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

export default function StalkerProfile() {
  return (
    <MainLayout>
      <ProfileBanner
        backgroundImage="https://ext.same-assets.com/2325684012/2846338995.gif"
      />

      <CardRow
        title="Today's Top Picks for stalker"
        cards={topPicksCards}
      />

      <CardRow
        title="Continue Watching for stalker"
        cards={continueWatchingCards}
        isWatching={true}
      />
    </MainLayout>
  );
}
