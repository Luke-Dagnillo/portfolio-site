'use client';

import { motion } from 'framer-motion';

type Props = {
  title: string;
  description: string;
  // Backward-compatible: existing cards already pass `video`
  video?: string;
  // New: allow images when you don't have a video yet
  image?: string;
  imageAlt?: string;
  tags: string[];
  github?: string;
  reverse?: boolean;
};

export default function ProjectShowcase({
  title,
  description,
  video,
  image,
  imageAlt,
  tags,
  github,
  reverse = false,
}: Props) {
  return (
    <motion.div
      className={`flex flex-col md:flex-row ${
        reverse ? 'md:flex-row-reverse' : ''
      } items-center gap-8 mb-16`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Media */}
      {video ? (
        <video
          src={video}
          controls
          className="w-full md:w-1/2 rounded-xl shadow-md"
        />
      ) : image ? (
        // Keep it simple; we can switch to next/image later if you want optimization
        <img
          src={image}
          alt={imageAlt ?? title}
          className="w-full md:w-1/2 rounded-xl shadow-md object-cover"
        />
      ) : null}

      <div className="w-full md:w-1/2">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-black-700 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            View Code on GitHub
          </a>
        )}
      </div>
    </motion.div>
  );
}
