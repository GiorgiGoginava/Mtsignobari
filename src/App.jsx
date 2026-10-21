  import React, { useState, useEffect } from 'react';
  
import siteLogo from '../logo/mcignobari logo.png';
import {
  ArrowRight, ArrowLeft, Search, Heart, Menu, X, Feather,
  ChevronRight, Clock3, CalendarDays
} from "lucide-react";

const articles = [
  {
    id: 1,
    category: "ESSAY",
    title: "The Written Word and the Memory of a Nation",
    description: "A reflection on how written culture shapes our collective memory.",
    author: "Giorgi Kapanadze",
    date: "Oct 20, 2026",
    readingTime: "8 min read",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=85",
    alt: "Layered Caucasus mountain ranges in soft morning light"
  },
  {
    id: 2,
    category: "HISTORY",
    title: "The Lost Pages of Tbilisi",
    description: "Forgotten manuscripts, hidden archives, and the stories they still tell.",
    author: "Giorgi Kapanadze",
    date: "Oct 20, 2026",
    readingTime: "7 min read",
    image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=1000&q=85",
    alt: "Antique books and old manuscripts in a library"
  },
  {
    id: 3,
    category: "OPINION",
    title: "What We Owe to the Past",
    description: "On responsibility, memory, and the future we build.",
    author: "Giorgi Kapanadze",
    date: "Sep 25, 2026",
    readingTime: "6 min read",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1000&q=85",
    alt: "Quiet coastline with blue water and distant hills"
  }
];

function BrandMark() {
  return (
    <a className="brand" href="#home" aria-label="Mtsignobari home">
      <span className="brand-mark" aria-hidden="true">
        <span className="brand-ring"><Feather size={29} strokeWidth={1.7} /></span>
      </span>
      <span className="brand-copy">
        <span className="brand-name">MTSIGNOBARI</span>
        <span className="brand-georgian">მწიგნობარი</span>
      </span>
    </a>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="site-header">
      <BrandMark />
      <button className="mobile-menu-button icon-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen}>
        {menuOpen ? <X size={19} /> : <Menu size={19} />}
      </button>
      <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
        <a className="nav-link active" href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a className="nav-link" href="#featured" onClick={() => setMenuOpen(false)}>Archive</a>
        <a className="nav-link" href="#about" onClick={() => setMenuOpen(false)}>About</a>
      </nav>
      <div className="header-actions">
        <button className="icon-button search-button" aria-label="Search articles" onClick={() => setSearchOpen(!searchOpen)}>
          <Search size={17} />
        </button>
        <a className="donate-button" href="#donate"><Heart size={14} /> Donate</a>
      </div>
      {searchOpen && (
        <form className="search-popover" role="search" onSubmit={(event) => { event.preventDefault(); document.querySelector("#featured")?.scrollIntoView({ behavior: "smooth" }); setSearchOpen(false); }}>
          <label htmlFor="article-search">Search the archive</label>
          <input id="article-search" type="search" placeholder="Search essays, history…" autoFocus />
          <button type="submit" aria-label="Submit search"><Search size={16} /></button>
        </form>
      )}
    </header>
  );
}

function Hero() {
  const [slide, setSlide] = useState(0);
  const messages = [
    { eyebrow: "A DIGITAL HOME FOR WORDS", title: <>Stories worth<br />returning to.</>, copy: <>Essays, history, and ideas preserved<br className="desktop-break" /> for thoughtful readers.</> },
    { eyebrow: "A JOURNAL OF MEMORY", title: <>Words that<br />stay with us.</>, copy: <>Writing, history, and culture from<br className="desktop-break" /> a Georgian perspective.</> }
  ];
  const current = messages[slide];

  return (
    <section className="hero" id="home" aria-label="Featured introduction">
      <div className="hero-image" />
      <div className="hero-wash" />
      <div className="hero-content">
        <p className="eyebrow">{current.eyebrow}</p>
        <h1>{current.title}</h1>
        <p className="hero-description">{current.copy}</p>
        <span className="gold-rule" />
        <a className="text-link" href="#featured">Explore the archive <ArrowRight size={15} /></a>
      </div>
      <div className="hero-controls" aria-label="Hero slides">
        <button className="hero-arrow" onClick={() => setSlide((slide + messages.length - 1) % messages.length)} aria-label="Previous slide"><ArrowLeft size={15} /></button>
        <button className="hero-arrow" onClick={() => setSlide((slide + 1) % messages.length)} aria-label="Next slide"><ArrowRight size={15} /></button>
      </div>
    </section>
  );
}

function ArticleCard({ article, onOpen }) {
  return (
    <article className="article-card">
      <button className="article-image-button" onClick={() => onOpen(article)} aria-label={`Read ${article.title}`}>
        <img className="article-image" src={article.image} alt={article.alt} loading="lazy" />
      </button>
      <div className="article-card-content">
        <span className="category-tag">{article.category}</span>
        <button className="article-title-button" onClick={() => onOpen(article)}>
          <h3>{article.title}</h3>
        </button>
        <p className="article-description">{article.description}</p>
        <div className="article-meta">
          <span className="author-avatar" aria-hidden="true">G</span>
          <span className="author-details">
            <span className="author-name">{article.author}</span>
            <span className="meta-line">{article.date} <span className="meta-dot">·</span> {article.readingTime}</span>
          </span>
        </div>
      </div>
    </article>
  );
}

function FeaturedArticles({ onOpen }) {
  return (
    <section className="featured-section" id="featured">
      <div className="section-heading-row">
        <h2><span className="heading-dash" />Featured Articles</h2>
        <a className="view-all-link" href="#archive">View all <ArrowRight size={14} /></a>
      </div>
      <div className="article-grid">
        {articles.map((article) => <ArticleCard key={article.id} article={article} onOpen={onOpen} />)}
      </div>
    </section>
  );
}

