import { FC, ReactNode } from "react"
import { Container } from "@mui/material"
import { Header } from "../Header/Header"

import s from "./Layout.module.scss"

interface LayoutProps {
    children: ReactNode
}

export const Layout: FC<LayoutProps> = (props) => {
    const { children } = props

    return (
        <div className={s.container}>
            <Header />
            <Container className={s.main}>{children}</Container>
            <Header />
        </div>
    )
}