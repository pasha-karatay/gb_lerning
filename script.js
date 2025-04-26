document.addEventListener('DOMContentLoaded', function() {
    // База данных с реальными датами
    let newsDB = [
        {
            id: 1,
            tag: "💻 Технологии",
            title: "GPT-5 выйдет в 2025 году",
            content: "OpenAI подтвердила разработку новой версии.",
            date: new Date(2025, 3, 25) // 25 апреля 2025
        },
        {
            id: 2,
            tag: "🔬 Наука",
            title: "ИИ обнаружил новое лекарство",
            content: "Алгоритм DeepMind совершил прорыв.",
            date: new Date(2025, 2, 15) // 15 марта 2025
        },
        {
            id: 3,
            tag: "🎨 Искусство",
            title: "ИИ создал картину для Лувра",
            content: "Музей включил ИИ-арт в экспозицию.",
            date: new Date(2025, 1, 10) // 10 февраля 2025
        }
    ];

    // DOM элементы
    const newsContainer = document.getElementById('news-container');
    const sortNewestBtn = document.getElementById('sort-newest');
    const sortOldestBtn = document.getElementById('sort-oldest');

    // Форматирование даты
    function formatDate(date) {
        return date.toLocaleDateString('ru-RU', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    }

    // Генерация карточки
    function createNewsCard(news) {
        return `
            <article class="news-card">
                <div class="news-header">
                    <span class="tag">${news.tag}</span>
                    <h3>${news.title}</h3>
                </div>
                <p>${news.content}</p>
                <div class="news-footer">
                    <span><i class="far fa-calendar"></i> ${formatDate(news.date)}</span>
                    <a href="#">Читать →</a>
                </div>
            </article>
        `;
    }

    // Сортировка новостей
    function sortNews(order = 'newest') {
        return [...newsDB].sort((a, b) => {
            return order === 'newest' 
                ? b.date - a.date // Новые сначала
                : a.date - b.date; // Старые сначала
        });
    }

    // Отображение новостей
    function renderNews(sortedNews) {
        newsContainer.innerHTML = sortedNews.map(createNewsCard).join('');
    }

    // Инициализация
    function init() {
        // Первая загрузка (сначала новые)
        renderNews(sortNews('newest'));
        
        // Кнопки сортировки
        sortNewestBtn.addEventListener('click', () => {
            renderNews(sortNews('newest'));
            sortNewestBtn.classList.add('active');
            sortOldestBtn.classList.remove('active');
        });

        sortOldestBtn.addEventListener('click', () => {
            renderNews(sortNews('oldest'));
            sortOldestBtn.classList.add('active');
            sortNewestBtn.classList.remove('active');
        });

        // Обновляем год в футере
        document.getElementById('current-year').textContent = new Date().getFullYear();
    }

    init();
});