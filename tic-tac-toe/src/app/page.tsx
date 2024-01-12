'use client';

import { useGlobalContext } from "./Context"
import Link from "next/link";
import styles from './page.module.css'
import theme from "./global/theme";
import AnimatedButton from "./components/primaryButton";
import React from "react";
import { useSpring, animated } from 'react-spring';


export default function Home() {
  const {userAge, userName, setUserAge, setUserName} = useGlobalContext()
  const [isAudioPlaying, setIsAudioPlaying] = React.useState(false);
  const [showCredits, setShowCredits] = React.useState(false);

  React.useEffect(() => {
    const startAudio = () => {
      if (!isAudioPlaying) {
        const audioElement = new Audio('/assets/soundEffects/menu.mp3');
        audioElement.play();
        audioElement.loop = true;
        setIsAudioPlaying(true);
      }
    };
    document.addEventListener('click', startAudio);
    return () => {
      document.removeEventListener('click', startAudio);
    };
  }, [isAudioPlaying]);

  const fadeOutProps = useSpring({
    opacity: showCredits ? 0 : 1,
    transform: showCredits ? 'translateY(-100%)' : 'translateY(0%)',
  });
  
  const fadeInProps = useSpring({
    opacity: showCredits ? 1 : 0,
    transform: showCredits ? 'translateY(0%)' : 'translateY(-100%)',
  });

  const handleCreditsClick = () => {
    setShowCredits(true);
  };

  const handleBackClick = () => {
    setShowCredits(false);
  };

  return (
    <div className={styles.card}>
        <animated.div style={fadeOutProps}>
        <h1 style={{ color: theme.colors.tertiary }}>JOGO DA VELHA DO LUKITAS</h1>
          <div className={styles.newGameButton}>
            <AnimatedButton onClick={() => console.log('olaa')} title="Novo Jogo" />
          </div>
          <div className={styles.buttonContainer}>
            <AnimatedButton onClick={() => console.log('olaa2')} title="Configurações" />
          </div>
          <div className={styles.buttonContainer}>
            <AnimatedButton onClick={handleCreditsClick} title="Créditos" />
          </div>
        </animated.div>
        <animated.div style={{ ...fadeInProps, position: 'absolute', top: 0, left: 22, right: 0, marginTop: '16%', display: "flex", justifyContent: "center", }}>
          {showCredits ? (
            <div>
              <h1>llslala</h1>
            <AnimatedButton onClick={handleBackClick} title="Voltar" />
            </div>
          ) : null}
        </animated.div>
    </div>
  );
}
