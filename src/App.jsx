import './App.css'

// Imagenes locales
import hummus1 from './assets/hummus1.jpg'
import hummus2 from './assets/hummus2.jpg'
import hummus3 from './assets/hummus3.jpg'
import hummus4 from './assets/hummus4.jpg'
import hummus5 from './assets/hummus5.jpg'
import hummus6 from './assets/hummus6.jpg'

const INSTAGRAM_URL = 'https://www.instagram.com/p/DaEvh-MNoEn/?igsh=MXA2ZDd3azRvdnY4Zg=='
const WHATSAPP_URL = 'https://wa.me/573003603681'
const EMAIL = 'humussnack@gmail.com'

// ──────────────────────────────────────────────────
// DATA
// ──────────────────────────────────────────────────

const navLinks = [
  { href: '#inicio',      label: 'Inicio' },
  { href: '#empresa',     label: 'Nuestra Empresa' },
  { href: '#variedades',  label: 'Variedades' },
  { href: '#menu',        label: 'Menú' },
  { href: '#historia',    label: 'Historia' },
  { href: '#equipo',      label: 'Nuestro Equipo' },
  { href: '#organigrama', label: 'Organigrama' },
  { href: '#contacto',    label: 'Contáctanos' },
]

// Variedades reales de hummus que ofrece Hummus Snack
const variedades = [
  {
    id: 1,
    name: 'Hummus Clásico Árabe',
    desc: 'Nuestra receta base: garbanzos cocidos al punto, tahini artesanal, limón recién exprimido y un hilo generoso de aceite de oliva extra virgen. Servido con pan árabe tostado y garbanzos enteros por encima.',
    tag: 'El original',
    img: hummus1,
    alt: 'Hummus clásico árabe con aceite de oliva y garbanzos',
  },
  {
    id: 2,
    name: 'Hummus con Pimentón Ahumado',
    desc: 'A nuestra receta clásica le sumamos pimentón rojo ahumado y una pizca de paprika dulce. El resultado es un sabor profundo, ligeramente dulce y con un toque a brasa que lo hace irresistible.',
    tag: 'El favorito',
    img: hummus2,
    alt: 'Hummus con pimentón ahumado y paprika',
  },
  {
    id: 3,
    name: 'Hummus Verde con Cilantro',
    desc: 'Cilantro fresco, perejil y un toque de jalapeño se mezclan con nuestros garbanzos para crear un hummus vibrante, herbáceo y con carácter propio. Perfecto para los que buscan algo diferente.',
    tag: 'Especial del día',
    img: hummus3,
    alt: 'Hummus verde con cilantro y hierbas frescas',
  },
  {
    id: 4,
    name: 'Hummus con Remolacha',
    desc: 'Remolacha asada al horno mezclada con nuestra base cremosa de garbanzos. Un color rosa intenso, sabor suavemente dulce y textura aterciopelada. Tan bonito que da pena comerlo.',
    tag: 'Instagrameable',
    img: hummus4,
    alt: 'Hummus con remolacha rosada en bowl de cerámica',
  },
  {
    id: 5,
    name: 'Snack Pack Completo',
    desc: 'Nuestro combo estrella: hummus árabe clásico + pan pita tostado + bastones de zanahoria y pepino frescos. Todo en una presentación lista para disfrutar al instante. Ideal para llevar.',
    tag: 'Combo',
    img: hummus5,
    alt: 'Snack Pack de Hummus Snack con pan pita y verduras',
  },
  {
    id: 6,
    name: 'Hummus con Maceta Reciclada',
    desc: 'Nuestro plato especial con valor añadido: pide tu Snack Pack y recibe junto a él una maceta de material reciclado, vinilos de colores y un pincel para personalizarla mientras esperas. Arte y sabor en uno.',
    tag: 'Sostenible',
    img: hummus6,
    alt: 'Hummus Snack con maceta reciclada para personalizar',
  },
]

const mvv = [
  {
    id: 'mision',
    title: 'Misión',
    text: 'Compartir la rica cultura árabe y promover la diversidad en Colombia, creando un espacio acogedor y sostenible que ofrece una experiencia gastronómica única y auténtica, transportando a los clientes a un "mundo diferente" a través de sus platos.',
  },
  {
    id: 'vision',
    title: 'Visión',
    text: 'En 5 años, haber crecido en el municipio de Yumbo aumentando el tamaño de nuestro local, y que la población yumbeña nos conozca por nuestra calidad, tanto en personal como en productos e innovación, aportando una forma divertida de cuidar el medio ambiente.',
  },
  {
    id: 'valores',
    title: 'Valores',
    text: 'Responsabilidad ambiental, innovación, calidad, compromiso social, trabajo en equipo, orientación al cliente y transparencia: estos valores guían cada acción de Hummus Snack S.A.S. hacia un crecimiento sostenible y confiable.',
  },
]

