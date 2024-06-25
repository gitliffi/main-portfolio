// src/styles/GlobalStyles.js or src/styles/GlobalStyles.tsx
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        line-height: 1.5;
        font-weight: 400;
        color-scheme: light dark;
        color: rgba(255, 255, 255, 0.87);
        background-color: #242424;
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    a {
        font-weight: 500;
        color: white;
        text-decoration: inherit;
    }
    a:hover {
        text-decoration: underline;
    }

    body {
        margin: 0;
        place-items: center;
    }

    h1 {
        font-size: 3.2em;
        line-height: 1.1;
    }

    button {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        background-color: #1a1a1a;
        cursor: pointer;
        transition: border-color 0.25s;
    }
    button:hover {
        border-color: #646cff;
    }
    button:focus,
    button:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
    }

    @media (prefers-color-scheme: light) {
        :root {
            color: black;
            background-color: #ffffff;
        }
        a:hover {
            color: black;
        }
        button {
            background-color: #f9f9f9;
        }
    }

    @import url('https://rsms.me/inter/inter.css');

    body {
        font-family: 'Inter', sans-serif;
    }
`;

export default GlobalStyles;
