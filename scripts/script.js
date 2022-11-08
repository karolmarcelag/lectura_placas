var tabla_lectura
var id_registro

function mostrar()
{
    $.post("funciones/mostrar.php",
    {
    },
    function(respuesta)
    {
        var tabla = JSON.parse(respuesta)
        tabla_lectura = tabla

        var codigo = ""+
        "<table>"+
            "<tr>"+
                "<td class='encabezado' style='width:7%'><b>Posición<b></td>"+
                "<td class='encabezado'><b>Nombre<b></td>"+
                "<td class='encabezado'><b>Placa<b></td>"+
                "<td class='encabezado'><b>Cantidad de Vueltas<b></td>"+
            "</tr>"
        for(x=0; x<tabla.length; x++)
        {
            codigo+=
            "<tr>"+
                "<td style='width:6%'>" + (x+1) + "</td>"+
                "<td>" + tabla[x]["nombre"] + "</td>"+
                "<td>" + tabla[x]["num_placa"] + "</td>"+
                "<td><b>" + tabla[x]["cantidad"] + "</b></td>"+
            "</tr>"
        }
        codigo+=
        "</table>"

        $("#tabla").html(codigo)
        setTimeout(mostrar, 2500)
        console.log('ok')
    })
}

function guardar()
{
    $.post("funciones/guardar.php",
    {
        nombre: $("#nombre").val(),
        num_placa: $("#placa").val(),
    },
    function(respuesta)
    {
        alert("Registro agregado correctamente")
        limpiar()
        registro()
    })
}

function limpiar()
{
    id_registro = ""
    $("#nombre").val("")
    $("#placa").val("")
}

function registro()
{
    $.post("funciones/registro.php",
    {
    },
    function(respuesta)
    {
        switch(parseInt(respuesta))
        {
            case -1:
                {
                    $("#tabla").html("div style='width:100%; margin-top:15px;'><b>Aún no hay registros</b></div>")
                }
                break
            default:
                {
                    var tabla = JSON.parse(respuesta)
                    tabla_lectura = tabla

                    var codigo = ""+
                    "<table>"+
                        "<tr>"+
                            "<td class='encabezado' style='width:45%;'><b>Nombre</b></td>"+
                            "<td class='encabezado' style='width:45%;'><b>Placa</b></td>"+
                            "<td class='encabezado' style='width:10%;'><b>Eliminar</b></td>"+
                        "</tr>"
                    for(x=0; x<tabla.length; x++)
                    {
                        codigo+=
                        "<tr>"+
                            "<td style='width:45%;'>" + tabla[x]["nombre"] + "</td>"+
                            "<td style='width:45%;'>" + tabla[x]["num_placa"] + "</td>"+
                            "<td style='width:10%; text-align:center;'><img class='icono' src='imagenes/eliminar.png' onclick='eliminar(" + x + ")'></td>"+
                        "</tr>"
                    }
                    codigo+=
                    "</table>"

                    $("#tabla").html(codigo)
                }
                break
        }
        
    })
}

function eliminar(_id)
{
    var id_registro = tabla_lectura[_id]["id"]
    var nombre = tabla_lectura[_id]["nombre"]

    if(confirm("¿Realmente desea eliminar el auto " + nombre + "?") == true)
    {
        $.post("funciones/eliminar.php",
        {
            id: id_registro
        },
        function(respuesta)
        {
            switch(parseInt(respuesta))
            {
                case 1:
                    {
                        alert("Auto " + nombre + " eliminado correctamente")
                        registro()
                    }
                    break
                default:
                {
                    alert("Ocurrió un error, por favor contacte al administrador.\n\nError: " + respuesta)
                }
                break
            }
        })
    }
}