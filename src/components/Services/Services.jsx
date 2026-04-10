import './Services.css'

const services = [
  {
    id: 1,
    tag: 'Office of multiple interest content',
    title: 'Collaborative & partnership',
  },
  {
    id: 2,
    tag: 'The hanger US Air force digital experiments',
    title: 'We talk about our weight',
  },
  {
    id: 3,
    tag: 'Delta faucer content, social, digital',
    title: 'Piloting digital confidence',
  },
]

export default function Services() {
  return (
    <section className="services">
      {/* Decorative squiggle */}
      <svg className="services__deco" viewBox="0 0 300 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 40 Q75 10, 150 40 T300 40" stroke="#e63946" strokeWidth="2" fill="none" />
      </svg>

      <div className="services__inner">
        <h2 className="services__heading reveal">
          What we <span className="highlight-green">can</span><br />
          <span className="highlight-green">offer</span> you!
        </h2>

        <div className="services__list">
          {services.map((s, i) => (
            <div key={s.id} className="services__item reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="services__item-left">
                <span className="services__tag">{s.tag}</span>
              </div>
              <div className="services__item-right">
                <h3 className="services__title">{s.title}</h3>
              </div>
              <div className="services__arrow">
                <svg width="36" height="12" viewBox="0 0 36 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0" y1="6" x2="28" y2="6" stroke="#111" strokeWidth="1.5"/>
                  <path d="M24 2L30 6L24 10" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
