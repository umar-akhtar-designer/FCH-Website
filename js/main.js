/* ============================================================
   Future Career Hub — Shared JS (header, footer, interactions)
   ============================================================ */

window.FCH = (() => {

  /* ---- Data ---- */
  const destinations = [
    { flag:'🇬🇧', name:'United Kingdom', href:'destinations.html' },
    { flag:'🇺🇸', name:'United States',  href:'destinations.html' },
    { flag:'🇨🇦', name:'Canada',         href:'destinations.html' },
    { flag:'🇦🇺', name:'Australia',      href:'destinations.html' },
    { flag:'🇩🇪', name:'Germany',        href:'destinations.html' },
    { flag:'🇫🇷', name:'France',         href:'destinations.html' },
    { flag:'🇳🇱', name:'Netherlands',    href:'destinations.html' },
    { flag:'🇸🇪', name:'Sweden',         href:'destinations.html' },
    { flag:'🇳🇿', name:'New Zealand',    href:'destinations.html' },
    { flag:'🇮🇪', name:'Ireland',        href:'destinations.html' },
    { flag:'🇲🇾', name:'Malaysia',       href:'destinations.html' },
    { flag:'🇩🇰', name:'Denmark',        href:'destinations.html' },
  ];

  const services = [
    { title:'Visa Counselling',       href:'services.html#visa' },
    { title:'University Selection',   href:'services.html#university' },
    { title:'Admissions Assistance',  href:'services.html#admissions' },
    { title:'IELTS / PTE Prep',       href:'services.html#ielts' },
    { title:'Scholarship Guidance',   href:'services.html#scholarship' },
    { title:'SOP & Essay Writing',    href:'services.html#sop' },
    { title:'Pre-Departure Briefing', href:'services.html#predeparture' },
    { title:'Accommodation Support',  href:'services.html#accommodation' },
    { title:'Post-Arrival Support',   href:'services.html#postarrival' },
  ];

  /* ---- Header HTML ---- */
  function buildHeader(currentPage) {
    const root = currentPage === 'root' ? '' : '../';
    const destItems = destinations.map(d => `
      <a href="${root}${d.href}" class="dropdown-item">
        <span class="dropdown-flag-emoji">${d.flag}</span>
        ${d.name}
      </a>`).join('');
    const servItems = services.map(s => `
      <a href="${root}${s.href}" class="dropdown-item">${s.title}</a>`).join('');

    return `
    <div id="site-header">
      <div class="nav-wrap">
        <a href="${root}index.html" class="nav-logo">
          <img src="${root}assets/fch-logo.png" alt="Future Career Hub" />
          <span class="nav-logo-text">Future Career <span>Hub</span></span>
        </a>
        <nav class="nav-links">
          <a href="${root}index.html" class="nav-link" data-page="home">Home</a>

          <div class="nav-dropdown">
            <button class="nav-dropdown-btn" id="dest-btn" data-page="destinations">
              Destinations
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            <div class="dropdown-menu" id="dest-menu">
              <div class="dropdown-grid cols-3">${destItems}</div>
            </div>
          </div>

          <div class="nav-dropdown">
            <button class="nav-dropdown-btn" id="serv-btn" data-page="services">
              Services
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            <div class="dropdown-menu" id="serv-menu">
              <div class="dropdown-grid cols-3">${servItems}</div>
            </div>
          </div>

          <a href="${root}about.html"    class="nav-link" data-page="about">About</a>
          <a href="${root}process.html"  class="nav-link" data-page="process">Process</a>
          <a href="${root}gallery.html"  class="nav-link" data-page="gallery">Gallery</a>
          <a href="${root}faq.html"      class="nav-link" data-page="faq">FAQs</a>
        </nav>
        <a href="${root}partner.html" class="btn btn-primary nav-cta">
          Become a Partner
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
        <button class="nav-hamburger" id="hamburger" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>

    <div class="nav-mobile" id="mobile-nav">
      <a href="${root}index.html" class="nav-mobile-link">Home</a>
      <a href="${root}destinations.html" class="nav-mobile-link">Destinations</a>
      <a href="${root}services.html"     class="nav-mobile-link">Services</a>
      <a href="${root}about.html"        class="nav-mobile-link">About</a>
      <a href="${root}process.html"      class="nav-mobile-link">Process</a>
      <a href="${root}gallery.html"      class="nav-mobile-link">Gallery</a>
      <a href="${root}faq.html"          class="nav-mobile-link">FAQs</a>
      <a href="${root}partner.html"      class="nav-mobile-link" style="background:#D81E2C;color:#fff;border-radius:12px;margin-top:8px;border:none;">Become a Partner →</a>
    </div>`;
  }

  /* ---- Footer HTML ---- */
  function buildFooter(currentPage) {
    const root = currentPage === 'root' ? '' : '../';
    return `
    <footer id="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <div class="footer-brand-logo">
              <img src="${root}assets/fch-logo.png" alt="Future Career Hub" />
              <span class="footer-brand-name">Future Career Hub</span>
            </div>
            <p class="footer-desc">Build Future With Us. Expert study-abroad guidance, transparent visa support, and admissions to top universities worldwide.</p>
            <div class="footer-socials">
              <a href="https://www.facebook.com/fchofficials1" target="_blank" rel="noopener" class="footer-social" aria-label="Facebook"><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3l.5-3H14V4.5c0-.8.3-1.5 1.5-1.5H17V.2C16.7.1 15.6 0 14.3 0 11.8 0 10 1.5 10 4.2V6H7v3h3v9h4z"/></svg></a>
              <a href="https://www.instagram.com/fchofficials/" target="_blank" rel="noopener" class="footer-social" aria-label="Instagram"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>
              <a href="https://www.linkedin.com/company/future-career-hub1/" target="_blank" rel="noopener" class="footer-social" aria-label="LinkedIn"><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4 0 4.75 2.65 4.75 6.1V21h-4v-5.5c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21h-4z"/></svg></a>
              <a href="https://www.youtube.com/@FutureCareerHub" target="_blank" rel="noopener" class="footer-social" aria-label="YouTube"><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M23 7.5a3 3 0 0 0-2.1-2.1C19 4.9 12 4.9 12 4.9s-7 0-8.9.5A3 3 0 0 0 1 7.5 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.5a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.5 31 31 0 0 0-.5-4.5zM9.8 15.3V8.7l5.7 3.3z"/></svg></a>
            </div>
          </div>
          <div>
            <div class="footer-col-title">Quick Links</div>
            <div class="footer-links">
              <a href="${root}index.html">Home</a>
              <a href="${root}about.html">About Us</a>
              <a href="${root}process.html">How It Works</a>
              <a href="${root}gallery.html">Gallery</a>
              <a href="${root}faq.html">FAQs</a>
              <a href="${root}partner.html">Become a Partner</a>
            </div>
          </div>
          <div>
            <div class="footer-col-title">Destinations</div>
            <div class="footer-links">
              <a href="${root}destinations.html">United Kingdom</a>
              <a href="${root}destinations.html">United States</a>
              <a href="${root}destinations.html">Canada</a>
              <a href="${root}destinations.html">Australia</a>
              <a href="${root}destinations.html">Germany</a>
              <a href="${root}destinations.html">France</a>
              <a href="${root}destinations.html">View All →</a>
            </div>
          </div>
          <div>
            <div class="footer-col-title">Services</div>
            <div class="footer-links">
              <a href="${root}services.html#visa">Visa Counselling</a>
              <a href="${root}services.html#university">University Selection</a>
              <a href="${root}services.html#ielts">IELTS / PTE Prep</a>
              <a href="${root}services.html#scholarship">Scholarship Guidance</a>
              <a href="${root}services.html#sop">SOP Writing</a>
              <a href="${root}services.html#predeparture">Pre-Departure</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p class="footer-copy">© 2026 Future Career Hub. All rights reserved.</p>
          <p class="footer-copy" style="display:flex;align-items:center;gap:20px;flex-wrap:wrap;justify-content:center;">
            <a href="tel:+923433350139" style="display:flex;align-items:center;gap:7px;color:inherit;text-decoration:none;">
              <span style="display:flex;align-items:center;justify-content:center;width:30px;height:30px;border-radius:50%;background:rgba(255,255,255,.15);flex-shrink:0;">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17z"/></svg>
              </span>
              0343-3350139
            </a>
            <span style="opacity:.3;">|</span>
            <a href="mailto:fchofficials@gmail.com" style="display:flex;align-items:center;gap:7px;color:inherit;text-decoration:none;">
              <span style="display:flex;align-items:center;justify-content:center;width:30px;height:30px;border-radius:50%;background:rgba(255,255,255,.15);flex-shrink:0;">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </span>
              fchofficials@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>

    <a href="https://wa.me/923433350139?text=Hi%20Future%20Career%20Hub%2C%20I%27d%20like%20a%20free%20consultation" target="_blank" class="whatsapp-btn" aria-label="WhatsApp">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff"><path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35zM12 2a10 10 0 0 0-8.6 15.07L2 22l5.05-1.32A10 10 0 1 0 12 2z"/></svg>
    </a>`;
  }

  /* ---- Inject & Init ---- */
  function init(pageId, currentPage) {
    currentPage = currentPage || 'root';

    // Inject Font Awesome if not already loaded
    if (!document.querySelector('link[href*="font-awesome"]')) {
      const fa = document.createElement('link');
      fa.rel = 'stylesheet';
      fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';
      document.head.appendChild(fa);
    }

    // Inject header
    const hSlot = document.getElementById('header-slot');
    if (hSlot) hSlot.innerHTML = buildHeader(currentPage);

    // Inject footer
    const fSlot = document.getElementById('footer-slot');
    if (fSlot) fSlot.innerHTML = buildFooter(currentPage);

    // Set active nav link
    document.querySelectorAll('.nav-link[data-page], .nav-dropdown-btn[data-page]').forEach(el => {
      if (el.dataset.page === pageId) el.classList.add('active');
    });

    // Dropdown menus — hover with delay so cursor can reach the menu
    const hideTimers = {};
    ['dest','serv'].forEach(id => {
      const btn  = document.getElementById(id+'-btn');
      const menu = document.getElementById(id+'-menu');
      if (!btn || !menu) return;

      const show = () => {
        clearTimeout(hideTimers[id]);
        closeOthers(id);
        menu.classList.add('show');
        btn.classList.add('open');
      };
      const hide = () => {
        hideTimers[id] = setTimeout(() => {
          menu.classList.remove('show');
          btn.classList.remove('open');
        }, 180);
      };

      btn.addEventListener('mouseenter', show);
      btn.addEventListener('mouseleave', hide);
      menu.addEventListener('mouseenter', () => clearTimeout(hideTimers[id]));
      menu.addEventListener('mouseleave', hide);
    });

    function closeOthers(exceptId) {
      ['dest','serv'].forEach(id => {
        if (id === exceptId) return;
        const m = document.getElementById(id+'-menu');
        const b = document.getElementById(id+'-btn');
        if (m) m.classList.remove('show');
        if (b) b.classList.remove('open');
      });
    }

    // Mobile menu
    const hamburger  = document.getElementById('hamburger');
    const mobileNav  = document.getElementById('mobile-nav');
    if (hamburger && mobileNav) {
      hamburger.addEventListener('click', () => {
        mobileNav.classList.toggle('open');
        document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
      });
    }

    // Scroll reveal
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
    }, { threshold:0.12 });
    const observeReveal = el => observer.observe(el);
    document.querySelectorAll('.reveal, [data-reveal]').forEach(observeReveal);

    // The homepage renders its content asynchronously (React, loaded after
    // this script runs), so [data-reveal] elements often don't exist yet
    // above — watch for them being added so they still get observed.
    const revealMo = new MutationObserver(mutations => {
      for (const m of mutations) {
        for (const node of m.addedNodes) {
          if (node.nodeType !== 1) continue;
          if (node.matches && node.matches('.reveal, [data-reveal]')) observeReveal(node);
          if (node.querySelectorAll) node.querySelectorAll('.reveal, [data-reveal]').forEach(observeReveal);
        }
      }
    });
    revealMo.observe(document.body, { childList: true, subtree: true });
    setTimeout(() => revealMo.disconnect(), 15000);

    // Safety net: never leave content permanently invisible if the observer
    // can't fire for some reason.
    setTimeout(() => {
      document.querySelectorAll('.reveal:not(.visible), [data-reveal]:not(.visible)').forEach(el => el.classList.add('visible'));
    }, 4000);

    // Accordion
    document.querySelectorAll('.accordion-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const body = btn.nextElementSibling;
        const isOpen = btn.classList.contains('open');
        document.querySelectorAll('.accordion-btn.open').forEach(b => {
          b.classList.remove('open');
          if (b.nextElementSibling) b.nextElementSibling.classList.remove('open');
        });
        if (!isOpen) { btn.classList.add('open'); if (body) body.classList.add('open'); }
      });
    });

    // Counter animation
    document.querySelectorAll('[data-counter]').forEach(el => {
      const target = +el.dataset.counter;
      const dur = 1800, step = 30;
      let t = 0;
      const iv = setInterval(() => {
        t += step;
        const p = Math.min(1, t / dur);
        const e = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * e).toLocaleString() + (el.dataset.suffix || '');
        if (p >= 1) clearInterval(iv);
      }, step);
    });

    // Smooth scroll for hash links
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) { e.preventDefault(); target.scrollIntoView({ behavior:'smooth', block:'start' }); }
      });
    });
  }

  /* ---- Toast ---- */
  let toastTimer = null;
  function toast(message, type) {
    let wrap = document.getElementById('fch-toast-wrap');
    if (!wrap) {
      wrap = document.createElement('div');
      wrap.id = 'fch-toast-wrap';
      document.body.appendChild(wrap);
    }
    wrap.innerHTML = '';

    const el = document.createElement('div');
    el.className = 'fch-toast' + (type === 'error' ? ' fch-toast-error' : '');
    el.innerHTML =
      '<span class="fch-toast-icon">' +
        (type === 'error'
          ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>'
          : '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>') +
      '</span>' +
      '<span class="fch-toast-msg"></span>';
    el.querySelector('.fch-toast-msg').textContent = message;
    wrap.appendChild(el);

    requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('fch-toast-show')));

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      el.classList.remove('fch-toast-show');
      setTimeout(() => el.remove(), 350);
    }, 4000);
  }

  return { init, toast };
})();

