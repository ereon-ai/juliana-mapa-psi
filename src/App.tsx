import React, { useState } from 'react';
import { Menu, X, Instagram, Mail, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';
import './App.css';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="faq-item" onClick={() => setIsOpen(!isOpen)}>
      <div className="faq-question">
        <h3>{question}</h3>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>
      {isOpen && <div className="faq-answer"><p>{answer}</p></div>}
    </div>
  );
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">Juliana Mapa</div>
          <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <a href="#inicio" onClick={() => setIsMenuOpen(false)}>Início</a>
            <a href="#sobre" onClick={() => setIsMenuOpen(false)}>Sobre Mim</a>
            <a href="#servicos" onClick={() => setIsMenuOpen(false)}>Serviços</a>
            <a href="#faq" onClick={() => setIsMenuOpen(false)}>Dúvidas</a>
            <a href="#contato" onClick={() => setIsMenuOpen(false)}>Contato</a>
          </div>
          <button className="mobile-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <h1>A maneira como contamos nossa história muda a própria história.</h1>
            <p>Juliana Mapa, Psicóloga Clínica. Um espaço seguro de acolhimento e escuta.</p>
            <a href="#contato" className="btn-primary">Agende uma consulta</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="about section-light">
        <div className="container about-content">
          <div className="about-text">
            <h2>Sobre mim</h2>
            <span className="crp">Psicóloga Clínica | CRP XX/XXXXX</span>
            <p><strong>Meu caminho é feito de escuta.</strong> Acredito que a fala tem um potencial transformador. É no encontro clínico que abrimos espaço para elaborar aquilo que dói, que repete e que nos atravessa.</p>
            <p>Ofereço um espaço ético e sigiloso para que você possa falar de si com liberdade, construindo novos contornos para sua própria história.</p>
            <a href="#contato" className="btn-secondary">Fale comigo</a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="services section-warm">
        <div className="container">
          <h2 className="text-center">Meus Serviços</h2>
          <p className="subtitle text-center">"Para ser, temos de nos narrar a nós mesmos"</p>
          <div className="services-grid">
            <div className="service-card">
              <h3>Psicoterapia Individual</h3>
              <p>Atendimento focado em adolescentes e adultos. Um momento de pausa para olhar para suas questões, angústias e potenciais.</p>
            </div>
            <div className="service-card">
              <h3>Atendimento Online</h3>
              <p>Sessões realizadas por videochamada com a mesma ética e profundidade do presencial. Atendimento para todo o Brasil e brasileiros no exterior.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq section-light">
        <div className="container">
          <h2 className="text-center">Dúvidas Frequentes</h2>
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
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="contact section-warm">
        <div className="container">
          <div className="contact-card">
            <h2>Vamos conversar!</h2>
            <p>O tempo se costura em delicadeza e presença. Dê o primeiro passo para o seu cuidado.</p>
            <div className="contact-links">
              <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" className="contact-link">
                <MessageCircle size={24} />
                <span>WhatsApp</span>
              </a>
              <a href="mailto:contato@exemplo.com" className="contact-link">
                <Mail size={24} />
                <span>E-mail</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-brand">
            <h3>Juliana Mapa</h3>
            <p>Psicóloga Clínica</p>
          </div>
          <div className="footer-social">
            <a href="#" aria-label="Instagram"><Instagram /></a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Juliana Mapa. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
