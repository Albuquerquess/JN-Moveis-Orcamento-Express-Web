import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import buttonStyles from './button.module.css';
// Types
import { buttonProps } from '../../Types/button'

const Button: React.FC<buttonProps> = ({label, to}) => {
  return <button className={buttonStyles.container}>
    <Link to={to ? to : ''} className={buttonStyles.link}>
      {label || 'Continar'}
      </Link>
  </button>;
}
export default Button;