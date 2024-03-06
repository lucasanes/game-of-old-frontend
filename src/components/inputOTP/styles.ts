import { darkTheme, styled } from "../../stitches.config";

export const Input = styled("input", {

  fontSize: '1.8rem',
  padding: '0.5rem',
  border: '1px solid #ccc',
  background: 'transparent',
  borderRadius: '50%',
  width: '35px',
  height: '35px',
  textAlign: 'center',
  transition: '.3s all ease-in-out',
  color: darkTheme.colors.hiContrast,
  caretColor: 'transparent',

  '&:focus': {
    outline: 'none',
    borderRadius: '10px',
  }

});

export const Inputs = styled("div", {

  display: 'flex',
  gap: '10px',
  marginBottom: '2rem'

});