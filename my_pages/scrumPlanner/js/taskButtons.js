function openView(evt, project) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(project).style.display = "block";
    evt.currentTarget.className += " active";
}

function guardarTask(){
    var fechaIncio = document.getElementById("fechaI").value;
    var fechaFin = document.getElementById("fechaF").value;
    if(Date.parse(fechaIncio) <= Date.parse(fechaFin)){
        //start is less than End
        alert('Los datos se Guardaron Correctamente');
    }else{
        //end is less than start
        alert('La fecha Fin no puede ser menor a la fecha Inicio');
    }
}

function guardarUsuario(){
    var newUsername = document.getElementById("nUsername").value;
    var newUserEmail = document.getElementById("nUserEmail").value;
    var newUserPass = document.getElementById("nUserPass").value;
    var rol = document.getElementById("soflow");
    var newUserRol = rol.options[rol.selectedIndex].value;
    alert('El usuario se Guardó Correctamente');
}

function guardarComentario(){
    alert('El comentario se guardó Correctamente');
}

function archivos(){
    alert('Url del archivo: ');
}