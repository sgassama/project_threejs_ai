import React from 'react';
import { motion } from 'framer-motion';

const NuxtStudyGuide: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
    >
      <h1>Detailed Astro.js Study Guide</h1>

      <Step
        title="Introduction to Astro.js"
        duration="1 week"
        objectives={[
          'Understand the purpose and features of Astro.js.',
          'Learn how Astro.js simplifies modern web development.',
          'Explore the benefits of static site generation (SSG) in Astro.js.',
        ]}
        resources={[
          <a href="https://docs.astro.build/" key="1">
            Official Astro.js Documentation
          </a>,
          <a
            href="https://www.youtube.com/watch?v=_syjNgQ3C4c"
            key="2"
          >
            Astro.js Introduction Video
          </a>,
        ]}
        example={<p>Create a simple Astro.js project and understand the basic folder structure.</p>}
      />

      <Step
        title="Astro.js Fundamentals"
        duration="2 weeks"
        objectives={[
          'Explore Astro.js components, layouts, and partials.',
          'Understand routing in Astro.js and how to create dynamic pages.',
          'Learn about Astro.js data fetching methods.',
        ]}
        resources={[
          <a href="https://docs.astro.build/" key="1">
            Astro.js Documentation
          </a>,
          <a href="https://docs.astro.build/guides/components" key="2">
            Astro.js Components Guide
          </a>,
        ]}
        example={<p>Create an Astro.js project that uses layouts, dynamic pages, and data fetching.</p>}
      />

      {/* Add other steps similarly */}

      <Step
        title="Conclusion"
        duration="Congratulations!"
        objectives={[
          'Apply all learned concepts to a real-world project.',
          'Build a website using Astro.js.',
          'Understand the process of deploying an Astro.js project in a production environment.',
        ]}
        resources={[
          <a href="https://docs.astro.build/" key="1">
            Astro.js Documentation
          </a>,
          <a href="https://vercel.com/" key="2">
            Vercel Hosting Platform
          </a>,
          <a href="https://www.netlify.com/" key="3">
            Netlify Hosting Platform
          </a>,
        ]}
        example={<p>Create a personal website using Astro.js and deploy it to a hosting platform.</p>}
      />
    </motion.div>
  );
};

interface StepProps {
  title: string;
  duration: string;
  objectives: string[];
  resources: JSX.Element[];
  example: JSX.Element;
}

const Step: React.FC<StepProps> = ({ title, duration, objectives, resources, example }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>Duration: {duration}</p>
      <h3>Learning Objectives:</h3>
      <ul>
        {objectives.map((objective, index) => (
          <li key={index}>{objective}</li>
        ))}
      </ul>
      <h3>Resources:</h3>
      <ul>
        {resources.map((resource, index) => (
          <li key={index}>{resource}</li>
        ))}
      </ul>
      <h3>Example:</h3>
      {example}
    </div>
  );
};

export default NuxtStudyGuide;
