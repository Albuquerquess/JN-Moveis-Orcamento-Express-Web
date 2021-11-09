import styled from 'styled-components';

export const FooterContainer = styled.div`
    width: 100vw;
    min-height: 34.4rem;
    
    background: var(--color-light-gray);
    
    display: flex;
    
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    div#description {
        width: 80%;
        
        margin-bottom: 4rem;
        
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        p#footer-description-text {
            text-align: center;
            font-size: 1.2rem;
            letter-spacing: .22px;
        }

        img#footer-description-logo {
            width: 12.5rem;
            margin-bottom: 2rem;
        }

        section#footer-description-social-media-logos {
            width: 50%;
            margin-top: 2rem;

            & > ul {
                width: 100%;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-evenly;

                & > li.footer-description-social-media-logos-icon {
                    width: 2.7rem;
                }
            }
        }
        
    }

    div#copy {
        width: 100%;
        height: 18rem;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        background: var(--color-gray);
        text-align: center;

        section#copy-wrapper {
            margin-top: 1.7rem;

            ul {
                font-size: 1.2rem;

                li.copy-item {
                    margin-bottom: 1rem;

                    & > span {
                        font-weight: bold;
                    }
                }

            }
        }
    }

    @media screen and (min-width: 991.98px) {
        div#description {
            width: 27.2rem;
            height: 30.5rem;
            justify-content: center;
            margin-bottom: 0;
            
        }
        div#copy {
            height: 15rem;

            section#copy-wrapper {
            width: 100%;
            align-items: center;
            justify-content: center;
            display: flex;
            
            ul {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-evenly;
                width: 80%;
            }
        }
        }

    }
    
`;
