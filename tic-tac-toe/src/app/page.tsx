'use client';

import { useEffect } from "react";
import { useGlobalContext } from "./Context"
import Link from "next/link";
import styles from './page.module.css'
import theme from "./global/theme";
import AnimatedButton from "./components/primaryButton";


export default function Home() {
  const {userAge, userName, setUserAge, setUserName} = useGlobalContext()

  useEffect(() => {
    console.log('user: ', userAge, userName, theme)
  },[userAge, userName])
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
  
     {/* <li>
     <Link  href="/Configurations">
     configg</Link>
     <div>
     <Link  href="/Test">
     Test</Link>
     </div>
    
     </li> */}
      </div>
    </div>
  )
}
