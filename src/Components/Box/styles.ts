import styled from 'styled-components';

interface IBox {
    twoCols?: boolean;
}

export const BoxContainer = styled.div<IBox>`
    width: 100%;
    height: 100%;
    
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: flex-start;

    header.box-header {
        margin-bottom: 2rem;
        
        & > h1 {
        font-size: 2.2rem;
        font-weight: bold;
        margin-bottom: 1rem;
        }

        & > h2 {
            font-size: 1.2rem;
        }
    }

    main.box-main {

        display: grid;
        justify-content: center;
        align-items: start;
        justify-items: center;
        grid-template-columns: repeat(1, 1fr);
        grid-column-gap: 3rem;
        grid-row-gap: 2rem;


    }

    
@media screen and (min-width: 991.98px) {

    header.box-header {
        text-align: center;
        margin-bottom: 4rem;

        h1 {
            font-size: 4.8rem;
            margin-bottom: 2.3rem;
        }

        h2 {
            font-size: 1.8rem;
            color: var(--color-dark-gray);
        }
    }
    main.box-main {
        grid-template-columns: ${props => props.twoCols ? 'repeat(2, 1fr)' : 'repeat(1, 1fr)'};

    }
}
`;
