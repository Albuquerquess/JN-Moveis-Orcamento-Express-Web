import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Styles
import Container from './Assets/Styles/Container'
// Components
import Header from './Components/Header'
import ProgressBar from './Components/ProgressBar';
import Footer from './Components/Footer'
// Provider
import { ContactProvider } from './Context/contact'
import { ColorAndTamponadeProvider } from './Context/colorAndTamponade'
import { FurnitureProvider } from './Context/furnitures'
import { PriceProvider } from './Context/price'
// Consts
import routesNames from './Consts/routeNames'
// Pages
import Welcome from './Pages/Welcome';
import Contact from './Pages/Contact';
import Personalization from './Pages/Personalization';
import Furnitures from './Pages/Furnitures';

const Routes: React.FC = () => {
  return (
  <BrowserRouter>
    <Container>
      <Header />
      <ProgressBar percent={30}/>
      <FurnitureProvider>
        <ContactProvider>
          <ColorAndTamponadeProvider>
            <PriceProvider>
              <Switch>
                <Route exact path={routesNames.WELCOME} component={Welcome}/>
                <Route exact path={routesNames.CONTACT} component={Contact}/>
                <Route exact path={routesNames.PERSONALIZATION} component={Personalization}/>
                <Route exact path={routesNames.FURNITURES} component={Furnitures} />
              </Switch>
            </PriceProvider>
          </ColorAndTamponadeProvider>
        </ContactProvider>
      </FurnitureProvider>
    </Container>
      <Footer />
  </BrowserRouter>);
}

export default Routes;