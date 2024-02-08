'use client';

import { getLocalStorage } from "@/services/localStorage";


export default function Configuration() {

  const handleClick = () => {
    const test = getLocalStorage('player1')
    console.log('player onee', test)
  };
  return (
    <main>
      <div>
      <a onClick={handleClick}>
        Start Game
      </a>
     <h1>OLA, Configuration!</h1>
      </div>
    </main>
  )
}
