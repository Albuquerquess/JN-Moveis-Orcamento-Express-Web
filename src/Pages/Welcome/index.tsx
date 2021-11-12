import React from 'react';
import { useParams } from 'react-router';
// Components
import Button from '../../Components/Button';
//Consts
import routesNames from '../../Consts/routeNames'
// Styles
import welcomeStyles from './welcome.module.css';
// Types
import { roomTagT } from '../../Types/welcome'
import { allRoomsT } from '../../Types/furnitures';
// Context
import { FurnitureContext } from '../../Context/furnitures'
// Service
import Api from '../../Services/Api/api';
// Consts
import { furnituresBaseUrl } from '../../Consts/baseURLs';

const Welcome: React.FC = () => {
  const furnitureContext = React.useContext(FurnitureContext)
  const { room_tag } = useParams<roomTagT>()

  async function addRommTagOnLocalStorage() {
    const response = await Api.get(furnituresBaseUrl.indexRooms)
    const allRooms: allRoomsT[] = response.data
    const roomTags = allRooms.map(room => room.room_tag)
    const validRoomTag = roomTags.findIndex(roomTag => roomTag === room_tag) !== -1
    
    if ( validRoomTag ) {
      furnitureContext.setRoomTag({ room_tag })
    }else {
      alert('Parece que você está usando um link inválido! Você será redirecionado para uma página onde poderá escolher o ambiente do orçamento')
    }

  }

  React.useEffect(() => {
    addRommTagOnLocalStorage()
  }, [])
  
  
  return <div id={welcomeStyles.welcomeContainer}>
    <main>
      MAIN
    </main>
    <Button to={routesNames.CONTACT}/>
  </div>;
}

export default Welcome;