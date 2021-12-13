import React from 'react';
// Styles
import { BoxContainer } from './styles'
// Types
import { boxProps } from '../../Types/box'

const Box: React.FC<boxProps> = ({title, subtitle, children, twoCols}) => {

  return <BoxContainer twoCols={twoCols}>
      <header className="box-header">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
      </header>
      <main className="box-main">
        {children}
      </main>
  </BoxContainer>;
}

export default Box;