$('.product-template').hide();

let i;

function addProduit(){
    if(i<=100){
        $.ajax({
            url: "https://dummyjson.com/product/"+i,
            type: 'GET',
            success: function(data){
                console.log("Hello");
                const produit = $('.product-template').clone();
                produit.removeClass('product-template');
                produit.addClass('product-' + i);
                produit.find('.img').attr('src', data.thumbnail).attr('alt', data.title);
                produit.find('.title').text(data.title);
                produit.find('.brand').text(data.brand);
                produit.find('.price').text(`Price: ${data.price}`);
                const oldPrice = data.price + data.price / data.discountPercentage;
                produit.find('.old-price').text(`Old price: ${oldPrice}`);
                produit.find('.stock').text(`Stock: ${data.stock}`);
                produit.show();
                $('body').append(produit);
            }, error: function(jqXHR, textStatus, errorThrown){
                console.log('Une erreur est survenue lors de l\'envoir du formulaire ');
            }
        })
        i += 1;
    }
}

i = 1;
document.getElementById("product-generation").addEventListener('click',addProduit);