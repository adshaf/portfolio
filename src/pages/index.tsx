import ProjectsGridClient from "./projectsGridClient";
import { Inter, Poppins } from "next/font/google";

import Image from "next/image";

const inter = Inter({subsets: ['latin']});

const poppins = Poppins({
  subsets: ['latin'],
  weight: "500"
});


interface Project {
  title: string;
  tech: string,
  summary: string;
  desc?: string;
  img?: string;
  link?: string;
}

const projects: Project[] = [
  { title: "Project 1", tech:"React | Typescript | NextJS" ,summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis sapien, cursus efficitur fermentum et, mattis nec sapien. Nunc ultrices tellus ac tortor bibendum porta.", img: "/projects/project1.jpeg", link: "https://example.com" },
  { title: "Project 2", tech:"React | Typescript | NextJS" ,summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis sapien, cursus efficitur fermentum et, mattis nec sapien. Nunc ultrices tellus ac tortor bibendum porta.", img: "/projects/project1.jpeg", link: "https://example.com" },
  { title: "Project 3", tech:"React | Typescript | NextJS" ,summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis sapien, cursus efficitur fermentum et, mattis nec sapien. Nunc ultrices tellus ac tortor bibendum porta.", img: "/projects/project1.jpeg", link: "https://example.com" },
  { title: "Project 4", tech:"React | Typescript | NextJS" ,summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis sapien, cursus efficitur fermentum et, mattis nec sapien. Nunc ultrices tellus ac tortor bibendum porta.", img: "/projects/project1.jpeg", link: "https://example.com" },
  { title: "Project 5", tech:"React | Typescript | NextJS" ,summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis sapien, cursus efficitur fermentum et, mattis nec sapien. Nunc ultrices tellus ac tortor bibendum porta.", img: "/projects/project1.jpeg", link: "https://example.com" },
  
];

export default function Home() {

  return (
    <div>
      <section id="hero" className="min-h-screen flex flex-col md:flex-row">
        {/* Text Column */}
        <div className="flex flex-col justify-center item-start w-full md:w-1/2 p-8 bg-black/20">
          <div className={`text-[26pt] font-bold py-3 ${poppins.className}`}>
                Hello, I am Ahmad Adam Shafariansyah (or Shaf for short)
          </div>
          <div className={`pb-5 ${inter.className}`}>
            Welcome to my portfolio website! I hope to showcase my experiences & technical skillsets through this web app, so please have a read through & contact me should you find anything intriguing.
          </div>
          <div>
            [Insert additional info/self introduction]
          </div>
          <div className="flex gap-6 px-6 py-[3rem]">
            <button id="heroButton">Download Resume</button>
            <button id="heroButton">View Project Snapshots</button>
            <button id="heroButton">Contact Me</button>
          </div>
        </div>
        {/* Image Column */}
        <div id="" className="flex flex-col justify-center items-center w-full md:w-1/2 p-8">
          <img id="heroImg" src="/placeholderProfile.jpg" alt="placeholder image" width="500px"/>
        </div>
      </section>


      <section id="about" className="min-h-screen py-24 px-6 bg-gray-100 flex flex-col items-center justify-center">
        <h2 className={`text-4xl md:text-5xl font-bold mb-12 text-center ${poppins.className}`}>About Me</h2>
        {/* About Container */}
        <div className="w-full max-w-5xl bg-white shadow-lg rounded-2xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-8">
          {/* Left Column: Text */}
          <div className="flex-1 flex flex-col gap-6">
            <h3 className={`text-2xl font-semibold ${poppins.className}`}>Hi, I’m Ahmad Adam Shafariansyah</h3>
            <p className="text-gray-600">
              I’m a software developer with a passion for building intuitive and efficient web applications. I specialize in React, Next.js, and TypeScript, and I enjoy creating projects that solve real-world problems.
            </p>
            <p className="text-gray-600">
              Outside of coding, I love learning new technologies, reading about software architecture, and exploring creative ways to improve user experiences.
            </p>
            <p className="text-gray-600">
              This portfolio showcases some of my work and technical skillsets. Feel free to explore my projects and get in touch!
            </p>
          </div>
          {/* Right Column: Image / Illustration */}
          <div className="flex-1 flex justify-center items-center">
            <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-full overflow-hidden shadow-lg">
              <Image
                src="/placeholderProfile.jpg" // replace with your image
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="min-h-screen py-[5rem] px-6 bg-gray-50">
        <div className="text-[26pt] font-bold text-center mb-8">My Projects</div>
  
        {/* Client-side grid with modal */}
        <ProjectsGridClient projects={projects} />
      </section>

      <section id="contact" className="min-h-screen py-24 px-6 bg-gray-50 flex flex-col items-center justify-center">
        <h2 className={`text-4xl md:text-5xl font-bold mb-12 text-center ${poppins.className}`}>Contact Me</h2>
        {/* Contact Info Card */}
        <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-8 flex flex-col items-start gap-6">
          <p className="text-gray-600">
            I’m always open to discussing new projects, freelance opportunities, or just chatting about tech!
          </p>
          <p>
            📧 Email:{" "}
            <a href="mailto:your.email@example.com" className="text-blue-600 hover:underline">
              your.email@example.com
            </a>
          </p>
          <p>
            📞 Phone:{" "}
            <a href="tel:+1234567890" className="text-blue-600 hover:underline">
              +1 234 567 890
            </a>
          </p>
          <p>
            📍 Location: Your City, Your Country
          </p>
          {/* Optional: Social Links */}
          <div className="flex gap-4 mt-4">
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              LinkedIn
            </a>
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-black">
              GitHub
            </a>
          </div>
        </div>
      </section>
  </div>
)};





// {/* Grid for project cards */}
//           <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-8">
//             {projects.map((project, index) => (
//               <div 
//                 key={index}
//                 className="bg-white shadow-md hover:shadow-xl transition rounded-[10px]">
//                   {/* Image */}
//                   <div className="relative h-60 w-full">
//                     {project.img ? (
//                       <Image
//                         id="projectImg" 
//                         src={project.img} 
//                         alt={project.title}
//                         fill
//                         className="object-cover"
//                       />
//                     ) : (
//                       <span className="text-gray-500">Image/Preview</span>
//                     )}
//                   </div>
//                 {/* Content */}
//                 <div className="p-6 flex flex-col justify-between h-full">
//                   <div>
//                     <h3 className="text-xl text-blue-500 font-semibold mb-2">{project.title}</h3>
//                     <h1 className="text-md text-blue-500 font-semibold mb-2">{project.tech}</h1>
//                     <p className="text-black mb-4 min-h-[150px] text-justify">{project.desc}</p>

//                     {project.link && (
//                       <a 
//                       href={project.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="inline-block text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
//                       >
//                         View Project
//                       </a>
//                     )}
//                   </div>

//                 </div>
//               </div>
//             ))}
//           </div>