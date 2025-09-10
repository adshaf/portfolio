"use client";
import { useLanguage } from "../providers/LanguageProvider";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  
  return (
    <button
        onClick={toggleLanguage}
        className={`relative w-16 h-8 flex items-center rounded-lg p-1 transition-colors ${language === "jp" ? "bg-purple-700" : "bg-blue-700"}`}
    >
        {/* Slider Circle */}
        <span
            className={`w-6 h-6 bg-white rounded-lg shadow-md transform transition-transform duration-300 ${language === "jp" ? "translate-x-0" : "translate-x-8"}`}
        />
        
        {/* Labels */}
        <span className="absolute right-2 text-xs font-bold text-white">JP</span>
        <span className="absolute left-2 text-xs font-bold text-white">EN</span>
    </button>
  );
}

