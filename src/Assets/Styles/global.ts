import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    html {
        /* Colors: */
        --color-red: #AC0000;
        --color-light-green: #00D84F;
        --color-dark-green: #00A44C;
        --color-white: #FFFFFF;
        --color-light-gray: #EFEFEF;
        --color-gray: #9B9B9B;
        --color-dark-gray: #202020;
        --color-black: #000000;
    }
    
    body {
        font-size: 62.5%;
        font-family: 'Ubuntu', sans-serif;
        line-height: 1;

        display: flex;
        align-items: center;
        justify-content: center;

       }

       // Reset css
       a {
            color: blue;
            text-decoration: none; /* no underline */
            color: var(--color-white)
        }

`

export default GlobalStyles