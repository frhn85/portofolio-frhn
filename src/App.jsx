import myhubImage from "./components/projects/myhub1.png";
import portfolioImage from "./components/projects/portfolio.png";
import kelasImage from "./components/projects/kelas1.png";

import sertifikat1 from "./certificates/certificates1.jpeg";
import sertifikat2 from "./certificates/certificates2.jpeg";
import sertifikat3 from "./certificates/certificates3.jpeg";
import sertifikat4 from "./certificates/certificates4.jpeg";
import sertifikat5 from "./certificates/certificates5.jpeg";
import sertifikat6 from "./certificates/certificates6.jpeg";
import sertifikat7 from "./certificates/certificates7.jpeg";
import sertifikat8 from "./certificates/certificates8.jpeg";
import sertifikat9 from "./certificates/certificates9.jpeg";

import profileImage from "./assets/frhn5.jpeg";
import gdscAnimation from "./assets/GDSC-Modules.json";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import TextType from "./components/TextType";

import "./index.css";

const projects = [
  {
    title: "MyHub",
    type: "Personal Web App",
    description:
      "Personal hub untuk berbagai kebutuhan sehari-hari dengan fokus pada UI yang rapi dan interaktif.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: myhubImage
  },
  {
    title: "Portfolio",
    type: "React Project",
    description:
      "Lihat berbagai project, pencapaian, dan teknologi yang saya gunakan untuk membangun pengalaman digital yang modern dan interaktif.",
    tech: ["React", "Vite", "Motion"],
    image: portfolioImage
  },
  {
    title: "X PPLG 1",
    type: "Class Website",
    description:
      "Website informasi kelas untuk struktur, anggota, jadwal, galeri, dan media sosial.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: kelasImage
  },
];

const certificates = [
  sertifikat1,
  sertifikat2,
  sertifikat3,
  sertifikat4,
  sertifikat5,
  sertifikat6,
  sertifikat7,
  sertifikat8,
  sertifikat9,
];

const techStack = [
  ["HTML", "https://cdn.simpleicons.org/html5"],
  ["CSS", "https://cdn.simpleicons.org/css3"],
  ["JavaScript", "https://cdn.simpleicons.org/javascript"],
  ["React", "https://cdn.simpleicons.org/react"],
  ["Vite", "https://cdn.simpleicons.org/vite"],
  ["Motion", "https://cdn.simpleicons.org/framer"],
  ["Three.js", "https://cdn.simpleicons.org/threedotjs"],
  ["React Three Fiber", "https://cdn.simpleicons.org/react"],
  ["Git", "https://cdn.simpleicons.org/git"],
  ["GitHub", "https://cdn.simpleicons.org/github/ffffff"],
];

const socials = [
  {
    label: "Instagram",
    value: "@frhnn_38",
    href: "https://www.instagram.com/frhnn_38/",
    icon: "IG",
  },
  {
    label: "TikTok",
    value: "@frhnn_89",
    href: "https://www.tiktok.com/@frhnn_89",
    icon: "TK",
  },
  {
    label: "GitHub",
    value: "github.com/frhn85",
    href: "https://github.com/frhn85",
    icon: "GH",
  },
  {
    label: "WhatsApp",
    value: "083899019848",
    href: "https://wa.me/6283899019848",
    icon: "WA",
  },
];

const navItems = ["home", "about", "showcase", "contact"];
const showcaseTabs = ["projects", "certificates", "stack"];

