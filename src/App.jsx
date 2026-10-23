  import React, { useState } from 'react';
  import {
    ArrowRight, ArrowLeft, Search, Menu, X, Feather
  } from "lucide-react";

  


const articles = [
  {
    id: 1,
    title: "აჭედილი სამლოცველო",
    category: "მოთხრობა",
    image: "/images/stories.svg",
    alt: "მთის სოფელი და ძველი ქვის სამლოცველო",
    author: "ვახო გოგინავა",
    date: "23 ოქტომბერი, 2026",
    readingTime: "5 წთ.",
    description: "სრული ტექსტი ხელმისაწვდომია RTF ფორმატში.",
    document: `/${encodeURIComponent("აჭედილი სამლოცველო.rtf")}`,
  },
  {
    id: 2,
    title: "ბეწვის ხიდზე მოცეკვავენი",
    category: "მოთხრობა",
    image: "/images/dancers-bridge.svg",
    alt: "ორი მოცეკვავე მთის ხეობაზე გადებულ ვიწრო ხიდზე",
    
    author: "ვახო გოგინავა",
    date: "23 ოქტომბერი, 2026",
    readingTime: "7 წთ.",
    description: "სრული ტექსტი ხელმისაწვდომია RTF ფორმატში.",
    document: `/${encodeURIComponent("ბეწვის ხიდზე მოცეკვავენი.rtf")}`,
  },
  {
    id: 3,
    title: "მეომარი",
    category: "ნოველა",
    image: "/images/novella-warrior.svg",
    alt: "მეომრის სილუეტი მთის ფონზე",
    
    author: "ვახო გოგინავა",
    date: "23 ოქტომბერი, 2026",
    readingTime: "6 წთ.",
    description: "სრული ტექსტი ხელმისაწვდომია RTF ფორმატში.",
    document: `/${encodeURIComponent("მეომარი.rtf")}`,
  },
];

function BrandMark() {
  return (
    <a className="brand" href="#home" aria-label="მწიგნობარი — მთავარი გვერდი">
      <span className="brand-mark" aria-hidden="true">
        <img src="/logo.png" alt="" width="150" height="80" />
        <span></span>
      </span>
      <span className="brand-text">
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
      <button className="mobile-menu-button icon-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "ნავიგაციის დახურვა" : "ნავიგაციის გახსნა"} aria-expanded={menuOpen}>
        {menuOpen ? <X size={19} /> : <Menu size={19} />}
      </button>
      <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="მთავარი ნავიგაცია">
        <a className="nav-link active" href="#home" onClick={() => setMenuOpen(false)}>მთავარი</a>
        <a className="nav-link" href="#featured" onClick={() => setMenuOpen(false)}>არქივი</a>
        <a className="nav-link" href="#about" onClick={() => setMenuOpen(false)}>ჩვენ შესახებ</a>
      </nav>
      <button className="search-button icon-button" onClick={() => setSearchOpen(!searchOpen)} aria-label={searchOpen ? "ძიების დახურვა" : "ძიების გახსნა"} aria-expanded={searchOpen}>
        <Search size={16} />
      </button>
      {searchOpen && (
        <form className="search-popover" role="search" onSubmit={(event) => { event.preventDefault(); document.querySelector("#featured")?.scrollIntoView({ behavior: "smooth" }); setSearchOpen(false); }}>
          <label htmlFor="article-search">არქივში ძებნა</label>
          <input id="article-search" type="search" placeholder="მოთხრობები, ნოველები..." autoFocus />
          <button type="submit" aria-label="ძიება"><Search size={16} /></button>
        </form>
      )}
    </header>
  );
}

