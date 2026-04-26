// ===== DADOS DOS FILMES =====
const filmes = {
  godfather: {
    titulo: 'O Poderoso Chefão',
    genero: 'Crime · Drama',
    generoTag: 'Crime',
    ano: '1972',
    duracao: '2h 55min',
    diretor: 'Francis Ford Coppola',
    nota: 9.2,
    estrelas: 5,
    poster: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
    sinopse: 'A saga épica da família Corleone, liderada pelo patriarca Vito Corleone (Marlon Brando). Quando um rival tenta forçá-lo ao negócio de drogas e ele recusa, a família é arrastada para uma guerra brutal. Seu filho Michael (Al Pacino) gradualmente se transforma no novo chefão. Um estudo magistral sobre poder, família, lealdade e corrupção moral.',
    trailer: 'https://www.youtube.com/embed/UaVTIH8mujA'
  },
  godfather2: {
    titulo: 'O Poderoso Chefão II',
    genero: 'Crime · Drama',
    generoTag: 'Crime',
    ano: '1974',
    duracao: '3h 22min',
    diretor: 'Francis Ford Coppola',
    nota: 9.0,
    estrelas: 5,
    poster: 'https://image.tmdb.org/t/p/w500/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg',
    sinopse: 'A continuação e expansão da saga Corleone. Em dois fios narrativos paralelos, acompanhamos a ascensão do jovem Vito (Robert De Niro) na Nova York dos anos 1910 e a consolidação do poder de Michael (Al Pacino) nos anos 1950. Uma obra que rivaliza e supera o original em profundidade e ambição.',
    trailer: 'https://www.youtube.com/embed/9O1Iy9od7-A'
  },
  interstellar: {
    titulo: 'Interestelar',
    genero: 'Ficção Científica · Aventura',
    generoTag: 'Sci-Fi',
    ano: '2014',
    duracao: '2h 49min',
    diretor: 'Christopher Nolan',
    nota: 8.7,
    estrelas: 5,
    poster: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
    sinopse: 'Em um futuro próximo onde a Terra está morrendo, o ex-piloto Cooper lidera astronautas através de um buraco de minhoca perto de Saturno. Sua missão: encontrar um novo planeta habitável para a humanidade. A jornada explora amor, tempo, relatividade e o que significa ser humano, com a trilha sonora de Hans Zimmer que arrepia.',
    trailer: 'https://www.youtube.com/embed/zSWdZVtXT7E'
  },
  fightclub: {
    titulo: 'Clube da Luta',
    genero: 'Drama · Thriller',
    generoTag: 'Thriller',
    ano: '1999',
    duracao: '2h 19min',
    diretor: 'David Fincher',
    nota: 8.8,
    estrelas: 5,
    poster: 'https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg',
    sinopse: 'Um narrador anônimo (Edward Norton), insatisfeito com sua vida vazia e materialista, conhece o carismático Tyler Durden (Brad Pitt) e juntos fundam o Clube da Luta. Uma crítica feroz ao consumismo e à masculinidade tóxica, com um dos finais mais inesquecíveis do cinema.',
    trailer: 'https://www.youtube.com/embed/qtRKdVHc-cE'
  },
  parasite: {
    titulo: 'Parasita',
    genero: 'Drama · Suspense',
    generoTag: 'Suspense',
    ano: '2019',
    duracao: '2h 12min',
    diretor: 'Bong Joon-ho',
    nota: 8.6,
    estrelas: 4,
    poster: 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
    sinopse: 'A família Kim, pobre e desempregada, se infiltra na vida da rica família Park. A história vai do humor negro ao terror puro, construindo uma metáfora devastadora sobre desigualdade social. Primeiro filme não-anglófono a ganhar o Oscar de Melhor Filme.',
    trailer: 'https://www.youtube.com/embed/SEUXfv87Wpk'
  },
  odyssey: {
    titulo: '2001: Uma Odisseia no Espaço',
    genero: 'Ficção Científica',
    generoTag: 'Sci-Fi',
    ano: '1968',
    duracao: '2h 29min',
    diretor: 'Stanley Kubrick',
    nota: 8.3,
    estrelas: 4,
    poster: 'https://image.tmdb.org/t/p/w500/ve72VxNqjGM69Uky4WTo2bK6rfq.jpg',
    sinopse: 'Uma jornada épica da pré-história humana até uma missão ao redor de Júpiter, guiada por um enigmático monólito negro. A bordo da Discovery, a tripulação entra em conflito com HAL 9000. A obra-prima visual de Kubrick que redefiniu o cinema de ficção científica para sempre.',
    trailer: 'https://www.youtube.com/embed/oR_e9y-bka0'
  },
  schindler: {
    titulo: 'A Lista de Schindler',
    genero: 'Drama · História',
    generoTag: 'Drama',
    ano: '1993',
    duracao: '3h 15min',
    diretor: 'Steven Spielberg',
    nota: 9.0,
    estrelas: 5,
    poster: 'https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg',
    sinopse: 'A história real de Oskar Schindler (Liam Neeson), empresário que salvou mais de mil judeus durante o Holocausto. Filmado em preto e branco, o filme de Spielberg é uma das mais poderosas obras sobre a dignidade humana já criadas. Vencedor de 7 Oscars, incluindo Melhor Filme.',
    trailer: 'https://www.youtube.com/embed/gG22XNhtnoY'
  },
  inception: {
    titulo: 'A Origem',
    genero: 'Ficção Científica · Ação',
    generoTag: 'Sci-Fi',
    ano: '2010',
    duracao: '2h 28min',
    diretor: 'Christopher Nolan',
    nota: 8.8,
    estrelas: 5,
    poster: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
    sinopse: 'Dom Cobb (Leonardo DiCaprio) é especialista em roubar segredos dos sonhos alheios. Ele recebe uma missão impossível: implantar uma ideia na mente de alguém — a inceção. Um thriller de ficção científica que desafia os limites entre realidade e sonho em múltiplas camadas de realidade.',
    trailer: 'https://www.youtube.com/embed/YoHD9XEInc0'
  },
  pulpfiction: {
    titulo: 'Pulp Fiction',
    genero: 'Crime · Drama',
    generoTag: 'Crime',
    ano: '1994',
    duracao: '2h 34min',
    diretor: 'Quentin Tarantino',
    nota: 8.9,
    estrelas: 5,
    poster: 'https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
    sinopse: 'Histórias entrelaçadas de criminosos, um boxeador e um casal de assaltantes convergem em Los Angeles. Com diálogos brilhantes e estrutura não-linear revolucionária, Tarantino criou um dos filmes mais influentes da história. Palma de Ouro em Cannes.',
    trailer: 'https://www.youtube.com/embed/s7EdQ4FqbhY'
  },
  goodfellas: {
    titulo: 'Os Bons Companheiros',
    genero: 'Crime · Drama',
    generoTag: 'Crime',
    ano: '1990',
    duracao: '2h 26min',
    diretor: 'Martin Scorsese',
    nota: 8.7,
    estrelas: 5,
    poster: 'https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg',
    sinopse: 'A ascensão e queda de Henry Hill (Ray Liotta) na máfia italiana de Nova York. Scorsese documenta três décadas de vida no crime com uma energia frenética e câmeras que nunca param. Um retrato vívido e brutal do fascínio e da destruição que o crime organizado impõe.',
    trailer: 'https://www.youtube.com/embed/2ilzidi_J8Q'
  }
};

