"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  baseY: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  speed: number;
}

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollRef = useRef(0);
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const init = () => {
      const COUNT = 80;
      particlesRef.current = Array.from({ length: COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        baseY: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        size: Math.random() * 1.8 + 0.4,
        opacity: Math.random() * 0.35 + 0.08,
        // parallax speed — büyük partiküller daha yavaş kayar
        speed: Math.random() * 0.04 + 0.01,
      }));
    };

    resize();
    window.addEventListener("resize", resize);

    const onScroll = () => {
      scrollRef.current = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const MAX_DIST = 130;

    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const scroll = scrollRef.current;
      const particles = particlesRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Normal float hareketi
        p.x += p.vx;
        p.y += p.vy;

        // Ekran dışına çıkınca karşı taraftan geri gel
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Scroll parallax: her partikül farklı hızda aşağı kayar
        const parallaxY = p.y - scroll * p.speed;
        // Ekran dışına çıkınca görünmez yap (seamless)
        const drawY =
          ((parallaxY % canvas.height) + canvas.height) % canvas.height;

        // Partikül çiz
        ctx.beginPath();
        ctx.arc(p.x, drawY, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(203, 205, 206, ${p.opacity})`;
        ctx.fill();

        // Yakın partikülleri çizgiyle bağla
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const drawY2 =
            ((p2.y - scroll * p2.speed) % canvas.height + canvas.height) %
            canvas.height;

          const dx = p.x - p2.x;
          const dy = drawY - drawY2;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < MAX_DIST) {
            // Uzaklıkla orantılı saydamlık
            const alpha = (1 - dist / MAX_DIST) * 0.1;
            ctx.beginPath();
            ctx.moveTo(p.x, drawY);
            ctx.lineTo(p2.x, drawY2);
            ctx.strokeStyle = `rgba(203, 205, 206, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animFrameRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        background: "#000000",
        pointerEvents: "none",
      }}
    />
  );
}
