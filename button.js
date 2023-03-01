// Получаем кнопки и текст
const btnRu = document.getElementById('btn-ru');
const btnUz = document.getElementById('btn-uz');
const text = document.getElementById('text');
const rabit = document.getElementById('rabit');
const poluzip = document.getElementById('poluzip');
const check = document.getElementById('check');
const nuka = document.getElementById('nuka');
const nma = document.getElementById('nma');
const hello = document.getElementById('hello');
const malenk = document.getElementById('malenk');
const uznyt = document.getElementById('uznyt');
const yspey = document.getElementById('yspey');
const tri = document.getElementById('tri');
const uch = document.getElementById('uch');
const tur = document.getElementById('tur');
const you = document.getElementById('you');
const four = document.getElementById('four');
const idgirl = document.getElementById('idgirl');
const sweatshirts = document.getElementById('sweatshirts');
const ux = document.getElementById('ux');
const shop = document.getElementById('shop');
const conditions = document.getElementById('conditions');
const galery = document.getElementById('galery');


const shimlar = document.getElementById('shimlar');
const fi = document.getElementById('fi');
const hodi = document.getElementById('hodi');
const ivory = document.getElementById('ivory');
const ivory4 = document.getElementById('ivory4');
const ivoryt = document.getElementById('ivoryt');
const ivory3 = document.getElementById('ivory3');
const blackpolu = document.getElementById('blackpolu');
const bir = document.getElementById('bir');
const iki = document.getElementById('iki');
const sixone = document.getElementById('sixone');
const clan = document.getElementById('clan');
const rb = document.getElementById('rb');
const ny = document.getElementById('ny');
const nu = document.getElementById('nu');
const ji = document.getElementById('ji');

