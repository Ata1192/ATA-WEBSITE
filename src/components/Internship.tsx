"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const internshipData = {
  company: "Planet Yazılım",
  location: { tr: "İzmir, Türkiye", en: "İzmir, Turkey" },
  role: { tr: "Yazılım Geliştirici Stajyeri", en: "Software Engineering Intern" },
  period: { tr: "Yaz 2026 — Devam Ediyor", en: "Summer 2026 — Present" },
  achievements: {
    tr: [
      ".NET ile şirketin ERP uygulaması için profesyonel bir installer oluşturdum.",
      "React (Vite) kullanarak kapsamlı bir log analiz dashboard'u geliştirdim; gerçek zamanlı istatistikler, hata log görüntüleme ve filtreleme özellikleri içeriyor.",
      "Dashboard'a yapay zeka (LLM) entegrasyonu ekleyerek hata loglarını otomatik analiz ettiren ve çözüm önerisi sunan bir sistem kurdum.",
      "Her gece 00:00'da veya manuel tetiklemeyle günlük istatistik raporunu e-posta ile gönderen otomatik rapor sistemi geliştirdim.",
    ],
    en: [
      "Built a professional installer using .NET for the company's ERP application.",
      "Developed a comprehensive log analysis dashboard with React (Vite) featuring real-time statistics, error log viewing and filtering.",
      "Integrated AI/LLM into the dashboard to automatically analyze error logs and provide actionable solution suggestions.",
      "Implemented an automated daily report system that sends email reports with statistics at midnight or on manual trigger.",
    ],
  },
  technologies: [".NET", "C#", "React", "Vite", "TypeScript", "AI/LLM", "SMTP", "REST API"],
};

export default function Internship() {
  const { t, language } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="internship" className="section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag">{t.internship.subtitle}</div>
          <h2 className="section-title">{t.internship.title}</h2>
        </motion.div>

        <motion.div
          className="internship-timeline"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div
            className="internship-item"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="internship-dot" />
            <div className="internship-card">
              <div className="internship-header">
                <div>
                  <h3 className="internship-company">{internshipData.company}</h3>
                  <p className="internship-role">
                    {language === "tr"
                      ? internshipData.role.tr
                      : internshipData.role.en}
                  </p>
                  <p className="internship-location">
                    📍{" "}
                    {language === "tr"
                      ? internshipData.location.tr
                      : internshipData.location.en}{" "}
                    &nbsp;·&nbsp;{" "}
                    {language === "tr"
                      ? internshipData.period.tr
                      : internshipData.period.en}
                  </p>
                </div>
                <div className="internship-badge">
                  <span className="internship-badge-dot" />
                  {t.internship.present}
                </div>
              </div>

              <div className="internship-achievements">
                <div className="internship-achievements-title">
                  {t.internship.achievements}
                </div>
                <ul>
                  {(language === "tr"
                    ? internshipData.achievements.tr
                    : internshipData.achievements.en
                  ).map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="tech-stack">
                {internshipData.technologies.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
