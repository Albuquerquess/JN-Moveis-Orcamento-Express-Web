import styled from 'styled-components';

export const ContainerStyle = styled.div`
    width: 100vw;
    max-width: 1000px;
    height: 100vh;
    max-height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

  main#container-wrapper {
    width: 90%;
    max-width: 90%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    margin-top: 2rem;
  }

  @media screen and (min-width: 575.98px) and (max-width:  1199.98px) {
    & {
      main#container-wrapper {
        width: 80%;
      }
    }
  }
`;
