import './Testimonials.css'

const sidePhotos = [
  { id: 1, img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face', side: 'left', top: '10%' },
  { id: 2, img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face', side: 'left', top: '45%' },
  { id: 3, img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face', side: 'left', top: '75%' },
  { id: 4, img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face', side: 'right', top: '15%' },
  { id: 5, img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face', side: 'right', top: '50%' },
  { id: 6, img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face', side: 'right', top: '78%' },
]

export default function Testimonials() {
  return (
    <section className="testimonials">
      {/* Side avatar photos */}
      {sidePhotos.map((p) => (
        <div
          key={p.id}
          className={`testimonials__side-photo testimonials__side-photo--${p.side}`}
          style={{ top: p.top }}
        >
          <img src={p.img} alt="" />
        </div>
      ))}

      <div className="testimonials__inner reveal">
        <h2 className="testimonials__heading">
          What our customer<br />
          says <span className="underline-wavy">About Us</span>
        </h2>

        <div className="testimonials__card">
          <span className="testimonials__quote-mark testimonials__quote-mark--open">"</span>
          <p className="testimonials__quote">
            Elementum delivered the site with in the timeline as they requested.
            In the end, the client found a 50% increase in traffic with in days since its launch.
            They also had an impressive ability to use technologies that the company hasn't used,
            which have also proved to be easy to use and reliable.
          </p>
          <span className="testimonials__quote-mark testimonials__quote-mark--close">"</span>
        </div>
      </div>
    </section>
  )
}
