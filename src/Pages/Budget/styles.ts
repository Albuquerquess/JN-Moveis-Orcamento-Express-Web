import styled from 'styled-components';

export const BudgetContainer = styled.div`
    width: 100%;

    div.budget-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        
        margin-bottom: 4rem;

        section.budget {
            width: 100%;
            text-align: left;
        }

        .green-text {
            color: var(--color-light-green)
        }

        section#col-1 {
            h1 {
                font-size: 2.2rem;
                font-weight: bold;
                margin-bottom: 1rem;
            }

            h5 {
                font-size: 1.4rem;
                color: var(--color-dark-gray);
                margin-bottom: 2rem;
            }

            div.budget-box {
                margin-bottom: 2rem;
                font-size: 1.6rem;

                h2 {
                    font-size: 2rem;
                    font-weight: bold;
                }

                p {
                    span.bold-text {
                        font-weight: bold;
                    }
                }

                p.bold-text {
                    font-weight: bold;
                }
            }
        }

        section#col-2 > img {
            width: 100%;
        }

    }

    @media screen and (min-width: 991.98px) {
        width: 59vw;

        & > button {
                width: 35%;
            }
        
        div.budget-wrapper {

            flex-direction: row;
            justify-content: space-between;
            section#col-1 {
                h1 {
                    font-size: 4.8rem;
                    margin-bottom: 2.3rem;
                }

                h5 {
                    font-size: 1.8rem;
                }

                div.budget-box {
                    margin-bottom: 3rem;
                    font-size: 2.4rem;

                    h2 {
                        font-size: 3.2rem;
                        margin-bottom: 2rem;
                    }

                    p {
                        margin-bottom: 1rem;
                    }
                }


                width: 46%;
            }
    
            section#col-2 {
                width: initial;
                 
                img {
                    width: 57rem;
            }
            }
         }
    }
`;
