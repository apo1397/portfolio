"use client";
import WorkExperience from '@/app/work-experience/WorkExperience';

export default function WorkExperiencePage() {
  return <WorkExperience />;
}
import { MainLayout } from '@/components/layout/MainLayout';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaStar } from 'react-icons/fa';

// Define the TimelineItemProps interface and timeline items...
type TimelineItemProps = {
  title: string;
  subtitle: string;
  dateRange: string;
  technologies: string[];
  description: string[];
  icon: 'work' | 'education' | 'achievement';
  isVisible?: boolean;
};

const timelineItems: TimelineItemProps[] = [
  {
    title: "Software Developer - I 🎉",
    subtitle: "eKincare India",
    dateRange: "Jul 2020 - Nov 2021",
    technologies: ["React", "Context API", "Twilio", "Razorpay", "AWS"],
    description: [
      "Developed chat and video consultation features for patient engagement.",
      "Built an analytics dashboard, improving data insights for medical professionals.",
      "Optimized Lighthouse score, boosting application performance."
    ],
    icon: "work",
    isVisible: true
  },
  {
    title: "Mid-Level Software Developer 🎉",
    subtitle: "Kajima London",
    dateRange: "Jun 2023 - Present",
    technologies: ["Ruby on Rails", "React", "Node.js", "AWS", "PostgreSQL"],
    description: [
      "Led NHSPS Open Space Website development for a seamless user experience.",
      "Enhanced QA processes, reducing bug rate by 20%.",
      "Optimized system performance for 10,000+ users and 50 million bookings."
    ],
    icon: "work",
    isVisible: true
  },
  {
    title: "Software Developer - II 🎉",
    subtitle: "Roostify San Francisco",
    dateRange: "Nov 2021 - Dec 2022",
    technologies: ["CI/CD", "Automated Testing", "API Gateway", "Financial Data Integration"],
    description: [
      "Implemented automated testing, reducing release cycle time by 30%.",
      "Led the development of a loan origination platform, improving response time by 25%.",
      "Collaborated closely with cross-functional teams on CI/CD pipeline enhancements."
    ],
    icon: "work"
  },
  {
    title: "Software Developer 🎉",
    subtitle: "LetsVenture India",
    dateRange: "July 2018 - Jul 2020",
    technologies: ["Ruby on Rails", "SQL", "AngularJS", "ReactJS", "MERN stack"],
    description: [
      "Developed key features for LetsVenture platform, supporting investment growth.",
      "Built a CRM tool from scratch to manage investor relationships.",
      "Created a secondary fundraising platform, facilitating $1M+ investments."
    ],
    icon: "work"
  },
  {
    title: "Swansea University",
    subtitle: "Masters 🎓",
    dateRange: "Jan 2022 - May 2023",
    technologies: [],
    description: [
      "Developed a form management application with Java Spring Boot and ReactJS, deployed on Heroku and Netlify."
    ],
    icon: "education"
  },
  {
    title: "Vellore Institute of Technology",
    subtitle: "Bachelor's 🏅",
    dateRange: "Apr 2014 - Apr 2018",
    technologies: [],
    description: [
      "Contributed to ISTE and Computer Society of India, organized Gravitas Fest, and published research in IJMET."
    ],
    icon: "education"
  }
];

export function WorkExperiencePage2() {
  return (
    <MainLayout>
      <div className="timeline-container pt-24 px-4 md:px-8 pb-16 max-w-6xl mx-auto content">
        <motion.h2
          className="timeline-title text-3xl md:text-4xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          📅 Work Experience & Education Timeline
        </motion.h2>

        <div className="vertical-timeline vertical-timeline--animate vertical-timeline--two-columns relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-500 transform -translate-x-1/2"></div>

          {timelineItems.map((item, index) => (
            <motion.div
              key={`${item.title}-${index}`}
              className={`vertical-timeline-element vertical-timeline-element--${item.icon} vertical-timeline-element relative mb-16 md:mb-24 
                ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}
              `}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              
              {/* Circle indicator with icon */}
              <span className={`vertical-timeline-element-icon bounce-in 
                ${item.icon === 'work' ? 'bg-blue-500' : 'bg-pink-400'} text-white rounded-full flex items-center justify-center w-12 h-12 absolute 
                ${index % 2 === 0 ? 'left-0' : 'right-0'} 
                transform -translate-y-1/2
              `}>
                {item.icon === 'work' ? (
                  <FaBriefcase />
                ) : item.icon === 'education' ? (
                  <FaGraduationCap />
                ) : (
                  <FaStar />
                )}
              </span>

              <div className={`vertical-timeline-element-content bounce-in 
                ${item.icon === 'work' ? 'bg-blue-500' : 'bg-gray-200'} text-white p-6 rounded-lg shadow-md 
                ${index % 2 === 0 ? 'ml-12 md:ml-0' : 'mr-12 md:mr-0'}
              `}>
                <div className={`vertical-timeline-element-content-arrow 
                  ${item.icon === 'work' ? 'border-blue-500' : 'border-gray-200'} absolute 
                  ${index % 2 === 0 ? 'right-full' : 'left-full'} top-6
                `}></div>
                <div style={{ color: 'black' }}>
                  <h3 className="vertical-timeline-element-title text-lg font-bold">{item.title}</h3>
                  <h4 className="vertical-timeline-element-subtitle text-md font-medium opacity-80">{item.subtitle}</h4>
                  {item.technologies.length > 0 && (
                    <p className="vertical-timeline-element-tech text-sm font-mono mb-3">
                      🔧 {item.technologies.join(', ')}
                    </p>
                  )}
                  <p className="text-sm md:text-base">
                    {item.description.map((desc, i) => (
                      <span key={i}>* {desc}<br /></span>
                    ))}
                  </p>
                </div>
                <span className="vertical-timeline-element-date block text-sm font-medium text-gray-300">
                  {item.dateRange}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}