const image = document.querySelector('img');
const button = document.querySelector('button');
const giphyLink = 'http://api.giphy.com/v1/gifs/translate'
const apiKey = 'HWXraXTYgMZfq7OCInVo5lLu09UxYKrg';

const searchText = document.querySelector('input[type="text"]');
const searchButton = document.getElementById('search');

let keyword = 'cats';
let fullURL = `${giphyLink}?api_key=${apiKey}&s=${keyword}`;

function getGiphy(url) {
  fetch(url, { mode: 'cors', credentials: 'same-origin' })
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    image.src = response.data.images.original.url;
  })
  .catch((error) => {
    console.error(error);
  });
}

getGiphy(fullURL);

button.addEventListener('click', () => getGiphy(fullURL));
searchButton.addEventListener('click', () => {
  keyword = searchText.value;
  fullURL = `${giphyLink}?api_key=${apiKey}&s=${keyword}`;
  getGiphy(fullURL);
});