function AboutAndDonate() {
  const [currency, setCurrency] = useState("GEL");
  const [amount, setAmount] = useState("25");
  const [customAmount, setCustomAmount] = useState("");
  const [payment, setPayment] = useState("card");
  const [showBankDetails, setShowBankDetails] = useState(false);
  const currencyData = {
    GEL: { symbol: "₾", amounts: ["10", "25", "50", "100"] },
    USD: { symbol: "$", amounts: ["5", "10", "25", "50"] },
    EUR: { symbol: "€", amounts: ["5", "10", "25", "50"] }
  };
  const selectedCurrency = currencyData[currency];

  return (
    <section className="support-area" id="about">
      <article className="about-card">
        <div className="about-icon"><Feather size={22} /></div>
        <p className="mini-label">THE STORY BEHIND THE WORDS</p>
        <h2>A home for thoughtful writing.</h2>
        <p>Mtsignobari is an independent literary space for essays, history, and the ideas that shape Georgian cultural memory.</p>
        <a className="text-link" href="#footer">About the project <ArrowRight size={14} /></a>
      </article>

      <aside className="donation-card" id="donate">
        <div className="donation-topline"><Heart size={17} /><span>SUPPORT THE JOURNAL</span></div>
        <h2>Keep the words alive.</h2>
        <p>Your contribution helps preserve writing and keep this space open to every reader.</p>
        <div className="currency-tabs" role="group" aria-label="Donation currency">
          {["GEL", "USD", "EUR"].map((code) => (
            <button key={code} className={`currency-tab ${currency === code ? "selected" : ""}`} onClick={() => { setCurrency(code); setAmount(currencyData[code].amounts[1]); setCustomAmount(""); }} aria-pressed={currency === code}>
              {code === "GEL" ? "GEL ₾" : code === "USD" ? "USD $" : "EUR €"}
            </button>
          ))}
        </div>
        <div className="donation-amounts">
          {selectedCurrency.amounts.map((value) => (
            <button key={value} className={`amount-option ${amount === value && !customAmount ? "selected" : ""}`} onClick={() => { setAmount(value); setCustomAmount(""); }} aria-pressed={amount === value && !customAmount}>
              {selectedCurrency.symbol}{value}
            </button>
          ))}
        </div>
        <label className="custom-amount-label" htmlFor="custom-amount">Or enter another amount</label>
        <div className="custom-amount-wrap">
          <span>{selectedCurrency.symbol}</span>
          <input id="custom-amount" type="number" min="1" value={customAmount} onChange={(event) => { setCustomAmount(event.target.value); setAmount(""); }} placeholder="Custom amount" />
        </div>
        <div className="payment-choice">
          <button className={payment === "card" ? "payment-option chosen" : "payment-option"} onClick={() => { setPayment("card"); setShowBankDetails(false); }} aria-pressed={payment === "card"}>Bank card</button>
          <button className={payment === "bank" ? "payment-option chosen" : "payment-option"} onClick={() => { setPayment("bank"); setShowBankDetails(true); }} aria-pressed={payment === "bank"}>Bank transfer</button>
        </div>
        {showBankDetails && (
          <div className="bank-details">
            <strong>Bank transfer details</strong>
            <span>Account holder: [Verified account name]</span>
            <span>IBAN: [Add verified IBAN before launch]</span>
            <small>Replace placeholders with verified details before publishing.</small>
          </div>
        )}
        <button className="donation-submit" onClick={() => window.alert(payment === "card" ? "Connect a secure payment provider before accepting donations." : "Add verified bank details before publishing transfer instructions.")}>
          {payment === "card" ? "Continue to donate" : "View transfer details"} <ChevronRight size={16} />
        </button>
        <small className="donation-note">Secure giving · Every contribution is appreciated</small>
      </aside>
    </section>
  );
}

function ArticleModal({ article, onClose }) {
  if (!article) return null;
  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <article className="article-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button className="modal-close icon-button" onClick={onClose} aria-label="Close article"><X size={19} /></button>
        <img className="modal-image" src={article.image} alt={article.alt} />
        <div className="modal-content">
          <span className="category-tag">{article.category}</span>
          <h2 id="modal-title">{article.title}</h2>
          <div className="modal-meta"><CalendarDays size={14} /> {article.date} <span>·</span> <Clock3 size={14} /> {article.readingTime}</div>
          <p className="modal-lede">{article.description}</p>
          <p>This is a preview of the article. Replace this sample text with the published essay or the converted text of your document. The reading page should preserve generous line length, comfortable paragraph spacing, and the same warm-paper palette.</p>
          <p>For the full production version, load article content from your content source and render it with semantic headings, paragraphs, quotations, and lists.</p>
        </div>
      </article>
    </div>
  );
}

function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <div className="footer-main">
        <BrandMark />
        <p>A digital home for words, ideas, and memory.</p>
      </div>
      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#featured">Archive</a>
        <a href="#about">About</a>
        <a href="#donate">Donate</a>
        <a href="mailto:hello@mtsignobari.example">Contact</a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Mtsignobari. All rights reserved.</span>
        <div><a href="#privacy">Privacy</a><a href="#terms">Donation terms</a></div>
      </div>
    </footer>
  );
}

export default function App() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="page-shell">
      <Header />
      <main>
        <Hero />
        <FeaturedArticles onOpen={setSelectedArticle} />
        <AboutAndDonate />
      </main>
      <Footer />
      <ArticleModal article={selectedArticle} onClose={() => setSelectedArticle(null)} />
    </div>
  );
}