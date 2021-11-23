import React from 'react';
// Assets
import Illustrator from '../../Assets/Static/SVGs/Components/Budget/ilustration.svg'
// Components
import Button from '../../Components/Button';
import { furnituresBaseUrl } from '../../Consts/baseURLs';
// Context
import { FurnitureContext } from '../../Context/furnitures';
import { ColorAndTamponadeContext } from '../../Context/colorAndTamponade';
// Types
import { budgetFurnituresT, budgetFurnituresWithLenghtT, variationsOnBackendT } from '../../Types/furnitures';
// Utils
import scrollToTop from '../../Utils/scrollToTop';
// Styles
import {BudgetContainer} from './styles'
// Services
import Api from '../../Services/Api/api';
import routeNames from '../../Consts/routeNames';

const Budget: React.FC = () => {
    const [furnitures, setFurnitures] = React.useState<budgetFurnituresWithLenghtT[]>()
    const [fullValue, setFullValue] =                                 React.useState(0)
    const furnitureContext =                         React.useContext(FurnitureContext)
    const colorAndTamponadeContext =         React.useContext(ColorAndTamponadeContext)
    const room_tag =                                    furnitureContext.currentRoomTag
    const allFurnitures =                      furnitureContext.currentFurnituresByRoom
    const currentColor =                        colorAndTamponadeContext.furnitureColor
    const setCurrentColor =                  colorAndTamponadeContext.setFurnitureColor
    const currentTamponade =                colorAndTamponadeContext.furnitureTamponade
    const setCurrentTamponade =          colorAndTamponadeContext.setFurnitureTamponade

    
    async function getFurnituresOnBackend() {
        const furnituresOnLocalStorage = furnitureContext.currentFurnituresByRoom
    
        const furnitures_tags = furnituresOnLocalStorage.map(furniture => furniture.furniture_tag)
        if (furnitures_tags.length) {
            const furnituresOnBackend = await Api.get(furnituresBaseUrl.showFurnitures, {
                params: {furnitures_tags}
            })

            const furnituresRef: budgetFurnituresT[] = furnituresOnBackend.data

            if (furnituresOnBackend.status === 200) {

                const furnituresWithLength = furnituresOnLocalStorage.map((furniture) => {
                    const [furnitureMatched] = furnituresRef.filter(furnitureI => furnitureI.furniture_tag === furniture.furniture_tag)
                    return {...furnitureMatched, lengthOfFurniture: furniture['length']}
                })
                setFurnitures(furnituresWithLength)
            }
        }
    
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
        scrollToTop()
      }, [])
    React.useLayoutEffect(() => {
        getFurnituresOnBackend()

    }, [])
    React.useEffect(() => {
    
        async function pricePewiew() {
          const variations = await getVariationData()
          calcFullValue(variations)
        }
        pricePewiew()
      }, [currentColor, currentTamponade, allFurnitures])

  return <BudgetContainer>
        {
            furnitures && (
                <>
                    <div className="budget-wrapper">
                        <section id="col-1" className="budget">
                            <h1>Orçamento</h1>
                            <h5 id="subtitle">Resumo do que foi orçado</h5>
                            <div id="client-infos" className="budget-box">
                                <p><span className="bold-text">Cliente: </span>João Silva dos Santos</p>
                                <p><span className="bold-text">Projetista JN: </span>Cristiane Alcântara</p>
                            </div>
                            <div id="furnitures-info" className="budget-box">
                                <h2>Características gerais dos móveis:</h2>
                                <p><span className="bold-text">Cor: </span>Branco</p>
                                <p><span className="bold-text">Tamponamento: </span>Cor</p>
                                <p><span className="bold-text">Ferragens: </span>Blum e Cermag</p>
                                <p><span className="bold-text">Garantia: </span>Vitalicia</p>
                            </div>
                            <div id="furnitures-specify" className="budget-box">
                                <h2>Itens do orçamento: </h2>
                                {furnitures.map((furniture) => <p key={furniture.id} className="bold-text">{furniture.furniture_name} ({furniture.lengthOfFurniture} m)</p> )}
                                
                            </div>
                            <div id="final-price" className="budget-box">
                                <p className="bold-text">Preço final: <span className="green-text">{fullValue.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span></p>
                            </div>
                        </section>
                        <section id="col-2" className="budget">
                        <img src={Illustrator} alt="JN MÓVEIS PLANEJADOS" />
                        </section>
                    </div>

                    <Button to={routeNames.ACKNOWLEDGMENT}/>
                </>
            )
        }

  </BudgetContainer>;
}

export default Budget;