'use client';

import { useEffect } from "react";
import { useGlobalContext } from "./Context"
import Link from "next/link";
import styles from './page.module.css'
import theme from "./global/theme";


export default function Home() {
  const {userAge, userName, setUserAge, setUserName} = useGlobalContext()

  useEffect(() => {
    console.log('user: ', userAge, userName, theme)
  },[userAge, userName])
  return (
    <div className={styles.Card}>
      <div>
     <h1 style={{color: '#001f3d'}}>JOGO DA VELHA DO LUKITAS</h1>
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
