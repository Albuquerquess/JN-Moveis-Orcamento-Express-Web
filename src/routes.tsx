import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Pages
import Welcome from './Pages/Welcome';
// Styles
import Container from './Assets/Styles/Container'
// Components
import Header from './Components/Header'

const Routes: React.FC = () => {
  return <BrowserRouter>
    <Container>
      <Header />
      <Switch>
        <Route exact path="/" component={Welcome}/>
      </Switch>
    </Container>
  </BrowserRouter>;
}

export default Routes;