import React from 'react';
// Assets
import Logo from '../../Assets/Static/SVGs/Common/logo.svg'
import Instagram from '../../Assets/Static/SVGs/Footer/instagram.svg'
import Facebook from '../../Assets/Static/SVGs/Footer/facebook.svg'
import Youtube from '../../Assets/Static/SVGs/Footer/youtube.svg'
// Styles
import { FooterContainer } from './styles';

const Footer: React.FC = () => {
  return <FooterContainer>
    <div id="description">
      <img id="footer-description-logo" src={Logo} alt="JN Móveis Planejados" />
      <p id="footer-description-text">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      </p>
      <section id="footer-description-social-media-logos">
        <ul>
          <li className="footer-description-social-media-logos-icon"><a href="https://www.instagram.com/jn.moveisplanejados/" target="_blank"><img src={Instagram} alt="Instagram" /></a></li>
          <li className="footer-description-social-media-logos-icon"><a href="https://www.facebook.com/jnmoveisplanejados.rn/" target="_blank"><img src={Facebook} alt="Facebook" /></a></li>
          <li className="footer-description-social-media-logos-icon"><a href="https://www.instagram.com/jn.moveisplanejados/" target="_blank"><img src={Youtube} alt="Youtube" /></a></li>
        </ul>
      </section>
    </div>
    <div id="copy">
      <section id="copy-wrapper">
        <ul>
          <li className="copy-item"><span>2021 Copyright:</span> JN Móveis.</li>
          <li className="copy-item"><span>Projeto:</span> Jonathan Weslley.</li>
          <li className="copy-item"><span>Desenvolvimento:</span> Gustavo Albuquerque.</li>
        </ul>
      </section>
    </div>
  </FooterContainer>;
}

export default Footer;