/* Shared header, footer, cards, lightbox and filters. */
document.documentElement.classList.add('js');

var LOGO = 'media/logo.png';
var WA = 'https://wa.me/27679707137';
var EMAIL = 'hello@oceans88labs.co.za';
var NAV = [
  ['portfolio', 'portfolio.html', 'Portfolio'],
  ['services', 'services.html', 'What we do'],
  ['process', 'process.html', 'How we work'],
  ['packages', 'packages.html', 'Packages'],
  ['about', 'about.html', 'About']
];
var CAT_NAME = {};
CATEGORIES.forEach(function (c) { CAT_NAME[c.id] = c.name; });
var MEDIUM_NAME = { photo: 'Photo', video: 'Video', both: 'Photo + Video' };
var canHover = window.matchMedia('(hover: hover)').matches;
var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function $(s, r) { return (r || document).querySelector(s); }
function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

/* ---------- chrome ---------- */
function buildChrome() {
  var page = document.body.dataset.page || window.PAGE || 'home';
  if (page === 'home') { document.body.classList.add('home'); document.documentElement.classList.add('home-root'); }
  var links = NAV.map(function (n) {
    if (n[0] === 'packages') return packagesMenu(page === 'packages');
    return '<a href="' + n[1] + '"' + (n[0] === page ? ' aria-current="page"' : '') + '>' + n[2] + '</a>';
  }).join('');
  var head = document.createElement('header');
  head.className = 'site-head';
  head.innerHTML =
    '<div class="wrap"><div class="bar">' +
      '<a class="brand" href="index.html" aria-label="Oceans88 Labs Photo and Film home"><span class="mark"><img src="' + LOGO + '" alt="" width="34" height="28"></span><span><b>Oceans88 Labs</b><small>Photo &amp; Film</small></span></a>' +
      '<nav class="nav" id="nav" aria-label="Main">' + links + '<a class="cta cta-m" href="contact.html">Book a shoot <span>→</span></a></nav>' +
      '<a class="cta" href="contact.html">Book a shoot <span>→</span></a>' +
      '<button class="theme-btn" id="theme-btn" type="button" aria-pressed="false" aria-label="Switch to dark background">' +
        '<svg class="i-moon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>' +
        '<svg class="i-sun" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>' +
      '</button>' +
      '<button class="menu-btn" id="menu-btn" type="button" aria-expanded="false" aria-controls="nav" aria-label="Open menu"><span></span><span></span><span></span></button>' +
    '</div></div>';
  document.body.insertBefore(head, document.body.firstChild);

  var foot = document.createElement('footer');
  foot.className = 'site-foot';
  var ICON = {
    linkedin: '<path d="M6.9 8.7H3.8V20h3.1zM5.3 3.6a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6zM20.2 13.6c0-3-1.6-5.1-4.4-5.1-1.4 0-2.4.8-2.8 1.5V8.7H10V20h3.1v-5.6c0-1.5.3-2.9 2.1-2.9s1.9 1.7 1.9 3V20h3.1z" fill="currentColor"/>',
    instagram: '<rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="17.3" cy="6.7" r="1.2" fill="currentColor"/>',
    facebook: '<path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21z" fill="currentColor"/>'
  };
  var social = [['LinkedIn', 'https://linkedin.com/company/oceans88-labs', 'linkedin'], ['Instagram', 'https://www.instagram.com/oceans88_labs', 'instagram'], ['Facebook', 'https://facebook.com/oceans88labs', 'facebook']];
  foot.innerHTML =
    '<div class="wrap">' +
      '<div class="fgrid">' +
        '<div class="fbrand"><img src="' + LOGO + '" alt="Oceans88 Labs">' +
          '<p>Photo &amp; film studio ·<br>Durban, South Africa</p>' +
          '<p class="addr">9 Gowrans Gardens<br>Newlands East, 4051<br>KwaZulu-Natal · South Africa</p></div>' +
        '<div><h4>Studio</h4>' + NAV.map(function (n) { return '<a href="' + n[1] + '">' + n[2] + '</a>'; }).join('') + '<a href="contact.html">Contact</a></div>' +
        '<div><h4>Work</h4>' + CATEGORIES.map(function (c) { return '<a href="portfolio.html#' + c.id + '">' + c.name + '</a>'; }).join('') + '</div>' +
        '<div><h4>Contact</h4><a href="mailto:' + EMAIL + '">' + EMAIL + '</a><a href="' + WA + '" target="_blank" rel="noopener">+27 67 970 7137</a><a href="https://oceans88labs.co.za" target="_blank" rel="noopener">oceans88labs.co.za</a></div>' +
      '</div>' +
      '<div class="base"><p>© 2026 Oceans88 Labs · Photo &amp; Film · Developed by <a href="https://oceans88labs.co.za" target="_blank" rel="noopener">Oceans88 Labs</a></p>' +
        '<div class="fsocial">' + social.map(function (s) { return '<a href="' + s[1] + '" target="_blank" rel="noopener" aria-label="' + s[0] + '"><svg viewBox="0 0 24 24" aria-hidden="true">' + ICON[s[2]] + '</svg></a>'; }).join('') + '</div>' +
      '</div>' +
    '</div>';
  document.body.appendChild(foot);

  var wa = document.createElement('a');
  wa.className = 'wa'; wa.href = WA; wa.target = '_blank'; wa.rel = 'noopener'; wa.setAttribute('aria-label', 'Chat on WhatsApp');
  wa.innerHTML = '<svg viewBox="0 0 32 32" aria-hidden="true"><path fill="#fff" d="M16 3a13 13 0 0 0-11.2 19.6L3 29l6.6-1.7A13 13 0 1 0 16 3zm0 23.6c-2 0-4-.5-5.7-1.6l-.4-.2-3.9 1 1-3.8-.3-.4A10.6 10.6 0 1 1 16 26.6zm5.8-7.9c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-1.9-1.8-2.2-.2-.3 0-.5.1-.7l.5-.6.3-.5c.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.7s1.2 3.2 1.4 3.4c.2.2 2.4 3.6 5.7 5 .8.4 1.4.6 1.9.7.8.3 1.5.2 2.1.1.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4z"/></svg>';
  document.body.appendChild(wa);

  var lb = document.createElement('div');
  lb.className = 'lb'; lb.id = 'lb'; lb.setAttribute('role', 'dialog'); lb.setAttribute('aria-modal', 'true'); lb.setAttribute('aria-label', 'Project');
  document.body.appendChild(lb);

  var btn = $('#menu-btn'), nav = $('#nav');
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });

  var last = 0;
  window.addEventListener('scroll', function () {
    var y = window.scrollY;
    head.classList.toggle('scrolled', y > 10);
    /* the portfolio keeps its header so the filter bar below it never moves */
    head.classList.toggle('hide', page !== 'portfolio' && y > 300 && y > last && !nav.classList.contains('open'));
    last = y;
  }, { passive: true });
}

