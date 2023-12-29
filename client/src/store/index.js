import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#EFBD48',
  backgroundColor: 'rgba(110,99,110,0.18)',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './threejs.png',
  fullDecal: './threejs.png',
  portfolioIsOpen: false,
  blogIsOpen: false,
  contactMeIsOpen: false,
});

export default state;
