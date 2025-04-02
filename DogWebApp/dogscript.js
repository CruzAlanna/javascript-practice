const fetchButton = document.getElementById('fetch-button');
const inviteButton = document.getElementById('invite-button');
const dogImage = document.getElementById('dog-image');
const dogPark = document.getElementById('dog-park');

inviteButton.disabled = true;

let dogs = [];

if (dogs.length === 0) {
  dogPark.textContent = 'Your Dog Park is empty at the moment :( . Click the "Spot A Dog!" button to add some dogs to the park!';
} 

const loadDogs = () => {
  const storedDogs = localStorage.getItem('dogs')
  if (storedDogs) {
    dogs = JSON.parse(storedDogs);
    renderDogs();
  }
}

const saveDogs = () => {
  localStorage.setItem('dogs', JSON.stringify(dogs));
}

fetchButton.addEventListener('click', async () => {
  try {
    fetchButton.disabled = true;
    fetchButton.textContent = 'Loading...';

    const response = await fetch('https://dog.ceo/api/breeds/image/random');

    if (!response.ok) {
      throw new Error(`HTTP error. Status ${response.error}`);
    }

    const data = await response.json();
    dogImage.src = data.message;

    inviteButton.disabled = false;
    

  } catch (error) {
    console.error('Error', error.message);
  } finally {
    fetchButton.disabled = false;
    fetchButton.textContent = 'Spot A Dog!';
  }
})


inviteButton.addEventListener('click', () => {
  const data = { message: dogImage.src };
  dogs.push(data.message);
  saveDogs();
  renderDogs();
  alert('New Dog Added To Your Park!');
  inviteButton.disabled = true;
});


const renderDogs = () => {
  dogPark.innerHTML = '';

  dogs.forEach((dog) => {
  addedDogImage = document.createElement('img');
  addedDogImage.src = dog;
  addedDogImage.classList.add('dog-image');
  dogPark.appendChild(addedDogImage);
  })
}




// allow users to remove dogs from the park. => add button to splice