/* ---------- reveal ---------- */
function reveal() {
  var els = $$('.reveal');
  if (!('IntersectionObserver' in window) || reduced) { els.forEach(function (e) { e.classList.add('in'); }); return; }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { threshold: .12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(function (e) { io.observe(e); });
}

/* ---------- cards ---------- */
/* the grid is built row by row: a large card with a small one, then three, then two halves; repeat */
var ROWS = [['s-lead', ''], ['', '', ''], ['s-half', 's-half']];
function gridSizes(n) {
  var out = [], r = 0;
  while (out.length < n) {
    var row = ROWS[r++ % ROWS.length], left = n - out.length;
    /* the last row always fills the width: one card goes wide, two become halves */
    if (left < row.length) row = left === 1 ? ['s-wide'] : ['s-half', 's-half'];
    out = out.concat(row);
  }
  return out;
}
function frameHTML(p, w) {
  /* cards are still images only; a duration chip marks projects that include film, which plays in the project view */
  var film = p.video || p.vertical;
  return '<div class="frame">' +
    '<img src="' + IMG(p.cover, w || 1200) + '" alt="' + esc(p.title) + ', ' + esc(CAT_NAME[p.cat]) + '" loading="lazy">' +
    (film ? '<span class="chip-dur">' + p.dur + '</span>' : '') +
    '</div>';
}
function cardHTML(p, size) {
  return '<button class="card ' + (size || '') + '" data-id="' + p.id + '" type="button">' +
    frameHTML(p, size === 's-wide' ? 2000 : size === 's-lead' ? 1600 : 1000) +
    '<div class="row"><span class="t"><span>' + esc(p.title) + '</span></span><span class="meta">' + p.year + '</span></div>' +
    '<span class="m">' + CAT_NAME[p.cat] + ' · ' + MEDIUM_NAME[p.medium] + ' · ' + esc(p.client) + '</span></button>';
}
function renderGrid(el, list, animate) {
  /* short lists (a single filter) read better as pairs, with a wide closer when the count is odd */
  var sizes = list.length <= 5
    ? list.map(function (p, i) { return (list.length % 2 && i === list.length - 1) ? 's-wide' : 's-half'; })
    : gridSizes(list.length);
  el.innerHTML = list.map(function (p, i) { return cardHTML(p, sizes[i]); }).join('');
  if (animate) $$('.card', el).forEach(function (c, i) { c.classList.add('enter'); c.style.animationDelay = (i * 35) + 'ms'; });
}
document.addEventListener('click', function (e) {
  var card = e.target.closest('.card[data-id]');
  if (card) { openProject(card.dataset.id); return; }
  var vc = e.target.closest('[data-film]');
  if (vc) { openFilm(vc.dataset.film, vc.dataset.title, vc.dataset.meta, vc.dataset.vertical === '1'); }
});

/* ---------- lightbox ---------- */
var lbList = PROJECTS, lbIndex = 0, lastFocus = null;
function lbShell(inner, label) {
  var lb = $('#lb');
  lb.innerHTML =
    '<div class="lb-bar"><div class="wrap"><span class="meta">' + label + '</span><div class="lb-btns">' +
      (label.indexOf('/') > -1 ? '<button type="button" data-lb="prev" aria-label="Previous project">←</button><button type="button" data-lb="next" aria-label="Next project">→</button>' : '') +
      '<button type="button" class="close" data-lb="close">Close ✕</button></div></div></div>' +
    '<div class="wrap lb-body">' + inner + '</div>';
  if (!lb.classList.contains('open')) { lastFocus = document.activeElement; }
  lb.classList.add('open');
  lb.scrollTop = 0;
  document.body.classList.add('locked');
  $('.close', lb).focus();
}
function closeLb() {
  var lb = $('#lb');
  $$('video', lb).forEach(function (v) { v.pause(); });
  lb.classList.remove('open');
  lb.innerHTML = '';
  document.body.classList.remove('locked');
  if (lastFocus) lastFocus.focus();
}
function openProject(id) {
  var list = window.currentList && window.currentList.length ? window.currentList : PROJECTS;
  lbList = list.some(function (p) { return p.id === id; }) ? list : PROJECTS;
  lbIndex = lbList.findIndex(function (p) { return p.id === id; });
  var p = lbList[lbIndex];
  var next = lbList[(lbIndex + 1) % lbList.length];
  var im = p.images;
  var delivered = [];
  /* the studio's own projects show the real count; stock placeholders keep a typical number */
  var own = p.cover.indexOf('work/') === 0, shots = im.length + 1;
  if (own) delivered.push(shots + (shots === 1 ? ' photograph' : ' photographs'));
  else if (im.length) delivered.push((im.length * 6 + 6) + ' edited photographs');
  if (p.video) delivered.push('1 film, ' + p.dur);
  if (p.vertical) delivered.push(own ? '1 event reel, ' + p.dur : 'vertical cuts for Reels and TikTok');
  if (!delivered.length) delivered.push('Photography');
  var h =
    '<div class="lb-head"><div style="display:grid;gap:18px"><span class="eyebrow">' + CAT_NAME[p.cat] + ' · ' + MEDIUM_NAME[p.medium] + '</span><h1 style="font-size:clamp(2.1rem,3.6vw,3.1rem)">' + esc(p.title) + '</h1><p class="lede">' + esc(p.blurb) + '</p></div>' +
    '<dl class="credits"><dt>Client</dt><dd>' + esc(p.client) + '</dd><dt>Location</dt><dd>' + esc(p.place) + '</dd><dt>Year</dt><dd>' + p.year + '</dd><dt>Delivered</dt><dd>' + delivered.join(', ') + '</dd></dl></div>';
  if (p.video) h += '<video class="lb-video" src="' + VID(p.video) + '" controls autoplay playsinline poster="' + IMG(p.cover, 1600) + '"></video>';
  else h += '<img class="' + (p.layout === 'pairs' ? 'lb-single' : 'lb-full') + '" src="' + IMG(p.cover, 2000) + '" alt="' + esc(p.title) + '">';
  /* 'pairs' layout: every photo shown uncropped, two by two (for sets of tall photos) */
  if (p.layout === 'pairs') {
    for (var k = 0; k < im.length; k += 2) {
      h += '<div class="lb-pair natural">' + im.slice(k, k + 2).map(function (x) { return '<img src="' + IMG(x, 1200) + '" alt="" loading="lazy">'; }).join('') + '</div>';
    }
    im = [];
  }
  if (im.length === 1) h += '<img class="lb-single" src="' + IMG(im[0], 1600) + '" alt="" loading="lazy">';
  if (im.length >= 2) h += '<div class="lb-pair"><img src="' + IMG(im[0], 1000) + '" alt="" loading="lazy"><img src="' + IMG(im[1], 1000) + '" alt="" loading="lazy"></div>';
  if (p.video && im.length) h += '<img class="lb-full" src="' + IMG(p.cover, 2000) + '" alt="" loading="lazy">';
  if (im.length >= 3) h += '<img class="lb-full" src="' + IMG(im[2], 2000) + '" alt="" loading="lazy">';
  if (im.length >= 4) h += '<div class="lb-pair"><img src="' + IMG(im[3], 1000) + '" alt="" loading="lazy"><img src="' + IMG(p.cover, 1000) + '" alt="" loading="lazy"></div>';
  if (p.vertical) h += '<div class="lb-vert"><video src="' + VID(p.vertical) + '" muted loop autoplay playsinline controls></video><div style="display:grid;gap:14px"><span class="eyebrow">Made for social</span><h2>Vertical cuts, <em>ready to post.</em></h2><p class="muted">Every shoot with video includes 9:16 edits for Reels, TikTok and Stories, cut from the same footage.</p></div></div>';
  h += '<button class="lb-next" type="button" data-lb="next"><span class="meta">Next project →</span><h2><span>' + esc(next.title) + '</span></h2><span class="m muted">' + CAT_NAME[next.cat] + ' · ' + MEDIUM_NAME[next.medium] + '</span></button>';
  lbShell(h, 'Project ' + (lbIndex + 1) + ' / ' + lbList.length);
}
function openFilm(path, title, meta, vertical) {
  var h = '<div style="display:grid;gap:14px"><span class="eyebrow">Film</span><h1 style="font-size:clamp(1.9rem,3vw,2.6rem)">' + esc(title) + '</h1><span class="meta">' + esc(meta || '') + '</span></div>' +
    (vertical ? '<div style="max-width:420px;width:100%;margin:0 auto"><video src="' + VID(path) + '" controls autoplay playsinline style="width:100%;aspect-ratio:9/16;object-fit:cover;background:var(--tint)"></video></div>'
              : '<video class="lb-video" src="' + VID(path) + '" controls autoplay playsinline></video>');
  lbShell(h, 'Film');
}
document.addEventListener('click', function (e) {
  var b = e.target.closest('[data-lb]');
  if (!b) return;
  var a = b.dataset.lb;
  if (a === 'close') closeLb();
  if (a === 'next') openProject(lbList[(lbIndex + 1) % lbList.length].id);
  if (a === 'prev') openProject(lbList[(lbIndex - 1 + lbList.length) % lbList.length].id);
});
document.addEventListener('keydown', function (e) {
  if (!$('#lb') || !$('#lb').classList.contains('open')) return;
  if (e.key === 'Escape') closeLb();
  if ($('[data-lb="next"]', $('.lb-bar')) && e.key === 'ArrowRight') openProject(lbList[(lbIndex + 1) % lbList.length].id);
  if ($('[data-lb="prev"]', $('.lb-bar')) && e.key === 'ArrowLeft') openProject(lbList[(lbIndex - 1 + lbList.length) % lbList.length].id);
});

/* ---------- hero background video ---------- */
/* the crew loop: tall cut on phones, wide cut elsewhere; reduced-motion visitors keep the still poster */
function heroVideo() {
  var v = $('#hero-video video');
  if (!v) return;
  var tall = window.matchMedia('(max-width: 760px)').matches;
  if (tall) v.poster = v.dataset.posterTall;
  if (reduced) return;
  v.src = tall ? v.dataset.tall : v.dataset.wide;
  var p = v.play();
  if (p && p.catch) p.catch(function () {});
}

/* ---------- hero background slides ---------- */
function heroSlides() {
  var box = $('#hero-slides');
  if (!box) return;
  var slides = $$('.slide', box), dots = $$('.slide-dots button', box), i = 0, timer;
  function show(n) {
    i = n;
    slides.forEach(function (s, k) { s.classList.toggle('on', k === n); });
    dots.forEach(function (d, k) { d.setAttribute('aria-pressed', k === n); });
  }
  function start() {
    if (reduced) return;
    clearInterval(timer);
    timer = setInterval(function () { show((i + 1) % slides.length); }, 6000);
  }
  dots.forEach(function (d, k) { d.addEventListener('click', function () { show(k); start(); }); });
  show(0);
  start();
}

/* ---------- reels ---------- */
/* reels play muted on a loop while on screen and pause when scrolled away; a click opens the reel with sound */
function renderReels(el) {
  if (!el) return;
  el.innerHTML = REELS.map(function (r) {
    return '<button class="vcard" type="button" data-film="' + r.path + '" data-title="' + esc(r.title) + '" data-vertical="1">' +
      '<div class="frame"><video muted loop playsinline preload="metadata" src="' + VID(r.path) + '#t=0.5" aria-hidden="true"></video>' +
      '</div>' +
      '<b>' + esc(r.title) + '</b></button>';
  }).join('');
  var vids = $$('video', el);
  if (reduced) return;
  function play(v) { var p = v.play(); if (p && p.catch) p.catch(function () {}); }
  if (!('IntersectionObserver' in window)) { vids.forEach(play); return; }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) { en.isIntersecting ? play(en.target) : en.target.pause(); });
  }, { threshold: .25 });
  vids.forEach(function (v) { io.observe(v); });
}

