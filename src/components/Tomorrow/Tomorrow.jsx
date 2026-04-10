import './Tomorrow.css'

export default function Tomorrow() {
  return (
    <section className="tomorrow">
      {/* Red glow blob */}
      <div className="tomorrow__blob" />

      <div className="tomorrow__inner">
        {/* Left text col */}
        <div className="tomorrow__text reveal">
          <h2 className="tomorrow__heading">
            <span className="underline-wavy">Tomorrow</span> should<br />
            be better than today
          </h2>
          <p className="tomorrow__body">
            We are a team of strategists, designers communications, researchers.
            Together, we believe that progress only happens when you refuse
            to play things safe.
          </p>
          <a href="#" className="tomorrow__readmore">
            Read more
            <svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="6" x2="32" y2="6" stroke="#111" strokeWidth="1.5"/>
              <path d="M28 2L34 6L28 10" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Right image */}
        <div className="tomorrow__image-wrap reveal">
          {/* Red triangle decoration */}
          <div className="tomorrow__triangle tomorrow__triangle--top" />
          <div className="tomorrow__triangle tomorrow__triangle--bottom" />

          <div className="tomorrow__circle">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=600&fit=crop"
              alt="Team collaboration"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
