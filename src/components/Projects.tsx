import React, {FC} from 'react';
import s from './Projects.module.scss'

type ProjectsType = {
    toggleLight: boolean
}

export const Projects: FC<ProjectsType> = ({toggleLight}) => {
    return (
        <div className={s.container}>
            <div className={s.titleContainer}>
                <div className={s.dotContainer_left}>
                    <div className={s.leftDot}></div>
                </div>
                <h1 className={s.title}>Project<span className={s.me}>S</span></h1>
                <div className={s.dotContainer_right}>
                    <div className={s.rightDot}></div>
                </div>
            </div>
            <div className={s.projectsContainer}>
                <div className={s.contentContainer}>
                    <div className={s.socialNetworkBack}>
                        <a href='https://xoyn222.github.io/social-network/' target='_blank' className={s.projectLink} rel="noreferrer">CHECK</a>
                    </div>
                    <h3 className={toggleLight ? s.lightH3 : ''}>Social Network</h3>
                    <span className={toggleLight ? `${s.status} ${s.lightH3}` : s.status}>Status: in progress</span>
                </div>
                <div className={s.contentContainer}>
                    <div className={s.todolistBack}>
                        <a href='https://xoyn222.github.io/todolist-2/' target='_blank' className={s.projectLink} rel="noreferrer">CHECK</a>
                    </div>
                    <h3 className={toggleLight ? s.lightH3 : ''}>Todolist</h3>
                    <span className={toggleLight ? `${s.status} ${s.lightH3}` : s.status}>Status: in progress</span>
                </div>
                <div className={s.contentContainer}>
                    <div className={s.telegram}>
                        <a href='https://xoyn222.github.io/telegram_clone' target='_blank' className={s.projectLink} rel="noreferrer">CHECK</a>
                    </div>
                    <h3 className={toggleLight ? s.lightH3 : ''}>Telegram Clone</h3>
                    <span className={toggleLight ? `${s.status} ${s.lightH3}` : s.status}>Status: in progress</span>
                </div>
                <div className={s.contentContainer}>
                    <div className={s.counter}>
                        <a href='https://github.com/xoyn222' target='_blank' className={s.projectLink} rel="noreferrer">CHECK</a>
                    </div>
                    <h3 className={toggleLight ? s.lightH3 : ''}>GitHub</h3>
                    <span className={toggleLight ? `${s.status} ${s.lightH3}` : s.status}>My other projects</span>
                </div>
            </div>
        </div>
    );
};

