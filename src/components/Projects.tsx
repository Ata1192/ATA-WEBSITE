"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { projects, Project } from "@/data/projects";
import ProjectModal from "@/components/ProjectModal";

// ── Thumbnail (card top) ─────────────────────────────────────────
function CardThumbnail({ project, title, videoRef }: { project: Project; title: string; videoRef?: React.RefObject<HTMLVideoElement | null> }) {
  if (project.video || project.thumbnail) {
    return (
      <>
        {project.thumbnail ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.thumbnail}
            alt={title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        ) : (
          // Video — show first frame (muted, paused)
          <video
            ref={videoRef}
            src={project.video}
            muted
            loop
            playsInline
            preload="metadata"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        )}
      </>
    );
  }

  // Gradient placeholder with subtle grid pattern
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background:
          "linear-gradient(135deg, var(--surface-2) 0%, var(--bg) 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle dot grid */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(203,205,206,0.07) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <span style={{ fontSize: "2.2rem", position: "relative", zIndex: 1 }}>
        🖥️
      </span>
      <span
        style={{
          fontSize: "0.7rem",
          color: "var(--text-dim)",
          position: "relative",
          zIndex: 1,
          fontFamily: "var(--font-body)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        Click for details
      </span>
    </div>
  );
}

// ── Project card ─────────────────────────────────────────────────
function ProjectCard({
  project,
  index,
  inView,
  onClick,
}: {
  project: Project;
  index: number;
  inView: boolean;
  onClick: () => void;
}) {
  const { language } = useLanguage();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  
  const title =
    language === "tr" ? project.title.tr : project.title.en;
  const description =
    language === "tr" ? project.description.tr : project.description.en;

  return (
    <motion.div
      className="project-card-new"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`Open ${title}`}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      onMouseEnter={() => videoRef.current?.play().catch(() => {})}
      onMouseLeave={() => {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
    >
      {/* Thumbnail */}
      <div className="project-card-thumbnail">
        <CardThumbnail project={project} title={title} videoRef={videoRef} />
        {project.featured && (
          <span className="project-featured-pill">⭐ Featured</span>
        )}
      </div>

      {/* Info */}
      <div className="project-card-body">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-desc">{description}</p>
        <div className="project-tech">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="project-tech-tag">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="project-tech-tag">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ── Section ───────────────────────────────────────────────────────
export default function Projects() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="section projects-section" ref={ref}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="section-tag">{t.projects.subtitle}</div>
            <h2 className="section-title">{t.projects.title}</h2>
          </motion.div>

          {projects.length === 0 ? (
            <motion.div
              className="coming-soon-card"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="coming-soon-icon">🛠️</div>
              <h3 className="coming-soon-title">{t.projects.coming_soon}</h3>
              <p className="coming-soon-desc">{t.projects.coming_soon_desc}</p>
            </motion.div>
          ) : (
            <div className="projects-grid-new">
              {projects.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={i}
                  inView={inView}
                  onClick={() => setSelected(project)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  );
}
