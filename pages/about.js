// Получаем кнопки и текст
const btnRu = document.getElementById('btn-ru');
const btnUz = document.getElementById('btn-uz');
const text = document.getElementById('text');
const yuwu = document.getElementById('yuwu');
const shop = document.getElementById('shop');
const conditions = document.getElementById('conditions');
const galery = document.getElementById('galery');



// Получаем язык из localStorage, если он там есть
let lang = localStorage.getItem('lang') || 'ru';

// Устанавливаем язык при загрузке страницы
setLang(lang);

// Переключаем язык при клике на кнопки
btnRu.addEventListener('click', () => {
    setLang('ru');
});

btnUz.addEventListener('click', () => {
    setLang('uz');
});

// Функция установки языка
function setLang(l) {
    // Сохраняем язык в localStorage
    localStorage.setItem('lang', l);

    // Устанавливаем соответствующий стиль для кнопок и текста
    if (l === 'ru') {
        btnRu.style.backgroundColor = '#000';
        btnRu.style.color = '#fff';
        btnUz.style.backgroundColor = '#fff';
        btnUz.style.color = '#000';
    } else if (l === 'uz') {
        btnRu.style.backgroundColor = '#fff';
        btnRu.style.color = '#000';
        btnUz.style.backgroundColor = '#000';
        btnUz.style.color = '#fff';
    }

    // Устанавливаем соответствующий текст на странице
    if (l === 'ru') {
        nn.textContent = 'Магазин';
        tt.textContent = 'Галерея';
        ff.textContent = 'Усорвия';
        yuwu.textContent = 'OZBE - бренд одежды основанный в Ташкенте в 22.02.2022. Сфокусированный в стилях GORPCORE и Y2K, OZBE день за днем продолжает менять стиль молодого поколения Узбекистана.';
    } else if (l === 'uz') {
        shop.textContent = 'Dokon';
        conditions.textContent = 'Shartlar';
        galery.textContent = 'Galery';
        yuwu.textContent = 'OZBE - kiyim-kechak brendi Toshkent shahrida 22.02.2022 yilda tashkil etilgan. GORPCORE va Y2K uslublariga etibor qaratgan OZBE Ozbekistonning yosh avlodi uslubini kundan-kunga ozgartirishda davom etmoqda.';

    }

    // Обновляем язык на всех страницах
    document.querySelectorAll('iframe').forEach(frame => {
        frame.contentWindow.postMessage({
            type: 'language',
            lang: l
        }, '*');
    });
}
