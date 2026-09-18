import sertifikat1 from "./certificates/certificates1.jpeg";
import sertifikat2 from "./certificates/certificates2.jpeg";
import sertifikat3 from "./certificates/certificates3.jpeg";
import sertifikat4 from "./certificates/certificates4.jpeg";
import sertifikat5 from "./certificates/certificates5.jpeg";
import sertifikat6 from "./certificates/certificates6.jpeg";
import sertifikat7 from "./certificates/certificates7.jpeg";
import sertifikat8 from "./certificates/certificates8.jpeg";
import sertifikat9 from "./certificates/certificates9.jpeg";
import profileImage from "./assets/lanyard/frhn5.jpeg";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import ShinyText from "./components/ShinyText";
import Lanyard from "./components/Lanyard";
import "./index.css";

const projects = [
  { title: "MyHub", type: "Personal Web App", description: "Personal hub untuk berbagai kebutuhan sehari-hari dengan fokus pada UI yang rapi dan interaktif.", tech: ["HTML", "CSS", "JavaScript"] },
  { title: "MyHub V2", type: "React Project", description: "Versi lanjutan MyHub dengan React, Vite, komponen interaktif, dan tampilan glass modern.", tech: ["React", "Vite", "Motion"] },
  { title: "X PPLG 1", type: "Class Website", description: "Website informasi kelas untuk struktur, anggota, jadwal, galeri, dan media sosial.", tech: ["HTML", "CSS", "JavaScript"] },
];

const certificates = [
  sertifikat1, sertifikat2, sertifikat3, sertifikat4, sertifikat5,
  sertifikat6, sertifikat7, sertifikat8, sertifikat9,
];

const techStack = [
  ["HTML", "Web structure"], ["CSS", "UI styling"], ["JavaScript", "Web logic"],
  ["React", "UI development"], ["Vite", "Build tooling"], ["Motion", "Animation"],
  ["Three.js", "3D graphics"], ["React Three Fiber", "3D React"], ["Git", "Version control"], ["GitHub", "Deployment"],
];

const socials = [
  { label: "Instagram", value: "@frhnn_38", href: "https://www.instagram.com/frhnn_38/", icon: "IG" },
  { label: "TikTok", value: "@frhnn_89", href: "https://www.tiktok.com/@frhnn_89", icon: "TK" },
  { label: "GitHub", value: "github.com/frhn85", href: "https://github.com/frhn85", icon: "GH" },
  { label: "WhatsApp", value: "083899019848", href: "https://wa.me/6283899019848", icon: "WA" },
];

