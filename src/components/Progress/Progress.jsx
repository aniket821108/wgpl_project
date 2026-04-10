import './Progress.css'

export default function Progress() {
  return (
    <section className="progress-section">
      <div className="progress-section__inner">
        {/* Left circular image */}
        <div className="progress-section__image-wrap reveal">
          <div className="progress-section__triangle progress-section__triangle--1" />
          <div className="progress-section__triangle progress-section__triangle--2" />
          <div className="progress-section__circle">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop"
              alt="Team at work"
            />
          </div>
        </div>

        {/* Right text */}
        <div className="progress-section__text reveal">
          <h2 className="progress-section__heading">
            See how we can<br />
            help you progress
          </h2>
          <p className="progress-section__body">
            We add a layer of fearless insights and action that allows change
            makers to accelerate their progress in areas such as brand, design
            digital, comms and social research.
          </p>
          <a href="#" className="progress-section__readmore">
            Read more
            <svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="6" x2="32" y2="6" stroke="#111" strokeWidth="1.5"/>
              <path d="M28 2L34 6L28 10" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Red decorative squiggle */}
      <svg className="progress-section__squiggle" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10 30 Q50 10, 90 30 T170 30 T250 30"
          stroke="#e63946"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </section>
  )
}
