// Получаем элементы кнопок и текстового контейнера
const rusBtn = document.getElementById("rus-btn");
const engBtn = document.getElementById("eng-btn");
const uzbBtn = document.getElementById("uzb-btn");
const textContainer = document.getElementById("one");
const twoContainer = document.getElementById("two");
const malenkContainer = document.getElementById("malenk");
const jiContainer = document.getElementById("ji");
const rbContainer = document.getElementById("rb");

const Container = document.getElementById("rb");


const rabitContainer = document.getElementById("rabit");
const poluzipContainer = document.getElementById("poluzip");
const clanContainer = document.getElementById("clan");
const nyContainer = document.getElementById("ny");
const fiContainer = document.getElementById("fi");
const uxContainer = document.getElementById("ux");

const shopContainer = document.getElementById("shop");
const sixoneContainer = document.getElementById("sixone");
const conditionsContainer = document.getElementById("conditions");
const galeryContainer = document.getElementById("galery");
const aboutContainer = document.getElementById("about");
const netsContainer = document.getElementById("nets");
const uznytContainer = document.getElementById("uznyt");
const sweatchirtsContainer = document.getElementById("sweatshirts");
const shimlarContainer = document.getElementById("shimlar");
const yspeyContainer = document.getElementById("yspey");
const hudiContainer = document.getElementById("hudi");
const ivoryContainer = document.getElementById("ivory");
const ivorytContainer = document.getElementById("ivoryt");
const ivory3Container = document.getElementById("ivory3");
const ivory4Container = document.getElementById("ivory4");
const blackpoluContainer = document.getElementById("blackpolu");
const ikiContainer = document.getElementById("iki");
const birContainer = document.getElementById("bir");
const triContainer = document.getElementById("tri");
const uchContainer = document.getElementById("uch");
const turContainer = document.getElementById("tur");
const fourContainer = document.getElementById("four");
const helloContainer = document.getElementById("hello");
const checkContainer = document.getElementById("check");
const nmaContainer = document.getElementById("nma");
const youContainer = document.getElementById("you");
const idgirlContainer = document.getElementById("idgirl");
const nuContainer = document.getElementById("nu");
                                                                                                                               
// Получаем выбранный язык
var selectedLanguage = "en"; // здесь нужно получить выбранный язык от пользователя

// Устанавливаем язык в cookie
document.cookie = "language=" + selectedLanguage + "; path=/"; // сохраняем выбранный язык в cookie


// Получаем сохраненный язык из cookie
var savedLanguage = null;
if (document.cookie) {
  var cookies = document.cookie.split(';');
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();
    if (cookie.startsWith("language=")) {
      savedLanguage = cookie.substring("language=".length, cookie.length);
      break;
    }
  }
}

// Устанавливаем язык на странице
if (savedLanguage) {
  // устанавливаем язык, сохраненный в cookie
} else {
  // используем язык по умолчанию
}


