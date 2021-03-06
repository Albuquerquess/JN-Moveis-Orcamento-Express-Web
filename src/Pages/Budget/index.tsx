import React from 'react';
import DownloadIcon from '../../Assets/Static/SVGs/Budget/download';
// Assets
import Illustrator from '../../Assets/Static/SVGs/Components/Budget/ilustration.svg';
// Components
import Button from '../../Components/Button';
import { furnituresBaseUrl } from '../../Consts/baseURLs';
import routeNames from '../../Consts/routeNames';
import { ColorAndTamponadeContext } from '../../Context/colorAndTamponade';
import { ContactContext } from '../../Context/contact';
// Context
import { FurnitureContext } from '../../Context/furnitures';
import generateBudgetInPDF from '../../Reports/Buget/makeBudget';
// Services
import Api from '../../Services/Api/api';
// Types
import { budgetFurnituresT, budgetFurnituresWithLenghtT, variationsOnBackendT } from '../../Types/furnitures';
import camelize from '../../Utils/camelize';
import history from '../../Utils/history';
// Utils
import scrollToTop from '../../Utils/scrollToTop';
// Styles
import { BudgetContainer } from './styles';

const Budget: React.FC = () => {
    const [fullValue, setFullValue] = React.useState(0)
    const contactContext = React.useContext(ContactContext)
    const furnitureContext = React.useContext(FurnitureContext)
    const colorAndTamponadeContext = React.useContext(ColorAndTamponadeContext)
    const [furnitures, setFurnitures] = React.useState<budgetFurnituresWithLenghtT[]>()

    const room_tag = furnitureContext.currentRoomTag
    const currentColor = colorAndTamponadeContext.furnitureColor
    const allFurnitures = furnitureContext.currentFurnituresByRoom
    const currentTamponade = colorAndTamponadeContext.furnitureTamponade
    const clientName = contactContext.fullname
    const budgetCreationDate = new Date().toLocaleString()
    
    async function getFurnituresOnBackend() {
        const furnituresOnLocalStorage = furnitureContext.currentFurnituresByRoom
    
        const furniture_tags = 
            furnituresOnLocalStorage
                && 
            furnituresOnLocalStorage.map(furniture => furniture.furniture_tag)

        if (furniture_tags && furniture_tags.length) {
            const furnituresOnBackend = await Api.get(furnituresBaseUrl.showFurnitures, {
                params: {furniture_tags}
            })

            const furnituresRef: budgetFurnituresT[] = furnituresOnBackend.data

            if (furnituresOnBackend.status === 200) {

                const furnituresWithLength = furnituresOnLocalStorage.map((furniture) => {
                    const [furnitureMatched] = furnituresRef.filter(furnitureI => furnitureI.furniture_tag === furniture.furniture_tag)
                    return {...furnitureMatched, lengthOfFurniture: furniture['length']}
                })
                setFurnitures(furnituresWithLength)
            }
        } else {
            history.push(routeNames.HOME)
        }
    
    }

    async function getVariationData() {

        if (typeof room_tag === 'string') {
          
    
          if (allFurnitures && allFurnitures.length > 0) {
            const allFurnitureVariationsId = allFurnitures.map(furniture => furniture.variation_id)
            if (allFurnitureVariationsId) {
              const response = await Api.get(furnituresBaseUrl.showVariations, {
                params: {
                  variation_ids: allFurnitureVariationsId
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
                            <h1>Or??amento</h1>
                            <h5 id="subtitle">Resumo do que foi or??ado</h5>
                            <div id="client-infos" className="budget-box">
                                <p><span className="bold-text">Cliente: </span>{clientName ? camelize(clientName) : 'Cliente JN'}</p>
                                <p><span className="bold-text">Projetista JN: </span>Cristiane Alc??ntara</p>
                            </div>
                            <div id="furnitures-info" className="budget-box">
                                <h2>Caracter??sticas gerais dos m??veis:</h2>
                                <p><span className="bold-text">Cor: </span>Branco</p>
                                <p><span className="bold-text">Tamponamento: </span>Cor</p>
                                <p><span className="bold-text">Ferragens: </span>Blum e Cermag</p>
                                <p><span className="bold-text">Garantia: </span>Vitalicia</p>
                            </div>
                            <div id="furnitures-specify" className="budget-box">
                                <h2>Itens do or??amento: </h2>
                                {furnitures.map((furniture) => <p key={furniture.id} className="bold-text">{furniture.furniture_name} ({furniture.lengthOfFurniture} m)</p> )}
                                
                            </div>
                            <div id="final-price" className="budget-box">
                                <p className="bold-text">Pre??o final: <span className="green-text">{fullValue.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span></p>
                            </div>
                        </section>
                        <section id="col-2" className="budget">
                        <img src={Illustrator} alt="JN M??VEIS PLANEJADOS" />
                        </section>
                    </div>
                    <div id="button-container">
                        <Button label="Continuar" to={routeNames.ACKNOWLEDGMENT}/>
                        <button id="budget-download" onClick={() => generateBudgetInPDF({
                            furnitures: allFurnitures,
                            clientName,
                            color: currentColor,
                            tamponade: currentTamponade,
                            date: budgetCreationDate
                        })}>
                            <DownloadIcon />
                            <span>Baixar or??amento</span>
                        </button>
                    </div>
                </>
            )
        }

  </BudgetContainer>;
}

export default Budget;