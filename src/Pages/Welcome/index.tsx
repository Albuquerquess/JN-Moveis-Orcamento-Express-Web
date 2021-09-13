import React from 'react';
import Button from '../../Components/Button';

// Styles
import welcomeStyles from './welcome.module.css';

const Welcome: React.FC = () => {
  return <div id={welcomeStyles.welcomeContainer}>
    <main>
      MAIN
    </main>
    <Button to="/contatos"/>
  </div>;
}

export default Welcome;