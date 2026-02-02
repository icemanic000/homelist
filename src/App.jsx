import React from 'react'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="hero">
        <div className="hero-content">
          <h1 className="name">Stinches</h1>
          <p className="title">Full-stack розробник | Спеціаліст з AI-автоматизації та DevOps</p>
          <p className="description">
            Я допомагаю бізнесу та стартапам оптимізувати робочі процеси, впроваджувати штучний інтелект у готові продукти та розгортати надійну серверну інфраструктуру. Мій підхід базується на глибокому розумінні архітектури систем — від «заліза» до сучасних хмарних рішень та інтерактивних інтерфейсів на React.
          </p>
          <div className="cta">
            <a href="https://t.me/stinches" target="_blank" rel="noopener noreferrer" className="contact-btn">
              Зв'язатися через Telegram
            </a>
          </div>
        </div>
      </header>

      <section className="services">
        <h2 className="section-title">Що я пропоную:</h2>
        
        <div className="service-category">
          <div className="category-header">
            <span className="emoji">🤖</span>
            <h3>AI та інтелектуальна автоматизація</h3>
          </div>
          <div className="services-grid">
            <div className="service-item">
              <h4>Побудова сценаріїв у n8n</h4>
              <p>Автоматизація складних бізнес-процесів та обробки даних без зайвих витрат часу.</p>
            </div>
            <div className="service-item">
              <h4>Інтеграція нейромереж</h4>
              <p>Впровадження GPT, Claude, Gemini через API у ваші продукти.</p>
            </div>
            <div className="service-item">
              <h4>AI-агенти та локальні рішення</h4>
              <p>Розгортання автономних агентів (OpenClaw, Moltbot) та налаштування локальних LLM (LM Studio).</p>
            </div>
            <div className="service-item">
              <h4>Voice AI</h4>
              <p>Робота з голосом та SIP-телефонією (інтеграція ElevenLabs).</p>
            </div>
          </div>
        </div>

        <div className="service-category">
          <div className="category-header">
            <span className="emoji">⚙️</span>
            <h3>DevOps та серверна інфраструктура</h3>
          </div>
          <div className="services-grid">
            <div className="service-item">
              <h4>Хмарні платформи</h4>
              <p>Впевнена робота з AWS, DigitalOcean, Contabo, Azure.</p>
            </div>
            <div className="service-item">
              <h4>Контейнеризація</h4>
              <p>Розгортання та менеджмент проектів через Docker & Docker Compose.</p>
            </div>
            <div className="service-item">
              <h4>Адміністрування Linux</h4>
              <p>Повне налаштування серверів, забезпечення безпечного доступу (SSH, ключі) та оптимізація продуктивності.</p>
            </div>
          </div>
        </div>

        <div className="service-category">
          <div className="category-header">
            <span className="emoji">🌐</span>
            <h3>Web-розробка та сучасний стек</h3>
          </div>
          <div className="services-grid">
            <div className="service-item">
              <h4>Frontend</h4>
              <p>Створення швидких та масштабованих інтерфейсів на React (Vite).</p>
            </div>
            <div className="service-item">
              <h4>Cloudflare</h4>
              <p>Деплой, захист та оптимізація проектів через Edge-технології.</p>
            </div>
            <div className="service-item">
              <h4>Progressive Tech</h4>
              <p>Використання найсучасніших інструментів розробки (Windsurf, Fal.ai) для прискорення доставки результату.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="why-me">
        <h2 className="section-title">Чому ми спрацюємось:</h2>
        <div className="why-content">
          <p>
            Я фокусуюся на результаті, який приносить реальну користь: автоматизація має економити гроші, а інфраструктура — працювати стабільно. Завжди тримаю руку на пульсі нових технологій, щоб пропонувати рішення, які будуть актуальними завтра, а не лише сьогодні.
          </p>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <p>© 2024 Stinches. Всі права захищені.</p>
          <a href="https://t.me/stinches" target="_blank" rel="noopener noreferrer" className="telegram-link">
            @stinches
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
