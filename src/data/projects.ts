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
      tr: "Orbitie LogMetrics",
      en: "Orbitie LogMetrics",
    },
    description: {
      tr: "Orbitie LogMetrics: Yapay Zeka Destekli Akıllı Log Analiz Platformu. Karmaşık sistem loglarını saniyeler içinde anlamlandıran, modern ve yapay zeka (AI) destekli bir log izleme ve analiz aracıdır. .NET ve React teknolojileri üzerine inşa edilen bu platform; sunucularda oluşan hataları yalnızca listelemekle kalmaz, entegre LLM yetenekleri sayesinde hataların kök nedenlerini analiz eder ve geliştiricilere anında çözüm önerileri sunar. Modern \"Dark Mode\" estetiğine ve saydam tasarım diline sahip kullanıcı dostu bir kontrol paneli barındırır. Tek bir çalıştırılabilir dosya (.exe) olarak çalışır ve gün sonu AI raporlarını otomatik e-posta ile iletir.",
      en: "Orbitie LogMetrics: AI-Powered Smart Log Analysis Platform. A modern log monitoring tool that makes sense of complex system logs in seconds. Built on .NET and React, this platform goes beyond merely listing server errors; using integrated LLM capabilities, it analyzes the root causes of errors and provides instant actionable solutions. It features a user-friendly dashboard with a modern Dark Mode aesthetic and glassmorphism design. It runs as a single executable file (.exe) without installation and automatically delivers end-of-day AI status reports via email.",
    },
    longDescription: {
      tr: `Proje Hakkında
Orbitie LogMetrics, günümüz yazılım ekiplerinin en büyük sorunlarından biri olan "kabarık log dosyaları arasında kaybolma" problemini çözmek amacıyla geliştirilmiş, "Hepsi Bir Arada" (All-in-One) bir log analiz sistemidir. Geleneksel log okuyucularının aksine, sadece veriyi göstermekle yetinmez, aynı zamanda veriyi "anlar".

Mimari ve Teknolojiler
Sistem, yüksek performans için .NET 10 API (C#) ile güçlü bir arka yüz (backend) ve React (Vite) ile geliştirilmiş dinamik, hızlı bir ön yüz (frontend) kullanır. Veri depolama için hafif ama etkili olan SQLite tercih edilmiştir. Dağıtımı (deployment) olabildiğince basitleştirmek adına, frontend ve backend birleştirilerek tek bir .exe (Single File Application) dosyası haline getirilmiş, böylece sıfır konfigürasyon ile "tıkla ve çalıştır" seviyesine indirgenmiştir.

Öne Çıkan Ana Özellikler:
🧠 Yapay Zeka (AI) Analizi: Groq API (Llama modelleri) entegrasyonu sayesinde, sistem alınan hataların (Exception) yığın izlerini (stack trace) analiz eder. Hatanın neden kaynaklandığını Türkçe olarak açıklar ve koddaki muhtemel çözüm adımlarını (Actionable Insights) sunar.
📊 Zengin Dashboard ve Metrikler: Sistemdeki hatalar, zaman çizelgeleri (Timeline) ve dairesel grafiklerle (Distribution) görselleştirilir. Geliştiriciler, toplam hata sayısını, benzersiz hata türlerini ve sistem sağlık skorunu anlık olarak takip edebilir.
💌 Akıllı E-Posta Raporlaması: Sistem, "Background Worker" (Arka plan servisi) sayesinde her günün sonunda (veya manuel olarak istendiğinde) tüm logları AI'a özetletir. Bu özet, projenin premium karanlık temasına (Dark Theme) uygun olarak tasarlanmış HTML e-postalar halinde ilgili ekiplere otomatik olarak gönderilir.
⚡ Gerçek Zamanlı (Real-Time) Log İzleme: Belirlenen bir klasördeki .log ve .txt dosyaları FileSystemWatcher ile anlık olarak dinlenir. Yeni bir hata loglandığında, sistem bunu anında yakalar, ayrıştırır (parse eder) ve veri tabanına işler.
🎨 Premium UI / UX Tasarımı: Kullanıcı arayüzü; Glassmorphism (saydamlık) efektleri, pürüzsüz animasyonlar (Toast bildirimleri, iskelet yüklemeleri) ve göz yormayan modern koyu renk paleti ile (Dark Mode) son derece profesyonel bir deneyim sunacak şekilde kodlanmıştır.

Orbitie LogMetrics, karmaşayı otomasyona dönüştürerek yazılım geliştirme ve bakım süreçlerinde kaybedilen saatleri dakikalara indiren akıllı bir asistan görevi görmektedir.`,
      en: `About the Project
Orbitie LogMetrics is an "All-in-One" log analysis system developed to solve one of the biggest problems modern software teams face: "getting lost in bloated log files." Unlike traditional log readers, it doesn't just show data; it "understands" it.

Architecture and Technologies
The system utilizes a powerful backend built with .NET 10 API (C#) for high performance and a dynamic, fast frontend developed with React (Vite). SQLite was chosen as a lightweight yet effective data storage solution. To simplify deployment as much as possible, the frontend and backend are bundled into a single .exe (Single File Application) file, reducing it to a "click and run" level with zero configuration.

Key Features:
🧠 AI Analysis: Through Groq API (Llama models) integration, the system analyzes the stack traces of incoming exceptions. It explains the root cause of the error and provides actionable insights for resolution in the code.
📊 Rich Dashboard and Metrics: System errors are visualized with timelines and pie charts (Distribution). Developers can instantly track total errors, unique error types, and system health scores.
💌 Smart Email Reporting: Using a Background Worker service, the system has the AI summarize all logs at the end of each day (or when manually triggered). This summary is automatically sent to relevant teams as HTML emails tailored to the project's premium dark theme.
⚡ Real-Time Log Monitoring: .log and .txt files in a specified folder are instantly monitored using FileSystemWatcher. When a new error is logged, the system immediately catches, parses, and processes it into the database.
🎨 Premium UI / UX Design: The user interface is coded to offer a highly professional experience with glassmorphism effects, smooth animations (Toast notifications, skeleton loaders), and an eye-friendly modern dark color palette (Dark Mode).

Orbitie LogMetrics acts as a smart assistant that turns chaos into automation, reducing hours lost in software development and maintenance processes to mere minutes.`,
    },
    technologies: ["React", "Vite", "C#", ".NET 10", "SQLite", "Groq AI", "LLM", "SMTP"],
    featured: true,
    video: "/projects/orbitie-log-analyzer/demo.mp4",
  },
];
