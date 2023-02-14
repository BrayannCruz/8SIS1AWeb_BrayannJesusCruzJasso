
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
        window.location.assign("./formulario.html");

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

function calculainversion(){
    var cantidad=0;
    var mes=1;
    var ganancia;
    cantidad=document.getElementById("cantidad").value
    mes=document.getElementById("mes").value;
    if(cantidad.value !=null || cantidad>0){
        if(mes !=null || mes.leng > 0 && mes>=1 || mes<=12){
            ganancia = (cantidad*.02)*mes;
            document.getElementById("ganancia").innerHTML="Su ganancia es de :  $ "+ganancia+" pesos";
        }else{
            alert("Ingrese un mes entre 1 y 12");
        }
    }else{
        alert("Debe ingresar la cantidad invertida");
    }
}

function calculacomision(){
    var sueldobase= 207.44*30;
    var comision;
    var ganancia;
    if(document.getElementById("sueldo").value !=null || document.getElementById("sueldo").value>0){
        if(document.getElementById("ventas").value !=null || document.getElementById("ventas").value.leng > 0){
            comision=document.getElementById("sueldo").value*.10;
            ganancia=document.getElementById("ventas").value*comision;
            document.getElementById("ganancia").innerHTML="Su ganancia es de :  $ "+ganancia+" pesos";
        }else{
            alert("Ingrese la cantidad de sus ventas");
        }
    }else{
        alert("Debe ingresar su sueldo actual");
    }
}

function calculadescuento(){
    if(document.getElementById("compra").value !=null || document.getElementById("compra").value>0){
        var descuento=document.getElementById("compra").value*.15;
        var total=document.getElementById("compra").value-descuento;
        document.getElementById("descuento").innerHTML="Su descuento sera de $"+ descuento + " pesos, su monto total a pagar con el 15% de descuento aplicado es de $"+ total+" pesos";
    }else{
            alert("Ingrese el total de su compra");
    }
}

function calculacalificacion(){
    var cp1=document.querySelector("#parcial1").value;
    var cp2=document.querySelector("#parcial2").value;
    var cp3=document.querySelector("#parcial3").value;
    var ef=document.querySelector("#examen").value;
    var trf=document.querySelector("#trabajofinal").value;
    if(cp1>null && cp2>null &&cp3>null &&ef>null && trf>null){
        if(cp1<0 && cp2<0 && cp3<0 && ef<0 && trf<0 || cp1>10 && cp2>10 && cp3>10 && ef>10 && trf>10){
            alert("Debe ingresar un valor entre 0 y 10");
        }else{
            var promparcial=((parseInt(cp1)+parseInt(cp2)+parseInt(cp3))/3)*.55;
            var eft=ef*.30;
            var trct=parseInt(trf)*.15;
            var pf=promparcial+parseInt(eft)+parseInt(trct);
            document.querySelector("#cparciales").textContent="Su promedio alcanzado por los tres parciales fue de "+ promparcial;
            document.querySelector("#ctfinal").textContent="Su calificacion final es  "+ pf;
            const $cfinal = document.querySelector("#cfinal");
            $cfinal.textContent = "Su calificacion final es  "+ pf;
            alert(promparcial+" "+ eft+ " "+trct);  
        }
    }else{
        alert("Todos los campos deben estar llenos.");
    }
    
}

