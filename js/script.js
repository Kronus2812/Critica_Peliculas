const MOVIES = [
  {
    id: 'avatar-2025',
    title: 'Avatar',
    year: 2025,
    genre: 'Ciencia ficción',
    synopsis: 'Secuela épica en el mundo de Pandora. Nuevas amenazas y paisajes impresionantes.',
    actors: ['Sam Worthington', 'Zoe Saldana', 'Sigourney Weaver'],
    trailer: 'nb_fFj_0rq8',
    poster: 'img/Av.jpg'
  },
  {
    id: 'batman-ii-2025',
    title: 'Batman Part II',
    year: 2025,
    genre: 'Acción',
    synopsis: 'La ciudad de Gotham enfrenta a un nuevo villano mientras Batman vuelve más oscuro.',
    actors: ['Robert Pattinson', 'Zoë Kravitz'],
    trailer: 'T7_zMl_ZhdQ',
    poster: 'img/Bat.jpg'
  },
  {
    id: 'deadpool-wolverine',
    title: 'Deadpool x Wolverine',
    year: 2024,
    genre: 'Acción / Comedia',
    synopsis: 'Un choque de estilos: irreverencia de Deadpool con la ferocidad de Wolverine.',
    actors: ['Ryan Reynolds', 'Hugh Jackman'],
    trailer: 'UzFZR2dRsSY',
    poster: 'img/Dead.jpg'
  },
  {
    id: 'dune-2',
    title: 'Duna: Parte 2',
    year: 2024,
    genre: 'Épica',
    synopsis: 'Continúa la adaptación de la obra maestra, con batallas por Arrakis y destino de Paul.',
    actors: ['Timothée Chalamet', 'Zendaya'],
    trailer: 'ni55SHApxhA',
    poster: 'img/Dune.jpg'
  },
  {
    id: 'formula-1',
    title: 'Formula 1',
    year: 2025,
    genre: 'Deporte / Drama',
    synopsis: 'Drama detrás de las cámaras en el mundo de la Fórmula 1: rivalidades y velocidad.',
    actors: ['Actor A', 'Actor B'],
    trailer: 'aw8YyC4B1EA',
    poster: 'img/f1.jpg'
  },
  {
    id: 'inside-out-2',
    title: 'Inside Out 2',
    year: 2024,
    genre: 'Animación',
    synopsis: 'Nueva etapa de emociones y cambios en la vida de Riley.',
    actors: ['Amy Poehler (voz)', 'Phyllis Smith (voz)'],
    trailer: 'ahogVfXzqs4',
    poster: 'img/Inside.jpg'
  },
  {
    id: 'tron-ares-2025',
    title: 'Tron: Ares',
    year: 2025,
    genre: 'Ciencia ficción',
    synopsis: 'Nueva historia dentro del ciberuniverso. Gráficos futuristas y batallas digitales.',
    actors: ['Actor X', 'Actor Y'],
    trailer: 'zvahPW14Qos',
    poster: 'img/Tron.png'
  },
  {
    id: 'godzilla-vs-kong',
    title: 'Godzilla vs Kong',
    year: 2024,
    genre: 'Monstruos',
    synopsis: 'La épica confrontación entre dos titanes en paisajes colosales.',
    actors: ['Alexander Skarsgård', 'Millie Bobby Brown'],
    trailer: 'RIKOJP9PHP0',
    poster: 'img/God.jpeg'
  }
];

function getQueryParam(name) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

function escapeHtml(s) {
  return String(s)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function renderStars(n) {
  let out = '';
  for (let i = 0; i < n; i++) out += '★';
  for (let i = n; i < 5; i++) out += '☆';
  return `<span class="star">${out}</span>`;
}



function getReviewKey(movieId) {
  return `reviews_${movieId}`;
}

function loadReviews(movieId) {
  const key = getReviewKey(movieId);
  const raw = localStorage.getItem(key);

  if (!raw) return [];

  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    localStorage.removeItem(key);
    return [];
  }
}

function saveReviews(movieId, reviews) {
  const key = getReviewKey(movieId);
  localStorage.setItem(key, JSON.stringify(reviews));
}

function createReview(movieId, { name, text, rating }) {
  const trimmedName = name.trim();
  const trimmedText = text.trim();
  const numericRating = Number.parseInt(rating, 10);

  if (!trimmedName || !trimmedText || Number.isNaN(numericRating)) {
    throw new Error('Todos los campos son obligatorios.');
  }

  if (trimmedName.length < 2) {
    throw new Error('El nombre debe tener al menos 2 caracteres.');
  }

  if (trimmedText.length < 5) {
    throw new Error('La reseña debe tener al menos 5 caracteres.');
  }

  if (numericRating < 1 || numericRating > 5) {
    throw new Error('La calificación debe estar entre 1 y 5.');
  }

  const current = loadReviews(movieId);
  const review = {
    name: trimmedName,
    text: trimmedText,
    rating: numericRating,
    date: new Date().toISOString()
  };

  current.push(review);
  saveReviews(movieId, current);

  return review;
}


function applyFilters(movies, query, year) {
  const q = query.trim().toLowerCase();
  const y = year;

  const filtered = movies.filter((m) => {
    const matchesQ =
      m.title.toLowerCase().includes(q) ||
      m.synopsis.toLowerCase().includes(q) ||
      m.genre.toLowerCase().includes(q);

    const matchesY = y ? String(m.year) === y : true;

    return matchesQ && matchesY;
  });

  return filtered.sort((a, b) => b.year - a.year);
}

