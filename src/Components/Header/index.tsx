import React from 'react';
// Assets
import Logo from '../../Assets/Static/SVGs/Common/logo.svg'
// Styles
import headerStyles from './header.module.css'

const Header: React.FC = () => {
  return <header id={headerStyles.container}>
  <img src={Logo} alt="JN Móiveis Planejados" id={headerStyles.logo} />
</header>;
}

export default Header;
// Fazer a responsividade para a Home e fazer a comunicação com o Backend para o cadastro dos dados do usuário. Criar também um context para armazenar estes dados