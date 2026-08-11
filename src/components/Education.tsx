"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const educationData = [
  {
    icon: "🎓",
    school: {
      tr: "Doğu Akdeniz Üniversitesi",
      en: "Eastern Mediterranean University",
    },
    dept: {
      tr: "Bilgisayar ve Teknoloji Yüksekokulu · Yazılım Mühendisliği",
      en: "Faculty of Engineering · Software Engineering",
    },
    date: "2022 — 2026",
    ongoing: true,
  },
];

export default function Education() {
  const { t, language } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag">{t.education.subtitle}</div>
          <h2 className="section-title">{t.education.title}</h2>
        </motion.div>

        <div className="education-grid">
          {educationData.map((edu, i) => (
            <motion.div
              key={i}
              className="education-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
            >
              <div className="education-icon">{edu.icon}</div>
              <div>
                <h3 className="education-school">
                  {language === "tr" ? edu.school.tr : edu.school.en}
                </h3>
                <p className="education-dept">
                  {language === "tr" ? edu.dept.tr : edu.dept.en}
                </p>
                <div className="education-info">
                  <span className="education-date">📅 {edu.date}</span>
                  {edu.ongoing && (
                    <span className="education-status">
                      {t.education.ongoing}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
