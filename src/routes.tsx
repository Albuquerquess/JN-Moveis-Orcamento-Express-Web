import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Pages
import Welcome from './Pages/Welcome';
// Styles
import Container from './Assets/Styles/Container'
// Components
import Header from './Components/Header'
import ProgressBar from './Components/ProgressBar';
import Contact from './Pages/Contact';
import Personalization from './Pages/Personalization';
// Provider
import { ContactProvider } from './Context/contact'
import { ColorAndTamponadeProvider } from './Context/colorAndTamponade'
// Consts
import routesNames from './Consts/routeNames'

const Routes: React.FC = () => {
  return <BrowserRouter>
    <Container>
      <Header />
      <ProgressBar percent={30}/>
      <ContactProvider>
        <ColorAndTamponadeProvider>
          <Switch>
            <Route exact path={routesNames.WELCOME} component={Welcome}/>
            <Route exact path={routesNames.CONTACT} component={Contact}/>
            <Route exact path={routesNames.PERSONALIZATION} component={Personalization}/>
          </Switch>
        </ColorAndTamponadeProvider>
      </ContactProvider>
    </Container>
  </BrowserRouter>;
}

export default Routes;