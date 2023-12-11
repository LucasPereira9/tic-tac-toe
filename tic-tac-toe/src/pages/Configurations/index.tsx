'use client';

import { useEffect } from "react";
import { useGlobalContext } from "../../app/Context/index"


export default function Configuration() {
  const {userAge, userName, setUserAge, setUserName} = useGlobalContext()

  useEffect(() => {
    console.log('user: ', userAge, userName)
  },[userAge, userName])
  return (
    <main>
      <div>
     <h1>OLA, Configuration!</h1>
      </div>
    </main>
  )
}
