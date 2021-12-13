import styled from 'styled-components';
// Types
import { pricePreviewProps } from '../../Types/pricePreview'

export const PricePreviewContainer = styled.div<pricePreviewProps>`
    width: 100vw;
    height: ${props => props.clicked ? '22.6rem' : '8rem'};
    position: fixed;
    bottom: 0;
    left: 0;

    background: transparent linear-gradient(264deg, #303030 0%, #404040 100%) 0% 0% no-repeat padding-box;
    opacity: .98;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

    transition: .5s ease;

    display: flex;
    align-items: center;
    justify-content: center;
    
    div.price-preview-wrapper {
        width: 90%;
        height: 90%;
        
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        
        color: var(--color-white);

        margin-top: 2rem;

        section.price-preview-col {
            width: 85%;
            align-self: flex-start;
        }

        section.price-preview-col:first-child {
            margin-bottom: 0;
            

            div.price-viewer {
                width: 100%;
                align-items: ${props => props.clicked ? 'flex-start' : 'center'};
                display: flex;
                font-size: 1.6rem;
                font-weight: bold;
                height: 4rem;

                & > p > span {
                    color: var(--color-light-green);

                }
            }
        }

        section.price-preview-col:last-child {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            transition: height .5s;
            width: 4rem;
            height: ${props => props.clicked ? '19rem' : '4rem'};
            

            background: var(--color-light-green);
            border-radius: .5rem;

            & > div.price-preview-icon-down {

                & > svg {
                    display: ${props => props.clicked ? 'block' : 'none'};
                }
            }
        }

        div.color-and-tamponade-fast-configurator {
            display: flex;
            flex-direction: column;

            opacity: ${props => props.clicked ? '1' : '0'};
            transition: opacity .5s ease;

            label.configurator:first-child {
                margin-bottom: 1.5rem;
            }

            label.configurator {
                width: 100%;
                
                p.configurator-label {
                    font-size: 1.4rem;
                    font-weight: bold;
                    margin-bottom: 1rem;

                // Select
                    div.select-container {
                        width: 100%;
                        margin-top: 1rem;
                        
                        div#black-color {
                            color: var(--color-black);
                        }
                    }   
                }
            }
        }
    }

    @media screen and (min-width:  991.98px){
        height: 10rem;

        margin-bottom: 0;

        div.price-preview-wrapper {
            margin-top: 0;
            align-items: center;
            justify-content: center;

            section.price-preview-col:first-child {
                height: 100%;
                display: flex;
                align-items: center;

                div.price-viewer {
                    width: 50%;
                    font-size: 2.5rem;
                }

                div.color-and-tamponade-fast-configurator {
                    
                    flex-direction: row;
                    justify-content: space-around;
                    
                    opacity: 1;

                    label.configurator {
                        width: max-content;
                        
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        margin-bottom: 0;

                        p.configurator-label {
                            font-size: 2.5rem;
                            
                            margin: 0;
                            margin-right: 2rem;

                        }

                        div.select-container {
                            width: 30rem;
                            height: 5rem;

                            div.react-select__control {
                                height: 5rem;
                            }
                        }
                    }

                    label.configurator:first-child {
                        margin-right: 4rem;
                    }
                }


            }

            section.price-preview-col:last-child {
                display: none;
            }
        }


    }
`;