// ===== HELPERS DE IMAGEM E TRAILER =====
function posterFallback(title) {
  const safeTitle = String(title || 'Filme').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="500" height="750" viewBox="0 0 500 750">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#080808"/>
          <stop offset="0.55" stop-color="#141414"/>
          <stop offset="1" stop-color="#2a160f"/>
        </linearGradient>
      </defs>
      <rect width="500" height="750" fill="url(#g)"/>
      <rect x="28" y="28" width="444" height="694" fill="none" stroke="#7a6330" stroke-width="2"/>
      <text x="250" y="328" text-anchor="middle" font-family="Georgia, serif" font-size="34" font-weight="700" fill="#c9a84c">
        <tspan x="250">${safeTitle}</tspan>
      </text>
      <text x="250" y="390" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" letter-spacing="5" fill="#888070">PÔSTER INDISPONÍVEL</text>
      <circle cx="250" cy="510" r="42" fill="none" stroke="#c9a84c" stroke-width="3"/>
      <polygon points="238,487 238,533 278,510" fill="#c9a84c"/>
    </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function getYoutubeId(value) {
  if (!value) return '';
  const raw = String(value).trim();
  if (/^[a-zA-Z0-9_-]{11}$/.test(raw)) return raw;

  const patterns = [
    /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/,
    /youtu\.be\/([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/
  ];

  for (const pattern of patterns) {
    const match = raw.match(pattern);
    if (match) return match[1];
  }
  return '';
}

function buildTrailerEmbed(value) {
  const id = getYoutubeId(value);
  if (!id) return '';
  return `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1&playsinline=1`;
}

function buildTrailerWatch(value) {
  const id = getYoutubeId(value);
  if (!id) return '#';
  return `https://www.youtube.com/watch?v=${id}`;
}

function hydrateUserFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const user = params.get('user');
  if (!user) return;

  const users = getUsers();
  if (!users[user]) users[user] = { password: '', favorites: [] };
  saveUsers(users);
  setCurrentUser(user);

  const cleanUrl = window.location.pathname + window.location.hash;
  history.replaceState(null, '', cleanUrl);
}

function syncUserLinks() {
  const user = getCurrentUser();
  if (!user) return;

  document.querySelectorAll('a[href$=".html"], a[href*=".html#"]').forEach(link => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('http') || href.includes('?user=')) return;

    const [pathAndQuery, hash = ''] = href.split('#');
    const separator = pathAndQuery.includes('?') ? '&' : '?';
    link.setAttribute('href', `${pathAndQuery}${separator}user=${encodeURIComponent(user)}${hash ? `#${hash}` : ''}`);
  });
}

// ===== AUTH (LOCAL STORAGE) =====
function getUsers() {
  return JSON.parse(localStorage.getItem('cinepipocao_users') || '{}');
}

function saveUsers(users) {
  localStorage.setItem('cinepipocao_users', JSON.stringify(users));
}

function getCurrentUser() {
  return localStorage.getItem('cinepipocao_current_user');
}

function setCurrentUser(username) {
  localStorage.setItem('cinepipocao_current_user', username);
}

function clearCurrentUser() {
  localStorage.removeItem('cinepipocao_current_user');
}

function getFavorites() {
  const user = getCurrentUser();
  if (!user) return [];
  const users = getUsers();
  return users[user]?.favorites || [];
}

function toggleFavorite(id) {
  const user = getCurrentUser();
  if (!user) { showToast('Faça login para favoritar filmes!'); return; }
  const users = getUsers();
  if (!users[user].favorites) users[user].favorites = [];
  const idx = users[user].favorites.indexOf(id);
  if (idx === -1) {
    users[user].favorites.push(id);
    showToast('❤️ Adicionado aos favoritos!');
  } else {
    users[user].favorites.splice(idx, 1);
    showToast('💔 Removido dos favoritos.');
  }
  saveUsers(users);
  renderFavButtons();
}

function renderFavButtons() {
  const favs = getFavorites();
  document.querySelectorAll('.card-fav').forEach(btn => {
    const id = btn.dataset.id;
    btn.classList.toggle('active', favs.includes(id));
    btn.title = favs.includes(id) ? 'Remover dos favoritos' : 'Adicionar aos favoritos';
  });
}

// ===== AUTH UI =====
function initAuth() {
  hydrateUserFromUrl();

  const user = getCurrentUser();
  const overlay = document.getElementById('authOverlay');
  const navUser = document.getElementById('navUser');
  const navUserName = document.getElementById('navUserName');

  if (user) {
    if (overlay) overlay.style.display = 'none';
    if (navUser) navUser.style.display = 'flex';
    if (navUserName) navUserName.textContent = user;
    renderFavButtons();
    syncUserLinks();
  } else {
    if (overlay) overlay.style.display = 'flex';
    if (navUser) navUser.style.display = 'none';
  }
}

function switchTab(tab) {
  document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
  document.querySelector(`[data-tab="${tab}"]`).classList.add('active');
  document.getElementById(`form-${tab}`).classList.add('active');
  document.querySelectorAll('.auth-error').forEach(e => e.classList.remove('visible'));
}

function doRegister() {
  const name = document.getElementById('reg-name').value.trim();
  const pass = document.getElementById('reg-pass').value;
  const err = document.getElementById('reg-error');

  if (!name || name.length < 3) {
    err.textContent = 'Nome deve ter pelo menos 3 caracteres.';
    err.classList.add('visible');
    return;
  }
  if (!pass || pass.length < 4) {
    err.textContent = 'Senha deve ter pelo menos 4 caracteres.';
    err.classList.add('visible');
    return;
  }

  const users = getUsers();
  if (users[name]) {
    err.textContent = 'Esse nome já está em uso.';
    err.classList.add('visible');
    return;
  }

  users[name] = { password: pass, favorites: [] };
  saveUsers(users);
  setCurrentUser(name);
  initAuth();
  showToast(`🎬 Bem-vindo ao CinePipocão, ${name}!`);
}

function doLogin() {
  const name = document.getElementById('log-name').value.trim();
  const pass = document.getElementById('log-pass').value;
  const err = document.getElementById('log-error');

  const users = getUsers();
  if (!users[name] || users[name].password !== pass) {
    err.textContent = 'Usuário ou senha incorretos.';
    err.classList.add('visible');
    return;
  }

  setCurrentUser(name);
  initAuth();
  showToast(`🍿 Olá de novo, ${name}!`);
}

function doLogout() {
  clearCurrentUser();
  initAuth();
  const overlay = document.getElementById('authOverlay');
  const navUser = document.getElementById('navUser');
  if (overlay) overlay.style.display = 'flex';
  if (navUser) navUser.style.display = 'none';

  if (!overlay && !location.pathname.endsWith('/index.html') && !location.pathname.endsWith('/')) {
    window.location.href = 'index.html';
  }
}

// ===== RENDER CARDS =====
function buildCardHTML(id, f) {
  const stars = Array.from({length: 5}, (_, i) =>
    `<span class="star ${i < f.estrelas ? 'filled' : ''}">★</span>`
  ).join('');

  return `
    <article class="movie-card" onclick="openModal('${id}')" data-genero="${f.generoTag}">
      <div class="card-poster">
        <img
          src="${f.poster}"
          alt="${f.titulo}"
          loading="lazy"
          decoding="async"
          referrerpolicy="no-referrer"
          onerror="this.onerror=null; this.src=posterFallback(this.alt)"
        />
        <div class="card-overlay">
          <p class="overlay-synopsis">${f.sinopse.substring(0, 120)}...</p>
          <button class="overlay-btn">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg>
            Saiba Mais
          </button>
        </div>
        <span class="card-rating">★ ${f.nota}</span>
        <span class="card-genre">${f.generoTag}</span>
      </div>
      <div class="card-info">
        <h3 class="card-title">${f.titulo}</h3>
        <div class="card-meta">
          <span>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            ${f.ano}
          </span>
          <span>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            ${f.duracao}
          </span>
          <span>${f.diretor}</span>
        </div>
        <div class="card-stars">${stars}</div>
        <button class="card-fav" data-id="${id}" onclick="event.stopPropagation(); toggleFavorite('${id}')" title="Favoritar">♥</button>
      </div>
    </article>
  `;
}

function renderGrid(filter = 'Todos') {
  const grid = document.getElementById('moviesGrid');
  if (!grid) {
    updateStats();
    return;
  }

  grid.innerHTML = '';
  Object.entries(filmes).forEach(([id, f]) => {
    if (filter === 'Todos' || f.generoTag === filter) {
      grid.insertAdjacentHTML('beforeend', buildCardHTML(id, f));
    }
  });
  renderFavButtons();
  updateStats();
}

// ===== FILTER =====
function setFilter(btn, genre) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderGrid(genre);
}

