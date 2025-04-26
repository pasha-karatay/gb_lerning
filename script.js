document.addEventListener('DOMContentLoaded', async () => {
    // 1. Загружаем новости
    const news = await loadNews();
    
    // 2. Показываем на странице
    renderNews(news);
    
    // 3. Обновляем год в футере
    document.getElementById('current-year').textContent = new Date().getFullYear();
});

async function loadNews() {
    try {
        const response = await fetch('data/news-data.json'); // Ваш файл!
        return await response.json();
    } catch (error) {
        console.error('Ошибка загрузки новостей:', error);
        return []; // Возвращаем пустой массив при ошибке
    }
}

function renderNews(news) {
    const container = document.getElementById('news-container');
    container.innerHTML = news.map(item => `
        <article class="news-card">
            <div class="news-header">
                <span class="tag">${item.tag}</span>
                <h3>${item.title}</h3>
            </div>
            <p>${item.content}</p>
            <div class="news-footer">
                <span>${item.date}</span>
                <a href="#">Читать →</a>
            </div>
        </article>
    `).join('');
}