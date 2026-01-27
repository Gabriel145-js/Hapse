import React from "react";
import { Element } from "react-scroll";
import styles from "./styles.module.scss";

const sebraeFlag = "/imgs/sebraeFlag.png";

const NossosServicos = () => {
  const whatsappNumber = "5554996797398"; 
  const whatsappMessage ="Olá! Gostaria de saber mais sobre os serviços da HAPSE Consultoria";



  return (
    <Element name="nossos-servicos">
      <section id="nossos-servicos" className={styles.containerMainServicos}>
        <h1>Nossos Serviços</h1>

        <section className={styles.containerCardsServicos}>
          <div className={styles.cardInfo}>
            <h4>Oque fazemos por você?</h4>
            <p>
              A Hapse oferece consultoria personalizada para produtores rurais,
              agroindústrias e serviços de alimentação, com foco em:
            </p>

            <ul>
              <li>Análise de dados.</li>
              <li>Segurança e qualidade.</li>
              <li>Desenvolvimento do produto.</li>
              <li>Enquadramento e legalização.</li>
              <li>Gestão do negócio e propriedades rurais.</li>
            </ul>

            <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" rel="noopener noreferrer">Falar com consultor</a>
          </div>

          <div className={styles.cardParceiros}>
            <div className={styles.cardParceiroSebrae}>
              <div className={styles.titSubtit}>
                <div className={styles.textContent}>
                  <h4>Parceiros SEBRAE</h4>
                  <span>Certificado Oficial</span>
                </div>
                <a className={styles.imgFlag} href="">
                  <img src={sebraeFlag} alt="" />
                </a>
              </div>

              <p>
                Somos parceiros do SEBRAE, oferecendo soluções para a cadeia
                agroalimentar com benefícios que reduzem custos e aumentam a
                competitividade.{" "}
              </p>

              <a className={styles.btnSaibaMaisSebrae} href="">
                Saiba mais sobre os benefícios{" "}
              </a>
            </div>

            <div className={styles.listaBeneficios}>
              <p>Estratégias personalizadas</p>
              <p>Solução para o seu negócio</p>
              <p>Sustentabilidade e certificações</p>
            </div>
          </div>
        </section>
      </section>
    </Element>
  );
};

export default NossosServicos;
