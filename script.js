const search = () => {
    const search_box = document.getElementById('search-item').value.toUpperCase();
    const store_items = document.getElementById('product-list');
    const product = document.querySelectorAll('.product');
    const product_name = store_items.getElementsByTagName('h2');

    for(let i = 0; i < product_name.length; i++){

        let match = product[i].getElementsByTagName('h2')[0];
        
        if(match){
            let text_value = match.textContent || match.innerHTML;
            
            if(text_value.toUpperCase().indexOf(search_box) > -1){
                product[i].style.display = "";
            }else{
                product[i].style.display = "none";
            }
        }
    }
}