const stra = document.getElementById('stra');




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
        text.textContent = 'Успейте приобрести товары с нового дропа ведь количество ограничено!';
        rabit.textContent = ' УБЕЙ ДВУХ ЗАЙЦЕВ  ОДНИМ ВЫСТРЕЛОМ ';
        you.textContent = 'Синий свитшот';
        poluzip.textContent = 'Полузип свитшоты OZBE можно сочетать как и в классическом, так и в уличном стиле.';
        uznyt.textContent = 'ПУСКАЙ ВСЕ УЗНАЮТ ЧТО ТЫ OZBE';
        yspey.textContent = 'Успей приобрести легендарные свитшоты OZBE с нового дропа.';
        sweatshirts.textContent = 'Sweatshirt';
        shimlar.textContent = 'Pants';
        hodi.textContent = 'hoodie';
        ivory.textContent = 'Айвори свитшот';
        ivory4.textContent = 'Айвори свитшот';
        ivoryt.textContent = 'Айвори свитшот';
        ivory3.textContent = 'Синий свитшот';
        four.textContent = 'Черное худи';
        blackpolu.textContent = 'Черный полузип-свитшот';
        bir.textContent = 'Коричневые парашют';
        iki.textContent = 'Черные карго-штаны';
        tri.textContent = 'Бежевые карго-штаны';
        ny.textContent = 'Бежевые карго-штаны';
        uch.textContent = 'Зеленые карго-штаны';
        tur.textContent = 'Серые парашют штаны';
        hello.textContent = 'Бежевое худи';
        nma.textContent = 'Черные карго-штаны';
        check.textContent = 'Посмотреть';
        malenk.textContent = 'Посмотреть';
        sixone.textContent = 'Серые парашют штаны';
        nuka.textContent = 'Посмотреть';
        idgirl.textContent = 'Айвори свитшот';
        stra.textContent = 'Страницы';
        clan.textContent = 'Посмотреть';
        rb.textContent = 'Посмотреть';
        fi.textContent = ' Арка с надписью «BARAKALLA OZBE» - главная отличительная черта этой коллекция, что означает «МОЛОДЕЦ ОЗБЕ». Эта коллекция также состояла из футболок, свитшотов, шароваров а также шорт разных цветов и выпускалась летом 2022 года.';
        ny.textContent = ' Эта коллекция состояла только из футболок и свитшотов, на задней стороне которых был принт «PROUD TO BE OZBE» , что в свою очередь с английского языка означает «ГОРЖУСЬ БЫТЬ ОЗБЕ» . Целью такой надписи было продвижение нации и чувства патриотизма в молодом поколении.';
        nu.textContent = ' С этой коллекции мы начали более обширно продвигать свой логотип и наименование бренда. Были карго штаны, парашют штаны, шаровары, свитшоты и футболки с использованием нашего логотипа.';
        ji.textContent = 'Эта коллекция состояла из футболок, свитшотов, шароваров а также шорт разных цветов и выпускалась летом 2022 года. Идея состояла из круга имеющего округленный текст «OZBE PLANET» ,что в свою очередь означает что OZBE это больше чем бренд одежды.';
        ux.textContent = ' Первый дроп OZBE в основном состоял из свитшотов с вышивками. Имелись 9 моделей товаров в трех цветах и в трех разных дизайнов: «OZBE BUTTERFLY» «OZBE FLAME» «OZBE». Этот дроп имеет для нас очень большое значение так как это был наш самый первый шаг в покорении сердец OZBEков.';
        nn.textContent = 'Магазин';
        tt.textContent = 'Галерея';
        ff.textContent = 'Усорвия';
        shop.textContent = 'Магазин';
        conditions.textContent = 'Условия';
        galery.textContent = 'Галерея';
    } else if (l === 'uz') {
        
        nuka.textContent = 'Посмотреть';
        text.textContent = 'Yangi tomchidan tovarlar sotib olishga shoshiling Chunki miqdori cheklangan!';
        rabit.textContent = 'BIR OQ BILAN IKKI QUVONNI OLDIRING'; 
        poluzip.textContent = 'Yarim fermuarli OZBE kozoklari ham klassik, ham kocha uslubida birlashtirilishi mumkin.';
        uznyt.textContent = 'HAMMA BILSIN NIMA EDGANINGIZNI OZBE';
        yspey.textContent = 'Afsonaviy OZBE sviterlarini yangi tomchidan olishga shoshiling.';
        sweatshirts.textContent = 'Svitterlar';
         shimlar.textContent = 'Shimlar';
         hodi.textContent = 'hudi';
         ivory.textContent = 'Ayvori Svitter';
         ivory4.textContent = 'Ayvori Svitter';
         ivoryt.textContent = 'Ayvori Svitter';
         ivory3.textContent = 'Moviy sviter';
         you.textContent = 'Moviy sviter';
         blackpolu.textContent = 'Zipli qora svitshot';
         bir.textContent = 'Jigarrang parashyut';
         iki.textContent = 'Qora yuk shimlari';
         tri.textContent = 'Bej rangli yuk shimlari';
         uch.textContent = 'Yashil yuk shimlari';
         tur.textContent = 'Kulrang parashyut shim';
         four.textContent = 'Qora hudi';
         hello.textContent = 'Bej rangli hudi';
         nma.textContent = 'Qora yuk shimlari';
         check.textContent = 'Qarash';
         malenk.textContent = 'Qarash';
         sixone.textContent = 'Parashyut shimlar seriyasi';
         idgirl.textContent = 'Ayvori Svitter';
         nuka.textContent = 'Qarash';
         clan.textContent = 'Qarash';
         rb.textContent = 'Qarash';
         ny.textContent = 'Bu toplam faqat futbolkalar va kozoklardan iborat bolib, uning orqa tomonida "PROUD TO BE OZBE" yozuvi bor edi, bu esa oz navbatida inglizchada "PROUD TO BE OZBE" degan manoni anglatadi. Bunday yozuvdan maqsad yosh avlodda millatni targib qilish, vatanparvarlik tuygusini yuksaltirish edi.';
         nu.textContent = ' Ushbu toplam bilan biz oz logotipimiz va brend nomimizni yanada kengroq targib qila boshladik. Bizning logotipimizdan foydalangan holda yuk shimlari, parashyut shimlari, haram shimlari, sviterlar va futbolkalar bor edi..';
         fi.textContent = '“BARAKALLA OZBE” yozuvi bolgan archa ushbu toplamning asosiy farqlovchi jihati bolib, “YAXSHI OZBE” degan manoni bildiradi. Ushbu toplam shuningdek, turli rangdagi futbolkalar, kozoklar, bluzkalar va shortilardan iborat bolib, 2022 yilning yozida chiqarilgan.';
         ji.textContent = 'Ushbu toplam turli rangdagi futbolkalar, kozoklar, blumers va shortilardan iborat bolib, 2022 yilning yozida chiqarilgan. Goya “OZBE PLANET” dumaloq matnli doiradan iborat edi, bu esa oz navbatida OZBE kiyim brendidan ham koproq ekanligini anglatadi.';
         ux.textContent = 'OZBE ning birinchi tomchisi asosan kashta tikilgan kozoklardan iborat edi. Unda uchta rang va uch xil dizayndagi 9 ta mahsulot modeli bor edi: “OZBE BUTTERFLY” “OZBE FLAME” “OZBE”. Bu pasayish biz uchun juda muhim, chunki bu bizning OZBE qalblarini zabt etishdagi birinchi qadamimiz edi.';
         stra.textContent = 'SAHIFALAR';
         nn.textContent = 'Dokon';
         tt.textContent = 'Galereya';
         ff.textContent = 'Shartlar';
         shop.textContent = 'Dokon';
         conditions.textContent = 'Shartlar';
         galery.textContent = 'Galery';
         
         
         
       

    }

    // Обновляем язык на всех страницах
    document.querySelectorAll('iframe').forEach(frame => {
        frame.contentWindow.postMessage({
            type: 'language',
            lang: l
        }, '*');
    });
}
