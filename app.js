const form = document.querySelector("#searchForm");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  const config = { params: { q: searchTerm} }
  const res = await axios.get(
    `https://api.tvmaze.com/search/shows`, config
  );
  makeImages(res.data); //res.data gives array of objects
  console.log(typeof(res.data));
  form.elements.query.value = '';
});

const makeImages = (shows) => {
  for (let i = 0; i < shows.length; i++) {
    if(shows[i].show.image){
        const img = document.createElement("IMG");
        img.src = shows[i].show.image.medium;
        document.body.append(img);
    }
  }
};

const imageReset = form.addEventListener('click', function () {
    const imgs = document.querySelectorAll('img');
    for (let img of imgs) {
        img.remove();
    }
});