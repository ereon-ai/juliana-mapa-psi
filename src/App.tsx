import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  Mail,
  MessageCircle,
  ChevronDown,
  Heart,
  Video,
  Sparkles,
  Quote,
} from 'lucide-react';
import './App.css';

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.5" y1="6.5" y2="6.5" />
  </svg>
);

type RevealProps = { children: React.ReactNode; delay?: number };
const Reveal: React.FC<RevealProps> = ({ children, delay = 0 }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <button
        className="faq-question"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3>{question}</h3>
        <span className="faq-chevron"><ChevronDown size={20} /></span>
      </button>
      <div className="faq-answer-wrapper">
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <a href="#inicio" className="logo" onClick={closeMenu}>Juliana Mapa</a>
          <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <a href="#inicio" onClick={closeMenu}>Início</a>
            <a href="#sobre" onClick={closeMenu}>Sobre Mim</a>
            <a href="#servicos" onClick={closeMenu}>Serviços</a>
            <a href="#faq" onClick={closeMenu}>Dúvidas</a>
            <a href="#contato" onClick={closeMenu} className="nav-cta">Contato</a>
          </div>
          <button
            className="mobile-menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="hero">
        <div className="hero-decor hero-decor-1" aria-hidden />
        <div className="hero-decor hero-decor-2" aria-hidden />
        <div className="container hero-content">
          <Reveal>
            <div className="hero-text">
              <span className="eyebrow">Psicologia Clínica</span>
              <h1>A maneira como contamos nossa história muda a própria <em>história</em>.</h1>
              <p>Juliana Mapa, Psicóloga Clínica. Um espaço seguro de acolhimento e escuta — para você se narrar com liberdade.</p>
              <div className="hero-cta">
                <a href="#contato" className="btn-primary">Agende uma consulta</a>
                <a href="#sobre" className="btn-link">Conheça meu trabalho</a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="hero-image">
              <div className="hero-image-shadow" aria-hidden />
              <div className="hero-image-frame">
                <img
                  src="https://picsum.photos/seed/julianamapa-hero/720/900"
                  alt=""
                  loading="eager"
                />
              </div>
              <span className="hero-quote" aria-hidden>
                <Quote size={18} />
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="about">
        <div className="container about-content">
          <Reveal>
            <div className="about-image">
              <img
                src="https://picsum.photos/seed/julianamapa-portrait/640/780"
                alt="Retrato de Juliana Mapa"
                loading="lazy"
              />
              <span className="about-image-frame" aria-hidden />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="about-text">
              <span className="eyebrow">Sobre mim</span>
              <h2>Meu caminho é feito de escuta.</h2>
              <span className="crp">Psicóloga Clínica · CRP XX/XXXXX</span>
              <p>Acredito que a fala tem um potencial transformador. É no encontro clínico que abrimos espaço para elaborar aquilo que dói, que repete e que nos atravessa.</p>
              <p>Ofereço um espaço ético e sigiloso para que você possa falar de si com liberdade, construindo novos contornos para sua própria história.</p>
              <ul className="about-tags" aria-label="Áreas de atuação">
                <li>Ansiedade</li>
                <li>Relacionamentos</li>
                <li>Autoconhecimento</li>
                <li>Luto</li>
                <li>Transições de vida</li>
              </ul>
              <a href="#contato" className="btn-secondary">Fale comigo</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="services">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow center">Serviços</span>
              <h2 className="text-center">Como podemos caminhar juntos</h2>
              <p className="subtitle text-center">"Para ser, temos de nos narrar a nós mesmos."</p>
            </div>
          </Reveal>
          <div className="services-grid">
            <Reveal delay={0}>
              <article className="service-card">
                <span className="service-icon"><Heart size={26} strokeWidth={1.6} /></span>
                <h3>Psicoterapia Individual</h3>
                <p>Atendimento focado em adolescentes e adultos. Um momento de pausa para olhar para suas questões, angústias e potenciais.</p>
              </article>
            </Reveal>
            <Reveal delay={120}>
              <article className="service-card">
                <span className="service-icon"><Video size={26} strokeWidth={1.6} /></span>
                <h3>Atendimento Online</h3>
                <p>Sessões realizadas por videochamada com a mesma ética e profundidade do presencial. Para todo o Brasil e brasileiros no exterior.</p>
              </article>
            </Reveal>
            <Reveal delay={240}>
              <article className="service-card">
                <span className="service-icon"><Sparkles size={26} strokeWidth={1.6} /></span>
                <h3>Primeira Conversa</h3>
                <p>Um primeiro encontro para alinharmos suas demandas e entendermos juntos como a terapia pode te apoiar nesse momento.</p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq">
        <div className="container faq-container">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow center">Dúvidas Frequentes</span>
              <h2 className="text-center">Antes de começar</h2>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="faq-list">
              <FAQItem
                question="Como é a primeira sessão?"
                answer="A primeira sessão é um momento de conhecermos sua demanda, como você se sente e alinharmos como a terapia pode te ajudar. É também o espaço para tirar todas as suas dúvidas sobre o processo."
              />
              <FAQItem
                question="Qual a duração e frequência das sessões?"
                answer="As sessões duram em média 50 minutos e, geralmente, acontecem uma vez por semana, de acordo com a necessidade de cada paciente."
              />
              <FAQItem
                question="Como funciona o atendimento online?"
                answer="O atendimento online ocorre via plataforma de videochamada segura (Google Meet ou similar). Você precisará apenas de uma boa conexão com a internet e um lugar privativo onde se sinta à vontade para falar."
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="contact">
        <div className="container">
          <Reveal>
            <div className="contact-card">
              <span className="eyebrow center">Contato</span>
              <h2>Vamos conversar?</h2>
              <p>O tempo se costura em delicadeza e presença. Dê o primeiro passo para o seu cuidado — responderei o quanto antes.</p>
              <div className="contact-links">
                <a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <MessageCircle size={20} strokeWidth={1.8} />
                  <span>WhatsApp</span>
                </a>
                <a href="mailto:contato@exemplo.com" className="contact-link">
                  <Mail size={20} strokeWidth={1.8} />
                  <span>E-mail</span>
                </a>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <Instagram />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-brand">
            <h3>Juliana Mapa</h3>
            <p>Psicóloga Clínica · CRP XX/XXXXX</p>
          </div>
          <nav className="footer-links" aria-label="Rodapé">
            <a href="#inicio">Início</a>
            <a href="#sobre">Sobre</a>
            <a href="#servicos">Serviços</a>
            <a href="#contato">Contato</a>
          </nav>
          <div className="footer-social">
            <a href="#" aria-label="Instagram"><Instagram /></a>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>&copy; {new Date().getFullYear()} Juliana Mapa. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
