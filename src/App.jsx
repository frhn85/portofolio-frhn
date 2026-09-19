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
import TextType from "./components/TextType";

import "./index.css";

const projects = [
  {
    title: "MyHub",
    type: "Personal Web App",
    description:
      "Personal hub untuk berbagai kebutuhan sehari-hari dengan fokus pada UI yang rapi dan interaktif.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "MyHub V2",
    type: "React Project",
    description:
      "Versi lanjutan MyHub dengan React, Vite, komponen interaktif, dan tampilan glass modern.",
    tech: ["React", "Vite", "Motion"],
  },
  {
    title: "X PPLG 1",
    type: "Class Website",
    description:
      "Website informasi kelas untuk struktur, anggota, jadwal, galeri, dan media sosial.",
    tech: ["HTML", "CSS", "JavaScript"],
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
  ["HTML", "Web structure", "https://cdn.simpleicons.org/html5"],
  ["CSS", "UI styling", "https://cdn.simpleicons.org/css3"],
  ["JavaScript", "Web logic", "https://cdn.simpleicons.org/javascript"],
  ["React", "UI development", "https://cdn.simpleicons.org/react"],
  ["Vite", "Build tooling", "https://cdn.simpleicons.org/vite"],
  ["Motion", "Animation", "https://cdn.simpleicons.org/framer"],
  ["Three.js", "3D graphics", "https://cdn.simpleicons.org/threedotjs"],
  ["React Three Fiber", "3D React", "https://cdn.simpleicons.org/react"],
  ["Git", "Version control", "https://cdn.simpleicons.org/git"],
  ["GitHub", "Deployment", "https://cdn.simpleicons.org/github/ffffff"],
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

const nav = ["home", "about", "showcase", "contact"];
const showcaseTabs = ["projects", "certificates", "stack"];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showOpening, setShowOpening] = useState(true);
  const [showcaseTab, setShowcaseTab] = useState("projects");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOpening(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  /*
   * Scroll animation.
   * Saat elemen keluar viewport, class aos-visible dihapus.
   * Jadi ketika discroll kembali, animasinya jalan lagi.
   */
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
      }
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
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
              className="opening-line"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 1.1,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="opening-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="opening-kicker">
                PORTFOLIO / 2026
              </span>

              <div className="opening-logo">F</div>

              <h1>frhnn</h1>

              <ShinyText
                text="Welcome to my portfolio"
                speed={2}
                delay={0}
                color="#94a3b8"
                shineColor="#ffffff"
                spread={120}
                direction="left"
                yoyo={false}
                pauseOnHover={false}
                disabled={false}
              />
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
          >
            <span className="brand-mark">F</span>
            <span>frhnn</span>
          </button>

          <nav
            className={
              menuOpen ? "nav-links open" : "nav-links"
            }
          >
            {nav.map((item) => (
              <button
                key={item}
                onClick={() => goTo(item)}
              >
                {item}
              </button>
            ))}
          </nav>

          <button
            className="menu-button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </header>

        <main>
          {/* HOME */}
          <section
            id="home"
            className="hero page-section"
          >
            <div className="hero-copy">
              <div
                className="hero-topline"
                data-aos="fade-up"
              >
                <i />
              </div>

              <p
                className="eyebrow"
                data-aos="fade-up"
                data-aos-delay="80"
              >
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
                Gw membangun website dan aplikasi dengan
                fokus pada tampilan modern, fungsi yang jelas,
                interaksi yang halus, dan pengalaman pengguna
                yang nyaman.
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
              className="lanyard-slot"
              data-aos="fade-in"
              data-aos-delay="150"
            >
              <Lanyard
                position={[0, 0, 20]}
                gravity={[0, -40, 0]}
                frontImage={profileImage}
              />
            </div>
          </section>

          {/* ABOUT */}
          <section
            id="about"
            className="section page-section"
          >
            <div
              className="section-head"
              data-aos="fade-up"
            >
              <div>
                <p className="eyebrow">
                  A LITTLE ABOUT ME
                </p>

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
                <span className="panel-label">
                  PROFILE
                </span>

                <p>
                  Nama gw Farhan. Gw seorang pelajar yang
                  tertarik sama web development, UI, coding,
                  dan teknologi kreatif. Website ini jadi
                  ruang buat nyimpen project, eksperimen,
                  dan perkembangan yang gw kerjain.
                </p>

                <p>
                  Gw masih terus belajar. Jadi portfolio ini
                  memang dibuat untuk tumbuh bareng project
                  berikutnya.
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
                  <small>
                    Frontend · UI · Interactive web
                  </small>
                </article>

                <article
                  className="mini-panel"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <span>APPROACH</span>
                  <strong>Build / Break / Learn</strong>
                  <small>
                    Eksperimen sampai ketemu solusi.
                  </small>
                </article>
              </div>
            </div>
          </section>

          {/* SHOWCASE */}
          <section
            id="showcase"
            className="section page-section showcase-section"
          >
            <div
              className="section-head"
              data-aos="fade-up"
            >
              <div>
                <p className="eyebrow">
                  PORTFOLIO SHOWCASE
                </p>

                <h2>
                  Projects, certificates &{" "}
                  <span>tech stack.</span>
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
                {showcaseTab === "projects" && (
                  <div className="project-list showcase-panel">
                    {projects.map((project) => (
                      <article
                        className="project-row"
                        key={project.title}
                      >
                        <div className="project-main">
                          <span className="project-type">
                            {project.type}
                          </span>

                          <h3>{project.title}</h3>

                          <p>{project.description}</p>

                          <div className="project-tags">
                            {project.tech.map((tech) => (
                              <span key={tech}>
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <span className="project-arrow">
                          ↗
                        </span>
                      </article>
                    ))}
                  </div>
                )}

                {showcaseTab === "certificates" && (
                  <div className="certificate-grid showcase-panel">
                    {certificates.map((image, index) => (
                      <article
                        className="certificate-card"
                        key={index}
                      >
                        <div className="certificate-image">
                          <img
                            src={image}
                            alt={`Sertifikat ${index + 1}`}
                          />
                        </div>
                      </article>
                    ))}
                  </div>
                )}

                {showcaseTab === "stack" && (
                  <div className="stack-grid showcase-panel">
                    {techStack.map(([name, desc, icon]) => (
                      <article
                        className="stack-item"
                        key={name}
                      >
                        <div className="stack-logo">
                          <img src={icon} alt="" aria-hidden="true" />
                        </div>
                        <div className="stack-info">
                          <strong>{name}</strong>
                          <small>{desc}</small>
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* CONTACT */}
          <section
            id="contact"
            className="contact-section page-section"
          >
            <div
              className="contact-copy"
              data-aos="fade-up"
            >
              <p className="eyebrow">CONTACT</p>

              <h2>
                Let's make something{" "}
                <span>interesting.</span>
              </h2>

              <p>
                Project, kolaborasi, atau sekadar ngobrol
                soal web dan teknologi.
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
                  <span className="contact-icon">
                    {social.icon}
                  </span>

                  <div>
                    <small>{social.label}</small>
                    <strong>{social.value}</strong>
                  </div>

                  <span className="contact-arrow">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </section>
        </main>

        <footer>
          <span>
            © {new Date().getFullYear()} frhnn
          </span>

          <span>
            React · Vite · Motion · GSAP
          </span>
        </footer>
      </div>
    </>
  );
}

export default App;