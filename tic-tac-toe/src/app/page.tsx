'use client';

import { useEffect } from "react";
import { useGlobalContext } from "./Context"


export default function Home() {
  const {userAge, userName, setUserAge, setUserName} = useGlobalContext()

  useEffect(() => {
    console.log('user: ', userAge, userName)
  },[userAge, userName])
  return (
    <main>
      <div>
     <h1>OLA, MUNDO!</h1>
      </div>
    </main>
  )
}
