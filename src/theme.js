import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

//  color design tokens
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        gray: {
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414",
        },

        primary: {
          100: "#d0d1d5",
          200: "#a1a4ab",
          300: "#727681",
          400: "#1F2A40",
          500: "#141b2d",
          600: "#101624",
          700: "#0c101b",
          800: "#080b12",
          900: "#040509",
        },

        greenAccent: {
          100: "#d8f5ee",
          200: "#b1ebde",
          300: "#8ae2cd",
          400: "#63d8bd",
          500: "#3cceac",
          600: "#30a58a",
          700: "#247c67",
          800: "#185245",
          900: "#0c2922",
        },

        redAccent: {
          100: "#f8dcdb",
          200: "#f1b9b7",
          300: "#e99592",
          400: "#e2726e",
          500: "#db4f4a",
          600: "#af3f3b",
          700: "#832f2c",
          800: "#58201e",
          900: "#2c100f",
        },

        blueAccent: {
          100: "#e1e2fe",
          200: "#c3c6fd",
          300: "#a4a9fc",
          400: "#868dfb",
          500: "#6870fa",
          600: "#535ac8",
          700: "#3e4396",
          800: "#2a2d64",
          900: "#151632",
        },
      }
    : {
        gray: {
          900: "#e0e0e0",
          800: "#c2c2c2",
          700: "#a3a3a3",
          600: "#858585",
          500: "#666666",
          400: "#525252",
          300: "#3d3d3d",
          200: "#292929",
          100: "#141414",
        },

        primary: {
          900: "#d0d1d5",
          800: "#a1a4ab",
          700: "#727681",
          600: "#1F2A40",
          500: "#141b2d",
          400: "#e1e3e8ff",
          300: "#404145ff",
          200: "#080b12",
          100: "#515e91ff",
        },

        greenAccent: {
          900: "#d8f5ee",
          800: "#b1ebde",
          700: "#8ae2cd",
          600: "#63d8bd",
          500: "#3cceac",
          400: "#30a58a",
          300: "#247c67",
          200: "#185245",
          100: "#0c2922",
        },

        redAccent: {
          900: "#f8dcdb",
          800: "#f1b9b7",
          700: "#e99592",
          600: "#e2726e",
          500: "#db4f4a",
          400: "#af3f3b",
          300: "#832f2c",
          200: "#58201e",
          100: "#2c100f",
        },

        blueAccent: {
          900: "#e1e2fe",
          800: "#c3c6fd",
          700: "#a4a9fc",
          600: "#868dfb",
          500: "#6870fa",
          400: "#535ac8",
          300: "#3e4396",
          200: "#2a2d64",
          100: "#151632",
        },
      }),
});

export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.gray[700],
              main: colors.gray[500],
              light: colors.gray[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.gray[700],
              main: colors.gray[500],
              light: colors.gray[100],
            },
            background: {
              default: "#d1d7ddff",
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans 3", " sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Inter", " sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Inter", " sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Inter", " sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Inter", " sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Inter", " sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Inter", " sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [modeStatus, setModeStatus] = useState("dark");

  const colorMode = useMemo(() => ({
    toggleColorMode: () => {
      setModeStatus((prev) => (prev === "light" ? "dark" : "light"));
    },
  }));

  const theme = useMemo(
    () => createTheme(themeSettings(modeStatus)),
    [modeStatus]
  );

  return [theme, colorMode];
};
