'use client';

import { getLocalStorage } from "@/services/localStorage";

import styles from './playRoom.module.css'
import React from "react";
import Board from "@/app/components/board";

export default function PlayRoom() {

  const [player1, setPlayer1] = React.useState('');
  const [player2, setPlayer2] = React.useState('');

 React.useEffect(() => {
  setPlayer1(getLocalStorage('player1'))
  setPlayer2(getLocalStorage('player2'))

 },[player1, player2])
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.playersBoard}>
          <div className={styles.playerData}>
          <h1>{player1}</h1>
          <h2>0</h2>
          </div>
          <div style={{width: '8%'}} className={styles.playerData}>
          <h1>X</h1>
          </div>
          <div className={styles.playerData}>
          <h1>{player2}</h1>
          <h2>0</h2>
          </div>
        </div>
        <Board />
        
      </div>
    </div>
  )
}
