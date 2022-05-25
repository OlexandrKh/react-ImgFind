/*
https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
Pixabay API поддерживает пагинацию, по умолчанию параметр page равен 1. Пусть в ответе приходит по 12 объектов, установлено в параметре per_page. Не забудь что при поиске по новому ключевому слову, необходимо сбрасывать значение page в 1.
В ответе от апи приходит массив объектов, в которых тебе интересны только следущие свойства.
id - уникальный идентификатор
webformatURL - ссылка на маленькое изображение для списка карточек
largeImageURL - ссылка на большое изображение для модального окна
*/

const KEY = "19125806-9a56a48a4edb0ea3b4b1e3bdb";
const BASE_URL = `https://pixabay.com/api/?key=${KEY}&image_type=photo&orientation=horizontal`;

function fetchPixabay(findStr, page) {
  if (findStr === "") return;
  const urlAdd = `&q=${findStr}&page=${page}&per_page=12`;
  const url = BASE_URL + KEY + urlAdd;

  return fetch(url)
    .then((res) => res.json())
    .then((jData) => jData.hits);
}

export default { fetchPixabay };
