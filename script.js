
// === WhatsApp Configuration ===
      const WA_NUMBER = "254107024260";
      const WA_CHAT_MSG =
        "Hi Maseno Cyber Café! I'd like assistance with my Maseno University admission.";
      const WA_CHAT_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_CHAT_MSG)}`;

      const WA_GROUP_LINK = "https://chat.whatsapp.com/DaldbhpPt835dEz6Bv1AN9";

      // Apply links automatically
      document.querySelectorAll("[data-wa]").forEach((link) => {
        link.href = link.dataset.wa === "group" ? WA_GROUP_LINK : WA_CHAT_LINK;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
      });

      // Year
      document.getElementById("year").textContent = new Date().getFullYear();

      // Nav scroll shadow + mobile toggle
      const nav = document.getElementById("nav");
      window.addEventListener(
        "scroll",
        () => nav.classList.toggle("scrolled", window.scrollY > 8),
        { passive: true },
      );
      const toggle = document.getElementById("navToggle");
      const links = document.getElementById("navLinks");
      toggle.addEventListener("click", () => {
        const open = links.classList.toggle("open");
        toggle.setAttribute("aria-expanded", open);
      });
      links.querySelectorAll("a").forEach((a) =>
        a.addEventListener("click", () => {
          links.classList.remove("open");
          toggle.setAttribute("aria-expanded", false);
        }),
      );

      // Services grid
      const SERVICES = [
        {
          code: "PRINT",
          title: "Document printing & photocopy",
          desc: "Admission letter, ID, KCSE, joining instructions — color or B/W, lamination available.",
          price: "From KSh 10 / page",
          icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M9 13h6M9 17h4"/></svg>',
        },
        {
          code: "HELB",
          title: "HELB application help",
          desc: "We sit with you and walk through the official HELB portal step by step. First-time or renewal.",
          price: "KSh 200 flat",
          icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M6 12h.01M18 12h.01"/></svg>',
        },
        {
          code: "GUIDE",
          title: "Admission guidance (1-on-1)",
          desc: "We read your admission letter with you and explain every requirement in plain language.",
          price: "KSh 100 · 30 min",
          icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m16 8-6 2-2 6 6-2 2-6Z"/></svg>',
        },
        {
          code: "PHOTOS",
          title: "Passport & ID photos",
          desc: "Instant passport photos with the correct background for university, SHA, and HELB.",
          price: "KSh 100 / 4pcs",
          icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3Z"/><circle cx="12" cy="13" r="3.5"/></svg>',
        },
        {
          code: "SCAN",
          title: "Scan & email documents",
          desc: "We scan and send your documents to any email — perfect for online HELB/SHA uploads.",
          price: "KSh 20 / page",
          icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2M3 12h18"/></svg>',
        },
        {
          code: "TYPE",
          title: "Typing & CV drafting",
          desc: "For attachment students & second-years — professional CVs, letters, and assignments.",
          price: "From KSh 150",
          icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7V5h16v2M9 20h6M12 5v15"/></svg>',
        },
      ];
      const grid = document.getElementById("services-grid");
      grid.innerHTML = SERVICES.map(
        (s) => `
    <div class="card reveal">
      <div class="top">
        <div class="icon">${s.icon}</div>
        <span class="code">SRV / ${s.code}</span>
      </div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
      <div class="foot">
        <span class="price">${s.price}</span>
        <a href="${WA_CHAT_LINK}" target="_blank" rel="noopener">Ask →</a>
      </div>
    </div>`,
      ).join("");

      // Reveal on scroll
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12 },
      );
      document.querySelectorAll(".reveal").forEach((el) => io.observe(el));