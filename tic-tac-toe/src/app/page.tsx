'use client';

import { useEffect } from "react";
import { useGlobalContext } from "./Context"
import Link from "next/link";


export default function Home() {
  const {userAge, userName, setUserAge, setUserName} = useGlobalContext()

  useEffect(() => {
    console.log('user: ', userAge, userName)
  },[userAge, userName])
  return (
    <main>
      <div>
     <h1>OLA, MUNDO!</h1>
     <li>
     <Link  href="/Configurations">
     configg</Link>
     <div>
     <Link  href="/Test">
     Test</Link>
     </div>
    
     </li>
      </div>
    </main>
  )
}
