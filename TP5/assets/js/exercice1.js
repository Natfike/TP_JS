$('form').submit(function(event){
    event.preventDefault();
    const email = $('#username').val();
    const message = $('#password').val();

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