function porcentajealumnos(){
    var at = document.querySelector("#alumtotal").value;
    var h = document.querySelector("#h").value;
    var m = document.querySelector("#m").value;
    if(h===null && m===null || isNaN(h) && isNaN(m)){
        alert("Debe ingresar valores ");
    }else{
        var ph=(h/at)*100;
        var pm=(m/at)*100;
        const $phombres=document.querySelector("#phombres").textContent="El porcentaje de hombres en el grupo es de " +ph+"% ";
        const $pmujeres=document.querySelector("#pmujeres").textContent="El porcentaje de mujeres en el grupo es de " +pm+"% ";
    }
}
function calculaedad(){
    
    var fechaNacimiento = new Date(document.getElementById("fnac").value);
    var fechaActual = new Date();
    var edad = Math.floor((fechaActual - fechaNacimiento) / 31557600000);

    const fecha = new Date();
    if(fechaNacimiento===null || isNaN(fechaNacimiento) ){
        alert("Debe ingresar su año de nacimiento");
    }else{
        const $edad = document.querySelector("#edad").textContent="Usted tiene " +edad+" años de edad";
    }

}
function calculanumeros(n1,n2){
    var n1=document.querySelector("#n1").value;
    var n2=document.querySelector("#n2").value;
    tipoop=["multiplicación","resta", "suma"];
    var res=0;
    if(n1==null && n2==null){
        alert("Debe ingresar dos numeros");        
    }else{
        if(n1==n2){
            res=parseInt(n1)*parseInt(n2);
            document.querySelector("#resultado").textContent="La "+tipoop[0]+ " es igual a "+ res;
        }else{
            if(n1>n2){
                res=parseInt(n1)-parseInt(n2);
                document.querySelector("#resultado").textContent="La "+tipoop[1]+ " es igual a "+ res;
            }else{
                res=parseInt(n1)+parseInt(n2);
                document.querySelector("#resultado").textContent="La "+tipoop[2]+ " es igual a "+ res;
            }
        }
    }
}
function compararNumeros() {
    // Obtener los valores de los tres números
    const n1 = Number(document.querySelector("#n1").value);
    const n2 = Number(document.querySelector("#n2").value);
    const n3 = Number(document.querySelector("#n3").value);
    
    // Validar que los valores sean números positivos
    if (n1 <= 0 || n2 <= 0 || n3 <= 0) {
      document.querySelector("#resultado").textContent = "Los números deben ser positivos.";
      return;
    }
    
    // Validar que los valores sean diferentes entre sí
    if (n1 === n2 || n2 === n3 || n1 === n3) {
      document.querySelector("#resultado").textContent = "Los números deben ser diferentes entre sí.";
      return;
    }
  
    // Comparar los números y mostrar el resultado
    const mayor = n1 > n2 ? (n1 > n3 ? n1 : n3) : (n2 > n3 ? n2 : n3);
    document.querySelector("#resultado").textContent = "El número " + mayor + " es el mayor.";
  }

  function calculahorasextra() {
    var hnormal = document.querySelector("#hnt").value;
    var hextra = document.querySelector("#he").value;
    salarioxhora = document.querySelector("#sxh").value; 
    var salarioTotal = 0; 
    if (hextra <= 8) {
        hextra = hnormal * 2;
    } else {
        hextra = hnormal * 2 + hnormal * 3 * (hextra - 8);
    }
    salarioTotal = salarioxhora * hnormal + hextra;
    document.querySelector("#resultado").textContent="Su salario con horas extras es de $ "+salarioTotal+" MXN";
  }
  
  function calculoutilidades() {
    var sueldomensual = document.querySelector("#sueldomensual").value;
    var tiempo = document.querySelector("#tiempo").value;
    var utilidades=0;
    if(tiempo=='1'){
        utilidades=sueldomensual*.05;
    }else{
        if(tiempo=='2'){
            utilidades=sueldomensual*.07;
        }else{
            if(tiempo=='3'){
                utilidades=sueldomensual*.10;
            }else{
                if(tiempo=='4'){
                    utilidades=sueldomensual*.15;
                }else{
                    if(tiempo=='5'){
                        utilidades=parseInt(sueldomensual)*.20;
                    }else{
                        alert("Seleccione una opcion valida");
                    }
                }
            }
        }
    }
    document.querySelector("#resultado").textContent="La parte correspondiente de utilidades que le corresponden es de $ "+utilidades+" MXN";
  }
  function inviertepalabras(){
    var t1=document.querySelector("#texto1").value;
    const palabras = t1.split(" ").reverse();
    const textoInvertido = palabras.join(" ");

    document.querySelector("#textoinvertido").textContent=textoInvertido;

  }

  //vamos a obtener todos los valores por parte de los input
function calculavector(){

    var p2_x1 = document.querySelector('#p2-x1').value;
    
    var p2_x2 = document.querySelector('#p2-x2').value;
    
    var p2_x3 = document.querySelector('#p2-x3').value;
    
    var p2_x4 = document.querySelector('#p2-x4').value;
    
    var p2_x5 = document.querySelector('#p2-x5').value;
    
    var p2_y1 = document.querySelector('#p2-y1').value;
    
    var p2_y2 = document.querySelector('#p2-y2').value;
    
    var p2_y3 = document.querySelector('#p2-y3').value;
    
    var p2_y4 = document.querySelector('#p2-y4').value;
    
    var p2_y5 = document.querySelector('#p2-y5').value;
    
    //construir el vector
    var v1 = [p2_x1, p2_x2, p2_x3, p2_x4, p2_x5];
    
    var v2 = [p2_y1, p2_y2, p2_y3, p2_y4, p2_y5];
    
    //ordeno los vectores
    
    v1 = v1.sort(function (a, b){
        return b-a;
    });
    
    v2 = v2.sort(function (a, b){
        return b-a;
    });
    
    v2 = v2.reverse();
    
    //el producto escalar
    var p2_producto = 0;
    for(var i = 0; i < v1.length; i++){
        p2_producto += v1[i]*v2[i];
    }
    document.querySelector('#escalar').textContent = 'Producto Escalar Minimo: ' + p2_producto;
    }


    function contarletras() {
        let palabras = document.getElementById("texto2").value.split(",");
      
        let maxWord = "";
        let maxUniqueChars = 0;
        for (let word of palabras) {
          let uniqueChars = new Set(word).size;
          if (uniqueChars > maxUniqueChars) {
            maxUniqueChars = uniqueChars;
            maxWord = word;
          }
        }
      
        document.getElementById("letrascontadas").innerHTML = `La palabra con más caracteres únicos es: "${maxWord}" con ${maxUniqueChars} caracteres únicos.`;
      }