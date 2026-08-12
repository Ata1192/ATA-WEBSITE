"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Aynı session'da bir kez göster
    const shown = sessionStorage.getItem("am-loading-shown");
    if (shown) {
      setLoading(false);
      return;
    }
    const t = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("am-loading-shown", "1");
    }, 2600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "#000000",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "28px",
          }}
          aria-label="Loading"
          role="status"
        >
          {/* AM Logosu */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <motion.span
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "clamp(4rem, 12vw, 7rem)",
                fontWeight: 700,
                color: "#cbcdce",
                letterSpacing: "-0.04em",
                lineHeight: 1,
              }}
              animate={{
                textShadow: [
                  "0 0 20px rgba(203,205,206,0)",
                  "0 0 40px rgba(203,205,206,0.25)",
                  "0 0 20px rgba(203,205,206,0)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              {"<Ata />"}
            </motion.span>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "0.7rem",
                color: "#454748",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
              }}
            >
              ata metin
            </motion.span>
          </motion.div>

          {/* İnce progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{
              width: "140px",
              height: "1px",
              background: "rgba(203,205,206,0.08)",
              borderRadius: "1px",
              overflow: "hidden",
            }}
          >
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.3, ease: "easeInOut" }}
              style={{
                height: "100%",
                background:
                  "linear-gradient(90deg, #cbcdce, #ffffff)",
                boxShadow: "0 0 8px rgba(203,205,206,0.6)",
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
