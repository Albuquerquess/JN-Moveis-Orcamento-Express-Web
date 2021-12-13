import React from 'react';
// Assets
import ButtonIcon from '../../Assets/Static/SVGs/Components/Card/buttonIcon';
import { leadBaseUrl } from '../../Consts/baseURLs';
// Context
import { FurnitureContext } from '../../Context/furnitures';
import { PriceContext } from '../../Context/price';
import Api from '../../Services/Api/api';
// Types
import { furnitureCardProps, selectVariations } from '../../Types/cards';
// Utils
import variationIcon from '../../Utils/variationIcon';
// Components
import Select from '../Select';
// styles
import { CardContainer } from './styles';

export var FurnitureCard: React.FC<furnitureCardProps> = function ({
  orientation, variations, withButton, withLengthInput, title, roomTag, furniture_tag,
}) {
  const furnitureContext = React.useContext(FurnitureContext);
  const priceContext = React.useContext(PriceContext);
  const variationsRef = variations?.map((variation) => {
    const priceIndex = variationIcon[variation.variation_price_index];
    return {
      label: <div className="select-icon-wrapper">
        {priceIndex()}
        {variation.variation_name}
             </div>,
      value: variation.id.toString(),
    };
  });

  const [variationId, setVariationId] = React.useState('0');
  const [clicked, setClicked] = React.useState(false);
  const [length, setLength] = React.useState(0);
  const [defaultValue, setDefaultValue] = React.useState<selectVariations | null | undefined >(() => {
    const furnitureAlreadyAdded = furnitureContext.getFurniture({ room_tag: roomTag, furniture_tag });

    if (furnitureAlreadyAdded) {
      const [defaultValueSearched] = variationsRef.filter((variation) => variation.value === furnitureAlreadyAdded.variation_id);
      if (defaultValueSearched) {
        return defaultValueSearched;
      }
      return undefined;
    }
  });
  function addFurnitureFromLocalStorage() {
    if (variationId === '0') {
      alert('Clique em "Selecione uma opção" e escolha alguma!');
      return setClicked(false);
    } if (length === 0) {
      alert('Você deve adicionar um comprimeiro para o móvel');
      return setClicked(false);
    }
    try {
      furnitureContext.setNewFurniture({
        room_tag: roomTag, furniture_tag, variation_id: String(variationId), length,
      });
      priceContext.newMobileSignAdded();
      setClicked(true);
    } catch (error) {
      alert('Ocorreu um erro ao adicionar o móvel ao orçamento. Por favor tente novamente!');
      setClicked(false);
    }
  }

  function removeFurnitureFromLocalStorage(): void {
    furnitureContext.removeFurnitureFromLocalStorage({ furniture_tag, roomTag });
    setClicked(false);
  }

  function checkAmountOfVariations(): void {
    if (variations && variations.length === 1) {
      return setVariationId(String(variations[0].id));
    }
  }

  function checkFurnitureAlreadyAdded() {
    const furnitureAlreadyAdded = furnitureContext.getFurniture({ room_tag: roomTag, furniture_tag });

    if (furnitureAlreadyAdded) {
      setClicked(true);
      setLength(furnitureAlreadyAdded.length);
      setVariationId(furnitureAlreadyAdded.variation_id);
      const [defaultValueSearched] = variationsRef.filter((variation) => variation.value === furnitureAlreadyAdded.variation_id);

      if (defaultValueSearched) setDefaultValue(defaultValueSearched);
    } else {
      setClicked(false);
    }
  }

  async function saveFurnitureSelection() {
    // const saved = await Api.get(leadBaseUrl.saveFurniture, {})
  }
  React.useLayoutEffect(() => {
    checkAmountOfVariations();
    checkFurnitureAlreadyAdded();
  }, []);

  return (
    <CardContainer
      backgroundImage="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&w=1100&q=80"
      clicked={clicked}
      orientation={orientation}
    >

      <main className="card-main">
        <header className="card-header">
          <div className="card-thumb" />
        </header>
        <section className="card-wrapper">
          <section className="card-body">
            <h2 className="card-title">{title}</h2>
            <p className="card-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
          </section>
          <section className="card-footer">
            {withLengthInput && (
            <label className="card-input-length">
              <p className="card-label">Comprimento</p>
              <input type="number" className="length-of-furniture" placeholder="Ex: 2,2m" onChange={(e) => setLength(Number(e.target.value))} value={length > 0 ? length : ''} disabled={clicked} />
            </label>
            )}
            <section className="card-variations">
              <p className="card-label">Tipo de portas</p>
              {variations && variations.length > 1 && <Select isDisabled={clicked} defaultValue={defaultValue} setValue={setVariationId} options={variationsRef || []} />}
            </section>
            {
                withButton && (
                <button
                  className="card-button"
                  onClick={() => {
                    if (!clicked) {
                      addFurnitureFromLocalStorage();
                      saveFurnitureSelection();
                    } else if (clicked) {
                      removeFurnitureFromLocalStorage();
                    }
                  }}
                >
                  <div className="icon-wrapper">
                    <div className="icon-container">
                      <ButtonIcon className={clicked ? 'clicked' : ''} active={clicked} />
                    </div>
                  </div>

                  <div className="label-wrapper">
                    <p className="button-label">{clicked ? 'Remover' : 'Adicionar'}</p>
                  </div>
                </button>
                )
                  }
          </section>
        </section>
      </main>
    </CardContainer>
  );
};
