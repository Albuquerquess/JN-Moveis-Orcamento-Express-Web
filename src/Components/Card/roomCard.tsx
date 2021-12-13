import React from 'react';
import { useHistory } from 'react-router-dom';
import routeNames from '../../Consts/routeNames';
import { FurnitureContext } from '../../Context/furnitures';
import { roomCardProps } from '../../Types/cards';
import Button from '../Button';
import { RoomCardContainer } from './styles';

const RoomCard: React.FC<roomCardProps> = ({description, roomTag, roomName}) => {
  const furnitureContext = React.useContext(FurnitureContext)
  const history = useHistory()

  function handleClick() {
    if ( 
      furnitureContext.currentRoomTag 
      && 
      roomTag !== furnitureContext.currentRoomTag) furnitureContext.removeAllFurnituresFromLocalStorage()
    furnitureContext.setRoomTag({room_tag: roomTag})
    return history.push(routeNames.CONTACT)

  }

  return <RoomCardContainer backgroundImage={"https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&w=1100&q=80"}>
    <div className="card-wrapper">
      <section className="card-header">
      </section>
      <section className="card-body">
        <p className="title">{roomName}</p>
        <p className="description">{description}</p>
        <Button label={"Mobilhar "+roomName} handleClick={handleClick}/>

      </section>
    </div>
  </RoomCardContainer>;
}

export default RoomCard;