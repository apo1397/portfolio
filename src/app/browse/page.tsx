"use client";

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion'; // Import AnimatePresence
import { cn } from '@/lib/utils';
import AnimatedLogo from '../../components/ui/AnimatedLogo';
import { useEffect, useState, useRef,useCallback } from 'react';

type ProfileProps = {
  name: string;
  color: string;
  href: string;
};

const profiles: ProfileProps[] = [
  {
    name: "Recruiter",
    color: "bg-blue-500",
    href: "/profile/recruiter"
  },
  {
    name: "Developer",
    color: "bg-gray-500",
    href: "/profile/developer"
  },
  {
    name: "Stalker",
    color: "bg-red-500",
    href: "/profile/stalker"
  }
];

export default function BrowsePage() {
  const [showProfiles, setShowProfiles] = useState(false);
  const [logoHeight, setLogoHeight] = useState(0);
  const logoRef = useRef<HTMLDivElement>(null); // Use useRef to get the DOM element
  // let logoHeight = 0;

  const handleLogoHeight = useCallback(() => {
    if (logoRef.current) {
      setLogoHeight(logoRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    handleLogoHeight(); // Call once after mount
    const observer = new ResizeObserver(handleLogoHeight); // Add resize observer
    observer.observe(logoRef.current!);
    const timer = setTimeout(() => {
      setShowProfiles(true);
    }, 2000); // Adjust the duration as needed

    return () => {
      clearTimeout(timer);
      observer.disconnect(); // Cleanup observer on unmount
    };
  }, [handleLogoHeight]);

  // return (
  //   <div className="flex flex-col items-center justify-center min-h-screen bg-black" style={{ overflow: 'hidden' }}> {/* Added overflow: hidden */}
    
  //     <motion.div
  //       initial={{ opacity: 1, scale: 1 }}
  //       animate={{ opacity: showProfiles ? 0 : 1, scale: showProfiles ? 0.8 : 1 }} // Scale down slightly before hiding
  //       transition={{ duration: 0.5, ease: "easeInOut" }}
  //     >
  //       <AnimatedLogo />
  //     </motion.div>

  //     {showProfiles && (
  //       <motion.div
  //         initial={{ opacity: 0, y: 20 }}
  //         animate={{ opacity: 1, y: 0 }}
  //         transition={{ duration: 0.6, delay: 0.3 }}
  //         className="browse-container flex flex-col justify-center items-center bg-black text-white p-4"
  //         style={{ height: '100vh' }} // Ensure it occupies full viewport height
  //       >
  //         <motion.p className="who-is-watching text-4xl md:text-5xl font-medium mb-12 text-center">
  //           Who's Watching?
  //         </motion.p>
  //         <motion.div
  //           className="profiles grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto max-w-screen-xl"
  //           initial={{ opacity: 0 }}
  //           animate={{ opacity: 1 }}
  //           transition={{ duration: 0.6, delay: 0.3 }}
  //         >
  //           {profiles.map((profile, index) => (
  //             <Link href={profile.href} key={profile.name}>
  //               <motion.div
  //                 className="profile-card flex flex-col items-center cursor-pointer transition-transform"
  //                 initial={{ opacity: 0, y: 20 }}
  //                 animate={{ opacity: 1, y: 0 }}
  //                 transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
  //               >
  //                 <div
  //                   className={cn(
  //                     "rounded-md w-24 h-24 md:w-32 md:h-32 mb-4 flex items-center justify-center text-5xl",
  //                     profile.color,
  //                     "hover:shadow-gray-500 hover:border-2 hover:border-white hover:rounded-xl" //Corrected hover styles
  //                   )}
  //                 >
  //                   {/* Simple smiley face */}
  //                   <div className="relative w-full h-full">
  //                     <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-black rounded-full"></div>
  //                     <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-black rounded-full"></div>
  //                     <div className="absolute bottom-1/3 left-0 right-0 mx-auto w-12 h-6 border-black border-b-2 rounded-b-full"></div>
  //                     <div className="absolute top-2/5 left-1/5 w-1 h-1 bg-white rounded-full"></div>
  //                     <div className="absolute top-2/5 right-1/5 w-1 h-1 bg-white rounded-full"></div>
  //                   </div>
  //                 </div>
  //                 <h3 className="profile-name text-lg md:text-xl text-gray-300">{profile.name}</h3>
  //               </motion.div>
  //             </Link>
  //           ))}
  //         </motion.div>
  //       </motion.div>
  //     )}
  //   </div>
  // );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black" style={{ overflow: 'hidden' }}>
      <AnimatePresence>
        {!showProfiles && (
          <motion.div
            ref={logoRef} // Assign ref to get the DOM element
            className='w-full'
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: showProfiles ? 0 : 1, scale: showProfiles ? 0.8 : 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{ height: `${logoHeight}px` }}
          >
            <AnimatedLogo />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showProfiles && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="browse-container flex flex-col justify-center items-center bg-black text-white p-4"
            style={{ height: '100vh' }}
          >
            <motion.p className="who-is-watching text-4xl md:text-5xl font-medium mb-12 text-center">
              Who's Watching?
            </motion.p>
            <motion.div
            className="profiles grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto max-w-screen-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {profiles.map((profile, index) => (
              <Link href={profile.href} key={profile.name}>
                <motion.div
                  className="profile-card flex flex-col items-center cursor-pointer transition-transform"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                >
                  <div
                    className={cn(
                      "rounded-md w-24 h-24 md:w-32 md:h-32 mb-4 flex items-center justify-center text-5xl",
                      profile.color,
                      "hover:shadow-gray-500 hover:border-2 hover:border-white hover:rounded-xl" //Corrected hover styles
                    )}
                  >
                    {/* Simple smiley face */}
                    <div className="relative w-full h-full">
                      <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-black rounded-full"></div>
                      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-black rounded-full"></div>
                      <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-12 h-6 border-black border-b-2 rounded-b-full"></div>  {/*Centered the mouth*/}
                      {/* <div className="absolute top-2/5 left-1/5 w-1 h-1 bg-white rounded-full"></div> */}
                      {/* <div className="absolute top-2/5 right-1/5 w-1 h-1 bg-white rounded-full"></div> */}
                    </div>
                  </div>
                  <h3 className="profile-name text-lg md:text-xl text-gray-300">{profile.name}</h3>
                </motion.div>
              </Link>
            ))}
          </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}