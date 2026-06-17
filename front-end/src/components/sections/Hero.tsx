// components/sections/Hero.tsx
function Hero() {
    return (
        <section className="hero">
            <span className="hero-tag">Ranking Performável</span>
            <h1 className="hero-title">
                Centro de <span className="hero-highlight">Formação</span> de Lutadores
            </h1>
            <p className="hero-text">
                Forjamos campeões no tatame e na vida. Disciplina, técnica e tradição unidas ao treinamento de alto rendimento.
            </p>
            <div className="hero-actions">
                <button className="btn btn-primary">Agendar treinamento</button>
                <button className="btn btn-outline">Conhecer planos</button>
            </div>
        </section>
    );
}

export default Hero;