// Создаем объект, содержащий переводы для каждого языка
const translations = {
  ru: {
    rb:"Посмотреть",
    ux:" Первый дроп OZBE в основном состоял из свитшотов с вышивками. Имелись 9 моделей товаров в трех цветах и в трех разных дизайнов: «OZBE BUTTERFLY» «OZBE FLAME» «OZBE». Этот дроп имеет для нас очень большое значение так как это был наш самый первый шаг в покорении сердец OZBEков.",
    ji:" Эта коллекция состояла из футболок, свитшотов, шароваров а также шорт разных цветов и выпускалась летом 2022 года. Идея состояла из круга имеющего округленный текст «OZBE PLANET» ,что в свою очередь означает что OZBE это больше чем бренд одежды.",
    fi:"       Арка с надписью «BARAKALLA OZBE» - главная отличительная черта этой коллекция, что означает «МОЛОДЕЦ ОЗБЕ». Эта коллекция также состояла из футболок, свитшотов, шароваров а также шорт разных цветов и выпускалась летом 2022 года.",
    nu:"  С этой коллекции мы начали более обширно продвигать свой логотип и наименование бренда. Были карго штаны, парашют штаны, шаровары, свитшоты и футболки с использованием нашего логотипа.",
    one: "Ozbe UNIVERSE",
    two: "Успейте приобрести товары с нового дропа ведь количество ограничено!",
    rabit: "УБЕЙ ДВУХ ЗАЙЦЕВ ОДНИМ ВЫСТРЕЛОМ",
    poluzip:
      "Полузип свитшоты OZBE можно сочетать как в классическом, так и в уличном стиле.",
    shop: "Магазин",
    conditions: "Условия",
    galery: "Галерея",
    nets: "Cети",
    uznyt: "ПУСКАЙ ВСЕ УЗНАЮТ ЧТО ТЫ OZBE",
    sweatshirts: "Sweatshirt",
    shimlar: "Pants",
    yspey: "Успей приобрести легендарные свитшоты OZBE с нового дропа.",
    hudi: "hooie",
    ivory: "Айвори свитшот",
    ivoryt: "Айвори свитшот",
    ivory3: "Синий свитшот",
    ivory3: "Айвори свитшот",
    blackpolu: "Черный полузип-свитшот",
    bir: "Коричневые парашют",
    iki: "Черные карго-штаны",
    tri: "Бежевые карго-штаны",
    uch: "Зеленые карго-штаны",
    tur: "Серые парашют штаны",
    four: "Черное худи",
    hello: "Бежевое худи",
    nma: "Черные карго-штаны",
    check: "Посмотреть",
    you:"Синий свитшот",
    malenk:"Посмотреть",
    sixone:"Серые парашют штаны",
    idgirl:"Айвори свитшот",
    clan:"Посмотреть",
    ny:" Эта коллекция состояла только из футболок и свитшотов, на задней стороне которых был принт «PROUD TO BE OZBE» , что в свою очередь с английского языка означает «ГОРЖУСЬ БЫТЬ ОЗБЕ» . Целью такой надписи было продвижение нации и чувства патриотизма в молодом поколении.",
    ivory4:"Айвори свитшот ",
    
  },

  en: {
    ji:"This collection consisted of T-shirts, sweatshirts, bloomers and shorts in different colors and was released in the summer of 2022. The idea consisted of a circle with rounded text OZBE PLANET, which in turn means that OZBE is more than a clothing brand.",
    fi:" The arch with the inscription BARAKALLA OZBE is the main distinguishing feature of this collection, which means GOOD OZBE. This collection also consisted of T-shirts, sweatshirts, trousers and shorts in different colors and was released in the summer of 2022.",
    nu:" With this collection, we began to promote our logo and brand name more extensively. There were cargo pants, parachute pants, bloomers, sweatshirts and t-shirts using our logo.",
    one: "Ozbe UNIVERSE",
    two: "Hurry up to buy goods from the new drop. Because the quantity is limited!",
    rabit: "KILL TWO BIRDS WITH ONE STONE",
    poluzip:
      "OZBE half zip sweatshirts can be worn in both classic and street styles.",
    shop: "Shop",
    conditions: "Conditions",
    galery: "Gallery",
    nets: "Networks",
    uznyt: "LET EVERYONE KNOW WHAT YOU ARE OZBE",
    sweatshirts: "Sweatshirt",
    shimlar: "Pants",
    yspey: "Hurry up to get the legendary OZBE sweatshirts from the new drop.",
    hudi: "hooie",
    ivory: "Ivory sweatshirt",
    ivoryt: "Ivory sweatshirt",
    ivory3: "Blue sweatshirt",
    ivory4: "Ivory sweatshirt",
    blackpolu: "Black half zip sweatshirt",
    bir: "Brown parachute",
    iki: "Black cargo pants",
    tri: "Beige cargo pants",
    uch: "Green cargo pants",
    tur: "Gray parachute pants",
    four: "Black hoodie",
    hello: "Beige hoodie",
    nma: "Black cargo pants",
    check: "Look",
    you:"Blue sweatshirt",
    malenk:"Look",
    sixone:"Gray parachute pants",
    idgirl:"Ivory sweatshirt",
    clan:"View",
    ny:" This collection was collected only from T-shirts and sweatshirts, on the back of which there was a print “PROUD TO BE OZBE”, which in turn means “I AM PROUD TO BE BEBE” in English. The purpose of such letters was to promote nations and feelings of patriotism in the younger generation.",
    ux:" OZBE's first drop consisted mainly of embroidered sweatshirts. There were 9 product models in three colors and three different designs: OZBE BUTTERFLY OZBE FLAME OZBE. This drop is very important to us because it was our very first step in conquering the hearts of the OZBEs.",
    rb:"View",
    
  },

  uzb: {
    ux:" OZBE ning birinchi tomchisi asosan kashta tikilgan kozoklardan iborat edi. 9 ta mahsulot modeli uchta rangda va uch xil dizaynda edi: OZBE BUTTERFLY OZBE FLAME OZBE. Bu tomchi biz uchun juda muhim, chunki bu bizning odamlar qalbini zabt etishdagi birinchi qadamimiz edi. OZBEs.",
    ji:"Ushbu kollektsiya turli rangdagi futbolkalar, kozoklar, bloomerlar va shortilardan iborat bo'lib, 2022 yilning yozida chiqarilgan. G'oya dumaloq matnli OZBE PLANET bo'lgan doiradan iborat edi, bu esa, o'z navbatida, O'ZBE ning ko'proq ekanligini anglatadi. kiyim brendi.",
    fi:" BARAKALLA OZBE yozuvi bolgan arch bu kolleksiyaning asosiy farqlovchi jihati bolib, yani YAXSHI OZBE manosini bildiradi. Bu kolleksiya ham turli rangdagi futbolkalar, svitkoylaklar, shimlar va shortilardan iborat bolib, 2022-yil yozida chiqarilgan. ",
    nu:" Ushbu to'plam bilan biz o'z logotipimiz va brend nomimizni yanada kengroq targ'ib qila boshladik. Bizning logotipimizdan foydalangan holda yuk shimlari, parashyut shimlari, bloomerlar, kozoklar va futbolkalar bor edi.",
    one: "Ozbe UNIVERSE",
    two: "Yangi chegirmadagi tovarlarni xarid qilishga shoshiling, chunki miqdori cheklangan!",
    rabit: "BIR OQ BILAN IKKI QUVONNI OLDIRING",
    poluzip:
      "OZBE yarim fermuarli kozoklarni ham klassik, ham kocha uslubida kiyish mumkin.",
    shop: "Dokon",
    conditions: "Shartlar",
    galery: "Galereya",
    nets: "Tarmoqlar",
    uznyt: "HAMMA BILSIN NIMA EDGANINGIZNI OZBE",
    sweatshirts: "Sviterlar",
    shimlar: "Shimlar",
    yspey: "Afsonaviy OZBE sviterlarini yangi tomchidan olishga shoshiling.",
    hudi: "hudi",
    ivory: "Ivory sviter",
    ivoryt: "Ivory sviter",
    ivory3: "Moviy sviter",
    ivory4: "Ivory sviter",
    blackpolu: "Zipli qora sviter",
    bir: "Jigarrang parashyut",
    iki: "Qora yuk shimlari",
    tri: "Bej rangli yuk shimlari",
    uch: "Yashil yuk shimlari",
    tur: "Kulrang parashyut shim",
    four: "Qora hudi",
    hello: "Bejviy hudi",
    nma: "Qora yuk shimlari",
    check: "Qalab Quresh",
    you:"Moviy sviter",
    malenk:"Qalab Quresh",
    sixone:"Kulrang parashyut shim",
    idgirl:"Ivory sviter",
    clan:"Korish",
    ny:"Bu kolleksiya faqat futbolka va kozoklardan yigilgan bolib, uning orqa tomonida “PROUD TO BE OZBE” yozuvi bor edi, bu esa oz navbatida inglizcha “I AM PROUD TO BE BEBE” degan manoni anglatadi. Bunday maktublardan maqsad yosh avlodda millatlar va vatanparvarlik tuygularini targib qilish edi.",
    rb:"Korish",
  },
};

