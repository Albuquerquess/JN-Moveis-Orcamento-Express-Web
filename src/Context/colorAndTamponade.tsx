import React from 'react';
// Types
import { colorsAndTamponadeIdsSchema } from '../Types/cards'

const contactInitialState = {
  getColorAndTamponadeId: () => {},
  setColorAndTamponadeId: (contact: colorsAndTamponadeIdsSchema) => {}
}
export const ColorAndTamponadeContext  = React.createContext(contactInitialState)

export const ColorAndTamponadeProvider: React.FC = ({children}) => {
  const [colorId, setColorId] = React.useState('')
  const [tamponadeId, setTamponadeId] = React.useState('')

  function getColorAndTamponadeId() {
    return {colorId, tamponadeId};
  }

  function setColorAndTamponadeId({colorId, tamponadeId}: colorsAndTamponadeIdsSchema) {
    setColorId(colorId)
    setTamponadeId(tamponadeId)
  }

  return <ColorAndTamponadeContext.Provider value={{getColorAndTamponadeId, setColorAndTamponadeId}}>
    {children}
  </ColorAndTamponadeContext.Provider>;
}