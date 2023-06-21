import React, {FC} from 'react';
import s from './Skills.module.scss'
import {Circle} from "./Circle";

type SkillsType = {
    toggleLight: boolean
}

export const Skills: FC<SkillsType> = ({toggleLight}) => {
    return (
        <div className={s.container}>
            <div className={s.titleContainer}>
                <div className={s.dotContainer_left}>
                    <div className={s.leftDot}></div>
                </div>
                <h1 className={s.title}>
                    Skill<span className={s.s}>s</span>
                    <span className={s.titleRight}>set</span>
                </h1>
                <div className={s.dotContainer_right}>
                    <div className={s.rightDot}></div>
                </div>
                <span className={toggleLight ? `${s.titleBack} ${s.titleBackLight}` : s.titleBack}>Programming</span>
            </div>
            <div className={s.skillsContainer}>
                <div className={toggleLight ? `${s.skillsBack} ${s.skillsBackLight}` : s.skillsBack}></div>
                <div className={s.skill}>
                    <Circle percents={80} title={'HTML'} toggleLight={toggleLight}/>
                </div>
                <div className={s.skill}>
                    <Circle percents={80} title={'CSS'} toggleLight={toggleLight}/>
                </div>
                <div className={s.skill}>
                    <Circle percents={60} title={'JavaScript'} toggleLight={toggleLight}/>
                </div>
                <div className={s.skill}>
                    <Circle percents={70} title={'TypeScript'} toggleLight={toggleLight}/>
                </div>
                <div className={s.skill}>
                    <Circle percents={40} title={'Storybook'} toggleLight={toggleLight}/>
                </div>
                <div className={s.skill}>
                    <Circle percents={50} title={'Unit Testing'} toggleLight={toggleLight}/>
                </div>
                <div className={s.skill}>
                    <Circle percents={70} title={'React'} toggleLight={toggleLight}/>
                </div>
                <div className={s.skill}>
                    <Circle percents={70} title={'Redux'} toggleLight={toggleLight}/>
                </div>
                <div className={s.skill}>
                    <Circle percents={60} title={'SASS'} toggleLight={toggleLight}/>
                </div>
                <div className={s.skill}>
                    <Circle percents={70} title={'Rest API'} toggleLight={toggleLight}/>
                </div>
                <div className={s.skill}>
                    <Circle percents={70} title={'MUI'} toggleLight={toggleLight}/>
                </div>
                <div className={s.skill}>
                    <Circle percents={70} title={'Axios'} toggleLight={toggleLight}/>
                </div>
            </div>
        </div>
    );
};

