import './App.css'

const INSTAGRAM_URL = 'https://www.instagram.com/p/DaEvh-MNoEn/?igsh=MXA2ZDd3azRvdnY4Zg=='

const products = [
  {
    id: 1,
    name: 'Hummus Clásico',
    desc: 'Suave y cremoso, elaborado con garbanzos seleccionados, tahini y un toque de limón fresco.',
    img: 'https://images.unsplash.com/photo-1569096651661-820d0de9b8f7?w=600&q=80',
    alt: 'Bowl de hummus clásico con aceite de oliva y paprika',
  },
  {
    id: 2,
    name: 'Hummus con Verduras',
    desc: 'Nuestro hummus estrella acompañado de vegetales frescos y crujientes del día.',
    img: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&q=80',
    alt: 'Hummus con verduras frescas y pita',
  },
  {
    id: 3,
    name: 'Hummus Especial',
    desc: 'Receta artesanal con especias mediterráneas, pimentón ahumado y hierbas frescas.',
    img: 'https://images.unsplash.com/photo-1604679177433-1e028e07b30f?w=600&q=80',
    alt: 'Hummus especial con especias y hierbas',
  },
]

const IgIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
)

const Logo = ({ size = 36 }) => (
  <svg viewBox="0 0 40 40" width={size} height={size} aria-label="Logo Hummus" fill="none">
    <circle cx="20" cy="20" r="19" fill="#c8893a" />
    <ellipse cx="20" cy="23" rx="11" ry="7" fill="#f5e6c8" />
    <ellipse cx="20" cy="21" rx="9" ry="5" fill="#e8c87a" />
    <circle cx="20" cy="19" r="3" fill="#c8893a" />
  </svg>
)

function App() {
  return (
    <>
      {/* NAVBAR */}
      <header className="navbar">
        <div className="navbar-inner">
          <div className="brand">
            <Logo size={36} />
            <span>Hummus</span>
          </div>
          <nav className="nav-links">
            <a href="#inicio">Inicio</a>
            <a href="#productos">Productos</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#contacto">Contacto</a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-instagram">
              <IgIcon />
              Instagram
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="inicio" className="hero-section">
        <div className="hero-overlay" />
        <img
          src="https://images.unsplash.com/photo-1541519227354-08fa5d50c820?w=1400&q=85"
          alt="Mesa con hummus, pan pita y verduras frescas"
          className="hero-bg"
          width="1400" height="700" loading="eager"
        />
        <div className="hero-content">
          <p className="hero-eyebrow">Artesanal · Fresco · Mediterráneo</p>
          <h1>El sabor auténtico<br />del hummus casero</h1>
          <p className="hero-sub">Preparado diariamente con ingredientes naturales y la receta de siempre.</p>
          <div className="hero-cta">
            <a href="#productos" className="btn btn-primary">Ver productos</a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ig">
              <IgIcon />
              Síguenos en Instagram
            </a>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="productos" className="products-section">
        <div className="section-container">
          <p className="section-eyebrow">Lo que ofrecemos</p>
          <h2>Nuestros Hummus</h2>
          <p className="section-sub">Cada presentación elaborada con cariño y los mejores ingredientes.</p>
          <div className="products-grid">
            {products.map((p) => (
              <article key={p.id} className="product-card">
                <div className="product-img-wrap">
                  <img src={p.img} alt={p.alt} width="600" height="400" loading="lazy" />
                </div>
                <div className="product-body">
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline">Ver más</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="nosotros" className="about-section">
        <div className="section-container about-grid">
          <div className="about-images">
            <img src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=700&q=80"
              alt="Preparación artesanal de hummus" className="about-img-main"
              width="700" height="500" loading="lazy" />
            <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80"
              alt="Plato de hummus con pan pita" className="about-img-secondary"
              width="400" height="300" loading="lazy" />
          </div>
          <div className="about-text">
            <p className="section-eyebrow">Nuestra historia</p>
            <h2>Hecho con pasión,<br />servido con amor</h2>
            <p>Nacimos de una receta familiar transmitida de generación en generación. Cada lote lleva horas de dedicación y el sabor auténtico que solo la tradición puede dar.</p>
            <p>Usamos únicamente garbanzos de primera, tahini artesanal, aceite de oliva extra virgen y limón fresco. Sin conservantes, sin atajos.</p>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <IgIcon />
              Síguenos en Instagram
            </a>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery-section">
        <div className="section-container" style={{ textAlign: 'center' }}>
          <p className="section-eyebrow">Galería</p>
          <h2>Visualmente delicioso</h2>
        </div>
        <div className="gallery-grid">
          <img src="https://images.unsplash.com/photo-1509358271058-acd22cc93898?w=600&q=80" alt="Hummus en bowl de cerámica" width="600" height="600" loading="lazy" />
          <img src="https://images.unsplash.com/photo-1505253668822-42074d58a7c6?w=600&q=80" alt="Hummus con tomates cherry" width="600" height="600" loading="lazy" />
          <img src="https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=600&q=80" alt="Pan pita con hummus" width="600" height="600" loading="lazy" />
          <img src="https://images.unsplash.com/photo-1581956851232-2a4ca25e83df?w=600&q=80" alt="Mesa mediterránea con hummus" width="600" height="600" loading="lazy" />
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className="cta-section">
        <div className="cta-overlay" />
        <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1400&q=80"
          alt="Ingredientes frescos mediterráneos" className="cta-bg"
          width="1400" height="600" loading="lazy" />
        <div className="cta-content">
          <h2>¿Quieres probar nuestro hummus?</h2>
          <p>Encuéntranos en Instagram y conoce nuestros pedidos, sabores especiales y mucho más.</p>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn btn-white">
            <IgIcon />
            Ver en Instagram
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="brand"><Logo size={30} /><span>Hummus</span></div>
          <p className="footer-copy">© {new Date().getFullYear()} Hummus. Hecho con ❤️ y garbanzos.</p>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="footer-ig" aria-label="Instagram">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
        </div>
      </footer>
    </>
  )
}

export default App