"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";

const ThemeComp = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const themeMode = theme === "system" ? systemTheme : theme;

  console.log(themeMode, "themeMode");

  if (!mounted) return null; // Sayfa yüklenene kadar ikonları göstermiyoruz

  return (
    <div>
      {mounted &&
        (themeMode === "dark" ? (
          <CiLight
            className="cursor-pointer"
            size={25}
            onClick={() => setTheme("light")}
          />
        ) : (
          <CiDark
            className="cursor-pointer"
            size={25}
            onClick={() => setTheme("dark")}
          />
        ))}
    </div>
  );
};

export default ThemeComp;
