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
  desc?: string | string[];
  img?: string;
  link?: string;
}

const projects: Project[] = [
  { 
    title: "Wedding RSVP Web App",
    tech:"Next.js | React | Typescript | Prisma ORM | Tailwind CSS | PostgreSQL",
    summary: "Developed a full-stack RSVP management system for a wedding event, allowing guests to view the general information of the event. Guests can also submit or edit their record for attendance, dietary requirements, and age information.", 
    img: "/projects/wedding-rsvp-website.jpg", 
    desc: [
      "Implemented dynamic, pre-filled forms using React components and server-side actions with data validation and conditional logic for both updates and new entries.",
      "Integrated Prisma ORM with a normalised SQLite database for local development to ensure data integrity, including unique constraints across family and guest records. PostgreSQL is used for production deployment.",      
      "Designed responsive and mobile-first UI with Tailwind CSS and DaisyUI, including the incorporation of Google Maps embeds and accessibility-friendly elements.",
      "Emphasised scalability and maintainability by modularising frontend components and optimising database interactions.",
      " Tracked app health & performance using observability tools in Vercel."
    ],
    link: "https://www.sempurna.dev/family/adam-and-shabrina" 
  },
  { 
    title: "Project 2", 
    tech:"React | Typescript | NextJS",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis sapien, cursus efficitur fermentum et, mattis nec sapien. Nunc ultrices tellus ac tortor bibendum porta.", 
    img: "/projects/project1.jpeg", 
    desc: "This is some epic project that I completed and will need to write down details of key learning points or something i dont know i havent figured out what i want to add in this yet lol",
    link: "https://example.com"
  },
  { 
    title: "Project 3", 
    tech:"React | Typescript | NextJS" ,
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis sapien, cursus efficitur fermentum et, mattis nec sapien. Nunc ultrices tellus ac tortor bibendum porta.", 
    img: "/projects/project1.jpeg", 
    desc: "This is some epic project that I completed and will need to write down details of key learning points or something i dont know i havent figured out what i want to add in this yet lol",
    link: "https://example.com" },
  { 
    title: "Project 4", 
    tech:"React | Typescript | NextJS" ,
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis sapien, cursus efficitur fermentum et, mattis nec sapien. Nunc ultrices tellus ac tortor bibendum porta.", 
    img: "/projects/project1.jpeg", 
    desc: "This is some epic project that I completed and will need to write down details of key learning points or something i dont know i havent figured out what i want to add in this yet lol",
    link: "https://example.com" 
  },
  { 
    title: "Project 5", 
    tech:"React | Typescript | NextJS" ,
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis sapien, cursus efficitur fermentum et, mattis nec sapien. Nunc ultrices tellus ac tortor bibendum porta.", 
    img: "/projects/project1.jpeg", 
    desc: "This is some epic project that I completed and will need to write down details of key learning points or something i dont know i havent figured out what i want to add in this yet lol",
    link: "https://example.com" 
  },
  
];