// Page loader — shown for at least 1s on every load/refresh, then fades out
(function () {
  const body = document.body;
  if (!body) return;

  const loaderWords = ['visas', 'universities', 'scholarships', 'futures'];
  const loader = document.createElement('div');
  loader.id = 'fch-loader';
  loader.innerHTML =
    '<div class="fch-loader-card">' +
      '<div class="fch-loader-row">' +
        '<span>loading</span>' +
        '<span class="fch-loader-word">' + loaderWords[0] + '</span>' +
        '<span class="fch-loader-dots"><span>.</span><span>.</span><span>.</span></span>' +
      '</div>' +
    '</div>';
  body.prepend(loader);

  const wordEl = loader.querySelector('.fch-loader-word');
  let wordIndex = 0;
  const wordTimer = setInterval(() => {
    wordEl.style.opacity = '0';
    setTimeout(() => {
      wordIndex = (wordIndex + 1) % loaderWords.length;
      wordEl.textContent = loaderWords[wordIndex];
      wordEl.style.opacity = '1';
    }, 250);
  }, 1300);

  const loaderStart = Date.now();
  function hideLoader() {
    const wait = Math.max(0, 1000 - (Date.now() - loaderStart));
    setTimeout(() => {
      loader.classList.add('fch-loader-hide');
      clearInterval(wordTimer);
      setTimeout(() => loader.remove(), 500);
    }, wait);
  }
  if (document.readyState === 'complete') hideLoader();
  else window.addEventListener('load', hideLoader);
})();

// Auto-init using data-page attribute on <body> — eliminates race condition with defer
(function () {
  const body = document.body;
  if (!body) return;
  const pageId = body.dataset.page || 'home';
  const pageRoot = body.dataset.root || 'root';
  window.FCH.init(pageId, pageRoot);
})();
