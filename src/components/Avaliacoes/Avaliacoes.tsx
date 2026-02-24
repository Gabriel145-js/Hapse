import { useState, useRef } from 'react'
import styles from './styles.module.scss'

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const avaliacao1 = '/imgs/pessoasAvaliacoes/avaliacaoUm.jpeg'
const avaliacao2 = '/imgs/pessoasAvaliacoes/vieiraEventos.jpeg'
const avaliacao3 = '/imgs/pessoasAvaliacoes/avaliacaoTres.jpeg'
const avaliacao4 = '/imgs/pessoasAvaliacoes/casaBiasotto.jpeg'
const avaliacao5 = '/imgs/pessoasAvaliacoes/avaliacaoCinco.jpeg'

const CHAR_LIMIT = 55

const Avaliacoes = () => {
    const [abertoIndex, setAbertoIndex] = useState<number | null>(null)
    const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set())
    const marqueeTrackRef = useRef<HTMLDivElement>(null)

    const avaliacoesOriginal = [
        { icone: avaliacao1, nome: "Bruna Ferreira ", empresa: "", stars: 5.0, descricao: "A Hapse possui profissionais proativos, com amplo conhecimento técnico em alimentos e grande disponibilidade. Como atuo em serviço de inspeção municipal, tenho total segurança e confiança para indicar o trabalho da equipe às agroindústrias que fiscalizo." },
        { icone: avaliacao2, nome: "Roque Vieira", empresa: "Vieira eventos", stars: 5.0, descricao: "A HAPSE está ajudando no momento certo, oferecendo suporte em consultoria e organização de documentos, o que sempre foi uma grande dificuldade. Embora muitos avaliem apenas o custo, o trabalho da HAPSE evita dores de cabeça futuras. São profissionais qualificados na área de alimentos, prestando apoio essencial ao meu empreendimento em gastronomia. A empresa contribui tanto para meu negócio quanto para o desenvolvimento de Caxias do Sul" },
        { icone: avaliacao3, nome: "Pedro Machado", empresa: "", stars: 5.0, descricao: "A HAPSE consultoria alimentar, fundada por professores da universidade UNIFTEC, tem o objetivo de ajudar pequenas, medias e grandes empresas na área da inspeção alimentar e no auxílio ao pequeno produtor na regulamentação de seu próprio negócio relacionado a produção de origem animal." },
        { icone: avaliacao4, nome: "Casa Biasotto", empresa: "Casa Biasotto", stars: 5.0, descricao: "A Casa Biasotto agradece à Hapse pela Consultoria Agroalimentar Estratégica pelo excelente trabalho desenvolvido e marcado por profissionalismo. A atuação da Fernanda foi fundamental, sempre demonstrando profundo conhecimento técnico, sensibilidade às necessidades do negócio e comprometimento com os resultados. A parceria agregou valor real às nossas decisões e trouxe segurança ao processo. Recomendamos com confiança e satisfação." },
        { icone: avaliacao5, nome: "Suelen Bitencurt", empresa: "", stars: 5.0, descricao: "Ótimos profissionais, preparados para suprir as necessidades de sua empresa, prestando todo suporte e acessória necessária. Indico a HAPSE, a todo empreendedor que desejar ter melhorias contínuas, e estar atualizado ao mercado." },
    ]

    const whatsappNumber = "5554996797398"
    const whatsappMessage = "Olá! Gostaria de saber mais sobre os serviços da HAPSE Consultoria"

    const avaliacoesInfinitas = [...avaliacoesOriginal, ...avaliacoesOriginal, ...avaliacoesOriginal]

    const perguntasFrequentes = [
        { pergunta: "Por que HAPSE consultoria Agroalimentar?", resposta: "O nome HAPSE traduz nossa essência e propósito. Ele representa a ideia de conectar e fortalecer todo o sistema agroalimentar, atuando como elo estratégico entre produção, indústria e consumo. Com visão estratégica em transformar desafios do setor em resultados sólidos, inovadores e sustentáveis. Também reflete os pilares que guiam nossa atuação: Humanidade, Alimento, Produção, Sustentabilidade e Estratégia." },
        { pergunta: "O que são Sistemas Agroalimentares?", resposta: "O nome HAPSE traduz nossa essência e propósito. Ele representa a ideia de conectar e fortalecer todo o sistema agroalimentar, atuando como elo estratégico entre produção, indústria e consumo. Com visão estratégica em transformar desafios do setor em resultados sólidos, inovadores e sustentáveis. Também reflete os pilares que guiam nossa atuação: Humanidade, Alimento, Produção, Sustentabilidade e Estratégia." },
        { pergunta: "Em que áreas um consultor Agroalimentar atua?", resposta: "O nome HAPSE traduz nossa essência e propósito. Ele representa a ideia de conectar e fortalecer todo o sistema agroalimentar, atuando como elo estratégico entre produção, indústria e consumo. Com visão estratégica em transformar desafios do setor em resultados sólidos, inovadores e sustentáveis. Também reflete os pilares que guiam nossa atuação: Humanidade, Alimento, Produção, Sustentabilidade e Estratégia." },
        { pergunta: "Quando devo procurar um consultor agroalimentar?", resposta: "O nome HAPSE traduz nossa essência e propósito. Ele representa a ideia de conectar e fortalecer todo o sistema agroalimentar, atuando como elo estratégico entre produção, indústria e consumo. Com visão estratégica em transformar desafios do setor em resultados sólidos, inovadores e sustentáveis. Também reflete os pilares que guiam nossa atuação: Humanidade, Alimento, Produção, Sustentabilidade e Estratégia." }
    ]

    const togglePergunta = (index: number) => {
        setAbertoIndex(abertoIndex === index ? null : index)
    }

    const toggleExpand = (e: React.MouseEvent, originalIndex: number) => {
        e.stopPropagation()
        setExpandedCards(prev => {
            const next = new Set(prev)
            if (next.has(originalIndex)) {
                next.delete(originalIndex)
            } else {
                next.add(originalIndex)
            }
            return next
        })
    }

    const handleSlideChange = () => {
        setExpandedCards(new Set())
    }

    // Desktop marquee: pause on mousedown, resume on mouseup/mouseleave
    const handleMarqueeMouseDown = () => {
        if (marqueeTrackRef.current) {
            marqueeTrackRef.current.style.animationPlayState = 'paused'
        }
    }
    const handleMarqueeResume = () => {
        if (marqueeTrackRef.current) {
            marqueeTrackRef.current.style.animationPlayState = 'running'
        }
    }

    const renderStars = (rating: number) => {
        const stars = []
        const fullStars = Math.floor(rating)
        const hasHalfStar = rating % 1 !== 0
        const emptyStars = 5 - Math.ceil(rating)
        for (let i = 0; i < fullStars; i++) {
            stars.push(<svg key={`full-${i}`} width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 1L12.9389 6.90983L19.5106 7.84549L14.7553 12.4902L15.8779 19.0451L10 15.9598L4.12215 19.0451L5.24472 12.4902L0.489435 7.84549L7.06107 6.90983L10 1Z" fill="#FFD700" /></svg>)
        }
        if (hasHalfStar) {
            stars.push(<svg key="half" width="20" height="20" viewBox="0 0 20 20" fill="none"><defs><linearGradient id="half-fill"><stop offset="50%" stopColor="#FFD700" /><stop offset="50%" stopColor="#E0E0E0" /></linearGradient></defs><path d="M10 1L12.9389 6.90983L19.5106 7.84549L14.7553 12.4902L15.8779 19.0451L10 15.9598L4.12215 19.0451L5.24472 12.4902L0.489435 7.84549L7.06107 6.90983L10 1Z" fill="url(#half-fill)" /></svg>)
        }
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<svg key={`empty-${i}`} width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 1L12.9389 6.90983L19.5106 7.84549L14.7553 12.4902L15.8779 19.0451L10 15.9598L4.12215 19.0451L5.24472 12.4902L0.489435 7.84549L7.06107 6.90983L10 1Z" fill="#E0E0E0" /></svg>)
        }
        return stars
    }

    // Desktop card: CSS truncate only, no button (height must stay fixed for marquee)
    const DesktopCardContent = ({ card }: { card: typeof avaliacoesOriginal[0] }) => (
        <>
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
            {/* Desktop: pure CSS truncate, no expand button to avoid layout shift */}
            <p className={styles.descricaoDesktop}>{card.descricao}</p>
        </>
    )

    // Mobile card: "ver mais" button + expand
    const MobileCardContent = ({
        card,
        cardIndex,
    }: {
        card: typeof avaliacoesOriginal[0]
        cardIndex: number
    }) => {
        const needsTruncate = card.descricao.length > CHAR_LIMIT
        const isExpanded = expandedCards.has(cardIndex)

        return (
            <>
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
                {needsTruncate ? (
                    <div className={styles.descricaoWrap}>
                        <p className={styles.descricaoMobile}>
                            {isExpanded ? card.descricao : `${card.descricao.slice(0, CHAR_LIMIT)}...`}
                        </p>
                        <button
                            className={styles.verMaisBtn}
                            onClick={(e) => toggleExpand(e, cardIndex)}
                        >
                            {isExpanded ? 'Ver menos ▲' : 'Ver mais ▼'}
                        </button>
                    </div>
                ) : (
                    <p className={styles.descricaoMobile}>{card.descricao}</p>
                )}
            </>
        )
    }

    return (
        <section className={styles.containerMainAvaliacoes}>
            <h1>Avaliações</h1>

            {/* ── Desktop: marquee com pause no clique ── */}
            <div
                className={`${styles.marqueeContainer} ${styles.desktopOnly}`}
                onMouseDown={handleMarqueeMouseDown}
                onMouseUp={handleMarqueeResume}
                onMouseLeave={handleMarqueeResume}
                style={{ cursor: 'grab' }}
            >
                <div className={styles.marqueeTrack} ref={marqueeTrackRef}>
                    {avaliacoesInfinitas.map((card, index) => (
                        <div className={styles.card} key={index}>
                            <DesktopCardContent card={card} />
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Mobile: Swiper slider ── */}
            <div className={`${styles.mobileSlider} ${styles.mobileOnly}`}>
                <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    spaceBetween={16}
                    slidesPerView={1}
                    loop={true}
                    onSlideChange={handleSlideChange}
                >
                    {avaliacoesOriginal.map((card, index) => (
                        <SwiperSlide key={index}>
                            <div className={`${styles.card} ${expandedCards.has(index) ? styles.cardExpandido : ''}`}>
                                <MobileCardContent card={card} cardIndex={index} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
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
                        <a
                            className={styles.ctaCardPerguntas}
                            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Fale com um consultor
                        </a>
                    </div>
                ))}
            </section>
        </section>
    )
}

export default Avaliacoes;