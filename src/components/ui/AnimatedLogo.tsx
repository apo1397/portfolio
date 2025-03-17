"use client";

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import netflixLogo from '@/assets/images/apoorv_logo2.png'
// import netflixIntro from '@'

export default function AnimatedLogo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, [audioRef]);

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-black">
        <Image
          src={netflixLogo}
          alt="Netflix Logo"
          width={300}
          height={100}
          className="animate-netflix-logo" 
        />
        {/* <audio ref={audioRef} src={netflixIntro} autoPlay={true} loop={false} /> */}
    </div>
  );
}