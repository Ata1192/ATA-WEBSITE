"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Copy, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Magnetic from "@/components/Magnetic";

const EMAIL = "atamtn@hotmail.com";
const GITHUB = "https://github.com/Ata1192";
const LINKEDIN = "https://www.linkedin.com/in/ata-metin";

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Contact() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      const el = document.createElement("textarea");
      el.value = EMAIL;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="contact" className="section contact-section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag">{t.contact.subtitle}</div>
          <h2 className="section-title">{t.contact.title}</h2>
        </motion.div>

        <motion.div
          className="contact-inner"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Open to work badge */}
          <div className="contact-open-card">
            <span style={{ fontSize: "1.1rem" }}>✅</span>
            <div>
              <strong>{t.contact.open_to_work}</strong>
              <br />
              <span style={{ fontSize: "0.82rem", opacity: 0.85 }}>
                {t.contact.open_to_work_desc}
              </span>
            </div>
          </div>

          <p className="contact-desc">{t.contact.description}</p>

          {/* Email with copy button */}
          <div className="email-copy-wrap">
            <span className="email-text">{EMAIL}</span>
            <motion.button
              id="copy-email-btn"
              className={`copy-btn${copied ? " copied" : ""}`}
              onClick={handleCopy}
              whileTap={{ scale: 0.95 }}
              aria-label="Copy email address"
            >
              {copied ? (
                <>
                  <Check size={15} />
                  {t.contact.copied}
                </>
              ) : (
                <>
                  <Copy size={15} />
                  {t.contact.copy_email}
                </>
              )}
            </motion.button>
          </div>

          {/* Social links */}
          <p
            style={{
              color: "var(--text-dim)",
              fontSize: "0.85rem",
              marginBottom: "20px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            {t.contact.find_me}
          </p>
          <div className="contact-socials">
            <Magnetic amount={0.2}>
              <a
                id="github-link"
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <GithubIcon size={18} />
                GitHub
              </a>
            </Magnetic>
            <Magnetic amount={0.2}>
              <a
                id="linkedin-link"
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <LinkedinIcon size={18} />
                LinkedIn
              </a>
            </Magnetic>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