/* ---------- light / dark background ---------- */
function themeToggle() {
  var btn = $('#theme-btn');
  if (!btn) return;
  function show() {
    var dark = document.documentElement.dataset.theme === 'dark';
    btn.setAttribute('aria-pressed', dark ? 'true' : 'false');
    btn.setAttribute('aria-label', dark ? 'Switch to white background' : 'Switch to dark background');
  }
  btn.addEventListener('click', function () {
    var dark = document.documentElement.dataset.theme !== 'dark';
    if (dark) document.documentElement.dataset.theme = 'dark'; else delete document.documentElement.dataset.theme;
    try { localStorage.setItem('o88-theme', dark ? 'dark' : 'light'); } catch (e) {}
    show();
  });
  show();
}

/* ---------- packages and pricing ---------- */
function slug(s) { return String(s).toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }
function priceNum(p) { var m = String(p).match(/\d[\d,]*/); return m ? +m[0].replace(/,/g, '') : Infinity; }
function cheapest(prices) {
  var best = prices.reduce(function (a, b) { return priceNum(b) < priceNum(a) ? b : a; });
  return (prices.length > 1 ? 'from ' : '') + best;
}
/* the items a category shows in the Packages menu: one per card (or event row, or tier) with its lowest price */
function pricingItems(cat) {
  var items = [];
  if (cat.tiers) cat.tiers.forEach(function (t) { items.push({ id: cat.id + '-' + slug(t.name), name: t.name, price: t.price + ' / mo' }); });
  if (cat.table) cat.table.rows.forEach(function (r) { items.push({ id: cat.id + '-' + slug(r[0]), name: r[0], price: 'from ' + r[2] }); });
  if (cat.groups && !cat.tiers) cat.groups.forEach(function (g) { items.push({ id: cat.id + '-' + slug(g.name), name: g.name, price: g.from || cheapest(g.rows.map(function (r) { return r[2]; })) }); });
  return items;
}
function packagesMenu(current) {
  return '<div class="dd"><a class="dd-top" href="packages.html"' + (current ? ' aria-current="page"' : '') + '>Packages <span class="caret" aria-hidden="true">▾</span></a>' +
    '<div class="dd-menu">' + PRICING.map(function (cat) { return '<a href="' + cat.page + '">' + esc(cat.name) + '</a>'; }).join('') + '</div></div>';
}

