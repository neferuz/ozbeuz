// Получаем кнопки и текст
const btnRu = document.getElementById('btn-ru');
const btnUz = document.getElementById('btn-uz');
const shop = document.getElementById('shop');
const conditions = document.getElementById('conditions');
const galery = document.getElementById('galery');
const text2 = document.getElementById('text2');
const kak = document.getElementById('kak');
const raz = document.getElementById('raz');
const mom = document.getElementById('mom');
const sos = document.getElementById('sos');
const keyn = document.getElementById('keyn');
const rez = document.getElementById('rez');
const nun = document.getElementById('nun');
const  dolk= document.getElementById('dolk');
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
        text2.textContent = 'Условия';
        dolk.textContent = 'Стоимость доставки по всему Узбекистану 30 000 сум. ';
        shop.textContent = 'Магазин';
        conditions.textContent = 'Условия';
        galery.textContent = 'Галерея';
        kak.textContent = 'Как осуществляется доставка?';
        mom.textContent = 'Как я могу оплатить за товар?';
        sos.textContent = 'Когда я получу товар?';
        raz.textContent = 'После того как вы закажете товар с нашего сайта, с вами в течении дня свяжутся наши специалисты чтобы подтвердить действительность заказа. Затем с вами свяжутся наши курьеры и доставят ваш товар.';
        keyn.textContent = 'Оплатить за товар вы можете наличными деньгами или банковской картой (Payme, Click, Apelsin и тд). Заказы на другие регионы оплачиваются до отправки товара.';
        rez.textContent = 'После того как вы закажете товар с нашего сайта, с вами в течении дня свяжутся наши специалисты чтобы подтвердить действительность заказа. Затем с вами свяжутся наши курьеры и доставят ваш товар.';
       
        nun.textContent = 'Доставка по регионам осуществляется через почтовый сервис «DMS Express» в течении 2-4 дней. Доставка по городу Ташкент осуществляется через нашего курьера в течении 1-2 дней.';
        prosim.textContent = 'Просим быть внимательными при вводе адреса/региона.';
        three.textContent = 'Возврат';
        esli.textContent = 'Если вы не довольны внешним видом или размером товара, то вы можете вернуть его в течении 3 дней с момента покупки. Пожалуйста, убедитесь что товар, который вы возвращаете, находится в том же состоянии, в котором вы его получили, в противном случае мы не сможем принять товар и вернуть деньги. Возврат товара осуществляется за ваш счет';
        sodo.textContent = 'Вопросы';
        fek.textContent = 'Если возникнут вопросы можете связаться с нами по телефону или написать нам в телеграм +998 97-866-63-33 или в инстаграм.';
    } else if (l === 'uz') {
       
        nun.textContent = 'Hududlarda yetkazib berish “DMS Express” pochta xizmati orqali 2-4 kun ichida amalga oshiriladi. Toshkent shahri boylab yetkazib berish bizning kurerimiz orqali 1-2 kun ichida amalga oshiriladi.';
        sos.textContent = 'Tovarlarni qachon olaman?';
        sodo.textContent = 'Savollar';
        three.textContent = 'Qaytish';
        esli.textContent = 'Agar mahsulotning tashqi korinishi yoki hajmi sizni qoniqtirmasa, uni sotib olingan kundan boshlab 3 kun ichida qaytarishingiz mumkin. Iltimos, siz qaytarayotgan buyum siz olgan holatda ekanligiga ishonch hosil qiling, aks holda biz mahsulotni qabul qila olmaymiz va pulni qaytarib bera olmaymiz. Tovarlarni qaytarish sizning hisobingizdan.';
        prosim.textContent = 'Manzil/mintaqani kiritishda ehtiyot boling.';
        mom.textContent = 'Mahsulot uchun qanday tolashim mumkin';
        text2.textContent = 'Shartlar';
        raz.textContent = 'Bizning veb-saytimizda mahsulotga buyurtma berganingizdan song, bizning mutaxassislarimiz buyurtmaning haqiqiyligini tasdiqlash uchun kun davomida siz bilan boglanadi. Shunda bizning kurerlarimiz siz bilan boglanib, mollaringizni yetkazib berishadi.';
        shop.textContent = 'Dokon';
        conditions.textContent = 'Shartlar';
        galery.textContent = 'Galery';
        kak.textContent = 'Yetkazib berish qanday?';
        raz.textContent = 'Bizning veb-saytimizda mahsulotga buyurtma berganingizdan song, bizning mutaxassislarimiz buyurtmaning haqiqiyligini tasdiqlash uchun kun davomida siz bilan boglanadi. Shunda bizning kurerlarimiz siz bilan boglanib, mollaringizni yetkazib berishadi.';
        keyn.textContent = 'Tovarlarni naqd pulda yoki bank kartasi orqali tolashingiz mumkin (Payme, Click, Apelsin va boshqalar). Boshqa mintaqalar uchun buyurtmalar tovarlar jonatilishidan oldin tolanadi.';

        dolk.textContent = 'Ozbekiston boylab yetkazib berish narxi 30 000 som. ';
        kak.textContent = 'Etkazib berish qanday?';
        fek.textContent = 'Savollaringiz bolsa telefon orqali boglanishingiz yoki telegram +998 97-866-63-33 yoki Instagram orqali yozishingiz mumkin.';
        
       
       
       

    }

    // Обновляем язык на всех страницах
    document.querySelectorAll('iframe').forEach(frame => {
        frame.contentWindow.postMessage({
            type: 'language',
            lang: l
        }, '*');
    });
}
