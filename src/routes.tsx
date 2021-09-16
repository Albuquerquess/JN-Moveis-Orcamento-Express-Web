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
// Provider
import { ContactProvider } from './Context/contact'
// Consts
import routesNames from './Consts/routeNames'

const Routes: React.FC = () => {
  return <BrowserRouter>
    <Container>
      <Header />
      <ProgressBar percent={30}/>
      <ContactProvider>
      <Switch>
        <Route exact path={routesNames.WELCOME} component={Welcome}/>
        <Route exact path={routesNames.CONTACT} component={Contact}/>
        <Route exact path={routesNames.PERSONALIZATION} component={Contact}/>
      </Switch>
      </ContactProvider>
    </Container>
  </BrowserRouter>;
}

export default Routes;