function priceCard(g, id) {
  return '<article class="price-card" id="' + id + '"><h3>' + esc(g.name) + '</h3>' + (g.note ? '<p class="pc-note">' + esc(g.note) + '</p>' : '') +
    '<div class="pc-rows">' + g.rows.map(function (r) {
      return '<div class="pc-row"><div><b>' + esc(r[0]) + '</b>' + (r[1] ? '<span>' + esc(r[1]) + '</span>' : '') + '</div><strong>' + esc(r[2]) + '</strong></div>';
    }).join('') + '</div></article>';
}
function termCard(g) {
  return '<section class="term-sec"><h3>' + esc(g.name) + '</h3><div class="pc-rows">' + g.rows.map(function (r) {
    return '<div class="pc-row term-row"><b>' + esc(r[0]) + '</b><span>' + esc(r[1]) + '</span></div>';
  }).join('') + '</div></section>';
}

function renderPricing() {
  var tabs = $('#pricing-tabs');
  if (tabs) {
    var cur = tabs.dataset.current;
    var list = [['all', 'packages.html', 'All packages']].concat(PRICING.map(function (c) { return [c.id, c.page, c.name]; }), [['addons', 'packages-addons.html', 'Add-ons'], ['terms', 'terms.html', 'Booking terms']]);
    tabs.innerHTML = list.map(function (t) { return '<a class="chip" href="' + t[1] + '"' + (t[0] === cur ? ' aria-current="page"' : '') + '>' + t[2] + '</a>'; }).join('');
  }

  var hub = $('#pricing-hub');
  if (hub) hub.innerHTML = PRICING.map(function (cat) {
    var items = pricingItems(cat), shown = items.slice(0, 4);
    return '<a class="pkg hub-card" href="' + cat.page + '"><h3>' + esc(cat.name) + '</h3><p class="for">' + esc(cat.em) + '</p>' +
      '<div class="amount"><small>From</small>' + cat.from + '</div>' +
      '<ul class="ticks">' + shown.map(function (i) { return '<li>' + esc(i.name) + '</li>'; }).join('') +
        (items.length > shown.length ? '<li class="more">and ' + (items.length - shown.length) + ' more</li>' : '') + '</ul>' +
      '<span class="btn line">See prices <span class="arr">→</span></span></a>';
  }).join('');

  var el = $('#pricing');
  if (el) {
    var cat = PRICING.filter(function (c) { return c.id === el.dataset.cat; })[0];
    var html = '';
    if (cat.tiers) html += '<div class="packages tiers">' + cat.tiers.map(function (t) {
      return '<article class="pkg' + (t.pop ? ' pop' : '') + '" id="' + cat.id + '-' + slug(t.name) + '">' + (t.pop ? '<span class="tag">Most popular</span>' : '') +
        '<h3>' + t.name + '</h3><div class="amount"><small>Per month</small>' + t.price + '</div>' +
        '<ul class="ticks">' + t.inc.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>' +
        '<a class="btn ' + (t.pop ? 'solid' : 'line') + '" href="contact.html#' + cat.id + '">Book ' + t.name + ' <span class="arr">→</span></a></article>';
    }).join('') + '</div>';
    if (cat.table) html += '<article class="price-card price-table"><div class="pt-row pt-head"><span>Event</span>' + cat.table.cols.map(function (c) { return '<span>' + c + '</span>'; }).join('') + '</div>' +
      cat.table.rows.map(function (r) {
        return '<div class="pt-row" id="' + cat.id + '-' + slug(r[0]) + '"><b>' + esc(r[0]) + '</b><span class="pt-cov">' + esc(r[1]) + '</span>' +
          r.slice(2).map(function (p, k) { return '<strong data-l="' + cat.table.cols[k + 1] + '">' + p + '</strong>'; }).join('') + '</div>';
      }).join('') + '</article>';
    if (cat.groups) html += '<div class="price-grid' + (cat.tiers ? ' single' : '') + '">' + cat.groups.map(function (g) { return priceCard(g, cat.id + '-' + slug(g.name)); }).join('') + '</div>';
    html += '<div class="pricing-foot"><p>All prices in South African Rand. 50% deposit to book. See <a href="packages-addons.html">add-ons</a> and <a href="terms.html">booking terms</a>.</p>' +
      '<a class="btn solid" href="contact.html#' + cat.id + '">Book ' + esc(cat.name.toLowerCase()) + ' <span class="arr">→</span></a></div>';
    el.innerHTML = html;
    if (location.hash) { var t = document.getElementById(location.hash.slice(1)); if (t) setTimeout(function () { t.scrollIntoView({ block: 'center' }); t.classList.add('flash'); }, 60); }
  }

  var add = $('#addons');
  if (add) add.innerHTML = '<div class="price-grid">' + ADDONS.map(function (g) { return priceCard(g, 'addons-' + slug(g.name)); }).join('') + '</div>';
  var terms = $('#terms');
  if (terms) terms.innerHTML = '<article class="price-card terms-card">' + TERMS.map(termCard).join('') + '</article>';
}

