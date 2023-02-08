
usr="brayanmerol@gmail.com";
psw="Perrito1";
var stringok = "0987654321asdfghjklñqwertyuiopzxcvbnm@";
function validar(formulario){
    if(formulario.usuario.value.length >0 && formulario.contraseña.value.length >0){
            if(formulario.usuario.value ==usr && formulario.contraseña.value == psw){
                alert("Bienvenido "+ usr);
                setTimeout(function(){
                    window.location.href="onsession.html"
                })
            }else{
                alert("Usuario o contraseña son incorrectos");
                formulario.usuario.focus();
            }
        
        
    }else{
        alert("Usuario y contraseña son necesarios");
        formulario.usuario.focus();
    }

    
function validacaracteres(cad1, cad2){
    for(var i = 0; i < cad1.length; i++){
        var ch = checkString.charAt(i);
        for(var j = 0; j < cad2.length; j++){
            if(ch == cad2.charAt(j)){
                break;
            
        }
        if(j == checkOK.length){
            todoesvalido = false;
            break;
        }
    }
    if(!todoesvalido){
        alert("Escriba unicamente numeros en el campo edad");
        formulario.edad.focus();
        return false;
    }
}
}


    
    var checkOK = "0987654321asdfghjklñqwertyuiopzxcvbnm@";

    var checkString = formulario.edad.value;

    var todoesvalido = true;

    for(var i = 0; i < checkString.length; i++){
        var ch = checkString.charAt(i);
        for(var j = 0; j < checkOK.length; j++){
            if(ch == checkOK.charAt(j)){
                break;
            }
        }
        if(j == checkOK.length){
            todoesvalido = false;
            break;
        }
    }
    if(!todoesvalido){
        alert("Escriba unicamente numeros en el campo edad");
        formulario.edad.focus();
        return false;
    }

    var txt = formulario.correo.value;

    var b = /^[^@\s]+[^@\.\s]+(\.[^@\.\s]+)+$/;

    alert("Email " + (b.test(txt)? " ": " no ")+ "valido");

    return b.test;


}