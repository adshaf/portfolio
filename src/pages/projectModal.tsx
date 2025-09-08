"use client";

interface Project {
  title: string;
  tech: string,
  summary: string;
  desc?: string;
  img?: string;
  link?: string;
};

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-xl shadow-lg w-11/12 md:w-1/2 p-6 relative">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
        <p className="text-gray-700">{project.desc}</p>
        <div className="mt-6">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Visit Project
          </button>
        </div>
      </div>
    </div>
  );
}