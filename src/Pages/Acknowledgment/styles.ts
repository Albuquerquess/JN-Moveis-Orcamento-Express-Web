import styled from 'styled-components';

export const AcknowledgmentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-size: 2.4rem;
        font-weight: bold;
        text-align: center;
        margin-bottom: 1rem;
    }

    span {
        font-size: 1.8rem;
        color: var(--color-dark-gray);
        margin-bottom: 4rem;
    }

    img {
        width: 12.8rem;
        height: auto;
        margin-bottom: 4rem;
    }

    p {
        font-size: 1.8rem;
        margin-bottom: 6rem;
        text-align: center;
    }

    @media screen and (min-width: 991.98px) {
        h1 {
            font-size: 5rem;
            margin-bottom: 2rem;

        }
        span {
            font-size: 4rem;
            margin-bottom: 7.7rem;
        }
        img {
            width: 22.6rem;
            margin-bottom: 7.6rem;
        }
        p {
            font-size: 5rem;
            margin-bottom: 7.7rem;
        }
        button {
            height: 6rem;
        }
    }
`;
