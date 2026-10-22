  import React, { useState } from 'react';
  import {
    ArrowRight, ArrowLeft, Search, Menu, X, Feather, Clock3, CalendarDays
  } from "lucide-react";

  


const articles = [
  {
    id: 1,
    category: "ესე",
    title: "წერილობითი სიტყვა და ერის მეხსიერება",
    description: "ფიქრი იმაზე, თუ როგორ აყალიბებს წერილობითი კულტურა ჩვენს კოლექტიურ მეხსიერებას.",
    author: "გიორგი კაპანაძე",
    date: "20 ოქტომბერი, 2026",
    readingTime: "კითხვის დრო: 8 წთ.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=85",
    alt: "კავკასიონის მთათა ფენები დილის რბილ სინათლეში"
  },
  {
    id: 2,
    category: "ისტორია",
    title: "თბილისის დაკარგული ფურცლები",
    description: "მივიწყებული ხელნაწერები, დაფარული არქივები და ისტორიები, რომლებსაც ისინი დღემდე გვიყვებიან.",
    author: "გიორგი კაპანაძე",
    date: "20 ოქტომბერი, 2026",
    readingTime: "კითხვის დრო: 7 წთ.",
    image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=1000&q=85",
    alt: "ძველი წიგნები და ხელნაწერები ბიბლიოთეკაში"
  },
  {
    id: 3,
    category: "მოსაზრება",
    title: "რა გვმართებს წარსულის წინაშე",
    description: "პასუხისმგებლობა, მეხსიერება და მომავალი, რომელსაც ჩვენ ვქმნით.",
    author: "გიორგი კაპანაძე",
    date: "25 სექტემბერი, 2026",
    readingTime: "კითხვის დრო: 6 წთ.",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1000&q=85",
    alt: "მშვიდი სანაპირო ლურჯი წყლითა და შორეული ბორცვებით"
  }
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

function ArticleCard({ article, onOpen }) {
  return (
    <article className="article-card">
      <button className="article-image-button" onClick={() => onOpen(article)} aria-label={`წაიკითხეთ: ${article.title}`}>
        <img className="article-image" src={article.image} alt={article.alt} loading="lazy" />
      </button>
      <div className="article-card-content">
        <span className="category-tag">{article.category}</span>
        <button className="article-title-button" onClick={() => onOpen(article)}>
          <h3>{article.title}</h3>
        </button>
        <p className="article-description">{article.description}</p>
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

function FeaturedArticles({ onOpen }) {
  return (
    <section className="featured-section" id="featured">
      <div className="section-heading-row">
        <h2><span className="heading-dash" />რჩეული სტატიები</h2>
        <a className="view-all-link" href="#archive">ყველას ნახვა <ArrowRight size={14} /></a>
      </div>
      <div className="article-grid">
        {articles.map((article) => <ArticleCard key={article.id} article={article} onOpen={onOpen} />)}
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

function ArticleModal({ article, onClose }) {
  if (!article) return null;
  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <article className="article-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button className="modal-close icon-button" onClick={onClose} aria-label="სტატიის დახურვა"><X size={19} /></button>
        <img className="modal-image" src={article.image} alt={article.alt} />
        <div className="modal-content">
          <span className="category-tag">{article.category}</span>
          <h2 id="modal-title">{article.title}</h2>
          <div className="modal-meta"><CalendarDays size={14} /> {article.date} <span>·</span> <Clock3 size={14} /> {article.readingTime}</div>
          <p className="modal-lede">{article.description}</p>
          <p>სტატიის ეს ტექსტი მხოლოდ წინასწარი ვერსიაა. ჩაანაცვლეთ იგი გამოქვეყნებული ესეს ტექსტით ან თქვენი დოკუმენტის დამუშავებული ვერსიით. კითხვის გვერდზე შეინარჩუნეთ ტექსტის მოსახერხებელი სიგანე, აბზაცებს შორის საკმარისი სივრცე და თბილი, ქაღალდისფერი ფერთა გამა.</p>
          <p>საბოლოო ვერსიაში სტატიის ტექსტი მიიღეთ თქვენი შინაარსის წყაროდან და წარმოადგინეთ სათაურების, აბზაცების, ციტატებისა და სიების შესაბამისი სემანტიკური სტრუქტურით.</p>
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
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="page-shell">
      <Header />
      <main>
        <Hero />
        <FeaturedArticles onOpen={setSelectedArticle} />
        <AboutSection />
      </main>
      <Footer />
      <ArticleModal article={selectedArticle} onClose={() => setSelectedArticle(null)} />
    </div>
  );
}