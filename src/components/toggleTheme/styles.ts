import { darkTheme, styled } from "../../stitches.config";

export const Container = styled("div", {
  width: "80px",
  height: "40px",
  zIndex: 1,
  gridArea: "toggleTheme",
});

export const Input = styled("input", {
  width: 0,
  height: 0,
  visibility: "hidden",
  position: "absolute",
});

export const Label = styled("label", {
  width: "80px",
  height: "40px",
  position: "relative",
  display: "block",
  background: darkTheme.colors.body,
  borderRadius: "200px",
  boxShadow:
    "inset 0px 5px 20px rgba(0,0,0,0.4), inset 0px -5px 20px rgba(255,255,255,0.5)",
  cursor: "pointer",
  transition: "0.3s",

  "&:after": {
    content: "",
    width: "30px",
    height: "30px",
    position: "absolute",
    top: "5px",
    left: "5px",
    background: "linear-gradient(180deg,#ffcc89,#d8860b)",
    borderRadius: "180px",
    boxShadow: "0px 5px 10px rgba(0,0,0,0.2)",
    transition: "0.3s",
  },

  "&:active:after": {
    width: "40px",
  },

  svg: {
    position: "absolute",
    zIndex: 10,
  },

  "svg.sun": {
    left: "8px",
    transition: "0.3s",
    top: "8.25px",
  },

  "svg.moon": {
    left: "50px",
    transition: "0.3s",
    top: "10px",
  },

  variants: {
    checked: {
      true: {
        "&:after": {
          left: "75px",
          transform: "translateX(-100%)",
          background: "linear-gradient(180deg,#777,#3a3a3a)",
        },
      },
    },
  },
});
