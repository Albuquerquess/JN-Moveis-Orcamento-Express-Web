declare module 'react-step-progress-bar' {
    interface ProgressBarProps {
      percent?: number;
      filledBackground?: any;
      height?: string | number;
      stepPositions?: number;
    }
  
    interface StepProps {
      transition?: any;
      position?: any;
    }
    class ProgressBar extends React.Component<ProgressBarProps, any> {}
    class Step extends React.Component<StepProps, any> {}
  }  