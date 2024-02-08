'use client';

import { getLocalStorage } from "@/services/localStorage";

import styles from './Board.module.css'

export default function Board() {

  const handleClick = () => {
    const test = getLocalStorage('player1')
    console.log('player onee', test)
  };
  return (
    <div className={styles.container}>
      <div className={styles.fullScreen}>
        <a onClick={handleClick}>
          Start Game
        </a>
        <h1>OLA, Board!</h1>
      </div>
    </div>
  )
}
