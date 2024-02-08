import React, { useState } from 'react';
import styles from './primaryButton.module.css';
import { IPrimaryButtonProps } from './primaryButton.structure';
import Link from 'next/link';

const PrimaryButton = (props: IPrimaryButtonProps) => {
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
    <Link legacyBehavior href={props.navigate ? props.page : ''}>
    <div
      className={styles.buttonWrapper}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleButtonClick}
    >
      <span style={{ color: props.isDisabled ? '#D89c60' : '#001f3d'}} className={styles.buttonText}>{props.title}</span>
      <div className={`${styles.animationLine} ${isHovered ? styles.active : ''}`}></div>
    </div>
    </Link>
  );
};

export default PrimaryButton;