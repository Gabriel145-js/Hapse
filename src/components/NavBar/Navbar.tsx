import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './styles.module.scss'
import logoMini from '../../assets/svgs/logos/logoMini.svg'
import sebraeMini from '../../assets/svgs/logos/sebraeMini.svg'

const Navbar = () => {
  return (
    <div className={style.containerNavbar}>
        <div className={style.logoNavbar}>
            <img className={style.logo} src={logoMini} alt="Hapse Consultoria" />
            <div className={style.logoText}>
                <h1>HapseConsultoria</h1>
                <p>AgroAlimentar</p>
            </div>
        </div>

        <section className={style.menuNavbar}>
            <NavLink to={'/'}>Quem Somos</NavLink>
            <NavLink to={'/'}>Nossos Serviços</NavLink>
            <NavLink to={'/'}>Soluções</NavLink>
            <NavLink to={'/'}>Nossa Equipe</NavLink>
            <NavLink to={'/'}><img src={sebraeMini} alt="Sebrae" /></NavLink>
        </section>

        <div className={style.buttonCtt}>
            <a href="">Contate-nos</a>
        </div>
    </div>
  )
}

export default Navbar