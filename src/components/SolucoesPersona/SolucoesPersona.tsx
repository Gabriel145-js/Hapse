import React from 'react'
import iconeUsers from '../../assets/svgs/icons/users-bold.svg'
import iconeCerebro from '../../assets/svgs/icons/brain-bold.svg'
import iconeRocket from '../../assets/svgs/icons/rocket-bold.svg'
import styles from './styles.module.scss'

const SolucoesPersona = () => {
    return (
        <section className={styles.containerMainSolucoes}>
            <h1 className={styles.titSolucoes}>Soluções Personalizadas</h1>

            <div className={styles.cardsProposta}>
                <div className={styles.cardRight}>
                    <h4>Proposta personalizada</h4>
                    <p>Cada propriedade é única, cada desafio é específico.
                        Por isso, criamos soluções exclusivas que se adaptam perfeitamente ao seu negócio e seus objetivos.</p>
                    <a href="">Solicitar consulta agora</a>
                </div>

                <div className={styles.cardLeft}>
                    <ul>
                        <li>Escuta Humanizada</li>
                        <li>Processo ágil e eficiente</li>
                        <li>Comunicação transparente </li>
                        <li>Suporte contínuo e especializado</li>
                        <li>Relacionamento próximo e dedicado</li>
                    </ul>
                </div>
            </div>

            <h4 className={styles.titLinhaTempo}>Ciclo de Personalização</h4>
            <div className={styles.linhaTempoPersona}>
                <div className={styles.cardLinha}>
                    <span className={styles.numeroCardLinha}>1</span>
                    <img src={iconeUsers} alt="" />
                    <h4>Diagnóstico Inicial</h4>
                    <p>Reunião para entender necessidades específicas e desafios.</p>
                    <span className={styles.tag}>100% Personalizado</span>
                </div>
                <span className={styles.setaCards}></span>
                <div className={styles.cardLinha}>
                    <span className={styles.numeroCardLinha}>2</span>
                    <img src={iconeCerebro} alt="" />
                    <h4>Análise Estratégica</h4>
                    <p>Nossa equipe desenvolve estratégias sob medida para atender seus objetivos</p>
                    <span className={styles.tag}>Expertise Técnica</span>
                </div>
                <span className={styles.setaCards}></span>
                <div className={styles.cardLinha}>
                    <span className={styles.numeroCardLinha}>3</span>
                    <img src={iconeRocket} alt="" />
                    <h4>Implementação</h4>
                    <p>Acompanhamento completo durante toda a execução do projeto</p>
                    <span className={styles.tag}>Resultados Garantidos</span>
                </div>

            </div>
        </section>
    )
}

export default SolucoesPersona