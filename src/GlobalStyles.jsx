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
