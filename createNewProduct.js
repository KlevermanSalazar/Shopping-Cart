const newImageSrc=document.getElementById("newProductSrc");
const newProductName=document.getElementById("newProductName");
const newProductPrice=document.getElementById("newProductPrice");
const newProductQuantity=document.getElementById("newProductQuantity");
const btnCreateProduct=document.getElementById("btnCreateProduct");
const containerImage=document.getElementById("container-image");
btnCreateProduct.addEventListener("click",addNewProduct)
function addNewProduct(){
    listProduct.push({
        code:listProduct.length+1,
        src:newImageSrc.value,
        productName:newProductName.value,
        price:newProductPrice.value,
        quantity:newProductQuantity.value,
        stateAdded:false
    })
    return createProducts();
}
let exampleModal = document.getElementById('exampleModal');
exampleModal.addEventListener('show.bs.modal', function (event) {
    let button = event.relatedTarget;
    let recipient = button.getAttribute('data-bs-whatever');
    let modalTitle = exampleModal.querySelector('.modal-title');
    let modalBodyInput = exampleModal.querySelector('.modal-body input');
    modalTitle.textContent = 'Create New Product ';
})