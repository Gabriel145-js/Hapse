import React from 'react'
import logoFooter from '../../assets/svgs/logos/logoFooter.svg'
import sebraeLogo from '../../assets/svgs/parceiroSebrae.svg'
import styles from './styles.module.scss'

const Footer = () => {

    const parceiros = [
        { logoParceiro: sebraeLogo, linkParceiro: "/" }
    ]

    return (
        <>
            <section className={styles.containerMainFooter}>
                <div className={styles.containerContentFooter}>
                    <article className={styles.containerLogoFooter}>
                        <img className={styles.logoFooter} src={logoFooter} alt="Logo rodapé" />
                        <p className={styles.fraseImpacto}>
                            COM INTELIGÊNCIA ESTRATÉGICA, UNINDO PRODUÇÃO, MERCADO E CONSUMIDOR EM UMA SÓ CADEIA.
                        </p>
                        <div className={styles.containerRedesSociais}>
                            <a href="/" className={styles.iconeInsta} aria-label="Instagram">

                            </a>
                            <a href="/" className={styles.iconeLinkedin} aria-label="LinkedIn">

                            </a>
                            <a href="/" className={styles.iconeWpp} aria-label="WhatsApp">

                            </a>
                        </div>
                    </article>

                    <nav className={styles.linksRapidos}>
                        <h4 className={styles.titulosFooter}>Links Rápidos</h4>
                        <ul className={styles.listasFooter}>
                            <li><a href="#inicio">Inicio</a></li>
                            <li><a href="#quem-somos">Quem Somos</a></li>
                            <li><a href="#servicos">Nossos Serviços</a></li>
                            <li><a href="#solucoes">Soluções</a></li>
                            <li><a href="#equipe">Nossa Equipe</a></li>
                            <li><a href="#contatos">Contatos</a></li>
                        </ul>
                    </nav>

                    <div className={styles.contatos}>
                        <h4 className={styles.titulosFooter}>Contatos</h4>
                        <ul className={styles.listasFooter}>
                            <li><a href="tel:+5554996797398">(54) 99679-7398</a></li>
                            <li><a href="mailto:contato@hapseconsultoria.com">contato@hapseconsultoria.com</a></li>
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
                <p>© 2024 HAPSE consultoria agroalimentar. Todos os direitos reservados.</p>
                <a href="/">Desenvolvido por GabrielZaparolliDEV</a>
            </div>
        </>
    )
}

export default Footer