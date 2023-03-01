
// Укажите токен вашего бота и ID чата в Telegram
const botToken = '6042973378:AAHP-xYrOYAU_seihA2DAhoSF5Gc28FnPh8';
const chatId = '-801065021';

function sendOrder() {
  // Получаем имя клиента
  const name = document.getElementById('name').value;

  // Получаем список продуктов
  const cart = getCart(product-title);

  // Формируем текст сообщения
  let messageText = `Заказ от ${name}:\n\n`;
  for (let i = 0; i < cart.length; i++) {
    messageText += `${i + 1}. ${cart[i].name} - ${cart[i].price} руб.\n`;
  }

  // Отправляем сообщение в Telegram
  const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(messageText)}`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.ok) {
        alert('Заказ успешно отправлен в Telegram');
      } else {
        alert('Не удалось отправить заказ в Telegram');
      }
    })
    .catch(error => {
      alert('Не удалось отправить заказ в Telegram');
    });
}

function getCart() {
  // Получаем список продуктов из локального хранилища
  const cart = JSON.parse(localStorage.getItem('cart'));
  if (!cart) {
    return [];
  }
  return cart;
}
