'use strict'/**
 * @param {Object} song         - { title, cover, src }
 * @param {string} wrapperClass - CSS class for the container div
 */
function songItemHTML(song, wrapperClass) {
  return `
    <div class="${wrapperClass}">
      <img src="${song.cover}" alt="${song.title} cover art" loading="lazy" decoding="async">
      <audio src="${song.src}"></audio>
      <span>${song.title}</span>
      <span class="playButton" role="button" tabindex="0" aria-label="Play ${song.title}">
        <i class="fa-solid fa-play" aria-hidden="true"></i>
      </span>
    </div>`;
}

function renderHero(container) {
  const { src, alt } = SONGS_DATA.heroImage;
  container.innerHTML = `
    <div>
      <img src="${src}" alt="${alt}">
    </div>
    <div>
      <h1 class="top-songs">top songs this week</h1>
      ${SONGS_DATA.topSongs.map(song => songItemHTML(song, 'top-music')).join('')}
    </div>`;
}

function renderMostPlayed(container) {
  container.insertAdjacentHTML(
    'beforeend',
    SONGS_DATA.mostPlayed
      .map(song => songItemHTML(song, 'song-card'))
      .join('')
  );
}

function renderArtists(container) {
  SONGS_DATA.artists.forEach(artist => {

    const card = document.createElement('div');
    card.className = 'artist-card';
    card.dataset.artistId = artist.id;
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-expanded', 'false');
    card.setAttribute('aria-label', `Show songs by ${artist.name}`);

    card.style.backgroundImage = `url('${artist.cover}')`;
    card.style.backgroundSize = 'cover';
    card.style.backgroundPosition = 'center';
    if (artist.bgPositionY) {
      card.style.backgroundPositionY = artist.bgPositionY;
    }

    card.innerHTML = `<span class="artist-name">${artist.name}</span>`;

    const panel = document.createElement('div');
    panel.className = 'artist-songs';
    panel.dataset.artistId = artist.id;
    panel.innerHTML = artist.songs
      .map(song => songItemHTML(song, 'song-inside-artists'))
      .join('');

    container.appendChild(card);
    container.appendChild(panel);
  });
}

function stopAllAudio() {
  document.querySelectorAll('audio').forEach(audio => {
    audio.pause();
    const icon = audio.parentElement.querySelector('.playButton i');
    if (icon) {
      icon.classList.remove('fa-pause');
      icon.classList.add('fa-play');
    }
  });
}

function initPlayButtons() {
  document.querySelectorAll('.playButton').forEach(button => {
    const audio = button.parentElement.querySelector('audio');
    const icon = button.querySelector('i');

    audio.addEventListener('ended', () => {
      icon.classList.remove('fa-pause');
      icon.classList.add('fa-play');
    });

    const toggle = () => {
      const wasPlaying = !audio.paused;
      stopAllAudio();
      if (!wasPlaying) {
        audio.play();
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
      }
    };

    button.addEventListener('click', toggle);
    button.addEventListener('keydown', e => {
      if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); toggle(); }
    });
  });
}

function initAccordion() {
  document.querySelectorAll('.artist-card').forEach(card => {

    const open = () => {
      const artistId = card.dataset.artistId;
      const target = document.querySelector(`.artist-songs[data-artist-id="${artistId}"]`);
      if (!target) return;

      const isOpen = target.classList.contains('show');

      document.querySelectorAll('.artist-songs').forEach(panel => {
        panel.classList.remove('show');
      });
      document.querySelectorAll('.artist-card').forEach(c => {
        c.setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        target.classList.add('show');
        card.setAttribute('aria-expanded', 'true');
      }
    };

    card.addEventListener('click', open);
    card.addEventListener('keydown', e => {
      if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); open(); }
    });
  });
}

function init() {
  renderHero(document.getElementById('top-songs-section'));
  renderMostPlayed(document.getElementById('most-played-section'));
  renderArtists(document.getElementById('artists-section'));

  initPlayButtons();
  initAccordion();
}

document.addEventListener('DOMContentLoaded', init);