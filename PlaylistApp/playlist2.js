const songInput = document.getElementById('song-input');
const addButton = document.getElementById('add-button');
const allButton = document.getElementById('all-button');
const filterButton = document.getElementById('filter-button');
const playlist = document.getElementById('playlist');

let songs = [];
let filteredsongs = [];


const loadSongs = () => {
  const storedSongs = localStorage.getItem('songs')
  if (storedSongs) {
    songs = JSON.parse(storedSongs);
    renderSongs();
  }
}

const saveSongs = () => {
  localStorage.setItem('songs', JSON.stringify(songs));
}


const loadFilteredSongs = () => {
  const storedFilteredSongs = localStorage.getItem('filteredsongs')
  if (storedFilteredSongs) {
    filteredsongs = JSON.parse(storedFilteredSongs);
    renderFilteredSongs();
  }
}

const saveFilteredSongs = () => {
  localStorage.setItem('filteredsongs', JSON.stringify(filteredsongs));
}

const addSong = () => {
  const songText = songInput.value.trim();
  if (songText !== '' && !songs.some(song => song.text === songText)) {
    const newSong = { text: songText, favorited: false };
    songs.push(newSong);
    songInput.value = '';
    renderSongs();
    saveSongs();
  } else if (songText === '') {
    alert('Please enter a song!');
  } else {
    alert('Song already exists!');
  }
};

addButton.addEventListener('click', addSong);

const renderSongs = () => {
  playlist.innerHTML = '';

  if (songs.length === 0) {
    playlist.textContent = 'No songs in the playlist yet.';
    return;
  }

  songs.forEach((song, index) => {
    const li = document.createElement('li');
    // Add a star next to the song's text if favorited using a ternary operator
    li.textContent = song.favorited ? `${song.text} ★` : song.text;

    if (song.favorited) {
      li.classList.add('favorited');
    }
    
    const favoriteButton = document.createElement('button');
    favoriteButton.textContent = 'Favorite';
    favoriteButton.addEventListener('click', () => {
      toggleFavorite(index);
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      deleteSong(index);
      alert('Song removed from your Playlist');
    });
    
    li.appendChild(favoriteButton);

    li.appendChild(deleteButton);

    playlist.appendChild(li);
  })
}
allButton.addEventListener('click', renderSongs);


const toggleFavorite = (index) => {
  songs[index].favorited = !songs[index].favorited;
  renderSongs();
  saveSongs();
};


const renderFilteredSongs = () => {
  playlist.innerHTML = '';

  const filteredsongs = songs.filter(song => song.favorited); // Dynamically filter favorites

  if (filteredsongs.length === 0) {
    playlist.textContent = 'No favorited songs yet.';
    return;
  }

  filteredsongs.forEach((song, index) => {
    const li = document.createElement('li');
    li.textContent = song.favorited ? `${song.text} ★` : song.text;

    const favoriteButton = document.createElement('button');
    favoriteButton.textContent = 'Unfavorite'; // Updated button text for filtered view
    favoriteButton.addEventListener('click', () => {
      toggleFavorite(songs.findIndex(s => s.text === song.text)); // Update original `songs`
      renderFilteredSongs(); // Refresh view
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      deleteSong(songs.findIndex(s => s.text === song.text)); // Update original `songs`
      renderFilteredSongs(); // Refresh view
      alert('Favorited song removed from your Playlist');
    });

    li.appendChild(favoriteButton);
    li.appendChild(deleteButton);

    playlist.appendChild(li);
  });
};

filterButton.addEventListener('click', renderFilteredSongs);

const deleteSong = (index) => {
  songs.splice(index, 1); // Remove song from main list
  renderSongs();
  saveSongs();
};

loadSongs();
loadFilteredSongs();
