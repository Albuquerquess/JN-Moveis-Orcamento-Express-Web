import styled from 'styled-components';

export const ContainerStyle = styled.div`
    width: 100vw;
    height: 100vh;
    min-height: 100%;

    display: flex;
    align-items: center;
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
