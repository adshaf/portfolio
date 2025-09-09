"use client";
import { useState } from "react";
import ProjectModal from "./projectModal";
import Image from "next/image";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({subsets: ['latin']});

const poppins = Poppins({
  subsets: ['latin'],
  weight: "500"
});


interface Project {
  title: string;
  tech: string,
  summary: string;
  desc?: string | string[];
  img?: string;
  link?: string;
};

interface ProjectsGridClientProps {
  projects: Project[];
}

export default function ProjectsGridClient({ projects }: ProjectsGridClientProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
  <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {projects.map((project) => (
        <div
          key={project.title} // key on the outer container
          className="bg-white shadow-lg rounded-xl cursor-pointer overflow-hidden hover:shadow-xl"
          onClick={() => setSelectedProject(project)}
        >
          {/* Image */}
          <div className="relative h-60 w-full">
            {project.img ? (
              <Image
                id="projectImg"
                src={project.img}
                alt={project.title}
                fill
                className="object-cover"
              />
            ) : (
              <span className="text-gray-500">Image/Preview</span>
            )}
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className={`text-xl text-blue-700 font-semibold mb-2 ${poppins.className}`}>{project.title}</h3>
            <h1 className={`text-md text-blue-500 mb-2 ${inter.className}`}>{project.tech}</h1>
            <p className={`text-black mb-4 min-h-[100px] text-justify ${inter.className}`}>{project.summary}</p>
          </div>
        </div>
      ))}
    </div>

    {/* Modal */}
    <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
  </>
)}