// ===== ABRIR MODAL =====
function openModal(id) {
  const f = filmes[id];
  if (!f) return;

  document.getElementById('modalGenre').textContent = f.genero;
  document.getElementById('modalTitle').textContent = f.titulo;
  document.getElementById('modalMeta').textContent = `${f.ano} · ${f.duracao} · Dir. ${f.diretor}`;
  document.getElementById('modalSynopsis').textContent = f.sinopse;
  document.getElementById('modalScore').textContent = `${f.nota} / 10`;

  const trailerEl = document.getElementById('modalTrailer');
  const trailerLink = document.getElementById('modalTrailerLink');
  if (trailerEl) {
    trailerEl.src = buildTrailerEmbed(f.trailer);
    trailerEl.title = `Trailer - ${f.titulo}`;
  }
  if (trailerLink) {
    trailerLink.href = buildTrailerWatch(f.trailer);
  }

  const starsEl = document.getElementById('modalStars');
  starsEl.innerHTML = '';
  for (let i = 1; i <= 5; i++) {
    const s = document.createElement('span');
    s.textContent = '★';
    s.style.color = i <= f.estrelas ? 'var(--gold)' : 'var(--gold-dim)';
    s.style.fontSize = '1rem';
    starsEl.appendChild(s);
  }

  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('modalOverlay');
  if (!overlay) return;

  overlay.classList.remove('open');
  const trailerEl = document.getElementById('modalTrailer');
  if (trailerEl) trailerEl.src = '';
  document.body.style.overflow = '';
}