const team = [
  { role: 'Gerente',  name: 'Gabriela Meneses',    icon: '👩‍💼', desc: 'Líder y visionaria detrás de Hummus Snack. Apasionada por la gastronomía árabe y el emprendimiento sostenible.' },
  { role: 'Chef',     name: 'Zara Fernanda Ortiz', icon: '👩‍🍳', desc: 'La mente creativa de nuestras recetas. Experta en cocina árabe y en llevar el hummus a otro nivel de sabor.' },
  { role: 'Cajero',   name: 'Juan Pablo Benitez',  icon: '🧾', desc: 'El encargado de que cada transacción sea rápida, clara y con la mejor actitud de servicio.' },
]

// ──────────────────────────────────────────────────
// ICONS
// ──────────────────────────────────────────────────

const IgIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
)

const WaIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const Logo = ({ size = 36 }) => (
  <svg viewBox="0 0 44 44" width={size} height={size} aria-label="Hummus Snack logo" fill="none">
    <circle cx="22" cy="22" r="21" fill="#5a3e1b" />
    <circle cx="22" cy="22" r="18" fill="#8b5e2a" stroke="#c8a96e" strokeWidth="1.5" />
    <ellipse cx="22" cy="26" rx="11" ry="6.5" fill="#f0dba0" />
    <ellipse cx="22" cy="24" rx="9" ry="5" fill="#e8c87a" />
    <circle cx="22" cy="21" r="3.5" fill="#c8893a" />
    <circle cx="17" cy="27" r="1.2" fill="#a06020" opacity=".7" />
    <circle cx="27" cy="28" r="1" fill="#a06020" opacity=".6" />
    <path d="M19 18 Q22 14 25 18" stroke="#6b8c3a" strokeWidth="1.5" strokeLinecap="round" fill="none" />
  </svg>
)

// ──────────────────────────────────────────────────
// APP
// ──────────────────────────────────────────────────

