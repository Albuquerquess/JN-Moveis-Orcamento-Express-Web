import React from 'react';
import { useHistory } from 'react-router-dom';
// Assets
import HighPrice from '../../Assets/Static/SVGs/Components/Card/highPrice';
import LowPrice from '../../Assets/Static/SVGs/Components/Card/lowPrice';
import MediumPrice from '../../Assets/Static/SVGs/Components/Card/mediumPrice';
import Button from '../../Components/Button';
// Components
import { SimpleCard } from '../../Components/Card/simpleCard';
// Consts
import { leadBaseUrl } from '../../Consts/baseURLs';
import routeNames from '../../Consts/routeNames';
// Context
import { ColorAndTamponadeContext } from '../../Context/colorAndTamponade';
// Api
import Api from '../../Services/Api/api';
// Styles
import personalizationStyles from './personalization.module.css';

const Personalization: React.FC = () => {
  
  const colorAndTamponadeContext = React.useContext(ColorAndTamponadeContext)
  const furnitureTamponade = colorAndTamponadeContext.furnitureTamponade
  const setFurnitureTamponade = colorAndTamponadeContext.setFurnitureTamponade
  const furnitureColor = colorAndTamponadeContext.furnitureColor
  const setFurnitureColor = colorAndTamponadeContext.setFurnitureColor
  const history = useHistory()
  
  async function handleClick() {
    if (!furnitureColor) alert('Selecione uma cor')
    if (!furnitureTamponade) alert('Selecione um tamponamento')
    
    if (  furnitureColor && furnitureTamponade) {
      try {
          const response = await Api.post(leadBaseUrl.saveColorAndTamponade, {color_id: furnitureColor, tamponade_id: furnitureTamponade})
        if (response.status === 204) {
          return history.push(routeNames.FURNITURES)
        }
        
      } catch (error) {
        alert('Ocorreu um erro ao cadastrar as configurações de cor e tamponamento. Por favor, tente novamente')
      }
    }
  }
  
  const colorTypes = [
    { value: '1', label: <div className="select-icon-wrapper"><HighPrice /> Laca</div> },
    { value: '2', label: <div className="select-icon-wrapper"><MediumPrice /> Cor/Madeirado</div> },
    { value: '3', label: <div className="select-icon-wrapper"><LowPrice /> Branco</div> },
  ];
  
  const tamponadeTypes = [
    { value: '1', label: <div className="select-icon-wrapper"><HighPrice /> Laca</div> },
    { value: '2', label: <div className="select-icon-wrapper"><MediumPrice /> Cor/Madeirado</div> },
    { value: '3', label: <div className="select-icon-wrapper"><LowPrice /> Sem tamponamento</div> },
  ];

  const defaultColorType = () => {
    const [defaultValue] = colorTypes.filter((color) => String(color.value) === String(furnitureColor)); 
    
    return defaultValue
  }
  const defaultTamponadeType = () => {
    const [defaultValue] = tamponadeTypes.filter((tamponade) => String(tamponade.value) === String(furnitureTamponade));
      
    return defaultValue
  }

  return <div id={personalizationStyles.container}>
    <header id={personalizationStyles.header}>
      <h1 id={personalizationStyles.title}>Cores e tamponamento</h1> 
      <p id={personalizationStyles.subtitle}>Decida os detalhes dos seus móveis.</p>
    </header>
    <main id={personalizationStyles.main} >
      <SimpleCard defaultValue={defaultColorType()} setCurrentValue={setFurnitureColor} variations={colorTypes} title="Cor dos móveis" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna." />
      <SimpleCard defaultValue={defaultTamponadeType()} setCurrentValue={setFurnitureTamponade} variations={tamponadeTypes} title="Tamponamento" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna." />
    </main>
    <section id={personalizationStyles.button}>
      <Button handleClick={handleClick} />
    </section>
  </div>;
}

export default Personalization;