function buildMovieCards(gridElement, movies) {
  gridElement.innerHTML = '';

  if (movies.length === 0) {
    gridElement.innerHTML =
      '<div class="col-12"><div class="alert alert-warning">No se encontraron películas.</div></div>';
    return;
  }

  movies.forEach((movie) => {
    const col = document.createElement('div');
    col.className = 'col-12 col-sm-6 col-md-4 col-lg-3';
    col.innerHTML = `
      <div class="card h-100">
        <img src="${movie.poster}" alt="Póster de ${escapeHtml(movie.title)}" class="card-img-top movie-poster" />
        <div class="card-body d-flex flex-column">
          <div class="mb-2">
            <div class="title">${escapeHtml(movie.title)}</div>
            <div class="meta">${movie.year} · ${escapeHtml(movie.genre)}</div>
          </div>
          <p class="text-truncate mb-3" style="flex:1">${escapeHtml(movie.synopsis)}</p>
          <div class="d-grid">
            <button class="btn btn-primary btn-sm view-btn" data-id="${movie.id}">Ver detalle</button>
          </div>
        </div>
      </div>
    `;
    gridElement.appendChild(col);
  });

  Array.from(document.querySelectorAll('.view-btn')).forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const id = e.currentTarget.getAttribute('data-id');
      window.location.href = `movie.html?id=${encodeURIComponent(id)}`;
    });
  });
}

function renderIndex() {
  const grid = document.getElementById('movies-grid');
  if (!grid) return;

  const searchInput = document.getElementById('search-input');
  const filterYear = document.getElementById('filter-year');
  const clearBtn = document.getElementById('clear-btn');

  let currentMovies = [...MOVIES].sort((a, b) => b.year - a.year);
  buildMovieCards(grid, currentMovies);

  function handleFiltersChange() {
    const filtered = applyFilters(MOVIES, searchInput.value, filterYear.value);
    currentMovies = filtered;
    buildMovieCards(grid, currentMovies);
  }

  searchInput.addEventListener('input', handleFiltersChange);
  filterYear.addEventListener('change', handleFiltersChange);
  clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    filterYear.value = '';
    handleFiltersChange();
  });
}


function renderMovieDetail() {
  const movieArea = document.getElementById('movie-area');
  if (!movieArea) return; // no estamos en movie.html

  const id = getQueryParam('id');
  const movie = MOVIES.find((m) => m.id === id);

  if (!movie) {
    movieArea.innerHTML =
      '<div class="col-12"><div class="alert alert-danger">Película no encontrada. <a href="index.html">Volver a la portada</a></div></div>';
    return;
  }

  movieArea.innerHTML = `
    <div class="col-12 col-md-4 mb-3">
      <img src="${movie.poster}" alt="Póster de ${escapeHtml(movie.title)}" class="movie-poster-lg img-fluid shadow-sm" />
    </div>
    <div class="col-12 col-md-8">
      <h2>${escapeHtml(movie.title)} <small class="text-muted">${movie.year}</small></h2>
      <p class="movie-meta">
        <strong>Género:</strong> ${escapeHtml(movie.genre)} · 
        <strong>Actores:</strong> ${movie.actors.map(escapeHtml).join(', ')}
      </p>
      <p>${escapeHtml(movie.synopsis)}</p>

      <h5>Trailer</h5>
      <div class="trailer-box mb-3">
        <iframe
          width="100%"
          height="100%"
          style="border:0"
          src="https://www.youtube.com/embed/${movie.trailer}"
          title="${escapeHtml(movie.title)} - Trailer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <a class="btn btn-outline-secondary" href="index.html">← Volver a la portada</a>
    </div>
  `;

  initReviewSection(movie.id);
}

function renderReviewsList(container, movieId) {
  const reviews = loadReviews(movieId);

  if (!reviews.length) {
    container.innerHTML =
      '<div class="alert alert-info">Sé el primero en dejar una reseña.</div>';
    return;
  }

  const sorted = reviews.slice().sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  container.innerHTML = '';
  sorted.forEach((r) => {
    const item = document.createElement('div');
    item.className = 'list-group-item';
    item.innerHTML = `
      <div class="d-flex w-100 justify-content-between">
        <h6 class="mb-1">
          ${escapeHtml(r.name)}
          <small class="text-muted">· ${new Date(r.date).toLocaleString()}</small>
        </h6>
        <small class="review-meta">${renderStars(r.rating)} · ${r.rating}/5</small>
      </div>
      <p class="mb-1">${escapeHtml(r.text)}</p>
    `;
    container.appendChild(item);
  });
}

function initReviewSection(movieId) {
  const reviewsList = document.getElementById('reviews-list');
  const reviewForm = document.getElementById('review-form');
  const reviewerName = document.getElementById('reviewer-name');
  const reviewText = document.getElementById('review-text');
  const reviewRating = document.getElementById('review-rating');
  const submitReview = document.getElementById('submit-review');

  if (!reviewsList || !reviewForm || !reviewerName || !reviewText || !reviewRating || !submitReview) {
    return;
  }

  renderReviewsList(reviewsList, movieId);

  submitReview.addEventListener('click', () => {
    try {
      createReview(movieId, {
        name: reviewerName.value,
        text: reviewText.value,
        rating: reviewRating.value
      });

      reviewerName.value = '';
      reviewText.value = '';
      reviewRating.value = '';

      renderReviewsList(reviewsList, movieId);
    } catch (err) {
      alert(err.message || 'Ocurrió un error al guardar la reseña.');
    }
  });
}

(function init() {
  renderIndex();
  renderMovieDetail();
})();
