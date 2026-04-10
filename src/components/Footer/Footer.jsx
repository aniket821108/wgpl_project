import './Footer.css'

const footerColumns = [
  {
    heading: 'Company',
    links: ['Home', 'Studio', 'Services', 'Jobs'],
  },
  {
    heading: 'Terms & Policies',
    links: ['Privacy Policy', 'Terms & Conditions', 'Cookies', 'Accessibility'],
  },
  {
    heading: 'Follow Us',
    links: ['Instagram', 'LinkedIn', 'YouTube', 'Twitter'],
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__grid">
          {footerColumns.map((col) => (
            <div key={col.heading} className="footer__col">
              <h4 className="footer__col-heading">{col.heading}</h4>
              <ul className="footer__col-list">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="footer__link">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div className="footer__col">
            <h4 className="footer__col-heading">Terms &amp; Policies</h4>
            <address className="footer__address">
              <p>6896 N Laramie ST</p>
              <p>700 Chicago, IL 43842</p>
              <br />
              <a href="tel:+13124688038" className="footer__link">312-468-8038</a>
              <br />
              <a href="mailto:info@elementum.com" className="footer__link">info@elementum.com</a>
            </address>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">© 2025 Elementum. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
