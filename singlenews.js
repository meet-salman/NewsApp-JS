const newsBox = document.querySelector('#news-box');


const news = localStorage.getItem('news');
const singleNews = JSON.parse(news);
console.log(singleNews);

let demoContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nobis incidunt, officiis debitis odit a voluptas sapiente minus accusantium quis id dolores? Nostrum, omnis. Magnam, ab? Nulla aut quisquam aliquam, doloribus repellat aspernatur voluptatem necessitatibus saepe assumenda qui, quibusdam eaque dolores sint a tenetur numquam harum quae porro. Repudiandae asperiores ex rem optio sequi aperiam, quod officia laborum maxime consequatur delectus dolore atque totam repellendus velit eius ad architecto exercitationem, vero minus voluptates et reiciendis tempora animi. Ipsum accusantium modi deserunt tempora perferendis, numquam beatae facilis fuga corrupti sit. Veniam voluptatem voluptas iure quas nesciunt, tenetur magnam impedit laudantium qui distinctio amet voluptatum blanditiis corrupti nostrum expedita. Quos quidem, adipisci eos nihil error pariatur aliquid eveniet dolores a architecto molestias voluptate blanditiis voluptatem aut cupiditate quae odit in praesentium nisi aspernatur ullam! Non, aspernatur. Similique inventore placeat voluptate deserunt unde asperiores, ipsam a! Quidem, iste. Voluptatum labore rem vero corporis."

newsBox.innerHTML = `
    <div   id="single-box">
        <img src="${singleNews.urlToImage}" alt="">
        <h1> ${singleNews.title} </h1>
        <p  id="publish-date"> Published at: ${singleNews.publishedAt}</p>
        <h4> ${singleNews.description} </h4>
        <p> ${singleNews.content} </br> ${demoContent}</p>
        <a href="${singleNews.url}">Read Complete News</a>
    </div>

`


















