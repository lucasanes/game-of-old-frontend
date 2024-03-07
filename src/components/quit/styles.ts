import { darkTheme, styled } from "../../stitches.config";

export const Container = styled("div", {
  marginTop: "1rem",
});

export const Button = styled("button", {
  background: "none",
  border: "none",
  color: darkTheme.colors.midContrast,
  transition: ".3s",

  "&:hover": {
    color: darkTheme.colors.hiContrast,
  },
});
