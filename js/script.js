$(document).ready(function () {
    $("#sigIn").click(function (event) {        
        //alert("hice click en sigIn");

        //preparo los datos
        var email = $("#txtEmail").val();
        var password = $("#txtPassword").val();
        //armo mi objeto
        var datosLogin = {
                email: email,
                password: password
            }

        //petición ajax    
        $.ajax({
            url: 'http://localhost:1337/login',
            type: 'POST',
            data: { datosLogin },
            dataType: 'text',
            success: function (data, textStatus, p) {
               var url = "file:///C:/xampp/htdocs/Prueba2/index.html";// me voy a index, chau giles! 
               window.location.replace(url);
            }

        })
            .fail(function (p, ts, et) {

            })
            
    });
});