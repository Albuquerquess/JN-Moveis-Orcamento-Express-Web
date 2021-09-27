import React from 'react';
import { useHistory } from 'react-router-dom'
// Components
import { SimpleCard } from '../../Components/Card'
import Button from '../../Components/Button'
// Styles
import personalizationStyles from './personalization.module.css'
// Assets
import HighPrice from '../../Assets/Static/SVGs/Components/Card/highPrice'
import LowPrice from '../../Assets/Static/SVGs/Components/Card/lowPrice'
import MediumPrice from '../../Assets/Static/SVGs/Components/Card/mediumPrice'
// Context
import { ColorAndTamponadeContext } from '../../Context/colorAndTamponade'
// Api
import Api from '../../Services/Api/api'
// Consts
import { personalizeBaseUrl } from '../../Consts/baseURLs'
import routeNames from '../../Consts/routeNames'

const Personalization: React.FC = () => {
  const [colorId, setColorId] = React.useState('')
  const [tamponadeId, setTamponadeId] = React.useState('')
  
  const CeTContext = React.useContext(ColorAndTamponadeContext)
  const history = useHistory()
  

  async function handleSubmit(color_id: string, tamponade_id: string) {
    if (!color_id) alert('Selecione uma cor')
    if (!tamponade_id) alert('Selecione um tamponamento')
    
    if (color_id && tamponade_id) {
      try {
          const response = await Api.post(personalizeBaseUrl.saveColorAndTamponade, {color_id, tamponade_id})
        if (response.status === 204) {
          CeTContext.setColorAndTamponadeId({colorId: color_id, tamponadeId: tamponade_id})
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

  return <div id={personalizationStyles.container}>
    <header id={personalizationStyles.header}>
      <h1 id={personalizationStyles.title}>Cores e tamponamento</h1> 
      <p id={personalizationStyles.subtitle}>Decida os detalhes dos seus móveis.</p>
    </header>
    <main id={personalizationStyles.main} >
      <SimpleCard setCurrentValue={setColorId} variations={colorTypes} title="Cor dos móveis" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna." />
      <SimpleCard setCurrentValue={setTamponadeId} variations={tamponadeTypes} title="Tamponamento" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna." />
    </main>
    <section id={personalizationStyles.button}>
      <Button handleClick={() => handleSubmit(colorId, tamponadeId)} />
    </section>
  </div>;
}

export default Personalization;