import { FC } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import s from "./PageLoader.module.scss"

export const PageLoader: FC = () => {
    return (
        <div className={s.loader}>
            <CircularProgress/>
        </div>
    )
}