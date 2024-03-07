/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { darkTheme, styled } from "../../stitches.config";

export const Header = styled("div", {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  position: "absolute",
  top: 20,
  padding: "0 3rem",

  "@md": {
    display: "grid",
    gridTemplateAreas: `
      "toggleTheme . quit"
      "code code code"
    `,
    gridTemplateColumns: "auto 1fr auto",
    alignItems: "center",
    justifyContent: "center",

    ".code": {
      marginTop: "7rem",
    },
  },

  ".code": {
    gridArea: "code",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
    color: darkTheme.colors.hiContrast,

    h1: {
      fontSize: "2rem",
    },

    button: {
      background: "none",
      border: "none",
      color: darkTheme.colors.hiContrast,
      transition: ".3s",

      "&:hover": {
        opacity: 0.6,
      },
    },
  },
});

export const Container = styled("div", {
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  background: darkTheme.colors.body,
});

export const Game = styled("div", {
  width: "100%",
  justifyContent: "center",
  display: "grid",
  gridTemplateColumns: "repeat(3, 100px)",
  gridGap: "1rem",

  ".square": {
    width: "100px",
    height: "100px",
    border: `1px solid ${darkTheme.colors.hiContrast}`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "24px",
    cursor: "default",
    color: darkTheme.colors.hiContrast,
    borderRadius: ".5rem",
    transition: ".3s",
  },

  ".null:hover": {
    backgroundColor: darkTheme.animations.buttonBackgroundHover,
    cursor: "pointer",
  },
});

export const Status = styled("div", {
  width: "100%",
  textAlign: "center",
  marginTop: "20px",
  fontSize: "20px",
  fontWeight: "bold",
  color: darkTheme.colors.hiContrast,
});

export const Button = styled("button", {
  background: "none",
  border: `1px solid ${darkTheme.colors.hiContrast}`,
  color: darkTheme.colors.hiContrast,
  width: "200px",
  marginTop: "20px",
  padding: "10px",
  fontSize: "16px",
  borderRadius: ".5rem",
  transition: ".3s",
  cursor: "default",

  variants: {
    null: {
      false: {
        "&:hover": {
          background: darkTheme.animations.buttonBackgroundHover,
          cursor: "pointer",
        },
      },
    },
  },
});
