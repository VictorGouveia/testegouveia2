/* ============================================================
   GOUVEIA STUDIOS — script.js
   Funcionalidades: navbar responsiva, animações de scroll,
   painel de diagnóstico (efeito de terminal), filtros de galeria,
   lightbox, validação de formulário e botão "voltar ao topo".
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollReveal();
  initDiagnosticPanel();
  initGalleryFilters();
  initLightbox();
  initContactForm();
  initBackToTop();
  initFooterYear();
});

/* ---------- NAVBAR ---------- */
function initNavbar(){
  const navbar = document.querySelector('.navbar');
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  if (navbar){
    const onScroll = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  if (toggle && links){
    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => links.classList.remove('open'));
    });
  }
}

/* ---------- SCROLL REVEAL ---------- */
function initScrollReveal(){
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  if (!('IntersectionObserver' in window)){
    items.forEach(el => el.classList.add('in'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  items.forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 70}ms`;
    observer.observe(el);
  });

  // rede de segurança: garante que o conteúdo nunca fique invisível
  // caso o IntersectionObserver não dispare por algum motivo
  setTimeout(() => {
    items.forEach(el => el.classList.add('in'));
  }, 2500);
}

/* ---------- DIAGNOSTIC PANEL (efeito terminal no Hero) ---------- */
function initDiagnosticPanel(){
  const log = document.querySelector('[data-diagnostic-log]');
  if (!log) return;

  const lines = JSON.parse(log.getAttribute('data-lines') || '[]');
  if (!lines.length) return;

  log.innerHTML = '';
  let lineIndex = 0;

  const typeLine = () => {
    if (lineIndex >= lines.length){
      const meters = document.querySelectorAll('.meter-bar span');
      meters.forEach(m => { m.style.width = m.getAttribute('data-value') + '%'; });
      return;
    }
    const p = document.createElement('div');
    p.className = 'line ok';
    log.appendChild(p);
    const text = lines[lineIndex];
    let charIndex = 0;
    const typeChar = () => {
      if (charIndex <= text.length){
        p.textContent = text.slice(0, charIndex);
        p.style.opacity = 1;
        charIndex++;
        setTimeout(typeChar, 18);
      } else {
        lineIndex++;
        setTimeout(typeLine, 260);
      }
    };
    typeChar();
  };
  typeLine();
}

/* ---------- FILTROS DE GALERIA (fotografia / videomaker / portfólio) ---------- */
function initGalleryFilters(){
  const filterGroups = document.querySelectorAll('[data-filter-group]');
  filterGroups.forEach(group => {
    const buttons = group.querySelectorAll('.filter-btn');
    const targetSelector = group.getAttribute('data-filter-group');
    const items = document.querySelectorAll(`${targetSelector} [data-category]`);
    const emptyState = document.querySelector(`${targetSelector} .gallery-empty`);

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        let visibleCount = 0;

        items.forEach(item => {
          const match = filter === 'todos' || item.getAttribute('data-category') === filter;
          item.style.display = match ? '' : 'none';
          if (match) visibleCount++;
        });

        if (emptyState){
          emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
        }
      });
    });
  });
}

/* ---------- LIGHTBOX (galeria de fotos) ---------- */
function initLightbox(){
  const lightbox = document.querySelector('.lightbox');
  if (!lightbox) return;

  const lightboxImg = lightbox.querySelector('img');
  const caption = lightbox.querySelector('.lightbox-caption');
  const closeBtn = lightbox.querySelector('.lightbox-close');

  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const title = item.querySelector('h4');
      lightboxImg.src = img.getAttribute('data-full') || img.src;
      lightboxImg.alt = img.alt;
      if (caption) caption.textContent = title ? title.textContent : '';
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  const close = () => {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  };
  closeBtn && closeBtn.addEventListener('click', close);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
}

/* ---------- FORMULÁRIO DE CONTATO ---------- */
function initContactForm(){
  const form = document.querySelector('#contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const requiredFields = form.querySelectorAll('[required]');
    let valid = true;
    requiredFields.forEach(field => {
      if (!field.value.trim()){
        valid = false;
        field.style.borderColor = '#ff6b6b';
      } else {
        field.style.borderColor = '';
      }
    });

    if (!valid) return;

    const data = new FormData(form);
    const nome = data.get('nome') || '';
    const servico = data.get('servico') || 'um serviço';
    const mensagem = data.get('mensagem') || '';

    // Encaminha para o WhatsApp com os dados preenchidos
    const texto = `Olá! Meu nome é ${nome}. Tenho interesse em ${servico}. ${mensagem}`;
    const waLink = `https://wa.me/5521999999999?text=${encodeURIComponent(texto)}`;

    const success = form.querySelector('.form-success');
    if (success) success.classList.add('show');

    form.reset();
    window.open(waLink, '_blank');
  });
}

/* ---------- VOLTAR AO TOPO ---------- */
function initBackToTop(){
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 500);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ---------- ANO DO RODAPÉ ---------- */
function initFooterYear(){
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}
