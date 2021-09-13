import React from 'react';
// Assets
import Logo from '../../Assets/Static/Pages/logo.svg'
// Styles
import headerStyles from './header.module.css'

const Header: React.FC = () => {
  return <header id={headerStyles.container}>
  <img src={Logo} alt="JN Móiveis Planejados" id={headerStyles.logo} />
</header>;
}

export default Header;