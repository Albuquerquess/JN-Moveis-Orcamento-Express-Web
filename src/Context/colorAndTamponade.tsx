import React, { Dispatch, SetStateAction } from 'react';
import usePersistedState from '../Hooks/usePersistentSate';
// Types
import { colorsAndTamponadeIdsSchema } from '../Types/cards'

interface contactInitialState {
  getColorAndTamponadeId(): {color: string, tamponade: string} | null,
  furnitureColor: string,
  setFurnitureColor: Dispatch<SetStateAction<string>>,
  furnitureTamponade: string,
  setFurnitureTamponade: Dispatch<SetStateAction<string>>
  
}
export const ColorAndTamponadeContext  = React.createContext({} as contactInitialState)

export const ColorAndTamponadeProvider: React.FC = ({children}) => {
  const [furnitureColor, setFurnitureColor] = usePersistedState('furniture-color', null)
  const [furnitureTamponade, setFurnitureTamponade] = usePersistedState('furniture-tamponade', null)

  function getColorAndTamponadeId() {

    if (furnitureColor && furnitureTamponade) {
      return {color: furnitureTamponade, tamponade: furnitureColor}
    }else {
      return null
    }
  }

  return <ColorAndTamponadeContext.Provider value={{getColorAndTamponadeId, furnitureColor, furnitureTamponade, setFurnitureColor, setFurnitureTamponade}}>
    {children}
  </ColorAndTamponadeContext.Provider>;
}