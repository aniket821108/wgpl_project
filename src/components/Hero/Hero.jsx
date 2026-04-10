import './Hero.css'

const teamMembers = [
  { id: 1, img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face', style: { top: '15%', left: '5%', width: '110px' } },
  { id: 2, img: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=200&h=200&fit=crop&crop=face', style: { top: '5%', left: '22%', width: '130px' } },
  { id: 3, img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face', style: { top: '0%', left: '42%', width: '100px' } },
  { id: 4, img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=200&fit=crop&crop=face', style: { top: '10%', left: '58%', width: '120px' } },
  { id: 5, img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop&crop=face', style: { top: '2%', left: '75%', width: '105px' } },
  { id: 6, img: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=200&h=200&fit=crop&crop=face', style: { top: '18%', left: '88%', width: '95px' } },
]

export default function Hero() {
  return (
    <section className="hero">
      {/* Decorative SVG squiggle */}
      <svg className="hero__squiggle" viewBox="0 0 120 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M60 10 C20 60, 100 110, 60 160 C20 210, 100 250, 60 290"
          stroke="#e63946"
          strokeWidth="2"
          fill="none"
          strokeDasharray="1000"
          strokeDashoffset="0"
        />
      </svg>

      {/* Purple teardrop */}
      <div className="hero__teardrop" />

      <div className="hero__content">
        <h1 className="hero__headline reveal">
          The <span className="underline-wavy">thinkers</span> and<br />
          doers were <span className="highlight-pink">changing</span><br />
          the <span className="highlight-green">status</span> Quo with
        </h1>

        <p className="hero__sub reveal">
          We are a team of strategists, designers communications, researchers. Together,
          we believe that progress only happenins when you refuse to play things safe.
        </p>

        {/* Team member photos */}
        <div className="hero__photos reveal">
          {teamMembers.map((m) => (
            <div
              key={m.id}
              className="hero__photo-wrap"
              style={m.style}
            >
              <img
                src={m.img}
                alt={`Team member ${m.id}`}
                className="hero__photo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
