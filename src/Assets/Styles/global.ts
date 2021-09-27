import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        /* Colors: */
        --color-red: #AC0000;
        --color-light-green: #00D84F;
        --color-dark-green: #00A44C;
        --color-white: #FFFFFF;
        --color-light-gray: #EFEFEF;
        --color-gray: #D5D5D5;
        --color-dark-gray: #9B9B9B;
        --color-dark-gray-2: #202020;
        --color-black: #000000;

        // breakpoints
        --breakpoints-x-small: 575.98px;
        --breakpoints-small: 767.98px;
        --breakpoints-mediun: 991.98px;
        --breakpoints-large: 1199.98px;
        --breakpoints-x-large: 1399.98px;

        // Container
        --max-size-container: 943px;

        font-size: 62.5%;
    }
    
    body {
        font-family: 'Ubuntu', sans-serif;
        line-height: 1;

        display: flex;
        align-items: center;
        justify-content: center;

        overflow-x: hidden;

        // Reset css
        input:focus, textarea:focus, select:focus {
            outline: none;
        
        }
        
        input, select {
            border: none;
        }

        a {
             color: blue;
             text-decoration: none; /* no underline */
             color: var(--color-white)
         }
    
         ul {
             list-style-type: none;
             margin: 0;
             padding: 0;
         }
    
         section {
             border: none
         }

         // Scrollbar
         /* width */
            ::-webkit-scrollbar {
                width: .5rem;
            }

            /* Track */
            ::-webkit-scrollbar-track {
                background: var(--color-light-gray); 
            }
            
            /* Handle */
            ::-webkit-scrollbar-thumb {
                background: var(--color-light-green); 
            }

            /* Handle on hover */
            ::-webkit-scrollbar-thumb:hover {
                background: var(--color-dark-green); 
            }

       }


`

export default GlobalStyles