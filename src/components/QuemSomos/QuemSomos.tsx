import React from 'react'
import styles from './styles.module.scss'
import missaoIcon from '../../assets/svgs/icons/missaoIcon.svg'
import visaoIcon from '../../assets/svgs/icons/valoresIcon.svg'
import valoresIcon from '../../assets/svgs/icons/visaoIcon.svg'

const fotoFer = "/imgs/fotoFer.png"
const fotoMay = "/imgs/fotoMay.png"
const fotoRafa = "/imgs/fotoRafa.png"

const QuemSomos = () => {

    const cardsValores = [
        { icone: missaoIcon, label: "Missão", texto: "Oferecer consultoria estratégica ao setor Agroalimentar,  que impulsione a sustentabilidade e a produtividade, por meio de soluções inovadoras e personalizadas , conectando produção, mercado e consumidor em uma só cadeia." },
        { icone: visaoIcon, label: "Visão", texto: "Ser reconhecida como referência em consultoria pela excelência técnica e compromisso com o desenvolvimento do setor Agroalimentar  " },
        { icone: valoresIcon, label: "Valores", texto: " Autenticidade com propósito, inovação sustentável e excelência em conformidade. Compromisso socioambiental e relações humanas baseadas em empatia e confiança." }
    ]

    const carsTime = [
        { iconePessoa: fotoFer, nomePessoa: 'Fernanda Flores', primeiroNome: 'Fernanda', descricaoPessoa: 'Médica Veterinária, Mestre e Doutora com ampla experiência no setor agro, unindo trajetória acadêmica e prática profissional. Sócia-fundadora da HAPSE, atua com foco em qualidade, segurança e sustentabilidade...' },
        { iconePessoa: fotoMay, nomePessoa: 'Mayra Vissotto', primeiroNome: 'Mayra', descricaoPessoa: 'Médica Veterinária, Mestre em Ciência Animal e pós-graduanda em Ciência e Tecnologia de Alimentos, com sólida experiência técnica e estratégica no agronegócio. Sócia-fundadora da HAPSE, une vivência...' },
        { iconePessoa: fotoRafa, nomePessoa: 'Rafael Sachet', primeiroNome: 'Rafael', descricaoPessoa: 'Zootecnista e Mestre em Produção Animal, com foco em bovinocultura de corte e ampla experiência acadêmica e prática no agro. Sócio-fundador da HAPSE, atua com ênfase em produção, manejo e gestão...' }
    ]
    return (
        <section className={styles.containerMainQuemSomos}>
            <h1>Quem somos</h1>

            <div className={styles.containerCards}>
                <div className={styles.containerCardLeft}>
                    <article className={styles.articleQuemSomos}>
                        <p>A HAPSE Consultoria nasceu em Caxias do Sul (RS) com o propósito de transformar a cadeia agroalimentar por meio de soluções personalizadas, humanizadas e eficazes. Atuamos diretamente com produtores de alimentos — da agroindústria às propriedades rurais</p>
                    </article>

                    <div>
                        <article className={styles.articleValores}>
                            {cardsValores.map((item, index) => (
                                <div className={styles.cardValores} key={index}>
                                    <img src={item.icone} alt="" />
                                    <span>{item.label}</span>
                                    <p>{item.texto}</p>
                                </div>

                            ))}
                        </article>
                    </div>

                    <button className={styles.ctaQuemSomos}>Fale agora com consultor especialista</button>
                </div>


                <div className={styles.containerCardRight}>
                    <h2>Nosso time</h2>

                    <div className={styles.containerTime}>
                        {carsTime.map((item, index) => (
                            <div className={styles.cardTime} key={index}>
                                <article className={styles.articleTime}>
                                    <img src={item.iconePessoa} alt="" />
                                    
                                    <div className={styles.infosPessoa}>
                                        <span>{item.nomePessoa}</span>
                                        <p>{item.descricaoPessoa}</p>
                                        <a href="/conheca-nosso-time">Saiba mais sobre {item.primeiroNome}</a>
                                    </div>
                                    
                                </article>
                            </div>
                        ))}
                    </div>



                </div>
            </div>
        </section>
    )
}

export default QuemSomos