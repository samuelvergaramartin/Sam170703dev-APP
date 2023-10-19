const searchButton = document.getElementById('searchButton');
const searchQueryInput = document.getElementById('searchQuery');

searchButton.addEventListener('click', () => {
    const searchQuery = searchQueryInput.value;
    const searchUrl = `https://search.tosdr.org/search?q=${encodeURIComponent(searchQuery)}&    categories=general&language=es-ES`
    console.log("Execute Search:" + searchUrl);
});