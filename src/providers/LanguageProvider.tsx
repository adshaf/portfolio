"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface LanguageContextProps {
    language: "en" | "jp";
    toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children:ReactNode }) {
    const [language, setLanguage] = useState<"en" | "jp">("en");

    const toggleLanguage = () => setLanguage(prev => (prev === "en" ? "jp" : "en"));

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );

}

export function useLanguage() {
    const ctx = useContext(LanguageContext)
    if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
    return ctx;
}