// Получаем предпочитаемый язык пользователя из localStorage
let selectedLanguage = localStorage.getItem("language");

// Если язык не сохранен в localStorage, устанавливаем русский язык по умолчанию
if (!selectedLanguage) {
  selectedLanguage = "ru";
  localStorage.setItem("language", selectedLanguage);
}

// Функции для изменения текста на русский язык
function setRussian() {
  malenkContainer.innerText = translations["ru"]["malenk"];
  jiContainer.innerText = translations["ru"]["ji"];
  rbContainer.innerText = translations["ru"]["rb"];
  uxContainer.innerText = translations["ru"]["ux"];
  fiContainer.innerText = translations["ru"]["fi"];
  nuContainer.innerText = translations["ru"]["nu"];
  nyContainer.innerText = translations["ru"]["ny"];
  clanContainer.innerText = translations["ru"]["clan"];
  idgirlContainer.innerText = translations["ru"]["idgirl"];
  sixoneContainer.innerText = translations["ru"]["sixone"];
  textContainer.innerText = translations["ru"]["one"];
  twoContainer.innerText = translations["ru"]["two"];
  poluzipContainer.innerText = translations["ru"]["poluzip"];
  rabitContainer.innerText = translations["ru"]["rabit"];
  selectedLanguage = "ru";
  shopContainer.innerText = translations["ru"]["shop"];
  selectedLanguage = "ru";
  conditionsContainer.innerText = translations["ru"]["conditions"];
  selectedLanguage = "ru";
  galeryContainer.innerText = translations["ru"]["galery"];
  selectedLanguage = "ru";
  netsContainer.innerText = translations["ru"]["nets"];
  selectedLanguage = "ru";
  uznytContainer.innerText = translations["ru"]["uznyt"];
  selectedLanguage = "ru";
  sweatchirtsContainer.innerText = translations["ru"]["sweatshirts"];
  selectedLanguage = "ru";
  shimlarContainer.innerText = translations["ru"]["shimlar"];
  selectedLanguage = "ru";
  yspeyContainer.innerText = translations["ru"]["yspey"];
  selectedLanguage = "ru";
  hudiContainer.innerText = translations["ru"]["hudi"];
  selectedLanguage = "ru";
  ivoryContainer.innerText = translations["ru"]["ivory"];
  selectedLanguage = "ru";
  ivorytContainer.innerText = translations["ru"]["ivoryt"];
  selectedLanguage = "ru";
  ivory3Container.innerText = translations["ru"]["ivory3"];
  selectedLanguage = "ru";
  ivory4Container.innerText = translations["ru"]["ivory4"];
  selectedLanguage = "ru";
  blackpoluContainer.innerText = translations["ru"]["blackpolu"];
  selectedLanguage = "ru";
  birContainer.innerText = translations["ru"]["bir"];
  selectedLanguage = "ru";
  ikiContainer.innerText = translations["ru"]["iki"];
  selectedLanguage = "ru";
  triContainer.innerText = translations["ru"]["tri"];
  selectedLanguage = "ru";
  uchContainer.innerText = translations["ru"]["uch"];
  selectedLanguage = "ru";
  turContainer.innerText = translations["ru"]["tur"];
  selectedLanguage = "ru";
  clanContainer.innerText = translations["ru"]["clan"];
  selectedLanguage = "ru";

  nmaContainer.innerText = translations["ru"]["nma"];
  selectedLanguage = "ru";

  fourContainer.innerText = translations["ru"]["four"];
  selectedLanguage = "ru";

  helloContainer.innerText = translations["ru"]["hello"];
  selectedLanguage = "ru";

  checkContainer.innerText = translations["ru"]["check"];
  selectedLanguage = "ru";

  youContainer.innerText = translations["ru"]["you"];
  selectedLanguage = "ru";
  idgirlContainer.innerText = translations["ru"]["idgirl"];

  localStorage.setItem("language", selectedLanguage);
}