export default function Home() {

  return (
    <div>
      <section id="hero" className="min-h-screen flex flex-col md:flex-row">
        {/* Text Column */}
        <div className="flex flex-col justify-center item-start w-full md:w-1/2 p-8 bg-gray-600/20">
          <div className={`text-[26pt] font-bold py-3 ${poppins.className}`}>
                Hello, I am Ahmad Adam Shafariansyah (or Shaf for short)
          </div>
          <div className={`pb-5 ${inter.className}`}>
            <p>
              (this is literal bs btw needs to be rewritten to be more appropriate and reflective of me lol)  I’m a software developer with a passion for building intuitive and efficient web applications. I specialise in React, Next.js, and TypeScript, and I enjoy creating projects that solve real-world problems.
            </p>
            <p>
              Outside of coding, I love learning new technologies, reading about software architecture, and exploring creative ways to improve user experiences.
            </p>
            <p>
              This portfolio showcases some of my work and technical skillsets. Feel free to explore my projects and get in touch!
            </p>
          </div>
          <div className="flex gap-6 px-6 py-[3rem]">
            <a 
              id="heroButton"
              href="/resume/resume.pdf"
              download="Adam_Shafariansyah_Resume.pdf"
            >
              Download Resume
            </a>
            <a 
              id="heroButton"
              href="#projects"
              
            >
              View Project Snapshots
            </a>
            <div className="pl-[2rem] gap-3 flex">
              <a 
                id="linkedinButton"
                className="w-[200px] text-center"
                href=""
              >
                LinkedIn
              </a>
              <a 
                id="githubButton"
                className="w-[200px] text-center "
                href=""
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="pt-[4rem] italic">
            Alternatively, you can also reach me via 📩 email: 
            <a href="mailto:adshaf1996@gmail.com" className="pl-[0.5rem] text-blue-400 hover:underline">
              adshaf1996@gmail.com
            </a>
          </div>
        </div>
        {/* Image Column */}
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8">
          <img id="heroImg" src="/placeholderProfile.jpg" alt="placeholder image" width="500px"/>
        </div>
      </section>

      <section id="projects" className="min-h-screen py-[5rem] px-6 bg-gray-50">
        <div className={`text-4xl md:text-5xl font-bold mb-12 text-center ${poppins.className}`}>Projects Snapshot</div>
        <h2 className={`text-[15pt] text-center mb-8 ${inter.className}`} >Please click on a project card for further details</h2>
        {/* Client-side grid with modal */}
        <ProjectsGridClient projects={projects} />
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


// <section id="about" className="min-h-screen py-24 px-6 bg-gray-100 flex flex-col items-center justify-center">
//         <h2 className={`text-4xl md:text-5xl font-bold mb-12 text-center ${poppins.className}`}>About Me</h2>
//         {/* About Container */}
//         <div className="w-full max-w-5xl bg-white shadow-lg rounded-2xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-8">
//           {/* Left Column: Text */}
//           <div className="flex-1 flex flex-col gap-6">
//             <h3 className={`text-2xl font-semibold ${poppins.className}`}>Hi, I’m Ahmad Adam Shafariansyah</h3>
            // <p className="text-gray-600">
            //   I’m a software developer with a passion for building intuitive and efficient web applications. I specialize in React, Next.js, and TypeScript, and I enjoy creating projects that solve real-world problems.
            // </p>
            // <p className="text-gray-600">
            //   Outside of coding, I love learning new technologies, reading about software architecture, and exploring creative ways to improve user experiences.
            // </p>
            // <p className="text-gray-600">
            //   This portfolio showcases some of my work and technical skillsets. Feel free to explore my projects and get in touch!
            // </p>
//           </div>
//           {/* Right Column: Image / Illustration */}
//           <div className="flex-1 flex justify-center items-center">
//             <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-full overflow-hidden shadow-lg">
//               <Image
//                 src="/placeholderProfile.jpg" // replace with your image
//                 alt="Profile"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

      // <section id="contact" className="min-h-screen py-24 px-6 bg-gray-50 flex flex-col items-center justify-center">
      //   <h2 className={`text-4xl md:text-5xl font-bold mb-12 text-center ${poppins.className}`}>Contact Me</h2>
      //   {/* Contact Info Card */}
      //   <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-8 flex flex-col items-start gap-6">
      //     <p className="text-gray-600">
      //       I’m always open to discussing new projects, freelance opportunities, or just chatting about tech!
      //     </p>
      //     <p className="text-black">
      //       📩 Email:{" "}
      //       <a href="mailto:adshaf1996@gmail.com" className="text-blue-600 hover:underline">
      //         your.email@example.com
      //       </a>
      //     </p>
      //     <p className="text-black">
      //       📍 Location: Sydney, Australia
      //     </p>
      //     {/* Optional: Social Links */}
      //     <div className="flex gap-4 mt-4">
      //       <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
      //         LinkedIn
      //       </a>
      //       <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-black">
      //         GitHub
      //       </a>
      //     </div>
      //   </div>
      // </section>