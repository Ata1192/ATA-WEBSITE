"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

function AvatarSVG() {
  return (
    <svg
      className="hero-avatar-svg"
      viewBox="0 0 220 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Body */}
      <circle cx="110" cy="110" r="108" fill="#1a1a2e" />

      {/* Code bracket left */}
      <motion.path
        d="M55 90 L35 110 L55 130"
        stroke="#7c3aed"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />
      {/* Code bracket right */}
      <motion.path
        d="M165 90 L185 110 L165 130"
        stroke="#06b6d4"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
      />
      {/* Slash between brackets */}
      <motion.line
        x1="125"
        y1="80"
        x2="95"
        y2="140"
        stroke="#f59e0b"
        strokeWidth="5"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeInOut" }}
      />

      {/* Glowing dots */}
      {[
        { cx: 68, cy: 60, r: 4, color: "#7c3aed", delay: 0.8 },
        { cx: 152, cy: 60, r: 4, color: "#06b6d4", delay: 1 },
        { cx: 68, cy: 160, r: 4, color: "#06b6d4", delay: 1.2 },
        { cx: 152, cy: 160, r: 4, color: "#7c3aed", delay: 1.4 },
      ].map((dot, i) => (
        <motion.circle
          key={i}
          cx={dot.cx}
          cy={dot.cy}
          r={dot.r}
          fill={dot.color}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1.3, 1],
            opacity: [0, 1, 0.8],
          }}
          transition={{
            duration: 0.6,
            delay: dot.delay,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Terminal line decorations */}
      <motion.rect
        x="75"
        y="150"
        width="70"
        height="3"
        rx="1.5"
        fill="#7c3aed"
        opacity="0.5"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      />
      <motion.rect
        x="85"
        y="158"
        width="50"
        height="3"
        rx="1.5"
        fill="#06b6d4"
        opacity="0.4"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 1.7 }}
      />
    </svg>
  );
}

export default function Hero() {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="hero">
      <div className="container hero-grid">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="hero-tag"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="hero-tag-dot" />
            {t.hero.open_to}
          </motion.div>

          <motion.p
            className="hero-greeting"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {t.hero.greeting}
          </motion.p>

          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {t.hero.title}
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.p
            className="hero-university"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
          >
            @ {t.hero.university}
          </motion.p>

          <motion.p
            className="hero-desc"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <button
              id="hero-projects-btn"
              className="btn-primary"
              onClick={scrollToProjects}
            >
              <Sparkles size={16} />
              {t.hero.cta_projects}
            </button>
            <button
              id="hero-contact-btn"
              className="btn-secondary"
              onClick={scrollToContact}
            >
              {t.hero.cta_contact}
            </button>
          </motion.div>
        </motion.div>

        {/* Right: Avatar */}
        <motion.div
          className="hero-avatar-wrap"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
        >
          <div className="hero-avatar-ring">
            <div className="hero-avatar-glow" />
            <div className="hero-avatar-outer" />
            <div className="hero-avatar-inner">
              <AvatarSVG />
            </div>

            {/* Floating badges */}
            <motion.div
              className="hero-badge hero-badge-1"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
            >
              <span>⚡</span> .NET Developer
            </motion.div>

            <motion.div
              className="hero-badge hero-badge-2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 }}
            >
              <span>⚛️</span> React
            </motion.div>

            <motion.div
              className="hero-badge hero-badge-3"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6 }}
            >
              <span>🤖</span> AI Integration
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        id="scroll-down-btn"
        onClick={scrollToAbout}
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "var(--text-muted)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
          fontSize: "0.75rem",
          fontFamily: "var(--font-body)",
        }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        initial={{ opacity: 0 }}
      >
        <ArrowDown size={18} />
      </motion.button>
    </section>
  );
}
