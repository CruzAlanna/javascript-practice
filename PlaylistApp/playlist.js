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
allButton.addEventListener('click', renderSongs);



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

  if (songs[index].favorited == true) {
    filteredsongs.push(songs[index]); 
  } else if (songs[index].favorited == false) {
    filteredsongs.splice(index, 1); //check this after with the change
  }
  renderSongs();
  renderFilteredSongs();
  saveSongs();
  saveFilteredSongs(); // check these as well
}

const deleteSong = (index) => {
  songs.splice(index, 1);
  filteredsongs.splice(index, 1);
  renderSongs();
  renderFilteredSongs();
  saveSongs();
  saveFilteredSongs();
}

loadSongs();
loadFilteredSongs();
