const apiUrl = "https://newsapi.org/v2/top-headlines?q=cricket&apiKey=23bb16fd2b78440bb6927fdf8a595274";

const container = document.getElementById("news-container");

fetch("https://newsapi.org/v2/top-headlines?q=cricket&apiKey=23bb16fd2b78440bb6927fdf8a595274")
  .then(response => response.json())
  .then(data => {
    const articles = data.articles.slice(0, 12); // limit to 8 news

    articles.forEach(article => {
      const card = document.createElement("div");
      card.className = "blog-card";

      card.innerHTML = `
        <img src="${article.urlToImage || 'images/news1.jpg'}" alt="News Image">
        <h3>${article.title}</h3>
        <p>${article.description || 'No description available.'}</p>
        <a href="${article.url}" target="_blank" class="read-more">Read More</a>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Error loading news:", error);
    container.innerHTML = `<p style="color:red;">Failed to load cricket news.</p>`;
  });

// 23bb16fd2b78440bb6927fdf8a595274

// https://newsapi.org/v2/everything?q=keyword&apiKey=23bb16fd2b78440bb6927fdf8a595274

// https://newsapi.org/v2/top-headlines?q=cricket&apiKey=23bb16fd2b78440bb6927fdf8a595274

