"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { Project } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";

// ─── YouTube helpers ──────────────────────────────────────────────
function isYouTube(url: string) {
  return url.includes("youtube.com") || url.includes("youtu.be");
}

function toEmbed(url: string) {
  const m = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
  return m
    ? `https://www.youtube.com/embed/${m[1]}?autoplay=1&rel=0`
    : url;
}

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

// ─── Thumbnail placeholder ────────────────────────────────────────
function ThumbnailPlaceholder({ title }: { title: string }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "12px",
        background:
          "linear-gradient(135deg, var(--surface-2) 0%, var(--bg) 100%)",
      }}
    >
      <span style={{ fontSize: "2.5rem" }}>🖥️</span>
      <span
        style={{
          fontSize: "0.75rem",
          color: "var(--text-dim)",
          textAlign: "center",
          padding: "0 16px",
          fontFamily: "var(--font-body)",
        }}
      >
        {title}
      </span>
    </div>
  );
}

// ─── Media renderer ───────────────────────────────────────────────
function MediaRenderer({
  project,
  title,
  autoPlay = false,
}: {
  project: Project;
  title: string;
  autoPlay?: boolean;
}) {
  if (project.video) {
    if (isYouTube(project.video)) {
      return (
        <iframe
          src={autoPlay ? toEmbed(project.video) : project.video.replace("watch?v=", "embed/")}
          style={{ width: "100%", height: "100%", border: "none" }}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      );
    }
    return (
      <video
        src={project.video}
        autoPlay={autoPlay}
        muted
        loop
        controls={autoPlay}
        playsInline
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    );
  }
  if (project.thumbnail) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={project.thumbnail}
        alt={title}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    );
  }
  return <ThumbnailPlaceholder title={title} />;
}

// ─── Modal ────────────────────────────────────────────────────────
interface ModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ModalProps) {
  const { language } = useLanguage();

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  const title = project
    ? language === "tr"
      ? project.title.tr
      : project.title.en
    : "";
  const description = project
    ? language === "tr"
      ? project.longDescription?.tr ?? project.description.tr
      : project.longDescription?.en ?? project.description.en
    : "";

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* ── Backdrop ── */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 500,
              background: "rgba(0,0,0,0.88)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
            }}
          />

          {/* ── Modal panel ── */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ type: "spring", stiffness: 340, damping: 30 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 501,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
              pointerEvents: "none",
            }}
          >
            <div
              data-lenis-prevent="true"
              onClick={(e) => e.stopPropagation()}
              style={{
                pointerEvents: "all",
                background: "var(--surface)",
                border: "1px solid var(--border-hover)",
                borderRadius: "var(--radius-xl)",
                width: "100%",
                maxWidth: "760px",
                maxHeight: "92vh",
                overflowY: "auto",
                position: "relative",
                boxShadow: "0 32px 80px rgba(0,0,0,0.7)",
              }}
            >
              {/* Close button */}
              <button
                id="modal-close-btn"
                onClick={onClose}
                aria-label="Close"
                style={{
                  position: "absolute",
                  top: "14px",
                  right: "14px",
                  zIndex: 10,
                  background: "rgba(0,0,0,0.6)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "50%",
                  width: "38px",
                  height: "38px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "var(--text)",
                  transition: "var(--transition)",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLButtonElement).style.background =
                    "rgba(255,255,255,0.15)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLButtonElement).style.background =
                    "rgba(0,0,0,0.6)")
                }
              >
                <X size={16} />
              </button>

              {/* Media */}
              <div
                style={{
                  width: "100%",
                  aspectRatio: "16/9",
                  background: "var(--bg)",
                  overflow: "hidden",
                  borderRadius:
                    "var(--radius-xl) var(--radius-xl) 0 0",
                  flexShrink: 0,
                }}
              >
                <MediaRenderer project={project} title={title} autoPlay />
              </div>

              {/* Content */}
              <div style={{ padding: "28px 32px 36px" }}>
                {/* Featured badge */}
                {project.featured && (
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--accent)",
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      padding: "4px 12px",
                      borderRadius: "100px",
                      marginBottom: "12px",
                    }}
                  >
                    ⭐ Featured
                  </span>
                )}

                {/* Title */}
                <h2
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(1.3rem, 3vw, 1.8rem)",
                    fontWeight: 700,
                    color: "var(--text)",
                    marginBottom: "16px",
                    lineHeight: 1.25,
                  }}
                >
                  {title}
                </h2>

                {/* Long description */}
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.97rem",
                    lineHeight: 1.85,
                    marginBottom: "24px",
                  }}
                >
                  {description}
                </p>

                {/* Screenshots */}
                {project.screenshots && project.screenshots.length > 0 && (
                  <div style={{ marginBottom: "32px" }}>
                    <h4
                      style={{
                        marginBottom: "16px",
                        color: "var(--text)",
                        fontSize: "1.1rem",
                        fontWeight: 600,
                      }}
                    >
                      {language === "tr" ? "Ekran Görüntüleri" : "Screenshots"}
                    </h4>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                      }}
                    >
                      {project.screenshots.map((src, idx) => (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          key={idx}
                          src={src}
                          alt={`${title} screenshot ${idx + 1}`}
                          style={{
                            width: "100%",
                            height: "auto",
                            borderRadius: "var(--radius-lg)",
                            border: "1px solid var(--border)",
                            objectFit: "cover",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech badges */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    marginBottom: "28px",
                  }}
                >
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                      style={{ fontSize: "0.88rem", padding: "10px 20px" }}
                    >
                      <GithubIcon size={15} />
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      style={{ fontSize: "0.88rem", padding: "10px 20px" }}
                    >
                      <ExternalLink size={15} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
