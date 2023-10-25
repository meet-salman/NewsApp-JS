const search = document.querySelector('#search');
const input = document.querySelector('#input');

const cardsBox = document.querySelector('#cards-box')

let allNews = [];

search.addEventListener('submit', async (e) => {
    e.preventDefault()

    try {
        let cricket = await axios.get(`https://newsapi.org/v2/everything?q=${input.value}&apiKey=449e5df8cd30457591c693086e844d46`)
        cricket = cricket.data.articles.slice(0, 20);
        allNews = [...cricket];
        console.log(cricket);
    }
    catch {
        console.log('No data found');
    }

    input.value = '';
    cardsBox.innerHTML = '';
    allNews.forEach((item, index) => {

        cardsBox.innerHTML += `
        <div  id="card"">
            <img src="${item.urlToImage}" alt="">
            <h3  id="heading" onclick="saveData(${index})">${item.title.slice(0, 27)}...</h3>
            <p> ${item.content.slice(0, 70)}<b>...</b> </p>
        </div>
    `
    });

});



function saveData(index) {
    let singleNews = allNews[index];
    console.log(singleNews);

    const news = JSON.stringify(singleNews)
    localStorage.setItem('news', news)

    window.location = 'singlenews.html'
}

















































