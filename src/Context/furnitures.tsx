import React from 'react';
import usePersistedState from '../Hooks/usePersistentSate';
// Types
import {
    FurnitureOnLocalStorageT,
    getFurnitureT, removeFurnitureOnLocalStorageT, RoomTagT
} from '../Types/furnitures';


interface furnitureInitialValues {
    setNewFurniture(furniture: FurnitureOnLocalStorageT): void,
    getFurniture(furniture: getFurnitureT): FurnitureOnLocalStorageT,
    removeFurnitureFromLocalStorage(removeFurniture: removeFurnitureOnLocalStorageT): void
    currentRoomTag: string,
    setRoomTag(roomTag: RoomTagT): void,
    currentFurnituresByRoom: FurnitureOnLocalStorageT[],
}

export const FurnitureContext = React.createContext({} as furnitureInitialValues)

export const FurnitureProvider: React.FC = ({
    children
}) => {
    const roomTag = getRoomTag()
    const [currentRoomTag, setcurrentRoomTag] = usePersistedState('room-tag', null)
    const [currentFurnituresByRoom, setcurrentFurnituresByRoom] = usePersistedState(roomTag, null)

    function getRoomTag() {
        const room_tag = localStorage.getItem('room-tag')
        return room_tag || ''
    }

    function setRoomTag({
        room_tag
    }: RoomTagT) {
        setcurrentRoomTag(room_tag)
    }

    function getFurniture({
        room_tag,
        furniture_tag
    }: getFurnitureT) {
        const furniture = currentFurnituresByRoom?.filter((furniture: any) => furniture.furniture_tag === furniture_tag)[0]
        return furniture
    }

    function setNewFurniture({
        room_tag: roomTag,
        furniture_tag,
        variation_id,
        length
    }: FurnitureOnLocalStorageT) {

        if (currentFurnituresByRoom === null) {
            const furniturePayload = [{
                room_tag: roomTag,
                furniture_tag,
                variation_id,
                length
            }]
            setcurrentFurnituresByRoom(furniturePayload)

        } else if (currentFurnituresByRoom !== null) {
            const furnitureAlreadyAdded = currentFurnituresByRoom.findIndex((furniture: FurnitureOnLocalStorageT) => furniture.furniture_tag === furniture_tag)

            if (furnitureAlreadyAdded === 0) {
                alert('O móvel já está adicionado. Por favor, remova-o e faça as alterações necessárias.')

            } else {

                setcurrentFurnituresByRoom([...currentFurnituresByRoom, {
                    furniture_tag,
                    room_tag: roomTag,
                    variation_id,
                    length
                }])
            }

        }
    }

    function removeFurnitureFromLocalStorage({
        furniture_tag,
        roomTag
    }: removeFurnitureOnLocalStorageT) {
        if (currentFurnituresByRoom) {

            const furnitureAlreadyAdded = currentFurnituresByRoom.findIndex((furniture: FurnitureOnLocalStorageT) => furniture.furniture_tag === furniture_tag)

            if (furnitureAlreadyAdded !== -1) {
                const furnituresByRoomFiltered = currentFurnituresByRoom.filter((furniture: FurnitureOnLocalStorageT) => furniture.furniture_tag !== furniture_tag)

                setcurrentFurnituresByRoom(furnituresByRoomFiltered)

            } else {
                alert('Este móvel não foi adicionado!')
            }


        } else {
            alert('Não existem móveis relacionados a este cômodo.')
        }
    }

    return <FurnitureContext.Provider value = {
            {
                setRoomTag,
                currentRoomTag,
                getFurniture,
                currentFurnituresByRoom,
                setNewFurniture,
                removeFurnitureFromLocalStorage
            }
        }> {
            children
        } 
        </FurnitureContext.Provider>
}