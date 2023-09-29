import React from "react";
import style from "./Title.module.scss"

const Title = (props) => {
    const {title} = props
    return (
        <h1 className={style.title}>{title}</h1>
    )
}

export default Title;


