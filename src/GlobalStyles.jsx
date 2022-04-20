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
    --color-600: #f6591c;
    --color-700: #040118;
    --color-800: #b4bad3;
    }

    html, body{
        height: 100%;
    }

    body{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 1rem;
        line-height: 1.5;
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
`;

export default GlobalStyles;
