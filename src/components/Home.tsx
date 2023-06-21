import React, {FC} from 'react';
import s from './Home.module.scss'
import aboutIcon from "../images/boy.png";
import {NavLink} from "react-router-dom";

type HomeType = {
    toggleLight: boolean
}

export const Home: FC<HomeType> = ({toggleLight}) => {

    return (
            <div className={s.container}>
                <div className={s.colorBlock}></div>
                <div className={s.photoWrapper}>
                    <div className={s.photo}></div>
                </div>
                <div className={s.textGreeting}>
                    <span className={s.name}>
                        <span className={toggleLight ? `${s.preName} ${s.light}` : s.preName}>I'M ARTEM </span>KOSTUCHENKO
                    </span>
                    <div className={s.professionConatiner}>
                        <span className={toggleLight ? `${s.profession} ${s.light}` : s.profession}>A FRONTEND DEVELOPER</span>
                    </div>
                    <div className={toggleLight ? `${s.aboutMeText} ${s.lightPostText}` : s.aboutMeText}>
                        <p>Writing the application Code - is an art.</p>
                        <p className={s.letsBuild}>Programmers - are modern sculptors,</p>
                        <p>who create intellectual masterpieces.</p>
                    </div>
                    <NavLink to='/about' className={s.navLink}>
                        <div className={toggleLight ? `${s.navIconContainer} ${s.light}` : s.navIconContainer}>
                            <div className={s.linkTitle}>
                                <span>Find out more about me</span>
                            </div>
                            <img src={aboutIcon}
                                 className={s.navIcon}
                                 alt={'aboutIcon'}/>
                        </div>
                    </NavLink>
                </div>
            </div>
    );
};

