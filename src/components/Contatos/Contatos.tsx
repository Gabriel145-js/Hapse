import React from 'react'
import styles from './styles.module.scss'
import logoMini from '../../assets/svgs/logos/logoMini.svg'

const Contatos = () => {
    return (
        <section className={styles.containerMainContatos}>
            <h1>Entre em Contato</h1>

            <div className={styles.containerContatos}>
                <form className={styles.formContatos} action="https://formspree.io/f/{form_id}" method="POST">
                    <div className={styles.form_header}>
                        <h2>Solicite sua Consultoria</h2>
                        <p>Preencha o formulário e nossa equipe entrará em contato em até 24 horas.</p>
                    </div>


                    <div className={styles.fisrtInputs}>
                        <div className={styles.form_group}>
                            <label htmlFor="nome">Nome Completo *</label>
                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                required
                                placeholder="Seu nome completo"
                            />
                        </div>

                        <div className={styles.form_group}>
                            <label htmlFor="email">Seu Email *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                placeholder="seuemail@exemplo.com"
                            />
                        </div>
                    </div>


                    <div className={styles.form_group}>
                        <label htmlFor="assunto">Assunto</label>
                        <input
                            type="text"
                            id="assunto"
                            name="assunto"
                            placeholder="Qual o motivo do contato?"
                        />
                    </div>

                    <div className={styles.form_group}>
                        <label htmlFor="mensagem">Mensagem *</label>
                        <textarea
                            id="mensagem"
                            name="mensagem"
                            rows={6}
                            required
                            placeholder="Descreva noque podemos lhe ajudar."
                        />
                    </div>

                    <button type="submit">
                        Enviar Email
                    </button>
                </form>

                <section className={styles.cardsInfosContatos}>
                    <div className={styles.infosContatos}>
                        <div className={styles.titEsub}>
                            <h4>Informações de Contato</h4>
                            <p>Entre em contato, nossa equipe está pronta para lhe atender</p>
                        </div>

                        <ul>
                            <li className={styles.phoneList}><a href="">(54) 996797398</a></li>
                            <li className={styles.emailList}><a href="">contato@hapseconsultoria.com</a></li>
                            <li className={styles.horarioList}>Segunda à Sexta: 8h às 18h</li>
                        </ul>
                    </div>

                    <div className={styles.cardsDifenciais}>
                        <h5>
                            Por que escolher a gente?
                        </h5>

                        <ul>
                            <li className={styles.list1}>Competência técnica e vivência profissional</li>
                            <li className={styles.list2}>Estratégias sustentáveis e eficientes</li>
                            <li className={styles.list3}>Foco em resultados concretos</li>
                            <li className={styles.list4}>Escuta  ativa e humanizada</li>
                        </ul>

                        <img className={styles.logoCardDiferenciais} src={logoMini} alt="" />
                    </div>
                </section>
            </div>

        </section>
    )
}

export default Contatos