const nav = ["home", "about", "projects", "stack", "certificates", "contact"];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showOpening, setShowOpening] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowOpening(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const targets = document.querySelectorAll("[data-aos]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("aos-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -70px 0px" });
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  const goTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <AnimatePresence>
        {showOpening && (
          <motion.div className="opening-screen" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .7 }}>
            <motion.div className="opening-line" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.1, ease: "easeInOut" }} />
            <motion.div className="opening-content" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>
              <span className="opening-kicker">PORTFOLIO / 2026</span>
              <div className="opening-logo">F</div>
              <h1>frhnn</h1>
              <ShinyText text="Welcome to my portfolio" speed={2} delay={0} color="#94a3b8" shineColor="#ffffff" spread={120} direction="left" yoyo={false} pauseOnHover={false} disabled={false} />
            </motion.div>
            <span className="opening-count">01 — 01</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="app">
        <div className="background-grid" />
        <div className="background-glow glow-one" />
        <div className="background-glow glow-two" />

        <header className="navbar">
          <button className="brand" onClick={() => goTo("home")}><span className="brand-mark">F</span><span>frhnn</span></button>
          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            {nav.map((item) => <button key={item} onClick={() => goTo(item)}>{item}</button>)}
          </nav>
          <button className="menu-button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /><span /></button>
        </header>

        <main>
          <section id="home" className="hero page-section">
            <div className="hero-copy">
              <div className="hero-topline" data-aos="fade-up"><span>01</span><i /></div>
              <p className="eyebrow" data-aos="fade-up" data-aos-delay="80">WEB DEVELOPER / CREATIVE BUILDER</p>
              <h1 data-aos="fade-up" data-aos-delay="130">Hi, I'm <span>frhn.</span></h1>
              <p className="hero-description" data-aos="fade-up" data-aos-delay="190">Pelajar yang suka membangun website, ngulik teknologi, dan mengubah ide sederhana menjadi project digital yang bisa dipakai.</p>
              <div className="hero-buttons" data-aos="fade-up" data-aos-delay="250"><button className="btn primary" onClick={() => goTo("projects")}>Explore work <span>↗</span></button><button className="btn secondary" onClick={() => goTo("contact")}>Get in touch</button></div>
              <div className="hero-meta" data-aos="fade-up" data-aos-delay="310"><span>Based in Indonesia</span><span>Available for learning & projects</span></div>
            </div>
            <div className="lanyard-slot" data-aos="fade-in" data-aos-delay="150"><Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} frontImage={profileImage} /></div>
          </section>

          <section id="about" className="section page-section">
            <div className="section-head" data-aos="fade-up"><span className="section-index">02</span><div><p className="eyebrow">A LITTLE ABOUT ME</p><h2>Building things, <span>learning constantly.</span></h2></div></div>
            <div className="about-layout">
              <article className="intro-panel" data-aos="fade-up" data-aos-delay="80"><span className="panel-label">01 / PROFILE</span><p>Nama gw Farhan. Gw seorang pelajar yang tertarik sama web development, UI, coding, dan teknologi kreatif. Website ini jadi ruang buat nyimpen project, eksperimen, dan perkembangan yang gw kerjain.</p><p>Gw masih terus belajar. Jadi portfolio ini memang dibuat untuk tumbuh bareng project berikutnya.</p></article>
              <div className="about-side"><article className="mini-panel" data-aos="fade-up" data-aos-delay="140"><span>FOCUS</span><strong>Web Development</strong><small>Frontend · UI · Interactive web</small></article><article className="mini-panel" data-aos="fade-up" data-aos-delay="200"><span>APPROACH</span><strong>Build / Break / Learn</strong><small>Eksperimen sampai ketemu solusi.</small></article></div>
            </div>
          </section>

          <section id="projects" className="section page-section">
            <div className="section-head" data-aos="fade-up"><span className="section-index">03</span><div><p className="eyebrow">SELECTED WORK</p><h2>Projects I've <span>built.</span></h2></div></div>
            <div className="project-list">{projects.map((project, index) => <article className="project-row" key={project.title} data-aos="fade-up" data-aos-delay={index * 90}><span className="project-no">0{index + 1}</span><div className="project-main"><span className="project-type">{project.type}</span><h3>{project.title}</h3><p>{project.description}</p><div className="project-tags">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div></div><span className="project-arrow">↗</span></article>)}</div>
          </section>

          <section id="stack" className="section page-section">
            <div className="section-head" data-aos="fade-up"><span className="section-index">04</span><div><p className="eyebrow">TOOLS I USE</p><h2>Tech <span>stack.</span></h2></div></div>
            <div className="stack-grid">{techStack.map(([name, desc], index) => <article className="stack-item" key={name} data-aos="fade-up" data-aos-delay={(index % 5) * 60}><span>0{(index % 9) + 1}</span><div><strong>{name}</strong><small>{desc}</small></div></article>)}</div>
          </section>

          <section id="certificates" className="section page-section">
            <div className="section-head" data-aos="fade-up"><span className="section-index">05</span><div><p className="eyebrow">ACHIEVEMENTS</p><h2>Certificates & <span>progress.</span></h2></div></div>
            <div className="certificate-grid">{certificates.map((image, index) => <article className="certificate-card" key={index} data-aos="fade-up" data-aos-delay={(index % 3) * 70}><div className="certificate-image"><img src={image} alt={`Sertifikat ${index + 1}`} /><span>0{index + 1}</span></div></article>)}</div>
          </section>

          <section id="contact" className="contact-section page-section">
            <div className="contact-copy" data-aos="fade-up"><span className="section-index">06</span><p className="eyebrow">CONTACT</p><h2>Let's make something <span>interesting.</span></h2><p>Project, kolaborasi, atau sekadar ngobrol soal web dan teknologi.</p></div>
            <div className="contact-grid">{socials.map((social, index) => <a className="contact-card" href={social.href} target="_blank" rel="noreferrer" key={social.label} data-aos="fade-up" data-aos-delay={index * 70}><span className="contact-icon">{social.icon}</span><div><small>{social.label}</small><strong>{social.value}</strong></div><span className="contact-arrow">↗</span></a>)}</div>
          </section>
        </main>

        <footer><span>© {new Date().getFullYear()} frhnn</span><span>React · Vite · Motion</span></footer>
      </div>
    </>
  );
}

export default App;
