import React from 'react';
import styles from './newGame.module.css'

const NewGameData = () => {
  const [player1, setPlayer1] = React.useState('');
  const [player2, setPlayer2] = React.useState('');
  const [verticalFrames, setVerticalFrames] = React.useState('4');
  const [horizontalFrames, setHorizontalFrames] = React.useState('4');

  return (
    <div>
      <div className={styles.content}>
      <label className={styles.label}>
        Player 1:
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
        Player 2:
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
       Quadros na Horizontal:
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
      Quadros na Vertical:
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
      <br />
      <button className={styles.button} type="submit">
        Start Game
      </button>
      </div>
  );
};

export default NewGameData;