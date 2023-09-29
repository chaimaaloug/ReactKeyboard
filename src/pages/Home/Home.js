import React from "react";
import Keyboard from "../../components/Keyboard/Keyboard";
import Title from "../../components/Title/Title";
import style from './Home.module.scss';

const Home = () => {

    return (
       <div className={style.keyboardContainer}>
           <Title title="Vérification du code"/>
           <Keyboard />
       </div>
    );
}

export default Home;