function App() {
  return (
    <>
      {/* ── NAVBAR ─────────────────────────────── */}
      <header className="navbar">
        <div className="navbar-inner">
          <a href="#inicio" className="brand">
            <Logo size={38} />
            <div className="brand-text">
              <span className="brand-name">Hummus Snack</span>
              <span className="brand-slogan">Sabores que alimentan, plantas que decoran.</span>
            </div>
          </a>
          <nav className="nav-links" aria-label="Navegación principal">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-instagram">
              <IgIcon />
              Instagram
            </a>
          </nav>
        </div>
      </header>

      {/* ── HERO ───────────────────────────────── */}
      <section id="inicio" className="hero-section">
        <div className="hero-overlay" />
        <img
          src={hummus1}
          alt="Hummus árabe artesanal Hummus Snack"
          className="hero-bg"
          width="1400" height="700" loading="eager"
        />
        <div className="hero-content">
          <p className="hero-eyebrow">Árabe · Artesanal · Sostenible · Yumbo, Valle del Cauca</p>
          <h1>Hummus Snack</h1>
          <p className="hero-tagline">Sabores que alimentan, plantas que decoran.</p>
          <p className="hero-sub">
            Hummus árabe original hecho con garbanzos frescos, tahini artesanal y la receta de siempre.
            Cuatro variedades únicas para todos los gustos, más nuestra maceta reciclada para que
            crees arte mientras esperas tu pedido.
          </p>
          <div className="hero-cta">
            <a href="#variedades" className="btn btn-primary">Ver variedades</a>
            <a href="#menu" className="btn btn-secondary">Ver menú</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-wa">
              <WaIcon />
              Pedir ahora
            </a>
          </div>
        </div>
      </section>

      {/* ── STRIP DE FOTOS ─────────────────────── */}
      <div className="photo-strip" aria-hidden="true">
        <img src={hummus1} alt="" loading="lazy" />
        <img src={hummus2} alt="" loading="lazy" />
        <img src={hummus3} alt="" loading="lazy" />
        <img src={hummus4} alt="" loading="lazy" />
        <img src={hummus5} alt="" loading="lazy" />
        <img src={hummus6} alt="" loading="lazy" />
      </div>

      {/* ── NUESTRA EMPRESA ────────────────────── */}
      <section id="empresa" className="empresa-section">
        <div className="section-container empresa-grid">
          <div className="empresa-text">
            <p className="section-eyebrow">Nuestra Empresa</p>
            <h2>Misión, Visión y Valores</h2>
            <p className="section-sub">Los pilares que guían cada plato y cada maceta que sale de nuestras manos.</p>
            <div className="mvv-grid">
              {mvv.map((item) => (
                <div key={item.id} className={`mvv-card mvv-${item.id}`}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="empresa-img-wrap">
            <img src={hummus2} alt="Preparación artesanal de hummus en Hummus Snack" loading="lazy" width="600" height="800" />
            <img src={hummus5} alt="Snack Pack completo de Hummus Snack" loading="lazy" width="400" height="400" className="empresa-img-secondary" />
          </div>
        </div>
      </section>

      {/* ── VARIEDADES ─────────────────────────── */}
      <section id="variedades" className="variedades-section">
        <div className="section-container">
          <p className="section-eyebrow">Nuestras Variedades</p>
          <h2>6 razones para volver</h2>
          <p className="section-sub">
            Cada variedad es una receta con identidad propia. Todas preparadas el mismo día con
            ingredientes frescos y sin conservantes.
          </p>
          <div className="variedades-grid">
            {variedades.map((v) => (
              <article key={v.id} className="variedad-card">
                <div className="variedad-img-wrap">
                  <img src={v.img} alt={v.alt} width="600" height="400" loading="lazy" />
                  <span className="variedad-tag">{v.tag}</span>
                </div>
                <div className="variedad-body">
                  <h3>{v.name}</h3>
                  <p>{v.desc}</p>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                    <WaIcon />
                    Pedir este
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── MENÚ ───────────────────────────────── */}
      <section id="menu" className="menu-section">
        <div className="section-container">
          <p className="section-eyebrow">Menú</p>
          <h2>Nuestro Snack Pack</h2>
          <div className="menu-card">
            <div className="menu-img-wrap">
              <img
                src={hummus3}
                alt="Snack Pack Hummus Snack con pan pita y maceta reciclada"
                width="700" height="500" loading="lazy"
              />
            </div>
            <div className="menu-body">
              <h3>🫘 Snack Pack</h3>
              <p>
                Nuestro combo principal incluye el <strong>hummus árabe</strong> hecho a base de
                garbanzos cocidos frescos, pan árabe tostado y una selección de bastones de
                zanahoria y pepino recién cortados.
              </p>
              <p>
                Como valor adicional, si así lo deseas, recibes una{' '}
                <strong>maceta de material reciclado</strong> color blanca, un kit de pequeños
                tarros con distintos vinilos de colores y un pincel, para que desestresarte
                creando tu propio diseño mientras esperas tu pedido.
              </p>
              <ul className="menu-includes">
                <li>✅ Hummus árabe artesanal (variedad a elección)</li>
                <li>✅ Pan árabe tostado al momento</li>
                <li>✅ Bastones de zanahoria y pepino frescos</li>
                <li>✅ Maceta reciclada + kit de pintura (opcional)</li>
              </ul>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-wa">
                <WaIcon />
                Pedir por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── HISTORIA ───────────────────────────── */}
      <section id="historia" className="historia-section">
        <div className="section-container about-grid">
          <div className="about-text">
            <p className="section-eyebrow">Historia</p>
            <h2>¿Cómo nació Hummus Snack?</h2>
            <p>
              <strong>Hummus Snack S.A.S.</strong> fue creada en Yumbo como iniciativa empresarial
              de cuatro socias, con el propósito de{' '}
              <strong>ofrecer alimentos saludables y sostenibles</strong>.
            </p>
            <p>
              Desde su origen integra la producción de hummus en diferentes variedades y el valor
              agregado de <strong>macetas de material reciclado</strong>, consolidándose como una
              propuesta innovadora en el sector gastronómico local.
            </p>
            <p>
              Más que un restaurante, somos un espacio donde la <strong>gastronomía árabe</strong>{' '}
              se encuentra con la creatividad y el cuidado del medio ambiente. Cada plato cuenta
              una historia, cada maceta es una obra de arte en proceso.
            </p>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ig">
              <IgIcon />
              Síguenos en Instagram
            </a>
          </div>
          <div className="about-images">
            <img
              src={hummus4}
              alt="Historia de Hummus Snack, hummus artesanal en Yumbo"
              className="about-img-main"
              width="700" height="500" loading="lazy"
            />
            <img
              src={hummus6}
              alt="Maceta reciclada y hummus, propuesta sostenible de Hummus Snack"
              className="about-img-secondary"
              width="400" height="300" loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ── GALERÍA ────────────────────────────── */}
      <section className="galeria-section" aria-label="Galería de productos">
        <div className="section-container" style={{ textAlign: 'center', paddingBottom: '1.5rem' }}>
          <p className="section-eyebrow">Galería</p>
          <h2>Tan rico que entra por los ojos</h2>
        </div>
        <div className="galeria-grid">
          <img src={hummus1} alt="Hummus clásico árabe" loading="lazy" />
          <img src={hummus2} alt="Hummus con pimentón ahumado" loading="lazy" />
          <img src={hummus3} alt="Hummus verde con cilantro" loading="lazy" />
          <img src={hummus4} alt="Hummus con remolacha" loading="lazy" />
          <img src={hummus5} alt="Snack Pack completo" loading="lazy" />
          <img src={hummus6} alt="Hummus con maceta reciclada" loading="lazy" />
        </div>
      </section>

      {/* ── NUESTRO EQUIPO ─────────────────────── */}
      <section id="equipo" className="equipo-section">
        <div className="section-container">
          <p className="section-eyebrow">Nuestro Equipo</p>
          <h2>Las personas detrás de cada plato</h2>
          <p className="section-sub">Un equipo pequeño, comprometido y lleno de sabor.</p>
          <div className="team-grid">
            {team.map((m) => (
              <div key={m.role} className="team-card">
                <div className="team-icon" aria-hidden="true">{m.icon}</div>
                <p className="team-role">{m.role}</p>
                <h3 className="team-name">{m.name}</h3>
                <p className="team-desc">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ORGANIGRAMA ────────────────────────── */}
      <section id="organigrama" className="org-section">
        <div className="section-container">
          <p className="section-eyebrow">Organigrama</p>
          <h2>Estructura Organizacional</h2>
          <div className="org-chart">
            <div className="org-row">
              <div className="org-node org-main">Gerente</div>
            </div>
            <div className="org-connector-v" />
            <div className="org-row org-staff-row">
              <div className="org-node org-staff">Contador</div>
            </div>
            <div className="org-connector-v" />
            <div className="org-row">
              <div className="org-connector-h" />
            </div>
            <div className="org-row">
              <div className="org-node org-main">Chef</div>
              <div className="org-node org-main">Mesero</div>
              <div className="org-node org-main">Cajero</div>
            </div>
            <div className="org-row org-sub-row">
              <div className="org-node org-sub">Auxiliar del chef</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACTO ───────────────────────────── */}
      <section id="contacto" className="contacto-section">
        <div className="section-container">
          <p className="section-eyebrow">Contáctanos</p>
          <h2>¿Listo para probar el verdadero hummus árabe?</h2>
          <p className="section-sub">Encuéntranos en Yumbo o escríbenos, con gusto te atendemos.</p>
          <div className="contact-grid">
            <div className="contact-info-card">
              <ul className="contact-list">
                <li>
                  <span className="contact-icon">📍</span>
                  <div>
                    <strong>Dirección</strong>
                    <span>Cra. 3A #4-1, Barrio Puerto Isaac,<br />Yumbo, Valle del Cauca</span>
                  </div>
                </li>
                <li>
                  <span className="contact-icon">📞</span>
                  <div>
                    <strong>Teléfono / WhatsApp</strong>
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">300 360 3681</a>
                  </div>
                </li>
                <li>
                  <span className="contact-icon">✉️</span>
                  <div>
                    <strong>Correo electrónico</strong>
                    <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                  </div>
                </li>
                <li>
                  <span className="contact-icon">🕐</span>
                  <div>
                    <strong>Horario de atención</strong>
                    <span>Lunes a viernes: próximamente<br />Fines de semana: próximamente</span>
                  </div>
                </li>
              </ul>
              <div className="contact-actions">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-wa">
                  <WaIcon />
                  WhatsApp
                </a>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ig">
                  <IgIcon />
                  Instagram
                </a>
              </div>
            </div>
            <div className="contact-img-wrap">
              <img
                src={hummus5}
                alt="Snack Pack de Hummus Snack listo para servir"
                width="700" height="500" loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────── */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <Logo size={32} />
            <div>
              <p className="footer-brand-name">Hummus Snack S.A.S.</p>
              <p className="footer-slogan">Sabores que alimentan, plantas que decoran.</p>
            </div>
          </div>
          <div className="footer-links">
            {navLinks.slice(0, 5).map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </div>
          <div className="footer-social">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="social-btn ig" aria-label="Instagram @hummus_snack">
              <IgIcon />
              @hummus_snack
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="social-btn wa" aria-label="WhatsApp">
              <WaIcon />
              300 360 3681
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Hummus Snack S.A.S. — Yumbo, Valle del Cauca, Colombia.</p>
        </div>
      </footer>
    </>
  )
}

export default App
