import React from 'react';
import Select from 'react-select';
// Types
import { selectCardProps } from '../../Types/cardSelect'
// Styles
import './select.css'

const CardSelect: React.FC<selectCardProps> = ({ options, setValue }) => {

    const customStyles = {
        control: (base: any, state: any) => ({
            ...base,
            background: "#909090",
            color: "white",
            borderRadius: '.5rem',
            boxShadow: state.isFocused ? null : null,
            borderColor: "#909090",
            fontWeight: 'bold',
            fontSize: '14px',
        }),
        menu: (base: any) => ({
            ...base,
            borderRadius: 0,
            marginTop: 0,
            background: "#909090",
            color: "white",
            fontWeight: 'bold',
            fontSize: '14px',
        }),
        menuList: (base: any) => ({
            ...base,
            background: "#909090",
            color: "white",
            padding: 0,
            fontWeight: 'bold',
            fontSize: '14px',
        }),
        placeholder: (base: any) => ({
            ...base,
            background: "#909090",
            color: "white",
            fontWeight: 'bold',
            fontSize: '14px',
        }),
        input: (base: any) => ({
            ...base,
            background: "#909090",
            color: "white",
        })
      };

  return <Select
    className='react-select-container'
    classNamePrefix="react-select"
    styles={customStyles}
    options={options}
    placeholder="Selecione uma opção"
    components={{
        IndicatorSeparator: () => null,
        }}
    onChange={(value) => setValue(value?.value)}
  />;
}

export default CardSelect;