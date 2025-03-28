const songInput = document.getElementById('song-input');
const addButton = document.getElementById('add-button');
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

const addSong = () => {
  const songText = songInput.value.trim();
  if (songText !== '') {
    const newSong = {
      text: songText,
      favorited: false
    }

    songs.push(newSong);
    songInput.value = '';
    renderSongs();
    saveSongs();
  }
}

addButton.addEventListener('click', addSong);

const renderSongs = () => {
  playlist.innerHTML = '';
  
  songs.forEach((song, index) => {
    const li = document.createElement('li');
    // Add a star next to the song's text if favorited
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

const renderFilteredSongs = () => {
  playlist.innerHTML = '';
  
  filteredsongs.forEach((song, index) => {
    const li = document.createElement('li');
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
filterButton.addEventListener('click', renderFilteredSongs);

const toggleFavorite = (index) => {
  songs[index].favorited = !songs[index].favorited
  filteredsongs.push(songs[index]);
  renderSongs();
  saveSongs();
}

const deleteSong = (index) => {
  songs.splice(index, 1);
  renderSongs();
  saveSongs();
}

loadSongs();

// Need to work on: 
//BEFORE making any changes, push code up to github!!!
// The filteredsongs array is displaying the songs over again, need to clear the list that shows again. reference the app.js and other functions (Add song function).
//