import React, {FC} from 'react';
import s from "../App.module.scss";
import {NavLink} from "react-router-dom";
import homeIcon from "../images/home-button.png";
import skillsIcon from "../images/settings.png";
import projectsIcon from "../images/project.png";
import contactsIcon from "../images/contacting.png";
import aboutIcon from "../images/boy.png";
import flashLight_1 from "../images/flashlight_2.png";

type NavLinkBorderType = {
    home: number
    about: number
    skills: number
    projects: number
    contacts: number
}

type NaviType = {
    navState: NavLinkBorderType
    setNavState: (navState: NavLinkBorderType) => void
    lightToggleClick: () => void
    toggleLight: boolean
}

export const Navigation: FC<NaviType> = ({navState, setNavState, lightToggleClick, toggleLight}) => {

    const onHomeClick = () => {
        setNavState({
            home: 1,
            about: 0,
            skills: 0,
            projects: 0,
            contacts: 0
        })
    }
    const onAboutClick = () => {
        setNavState({
            home: 0,
            about: 1,
            skills: 0,
            projects: 0,
            contacts: 0
        })
    }
    const onSkillClick = () => {
        setNavState({
            home: 0,
            about: 0,
            skills: 1,
            projects: 0,
            contacts: 0
        })
    }
    const onProjectClick = () => {
        setNavState({
            home: 0,
            about: 0,
            skills: 0,
            projects: 1,
            contacts: 0
        })
    }
    const onContactClick = () => {
        setNavState({
            home: 0,
            about: 0,
            skills: 0,
            projects: 0,
            contacts: 1
        })
    }

    const flashLightCB = () => {
        lightToggleClick()
    }

    return (
        <nav className={toggleLight ? `${s.navContainer} ${s.light}` : s.navContainer}>
            <div className={s.navLinksContainer}>
                <NavLink to='/home'
                         className={s.navLink}
                         onClick={onHomeClick}>
                    <div className={navState.home === 1
                        ? `${s.navIconContainer} ${s.active}`
                        : s.navIconContainer
                    }>
                        <span className={s.linkTitle}>Home</span>
                        <img src={homeIcon}
                             className={s.navIcon}
                             alt={'homeIcon'}/>
                    </div>
                </NavLink>
                <NavLink to='/about'
                         className={s.navLink}
                         onClick={onAboutClick}>
                    <div className={navState.about === 1
                        ? `${s.navIconContainer} ${s.active}`
                        : s.navIconContainer
                    }>
                        <div className={s.linkTitle}>
                            <span className={s.inline}>
                                <span>About</span>
                                <span className={s.ml}>me</span>
                            </span>
                        </div>
                        <img src={aboutIcon}
                             className={s.navIcon}
                             alt={'aboutIcon'}/>
                    </div>
                </NavLink>
                <NavLink to='/skills'
                         className={s.navLink}
                         onClick={onSkillClick}>
                    <div className={navState.skills === 1
                        ? `${s.navIconContainer} ${s.active}`
                        : s.navIconContainer
                    }>
                        <span className={s.linkTitle}>Skills</span>
                        <img src={skillsIcon}
                             className={s.navIcon}
                             alt={'skillsIcon'}/>
                    </div>
                </NavLink>
                <NavLink to='/projects'
                         className={s.navLink}
                         onClick={onProjectClick}>
                    <div className={navState.projects === 1
                        ? `${s.navIconContainer} ${s.active}`
                        : s.navIconContainer}>
                        <span className={s.linkTitle}>Projects</span>
                        <img src={projectsIcon}
                             className={s.navIcon}
                             alt={'projectsIcon'}
                        />
                    </div>
                </NavLink>
                <NavLink to='/contacts'
                         className={s.navLink}
                         onClick={onContactClick}>
                    <div className={navState.contacts === 1
                        ? `${s.navIconContainer} ${s.active}`
                        : s.navIconContainer}>
                        <span className={s.linkTitle}>
                            <span className={s.inline}>Let's
                                <span className={s.ml}>Talk</span>
                            </span>
                        </span>
                        <img src={contactsIcon}
                             className={s.navIcon}
                             alt={'contactsIcon'}
                        />
                    </div>
                </NavLink>
                <img className={s.flashLight} src={flashLight_1} alt={'FlashLight'} onClick={flashLightCB}/>
            </div>
        </nav>
    );
};

