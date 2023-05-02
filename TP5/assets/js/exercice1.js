$('form').submit(function(event){
    event.preventDefault();
    const form = $('form')
    const email = $('#username').val();
    const message = $('#password').val();
    const error = $('#error')
    const succes = $('#succes')

    $.ajax({
        url: 'form.php',
        type: 'POST',
        data: {email:email, message: message},
        success: function(response){
            form.hide();
            succes.show();
        },
        error: function(jqXHR, textStatus, errorThrown){
            error.text('Une erreur est survenue lors de l\'envoir du formulaire :').show();
        }
    })
})


function redBorder(){
}

let username = document.getElementById("username");
let password = document.getElementById("password");

username.addEventListener("keyup", border);
password.addEventListener("keyup",border);
function border(event){
    if (event.target.value===""){
        event.target.style.border="3px solid red";
    }
    else {
        event.target.style.border="none";
    }
    console.log("Test");
}

