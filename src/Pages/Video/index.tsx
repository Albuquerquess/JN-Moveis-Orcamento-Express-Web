import React from 'react';
import { furnituresBaseUrl } from '../../Consts/baseURLs';
// Context
import { FurnitureContext } from '../../Context/furnitures';
// Service
import Api from '../../Services/Api/api';
// Types
import { allRoomsT } from '../../Types/furnitures';
// Components
import YoutubeEmbed from '../../Components/YoutubeEnbed';
import Button from '../../Components/Button';
// Styles
import './video.css'
import routeNames from '../../Consts/routeNames';

const Video: React.FC = () => {
  const [roomName, setRoomName] = React.useState('')
  const furnitureContext = React.useContext(FurnitureContext);
  const embedId = "NQWwktUcSVk"
  async function getRoomname() {
    const response = await Api.get(furnituresBaseUrl.indexRooms)
    const allRooms: allRoomsT[] = response.data
    const [currentRoomName] = allRooms.filter(room => room.room_tag === furnitureContext.currentRoomTag)
    setRoomName(currentRoomName.room_name)
  }
  React.useLayoutEffect(() => {
    getRoomname()
  }, [])

  return <div id='video-container'>

      <h1>Não perca tempo com diversos orçamentos</h1>
      <p>Veja o vídeo para entender como funciona o método</p>
      <YoutubeEmbed embedId={embedId} />
      <Button to={routeNames.BUDGET} label="Ver orçamento" />
  </div>;
}

export default Video;