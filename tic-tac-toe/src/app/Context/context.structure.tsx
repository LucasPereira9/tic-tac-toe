import { Dispatch, SetStateAction } from "react"

export interface iTest {
    userName: string
    userAge: number
    setUserName: Dispatch<SetStateAction<string>>
    setUserAge: Dispatch<SetStateAction<number>>
}