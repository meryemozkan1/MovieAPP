"use client";

import { ThemeProvider } from "next-themes";

const Providers = ({ children }) => {
  return (
    <ThemeProvider defaultTheme="system" enableSystem={true}>
      {children}
    </ThemeProvider>
  );
};

export default Providers;
