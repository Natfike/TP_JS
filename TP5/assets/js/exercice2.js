for (let i=0;i<3;i++){
    $.ajax({
        url: "https://dummyjson.com/"+i,
    })
}


$.ajax({
    url: 'form.php',
    type: 'POST',
    data: {email:email, message: message},
    success: function(response){
        console.log(response);
    },
    error: function(jqXHR, textStatus, errorThrown){
        console.log(errorThrown);
    }
})