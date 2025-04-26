// Конфигурация
const config = {
    apiUrl: 'data/news.json', // Путь к JSON-файлу с новостями
    defaultSection: 'news'
};

// Состояние приложения
const state = {
    news: [],
    currentSection: config.defaultSection
};

// DOM элементы
const elements = {
    appContent: document.getElementById('app-content'),
    navLinks: document.querySelectorAll('.nav-link')
};

// Инициализация приложения
async function initApp() {
    await loadNews();
    renderSection(state.currentSection);
    setupEventListeners();
    updateFooterYear();
}

// Загрузка новостей
async function loadNews() {
    try {
        const response = await fetch(config.apiUrl);
        state.news = await response.json();
    } catch (error) {
        console.error('Ошибка загрузки новостей:', error);
        showNotification('Ошибка загрузки новостей', 'error');
    }
}

// Рендеринг секций
function renderSection(section) {
    state.currentSection = section;
    
    // Обновляем активную навигацию
    elements.navLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.section === section);
    });

    // Рендерим контент
    switch(section) {
        case 'news':
            renderNewsSection();
            break;
        case 'add-news':
            renderAddNewsSection();
            break;
        case 'about':
            renderAboutSection();
            break;
        default:
            renderNewsSection();
    }
}

// Рендеринг секции новостей
function renderNewsSection() {
    const sortedNews = [...state.news].sort((a, b) => new Date(b.date) - new Date(a.date));
    
    elements.appContent.innerHTML = `
        <section class="section active dynamic-content">
            <h2><i class="fas fa-bolt"></i> Последние новости</h2>
            <div class="sort-controls">
                <button id="sort-newest" class="btn small-btn active">
                    <i class="fas fa-arrow-down"></i> Сначала новые
                </button>
                <button id="sort-oldest" class="btn small-btn">
                    <i class="fas fa-arrow-up"></i> Сначала старые
                </button>
            </div>
            <div class="news-grid" id="news-container">
                ${sortedNews.map(createNewsCard).join('')}
            </div>
        </section>
    `;

    setupSortButtons();
}

// Остальные функции (createNewsCard, setupSortButtons и т.д.)...
// Полный код смотрите в GitHub-репозитории

// Запуск приложения
document.addEventListener('DOMContentLoaded', initApp);