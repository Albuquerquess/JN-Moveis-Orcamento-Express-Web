import React from 'react';
// Styles
import boxStyles from './box.module.css';
// Types
import { boxProps } from '../../Types/box'

const Box: React.FC<boxProps> = ({title, subtitle, children, twoCols}) => {

  return <div id={boxStyles.boxContainer}>
      <header className={boxStyles.header}>
          <h1 className={boxStyles.title}>{title}</h1>
          <h2 className={boxStyles.subtitle}>{subtitle}</h2>
      </header>
      <main className={boxStyles.main}  style={{
    flexDirection: twoCols ? 'column' : 'column',
    alignItems: 'center'
  }}>
        {children}
      </main>
  </div>;
}

export default Box;