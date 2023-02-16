

function capturar() {

    let nombre,cedula,notaM,notaF,notaP;
    nombre = document.getElementById("e2").value;
    cedula = document.getElementById("e1").value;
    notaM = document.getElementById("e3").value;
    notaF = document.getElementById("e4").value;
    notaP = document.getElementById("e5").value;

    baseDatos.push()













   /* function Persona(cedula, nombre, notaM, notaF, notaP) {
        this.cedula = cedula;
        this.nombre = nombre;
        this.notaM = notaM;
        this.notaF = notaF;
        this.notaP = notaP;

    }


    let ci = document.getElementById("e1").value;
    let nombre = document.getElementById("e2").value;
    let notaM1 = document.getElementById("e3").value;
    let notaF1 = document.getElementById("e4").value;
    let notaP1 = document.getElementById("e5").value;



    var nuevoSujeto = new Persona(ci, nombre, Number(notaM1), Number(notaF1), Number(notaP1));


    agregar();
*/
}


var baseDatos = [];

function agregar() {

    baseDatos.push(nuevoSujeto);
    document.getElementById("tabla").innerHTML += "<tbody><td>" + nuevoSujeto.cedula + "</td><td>" + nuevoSujeto.nombre + "</td><td>" + nuevoSujeto.notaM + "</td><td>" + nuevoSujeto.notaF + "</td><td>" + nuevoSujeto.notaP + "</td></tbody>";








}


function estadisticas() {

    let sumatoria = 0;
    let sumatoria1 = 0;
    let aprobados = 0;
    let reprobados = 0;
    let reprobados1 = 0;
    let aprobados1 = 0;
    let aprobados2 = 0;
    let reprobados2 = 0;



    console.log("Se muestra estadisticas");

    //Nota promedio de materias matematicas



    baseDatos.forEach(alumno=> {
        
        
        sumatoria = alumno.notaM1 / baseDatos.length;

        console.log("El promedio es: " + sumatoria);

    });





  /*  var matematicas = baseDatos.map(function (datos) {


        return datos.notaM;

    });
    console.log((matematicas));

    for (var i = 0; i < matematicas.length; i++) {
        sumatoria = sumatoria + Number(matematicas[i]);
        division = sumatoria / matematicas.length;


    } {
        console.log(sumatoria);
        console.log("Promedio de la materia matematicas es: " + division);
    }

    //numero de aplazados matematicas

    var matematicasa = baseDatos.map(function (datos) {

        return datos.notaP;
    })

    for (var i = 0; i < matematicasa.length; i++) {

        var coma = Number(matematicasa[i]);
        console.log(coma + "coma");

        if (coma < 10) {

            reprobados += 1;
        }
        else {
            aprobados += 1;

        }


    }
    console.log("Los numeros de reprobados en matematicas es:" + reprobados);
    console.log("Los numeros de aprobados en matematicas es:" + aprobados);



*/








    //Nota promedio de materia fisica

    var fisica = baseDatos.map(function (datos) {


        return datos.notaF;

    });
    console.log((fisica));

    for (var i = 0; i < fisica.length; i++) {
        sumatoria1 = sumatoria1 + Number(fisica[i]);
        division1 = sumatoria1 / fisica.length;


    } {
        console.log(sumatoria1);
        console.log("Promedio de la materia fisica es: " + division1);
    }


    //Numero de aplazados en fisica

    var fisicaa = baseDatos.map(function (datos) {

        return datos.notaF;
    })

    for (var i = 0; i < fisicaa.length; i++) {

        var coma2 = Number(fisicaa[i]);
        console.log(coma2 + "coma");

        if (coma2 < 10) {

            reprobados2 += 1;
        }
        else {
            aprobados2 += 1;

        }


    }
    console.log("Los numeros de reprobados en fisica es:" + reprobados2);
    console.log("Los numeros de aprobados en fisica es:" + aprobados2);







    //=======================================================================================================

    //Nota promedio de materia de programacion

    var programacion = baseDatos.map(function (datos) {


        return datos.notaP;

    });
    console.log((programacion));

    for (var i = 0; i < programacion.length; i++) {
        sumatoria1 = sumatoria1 + Number(programacion[i]);
        division = sumatoria1 / programacion.length;


    } {
        console.log(sumatoria);
        console.log("Promedio de la materia programacion es: " + division);
        //console.log(programacion);
    }



    //Alumnos aplazados de las materia
    //programacion

    var programaciona = baseDatos.map(function (datos) {

        return datos.notaP;
    })

    for (var i = 0; i < programaciona.length; i++) {

        var coma1 = Number(programaciona[i]);
        console.log(coma1 + "coma");

        if (coma1 < 10) {

            reprobados1 += 1;
        }
        else {
            aprobados1 += 1;

        }


    }
    console.log("Los numeros de reprobados en programacion es:" + reprobados1);
    console.log("Los numeros de aprobados en programacion es:" + aprobados1);



}










/*function mostrar(){

    for (let i = 0; i < nombres.length; i++) {


    console.log(nombres[i]);
    /*console.log(ci);
    console.log(notaM);
    console.log(notaF);
    console.log(notaP);


    }
    
    



}*/