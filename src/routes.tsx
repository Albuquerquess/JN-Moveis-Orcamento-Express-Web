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
import routeNames from './Consts/routeNames'
// Pages
import Welcome from './Pages/Welcome';
import Contact from './Pages/Contact';
import Personalization from './Pages/Personalization';
import Furnitures from './Pages/Furnitures';
import Video from './Pages/Video';
import Budget from './Pages/Budget';
import Acknowledgment from './Pages/Acknowledgment';
import Home from './Pages/Home';

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
                <Route exact path={routeNames.WELCOME} component={Welcome}/>
                <Route exact path={routeNames.CONTACT} component={Contact}/>
                <Route exact path={routeNames.PERSONALIZATION} component={Personalization}/>
                <Route exact path={routeNames.FURNITURES} component={Furnitures} />
                <Route exact path={routeNames.VIDEO} component={Video} />
                <Route exact path={routeNames.BUDGET} component={Budget} />
                <Route exact path={routeNames.ACKNOWLEDGMENT} component={Acknowledgment} />
                <Route exact path={[routeNames.HOME, routeNames.DEFAULT]} component={Home} />
                <Route exact path={routeNames.ANY} component={() => <h1>Essa página não existe</h1>} />
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