import React from 'react';
// Types
import { cardProps } from '../../Types/cards'
// Styles
import { SimpleCardContainer } from './styles';
// Components
import Select from '../Select'
// Assets
import ButtonIcon from '../../Assets/Static/SVGs/Components/Card/buttonIcon'
import HighPrice from '../../Assets/Static/SVGs/Components/Card/highPrice'
import LowPrice from '../../Assets/Static/SVGs/Components/Card/lowPrice'
import MediumPrice from '../../Assets/Static/SVGs/Components/Card/mediumPrice'

export const SimpleCard: React.FC<cardProps> = ({ setCurrentValue, orientation, variations, withButton, withLenghInput, title, description }) => {
    // const [clicked, setClicked] = React.useState(false)

  return <SimpleCardContainer
            backgroundImage={"https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&w=1100&q=80"}
            // clicked={clicked}
            orientation={orientation}
            >

      <main className="card-main">
          <header className="card-header">
              <div className="card-thumb"></div>
          </header>
          <section className="card-wrapper">
            <section className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
            </section>
            <section className="card-footer">
              {/*withLenghInput && <label className="card-input-lengh">
                <p className="card-label">Comprimento</p>
                <input type="text" className="length-of-furniture" placeholder="Ex: 2,2m" />
    </label>*/}
              <section className="card-variations">
                {variations && <Select setValue={setCurrentValue} options={variations} />}
              </section>
              {/*withButton && <button className="card-button" onClick={() => {setClicked(!clicked)}}>
                <div className="button-wrapper">
                  <div className="icon-container">
                      <ButtonIcon className={clicked  ? 'clicked' : ''} active={clicked}/>
                  </div>
                  <p className="button-label">{clicked ? 'Remover' : 'Adicionar'}</p>
                </div>
  </button>*/}
          </section>
          </section>
      </main>
  </SimpleCardContainer>;
}