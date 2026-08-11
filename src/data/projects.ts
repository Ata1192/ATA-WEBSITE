export interface Project {
  id: number;
  title: { tr: string; en: string };
  description: { tr: string; en: string };
  longDescription?: { tr: string; en: string };
  technologies: string[];
  github?: string;
  demo?: string;
  /** Image URL for the card thumbnail */
  thumbnail?: string;
  /** Video URL — supports mp4 files OR YouTube links */
  video?: string;
  featured?: boolean;
}

// ────────────────────────────────────────────────────────────
// ADD YOUR PROJECTS HERE
// Each project can have a thumbnail image and/or a video.
//
// video examples:
//   video: "/videos/my-project.mp4"          ← local file in /public/videos/
//   video: "https://youtu.be/dQw4w9WgXcQ"   ← YouTube link (auto-converted to embed)
//
// thumbnail example:
//   thumbnail: "/screenshots/dashboard.png"   ← local file in /public/screenshots/
// ────────────────────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: 1,
    title: {
      tr: "ERP Log Analiz Dashboard'u",
      en: "ERP Log Analysis Dashboard",
    },
    description: {
      tr: "Planet Yazılım'ın ERP uygulaması için yapay zeka destekli React log analiz dashboard'u.",
      en: "AI-powered React log analysis dashboard for Planet Yazılım's ERP application.",
    },
    longDescription: {
      tr: "Planet Yazılım stajı kapsamında geliştirilen bu dashboard, şirketin ERP uygulamasından gelen error loglarını gerçek zamanlı olarak görselleştirir. İstatistik sayfasında günlük/haftalık hata dağılımı grafikler halinde sunulurken, loglar sayfasında tüm hatalar filtrelenebilir ve detaylıca incelenebilir. Yapay zeka entegrasyonu sayesinde seçili bir log, LLM'e gönderilip otomatik analiz ve çözüm önerisi alınabilmektedir. Ayrıca her gece 00:00'da ya da manuel tetiklemeyle günlük istatistik raporu e-posta olarak gönderilmektedir.",
      en: "Developed during the Planet Yazılım internship, this dashboard visualizes error logs from the company's ERP application in real time. The statistics page shows daily/weekly error distributions as charts, the logs page allows filtering and detailed inspection. AI integration lets you send a selected log to an LLM for automated analysis and solution suggestions. A daily report is also emailed automatically at midnight or on manual trigger.",
    },
    technologies: ["React", "Vite", "TypeScript", ".NET", "C#", "AI / LLM", "SMTP"],
    featured: true,
    // thumbnail: "/screenshots/erp-dashboard.png",  ← uncomment and add your screenshot
    // video: "/videos/erp-demo.mp4",                ← uncomment and add your screen recording
  },
];
