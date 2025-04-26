document.addEventListener('DOMContentLoaded', function() {
    // Загрузка новостей
    async function loadNews() {
        try {
            const response = await fetch('data/news-data.json');
            if (!response.ok) throw new Error('Ошибка загрузки');
            return await response.json();
        } catch (error) {
            console.error('Ошибка:', error);
            return [];
        }
    }

    // Отображение новостей
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

    // Инициализация
    async function init() {
        const news = await loadNews();
        renderNews(news);
        document.getElementById('current-year').textContent = new Date().getFullYear();
        
        // Обработчик кнопки подписки
        document.getElementById('subscribe-btn').addEventListener('click', function(e) {
            e.preventDefault();
            const email = prompt("Введите ваш email для подписки:");
            if (email) {
                alert(`Спасибо за подписку! На ${email} будут приходить новости.`);
            }
        });
    }

    init();
});