function Hero() {
  const [slide, setSlide] = useState(0);
  const messages = [
    { eyebrow: "სიტყვების ციფრული სახლი", title: <>ნაწარმოებები, რომლებთანაც დაბრუნება ღირს<br /></>, copy: <>ნაწარმოებები, მოთხრობები და ნოველები<br className="desktop-break" /> დაფიქრებული მკითხველებისთვის.</> },
    { eyebrow: "მეხსიერების ჟურნალი", title: <>სიტყვები, <br />რომლებიც ჩვენთან რჩება.</>, copy: <>ნაწარმოებები<br className="desktop-break" /> ქართული პერსპექტივიდან.</> }
  ];
  const current = messages[slide];

  return (
    <section className="hero" id="home" aria-label="რჩეული შესავალი">
      <div className="hero-image" />
      <div className="hero-wash" />
      <div className="hero-content">
        <p className="eyebrow">{current.eyebrow}</p>
        <h1>{current.title}</h1>
        <p className="hero-description">{current.copy}</p>
        <span className="gold-rule" />
        <a className="text-link" href="#featured">არქივის დათვალიერება<ArrowRight size={15} /></a>
      </div>
      <div className="hero-controls" aria-label="სლაიდების მართვა">
        <button className="hero-arrow" onClick={() => setSlide((slide + messages.length - 1) % messages.length)} aria-label="წინა სლაიდი"><ArrowLeft size={15} /></button>
        <button className="hero-arrow" onClick={() => setSlide((slide + 1) % messages.length)} aria-label="შემდეგი სლაიდი"><ArrowRight size={15} /></button>
      </div>
    </section>
  );
}

function ArticleCard({ article }) {
  return (
    <article className="article-card">
      <a className="article-image-link" href={article.document} target="_blank" rel="noopener noreferrer" aria-label={`გახსენით: ${article.title}`}>
        <img className="article-image" src={article.image} alt={article.alt} loading="lazy" />
      </a>
      <div className="article-card-content">
        <span className="category-tag">{article.category}</span>
        <a className="article-title-link" href={article.document} target="_blank" rel="noopener noreferrer">
          <h3>{article.title}</h3>
        </a>
        <p className="article-description">{article.description}</p>
        <a className="article-document-link" href={article.document} target="_blank" rel="noopener noreferrer">
          RTF დოკუმენტის გახსნა <ArrowRight size={13} />
        </a>
        <div className="article-meta">
          <span className="author-avatar" aria-hidden="true">გ</span>
          <span className="author-details">
            <span className="author-name">{article.author}</span>
            <span className="meta-line">{article.date} <span className="meta-dot">·</span> {article.readingTime}</span>
          </span>
        </div>
      </div>
    </article>
  );
}

function FeaturedArticles() {
  return (
    <section className="featured-section" id="featured">
      <div className="section-heading-row">
        <h2><span className="heading-dash" />რჩეული სტატიები</h2>
        <a className="view-all-link" href="#archive">ყველას ნახვა <ArrowRight size={14} /></a>
      </div>
      <div className="article-grid">
        {articles.map((article) => <ArticleCard key={article.id} article={article} />)}
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="about-section" id="about">
      <article className="about-card">
        <div className="about-icon"><Feather size={22} /></div>
        <p className="mini-label">სიტყვების მიღმა არსებული ამბავი</p>
        <h2>სახლი გააზრებული სიტყვებისთვის.</h2>
        <p>მწიგნობარი დამოუკიდებელი ლიტერატურული სივრცეა, რომელიც ესეებს, ისტორიას და იმ იდეებს ეძღვნება, რომლებიც ქართულ კულტურულ მეხსიერებას აყალიბებს.</p>
        <a className="text-link" href="#footer">პროექტის შესახებ <ArrowRight size={14} /></a>
      </article>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <div className="footer-main">
        <BrandMark />
        <p>სიტყვების, იდეებისა და მეხსიერების ციფრული სახლი.</p>
      </div>
      <div className="footer-links">
        <a href="#home">მთავარი</a>
        <a href="#featured">არქივი</a>
        
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} მწიგნობარი. ყველა უფლება დაცულია.</span>
        <div><a href="#privacy">კონფიდენციალურობა</a></div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <Hero />
        <FeaturedArticles />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}