function closeModalOutside(e) {
  const overlay = document.getElementById('modalOverlay');
  if (overlay && e.target === overlay) closeModal();
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && document.getElementById('modalOverlay')) closeModal();
});

// ===== TOAST =====
function showToast(msg) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

// ===== STATS =====
function animateCounter(el, target, duration = 1500) {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start += step;
    if (start >= target) {
      el.textContent = target;
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(start);
    }
  }, 16);
}

function updateStats() {
  const total = Object.keys(filmes).length;
  const countFilmes = document.getElementById('countFilmes');
  if (countFilmes) countFilmes.textContent = total;
}

const statsObserver = 'IntersectionObserver' in window
  ? new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const countFilmes = document.getElementById('countFilmes');
          const countAnos = document.getElementById('countAnos');
          const countDiretores = document.getElementById('countDiretores');
          const countHoras = document.getElementById('countHoras');

          if (countFilmes) animateCounter(countFilmes, Object.keys(filmes).length);
          if (countAnos) animateCounter(countAnos, 15);
          if (countDiretores) animateCounter(countDiretores, 60);
          if (countHoras) animateCounter(countHoras, 520);
          statsObserver.disconnect();
        }
      });
    }, { threshold: 0.3 })
  : null;

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ===== NAV SCROLL =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) current = sec.getAttribute('id') || '';
  });
  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === `#${current}` ? 'var(--gold)' : '';
  });
});

// ===== CONTATO =====
function initContatoForm() {
  const form = document.getElementById('contatoForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Mensagem registrada! Como o site é estático, conecte este formulário a um backend ou serviço de formulário para enviar de verdade.');
    form.reset();
  });
}

// ===== INIT =====
window.addEventListener('DOMContentLoaded', () => {
  initAuth();
  renderGrid();
  initContatoForm();

  const sobreEl = document.getElementById('sobre');
  if (sobreEl && statsObserver) statsObserver.observe(sobreEl);

  setTimeout(() => {
    if (getCurrentUser()) {
      showToast(`🍿 Bem-vindo de volta, ${getCurrentUser()}!`);
    }
  }, 2000);
});
