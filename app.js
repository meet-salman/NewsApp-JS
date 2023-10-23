const search = document.querySelector('#search');
const input = document.querySelector('#input');

const cardsBox = document.querySelector('#cards-box')

let allNews = [];

search.addEventListener('submit', async (e) => {
    e.preventDefault()

    try {
        let cricket = await axios.get(`https://newsapi.org/v2/everything?q=${input.value}&apiKey=449e5df8cd30457591c693086e844d46`)
        cricket = cricket.data.articles.slice(0, 20)
        console.log(cricket);
        allNews = [...cricket];

        cricket.forEach((item, index) => {

            cardsBox.innerHTML += `
            <div  id="card"">
                <img src="${item.urlToImage}" alt="">
                <h3  id="heading" onclick="saveData(${index})">${item.title}</h3>
            </div>
        `
        });

        input.value = ''
    }
    catch {
        console.log('No data found');
    }

});



function saveData(index) {
    let singleNews = allNews[index];
    console.log(singleNews);

    const news = JSON.stringify(singleNews)
    localStorage.setItem('news', news)

    window.location = 'singlenews.html'
}

















































