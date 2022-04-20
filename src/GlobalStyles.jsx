import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,*::before,*::after{
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html{
        scroll-behavior: smooth;
        font-size: 100%;
        box-sizing: border-box;
    }

    :root {
    --color-100: #ffffff;
    --color-110: #fbfbfb;
    --color-120: #dceeff;
    --color-200: #3898ff;
    --color-300: #081ae1;
    --color-400: #191155;
    --color-500: #415acb;
    --color-550: rgb(82, 109, 226);
    --color-600: #f6591c;
    --color-700: #040118;
    --color-800: #b4bad3;
    --fs--2: clamp(0.69rem, calc(0.59rem + 0.52vw), 0.96rem);
    --fs--1: clamp(0.78rem, calc(0.61rem + 0.82vw), 1.20rem);
    --fs-0: clamp(0.88rem, calc(0.63rem + 1.22vw), 1.50rem);
    --fs-1: clamp(0.98rem, calc(0.64rem + 1.74vw), 1.88rem);
    --fs-2: clamp(1.11rem, calc(0.63rem + 2.41vw), 2.34rem);
    --fs-3: clamp(1.25rem, calc(0.59rem + 3.29vw), 2.93rem);
    --fs-4: clamp(1.40rem, calc(0.52rem + 4.41vw), 3.66rem);
    --fs-5: clamp(1.58rem, calc(0.41rem + 5.85vw), 4.58rem);
    }

    html, body{
        height: 100%;
    }

    body{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: var(--fs--2);
        line-height: 1.5;
        background-color: var(--color-700);
        color: var(--color-110);
    }

    h1,h2,h3,h4,h5,h6{
        font-weight: normal;
        line-height: 1.2;
    }

    input, button{
        border: none;
        outline: none;
        font: inherit;
    }

    img{
        max-width: 100%;
        display: block;
    }

    h1{
        font-size: var(--fs-5);
    }

    h2{
        font-size: var(--fs-3);
    }

    .section-h{ 
        margin: 4rem 0 2rem 0;
    }

    .fs-md{
        font-size: var(--fs-0);
    }
`;

export default GlobalStyles;
