import React from 'react';
// Types
import { cardProps } from '../../Types/cards';
// Components
import Select from '../Select';
// Styles
import { CardContainer } from './styles';

export const SimpleCard: React.FC<cardProps> = ({ setCurrentValue, variations, title, description }) => {

  return <CardContainer
            backgroundImage={"https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&w=1100&q=80"}
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

              <section className="card-variations">
                {variations && <Select setValue={ setCurrentValue } options={variations} />}
              </section>

          </section>
          </section>
      </main>
  </CardContainer>;
}
