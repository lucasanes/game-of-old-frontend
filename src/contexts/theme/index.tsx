/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import { darkTheme } from "../../stitches.config.js";
import { ThemeContextProps } from "./types.js";

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState(
    localStorage.getItem("@gameofold:theme") || "dark"
  );

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      <div className={theme == "dark" ? darkTheme : ""}>{children}</div>
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);

  return context;
}

export { ThemeContext, ThemeProvider, useTheme };
