"use client";

import React from 'react'; // Make sure to import React
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
  const settings = {
    dots: true,
    // infinite: true,
    // speed: 500,
    slidesToShow: 4, // Adjust the number of slides to show
    slidesToScroll: 1,
    arrows:false,
    swipe:true,
    // swipeToSlide:true,
    // autoplay: true, // Add autoplay if needed
    // autoplaySpeed: 3000, // Adjust autoplay speed (milliseconds)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          // infinite: true,
          // dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <MainLayout>
      <ProfileBanner
        backgroundImage="https://ext.same-assets.com/2325684012/2846338995.gif"
      />

      <div className="flex flex-col">
          <h2 className="text-2xl font-bold mb-4">Today's Top Picks for recruiter</h2>
          <Slider {...settings}>
            {topPicksCards.map((card) => (
              <div key={card.label} className="p-4"> {/* Add some spacing around each card */}
                <Card cardData={card} />
              </div>
            ))}
          </Slider>
      </div>

      <CardRow
        title="Continue Watching for recruiter"
        cards={continueWatchingCards}
        isWatching={true}
      />
    </MainLayout>
  );
}


const Card = ({ cardData }: { cardData: any }) => {
  return (
    <a href={cardData.href} target="_blank" rel="noopener noreferrer">
      <div className="relative rounded-lg p-4 hover:bg-red-700">
        <div className="relative w-48 h-32 rounded-lg"> {/* Square image container */}
          <img
            className="h-full w-full object-cover absolute inset-0"
            src={cardData.imageUrl}
            alt={cardData.label}
          />
          <p className="absolute text-center text-lg font-medium text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {cardData.label}
          </p>
        </div>
      </div>
    </a>
  );
};
