import React, { useState } from 'react';
import styles from './primaryButton.module.css';
import { IPrimaryButtonProps } from './primaryButton.structure';

const AnimatedButton = (props: IPrimaryButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const playClickSound = () => {
    const clickSound = new Audio('/assets/soundEffects/buttonPressed.mp3');
    clickSound.play();
  };

  const handleButtonClick = () => {
    playClickSound();
    props.onClick();
  };

  return (
    <div
      className={styles.buttonWrapper}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleButtonClick}
    >
      <span className={styles.buttonText}>{props.title}</span>
      <div className={`${styles.animationLine} ${isHovered ? styles.active : ''}`}></div>
    </div>
  );
};

export default AnimatedButton;