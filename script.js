document.addEventListener('DOMContentLoaded', function() {
    // Массив с новостями
    const newsData = [
        {
            tag: "💻 Технологии",
            title: "GPT-5 выйдет в 2025 году",
            content: "OpenAI подтвердила разработку новой версии. Ожидается революция в обработке естественного языка!",
            date: "25.04.2025"
        },
        {
            tag: "🔬 Наука",
            title: "ИИ обнаружил новое лекарство",
            content: "Алгоритм DeepMind нашел потенциальное средство против рака за 3 дня вместо 3 лет!",
            date: "20.04.2025"
        },
        {
            tag: "🎨 Искусство",
            title: "ИИ создал картину для Лувра",
            content: "Нейросеть MidJourney v6 разработала artwork, который будет выставлен в парижском Лувре!",
            date: "18.04.2025"
        },
        {
            tag: "🤖 Робототехника",
            title: "Tesla представила нового человекоподобного робота",
            content: "Optimus Gen 2 демонстрирует улучшенную моторику и может готовить завтрак!",
            date: "15.04.2025"
        },
        {
            tag: "🌍 Экология",
            title: "ИИ помогает бороться с изменением климата",
            content: "Новая система на базе ИИ предсказывает лесные пожары с точностью 94%!",
            date: "12.04.2025"
        },
        {
            tag: "💼 Бизнес",
            title: "ИИ-стартап привлек $500 млн инвестиций",
            content: "Компания NeuroTech разрабатывает интерфейс мозг-компьютер нового поколения!",
            date: "10.04.2025"
        }
    ];

    // Функция для создания карточки новости
    function createNewsCard(news) {
        return `
            <article class="news-card">
                <div class="news-header">
                    <span class="tag">${news.tag}</span>
                    <h3>${news.title}</h3>
                </div>
                <p>${news.content}</p>
                <div class="news-footer">
                    <span><i class="far fa-calendar"></i> ${news.date}</span>
                    <a href="#">Читать <i class="fas fa-arrow-right"></i></a>
                </div>
            </article>
        `;
    }

    // Функция для отображения новостей
    function renderNews() {
        const newsContainer = document.getElementById('news-container');
        newsContainer.innerHTML = '';
        
        newsData.forEach(news => {
            newsContainer.insertAdjacentHTML('beforeend', createNewsCard(news));
        });
    }

    // Инициализация
    renderNews();
    
    // Обновление года в футере
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Обработчик для кнопки подписки
    document.querySelector('.btn').addEventListener('click', function(e) {
        e.preventDefault();
        alert('Спасибо за подписку! Вы будете получать самые свежие новости об ИИ.');
    });
});