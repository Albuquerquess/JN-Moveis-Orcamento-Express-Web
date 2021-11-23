import React from 'react';
// Components
import Box from '../../Components/Box';
import Button from '../../Components/Button';
import { FurnitureCard } from '../../Components/Card/furnitureCard';
import PricePreview from '../../Components/PricePreview';
// Consts
import { furnituresBaseUrl } from '../../Consts/baseURLs';
import routeNames from '../../Consts/routeNames';
// Context
import { FurnitureContext } from '../../Context/furnitures';
// Api
import Api from '../../Services/Api/api';
// Types
import { furnituresByRoom } from '../../Types/furnitures';
// Utils
import scrollToTop from '../../Utils/scrollToTop';
// Styles
import furnitureStyles from './furniture.module.css';

const Furnitures: React.FC = () => {
    const [ furnituresByRoom, setFurnituresByRoom ] = React.useState<furnituresByRoom>()
    const furnitureContext =  React.useContext(FurnitureContext)

    const room_tag = furnitureContext.currentRoomTag

    async function getFurnituresByRoom() {
        if (room_tag) {
          console.log(room_tag)
          const response = await Api.get(furnituresBaseUrl.getFurnituresByRoom, {params: { room_tag: room_tag }})        
          return setFurnituresByRoom(response.data)
        } else {
          alert('Parece que você não selecionou nenhum móvel ou o seu link está quebrado. você será redirecionado para uma página de seleção dos móveis.')
        }
    }
    React.useEffect(() => {
        getFurnituresByRoom()
        scrollToTop()
    }, [])


  return <Box title="Móveis: Cozinha" subtitle="Escolha os móveis para a sua cozinha. Digite o comprimento que deseja e clique em adicionar." twoCols >
      {
          furnituresByRoom && furnituresByRoom.furnitures.map(
              (furniture) => {
                return <FurnitureCard
                withButton
                withLengthInput
                variations={furniture.variations}
                title={furniture.furniture_name}
                orientation="horizontal"
                furniture_tag={furniture.furniture_tag}
                roomTag={room_tag}
            />
          }
        )
      }
      <div id={furnitureStyles['furniture-button-container']}>
        <Button to={routeNames.VIDEO}/>
      </div>

      <PricePreview />
  </Box>;
}

export default Furnitures;