const newsBox = document.querySelector('#news-box');


const news = localStorage.getItem('news');
const singleNews = JSON.parse(news);
console.log(singleNews);



newsBox.innerHTML = `
    <div   id="single-box">
        <img src="${singleNews.urlToImage}" alt="">
        <h1> ${singleNews.title} </h1>
        <p  id="publish-date"> Published at: ${singleNews.publishedAt}</p>
        <h4> ${singleNews.description} </h4>
        <p> ${singleNews.content}</p>
        <a href="${singleNews.url}">Read Complete News</a>
    </div>

`


















