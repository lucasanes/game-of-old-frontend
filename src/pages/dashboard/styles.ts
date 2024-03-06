import { darkTheme, styled } from '../../stitches.config';

export const Container = styled('div', {

  width: '100%',
  height: '100%',
  background: darkTheme.colors.body,
  display: 'flex',
  overflow: 'hidden',
  position: 'fixed'

});

export const Body = styled('div', {

  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '2rem',

});

export const Button = styled('button', {
  background: 'none',
  border: `1px solid ${darkTheme.colors.midContrast}`,
  color: darkTheme.colors.midContrast,
  fontSize: '1.8rem',
  borderRadius: '.5rem',
  padding: '.7rem 2rem',

  '&:hover': {
    background: darkTheme.animations.buttonBackgroundHover
  }
})