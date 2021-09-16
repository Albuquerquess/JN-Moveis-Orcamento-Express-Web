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

        // breakpoints
        --breakpoints-x-small: 575.98px;
        --breakpoints-small: 767.98px;
        --breakpoints-mediun: 991.98px;
        --breakpoints-large: 1199.98px;
        --breakpoints-x-large: 1399.98px;

        font-size: 62.5%;
    }
    
    body {
        font-family: 'Ubuntu', sans-serif;
        line-height: 1;

        display: flex;
        align-items: center;
        justify-content: center;

        input:focus, textarea:focus, select:focus{
        outline: none;
    }

       }

       // Reset css
       a {
            color: blue;
            text-decoration: none; /* no underline */
            color: var(--color-white)
        }

        ul {
            list-style-type: ;
            margin: 0;
            padding: 0;
        }

`

export default GlobalStyles