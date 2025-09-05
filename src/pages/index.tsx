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
  desc: string;
  img?: string;
  link?: string;
}

const projects: Project[] = [
  { title: "Project 1", tech:"React | Typescript | NextJS" ,desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis sapien, cursus efficitur fermentum et, mattis nec sapien. Nunc ultrices tellus ac tortor bibendum porta.", img: "/projects/project1.jpeg", link: "https://example.com" },
  { title: "Project 1", tech:"React | Typescript | NextJS", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis sapien, cursus efficitur fermentum et, mattis nec sapien. Nunc ultrices tellus ac tortor bibendum porta.", img: "/projects/project1.jpeg", link: "https://example.com" },
  { title: "Project 1", tech:"React | Typescript | NextJS", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis sapien, cursus efficitur fermentum et, mattis nec sapien. Nunc ultrices tellus ac tortor bibendum porta.", img: "/projects/project1.jpeg", link: "https://example.com" },
  { title: "Project 1", tech:"React | Typescript | NextJS", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis sapien, cursus efficitur fermentum et, mattis nec sapien. Nunc ultrices tellus ac tortor bibendum porta.", img: "/projects/project1.jpeg", link: "https://example.com" },
  
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


      <section id="projects" className="min-h-screen py-[10rem] px-6 bg-gray-50">
        <div>
          <div className={`${poppins.className} text-[26pt] mb-12 text-center`}>Project List</div>
          {/* Grid for project cards */}
          <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-white shadow-md hover:shadow-xl transition rounded-[10px]">
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
                <div className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-xl text-blue-500 font-semibold mb-2">{project.title}</h3>
                    <h1 className="text-md text-blue-500 font-semibold mb-2">{project.tech}</h1>
                    <p className="text-black mb-4 min-h-[150px] text-justify">{project.desc}</p>

                    {project.link && (
                      <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                      >
                        View Project
                      </a>
                    )}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="other" className="min-h-screen py-[10rem] px-6 bg-gray-50">
        ADDITIONAL INFOs
      </section>

      <section id="contact" className="min-h-screen py-[10rem] px-6 bg-gray-50">
        <div>
          <div className={`text-[26pt] font-bold ${poppins.className} `}>CONTACT ME</div>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
      </section>
    </div>
    );
  };