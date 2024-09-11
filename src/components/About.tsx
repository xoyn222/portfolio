import React, {FC, useEffect} from 'react';
import s from './About.module.scss'
import disciplineIcon from '../images/martial-arts.png'
import punctualityIcon from '../images/time-manager.png'
import teamPlayerIcon from '../images/together.png'
import flowIcon from '../images/data-flow.png'
import worker from '../images/working.png'
import bord from '../images/board.png'
import workout from '../images/workout.png'
import vocabulary from '../images/vocabulary.png'
import {Circle} from './Circle';

type AboutType = {
    linkColorAbout: (toggle: boolean) => void
    toggleLight: boolean
}

export const About: FC<AboutType> = ({linkColorAbout, toggleLight}) => {

    useEffect(() => {
        linkColorAbout(true)
    }, [])

    return (
        <div className={s.container}>
            <div className={s.colorBlock}></div>
            <section className={s.titleSection}>
                <h2 className={s.titleAboutPage}>ABOUT
                    <span className={s.me}> ME</span>
                </h2>
                <span className={toggleLight ? `${s.titleBack} ${s.lightMode}` : s.titleBack}>Information</span>
            </section>
            <section className={s.content}>
                <div className={s.contentLeft}>
                    <section className={s.personalInfo}>
                        <h3 className={toggleLight ? s.lightH3 : ''}>info: <div className={s.circle}></div><div className={s.headerLine}></div></h3>
                        <p className={toggleLight ? s.lightH3 : ''}><span>First name:</span><span>Artem</span></p>
                        <p className={toggleLight ? s.lightH3 : ''}><span>Last name:</span><span>Kostuchenko</span></p>
                        <p className={toggleLight ? s.lightH3 : ''}><span>Age:</span> <span>21</span></p>
                        <p className={toggleLight ? s.lightH3 : ''}><span>Address:</span> <span>Minsk, Belarus</span></p>
                        <p className={toggleLight ? s.lightH3 : ''}><span>Job Status:</span> <span>In active search</span></p>
                        <section className={s.personalHobbies}>
                            <h3 className={toggleLight ? s.lightH3 : ''}>Hobbies: <div className={s.circle}></div><div className={s.headerLine}></div></h3>
                            <p className={toggleLight ? s.lightH3 : ''}><img src={vocabulary} alt="disciplineIcon" className={s.hobbieIcon}/>Learning languages</p>
                            <p className={toggleLight ? s.lightH3 : ''}><img src={workout} alt="disciplineIcon" className={s.hobbieIcon}/>Snowboarding</p>
                            <p className={toggleLight ? s.lightH3 : ''}><img src={bord} alt="disciplineIcon" className={s.hobbieIcon}/>Workout</p>
                        </section>
                    </section>
                    <section className={s.personalStrengths}>
                        <h3 className={toggleLight ? s.lightH3 : ''}>Strengths:
                            <div className={s.circle}></div>
                            <div className={s.headerLine}></div>
                        </h3>
                            <p className={toggleLight ? s.lightH3 : ''}><img src={disciplineIcon} alt="disciplineIcon" className={s.icon}/>Discipline</p>
                            <p className={toggleLight ? s.lightH3 : ''}><img src={punctualityIcon} alt="punctualityIcon" className={s.icon}/>Punctuality</p>
                            <p className={toggleLight ? s.lightH3 : ''}><img src={teamPlayerIcon} alt="Team play Icon" className={s.icon}/>Team play</p>
                            <p className={toggleLight ? s.lightH3 : ''}><img src={worker} alt="Hard worker" className={s.icon}/>Hard worker</p>
                    </section>
                </div>
               <div className={s.contentRight}>
                   <section className={s.experience_education}>
                       <h3 className={toggleLight ? s.lightH3 : ''}>EDUCATION:<div className={s.circle}></div><div className={s.headerLine}></div></h3>
                       <p className={toggleLight ? s.lightH3 : ''}>University: <span>Belarusian State Technological University </span></p>
                       <p className={toggleLight ? s.lightH3 : ''}>Specialization: <span className={s.electrification}>Energy manager engineer</span></p>
                       <section className={s.programming_training}>
                           <h3 className={toggleLight ? s.lightH3 : ''}>Experience:<div className={s.circle}></div><div className={s.headerLine}></div></h3>
                           <p className={toggleLight ? s.lightH3 : ''}>Main Experience: <span>IT INCUBATOR</span></p>
                           <p className={toggleLight ? s.lightH3 : ''}>Codewars: <span>6-5 kyu rank</span></p>
                           <p className={toggleLight ? s.lightH3 : ''}>FCC: <span>JS and HTML</span></p>
                       </section>
                   </section>
                   <section className={s.languages}>
                       <h3 className={toggleLight ? s.lightH3 : ''}>Languages:<div className={s.circle}></div><div className={s.headerLine}></div></h3>
                       <div className={s.circleContainer}>
                           <Circle percents={100} title={'Russian'} toggleLight={toggleLight}/>
                           <Circle percents={100} title={'Belarusian'} toggleLight={toggleLight}/>
                           <Circle percents={50} title={'English'} toggleLight={toggleLight}/>
                       </div>
                   </section>
               </div>
            </section>
        </div>
    );
};

/*

 */

