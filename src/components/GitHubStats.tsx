"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface GitHubUser {
  public_repos: number;
  followers: number;
  following: number;
}

export default function GitHubStats({ inView }: { inView: boolean }) {
  const [data, setData] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/Ata1192")
      .then((r) => r.json())
      .then((d: GitHubUser) => {
        setData(d);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (!data && !loading) return null;

  const stats = data
    ? [
        { label: "Repos", value: data.public_repos },
        { label: "Followers", value: data.followers },
        { label: "Following", value: data.following },
      ]
    : [
        { label: "Repos", value: "—" },
        { label: "Followers", value: "—" },
        { label: "Following", value: "—" },
      ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.5 }}
      style={{
        marginTop: "24px",
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)",
        padding: "20px 24px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        flexWrap: "wrap",
      }}
    >
      {/* GitHub icon + label */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginRight: "8px" }}>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="var(--text-muted)"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
        <span
          style={{
            fontSize: "0.78rem",
            fontWeight: 600,
            color: "var(--text-muted)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          GitHub
        </span>
      </div>

      {/* Divider */}
      <div
        style={{
          width: "1px",
          height: "32px",
          background: "var(--border)",
          marginRight: "8px",
        }}
      />

      {/* Stats */}
      {stats.map((s) => (
        <div
          key={s.label}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "0 16px",
            borderRight: "1px solid var(--border)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.3rem",
              fontWeight: 700,
              color: "var(--primary)",
              lineHeight: 1.2,
            }}
          >
            {loading ? (
              <span
                style={{
                  display: "inline-block",
                  width: "28px",
                  height: "14px",
                  background: "var(--surface-2)",
                  borderRadius: "4px",
                  animation: "pulse 1.5s ease-in-out infinite",
                }}
              />
            ) : (
              s.value
            )}
          </span>
          <span
            style={{
              fontSize: "0.72rem",
              color: "var(--text-dim)",
              fontWeight: 500,
            }}
          >
            {s.label}
          </span>
        </div>
      ))}

      {/* Son eleman'ın sağ border'ı yok */}
      <style>{`
        div[key="Following"] { border-right: none; }
      `}</style>

      {/* Profile link */}
      <a
        href="https://github.com/Ata1192"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          marginLeft: "auto",
          fontSize: "0.78rem",
          color: "var(--text-dim)",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: "4px",
          transition: "color 0.2s",
        }}
        onMouseEnter={(e) =>
          ((e.target as HTMLElement).style.color = "var(--primary)")
        }
        onMouseLeave={(e) =>
          ((e.target as HTMLElement).style.color = "var(--text-dim)")
        }
      >
        @Ata1192 ↗
      </a>
    </motion.div>
  );
}
