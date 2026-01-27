import React, { useState } from 'react'
import styles from './styles.module.scss'
import userAvaliacao from '../../assets/svgs/icons/userAvaliacao.svg'

const Avaliacoes = () => {
    const [abertoIndex, setAbertoIndex] = useState<number | null>(null)

    const avaliacoesOriginal = [
        { icone: userAvaliacao, nome: "João Fraga", empresa: "vulgo empres", stars: 4.5, descricao: "Excelente consultoria! Profissionais muito competentes, atendimento ágil e soluções personalizadas que realmente fizeram a diferença. Recomendo fortemente!" },
        { icone: userAvaliacao, nome: "Maria Silva", empresa: "Agro Top", stars: 5.0, descricao: "Atendimento ágil e soluções personalizadas que realmente fizeram a diferença no nosso dia a dia." },
        { icone: userAvaliacao, nome: "Carlos Souza", empresa: "Fazenda Sol", stars: 4.0, descricao: "Recomendo fortemente o trabalho da Hapse, trouxeram clareza para nossos processos produtivos." },
        { icone: userAvaliacao, nome: "Ana Lima", empresa: "Laticínios X", stars: 4.5, descricao: "Profissionais que entendem do campo e da indústria. Ajudaram muito na nossa certificação." },
        { icone: userAvaliacao, nome: "Pedro Rocha", empresa: "Cooperativa Sul", stars: 5.0, descricao: "Parceria de longa data. Sempre inovando e trazendo soluções sustentáveis para o agro." },
        { icone: userAvaliacao, nome: "Lucas Mendes", empresa: "Mendes Agro", stars: 4.5, descricao: "Consultoria séria e comprometida com resultados. O plano estratégico foi fundamental." },
    ]


    const whatsappNumber = "5554996797398"; 
  const whatsappMessage ="Olá! Gostaria de saber mais sobre os serviços da HAPSE Consultoria";

   
    const avaliacoesInfinitas = [...avaliacoesOriginal, ...avaliacoesOriginal, ...avaliacoesOriginal]

    const perguntasFrequentes = [
        {pergunta: "Por que HAPSE consultoria Agroalimentar?", resposta: "O nome HAPSE traduz nossa essência e propósito. Ele representa a ideia de conectar e fortalecer todo o sistema agroalimentar, atuando como elo estratégico entre produção, indústria e consumo. Com visão estratégica em transformar desafios do setor em resultados sólidos, inovadores e sustentáveis. Também reflete os pilares que guiam nossa atuação: Humanidade, Alimento, Produção, Sustentabilidade e Estratégia."},
        {pergunta: "O que são Sistemas Agroalimentares?", resposta: "O nome HAPSE traduz nossa essência e propósito. Ele representa a ideia de conectar e fortalecer todo o sistema agroalimentar, atuando como elo estratégico entre produção, indústria e consumo. Com visão estratégica em transformar desafios do setor em resultados sólidos, inovadores e sustentáveis. Também reflete os pilares que guiam nossa atuação: Humanidade, Alimento, Produção, Sustentabilidade e Estratégia."},
        {pergunta: "Em que áreas um consultor Agroalimentar atua?", resposta: "O nome HAPSE traduz nossa essência e propósito. Ele representa a ideia de conectar e fortalecer todo o sistema agroalimentar, atuando como elo estratégico entre produção, indústria e consumo. Com visão estratégica em transformar desafios do setor em resultados sólidos, inovadores e sustentáveis. Também reflete os pilares que guiam nossa atuação: Humanidade, Alimento, Produção, Sustentabilidade e Estratégia."},
        {pergunta: "Quando devo procurar um consultor agroalimentar?", resposta: "O nome HAPSE traduz nossa essência e propósito. Ele representa a ideia de conectar e fortalecer todo o sistema agroalimentar, atuando como elo estratégico entre produção, indústria e consumo. Com visão estratégica em transformar desafios do setor em resultados sólidos, inovadores e sustentáveis. Também reflete os pilares que guiam nossa atuação: Humanidade, Alimento, Produção, Sustentabilidade e Estratégia."}
    ]

    const togglePergunta = (index: number) => {
        setAbertoIndex(abertoIndex === index ? null : index)
    }

    const renderStars = (rating: number) => {
        const stars = []
        const fullStars = Math.floor(rating)
        const hasHalfStar = rating % 1 !== 0
        const emptyStars = 5 - Math.ceil(rating)

        for (let i = 0; i < fullStars; i++) {
            stars.push(<svg key={`full-${i}`} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 1L12.9389 6.90983L19.5106 7.84549L14.7553 12.4902L15.8779 19.0451L10 15.9598L4.12215 19.0451L5.24472 12.4902L0.489435 7.84549L7.06107 6.90983L10 1Z" fill="#FFD700"/></svg>)
        }
        if (hasHalfStar) {
            stars.push(<svg key="half" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="half-fill"><stop offset="50%" stopColor="#FFD700"/><stop offset="50%" stopColor="#E0E0E0"/></linearGradient></defs><path d="M10 1L12.9389 6.90983L19.5106 7.84549L14.7553 12.4902L15.8779 19.0451L10 15.9598L4.12215 19.0451L5.24472 12.4902L0.489435 7.84549L7.06107 6.90983L10 1Z" fill="url(#half-fill)"/></svg>)
        }
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<svg key={`empty-${i}`} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 1L12.9389 6.90983L19.5106 7.84549L14.7553 12.4902L15.8779 19.0451L10 15.9598L4.12215 19.0451L5.24472 12.4902L0.489435 7.84549L7.06107 6.90983L10 1Z" fill="#E0E0E0"/></svg>)
        }
        return stars
    }

    return (
        <section className={styles.containerMainAvaliacoes}>
            <h1>Avaliações</h1>

            <div className={styles.marqueeContainer}>
                <div className={styles.marqueeTrack}>
                    {avaliacoesInfinitas.map((card, index) => (
                        <div className={styles.card} key={index}>
                            <div className={styles.perfil}>
                                <img src={card.icone} alt="" />
                                <div className={styles.infosPerfil}>
                                    <p>{card.nome}</p>
                                    <span>{card.empresa}</span>
                                </div>
                            </div>
                            <div className={styles.starsAvaliaco}>
                                {renderStars(card.stars)}
                            </div>
                            <p>{card.descricao}</p>
                        </div>
                    ))}
                </div>
            </div>

            <h2 className={styles.subtitleAvaliacoes}>Perguntas frequentes</h2>
            
            <section className={styles.contPerguntasFrequentes}>
                {perguntasFrequentes.map((item, index) => (
                    <div 
                        className={`${styles.cardPergunta} ${abertoIndex === index ? styles.aberto : ''}`} 
                        key={index} 
                        onClick={() => togglePergunta(index)}
                    >
                        <h5>{item.pergunta}</h5>
                        <p>{item.resposta}</p>
                        <a className={styles.ctaCardPerguntas} href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" rel="noopener noreferrer">Fale com um consultor</a>
                    </div>
                ))}
            </section>
        </section> 
    )
}

export default Avaliacoes;