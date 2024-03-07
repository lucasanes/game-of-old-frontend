import { darkTheme, styled } from "../../stitches.config";

export const Container = styled("div", {
  width: "8rem",
  height: "4rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
  gridArea: "quit",
});

export const Button = styled("button", {
  background: "none",
  border: "none",
  color: darkTheme.colors.hiContrast,
  transition: ".3s",

  "&:hover": {
    opacity: 0.6,
  },
});
