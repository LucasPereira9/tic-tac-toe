import React from 'react';
import styles from './newGame.module.css'
import { setLocalStorage } from '@/services/localStorage';
import PrimaryButton from '../primaryButton';
import { IGameProps } from './newGame.structure';

const NewGameData = (props: IGameProps) => {

  const [player1, setPlayer1] = React.useState('');
  const [player2, setPlayer2] = React.useState('');
  const [verticalFrames, setVerticalFrames] = React.useState('4');
  const [horizontalFrames, setHorizontalFrames] = React.useState('4');
  const [isDisabled, setIsDisabled] = React.useState(true);


  const handleClick = () => {
    setLocalStorage('player1', player1 );
    setLocalStorage('player2', player2 );
    setLocalStorage('vertical', verticalFrames );
    setLocalStorage('horizontal', horizontalFrames );
  };
  React.useEffect(() => {
    const hasEmptyField = !player1.trim() || !player2.trim() || !verticalFrames.trim() || !horizontalFrames.trim();
    const isFramesTooSmall = parseInt(verticalFrames) < 4 || parseInt(horizontalFrames) < 4;
    setIsDisabled(hasEmptyField || isFramesTooSmall);
  }, [player1, player2, verticalFrames, horizontalFrames]);

  return (
    <div>
      <div className={styles.content}>
      <label className={styles.label}>
       Player 1
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            type="text"
            value={player1}
            onChange={(e) => setPlayer1(e.target.value)}
          />
          <div className={styles.defaultLine}></div>
          <div className={styles.activeLine}></div>
        </div>
      </label>
      <br />
      <label className={styles.label}>
        Player 2
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            type="text"
            value={player2}
            onChange={(e) => setPlayer2(e.target.value)}
          />
          <div className={styles.defaultLine}></div>
          <div className={styles.activeLine}></div>
        </div>
      </label>
      </div>
      <div className={styles.content}>
      <label className={styles.label}>
       Quadros na Horizontal
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            type="text"
            value={horizontalFrames}
            onChange={(e) => setHorizontalFrames(e.target.value.replace(/[^0-9]/g, ''))}
          />
          <div className={styles.defaultLine}></div>
          <div className={styles.activeLine}></div>
        </div>
      </label>
      <br />
      <label className={styles.label}>
      Quadros na Vertical
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            type="text"
            value={verticalFrames}
            onChange={(e) => setVerticalFrames(e.target.value.replace(/[^0-9]/g, ''))}
          />
          <div className={styles.defaultLine}></div>
          <div className={styles.activeLine}></div>
        </div>
      </label>
      </div>
        <div className={styles.ButtonContainer}>
         <PrimaryButton title='Voltar' onClick={props.goBack} /> 
         <PrimaryButton navigate={true} page={'/playRoom'} title='Jogar' isDisabled={false} onClick={isDisabled ? () => {} : handleClick} />
        </div>
      </div>
  );
};

export default NewGameData;