/* ---------- portfolio filters ---------- */
function portfolio() {
  var grid = $('#work-grid');
  if (!grid) return;
  var hash = (location.hash || '').slice(1);
  var state = { cat: hash || 'all', med: 'all' };
  if (state.cat !== 'all' && !CAT_NAME[state.cat]) state.cat = 'all';
  var catWrap = $('#cat-chips'), medWrap = $('#med-chips'), count = $('#count');
  catWrap.innerHTML = '<button class="chip" type="button" data-cat="all">All work<sup>' + PROJECTS.length + '</sup></button>' +
    CATEGORIES.map(function (c) {
      var n = PROJECTS.filter(function (p) { return p.cat === c.id || (p.also && p.also.indexOf(c.id) > -1); }).length;
      return '<button class="chip" type="button" data-cat="' + c.id + '">' + c.name + '<sup>' + n + '</sup></button>';
    }).join('');
  function match(p) {
    var okC = state.cat === 'all' || p.cat === state.cat || (p.also && p.also.indexOf(state.cat) > -1);
    var okM = state.med === 'all' || p.medium === state.med || p.medium === 'both';
    return okC && okM;
  }
  function apply(animate) {
    var list = PROJECTS.filter(match);
    /* a category's own projects first, then ones it shares with another category */
    if (state.cat !== 'all') list.sort(function (x, y) { return (x.cat !== state.cat) - (y.cat !== state.cat); });
    window.currentList = list;
    renderGrid(grid, list, animate);
    $('#empty').hidden = list.length > 0;
    count.textContent = list.length + (list.length === 1 ? ' project' : ' projects') +
      (state.cat !== 'all' ? ' in ' + CAT_NAME[state.cat] : '') + (state.med !== 'all' ? ' · ' + MEDIUM_NAME[state.med] : '');
    $$('[data-cat]', catWrap).forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.cat === state.cat); });
    $$('[data-med]', medWrap).forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.med === state.med); });
    try { history.replaceState(null, '', location.pathname + (state.cat !== 'all' ? '#' + state.cat : '')); } catch (e) {}
  }
  catWrap.addEventListener('click', function (e) { var b = e.target.closest('[data-cat]'); if (b) { state.cat = b.dataset.cat; apply(true); } });
  medWrap.addEventListener('click', function (e) { var b = e.target.closest('[data-med]'); if (b) { state.med = b.dataset.med; apply(true); } });
  $('#clear').addEventListener('click', function () { state = { cat: 'all', med: 'all' }; apply(true); });
  window.addEventListener('hashchange', function () {
    var h = location.hash.slice(1);
    if (CAT_NAME[h] && h !== state.cat) { state.cat = h; apply(true); }
  });
  apply(false);
}

