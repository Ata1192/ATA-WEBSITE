"use client";

import { useState, useEffect } from "react";
import { Menu, X, Hexagon } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Magnetic from "@/components/Magnetic";

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const links = [
    { id: "about", label: t.nav.about },
    { id: "skills", label: t.nav.skills },
    { id: "internship", label: t.nav.internship },
    { id: "projects", label: t.nav.projects },
    { id: "education", label: t.nav.education },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <>
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="container navbar-inner">
          <Magnetic amount={0.15}>
            <button className="navbar-logo" onClick={() => scrollTo("hero")} style={{ display: 'flex', alignItems: 'center' }}>
              <Hexagon size={28} strokeWidth={1.5} />
            </button>
          </Magnetic>

          <ul className="navbar-links">
            {links.map((l) => (
              <li key={l.id}>
                <Magnetic amount={0.2}>
                  <button className="navbar-link" onClick={() => scrollTo(l.id)}>
                    {l.label}
                  </button>
                </Magnetic>
              </li>
            ))}
          </ul>

          <div className="navbar-actions">
            <div className="lang-toggle" role="group" aria-label="Language selector">
              <button
                id="lang-tr-btn"
                className={`lang-btn${language === "tr" ? " active" : ""}`}
                onClick={() => setLanguage("tr")}
                aria-pressed={language === "tr"}
              >
                TR
              </button>
              <button
                id="lang-en-btn"
                className={`lang-btn${language === "en" ? " active" : ""}`}
                onClick={() => setLanguage("en")}
                aria-pressed={language === "en"}
              >
                EN
              </button>
            </div>

            <button
              id="mobile-menu-toggle"
              className="hamburger"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} color="white" /> : <Menu size={22} color="white" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="mobile-menu open">
            {links.map((l) => (
              <button
                key={l.id}
                className="mobile-link"
                onClick={() => scrollTo(l.id)}
              >
                {l.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
