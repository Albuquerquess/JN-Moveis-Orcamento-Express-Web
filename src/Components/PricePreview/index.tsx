import React from 'react'
import Select from 'react-select'
import HighPrice from '../../Assets/Static/SVGs/Components/Card/highPrice'
import LowPrice from '../../Assets/Static/SVGs/Components/Card/lowPrice'
import MediumPrice from '../../Assets/Static/SVGs/Components/Card/mediumPrice'
// Assets
import RainDrop from '../../Assets/Static/SVGs/Components/PricePreview/rainDrop'
import Close from '../../Assets/Static/SVGs/Components/PricePreview/close'
// Consts
import { furnituresBaseUrl } from '../../Consts/baseURLs'
import { ColorAndTamponadeContext } from '../../Context/colorAndTamponade'
// Context
import { FurnitureContext } from '../../Context/furnitures'
// Services
import Api from '../../Services/Api/api'
import { variationsOnBackendT } from '../../Types/furnitures'
// Styles
import { PricePreviewContainer } from './styles'

const PricePreview: React.FC = () => {
  const colorTypes = [
    { value: '1', label: <div className="select-icon-wrapper" style={{color: '#000'}}><HighPrice /> Laca</div> },
    { value: '2', label: <div className="select-icon-wrapper" style={{color: '#000'}}><MediumPrice /> Cor/Madeirado</div> },
    { value: '3', label: <div className="select-icon-wrapper" style={{color: '#000'}}><LowPrice /> Branco</div> },
  ]
  
  const tamponadeTypes = [
    { value: '1', label: <div className="select-icon-wrapper" style={{color: '#000'}}><HighPrice /> Laca</div> },
    { value: '2', label: <div className="select-icon-wrapper" style={{color: '#000'}}><MediumPrice /> Cor/Madeirado</div> },
    { value: '3', label: <div className="select-icon-wrapper" style={{color: '#000'}}><LowPrice /> Sem tamponamento</div> },
  ]
  
  const customStyles = {
    control: (base: any, state: any) => ({
      ...base,
      background: "#fff",
      color: "black",
      borderRadius: '.5rem',
      boxShadow: state.isFocused ? null : null,
      borderColor: "#fff",
      fontWeight: 'bold',
      fontSize: '14px',
    }),
    menu: (base: any) => ({
      ...base,
      borderRadius: 0,
      marginTop: 0,
      background: "#fff",
      color: "black",
      fontWeight: 'bold',
      fontSize: '14px',
    }),
    menuList: (base: any) => ({
      ...base,
      background: "#fff",
      color: "black",
      padding: 0,
      fontWeight: 'bold',
      fontSize: '14px',
    }),
    placeholder: (base: any) => ({
      ...base,
        background: "#fff",
        color: "black",
        fontWeight: 'bold',
        fontSize: '14px',
      }),
      input: (base: any) => ({
        ...base,
        background: "#fff",
        color: "black",
      })
  }
  
  const colorAndTamponadeContext =   React.useContext(ColorAndTamponadeContext)
  const furnitureContext =                   React.useContext(FurnitureContext)
  const allFurnitures =                furnitureContext.currentFurnituresByRoom
  const currentColor =                  colorAndTamponadeContext.furnitureColor
  const setCurrentColor =            colorAndTamponadeContext.setFurnitureColor
  const currentTamponade =          colorAndTamponadeContext.furnitureTamponade
  const setCurrentTamponade =    colorAndTamponadeContext.setFurnitureTamponade
  const room_tag =                              furnitureContext.currentRoomTag
  
  const [fullValue, setFullValue] =                            React.useState(0)
  const [ clicked, setClicked ] =                          React.useState(false)
  const defaultColorType = () => {
    const [defaultValue] = colorTypes.filter((color) => String(color.value) === String(currentColor))
    
    return defaultValue
  }
  const defaultTamponadeType = () => {
    const [defaultValue] = tamponadeTypes.filter((tamponade) => String(tamponade.value) === String(currentTamponade))
      
    return defaultValue
  }
  
  async function getVariationData() {

    if (typeof room_tag === 'string') {
      

      if (allFurnitures && allFurnitures.length > 0) {
        const allFurnitureVariationsId = allFurnitures.map(furniture => furniture.variation_id)
        if (allFurnitureVariationsId) {
          const response = await Api.get(furnituresBaseUrl.indexVariations, {
            params: {
              variations_id: allFurnitureVariationsId
            }
          })
  
          const variationsOnBackend: variationsOnBackendT[] = response.data   
          return variationsOnBackend
        }else {
          return []
        }
      }
    }
  }

  function calcFullValue(variations: variationsOnBackendT[] | undefined) {

    if (variations) {
      let calcValue = 0
      variations.forEach((variation) => {
        allFurnitures.forEach((furniture) => {
          if (variation.furniture_tag_ref === furniture.furniture_tag) {
            const value = Number(variation.variation_value)
            let additionalByColor = 0
            let additionalByTamponade = 0
  
            switch (currentColor) {
              case '1':
                additionalByColor = variation.percentage_by_laca
                break
              case '2':
                additionalByColor = variation.percentage_by_color
                break
              default:
                additionalByColor = 0
            }
            
            switch (currentTamponade) {
              case '1':
              case '2':
                additionalByTamponade = variation.percentage_by_tamponade
                break
              default:
                additionalByTamponade = 0
            }
  
            calcValue = calcValue + (value + (value * additionalByColor) + (value * additionalByTamponade)) * furniture.length
          
          }
        })
        setFullValue(calcValue)
        })
    }else {
      setFullValue(0)
    }
  }


  React.useEffect(() => {
    
    async function pricePewiew() {
      const variations = await getVariationData()
      calcFullValue(variations)
    }
    pricePewiew()
  }, [currentColor, currentTamponade, allFurnitures])

  return <PricePreviewContainer onClick={() => setClicked(!clicked)} clicked={clicked}>
      <div className="price-preview-wrapper">
        <section className="price-preview-col">
          <div className="price-viewer">
            <p>Preço atual: <span>{fullValue.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span></p>
          </div>
          <div className="color-and-tamponade-fast-configurator">
            <label className="configurator">
              <p className="configurator-label">Cor</p>
              <div className="select-container">
                {
                currentColor ?
                  <Select
                  styles={customStyles} 
                  components={{
                    IndicatorSeparator: () => null,
                    }}
                  className='react-select-container'
                  classNamePrefix="react-select"
                  menuPlacement="top"
                  options={colorTypes}
                  defaultValue={defaultColorType()}
                  onChange={(event) => {
                    if (event) setCurrentColor(String(event.value))
                  }}
                  />
                    :
                  'Carregando informações...'
                  }

              </div>
                  
            </label>
            
            <label className="configurator">
              <p className="configurator-label">Tamponamento</p>
              <div className="select-container">
                { 
                currentTamponade ? 
                  <Select
                  styles={customStyles} 
                  components={{
                    IndicatorSeparator: () => null,
                    }}
                  className='react-select-container'
                  classNamePrefix="react-select"
                  menuPlacement="top"
                  options={tamponadeTypes}
                  defaultValue={defaultTamponadeType()}
                  onChange={(event) => {
                    if (event) setCurrentTamponade(String(event.value))
                  }}                  
                  />
                    :
                  'Carregando informações...'
                  }

              </div>
            </label>
          </div>
        </section>
        <section className="price-preview-col">
          <div id="price-peview-icon">
            <RainDrop />
          </div>
          <div className="price-preview-icon-down">
            <Close />
          </div>
        </section>
      </div>
    </PricePreviewContainer>
}

export default PricePreview