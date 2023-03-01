
      //jquery coding

      $(document).ready(function () {
        $("#search").click(function () {
          var checker = 0;
          for (var i = 0; i < 12; i++) {
            var card = $("div").filter(".col-md-6")[i];
            var title = $("h5")
              .filter(".card-title")
              [i].innerText.toUpperCase();

            if (title.indexOf($("#inp").val().toUpperCase()) > -1) {
              card.style.display = "block";
              checker++;
            } else {
              card.style.display = "none";
            }
          }

          if (checker > 0) {
            $("#not_find_any_thing").text("");
          } else {
            $("#not_find_any_thing").text("No Result Found").fadeIn();
          }
        });
      });

      // this video is part 2

      // jquery for add to cart

      $(document).ready(function () {
        $("#cart").hide();

        $(".fa-shopping-cart").mouseenter(function () {
          $("#cart").show();
        });

        $("#cart").mouseleave(function () {
          $("#cart").hide();
        });

        var cart_item_count = 0;
        $(".cart_btn").click(function () {
          cart_item_count++;
          var img_src = $(this)
            .parents(".card-body")
            .siblings("img")
            .attr("src");
          var titlte = $(this)
            .parents(".d-flex")
            .siblings(".d-flex")
            .find(".card-title")
            .text();
          var price = $(this)
            .parents(".d-flex")
            .siblings(".d-flex")
            .find("span:nth-child(2)")
            .text();

          var cart_item = `
          <div class="p-product__info">
          <div class="c-element-content -product-single">
            <span class="c-element-content__sup">hoodei</span>

            <h2 class="c-element-content__title">
              <a href="../collections/volcom.html">Ozbe</a>
            </h2>
            <h3 class="c-element-content__sub">
              <span class="c-element-content__product-title" data-title=""
                >Lorem ipsum dolor sit amet.</span
              >
            </h3>
            <div class="c-element-content__price">
              <div data-price="">
                <span class="o-price -big">
                  <span class="o-price__old" data-compare-price=""></span>
                  <span data-sale-price="">300 som</span>
                </span>
              </div>
            </div>
          </div>

          <div class="p-product__option | -static">
            <label class="p-product__option--name | t-caps">Colour</label>
            <div class="p-product__option--values" data-cross-variants="">
              <span
                class="c-btn -radio -color -active"
                data-handle="volcom-frickin-modern-stretch-charcoal"
              >
                <div class="c-btn__inner">Black</div>
              </span>

              <a
                class="c-btn -radio -color"
                href="volcom-frickin-mod-stretch-khaki.html"
                data-handle="volcom-frickin-mod-stretch-khaki"
              >
                <div class="c-btn__inner">Khaki (KHA)</div>
              </a>

              <a
                class="c-btn -radio -color"
                href="volcom-frickin-modern-stretch-charcoal-heather.html"
                data-handle="volcom-frickin-modern-stretch-charcoal-heather"
              >
                <div class="c-btn__inner">Charcoal Heather (CHH)</div>
              </a>

              <a
                class="c-btn -radio -color"
                href="volcom-frickin-modern-stretch-black-blk.html"
                data-handle="volcom-frickin-modern-stretch-black-blk"
              >
                <div class="c-btn__inner">Black (BLK)</div>
              </a>

              <a
                class="c-btn -radio -color"
                href="volcom-frickin-modern-stretch-dark-navy-dnv.html"
                data-handle="volcom-frickin-modern-stretch-dark-navy-dnv"
              >
                <div class="c-btn__inner">Dark Navy (DNV)</div>
              </a>

              <a
                class="c-btn -radio -color"
                href="volcom-frickin-modern-straight-mushroom-msh.html"
                data-handle="volcom-frickin-modern-straight-mushroom-msh"
              >
                <div class="c-btn__inner">Mushroom (MSH)</div>
              </a>
            </div>
          </div>

          <form
            method="post"
            action="/cart/add"
            id="product_form_6694477791389"
            accept-charset="UTF-8"
            class="shopify-product-form"
            enctype="multipart/form-data"
            data-product-form=""
            data-product-type="Pants"
            data-product-id="6694477791389"
            data-product-title="Frickin Modern Stretch, Charcoal (CHR)"
            data-product-handle="volcom-frickin-modern-stretch-charcoal"
            data-product-vendor="Volcom"
            data-product-sku="00148334-3030"
          >
            <input type="hidden" name="form_type" value="product" /><input
              type="hidden"
              name="utf8"
              value="✓"
            />

            <div class="p-product__option | -dynamic js-enabled">
              <label
                class="p-product__option--name | t-caps"
                for="Option1"
                data-option-label="Size"
                >Size</label
              >

              <div id="Option1" class="p-product__option--values">
                <div class="o-select">
                  <select id="Option1" name="options[Size]">
                    <option value="28W-30L" data-product-option="">
                      28W-30L
                    </option>

                    <option value="28W-32L" data-product-option="">
                      28W-32L
                    </option>

                    <option value="29W-30L" data-product-option="">
                      29W-30L
                    </option>

                    <option
                      value="30W-30L"
                      selected="selected"
                      data-product-option=""
                    >
                      30W-30L
                    </option>

                    <option value="30W-32L" data-product-option="">
                      30W-32L
                    </option>

                    <option value="31W-30L" data-product-option="">
                      31W-30L
                    </option>

                    <option value="31W-32L" data-product-option="">
                      31W-32L
                    </option>

                    <option value="32W-30L" data-product-option="">
                      32W-30L
                    </option>

                    <option value="32W-32L" data-product-option="">
                      32W-32L
                    </option>

                    <option value="32W-34L" data-product-option="">
                      32W-34L
                    </option>

                    <option value="34W-30L" data-product-option="">
                      34W-30L
                    </option>

                    <option value="34W-32L" data-product-option="">
                      34W-32L
                    </option>

                    <option value="34W-34L" data-product-option="">
                      34W-34L
                    </option>

                    <option value="36W-32L" data-product-option="">
                      36W-32L
                    </option>

                    <option value="36W-34L" data-product-option="">
                      36W-34L
                    </option>

                    <option value="38W-30L" data-product-option="">
                      38W-30L
                    </option>

                    <option value="38W-32L" data-product-option="">
                      38W-32L
                    </option>

                    <option value="40W-30L" data-product-option="">
                      40W-30L
                    </option>

                    <option value="40W-32L" data-product-option="">
                      40W-32L
                    </option>

                    <option value="40W-34L" data-product-option="">
                      40W-34L
                    </option>

                    <option value="42W-32L" data-product-option="">
                      42W-32L
                    </option>

                    <option value="44W-30L" data-product-option="">
                      44W-30L
                    </option>

                    <option value="44W-32L" data-product-option="">
                      44W-32L
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <noscript>
              <select name="id">
                <option disabled="disabled" value="39853091422365">
                  28W-30L / Charcoal (CHR)
                </option>

                <option disabled="disabled" value="39853091455133">
                  28W-32L / Charcoal (CHR)
                </option>

                <option disabled="disabled" value="39853091487901">
                  29W-30L / Charcoal (CHR)
                </option>

                <option selected="selected" value="39853091520669">
                  30W-30L / Charcoal (CHR)
                </option>

                <option disabled="disabled" value="39853091586205">
                  30W-32L / Charcoal (CHR)
                </option>

                <option disabled="disabled" value="39853091618973">
                  31W-30L / Charcoal (CHR)
                </option>

                <option disabled="disabled" value="39853091651741">
                  31W-32L / Charcoal (CHR)
                </option>

                <option disabled="disabled" value="39853091717277">
                  32W-30L / Charcoal (CHR)
                </option>

                <option disabled="disabled" value="39853091750045">
                  32W-32L / Charcoal (CHR)
                </option>

                <option disabled="disabled" value="39853091782813">
                  32W-34L / Charcoal (CHR)
                </option>

                <option disabled="disabled" value="39853091815581">
                  34W-30L / Charcoal (CHR)
                </option>

                <option disabled="disabled" value="39853091848349">
                  34W-32L / Charcoal (CHR)
                </option>

                <option disabled="disabled" value="39853091881117">
                  34W-34L / Charcoal (CHR)
                </option>

                <option value="39853091913885">
                  36W-32L / Charcoal (CHR)
                </option>

                <option disabled="disabled" value="39853091946653">
                  36W-34L / Charcoal (CHR)
                </option>

                <option disabled="disabled" value="39853091979421">
                  38W-30L / Charcoal (CHR)
                </option>

                <option disabled="disabled" value="39853092012189">
                  38W-32L / Charcoal (CHR)
                </option>

                <option value="39853092044957">
                  40W-30L / Charcoal (CHR)
                </option>

                <option value="39853092110493">
                  40W-32L / Charcoal (CHR)
                </option>

                <option value="39853092143261">
                  40W-34L / Charcoal (CHR)
                </option>

                <option disabled="disabled" value="39853092176029">
                  42W-32L / Charcoal (CHR)
                </option>

                <option disabled="disabled" value="42177301938333">
                  44W-30L / Charcoal (CHR)
                </option>

                <option disabled="disabled" value="39853092208797">
                  44W-32L / Charcoal (CHR)
                </option>
              </select>
            </noscript>
            <div class="p-product__quantity">
              <span class="p-product__quantity--name | t-caps"
                >Quantity</span
              >
              <div class="p-product__quantity--input">
                <div
                  data-quantity-component=""
                  class="o-input-quantity || js-input-quantity"
                >
                  <button
                    data-quantity-decrease=""
                    class="o-input-quantity__btn -decrement || js-input-quantity-decrement"
                  >
                    -
                  </button>
                  <input
                    data-quantity-value=""
                    name="quantity"
                    type="number"
                    class="o-input-quantity__input || js-input-quantity-input"
                    min="1"
                    value="1"
                  />
                  <button
                    data-quantity-increase=""
                    class="o-input-quantity__btn -increment || js-input-quantity-increment"
                  >
                    +
                  </button>
                </div>

                <noscript>
                  <label for="Quantity">Quantity</label>
                  <input
                    type="number"
                    id="Quantity"
                    name="quantity"
                    value="1"
                    min="1"
                  />
                </noscript>
              </div>
            </div>
            <input
              type="hidden"
              id="defaultOption"
              name="id"
              value="39853091520669"
            /><button
              class="c-btn -dark -md -block"
              type="button"
              type="submit"
              data-product-atc=""
            >
              <span class="c-btn__inner">
                <span class="c-btn__label">Add to cart</span>
              </span>
            </button>
          </form>

          <div class="c-accordion || js-accordion">
            <div class="c-accordion__header || js-accordion-trigger">
              <h3 class="c-accordion__title">Description</h3>

              <i class="o-icon -arrow-down c-accordion__icon">
                <svg class="svg-arrow-down">
                  <use xlink:href="#svg-arrow-down"></use>
                </svg>
              </i>
            </div>

            <div class="c-accordion__container || js-accordion-container">
              <div
                class="c-accordion__content | t-cms || js-accordion-content"
              >
                <span data-mce-fragment="1"
                  >Part of Volcom's Eco-True collection, the Frickin
                  Modern Stretch pants are made with a blend of cotton,
                  elastane, and REPREVE® Recycled Polyester fibers for a
                  truly comfortable, functional, sustainable pair of chino
                  pants. You'll look great in and feel good about these
                  pants.</span
                ><br data-mce-fragment="1" /><br
                  data-mce-fragment="1"
                /><strong data-mce-fragment="1">- Modern Fit</strong
                ><br data-mce-fragment="1" /><strong data-mce-fragment="1"
                  >- 59% Cotton / 39% REPREVE Recycled Polyester / 2%
                  Elastane Twill</strong
                ><br data-mce-fragment="1" /><strong data-mce-fragment="1"
                  >- Chino Pant</strong
                ><br data-mce-fragment="1" /><strong data-mce-fragment="1"
                  >- Signature Asymmetric Back Yoke</strong
                ><br data-mce-fragment="1" /><strong data-mce-fragment="1"
                  >- Pre-Laundered</strong
                >
              </div>
            </div>
          </div>

          <div>
            <div class="c-accordion || js-accordion">
              <div class="c-accordion__header || js-accordion-trigger">
                <h3 class="c-accordion__title">Conditions</h3>

                <i class="o-icon -arrow-down c-accordion__icon">
                  <svg class="svg-arrow-down">
                    <use xlink:href="#svg-arrow-down"></use>
                  </svg>
                </i>
              </div>

              <div
                class="c-accordion__container || js-accordion-container"
              >
                <div
                  class="c-accordion__content | t-cms || js-accordion-content"
                >
                  <ul>
                    <li>Inventory is in Real-time</li>
                    <li>Prices may vary in-store</li>
                    <li>
                      Prices and availability are subject to change at any
                      time without notice.&nbsp;
                    </li>
                    <li>
                      We reserve the right to limit quantities.&nbsp;
                    </li>
                    <li>
                      We reserve the right to cancel your order if deemed
                      fraudulent or appear to be purchased by a reseller,
                      retailer and/or distributor.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          
        </div>

`;

          $("#order").append(cart_item);

          $("#cart_item_count").text(cart_item_count);
          $(".close").click(function () {
            $(this).parents(".main").remove();

            item_count();
          });
          item_count();
        });
        function item_count() {
          var res = $("#order").children().length;
          $("#cart_item_count").text(res);
        }
      });