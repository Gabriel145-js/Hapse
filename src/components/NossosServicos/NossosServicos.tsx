import { useEffect, useRef } from "react";
import { Element } from "react-scroll";
import styles from "./styles.module.scss";

const sebraeFlag = "/imgs/sebraeFlag.png";

const NossosServicos = () => {
  const whatsappNumber = "5554996797398";
  const whatsappMessage = "Olá! Gostaria de saber mais sobre os serviços da HAPSE Consultoria";
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll("[data-anim]");
    if (!elements || elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Apenas adiciona a classe que dispara o keyframe
            entry.target.classList.add(styles.startAnim);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    // Removemos o requestAnimationFrame daqui! O CSS fará o trabalho inicial.
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <Element name="nossos-servicos">
      <section id="nossos-servicos" ref={sectionRef} className={styles.containerMainServicos}>
        <h1 data-anim="up">Nossos Serviços</h1>

        <section className={styles.containerCardsServicos}>

          {/* ── slide da esquerda (definimos data-anim="left") ── */}
          <div className={styles.cardInfo} data-anim="left">
            <h4>O que fazemos por você?</h4>
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
            
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar com consultor
            </a>
          </div>

          {/* ── Lado direito (Parceiros e Dominó, data-anim="up") ── */}
          <div className={styles.cardParceiros}>
            
            <div className={styles.cardParceiroSebrae} data-anim="up">
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
                competitividade.
              </p>
              <a className={styles.btnSaibaMaisSebrae} href="">
                Saiba mais sobre os benefícios
              </a>
            </div>

            <div className={styles.listaBeneficios}>
              {/* Note as classes domino para controlar o delay do keyframe */}
              <p className={styles.domino1} data-anim="up">Estratégias personalizadas</p>
              <p className={styles.domino2} data-anim="up">Solução para o seu negócio</p>
              <p className={styles.domino3} data-anim="up">Sustentabilidade e certificações</p>
            </div>
          </div>

        </section>
      </section>
    </Element>
  );
};

export default NossosServicos;