// Функции для изменения текста на английский язык
function setEnglish() {
  fiContainer.innerText = translations["en"]["fi"];
  jiContainer.innerText = translations["en"]["ji"];
  rbContainer.innerText = translations["en"]["rb"];
  uxContainer.innerText = translations["en"]["ux"];
  nuContainer.innerText = translations["en"]["nu"];
  nyContainer.innerText = translations["en"]["ny"];
  clanContainer.innerText = translations["en"]["clan"];
  selectedLanguage = "en";
  malenkContainer.innerText = translations["en"]["malenk"];
  textContainer.innerText = translations["en"]["one"];
  twoContainer.innerText = translations["en"]["two"];
  poluzipContainer.innerText = translations["en"]["poluzip"];
  rabitContainer.innerText = translations["en"]["rabit"];
  selectedLanguage = "en";
  localStorage.setItem("language", selectedLanguage);
  shopContainer.innerText = translations["en"]["shop"];
  selectedLanguage = "en";
  conditionsContainer.innerText = translations["en"]["conditions"];
  selectedLanguage = "en";
  galeryContainer.innerText = translations["en"]["galery"];
  selectedLanguage = "en";
  sixoneContainer.innerText = translations["en"]["sixone"];
  netsContainer.innerText = translations["en"]["nets"];
  selectedLanguage = "en";
  idgirlContainer.innerText = translations["en"]["idgirl"];
  uznytContainer.innerText = translations["en"]["uznyt"];
  selectedLanguage = "en";
  sweatchirtsContainer.innerText = translations["en"]["sweatshirts"];
  selectedLanguage = "en";
  shimlarContainer.innerText = translations["en"]["shimlar"];
  selectedLanguage = "en";
  yspeyContainer.innerText = translations["en"]["yspey"];
  selectedLanguage = "en";
  hudiContainer.innerText = translations["en"]["hudi"];
  selectedLanguage = "en";
  ivoryContainer.innerText = translations["en"]["ivory"];
  selectedLanguage = "en";
  ivorytContainer.innerText = translations["en"]["ivoryt"];
  selectedLanguage = "en";
  ivory3Container.innerText = translations["en"]["ivory3"];
  selectedLanguage = "en";
  ivory4Container.innerText = translations["en"]["ivory4"];
  selectedLanguage = "en";
  blackpoluContainer.innerText = translations["en"]["blackpolu"];
  selectedLanguage = "en";
  birContainer.innerText = translations["en"]["bir"];
  selectedLanguage = "en";
  ikiContainer.innerText = translations["en"]["iki"];
  selectedLanguage = "en";
  triContainer.innerText = translations["en"]["tri"];
  selectedLanguage = "en";
  uchContainer.innerText = translations["en"]["uch"];
  selectedLanguage = "en";
  turContainer.innerText = translations["en"]["tur"];
  selectedLanguage = "en";
  fourContainer.innerText = translations["en"]["four"];
  selectedLanguage = "en";
  helloContainer.innerText = translations["en"]["hello"];
  selectedLanguage = "en";
  nmaContainer.innerText = translations["en"]["nma"];
  selectedLanguage = "en";
  checkContainer.innerText = translations["en"]["check"];
  selectedLanguage = "en";
  idgirlContainer.innerText = translations["en"]["idgirl"];

  youContainer.innerText = translations["en"]["you"];
  
  selectedLanguage = "en";clanContainer.innerText = translations["en"]["clan"];

}
// Функции для изменения текста на узбекский язык
function setUzbek() {
  selectedLanguage = "uzb";clanContainer.innerText = translations["uzb"]["clan"];
  nuContainer.innerText = translations["uzb"]["nu"];
  uxContainer.innerText = translations["uzb"]["ux"];
  jiContainer.innerText = translations["uzb"]["ji"];
  fiContainer.innerText = translations["uzb"]["fi"];
  clanContainer.innerText = translations["uzb"]["clan"];
  selectedLanguage = "uzb";
  nyContainer.innerText = translations["uzb"]["ny"];
  idgirlContainer.innerText = translations["uzb"]["idgirl"];
  sixoneContainer.innerText = translations["uzb"]["sixone"];
  idgirlContainer.innerText = translations["uzb"]["idgirl"];
  malenkContainer.innerText = translations["uzb"]["malenk"];
  textContainer.innerText = translations["uzb"]["one"];
  twoContainer.innerText = translations["uzb"]["two"];
  poluzipContainer.innerText = translations["uzb"]["poluzip"];
  rabitContainer.innerText = translations["uzb"]["rabit"];
  selectedLanguage = "en";
  localStorage.setItem("language", selectedLanguage);
  shopContainer.innerText = translations["uzb"]["shop"];
  selectedLanguage = "uzb";
  rbContainer.innerText = translations["uzb"]["rb"];
  conditionsContainer.innerText = translations["uzb"]["conditions"];
  selectedLanguage = "uzb";
  galeryContainer.innerText = translations["uzb"]["galery"];
  selectedLanguage = "uzb";
  netsContainer.innerText = translations["uzb"]["nets"];
  selectedLanguage = "uzb";
  uznytContainer.innerText = translations["uzb"]["uznyt"];
  selectedLanguage = "uzb";
  sweatchirtsContainer.innerText = translations["uzb"]["sweatshirts"];
  selectedLanguage = "uzb";
  shimlarContainer.innerText = translations["uzb"]["shimlar"];
  selectedLanguage = "uzb";
  yspeyContainer.innerText = translations["uzb"]["yspey"];
  selectedLanguage = "uzb";
  hudiContainer.innerText = translations["uzb"]["hudi"];
  selectedLanguage = "uzb";
  ivoryContainer.innerText = translations["uzb"]["ivory"];
  selectedLanguage = "uzb";
  ivorytContainer.innerText = translations["uzb"]["ivoryt"];
  selectedLanguage = "uzb";
  ivory3Container.innerText = translations["uzb"]["ivory3"];
  selectedLanguage = "uzb";
  ivory4Container.innerText = translations["uzb"]["ivory4"];
  selectedLanguage = "uzb";
  blackpoluContainer.innerText = translations["uzb"]["blackpolu"];
  selectedLanguage = "uzb";
  birContainer.innerText = translations["uzb"]["bir"];
  selectedLanguage = "uzb";
  ikiContainer.innerText = translations["uzb"]["iki"];
  selectedLanguage = "uzb";
  triContainer.innerText = translations["uzb"]["tri"];
  selectedLanguage = "uzb";
  uchContainer.innerText = translations["uzb"]["uch"];
  selectedLanguage = "uzb";
  turContainer.innerText = translations["uzb"]["tur"];
  selectedLanguage = "uzb";
  fourContainer.innerText = translations["uzb"]["four"];
  selectedLanguage = "uzb";
  helloContainer.innerText = translations["uzb"]["hello"];
  selectedLanguage = "uzb";
  nmaContainer.innerText = translations["uzb"]["nma"];
  selectedLanguage = "uzb";
  checkContainer.innerText = translations["uzb"]["check"];
  selectedLanguage = "uzb";

  youContainer.innerText = translations["uzb"]["you"];
  selectedLanguage = "uzb";
}
// Устанавливаем соответствующий язык при загрузке страницы
if (selectedLanguage === "ru") {
  setRussian();
} else if (selectedLanguage === "en") {
  setEnglish();
} else {
  setUzbek();
}


// Добавляем обработчики событий на кнопки
rusBtn.addEventListener("click", setRussian);
engBtn.addEventListener("click", setEnglish);
uzbBtn.addEventListener("click", setUzbek);
