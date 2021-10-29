function consultar() {

    $.ajax({
        url: 'http://144.22.225.110:8080/api/Reservation/all',
        type: 'GET',
        dataType: 'JSON',

        //success - propiedad
        //function(json) - funcion anonima
        success: function(respuesta) {
            // capa div - resultado
            $("#resultado").empty();
            for (i = 0; i < respuesta.length; i++) {
                $("#resultado").append("<tr>");
                $("#resultado").append("<td>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + respuesta[i].idReservation + "&nbsp;&nbsp;&nbsp;&nbsp;" + "</td>");
                $("#resultado").append("<td>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + respuesta[i].startDate + "&nbsp;&nbsp;&nbsp;&nbsp;" + "</td>");
                $("#resultado").append("<td>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + respuesta[i].devolutionDate + "&nbsp;&nbsp;&nbsp;&nbsp;" + "</td>");
                $("#resultado").append("<td>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + respuesta[i].status + "&nbsp;&nbsp;&nbsp;&nbsp;" + "</td>");
                //$("#miResultado").append('<td><input type="button" value="BORRAR" onclick="eliminar(' + json.items[i].id + ')"></td>');
                $("#resultado").append("</tr>")
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


function registrar() {

    let var2 = {
        startDate: $("#startDate").val(),
        devolutionDate: $("#devolutionDate").val(),
        status: $("#status").val()
    };

    $.ajax({
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),

        url: "http://144.22.225.110:8080/api/Reservation/save",


        success: function(response) {
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()

        },

        error: function(jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");


        }
    });

}

function editar() {
    let myData = {
        idReservation: $("#idReservation").val(),
        startDate: $("#startDate").val(),
        devolutionDate: $("#devolutionDate").val(),
        status: $("#status").val()
    }
    let dataTosend = JSON.stringify(myData);
    $.ajax({

        url: "http://144.22.225.110:8080/api/Reservation/update",
        type: "PUT",
        data: dataTosend,
        contentType: "application/JSON",
        dataType: 'JSON',
        success: function(respuesta) {
            $("#resultado").empty();
            $("#idReservation").val("");
            $("#startDate").val("");
            $("#devolutionDate").val("");
            $("#status").val("");
            consultar();
        },
        error: function(xhr, status) {
            alert('Ha sucedido un problema' + xhr.status);
        },
        complete: function(xhr, status) {
            alert('Petición realizada' + xhr.status);
            //limpiarFormulario();
        }
    });
}


function eliminar(id) {
    let myData = {
        id: id.val()
    }
    let dataToSend = JSON.stringify(myData)
    $.ajax({
        url: "http://144.22.225.110:8080/api/Reservation/" + id.val(),
        type: 'DELETE',
        //data: dataToSend,
        //contentType: "application/JSON",
        datatype: "JSON",
        success: function(repuesta) {
            $("#resultado").empty();
            consultar();
            console.log(json);
            console.log("idReservation", dataToSend)
            debugger
        },
        error: function(xhr, status) {
            alert('ha sucedido un problema' + xhr.status);
        },
        complete: function(xhr, status) {
            alert('Petición realizada ' + xhr.status);
            //limpiarFormulario();
        }
    });

}