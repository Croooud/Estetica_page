/* Салон красоты «Эстетика» — скрипты страницы */
(function () {
    // ---------- Данные прайса ----------
    const PRICES = [
      {
        id: 'nails', tab: 'Ногти', title: 'Ногтевой сервис', icon: 'hand',
        items: [
          ['Смарт-педикюр (полностью)', '2 300 ₽'],
          ['Смарт-педикюр (без покрытия)', '2 100 ₽'],
          ['Аппаратный маникюр (без покрытия)', '800 ₽'],
          ['Коррекция ногтей', '1 800 – 2 000 ₽'],
          ['Наращивание ногтей', 'от 2 300 – 2 500 ₽'],
          ['Педикюр (пальцы с покрытием)', '1 600 ₽'],
          ['Спа для рук / спа для стоп', '300 ₽'],
        ],
      },
      {
        id: 'hair', tab: 'Волосы', title: 'Парикмахерский зал', icon: 'scissors',
        items: [
          ['Стрижка женская', '1 000 – 1 500 ₽'],
          ['Стрижка мужская', '900 – 1 200 ₽'],
          ['Стрижка горячими ножницами', '2 000 – 3 000 ₽'],
          ['Сложное окрашивание (техники)', 'от 5 000 до 15 000 ₽'],
          ['Окрашивание в один тон', 'от 2 500 до 5 000 ₽'],
          ['Укладка / Прическа', 'от 1 500 / от 2 500 ₽'],
          ['Кератин / Ботокс для волос', 'от 3 500 / от 2 000 ₽'],
          ['Наращивание волос', 'от 7 000 до 15 000 ₽'],
          ['Консультация трихотерапевта', '1 000 ₽'],
        ],
      },
      {
        id: 'cosmo', tab: 'Косметология', title: 'Косметология & Депиляция', icon: 'flower-2',
        items: [
          ['Эстетическая чистка лица', 'от 4 500 до 5 500 ₽'],
          ['Процедура эксфолиации', 'от 3 000 до 5 000 ₽'],
          ['Уходовые процедуры по типу кожи', 'от 4 000 до 5 000 ₽'],
          ['Прокол ушей (1 прокол / комплект)', '500 ₽ / 500–700 ₽'],
          ['Депиляция: подмышки', 'от 800 ₽'],
          ['Депиляция: руки', 'от 900 ₽'],
          ['Депиляция: голени', 'от 1 000 ₽'],
          ['Депиляция: ноги полностью', 'от 1 500 ₽'],
        ],
      },
      {
        id: 'pm', tab: 'Перманент & Брови', title: 'Перманент & Взгляд', icon: 'eye',
        items: [
          ['Перманент бровей / губ', '7 000 ₽'],
          ['Перманент межреснички', '5 000 ₽'],
          ['Коррекция перманента', '4 000 – 5 000 ₽'],
          ['Ламинирование ресниц', '1 600 ₽'],
          ['LED-наращивание ресниц', '2 000–3 000 ₽'],
          ['Ламинирование + окрашивание бровей', '1 600 ₽'],
          ['Коррекция + окрашивание бровей', '900 ₽'],
        ],
      },
    ];

    const CAT_ICONS = {"hand": "<svg class=\"h-4 w-4 md:h-5 md:w-5\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2\" /><path d=\"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2\" /><path d=\"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8\" /><path d=\"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15\" /></svg>", "scissors": "<svg class=\"h-4 w-4 md:h-5 md:w-5\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"6\" cy=\"6\" r=\"3\" /><path d=\"M8.12 8.12 12 12\" /><path d=\"M20 4 8.12 15.88\" /><circle cx=\"6\" cy=\"18\" r=\"3\" /><path d=\"M14.8 14.8 20 20\" /></svg>", "flower-2": "<svg class=\"h-4 w-4 md:h-5 md:w-5\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1\" /><circle cx=\"12\" cy=\"8\" r=\"2\" /><path d=\"M12 10v12\" /><path d=\"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z\" /><path d=\"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z\" /></svg>", "eye": "<svg class=\"h-4 w-4 md:h-5 md:w-5\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0\" /><circle cx=\"12\" cy=\"12\" r=\"3\" /></svg>"};
    const WA = 'https://wa.me/79002332865?text=';
    const tabsEl = document.getElementById('tabs');
    const listEl = document.getElementById('price-list');
    const titleEl = document.getElementById('tab-title');
    const countEl = document.getElementById('tab-count');
    const iconEl = document.getElementById('tab-icon');
    const hasGsap = typeof gsap !== 'undefined';
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const TAB_BASE = 'snap-start shrink-0 whitespace-nowrap rounded-full border px-5 py-3 text-[15px] font-semibold tracking-wide transition duration-300 md:px-7 md:py-3.5 md:text-base';
    const TAB_ON = 'border-transparent bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 text-[#0a231c] shadow-gold';
    const TAB_OFF = 'border-amber-400/20 bg-emerald-950/40 text-stone-300 backdrop-blur-xl hover:border-amber-400/50 hover:text-amber-300';

    function escapeHtml(s) {
      return s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    }

    function plural(n) {
      const m10 = n % 10, m100 = n % 100;
      if (m10 === 1 && m100 !== 11) return 'услуга';
      if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return 'услуги';
      return 'услуг';
    }

    function renderTabs(activeId) {
      tabsEl.innerHTML = PRICES.map(p => `
        <button type="button" role="tab" data-id="${p.id}" aria-selected="${p.id === activeId}"
          class="${TAB_BASE} ${p.id === activeId ? TAB_ON : TAB_OFF}">${escapeHtml(p.tab)}</button>
      `).join('');
    }

    function renderList(cat) {
      document.querySelectorAll('.tab-photo').forEach(f => f.classList.toggle('hidden', f.dataset.tabPhoto !== cat.id));
      titleEl.textContent = cat.title;
      countEl.textContent = `${cat.items.length} ${plural(cat.items.length)}`;
      iconEl.innerHTML = CAT_ICONS[cat.icon] || '';
      listEl.innerHTML = cat.items.map(([name, price]) => {
        price = price || '';
        const msg = encodeURIComponent(`Здравствуйте! Хочу записаться на услугу «${name}» в салон «Эстетика».`);
        return `
          <li class="price-row border-b border-stone-100/10">
            <a href="${WA}${msg}" target="_blank" rel="noopener"
               aria-label="Записаться: ${escapeHtml(name)}${price ? ', ' + escapeHtml(price) : ''}"
               class="group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 py-4 transition sm:py-5">
              <span class="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <span class="min-w-0 text-[17px] font-medium leading-[1.45] text-stone-50 transition group-hover:text-amber-100 xl:text-lg">${escapeHtml(name)}</span>
                ${price ? `<span class="shrink-0 whitespace-nowrap text-[17px] font-semibold leading-[1.4] tabular-nums text-amber-300 sm:text-right sm:text-lg xl:text-[19px]">${escapeHtml(price)}</span>` : `<span class="shrink-0 whitespace-nowrap text-base font-medium leading-[1.4] text-stone-300">Стоимость уточняйте</span>`}
              </span>
              <svg class="h-4 w-4 shrink-0 text-amber-300/60 transition group-hover:translate-x-0.5 group-hover:text-amber-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>
            </a>
          </li>`;
      }).join('');
      if (hasGsap && !reduceMotion) {
        gsap.fromTo('#price-list .price-row',
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.45, stagger: 0.035, ease: 'power2.out' });
        gsap.fromTo('#tab-title', { opacity: 0, x: -8 }, { opacity: 1, x: 0, duration: 0.4, ease: 'power2.out' });
      }
      if (window.ScrollTrigger) ScrollTrigger.refresh();
    }

    function setActive(id) {
      const cat = PRICES.find(p => p.id === id) || PRICES[0];
      renderTabs(cat.id);
      renderList(cat);
      const btn = tabsEl.querySelector(`[data-id="${cat.id}"]`);
      if (btn && tabsEl.scrollWidth > tabsEl.clientWidth) {
        tabsEl.scrollTo({ left: btn.offsetLeft - (tabsEl.clientWidth - btn.offsetWidth) / 2, behavior: 'smooth' });
      }
    }

    tabsEl.addEventListener('click', e => {
      const btn = e.target.closest('button[data-id]');
      if (btn) setActive(btn.dataset.id);
    });

    renderTabs(PRICES[0].id);
    renderList(PRICES[0]);

    document.querySelectorAll('.js-year').forEach(el => el.textContent = new Date().getFullYear());

    // ---------- Галерея работ: нативная прокрутка со «щелчком» + фильтр по направлениям ----------
    const track = document.querySelector('.works-track');
    const allWorkSlides = Array.from(track.children).map(el => el.cloneNode(true));
    const prevBtn = document.querySelector('.works-prev');
    const nextBtn = document.querySelector('.works-next');
    const progressEl = document.querySelector('.works-progress');
    const counterEl = document.querySelector('.works-counter');
    const scrollBehavior = reduceMotion ? 'auto' : 'smooth';

    function slideStep() {
      const s = track.querySelector('.works-slide');
      if (!s) return track.clientWidth;
      const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      return s.getBoundingClientRect().width + gap;
    }
    function updateWorks() {
      const total = track.children.length;
      const max = track.scrollWidth - track.clientWidth;
      const step = slideStep();
      const first = total ? Math.min(total, Math.round(track.scrollLeft / step) + 1) : 0;
      const visible = Math.max(1, Math.round(track.clientWidth / step));
      const shown = Math.min(total, first - 1 + visible);
      progressEl.style.width = (total ? (shown / total) * 100 : 0) + '%';
      counterEl.textContent = total ? `${first} / ${total}` : '';
      prevBtn.disabled = track.scrollLeft <= 2;
      nextBtn.disabled = track.scrollLeft >= max - 2;
    }
    let worksTicking = false;
    track.addEventListener('scroll', () => {
      if (worksTicking) return;
      worksTicking = true;
      requestAnimationFrame(() => { updateWorks(); worksTicking = false; });
    }, { passive: true });
    window.addEventListener('resize', updateWorks);
    prevBtn.addEventListener('click', () => track.scrollBy({ left: -slideStep(), behavior: scrollBehavior }));
    nextBtn.addEventListener('click', () => track.scrollBy({ left: slideStep(), behavior: scrollBehavior }));

    // Перетаскивание мышью на компьютере (на телефоне работает обычный свайп)
    let drag = null;
    track.addEventListener('dragstart', e => e.preventDefault());
    track.addEventListener('pointerdown', e => {
      if (e.pointerType !== 'mouse' || e.button !== 0) return;
      drag = { x: e.clientX, left: track.scrollLeft };
      track.classList.add('is-dragging');
    });
    window.addEventListener('pointermove', e => {
      if (drag) track.scrollLeft = drag.left - (e.clientX - drag.x);
    });
    window.addEventListener('pointerup', () => {
      if (!drag) return;
      drag = null;
      const step = slideStep();
      const target = Math.round(track.scrollLeft / step) * step;
      track.classList.remove('is-dragging');
      track.scrollTo({ left: target, behavior: scrollBehavior });
    });

    const CHIP_ON = ['border-transparent', 'bg-gradient-to-r', 'from-amber-200', 'via-amber-400', 'to-amber-500', 'text-[#0a231c]', 'shadow-gold'];
    const CHIP_OFF = ['border-amber-400/20', 'bg-emerald-950/40', 'text-stone-300', 'hover:border-amber-400/50', 'hover:text-amber-300'];
    document.querySelectorAll('.works-chip').forEach(chip => chip.addEventListener('click', () => {
      const f = chip.dataset.filter;
      document.querySelectorAll('.works-chip').forEach(c => {
        const on = c === chip;
        c.setAttribute('aria-pressed', on);
        CHIP_ON.forEach(k => c.classList.toggle(k, on));
        CHIP_OFF.forEach(k => c.classList.toggle(k, !on));
      });
      const picked = allWorkSlides.filter(el => f === 'all' || el.dataset.cat === f).map(el => el.cloneNode(true));
      track.replaceChildren(...picked);
      track.scrollLeft = 0;
      updateWorks();
    }));
    updateWorks();

    // ---------- Отзывы: «Показать ещё» на мобильных ----------
    const moreBtn = document.getElementById('reviews-more');
    if (moreBtn) moreBtn.addEventListener('click', () => {
      const extra = document.querySelectorAll('.review-extra');
      extra.forEach(el => { el.classList.remove('hidden'); el.classList.add('flex'); });
      moreBtn.remove();
      if (hasGsap && !reduceMotion) gsap.fromTo(extra, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out', clearProps: 'opacity,transform' });
      if (window.ScrollTrigger) ScrollTrigger.refresh();
    });

    // ---------- Шапка: стеклянный фон при скролле ----------
    const header = document.getElementById('site-header');
    const HEADER_ON = ['bg-[#0a231c]/80', 'backdrop-blur-xl', 'shadow-soft'];
    function onScrollHeader(y) {
      const on = y > 24 && window.innerWidth >= 768;
      HEADER_ON.forEach(c => header.classList.toggle(c, on));
    }
    onScrollHeader(window.scrollY);

    // ---------- Плавная прокрутка по якорям ----------
    window.addEventListener('scroll', () => onScrollHeader(window.scrollY), { passive: true });

    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        const offset = a.getAttribute('href') === '#top' ? 0 : (window.innerWidth >= 768 ? -88 : -16);
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY + offset, behavior: scrollBehavior });
      });
    });

    if (hasGsap && !reduceMotion) {
      gsap.registerPlugin(ScrollTrigger);

      // Анимации всегда идут к явному финалу (opacity: 1), поэтому блок не может «застрять» полупрозрачным
      const DONE = { opacity: 1, y: 0, scale: 1 };
      gsap.fromTo('.hero-item', { opacity: 0, y: 24 }, { ...DONE, duration: 1, stagger: 0.09, ease: 'power3.out', delay: 0.1, clearProps: 'opacity,transform' });
      gsap.fromTo('.hero-visual', { opacity: 0, y: 24 }, { ...DONE, duration: 1.2, ease: 'power3.out', delay: 0.25, clearProps: 'opacity,transform' });
      gsap.fromTo('.hero-badge', { opacity: 0 }, { opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.9, clearProps: 'opacity' });

      // Мягкий параллакс фото интерьера
      gsap.utils.toArray('.parallax-img').forEach(img => {
        gsap.fromTo(img, { yPercent: -6 }, {
          yPercent: 6, ease: 'none',
          scrollTrigger: { trigger: img.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
        });
      });

      // Появление блоков при скролле: IntersectionObserver + однократная анимация.
      // Каждый элемент анимируется ровно один раз и в конце получает чистые стили.
      const revealEls = gsap.utils.toArray('.reveal, .reveal-card, .review-card:not(.hidden)');
      gsap.set(revealEls, { opacity: 0, y: 32, transition: 'none' });

      function revealNow(els) {
        els = els.filter(el => !el.dataset.revealed);
        if (!els.length) return;
        els.forEach(el => { el.dataset.revealed = '1'; });
        gsap.to(els, {
          ...DONE, duration: 0.85, stagger: 0.08, ease: 'power3.out', overwrite: true,
          clearProps: 'opacity,transform,transition',
        });
      }

      if ('IntersectionObserver' in window) {
        let queue = [];
        let scheduled = false;
        const io = new IntersectionObserver(entries => {
          entries.forEach(e => {
            if (e.isIntersecting) { queue.push(e.target); io.unobserve(e.target); }
          });
          if (queue.length && !scheduled) {
            scheduled = true;
            requestAnimationFrame(() => { revealNow(queue); queue = []; scheduled = false; });
          }
        }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
        revealEls.forEach(el => io.observe(el));
      } else {
        revealNow(revealEls);
      }

      // Страховка: если браузер/превью не прислал событие — через 4 с показываем всё
      setTimeout(() => revealNow(revealEls.filter(el => el.getBoundingClientRect().top < window.innerHeight * 3)), 4000);

      window.addEventListener('load', () => ScrollTrigger.refresh());
    } else {
      document.querySelectorAll('.parallax-img').forEach(img => img.classList.remove('scale-110'));
    }
  
})();
