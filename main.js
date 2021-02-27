const image = document.querySelector('img');
const button = document.querySelector('button');
const apiKey = 'http://api.giphy.com/v1/gifs/translate?api_key=HWXraXTYgMZfq7OCInVo5lLu09UxYKrg&s=cats';

function getGiphy(url) {
  fetch(apiKey, { mode: 'cors'})
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    image.src = response.data.images.original.url;
  });
}

getGiphy(apiKey);

button.addEventListener('click', () => getGiphy(apiKey));