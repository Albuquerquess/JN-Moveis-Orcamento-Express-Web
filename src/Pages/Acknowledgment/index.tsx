import React from 'react';
import ConfirmedIcon from '../../Assets/Static/SVGs/Acknowledgment/confirmed.svg';
import Button from '../../Components/Button';
import routeNames from '../../Consts/routeNames';
import scrollToTop from '../../Utils/scrollToTop';
import { AcknowledgmentContainer } from './styles';


const Acknowledgment: React.FC = () => {
  React.useEffect(() => {
    scrollToTop()
  }, [])

  return <AcknowledgmentContainer>
    <h1>Muito obrigado por chegar até aqui!</h1>
    <span>Logo entraremos em contato.</span>
    <img src={ConfirmedIcon} alt="Confirmação" />
    <p>Agora você está a apenas um passo de transformar sua casa em um lar.</p>
    <Button label="Fazer outro ambiente" to={routeNames.HOME}/>
  </AcknowledgmentContainer>;
}

export default Acknowledgment;