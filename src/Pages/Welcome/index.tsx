import React from 'react';
import Button from '../../Components/Button';
// Assets
import Logo from '../../Assets/Static/Pages/logo.svg'
// Styles
import welcomeStyles from './styles.module.css';

const Welcome: React.FC = () => {
  return <div id={welcomeStyles.welcomeContainer}>
    <header id={welcomeStyles.logo}>
      <img src={Logo} alt="JN Móiveis Planejados" id={welcomeStyles.logo} />
    </header>
    <main>
      MAIN
    </main>
    <Button />
  </div>;
}

export default Welcome;