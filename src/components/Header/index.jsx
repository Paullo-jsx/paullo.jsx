import React from 'react'
import style from './Header.module.css'
import { Link } from 'react-router-dom'
import Hamburger from '../Hamburger/index'

export default function App() {
    return (
        <header className={style.header}>
            <h2><span className={style.span}>p</span>auloo.dev</h2>
            <div className={style.navegacao}>
                <Link className={style.a} to='/'>Home</Link>
                <Link className={style.a} to='/projetos'>Projetos</Link>
                <Link className={style.a} to='/contatos'>Contatos</Link>
                <a className={style.source} href="https://github.com/Paulo-developer/pauloo-dev" target='_blank'><i class="bi bi-github"></i>Source</a>
                <Hamburger/>
            </div>
        </header>
    )
}