function GdscLottie() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !window.lottie) return;

    const animation = window.lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: gdscAnimation,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid meet",
      },
    });

    return () => animation.destroy();
  }, []);

  return (
    <div
      ref={containerRef}
      className="lottie-animation"
      aria-label="GDSC animation"
    />
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showOpening, setShowOpening] = useState(true);
  const [showcaseTab, setShowcaseTab] = useState("projects");
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOpening(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const targets = document.querySelectorAll("[data-aos]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("aos-visible");
          } else {
            entry.target.classList.remove("aos-visible");
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -70px 0px",
      },
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedCertificate(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const goTo = (id) => {
    setMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <AnimatePresence>
        {showOpening && (
          <motion.div
            className="opening-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="opening-content"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="opening-icons">
                <div className="opening-icon code-icon">{"</>"}</div>

                <div className="opening-icon">
                  <span className="server-icon">
                    <i />
                    <i />
                  </span>
                </div>

                <div className="opening-icon">
                  <span className="globe-icon">◎</span>
                </div>
              </div>

              <h1 className="opening-title">
                <span>Welcome To</span>
                <strong>My Portfolio</strong>
              </h1>

              <div className="opening-domain">
                <span>◎</span>
                <span>frhnn.com</span>
              </div>

              <div className="opening-loader">
                <div className="opening-loader-fill" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="app">
        <div className="background-grid" />
        <div className="background-glow glow-one" />
        <div className="background-glow glow-two" />

        <header className="navbar">
          <button
            className="brand"
            onClick={() => goTo("home")}
            aria-label="Go to home"
          >
            <span className="brand-mark">
              <img src={profileImage} alt="frhnn" />
            </span>

            <span>frhnn</span>
          </button>

          <nav
            className={menuOpen ? "nav-links open" : "nav-links"}
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <button key={item} onClick={() => goTo(item)}>
                {item}
              </button>
            ))}
          </nav>

          <button
            className="menu-button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </header>

        <main>
          {/* HOME */}
          <section id="home" className="hero page-section">
            <div className="hero-copy">
              <div className="hero-topline" data-aos="fade-up">
                <i />
              </div>

              <p className="eyebrow" data-aos="fade-up" data-aos-delay="80">
                WEB DEVELOPMENT / CREATIVE BUILDING
              </p>

              <h1
                className="hero-title"
                data-aos="fade-up"
                data-aos-delay="130"
              >
                FULL STACK
                <br />
                DEVELOPER
              </h1>

              <div
                className="hero-type"
                data-aos="fade-up"
                data-aos-delay="170"
              >
                <TextType
                  text={[
                    "Building modern web experiences.",
                    "Turning ideas into real projects.",
                    "Creating clean and interactive websites.",
                    "Always learning. Always building.",
                  ]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  deletingSpeed={50}
                  showCursor
                  cursorCharacter="_"
                  cursorBlinkDuration={0.5}
                />
              </div>

              <p
                className="hero-description"
                data-aos="fade-up"
                data-aos-delay="210"
              >
                Gw membangun website dan aplikasi dengan fokus pada tampilan
                modern, fungsi yang jelas, interaksi yang halus, dan pengalaman
                pengguna yang nyaman.
              </p>

              <div
                className="hero-buttons"
                data-aos="fade-up"
                data-aos-delay="260"
              >
                <button
                  className="btn primary"
                  onClick={() => goTo("showcase")}
                >
                  Explore work <span>↗</span>
                </button>

                <button
                  className="btn secondary"
                  onClick={() => goTo("contact")}
                >
                  Get in touch
                </button>
              </div>

              <div
                className="hero-meta"
                data-aos="fade-up"
                data-aos-delay="310"
              >
                <span>Based in Indonesia</span>
                <span>Learning & building</span>
              </div>
            </div>

            <div
              className="lottie-slot"
              data-aos="fade-in"
              data-aos-delay="150"
            >
              <GdscLottie />
            </div>
          </section>

          {/* ABOUT */}
          <section id="about" className="section page-section">
            <div className="section-head" data-aos="fade-up">
              <div>
                <p className="eyebrow">A LITTLE ABOUT ME</p>

                <h2>
                  Hello, I'm <span>Farhan.</span>
                </h2>
              </div>
            </div>

            <div className="about-layout">
              <article
                className="intro-panel"
                data-aos="fade-up"
                data-aos-delay="80"
              >
                <span className="panel-label">PROFILE</span>

                <p>
                  Nama gw Farhan. Gw seorang pelajar yang tertarik sama web
                  development, UI, coding, dan teknologi kreatif. Website ini
                  jadi ruang buat nyimpen project, eksperimen, dan perkembangan
                  yang gw kerjain.
                </p>

                <p>
                  Gw masih terus belajar. Jadi portfolio ini memang dibuat untuk
                  tumbuh bareng project berikutnya.
                </p>
              </article>

              <div className="about-side">
                <article
                  className="mini-panel"
                  data-aos="fade-up"
                  data-aos-delay="140"
                >
                  <span>FOCUS</span>
                  <strong>Web Development</strong>
                  <small>Frontend · UI · Interactive web</small>
                </article>

                <article
                  className="mini-panel"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <span>APPROACH</span>
                  <strong>Build / Break / Learn</strong>
                  <small>Eksperimen sampai ketemu solusi.</small>
                </article>
              </div>
            </div>
          </section>

          {/* SHOWCASE */}
          <section
            id="showcase"
            className="section page-section showcase-section"
          >
            <div className="section-head showcase-heading" data-aos="fade-up">
              <div>
                <p className="eyebrow">PORTFOLIO SHOWCASE</p>

                <h2>
                  Projects, certificates & <span>tech stack.</span>
                </h2>
              </div>
            </div>

            <div
              className="showcase-shell"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div
                className="showcase-tabs"
                role="tablist"
                aria-label="Portfolio showcase"
              >
                {showcaseTabs.map((tab) => (
                  <button
                    key={tab}
                    className={
                      showcaseTab === tab
                        ? "showcase-tab active"
                        : "showcase-tab"
                    }
                    onClick={() => setShowcaseTab(tab)}
                    role="tab"
                    aria-selected={showcaseTab === tab}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              
                <div className="showcase-content">
                  {/* PROJECTS */}
                  {showcaseTab === "projects" && (
                    <div className="project-list showcase-panel">
                      {projects.map((project) => (
                        <article className="project-card" key={project.title}>
                          <div className="project-preview">
                            {project.image ? (
                              <img
                                src={project.image}
                                alt={project.title}
                                className="project-preview-image"
                              />
                            ) : (
                              <>
                                <div className="project-preview-grid" />

                                <span className="project-preview-label">
                                  PROJECT
                                </span>

                                <span className="project-preview-title">
                                  {project.title}
                                </span>
                              </>
                            )}
                          </div>

                          <div className="project-card-content">
                            <span className="project-type">{project.type}</span>

                            <h3>{project.title}</h3>

                            <p>{project.description}</p>

                            <div className="project-tags">
                              {project.tech.map((tech) => (
                                <span key={tech}>{tech}</span>
                              ))}
                            </div>

                            <span className="project-arrow">↗</span>
                          </div>
                        </article>
                      ))}
                    </div>
                  )}

                  {/* CERTIFICATES */}
                  {showcaseTab === "certificates" && (
                    <div className="certificate-grid showcase-panel">
                      {certificates.map((image, index) => (
                        <button
                          type="button"
                          className="certificate-card"
                          key={index}
                          onClick={() => setSelectedCertificate(image)}
                          aria-label={`Open certificate ${index + 1}`}
                        >
                          <div className="certificate-image">
                            <img src={image} alt={`Sertifikat ${index + 1}`} />
                          </div>

                          <div className="certificate-info">
                            <span>
                              Certificate {String(index + 1).padStart(2, "0")}
                            </span>

                            <strong>View Certificate</strong>

                            <span className="certificate-arrow">↗</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* TECH STACK */}
                  {showcaseTab === "stack" && (
                    <div className="stack-grid showcase-panel">
                      {techStack.map(([name, icon]) => (
                        <article className="stack-item" key={name}>
                          <div className="stack-logo">
                            <img src={icon} alt={`${name} logo`} />
                          </div>

                          <strong className="stack-name">{name}</strong>
                        </article>
                      ))}
                    </div>
                  )}
                </div>
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="contact-section page-section">
            <div className="contact-copy" data-aos="fade-up">
              <p className="eyebrow">CONTACT</p>

              <h2>
                Let's make something <span>interesting.</span>
              </h2>

              <p>
                Project, kolaborasi, atau sekadar ngobrol soal web dan
                teknologi.
              </p>
            </div>

            <div className="contact-grid">
              {socials.map((social, index) => (
                <a
                  className="contact-card"
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  key={social.label}
                  data-aos="fade-up"
                  data-aos-delay={index * 70}
                >
                  <span className="contact-icon">{social.icon}</span>

                  <div>
                    <small>{social.label}</small>
                    <strong>{social.value}</strong>
                  </div>

                  <span className="contact-arrow">↗</span>
                </a>
              ))}
            </div>
          </section>
        </main>

        <footer>
          <span>© {new Date().getFullYear()} frhnn</span>

          <span>React · Vite · Motion · GSAP</span>
        </footer>
      </div>

      {/* CERTIFICATE MODAL */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            className="certificate-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedCertificate(null)}
          >
            <button
              type="button"
              className="certificate-close"
              onClick={() => setSelectedCertificate(null)}
              aria-label="Close certificate"
            >
              ×
            </button>

            <motion.div
              className="certificate-modal-content"
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
            >
              <img src={selectedCertificate} alt="Certificate preview" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
