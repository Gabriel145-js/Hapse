import React from "react";
import { Element } from "react-scroll";
import styles from "./styles.module.scss";
import iconeBannerUm from "../../assets/svgs/icons/iconBannerUm.svg";
import iconeBannerDois from "../../assets/svgs/icons/iconBannerDois.svg";
import iconeBannerTres from "../../assets/svgs/icons/iconBannerTres.svg";
import { Link } from "react-scroll";

const bannerSalame = "/imgs/banners/salameQueijo.png";
const trator = "/imgs/banners/trator.png";
const vacas = "/imgs/banners/vacas.png";

const Header = () => {
  const whatsappNumber = "5554996797398";
  const whatsappMessage =
    "Olá! Gostaria de saber mais sobre os serviços da HAPSE Consultoria";

  const iconesElabel = [
    {
      icone: iconeBannerUm,
      label: (
        <>
          Experiência <br /> Técnica
        </>
      ),
    },
    {
      icone: iconeBannerDois,
      label: (
        <>
          Soluções <br /> Adaptativas
        </>
      ),
    },
    {
      icone: iconeBannerTres,
      label: (
        <>
          Visão <br /> Sistêmica
        </>
      ),
    },
  ];

  const bannersArredondados = [
    { image: bannerSalame, className: styles.salameEQueijo },
    { image: vacas, className: styles.vacaCuriosaEEngracadaOlhanIcon },
    { image: trator, className: styles.designSemNome61 },
  ];

  return (
    <Element name="inicio">
      <header className={styles.bannerHeander}>
        <div className={styles.faixaBanner}>
          <div className={styles.faixaBannerChild} />
          <div className={styles.faixaBannerChildPai}>
            <span className={styles.faixaBannerChildBig} />
          </div>
        </div>

        <div className={styles.imagensBanners}>
          {bannersArredondados.map((banner, index) => (
            <img
              key={index}
              className={banner.className}
              src={banner.image}
              alt=""
            />
          ))}
        </div>

        <div className={styles.titDireita}>
          <div className={styles.tituloBanner}>
            <i className={styles.transformandoDesafioEmOportContainer}>
              <span>Transformando desafio em </span>
              <span className={styles.oportunidades}>
                Oportunidades
                <br />
              </span>
              <span className={styles.comConsultoriaEstratgica}>
                com Consultoria Estratégica
                <br />
              </span>
            </i>
            <div className={styles.oferecemosServiosPersonaliz}>
              Oferecemos serviços personalizados para fortalecer as
              Agroindústrias, as Propriedades Rurais e o setor Alimentício.
              Capacitamos produtores e empresas, com soluções inovadoras,
              focadas em sustentabilidade, eficiência e valorização da produção
              e da identidade do produto.
            </div>
          </div>

          <div className={styles.iconesBanner}>
            {iconesElabel.map((item, index) => (
              <div key={index} className={styles[`icone${index + 1}`]}>
                <div className={styles.icone1Child} />
                <b className={styles.experienciaTcnica}>{item.label}</b>
                <img
                  className={
                    styles[
                      `textoDoSeuPargrafo${index === 0 ? "1" : index + 1}1`
                    ]
                  }
                  src={item.icone}
                  alt=""
                />
              </div>
            ))}
          </div>

          <div className={styles.btnsAo}>
            <div className={styles.falarComConsultorParent}>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.falarComConsultor}
              >
                Falar com Consultor{" "}
              </a>
            </div>
            <div className={styles.falarComConsultorParent}>
              <Link
                to="solucoes"
                smooth={true}
                duration={500}
                className={styles.falarComConsultor}
              >
                Nossos Serviços
              </Link>
            </div>
          </div>
        </div>
      </header>
    </Element>
  );
};

export default Header;
