import { Url } from "next/dist/shared/lib/router/router"

export interface IPrimaryButtonProps {
    title: string
    onClick: () => void
    navigate?: boolean
    page?: Url
    isDisabled?: boolean
}