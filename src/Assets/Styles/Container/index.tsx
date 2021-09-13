import React from 'react';

import { ContainerStyle } from './styles';

const Container: React.FC = ({children}) => {
  return <ContainerStyle>
      <main id="container-wrapper">
        {children}
      </main>
  </ContainerStyle>;
}

export default Container;