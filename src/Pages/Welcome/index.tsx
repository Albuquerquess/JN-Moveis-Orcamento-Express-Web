import React from 'react';
// Components
import Button from '../../Components/Button';
//Consts
import routesNames from '../../Consts/routeNames'
// Styles
import welcomeStyles from './welcome.module.css';

const Welcome: React.FC = () => {
  return <div id={welcomeStyles.welcomeContainer}>
    <main>
      MAIN
    </main>
    <Button to={routesNames.CONTACT}/>
  </div>;
}

export default Welcome;