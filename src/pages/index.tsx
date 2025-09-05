import { Inter, Poppins } from "next/font/google";

import Image from "next/image";

const inter = Inter({subsets: ['latin']});

const poppins = Poppins({
  subsets: ['latin'],
  weight: "500"
});


interface Project {
  title: string;
  desc: string;
  img?: string;
  link?: string;
}

const projects: Project[] = [
  { title: "Project 1", desc: "React portfolio site", img: "/p1.jpg", link: "https://example.com" },
  { title: "Project 1", desc: "React portfolio site", img: "/p1.jpg", link: "https://example.com" },
  { title: "Project 1", desc: "React portfolio site", img: "/p1.jpg", link: "https://example.com" },
  { title: "Project 1", desc: "React portfolio site", img: "/p1.jpg", link: "https://example.com" },
  { title: "Project 1", desc: "React portfolio site", img: "/p1.jpg", link: "https://example.com" },
  { title: "Project 1", desc: "React portfolio site", img: "/p1.jpg", link: "https://example.com" },
  { title: "Project 1", desc: "React portfolio site", img: "/p1.jpg", link: "https://example.com" },
  
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
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8">
          <img src="/placeholderProfile.jpg" alt="placeholder image" width="500px"/>
        </div>
      </section>


      <section id="projects" className="min-h-screen py-[10rem] px-6 bg-gray-50">
        <div>
          <div className={`${poppins.className} text-[26pt] mb-12 text-center`}>Project List</div>
          {/* Grid for project cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
                  {/* Image */}
                  <div className="relative h-48 w-full">
                    {project.img ? (
                      <Image 
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
                    <h3 className="texxt-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb04">{project.desc}</p>
                  </div>

                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                      >
                      View Project
                    </a>
                  )};

                </div>
              </div>
            ))};
          </div>
        </div>
      </section>

      <section id="other">
        ADDITIONAL INFOs
      </section>

      <section id="contact">
        CONTACT ME
      </section>
    </div>
    );
  };

































    // <div
    //   className={`${geistSans.className} ${geistMono.className} font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
    // >
    //   <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={180}
    //       height={38}
    //       priority
    //     />
    //     <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
    //       <li className="mb-2 tracking-[-.01em]">
    //         Get started by editing{" "}
    //         <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
    //           src/pages/index.tsx
    //         </code>
    //         .
    //       </li>
    //       <li className="tracking-[-.01em]">
    //         Save and see your changes instantly.
    //       </li>
    //     </ol>
    //     <div className="flex gap-4 items-center flex-col sm:flex-row">
    //       <a
    //         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={20}
    //           height={20}
    //         />
    //         Deploy now
    //       </a>
    //       <a
    //         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Read our docs
    //       </a>
    //     </div>
    //   </main>
    //   <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/file.svg"
    //         alt="File icon"
    //         width={16}
    //         height={16}
    //       />
    //       Learn
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/window.svg"
    //         alt="Window icon"
    //         width={16}
    //         height={16}
    //       />
    //       Examples
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/globe.svg"
    //         alt="Globe icon"
    //         width={16}
    //         height={16}
    //       />
    //       Go to nextjs.org →
    //     </a>
    //   </footer>
    // </div>
