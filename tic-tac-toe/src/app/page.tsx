'use client';

import { useGlobalContext } from "./Context"
import Link from "next/link";
import styles from './page.module.css'
import theme from "./global/theme";
import AnimatedButton from "./components/primaryButton";
import React from "react";


export default function Home() {
  const {userAge, userName, setUserAge, setUserName} = useGlobalContext()
  const [isAudioPlaying, setIsAudioPlaying] = React.useState(false);

  
  React.useEffect(() => {
    const startAudio = () => {
      if (!isAudioPlaying) {
        const audioElement = new Audio('/assets/soundEffects/menu.mp3');
        audioElement.play();
        audioElement.loop = true
        setIsAudioPlaying(true);
      }
    };

    document.addEventListener('click', startAudio);

    return () => {
      document.removeEventListener('click', startAudio);
    };
  }, [isAudioPlaying]);


  return (
    <div className={styles.card}>
      <div>
     <h1 style={{color: '#001f3d'}}>JOGO DA VELHA DO LUKITAS</h1>
     <div>
         <div className={styles.newGameButton}>
      <AnimatedButton onClick={() => console.log('olaa')} title="Novo Jogo"/>
         </div>
         <div className={styles.buttonContainer}>
      
         <AnimatedButton onClick={() => console.log('olaa2')} title="Configurações"/>
        </div>
        <div className={styles.buttonContainer}>
     
        <AnimatedButton onClick={() => console.log('olaa3')} title="Créditos"/>
        </div>
      </div>
      </div>
    </div>
  )
}
