import styled from 'styled-components';

export const ContainerStyle = styled.div`
    width: 100vw;
    min-height: 100vh;

    display: flex;
    align-items: flex-start;
    justify-content: center;

  main#container-wrapper {
    width: 90%;
    max-width: var(--max-size-container);
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    margin-top: 2rem;
  }
`;
