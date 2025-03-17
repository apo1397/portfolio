"use client";

import { MainLayout } from '@/components/layout/MainLayout';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

export default function ContactMePage() {
  return (
    <MainLayout>
      <div className="pt-20 p-8 min-h-screen">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Apoorv
        </motion.h1>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-2 lg:gap-8 max-w-4xl mx-auto"> {/* 2x2 grid, larger on lg screens */}
          <motion.div
            className="bg-zinc-900 p-6 rounded-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="mb-4">Feel free to reach out for job opportunities, collaborations, or just to say hello!</p>

            <div className="space-y-4">
            <Button href="https://wa.me/+918297019465" icon={<FaWhatsapp />} title="WhatsApp" />
              <Button href="mailto:apoorvsinha1397@gmail.com" icon={<FaEnvelope />} title="Email" />
              <Button href="https://www.linkedin.com/in/apoorv-abhishek-a9a083144/" icon={<FaLinkedin />} title="LinkedIn" />
              <Button href="https://github.com/apo1397" icon={<FaGithub />} title="GitHub" />
              
            </div>
          </motion.div>

          <motion.div
            className="bg-zinc-900 p-6 rounded-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-4">Send a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-400 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-zinc-800 border border-zinc-700 rounded p-2 text-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-400 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-zinc-800 border border-zinc-700 rounded p-2 text-white"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-400 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-zinc-800 border border-zinc-700 rounded p-2 text-white"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="button"
                className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded font-medium transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
}

// Modified Button Component (icon on top)
const Button = ({ href, icon, title }: { href: string; icon: JSX.Element; title: string }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center w-full px-6 py-4 border border-gray-400 text-gray-400 rounded-md hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors">
      <span className="text-xl">{icon}</span> {/* Increased icon size */}
      <p className="mt-2">{title}</p>
    </a>
  );
};