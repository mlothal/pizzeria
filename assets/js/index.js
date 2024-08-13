$(document).ready(function(){
    $("#enviarCorreo").click(function(){
        alert("El correo fue enviado correctamente...");
    });
});

$(document).ready(function(){
    var isRed = false;
    $("h4").on("dblclick", function(){
        if ($(this).text() === "INGREDIENTES" || $(this).text() === "PREPARACIÓN") {
            if (isRed) {
                $(this).css("color", "black");
            } else {
                $(this).css("color", "red");
            }
            isRed = !isRed;
        }
    });
});

$(document).ready(function() {
    $("h5").click(function() {
      $(this).next("p").toggle();
    });
  });

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })