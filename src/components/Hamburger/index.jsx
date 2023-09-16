import { React, useState } from 'react'

import style from './Hamburger.module.css'
import { Link } from 'react-router-dom'
export default function Menu() {
    const [menu, setMenu] = useState(false);
    return (
        <div className={style.Menu_Hamburger}>
            <button className={style.b_menu} onClick={() => setMenu(!menu)}><span class="material-symbols-outlined">menu</span></button>
            {menu && (
                <main className={style.container_rotas}>
                    <Link className={style.linkss} to='/'>Home</Link>
                    <Link className={style.linkss} to='/projetos'>Projetos</Link>
                    <Link className={style.linkss} to='/contatos'>Contatos</Link>
                    <hr />
                    <a className={style.source} href="https://github.com/Paulo-developer/pauloo-dev" target='_blank'><i class="bi bi-github"></i> Source</a>
                </main>
            )}
        </div>
    )
}