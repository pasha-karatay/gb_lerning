document.addEventListener('DOMContentLoaded', function() {
    // База данных новостей
    let newsDB = [
        {
            id: 1,
            tag: "💻 Технологии",
            title: "GPT-5 выйдет в 2025 году",
            content: "OpenAI подтвердила разработку новой версии с улучшенными возможностями.",
            date: new Date().toLocaleDateString()
        },
        {
            id: 2,
            tag: "🔬 Наука",
            title: "ИИ обнаружил новое лекарство",
            content: "Алгоритм DeepMind совершил прорыв в фармацевтике.",
            date: new Date().toLocaleDateString()
        },
        {
            id: 3,
            tag: "🎨 Искусство",
            title: "ИИ создал картину для Лувра",
            content: "Музей принял решение включить ИИ-арт в постоянную экспозицию.",
            date: new Date().toLocaleDateString()
        }
    ];

    // DOM элементы
    const newsContainer = document.getElementById('news-container');
    const newsForm = document.getElementById('news-form');
    const subscribeBtn = document.getElementById('subscribe-btn');

    // Генерация карточки
    function createNewsCard(news) {
        return `
            <article class="news-card" data-id="${news.id}">
                <div class="news-header">
                    <span class="tag">${news.tag}</span>
                    <h3>${news.title}</h3>
                </div>
                <p>${news.content}</p>
                <div class="news-footer">
                    <span>${news.date}</span>
                    <a href="#" class="read-more">Читать →</a>
                </div>
            </article>
        `;
    }

    // Отображение новостей
    function renderNews() {
        newsContainer.innerHTML = newsDB.map(createNewsCard).join('');
        
        // Добавляем обработчики для кнопок
        document.querySelectorAll('.read-more').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const cardId = this.closest('.news-card').dataset.id;
                alert(`Открываем новость #${cardId}`);
            });
        });
    }

    // Добавление новости
    function addNews(tag, title, content) {
        const newNews = {
            id: newsDB.length + 1,
            tag,
            title,
            content,
            date: new Date().toLocaleDateString()
        };
        newsDB.push(newNews);
        renderNews();
    }

    // Обработчик формы
    newsForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const tag = document.getElementById('news-tag').value;
        const title = document.getElementById('news-title').value;
        const content = document.getElementById('news-content').value;
        
        addNews(tag, title, content);
        newsForm.reset();
    });

    // Подписка
    subscribeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const email = prompt("Введите ваш email для подписки:");
        if (email) {
            alert(`Спасибо! На ${email} будут приходить новости.`);
        }
    });

    // Обновляем год в футере
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Первоначальная загрузка
    renderNews();
});