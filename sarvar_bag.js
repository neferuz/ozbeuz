"use strict";                        
let cart = [];
let cartTotal = 0;
const cartDom = document.querySelector(".cart");
const addtocartbtnDom = document.querySelectorAll('[data-action="add-to-cart"]');

addtocartbtnDom.forEach(addtocartbtnDom => {
  addtocartbtnDom.addEventListener("click", () => {
    const productDom = addtocartbtnDom.parentNode.parentNode;
    const product = {
      img: productDom.querySelector(".product-img").getAttribute("src"),
      name: productDom.querySelector(".product-name").innerText,
      price: productDom.querySelector(".product-price").innerText,
      quantity: 1
   };

const IsinCart = cart.filter(cartItem => cartItem.name === product.name).length > 0;
if (IsinCart === false) {
  cartDom.insertAdjacentHTML("beforeend",`
  <div class="d-flex flex-row shadow-sm card cart-items mt-2 mb-3 animated flipInX">
    <div class="p-2">
        <img src="${product.img}" alt="${product.name}" style="max-width: 50px;"/>
    </div>
    <div class="p-2 mt-3">
        <p class="text-info cart_item_name">${product.name}</p>
    </div>
    <div class="p-2 mt-3">
        <p class="text-success cart_item_price">${product.price}</p>
    </div>
    <div class="p-2 mt-3 ml-auto">
        <button class="btn badge badge-secondary" type="button" data-action="increase-item">&plus;
    </div>
    <div class="p-2 mt-3">
      <p class="text-success cart_item_quantity">${product.quantity}</p>
    </div>
    <div class="p-2 mt-3">
      <button class="btn badge badge-info" type="button" data-action="decrease-item">&minus;
    </div>
    <div class="p-2 mt-3">
      <button class="btn badge badge-danger" type="button" data-action="remove-item">&times;
    </div>
  </div> `);

  if(document.querySelector('.cart-footer') === null){
    cartDom.insertAdjacentHTML("afterend",  `
    <div class="card">
      <form action="https://sheetdb.io/api/v1/lclzqgvpe9jg7" method="post" id="sheetdb-form"  >
        <p class="back">Имя: <input class="info" type="text" name="data[name]" id="ename"></p>
        <p class="back">Телефон: <input class="info" type="text" name="data[phone]" id="ephone"></p>
        <p class="back">Адресс как в Яндексе <input class="info" type="text" name="data[eadres]" id="eadress"></p>
        <p class="back">Коментарии <input class="info" type="text" name="data[phone]" id="ephone"></p>
    </div>
      <div class="d-flex flex-row  cart-footer mt-2 mb-3 animated flipInX">
        <div class="p-2">
          <button class="btn badge-danger" type="button" data-action="clear-cart">Clear Cart
        </div>
        <div class="p-2 ml-auto">
          <button class="btn badge-dark" type="button" data-action="check-out">Отправить <span class="pay"></span> 
            &#10137;
        </div>
      </div>
    </form>`); }

    addtocartbtnDom.innerText = "In cart";
    addtocartbtnDom.disabled = true;
    cart.push(product);

    const cartItemsDom = cartDom.querySelectorAll(".cart-items");
    cartItemsDom.forEach(cartItemDom => {

    if (cartItemDom.querySelector(".cart_item_name").innerText === product.name) {

      cartTotal += parseInt(cartItemDom.querySelector(".cart_item_quantity").innerText) 
      * parseInt(cartItemDom.querySelector(".cart_item_price").innerText);
      document.querySelector('.pay').innerText;

      // increase item in cart
      cartItemDom.querySelector('[data-action="increase-item"]').addEventListener("click", () => {
        cart.forEach(cartItem => {
          if (cartItem.name === product.name) {
            cartItemDom.querySelector(".cart_item_quantity").innerText = ++cartItem.quantity;
            cartItemDom.querySelector(".cart_item_price").innerText = parseInt(cartItem.quantity) *
            parseInt(cartItem.price) + " Rs.";
            cartTotal += parseInt(cartItem.price)
            document.querySelector('.pay').innerText;
          }
        });
      });

      // decrease item in cart
      cartItemDom.querySelector('[data-action="decrease-item"]').addEventListener("click", () => {
        cart.forEach(cartItem => {
          if (cartItem.name === product.name) {
            if (cartItem.quantity > 1) {
              cartItemDom.querySelector(".cart_item_quantity").innerText = --cartItem.quantity;
              cartItemDom.querySelector(".cart_item_price").innerText = parseInt(cartItem.quantity) *
              parseInt(cartItem.price) + " Rs.";
              cartTotal -= parseInt(cartItem.price)
              document.querySelector('.pay').innerText = cartTotal + " Rs.";
            }
          }
        });
      });

      //remove item from cart
      cartItemDom.querySelector('[data-action="remove-item"]').addEventListener("click", () => {
        cart.forEach(cartItem => {
          if (cartItem.name === product.name) {
              cartTotal -= parseInt(cartItemDom.querySelector(".cart_item_price").innerText);
              document.querySelector('.pay').innerText = cartTotal + " Rs.";
              cartItemDom.remove();
              cart = cart.filter(cartItem => cartItem.name !== product.name);
              addtocartbtnDom.innerText = "Add to cart";
              addtocartbtnDom.disabled = false;
          }
          if(cart.length < 1){
            document.querySelector('.cart-footer').remove();
          }
        });
      });

      //clear cart
      document.querySelector('[data-action="clear-cart"]').addEventListener("click" , () => {
        cartItemDom.remove();
        /* form.remove() */
        location.reload();
        cart = [];
        cartTotal = 0;
        if(document.querySelector('.cart-footer') !== null){
          document.querySelector('.cart-footer').remove();
        }
        addtocartbtnDom.innerText = "Add to cart";
        addtocartbtnDom.disabled = false;
      });

      document.querySelector('[data-action="check-out"]').addEventListener("click" , () => {
          checkOut();
      });
    }
  });
}
});
});

function animateImg(img) {
  img.classList.add("animated","shake");
}

function normalImg(img) {
  img.classList.remove("animated","shake");
}


let isCheckOutInProgress = false;

function checkOut() {
  if (isCheckOutInProgress) {
    return;
  }
  isCheckOutInProgress = true;

  let telegramMessage = "Новый заказ!\n";

  let name = document.getElementById("ename").value;
  let phone = document.getElementById("ephone").value;
  let address = document.getElementById("eadress").value;
  
  if (!name || !phone) {
     alert("Заполните все поля!чя");
     return;
     isCheckOutInProgress = false;
     }

  telegramMessage += `Name: ${name}\nPhone: ${phone}\n`;
  telegramMessage += `adres: ${address}\n`;
  telegramMessage += `Товары:\n`;
  
  cart.forEach((cartItem) => {
    telegramMessage += `${cartItem.name} - Количество: ${cartItem.quantity} \n`;
  });
  telegramMessage = encodeURIComponent(telegramMessage);


  const botToken = "6042973378:AAHP-xYrOYAU_seihA2DAhoSF5Gc28FnPh8";
  const chatId = "-885349207";
  
  const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${telegramMessage}`;
  
  fetch(url)
  .then(response => response.json())
  .then(data => {console.log(data);
  isCheckOutInProgress = false;})
  .catch(error => {console.error(error);
  isCheckOutInProgress = false;});
  alert("Заказ отправлен!")
}

