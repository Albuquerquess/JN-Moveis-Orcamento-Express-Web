import styled from 'styled-components';
// Types
import { styleCardProps } from '../../Types/cards';

export const CardContainer = styled.div<styleCardProps>`
    width: 100%;
    min-height: 44rem;
    max-height: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    background: var(--color-light-gray);
    border-radius: 1.5rem;

    & > main.card-main {
        width: 100%;
        height: 100%;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        header.card-header {
            width: 100%;
            min-width: 24.6rem;
            height: 24.6rem;

            background: var(--color-gray);

            border-radius: 1.5rem;

            margin-bottom: 2rem;

            div.card-thumb {
                width: 100%;
                height: 24.6rem;
                background: var(--color-gray);
                background-image: url(${props => props.backgroundImage});

                background-repeat: no-repeat;
                background-position: center center;
                background-position-x: center;
                background-position-y: center;
                background-size: cover;

                border-radius: 1.5rem;
            }
        }

        section.card-wrapper {
            width: 100%;
            section.card-body {
                margin-bottom: 1.3rem;

                h2.card-title {
                    font-size: 1.4rem;
                    font-weight: bold;
                    
                    margin: 0;
                    margin-bottom: 1rem;
                }

                p.card-description {
                    height: 5.9rem;
                    max-height: 5.9rem; 
                    
                    margin: 0;

                    font-size: 1.2rem;
                }
            }

            section.card-footer {
                
                p.card-label {
                    font-weight: bold;
                    font-size: 1.4rem;
                    margin: 0;
                    margin-bottom: 1rem;
                }
                label.card-input-length {
                    width: 100%;
                    height: 100%;
                    
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    
                    margin-bottom: 2rem;


                    input.length-of-furniture {
                        width: 100%;
                        height: 3.6rem;
                        
                        background: var(--color-gray);
                        border-radius: .5rem;
                        padding-left: 1rem;
                    }
                }

                section.card-variations {
                    margin-bottom: 2rem;
                }

                button.card-button {
                    width: 100%;
                    height: 3.6rem;
                   
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                   
                    background: var(${props => props.clicked ? '--color-red' : '--color-light-green'});
                   
                    border: none;
                    border-radius: .5rem;

                    margin-top: 1rem;
                    
                    div.label-wrapper {
                        width: 55%;
                        display: flex;
                        align-items: center;
                        justify-content: flex-start;
                        p.button-label {
                            font-size: 2rem;
                            font-weight: bold;
                            color: var(--color-white);
                        }
                    }

                    div.icon-wrapper {
                            width: 40%;
                            display: flex;
                            align-items: center;
                            justify-content: flex-end;

                        div.icon-container {
                            height: 2.6rem;
                            width: auto;
                            transform: rotate(${props => props.clicked ? '135deg' : '0deg'});
                            transition: .4s ease;
    
                            & > svg {
                                width: 100%;
                                height: 100%;
                            }
    
                        }

                    }
                    
                }
            }
        }
    }

    @media screen and (min-width: 991.98px) {
        width: ${props => props.orientation === 'horizontal' ? '100%' : '45.8rem'};
        height: 100%;
        min-height: ${props => props.orientation === 'horizontal' && '56rem'};

        & > main.card-main {
            flex-direction: ${props => props.orientation === 'horizontal' && 'row-reverse'};
            justify-content: ${props => props.orientation === 'horizontal' && 'space-between'};
            padding: ${props => props.orientation === 'horizontal' && '4rem'};
            
            header.card-header {
                width: ${props => props.orientation === 'horizontal' ? '45%' : '41.8rem'};

                height: 41.8rem;

                div.card-thumb {
                    width: ${props => props.orientation === 'horizontal' ? '100%' : '41.8rem' };
                    height: 41.8rem;
                }
            }
            
            section.card-wrapper {
                width: ${props => props.orientation === 'horizontal' && '45%'};
                section.card-body {
                    h2.card-title {
                        font-size: 3.2rem;
                        margin-bottom: 2rem;
                    }
                    p.card-description {
                        font-size: 2rem;
                        margin-bottom: 4.4rem;
                    }
                }
                
                section.card-footer {
                    p.card-label {
                            font-size:2.4rem;
                            margin-bottom: 2rem;
                    }

                    label.card-input-length {

                        input.length-of-furniture {
                            height:  4.9rem;
                            font-size: 2rem;

                        }
                    }

                    section.card-variation > p.card-label {
                        font-size: 2.4rem;

                    }
                    button.card-button {
                        height: 5.8rem;

                        div.icon-wrapper > div.icon-container {
                            height: 3.8rem;
                        }

                        div.label-wrapper > p.button-label {
                            font-size: 3rem;
                        }
                    }
                }
            }
        }
    }
`;
