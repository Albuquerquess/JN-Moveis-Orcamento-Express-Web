import React from 'react';
import Box from '../../Components/Box';
import RoomCard from '../../Components/Card/roomCard';
import { furnituresBaseUrl } from '../../Consts/baseURLs';
import Api from '../../Services/Api/api';
import { HomeContainer } from './styles';
import { allRoomsT } from '../../Types/furnitures';

const Home: React.FC = () => {
  const [rooms, setRooms] = React.useState<allRoomsT[]>();
  async function getRooms() {
    const response = await Api.get(furnituresBaseUrl.indexRooms)
    if (response.status === 200) {
      setRooms(response.data)
    }else {
      alert('Não foi possível buscar os cômodos. Por favor, tente novamente!')
    }
  }
  React.useEffect(() => {
    getRooms()
  }, [])
  return <HomeContainer>
      <Box twoCols={true} title="Orce um ambientes" subtitle="Escolha o ambiente, selecione e personalize os móveis e tenha o seu próprio orçamento.">
        {rooms ? rooms.map((room) => {
          return <RoomCard
          roomName={room.room_name}
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
          roomTag={room.room_tag}
          key={room.id} />
        }): 'Carregando...'}

      </Box>
  </HomeContainer>;
}

export default Home;
