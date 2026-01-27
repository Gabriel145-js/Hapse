import React from "react";
import { Link } from "react-scroll";

import style from "./styles.module.scss";
import logoMini from "../../assets/svgs/logos/logoMini.svg";
import sebraeMini from "../../assets/svgs/logos/sebraeMini.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const whatsappNumber = "5554996797398"; 
  const whatsappMessage ="Olá! Gostaria de saber mais sobre os serviços da HAPSE Consultoria";


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
        <Link
          to={"quem-somos"}
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Quem Somos
        </Link>
        <Link
          to={"nossos-servicos"}
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Nossos Serviços
        </Link>
        <Link
          to={"solucoes"}
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Soluções Personalizadas
        </Link>
        <Link to={"contato"} spy={true} smooth={true} offset={0} duration={500}>
          Contatos
        </Link>
        <NavLink to={"/"}>
          <img src={sebraeMini} alt="Sebrae" />
        </NavLink>
      </section>

      <div className={style.buttonCtt}>
        <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" rel="noopener noreferrer">Contate-nos</a>
      </div>
    </div>
  );
};

export default Navbar;
