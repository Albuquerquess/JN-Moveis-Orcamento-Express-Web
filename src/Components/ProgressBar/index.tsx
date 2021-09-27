import React from 'react';
import { ProgressBar as PB, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";
// Assets
import budget from '../../Assets/Static/SVGs/ProgressBar/budget.svg'
import budgetGreen from '../../Assets/Static/SVGs/ProgressBar/budget-green.svg'
import contact from '../../Assets/Static/SVGs/ProgressBar/contact.svg'
import contactGreen from '../../Assets/Static/SVGs/ProgressBar/contact-green.svg'
import details from '../../Assets/Static/SVGs/ProgressBar/details.svg'
import detailsGreen from '../../Assets/Static/SVGs/ProgressBar/details-green.svg'
import furnitures from '../../Assets/Static/SVGs/ProgressBar/furnitures.svg'
import furnituresGreen from '../../Assets/Static/SVGs/ProgressBar/furnitures-green.svg'
// Types
import { progressBarProps } from '../../Types/progressBar';
import './PBModify.css';
// Styles
import progressBarStyles from './progressBar.module.css';

const ProgressBar: React.FC<progressBarProps> = ({ percent }) => {
  return <div id={progressBarStyles.pgContainer}>
    <PB percent={percent} filledBackground="#9B9B9B">
    <Step>
    {({ accomplished, index }: any) => (
      <div className={`${progressBarStyles.iconWrapper} indexedStep ${accomplished ? "accomplished" : ""}`}>
        <img src={accomplished ? contactGreen : contact } alt="CONTATO" className={`${progressBarStyles.icon} `} />
        <p className={progressBarStyles.progressBarLabel}>Contato</p>
      </div>
    )}
  </Step>
  <Step>
    {({ accomplished, index }: any) => (
      <div className={`${progressBarStyles.iconWrapper} indexedStep ${accomplished ? "accomplished" : ""}`}>
        <img src={accomplished ? detailsGreen : details } alt="DETALHES" className={progressBarStyles.icon} />
        <p className={progressBarStyles.progressBarLabel}>Detalhes</p>

      </div>
    )}
  </Step>
  <Step>
    {({ accomplished, index }: any) => (
      <div className={`${progressBarStyles.iconWrapper} indexedStep ${accomplished ? "accomplished" : ""}`}>
        <img src={accomplished ? furnituresGreen : furnitures } alt="MÓVEIS" className={progressBarStyles.icon} />
        <p className={progressBarStyles.progressBarLabel}>Móveis</p>

      </div>
    )}
  </Step>
  <Step>
    {({ accomplished, index }: any) => (
      <div className={`${progressBarStyles.iconWrapper} indexedStep ${accomplished ? "accomplished" : ""}`}>
        <img src={accomplished ? budgetGreen : budget } alt="ORÇAMENTOS" className={progressBarStyles.icon} />
        <p className={progressBarStyles.progressBarLabel}>Orçamento</p>

      </div>
    )}
  </Step>
    </PB>
  </div>;
}

export default ProgressBar;