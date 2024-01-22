'use client';

import { useGlobalContext } from "./Context"
import styles from './page.module.css'
import theme from "./global/theme";
import PrimaryButton from "./components/primaryButton";
import React from "react";
import { useSpring, animated } from 'react-spring';
import Credits from "./components/credits";
import NewGameData from "./components/newGameData";


export default function Home() {
  const {userAge, userName, setUserAge, setUserName} = useGlobalContext()
  const [isAudioPlaying, setIsAudioPlaying] = React.useState(false);
  const [showCredits, setShowCredits] = React.useState(false);
  const [showNewGame, setShowNewGame] = React.useState(false);

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
    opacity: showCredits || showNewGame ? 0 : 1,
    transform: showCredits || showNewGame ? 'translateY(-100%)' : 'translateY(0%)',
  });

  const fadeInProps = useSpring({
    opacity: showCredits || showNewGame ? 1 : 0,
    transform: showCredits || showNewGame ? 'translateY(0%)' : 'translateY(-100%)',
  });

  return (
    <div className={styles.card}>
      <animated.div style={fadeOutProps}>
        <h1 style={{ color: theme.colors.tertiary }}>JOGO DA VELHA DO LUKITAS</h1>
        <div className={styles.newGameButton}>
          <PrimaryButton onClick={() =>  setShowNewGame(true)} title="Novo Jogo" />
        </div>
        <div className={styles.buttonContainer}>
          <PrimaryButton onClick={() => console.log('olaa2')} title="Histórico" />
        </div>
        <div className={styles.buttonContainer}>
          <PrimaryButton onClick={() =>  setShowCredits(true)} title="Créditos" />
        </div>
      </animated.div>
      <animated.div style={{ ...fadeInProps, position: 'absolute', top: 0, left: 22, right: 0, marginTop: '16%', display: "flex", justifyContent: "center", }}>
        {showCredits && (
          <div>
            <Credits goBack={() => setShowCredits(false)} />
          </div>
        )}
        {showNewGame && (
          <div>
           <NewGameData />
          </div>
        )}
      </animated.div>
    </div>
  );
}