/* ---------- quotes ---------- */
function quotes() {
  var box = $('#quote');
  if (!box) return;
  var Q = [
    ['They shot our whole menu in one morning and the photos still look better than anything else on the delivery apps.', 'Owner, Umami House (placeholder)'],
    ['The Reels cuts did more for our launch than the posters. People came in asking for the drink from the video.', 'Bar manager, The Gin Room (placeholder)'],
    ['Calm on the day, quick with the edit. Our guests had highlights the next morning.', 'Events lead, Koncept Studio (placeholder)']
  ];
  var i = 0;
  function show() { $('blockquote', box).textContent = Q[i][0]; $('cite', box).textContent = Q[i][1]; }
  $('#q-prev').addEventListener('click', function () { i = (i + Q.length - 1) % Q.length; show(); });
  $('#q-next').addEventListener('click', function () { i = (i + 1) % Q.length; show(); });
  show();
}

document.addEventListener('DOMContentLoaded', function () {
  buildChrome();
  $$('[data-grid]').forEach(function (g) {
    var ids = g.dataset.grid.split(',');
    var list = ids[0] === 'featured' ? PROJECTS.filter(function (p) { return p.featured; }) : PROJECTS.filter(function (p) { return ids.indexOf(p.id) > -1 || ids.indexOf(p.cat) > -1; });
    window.currentList = list;
    renderGrid(g, list, false);
  });
  heroSlides();
  heroVideo();
  renderReels($('#reels'));
  renderPricing();
  themeToggle();
  portfolio();
  quotes();
  reveal();
});
