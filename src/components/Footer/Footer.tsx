import logoFooter from "../../assets/svgs/logos/logoFooter.svg";
import sebraeLogo from "../../assets/svgs/parceiroSebrae.svg";
import styles from "./styles.module.scss";

const Footer = () => {
  const parceiros = [{ logoParceiro: sebraeLogo, linkParceiro: "/" }];

  const whatsappNumber = "5554996797398";
  const whatsappMessage =
    "Olá! Gostaria de saber mais sobre os serviços da HAPSE Consultoria";

  const scrollTo = (id: string, offset = 0) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <>
      <section className={styles.containerMainFooter}>
        <div className={styles.containerContentFooter}>
          <article className={styles.containerLogoFooter}>
            <img
              className={styles.logoFooter}
              src={logoFooter}
              alt="Logo rodapé"
            />
            <p className={styles.fraseImpacto}>
              COM INTELIGÊNCIA ESTRATÉGICA, UNINDO PRODUÇÃO, MERCADO E
              CONSUMIDOR EM UMA SÓ CADEIA.
            </p>
            <div className={styles.containerRedesSociais}>
              <a href="/" className={styles.iconeInsta} aria-label="Instagram" />
              <a href="/" className={styles.iconeLinkedin} aria-label="LinkedIn" />
              <a href="/" className={styles.iconeWpp} aria-label="WhatsApp" />
            </div>
          </article>

          <nav className={styles.linksRapidos}>
            <h4 className={styles.titulosFooter}>Links Rápidos</h4>
            <ul className={styles.listasFooter}>
              <li>
                <a onClick={() => scrollTo("inicio", -80)}>Inicio</a>
              </li>
              <li>
                <a onClick={() => scrollTo("quem-somos")}>Quem Somos</a>
              </li>
              <li>
                <a onClick={() => scrollTo("servicos")}>Nossos Serviços</a>
              </li>
              <li>
                <a onClick={() => scrollTo("solucoes")}>Soluções</a>
              </li>
              <li>
                <a href="/conheca-nosso-time">Nossa Equipe</a>
              </li>
              <li>
                <a onClick={() => scrollTo("contatos")}>Contatos</a>
              </li>
            </ul>
          </nav>

          <div className={styles.contatos}>
            <h4 className={styles.titulosFooter}>Contatos</h4>
            <ul className={styles.listasFooter}>
              <li>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (54) 99679-7398
                </a>
              </li>
              <li>
                <a href="mailto:contato@hapseconsultoria.com">
                  contato@hapseconsultoria.com
                </a>
              </li>
              <li>Segunda à Sexta: 8h às 18h</li>
            </ul>
          </div>

          <article className={styles.parceiros}>
            <h4 className={styles.titulosFooter}>Parceiros</h4>
            {parceiros.map((item, index) => (
              <div key={index}>
                <a href={item.linkParceiro}>
                  <img src={item.logoParceiro} alt="Logo Sebrae - Parceiro" />
                </a>
              </div>
            ))}
          </article>
        </div>
      </section>

      <div className={styles.copyRight}>
        <p>
          © 2026 HAPSE consultoria agroalimentar. Todos os direitos reservados.
        </p>
        <a href="/">Desenvolvido por GabrielZaparolliDEV</a>
      </div>
    </>
  );
};

export default Footer;