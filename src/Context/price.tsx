import React from 'react';

const priceInitialValues = {
    newMobileSignAdded: () => {},
    currentSelectedFurnitureCount: 0
}

export const PriceContext = React.createContext(priceInitialValues)

export const PriceProvider: React.FC = ({children}) => {
    let currentSelectedFurnitureCount = 0

    function newMobileSignAdded() {
        currentSelectedFurnitureCount+=1
    }



    return <PriceContext.Provider value={{ newMobileSignAdded, currentSelectedFurnitureCount }}>
        {children}
    </PriceContext.Provider>
}