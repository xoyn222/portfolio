import React, {ChangeEvent, FC, useState} from 'react';
import s from './Contacts.module.scss'

type ContactsType = {
    toggleLight: boolean
}

export const Contacts: FC<ContactsType> = ({toggleLight}) => {

    let [name, setName] = useState<string>('')
    let [phone, setPhone] = useState<string>('')
    let [email, setEmail] = useState<string>('')
    let [comment, setComment] = useState<string>('')
    let [error, setError] = useState<string | null>('')

    const nameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
        setError(null)
    }
    const phoneChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (Number.isInteger(+e.currentTarget.value)) {
            setPhone(e.currentTarget.value)
            setError(null)
        }
    }
    const emailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
        setError(null)
    }
    const commentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setComment(e.currentTarget.value)
        setError(null)
    }

    const sendClick = () => {
        if (name.trim() !== '' && phone.trim() !== '' && email.trim() !== '' && comment.trim() !== '') {
            setName('')
            setPhone('')
            setEmail('')
            setComment('')
        }
        if (name.trim() === '') {
            setError('Fill in all the fields')
        }
        if (phone.trim() === '') {
            setError('Fill in all the fields')
        }
        if (email.trim() === '') {
            setError('Fill in all the fields')
        }
        if (comment.trim() === '') {
            setError('Fill in all the fields')
        }
    }

    return (
        <div className={s.container} >
            <div className={s.titleContainer}>
                <div className={s.dotContainer_left}>
                    <div className={s.leftDot}></div>
                </div>
                <h1 className={s.title}>Сontact<span className={s.me}> ME</span></h1>
                <div className={s.dotContainer_right}>
                    <div className={s.rightDot}></div>
                </div>
            </div>
            <form action="" className={s.form}>
                <div className={s.inputBox}>
                    <input type="text" required value={name} onChange={nameChange} className={toggleLight ? `${s.input} ${s.inputLight}` : s.input}/>
                    <span className={toggleLight ? s.spanLight : ''}>First name</span>
                </div>
                <div className={s.inputBox}>
                    <input type="number" required value={phone} onChange={phoneChange} className={toggleLight ? `${s.input} ${s.inputLight}` : s.input}/>
                    <span>Phone number</span>
                </div>
                <div className={s.inputBox}>
                    <input type="text" required value={email} onChange={emailChange} className={toggleLight ? `${s.input} ${s.inputLight}` : s.input}/>
                    <span>Email</span>
                </div>
                <div className={s.inputBox}>
                    <textarea className={toggleLight ? `${s.textareaContact} ${s.textAreaLight}` : s.textareaContact} required value={comment} onChange={commentChange}></textarea>
                    <span>Enter your comment</span>
                </div>
                <div className={s.errorContainer}>
                    <span className={error === 'Fill in all the fields' ? s.errorActive : s.errorDisabled}>{error}</span>
                </div>
                    <a href="#" className={s.sendButton} onClick={sendClick}>
                        <span className={s.sendTitle}>Send</span>
                        <div className={toggleLight ? s.liquidLight : s.liquid}></div>
                    </a>
            </form>
        </div>
    );
};

