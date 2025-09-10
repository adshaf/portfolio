"use client";

import { Inter, Poppins } from "next/font/google";
import { useLanguage } from "@/providers/LanguageProvider";
import { translations } from "@/lib/translations";

const inter = Inter({subsets: ['latin']});

const poppins = Poppins({
  subsets: ['latin'],
  weight: "500"
});

interface Project {
  title: { en: string; jp: string };
  tech: string;
  summary: { en: string; jp: string };
  desc?: { en: string[]; jp: string[] };
  img?: string;
  link?: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;
  const { language } = useLanguage();

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-xl shadow-lg w-11/12 md:w-1/2 p-6 relative">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className={`text-xl text-blue-700 font-semibold mb-2 ${poppins.className}`}>
          {project.title[language]}
        </h2>
        <h1 className={`text-md text-blue-500 mb-2 ${inter.className}`}>{project.tech}</h1>
        <p className={`text-black ${inter.className}`}>
          {project.desc[language]}
        </p>
        <div className="mt-6">
          <a 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Visit Project
          </a>
        </div>
      </div>
    </div>
  );
}