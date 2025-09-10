import ProjectsGridClient from "./projectsGridClient";
import { Inter, Poppins } from "next/font/google";
import LanguageToggle from "./LanguageToggle";
import Image from "next/image";
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

const projects: Project[] = [
  { 
    title: { en: "Wedding RSVP Web App", jp: "結婚式RSVPウェブアプリ" },
    summary: { 
      en: "Developed a full-stack RSVP management system for a wedding event, allowing guests to view general information and submit or edit their attendance.",
      jp: "結婚式のゲスト向けに、出席情報や詳細を確認・編集できるフルスタックRSVP管理システムを開発しました。"
    },
    desc: {
      en: [
        "Implemented dynamic, pre-filled forms using React components and server-side actions with data validation and conditional logic for both updates and new entries.",
        "Integrated Prisma ORM with a normalised SQLite database for local development to ensure data integrity, including unique constraints across family and guest records. PostgreSQL is used for production deployment.",      
        "Designed responsive and mobile-first UI with Tailwind CSS and DaisyUI, including the incorporation of Google Maps embeds and accessibility-friendly elements.",
        "Emphasised scalability and maintainability by modularising frontend components and optimising database interactions.",
        " Tracked app health & performance using observability tools in Vercel."
      ],
      jp: [
        "データ検証付きの動的事前入力フォームを実装。",
        "ローカル開発用にPrisma ORMとSQLiteを統合。",
        "Tailwind CSSとDaisyUIでレスポンシブUIを設計。"
      ]
    },
    tech:"Next.js | React | Typescript | Prisma ORM | Tailwind CSS | PostgreSQL",
    img: "/projects/wedding-rsvp-website.jpg", 
    link: "https://www.sempurna.dev/family/adam-and-shabrina" 
  },
  { 
    title: { en: "Project 2", jp: "プロジェクト２" }, 
    summary: {
      en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis sapien, cursus efficitur fermentum et, mattis nec sapien. Nunc ultrices tellus ac tortor bibendum porta.",
      jp: "日本語の説明なんとかなんとか"
    }, 
    desc: {
      en: [
        "This is some epic project that I completed and will need to write down details of key learning points or something i dont know i havent figured out what i want to add in this yet lol"
      ],
      jp: [
        "日本語の説明なんとかなんとか"
      ]
    },
    tech:"React | Typescript | NextJS",
    img: "/projects/project1.jpeg", 
    link: "https://example.com"
  },
  
  
];

export default function Home() {
  const { language } = useLanguage();

  return (
    <div>
      <div className="flex justify-end items-center p-4 bg-black">
        <div className="flex font-semibold pr-4">
          {translations.hero.languageSelect[language]}
        </div>
        <LanguageToggle />
      </div>
      <section id="hero" className="min-h-screen flex flex-col md:flex-row">
        {/* Text Column */}
        <div className="flex flex-col justify-center item-start w-full md:w-1/2 p-8 bg-gray-600/20">
          <div className={`text-[26pt] font-bold py-3 ${poppins.className}`}>
                {translations.hero.greeting[language]}
          </div>
          <div className={`pb-5 ${inter.className}`}>
            <p>
              {translations.hero.introP1[language]}
            </p>
            <p>
              {translations.hero.introP2[language]}
            </p>
            <p>
              {translations.hero.introP3[language]}
            </p>
          </div>
          <div className="flex gap-6 px-6 py-[3rem]">
            <a 
              id="heroButton"
              href="/resume/resume.pdf"
              download="Adam_Shafariansyah_Resume.pdf"
            >
              {translations.buttons.downloadResume[language]}
            </a>
            <a 
              id="heroButton"
              href="#projects"
              
            >
              {translations.buttons.viewProjects[language]}
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
            {translations.hero.altcontact[language]} 
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
        <div className={`text-4xl md:text-5xl font-bold mb-12 text-center ${poppins.className}`}>{translations.sections.projectsTitle[language]}</div>
        <h2 className={`text-[15pt] text-center mb-8 ${inter.className}`} >{translations.sections.projectsSubtitle[language]}</h2>
        {/* Client-side grid with modal */}
        <ProjectsGridClient projects={projects} />
      </section>
  </div>
)};