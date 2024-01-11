import React, { useState } from 'react';
import styles from './primaryButton.module.css';
import { IPrimaryButtonProps } from './primaryButton.structure';

const AnimatedButton = (props: IPrimaryButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={styles.buttonWrapper}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={props.onClick}
    >
      <span className={styles.buttonText}>{props.title}</span>
      <div className={`${styles.animationLine} ${isHovered ? styles.active : ''}`}></div>
    </div>
  );
};

export default AnimatedButton;