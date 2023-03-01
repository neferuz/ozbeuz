const products = [  { name: "Product 1", price: 9.99, description: "Description for Product 1", img: "./ozbeproducts/hoodeione.png"},  { name: "Product 2", price: 19.99, description: "Description for Product 2", img: "./ozbeproducts/hoodeitwo.png"},  { name: "Product 3", price: 29.99, description: "Description for Product 3", img: "./ozbeproducts/hoodeithree.png"}];

let html = "";
for (let i = 0; i < products.length; i++) {
  html += `       		<div id="" class="col-md-6 col-lg-4 col-xl-3">
  <a href="/products/hoodie.html">
                    <div class="single-product">
                            <div class="part-1">
          <div class="change-photos">
           <div class="change-photo">
              <img src="${product.img}" width="300px" alt="${product.name}">
             </div>
             <div class="change-photo">
            <img src="${product.img}" width="300px" alt="${product.name}">
          </div>
         </div>
          <img class="" src="${product.img}"width="300px " alt="${product.name}">
                            </div>
                            <div class="part-2">
                                    <h3 class="product-title">${product.name}</h3>
                                    <h4 class="product-price">${product.price}</h4>
                            </div>
                    </div>
  </a>
            </div>`;
}

document.querySelector("#panel").innerHTML = html;