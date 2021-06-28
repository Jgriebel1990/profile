const form = document.querySelector('#searchForm');

form.addEventListener('submit', async function(e){
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`);
    // console.log(res.data)
    imageResults(res.data);
    form.elements.query.value = '';
})

const imageResults = (shows) => {
    for (let results of shows) {
        if(results.show.image){
        const searchImg = results.show.image.medium;
        const img = document.createElement('IMG');
        img.src = searchImg
        document.body.append(img)
        }
    }
}