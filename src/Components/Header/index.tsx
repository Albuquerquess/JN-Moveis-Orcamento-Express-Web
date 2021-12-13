import React from 'react';
import { Link } from 'react-router-dom';
// Assets
import Logo from '../../Assets/Static/SVGs/Common/logo.svg'
import routeNames from '../../Consts/routeNames';
// Styles
import headerStyles from './header.module.css'

const Header: React.FC = () => {
  return <Link to={routeNames.HOME}>
    <header id={headerStyles.container}>
    <img src={Logo} alt="JN Móiveis Planejados" id={headerStyles.logo} />
  </header>
  </Link>;
}

export default Header;