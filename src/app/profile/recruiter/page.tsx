"use client";

import { MainLayout } from '@/components/layout/MainLayout';
import { ProfileBanner } from '@/components/profile/ProfileBanner';
import { CardRow } from '@/components/profile/CardRow';

// Top Picks cards data
const topPicksCards = [
  // {
  //   label: "Work Permit",
  //   imageUrl: "https://ext.same-assets.com/3048873195/105311936.jpeg",
  //   href: "/work-permit"
  // },
  {
    label: "Skills",
    imageUrl: "https://ext.same-assets.com/586183396/1724732849.jpeg",
    href: "/skills"
  },
  {
    label: "Experience",
    imageUrl: "https://ext.same-assets.com/212574815/3750205781.jpeg",
    href: "/work-experience"
  },
  {
    label: "Certifications",
    imageUrl: "https://ext.same-assets.com/1505963160/3618664127.jpeg",
    href: "/certifications"
  },
  {
    label: "Recommendations",
    imageUrl: "https://ext.same-assets.com/1667344157/2764858541.jpeg",
    href: "/recommendations"
  },
  {
    label: "Projects",
    imageUrl: "https://ext.same-assets.com/3968966852/4022270945.jpeg",
    href: "/projects"
  },
  {
    label: "Contact Me",
    imageUrl: "https://ext.same-assets.com/1216415949/1587688894.jpeg",
    href: "/contact-me"
  }
];

// Continue Watching cards data
const continueWatchingCards = [
  {
    label: "Music",
    imageUrl: "https://ext.same-assets.com/2856441299/1368048024.jpeg",
    href: "/music"
  },
  {
    label: "Blogs",
    imageUrl: "https://ext.same-assets.com/2637683392/3018728848.jpeg",
    href: "/blogs"
  },
  {
    label: "Contact Me",
    imageUrl: "https://ext.same-assets.com/1216415949/1587688894.jpeg",
    href: "/contact-me"
  }
];

export default function RecruiterProfile() {
  return (
    <MainLayout>
      <ProfileBanner
        backgroundImage="https://ext.same-assets.com/2325684012/2846338995.gif"
      />

      <CardRow
        title="Today's Top Picks for recruiter"
        cards={topPicksCards}
      />

      <CardRow
        title="Continue Watching for recruiter"
        cards={continueWatchingCards}
        isWatching={true}
      />
    </MainLayout>
  );
}
