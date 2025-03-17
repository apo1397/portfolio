"use client";

import { MainLayout } from '@/components/layout/MainLayout';
import { motion } from 'framer-motion';

type Skill = {
  name: string;
  proficiency: number;
  category: string;
};

const skills: Skill[] = [
  { name: "Ruby on Rails", proficiency: 95, category: "Backend" },
  { name: "React", proficiency: 90, category: "Frontend" },
  { name: "Node.js", proficiency: 85, category: "Backend" },
  { name: "AWS", proficiency: 80, category: "DevOps" },
  { name: "Kubernetes", proficiency: 75, category: "DevOps" },
  { name: "Docker", proficiency: 85, category: "DevOps" },
  { name: "TypeScript", proficiency: 85, category: "Frontend" },
  { name: "PostgreSQL", proficiency: 90, category: "Database" },
  { name: "MongoDB", proficiency: 75, category: "Database" },
  { name: "GraphQL", proficiency: 80, category: "API" },
  { name: "REST API", proficiency: 95, category: "API" },
  { name: "HTML/CSS", proficiency: 90, category: "Frontend" },
];

const categories = [...new Set(skills.map(skill => skill.category))];

export default function SkillsPage() {
  return (
    <MainLayout>
      <div className="pt-24 p-8 min-h-screen">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h1>

        <motion.p
          className="text-lg mb-12 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          With over 5 years of experience in full-stack development, I've honed a diverse set of skills
          in various technologies, frameworks, and tools. Below is a snapshot of my technical proficiencies.
        </motion.p>

        <div className="space-y-12">
          {categories.map((category, categoryIndex) => (
            <div key={category} className="mb-8">
              <motion.h2
                className="text-2xl font-bold mb-4 text-red-600"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + (categoryIndex * 0.1) }}
              >
                {category}
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="bg-zinc-900 p-5 rounded-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.3 + (categoryIndex * 0.1) + (skillIndex * 0.05)
                      }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-xl font-medium">{skill.name}</h3>
                        <span className="text-gray-400">{skill.proficiency}%</span>
                      </div>

                      <div className="w-full bg-zinc-700 rounded-full h-2.5">
                        <div
                          className="bg-red-600 h-2.5 rounded-full"
                          style={{ width: `${skill.proficiency}%` }}
                        ></div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
