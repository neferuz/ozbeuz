// Получаем список продуктов из local storage
const cart = JSON.parse(localStorage.getItem('p-2X'));

// Используем список продуктов
doSomethingWithCart(cart);
