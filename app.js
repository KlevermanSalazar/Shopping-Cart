const containerProducts=document.getElementById("container-products");
const offCanvasBody=document.getElementById("offcanvas-body")
shoppingCart=[];
function createProducts(){
    listProduct.forEach((product)=>{
        const cardProduct = document.createElement('div');
        const cardBody= document.createElement('div');
        const productImage= document.createElement('img');
        const productName = document.createElement('h5');
        const productPrice = document.createElement('p');
        const productQuantity= document.createElement("p");
        const btnAddCart = document.createElement('button');
        //Added setAtribute()
        cardProduct.setAttribute('style','width: 18rem;');
        productImage.setAttribute('src',product.src);
        productImage.setAttribute('alt','imagen');
        btnAddCart.setAttribute('id_product', product.code);
        //Added classList
        cardProduct.classList.add('card','m-3','p-3');
        productImage.classList.add('card-img-top');
        cardBody.classList.add('cart-body');
        productName.classList.add('card-title');
        productPrice.classList.add('card-text');
        productQuantity.classList.add('card-text');
        btnAddCart.classList.add('btn','btn-warning');
        //Added textContent
        productName.textContent = `${product.productName}`;
        productPrice.textContent = `$${product.price}`;
        productQuantity.textContent=`Quantity restant: ${product.quantity}`;
        btnAddCart.textContent = 'Added to Cart';
        //Added appendChild()
        containerProducts.appendChild(cardProduct);
        cardProduct.appendChild(productImage);
        cardProduct.appendChild(cardBody);
        cardBody.appendChild(productName);
        cardBody.appendChild(productPrice);
        cardBody.appendChild(productQuantity);
        cardBody.appendChild(btnAddCart);
        btnAddCart.addEventListener("click",addProductCart)
    })
}
createProducts();
function addProductCart(event){
    const idProductAdded=event.target.getAttribute("id_product");
    if(listProduct[idProductAdded-1].stateAdded==false){
        shoppingCart.push(listProduct[idProductAdded-1]);
        listProduct[idProductAdded-1].stateAdded=true;
        return printAddProduct();
    }
}
function printAddProduct(){
    shoppingCart.forEach((product)=>{
        const cardProductAddedCart = document.createElement('div');
        const cardBodyAddedCart= document.createElement('div');
        const productImageAddedCart= document.createElement('img');
        const productNameAddedCart = document.createElement('h5');
        const productPriceAddedCart = document.createElement('p');
        const productQuantityAddedCart= document.createElement("p");
        const btnConfirmBuy = document.createElement('button');
        //Added setAtribute()
        cardProductAddedCart.setAttribute('style','width: 18rem;');
        productImageAddedCart.setAttribute('src',product.src);
        productImageAddedCart.setAttribute('alt','imagen');
        btnConfirmBuy.setAttribute('id_product', product.code);
        //Added classList
        cardProductAddedCart.classList.add('card');
        productImageAddedCart.classList.add('card-img-top');
        cardBodyAddedCart.classList.add('cart-body')
        productNameAddedCart.classList.add('card-title')
        productPriceAddedCart.classList.add('card-text')
        btnConfirmBuy.classList.add('btn');
        btnConfirmBuy.classList.add('btn-warning');
        //Added textContent
        productNameAddedCart.textContent = `${product.productName}`;
        productPriceAddedCart.textContent = `$${product.price}`;
        productQuantityAddedCart.textContent=`Quantity added: ${product.quantity}`;
        btnConfirmBuy.textContent = 'Buy';
        //Added appendChild()
        offCanvasBody.appendChild(cardProductAddedCart);
        cardProductAddedCart.appendChild(productImageAddedCart);
        cardProductAddedCart.appendChild(cardBodyAddedCart);
        cardBodyAddedCart.appendChild(productNameAddedCart);
        cardBodyAddedCart.appendChild(productPriceAddedCart);
        cardBodyAddedCart.appendChild(productQuantityAddedCart);
        cardBodyAddedCart.appendChild(btnConfirmBuy);
        btnConfirmBuy.addEventListener("click",validateBuy)
    })
}
function validateBuy(event){
    userConfirmation=confirm("Are you sure you want to buy?");
    const idProductDelete=event.target.getAttribute("id_product");
    if(userConfirmation){
        shoppingCart.splice(shoppingCart[idProductDelete]-1);
        return buySuccesful();
    }
    else{
        return buyCanceled();
    }
}
function buySuccesful(){
    alert("Successful buy");
}
function buyCanceled(){
    alert("Buy canceled")
}