"use client";

import { usePathname } from "next/navigation";
import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const LanguageContextProvider = ({ children }) => {
  const [isEnglish, setIsEnglish] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsEnglish(!pathname.startsWith("/ar"));
  }, [pathname]);

  return (
    <LanguageContext.Provider value={{ isEnglish }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined)
    console.error("Please use useLanguage within LanguageContextProvider");
  return context;
};
