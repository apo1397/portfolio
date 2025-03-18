// src/app/about.tsx

"use client";
import { motion } from 'framer-motion';
import {MainLayout} from '@/components/layout/MainLayout';
import GithubCalendarComponent from '@/components/GithubCalendarComponent'; // Import the new component

const fadeInAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  // Sample facts to display
  const facts = [
    "I once lived in three countries in one year.",
    "I am a coffee enthusiast and a major foodie.",
    "I play chess but still learning."
  ];
  export default function AboutMe(){
  return (
    <MainLayout>
      <motion.div
        className="mb-12"
        initial="hidden"
        animate="visible"
        variants={fadeInAnimation}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
      </motion.div>

      <motion.section
        className="mb-12"
        initial="hidden"
        animate="visible"
        variants={fadeInAnimation}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Random Facts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {facts.map((fact, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-5 rounded-lg shadow-md transition-transform transform hover:scale-105"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <p className="text-gray-200">{fact}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="mb-12"
        initial="hidden"
        animate="visible"
        variants={fadeInAnimation}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Interests and Passions</h2>
        <p>
          I am passionate about technology, innovation, and creating meaningful experiences
          through product management. I also enjoy exploring new cultures and cuisines.
        </p>
      </motion.section>

      <motion.section
        className="mb-12"
        initial="hidden"
        animate="visible"
        variants={fadeInAnimation}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Music</h2>
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <p>Check out my favorite playlists:</p>
          <iframe
            src="https://open.spotify.com/embed/playlist/37i9dQZEVXbNG2KDcFcKOF"
            width="100%"
            height="380"
            frameBorder="0"
            allowTransparency={true}
            allow="encrypted-media"
            title="Spotify Music"
          />
        </div>
      </motion.section>

      <motion.section
        className="mb-12"
        initial="hidden"
        animate="visible"
        variants={fadeInAnimation}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Instagram Feed</h2>
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <p>Check out my latest Instagram posts:</p>
          <iframe
            src="https://www.instagram.com/p/CN2w2k3DpDs/embed"
            width="100%"
            height="400"
            frameBorder="0"
            allowTransparency={true}
            scrolling="no"
            title="Instagram Feed"
          />
        </div>
      </motion.section>

      <motion.section
        className=""
        initial="hidden"
        animate="visible"
        variants={fadeInAnimation}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4">GitHub Commits Heatmap</h2>
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <p>Here's a look at my GitHub contributions:</p>
          <GithubCalendarComponent username="apo1397" /> {/* Use the new component */}
        </div>
      </motion.section>
    </MainLayout>
  );
};