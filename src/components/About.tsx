"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: "10+", label: t.about.stat_technologies },
    { number: "4.", label: t.about.stat_year },
    { number: "1", label: t.about.stat_internship },
  ];

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag">{t.about.subtitle}</div>
          <h2 className="section-title">{t.about.title}</h2>
        </motion.div>

        <div className="about-grid">
          {/* Left: Text */}
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
          </motion.div>

          {/* Right: Stats */}
          <motion.div
            className="about-stats"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {stats.map((s, i) => (
              <motion.div
                key={i}
                className="stat-card"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              >
                <div className="stat-number">{s.number}</div>
                <div className="stat-label">{s.label}</div>
              </motion.div>
            ))}

            {/* Extra decorative card */}
            <motion.div
              className="stat-card"
              style={{
                background:
                  "linear-gradient(135deg, rgba(124,58,237,0.1), rgba(6,182,212,0.1))",
                borderColor: "rgba(124,58,237,0.25)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "8px" }}>🚀</div>
              <div className="stat-label">Full Stack</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
