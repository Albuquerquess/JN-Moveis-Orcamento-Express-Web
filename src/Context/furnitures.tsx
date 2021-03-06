import React from 'react';
import usePersistedState from '../Hooks/usePersistentSate';
// Types
import {
    FurnitureOnLocalStorageT,
    getFurnitureT, removeFurnitureOnLocalStorageT, RoomNameT, RoomTagT
} from '../Types/furnitures';


interface furnitureInitialValues {
    setNewFurniture(furniture: FurnitureOnLocalStorageT): void,
    getFurniture(furniture: getFurnitureT): FurnitureOnLocalStorageT,
    removeFurnitureFromLocalStorage(removeFurniture: removeFurnitureOnLocalStorageT): void
    currentRoomTag: string,
    currentRoomName: string
    setRoomTag(roomTag: RoomTagT): void,
    setRoomName(roomName: RoomNameT): void,
    currentFurnituresByRoom: FurnitureOnLocalStorageT[],
    removeAllFurnituresFromLocalStorage(): void
}

export const FurnitureContext = React.createContext({} as furnitureInitialValues)

export const FurnitureProvider: React.FC = ({
    children
}) => {
    const [currentRoomTag, setcurrentRoomTag] = usePersistedState('room-tag', null)
    const [currentRoomName, setCurrentRoomName] = usePersistedState('room-name', null)
    const [currentFurnituresByRoom, setcurrentFurnituresByRoom] = usePersistedState(currentRoomTag, null)

    function setRoomTag({
        room_tag
    }: RoomTagT) {
        setcurrentRoomTag(room_tag)
    }
    
    function setRoomName({
        room_name
    }: RoomNameT) {
        setcurrentRoomTag(room_name)
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
                alert('O m??vel j?? est?? adicionado. Por favor, remova-o e fa??a as altera????es necess??rias.')

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
                alert('Este m??vel n??o foi adicionado!')
            }


        } else {
            alert('N??o existem m??veis relacionados a este c??modo.')
        }
    }
    
    function removeAllFurnituresFromLocalStorage() {
        return setcurrentFurnituresByRoom(null)
    }

    return <FurnitureContext.Provider value = {
            {
                setRoomTag,
                currentRoomTag,
                getFurniture,
                currentFurnituresByRoom,
                setNewFurniture,
                removeFurnitureFromLocalStorage,
                currentRoomName,
                setRoomName,
                removeAllFurnituresFromLocalStorage
            }
        }> {
            children
        } 
        </FurnitureContext.Provider>
}