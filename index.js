console.log('hello world');

const message = document.querySelector('#message')

function addMovie(evt) {
  evt.preventDefault();
  let inputField = document.querySelector('input');

  const movie = document.createElement('li');

  const movieTitle = document.createElement('span');
  movieTitle.textContent = inputField.value;
  movieTitle.addEventListener('click', crossOffMovie);


  movie.appendChild(movieTitle);

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'X';
  deleteBtn.addEventListener('click', deleteMovie);
  movie.appendChild(deleteBtn);

  const list = document.querySelector('ul');

  list.appendChild(movie);

  inputField.value ="";
}

document.querySelector('form').addEventListener('submit', addMovie);

function deleteMovie(evt) {
    evt.target.parentNode.remove();
    message.textContent = 'Movie deleted!'
}

function crossOffMovie(evt) {
    evt.target.classList.toggle('checked');
    if (evt.target.classList.contains('checked')) {
        message.textContent = 'Movie watched!'
    } else {
        message.textContent = 'Movie added back!'
    }
};