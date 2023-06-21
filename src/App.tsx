import React, {useState} from 'react';
import {Home} from "./components/Home";
import {Skills} from "./components/Skills";
import {Contacts} from "./components/Contacts";
import {Projects} from "./components/Projects";
import {Navigate, Route, Routes} from "react-router-dom";
import {About} from "./components/About";
import s from "./App.module.scss";
import {Navigation} from "./components/Navigation";
import flashLight_1 from './images/flashlight_1.png'

export type NavLinkBorderType = {
    home: number
    about: number
    skills: number
    projects: number
    contacts: number
}

function App() {

    let [navState, setNavState] = useState<NavLinkBorderType>({
        home: 1,
        skills: 0,
        about: 0,
        projects: 0,
        contacts: 0
    })
    let [toggleLight, setToggleLight] = useState<boolean>(false)

    const linkColorAbout = (toggle: boolean) => {
        if (toggle) {
            setNavState({
                home: 0,
                skills: 0,
                about: 1,
                projects: 0,
                contacts: 0
            })
        }
    }
    const lightToggleClick = () => {
        setToggleLight(!toggleLight)
    }

    return (
        <div className={s.App}>
            <main className={toggleLight ? `${s.main} ${s.light}` : s.main}>
                <Routes>
                        <Route path='/portfolio' element={<Navigate to="/home"/>}/>
                        <Route path='home' element={<Home toggleLight={toggleLight}/>}/>
                        <Route path='about' element={<About linkColorAbout={linkColorAbout} toggleLight={toggleLight}/>}/>
                        <Route path='skills' element={<Skills toggleLight={toggleLight}/>}/>
                        <Route path='projects' element={<Projects toggleLight={toggleLight}/>}/>
                        <Route path='contacts' element={<Contacts toggleLight={toggleLight}/>}/>
                </Routes>
            </main>
            <Navigation navState={navState} setNavState={setNavState} lightToggleClick={lightToggleClick} toggleLight={toggleLight}/>
        </div>
    );
}

export default App;


/*
   <div className={s.contactMe}>
                    <h2 className={s.titleContact}>I consider options for remote work</h2>
                    <NavHashLink smooth to='#contacts' className={s.linkContacts}>Contact me</NavHashLink>
                </div>
                456
 */

/*
<footer className={s.footer}>
                <h3 className={s.footerHeader}>add me to your friends</h3>
                <div className={s.footerIconsContainer}>
                    <a href='https://www.linkedin.com/in/-ilia-kravtsov' target='_blank' rel="noreferrer">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Facebook_F_icon.svg/512px-Facebook_F_icon.svg.png"
                            alt="facebook logo" className={s.footerLogo}/>
                    </a>
                    <a href='https://www.linkedin.com/in/-ilia-kravtsov' target='_blank' rel="noreferrer">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/120px-Instagram_logo_2016.svg.png"
                            alt="facebook logo" className={s.footerLogo}/>
                    </a>
                    <a href='https://t.me/Ilia_melbourne' target='_blank' rel="noreferrer">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/512px-Telegram_logo.svg.png?20220101141644"
                            alt="facebook logo" className={s.footerLogo}/>
                    </a>
                    <a href='https://www.linkedin.com/in/-ilia-kravtsov' target='_blank' rel="noreferrer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Linkedin.svg/200px-Linkedin.svg.png"
                             alt="linkedin logo" className={s.footerLogo}/>
                    </a>
                </div>
                <span>© All rights reserved</span>
            </footer>
 */