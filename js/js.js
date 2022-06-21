


  
        fetch("http://www.raydelto.org/agenda.php")
      
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    info(data);
                })
             
            function info(data) {

                var agenda = document.getElementById("dataa");

                for (var i = 0; i < data.length; i++) {
                    var div = document.createElement("div");

                div.innerHTML = data[i].nombre +  '  '  + data[i].apellido + '  ' +  data[i].telefono;
                   agenda.appendChild(div);
                }
            }

