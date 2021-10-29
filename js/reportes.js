function consultarstatus() {
    $.ajax({
        url: "http://144.22.225.110:8080/api/Reservation/report-status",
        type: "GET",
        dataType: "JSON",
        //success - propiedad
        //function(json) - funcion anonima
        success: function(respuesta) {
            // capa div - resultado
            $("#resultado").empty();
            $("#resultado").append("<tr>");
            $("#resultado").append("<td>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + respuesta.completed + "&nbsp;&nbsp;&nbsp;&nbsp;" + "</td>");
            $("#resultado").append("<td>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + respuesta.cancelled + "&nbsp;&nbsp;&nbsp;&nbsp;" + "</td>");
            $("#resultado").append("</tr>");

            console.log(respuesta);
        },
        error: function(xhr, status) {
            alert('Ha sucedido un problema, ' + xhr.status);
        },
        complete: function(xhr, status) {
            //status - es el estado de codigo
            alert('Petición realizada, ' + xhr.status);
        }
    });

}

function consultardates(startDate, devolutionDate) {
    let myData = {
        startDate: startDate.val(),
        devolutionDate: devolutionDate.val()
    }
    let dataToSend = JSON.stringify(myData)
    $.ajax({
        url: "http://144.22.225.110:8080/api/Reservation/report-dates/" + startDate.val() + "/" + devolutionDate.val(),
        //+ startDate.val()+"/"+devolutionDate.val(),
        type: "GET",
        dataType: "JSON",
        //success - propiedad
        //function(json) - funcion anonima
        success: function(respuesta) {
            // capa div - resultado
            $("#resultado2").empty();
            for (i = 0; i < respuesta.length; i++) {
                $("#resultado2").append("<tr>");
                $("#resultado2").append("<td>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + respuesta[i].idReservation + "&nbsp;&nbsp;&nbsp;&nbsp;" + "</td>");
                $("#resultado2").append("<td>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + respuesta[i].startDate + "&nbsp;&nbsp;&nbsp;&nbsp;" + "</td>");
                $("#resultado2").append("<td>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + respuesta[i].devolutionDate + "&nbsp;&nbsp;&nbsp;&nbsp;" + "</td>");
                $("#resultado2").append("<td>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + respuesta[i].status + "&nbsp;&nbsp;&nbsp;&nbsp;" + "</td>");
                //$("#miResultado").append('<td><input type="button" value="BORRAR" onclick="eliminar(' + json.items[i].id + ')"></td>');
                $("#resultado2").append("</tr>")
            };
            console.log(respuesta);
            console.log(respuesta);
        },
        error: function(xhr, status) {
            alert('Ha sucedido un problema, ' + xhr.status);
        },
        complete: function(xhr, status) {
            //status - es el estado de codigo
            alert('Petición realizada, ' + xhr.status);
        }
    });

}

function consultarclients() {
    $.ajax({
        url: "http://144.22.225.110:8080/api/Reservation/report-clients",
        type: "GET",
        dataType: "JSON",
        //success - propiedad
        //function(json) - funcion anonima
        success: function(respuesta) {
            // capa div - resultado
            $("#resultado3").empty();
            for (i = 0; i < respuesta.length; i++) {
                $("#resultado3").append("<tr>");
                $("#resultado3").append("<td>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + respuesta[i].total + "&nbsp;&nbsp;&nbsp;&nbsp;" + "</td>");
                $("#resultado3").append("<td>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + respuesta[i].client.name + "&nbsp;&nbsp;&nbsp;&nbsp;" + "</td>");
                $("#resultado3").append("</tr>")
            };

            console.log(respuesta);
        },
        error: function(xhr, status) {
            alert('Ha sucedido un problema, ' + xhr.status);
        },
        complete: function(xhr, status) {
            //status - es el estado de codigo
            alert('Petición realizada, ' + xhr.status);
        }
    });

}