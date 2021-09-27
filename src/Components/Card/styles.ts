import styled from 'styled-components';
// Types
import { styleCardProps } from '../../Types/cards';

export const SimpleCardContainer = styled.div<styleCardProps>`
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
            section.card-body {
                margin-bottom: 1.3rem;

                h2.card-title {
                    font-size: 1.4rem;
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
                label.card-input-lengh {
                    width: 100%;
                    height: 100%;
                    
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    
                    margin-bottom: 1rem;

                    p.card-label {
                        font-weight: bold;
                        font-size: 1.4rem;
                        margin: 0;
                        margin-bottom: 1rem;
                    }

                    input.length-of-furniture {
                        width: 100%;
                        height: 3.6rem;
                        
                        background: var(--color-gray);
                        border-radius: .5rem;
                        padding-left: 1rem;
                    }
                }

                button.card-button {
                    width: 100%;
                    height: 3.6rem;
                   
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-evenly;
                   
                    background: var(${props => props.clicked ? '--color-red' : '--color-light-green'});
                   
                    border: none;
                    border-radius: .5rem;

                    margin-top: 1rem;

                    div.button-wrapper {
                        width: 58%;
                        height: 100%;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: space-between;
                        
                        p.button-label {
                            font-size: 2rem;
                            font-weight: bold;
                            color: var(--color-white);
                        }
    
                        div.icon-container {
                            height: 2.6rem;
                            width: auto;
                            transform: rotate(${props => props.clicked ? '45deg' : '0deg'});
	                        transition: .3s ease;
    
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
        height: 70.8rem;
        width: 45.8rem;

        & > main.card-main {
            header.card-header {
                width: 41.8rem;
                height: 41.8rem;

                div.card-thumb {
                    width: 41.8rem;
                    height: 41.8rem;
                }
            }
            
            section.card-wrapper {
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
            }
        }
    }
`;
