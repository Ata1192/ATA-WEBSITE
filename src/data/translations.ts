export const translations = {
  tr: {
    nav: {
      about: "Hakkımda",
      skills: "Beceriler",
      internship: "Staj",
      projects: "Projeler",
      education: "Eğitim",
      contact: "İletişim",
    },
    hero: {
      greeting: "Merhaba, ben",
      title: "Ata Metin",
      subtitle: "Software Engineering Öğrencisi",
      university: "Doğu Akdeniz Üniversitesi",
      description:
        "Yazılım geliştirme tutkusu olan, .NET, React ve modern web teknolojilerine hâkim bir 4. sınıf öğrencisiyim. Şu an stajımı tamamlıyorum ve yeni projeler üretiyorum.",
      cta_projects: "Projelerimi Gör",
      cta_contact: "İletişime Geç",
      open_to: "İş Tekliflerine Açık",
    },
    about: {
      title: "Hakkımda",
      subtitle: "Benim Hikayem",
      p1: "Doğu Akdeniz Üniversitesi'nde Software Engineering bölümünde 4. sınıfa geçmekteyim. Yazılım geliştirmeye olan tutkum beni sürekli yeni teknolojiler öğrenmeye ve pratik projeler üretmeye itiyor.",
      p2: "Şu an Planet Yazılım'da staj yapıyorum. .NET ile ERP installer geliştirimi ve React ile gelişmiş log analiz dashboard'u üzerine çalışıyorum. AI entegrasyonu ve modern web uygulamaları geliştirme konularında aktif olarak deneyim kazanıyorum.",
      p3: "Boş zamanlarımda yeni framework'ler keşfediyor, açık kaynak projelere katkı sağlamayı planlıyor ve backend & frontend arasındaki köprüyü sağlamlaştırıyorum.",
      stat_projects: "Tamamlanan Proje",
      stat_internship: "Staj Deneyimi",
      stat_technologies: "Teknoloji",
      stat_year: "Sınıf",
    },
    skills: {
      title: "Beceriler",
      subtitle: "Teknoloji Stack'im",
      categories: {
        languages: "Programlama Dilleri",
        frameworks: "Framework & Kütüphaneler",
        tools: "Araçlar & Veritabanları",
      },
    },
    internship: {
      title: "Staj Deneyimi",
      subtitle: "Profesyonel Deneyimlerim",
      present: "Devam Ediyor",
      role: "Software Engineering Intern",
      achievements: "Başarılar",
    },
    projects: {
      title: "Projeler",
      subtitle: "Yaptıklarım",
      github: "GitHub",
      demo: "Demo",
      coming_soon: "Yakında Eklenecek",
      coming_soon_desc: "Proje listesi yakında güncellenecek.",
    },
    education: {
      title: "Eğitim",
      subtitle: "Akademik Geçmişim",
      ongoing: "Devam Ediyor",
      gpa: "GPA",
      dept: "Bilgisayar Mühendisliği Fakültesi",
    },
    contact: {
      title: "İletişim",
      subtitle: "Selamlaşalım",
      description:
        "Bir proje için iş birliği yapmak, soru sormak veya sadece merhaba demek istiyorsan — duymaktan mutluluk duyarım!",
      copy_email: "E-postayı Kopyala",
      copied: "Kopyalandı!",
      find_me: "Beni Bul",
      open_to_work: "İş Tekliflerine Açık",
      open_to_work_desc:
        "Staj, part-time veya mezuniyet sonrası pozisyonlara açığım.",
    },
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      internship: "Internship",
      projects: "Projects",
      education: "Education",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      title: "Ata Metin",
      subtitle: "Software Engineering Student",
      university: "Eastern Mediterranean University",
      description:
        "A passionate 4th-year software engineering student proficient in .NET, React, and modern web technologies. Currently completing my internship and building exciting new projects.",
      cta_projects: "View My Projects",
      cta_contact: "Get In Touch",
      open_to: "Open to Opportunities",
    },
    about: {
      title: "About Me",
      subtitle: "My Story",
      p1: "I'm a 4th-year Software Engineering student at Eastern Mediterranean University. My passion for software development constantly drives me to learn new technologies and build practical projects.",
      p2: "Currently interning at Planet Yazılım where I'm working on .NET ERP installer development and an advanced log analysis dashboard built with React — featuring AI-powered insights and real-time monitoring.",
      p3: "In my spare time I explore new frameworks, plan to contribute to open-source projects, and continuously strengthen my full-stack development skills.",
      stat_projects: "Projects",
      stat_internship: "Internship",
      stat_technologies: "Technologies",
      stat_year: "Year",
    },
    skills: {
      title: "Skills",
      subtitle: "My Tech Stack",
      categories: {
        languages: "Programming Languages",
        frameworks: "Frameworks & Libraries",
        tools: "Tools & Databases",
      },
    },
    internship: {
      title: "Internship",
      subtitle: "My Professional Experience",
      present: "Present",
      role: "Software Engineering Intern",
      achievements: "Key Achievements",
    },
    projects: {
      title: "Projects",
      subtitle: "What I've Built",
      github: "GitHub",
      demo: "Demo",
      coming_soon: "Coming Soon",
      coming_soon_desc: "Project list will be updated soon.",
    },
    education: {
      title: "Education",
      subtitle: "My Academic Background",
      ongoing: "Ongoing",
      gpa: "GPA",
      dept: "Faculty of Engineering",
    },
    contact: {
      title: "Contact",
      subtitle: "Let's Connect",
      description:
        "Whether you want to collaborate on a project, ask a question, or just say hello — I'd love to hear from you!",
      copy_email: "Copy Email",
      copied: "Copied!",
      find_me: "Find Me On",
      open_to_work: "Open to Opportunities",
      open_to_work_desc:
        "Available for internships, part-time roles, or full-time positions after graduation.",
    },
  },
};

export type Language = "tr" | "en";
export type Translations = typeof translations.tr;
