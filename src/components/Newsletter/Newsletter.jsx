import { useState } from 'react'
import './Newsletter.css'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className="newsletter">
      {/* Purple teardrop decoration */}
      <div className="newsletter__teardrop" />

      {/* Squiggle */}
      <svg className="newsletter__squiggle" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 20 Q40 5, 80 20 T160 20" stroke="#e63946" strokeWidth="2" fill="none" />
      </svg>

      <div className="newsletter__inner reveal">
        <h2 className="newsletter__heading">
          Subscribe to<br />
          our newsletter
        </h2>
        <p className="newsletter__sub">
          To make your stay special and even more memorable
        </p>

        {submitted ? (
          <div className="newsletter__success">
            ✓ You're subscribed! Thanks for joining us.
          </div>
        ) : (
          <form className="newsletter__form" onSubmit={handleSubmit}>
            <button type="submit" className="newsletter__btn">
              Subscribe Now
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
