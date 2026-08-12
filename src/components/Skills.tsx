"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { skills } from "@/data/skills";

export default function Skills() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const categories = [
    {
      key: "languages",
      label: t.skills.categories.languages,
      items: skills.languages,
    },
    {
      key: "frameworks",
      label: t.skills.categories.frameworks,
      items: skills.frameworks,
    },
    {
      key: "tools",
      label: t.skills.categories.tools,
      items: skills.tools,
    },
  ];

  return (
    <section id="skills" className="section skills-section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag">{t.skills.subtitle}</div>
          <h2 className="section-title">{t.skills.title}</h2>
        </motion.div>

        {categories.map((cat, catIndex) => (
          <motion.div
            key={cat.key}
            className="skills-category"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 * catIndex }}
          >
            <h3 className="skills-category-title">{cat.label}</h3>
            <div className="skills-grid">
              {cat.items.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  className="skill-chip"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: 0.2 + catIndex * 0.1 + i * 0.06,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: skill.color || "var(--border-hover)",
                    boxShadow: `0 8px 24px ${skill.color ? skill.color + "33" : "rgba(124, 58, 237, 0.15)"}`,
                    color: skill.color || "var(--text)"
                  }}
                >
                  <span className="skill-chip-icon">{skill.icon}</span>
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
