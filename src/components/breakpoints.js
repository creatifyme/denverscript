import { css } from 'styled-components';

// 576px = 36em
// 768px = 48em
// 1024px = 64em
// 1280px = 80em
// 1440px = 90em
// 1920px = 120em

export const breakpoint = {
  sm: (...args) => css`
    @media screen and (min-width: 36em) {
      ${css(...args)}
    }
  `,

  md: (...args) => css`
    @media screen and (min-width: 48em) {
      ${css(...args)}
    }
  `,

  lg: (...args) => css`
    @media screen and (min-width: 64em) {
      ${css(...args)}
    }
  `,

  xl: (...args) => css`
    @media screen and (min-width: 80em) {
      ${css(...args)}
    }
  `,

  xxl: (...args) => css`
    @media screen and (min-width: 90em) {
      ${css(...args)}
    }
  `,
  xxxl: (...args) => css`
    @media screen and (min-width: 120em) {
      ${css(...args)}
    }
  `,
};
