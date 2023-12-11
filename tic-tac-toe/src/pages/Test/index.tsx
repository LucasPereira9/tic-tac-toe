'use client';

import { useEffect } from "react";
import { useGlobalContext } from "../../app/Context/index"


export default function Test() {
  const {userAge, userName, setUserAge, setUserName} = useGlobalContext()

  useEffect(() => {
    console.log('user: ', userAge, userName)
  },[userAge, userName])
  return (
    <main>
      <div>
     <h1>OLA, Test!</h1>
      </div>
    </main>
  )
}
