const cartItems = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');
const clearCartBtn = document.querySelector('.clear-cart-btn');
const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
const nameInput = document.querySelector('#nameInput');
const phoneInput = document.querySelector('#phoneInput');
const adressInput = document.querySelector('#adress');
const massaInput = document.querySelector('#massa');
const comentsInput = document.querySelector('#coments');
const sendBtn = document.querySelector('#sendButton');

const telegramBotToken = '6042973378:AAHP-xYrOYAU_seihA2DAhoSF5Gc28FnPh8';
const telegramChatId = '-600289552';
const CLIENT_ID = 'your-client-id';
const API_KEY = 'your-api-key';
const SPREADSHEET_ID = '1OGPFnNFXMDvEoT0AzvrWAaM3D1dTxyYG_5yjLtFZHes';
const SCOPE = 'https://www.googleapis.com/auth/spreadsheets';


let cart = [];

if (localStorage.getItem('cart')) {
  cart = JSON.parse(localStorage.getItem('cart'));
  showCartItems();
}
addToCartBtns.forEach(addToCartBtn => {
  addToCartBtn.addEventListener('mousedown', () => {
    const name = addToCartBtn.dataset.name;
    const price = Number(addToCartBtn.dataset.price);
    const image = addToCartBtn.dataset.image;

    const existingItem = cart.find(item => item.name === name);
    if (!existingItem) {
      cart.push({
        name: name,
        price: price,
        image: image,
        quantity: 1
      });
    }

    saveCart();
    showCartItems();
  });
});


clearCartBtn.addEventListener('click', () => {
  cart = [];
  saveCart();
  showCartItems();
});

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

cartItems.addEventListener('click', e => {
  if (e.target.classList.contains('plus-btn')) {
    const name = e.target.dataset.name;
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
      existingItem.quantity++;
      saveCart();
      showCartItems();
    }
  }
  if (e.target.classList.contains('minus-btn')) {
    const name = e.target.dataset.name;
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
      existingItem.quantity--;
      if (existingItem.quantity <= 0) {
        const index = cart.findIndex(item => item.name === name);
        if (index !== -1) {
          cart.splice(index, 1);
        }
      }
      saveCart();
      showCartItems();
    }
  }
  if (e.target.classList.contains('remove-item-btn')) {
    const name = e.target.dataset.name;
    const index = cart.findIndex(item => item.name === name);
    if (index !== -1) {
      cart.splice(index, 1);
      saveCart();
      showCartItems();
    }
  }
});

function createCartItem(item) {
  const li = document.createElement('li');
  li.innerHTML = `
    <img class="popup-img" src="${item.image}" alt="${item.name}">
    <div>
      <h3 class="item_name">${item.name}</h3>
      <p class="price">
        ${item.price} сум
        <button class="minus-btn" data-name="${item.name}">-</button>
        <span class="quantity">${item.quantity}</span>
        <button class="plus-btn" data-name="${item.name}">+</button>
      </p>
    
    </div>
    <button class="remove-item-btn" data-name="${item.name}">Удалить</button>
  `;
  return li;
}


function showCartItems() {
  cartItems.innerHTML = '';
  let totalQuantity = 0;
  let totalPrice = 0;
  const shippingPrice = 30000; // Set the shipping price to 30,000

  addToCartBtns.forEach(addToCartBtn => {
    const name = addToCartBtn.dataset.name;
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
      addToCartBtn.textContent = 'Добавлено в корзину';
    } else {
      addToCartBtn.textContent = 'Добавить в корзину';
    }
  });
  
  cart.forEach(item => {
    const li = createCartItem(item);
    cartItems.appendChild(li);
    totalQuantity += item.quantity;
    totalPrice += item.price * item.quantity;
  });

  cartTotal.textContent = `Товары: ${totalQuantity} шт. Доставка: ${shippingPrice.toFixed()} сум Итого: ${(totalPrice + shippingPrice).toFixed()} сум`;
}
sendBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const name = nameInput.value;
  const phone = phoneInput.value;
  const adress = adressInput.value;
  const massa = massaInput.value;
  const coments = comentsInput.value;

  if (!name || !phone|| !adress|| !massa|| !coments) {
    alert('Заполните все поля');
    return;
  }

  const products = cart.map(item => `${item.name} - ${item.quantity}`).join('\n');
  const message =`${products } \n Name: ${name} \n Телефон: ${phone}\n Адресс: ${adress}\n Размер: ${massa}\n Комент: ${coments}`; 
  const telegramUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${telegramChatId}&text=${encodeURIComponent(message)}`;
  fetch(telegramUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Сетевой ответ был не в порядке');
      }
      return response.json();
    })
    .then(data => {
      Swal.fire(
        'Ваш заказ принят!',
        'С вами свяжутся в ближайшее время',
        'success'
      )
      cart = [];
      saveCart();
      showCartItems();
      nameInput.value = '';
      phoneInput.value = '';
      adressInput.value = '';
      massaInput.value = '';
      comentsInput.value = '';
    })
    .catch(error => {
      alert('Возникла проблема с отправкой вашего заказа. Пожалуйста, повторите попытку позже.');
      console.error('Произошла ошибка отправки сообщения:', error);
    });
});


document.getElementById("myButton").addEventListener("click", function(event) {
    event.preventDefault(); 
  });
