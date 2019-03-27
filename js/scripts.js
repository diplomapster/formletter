$(document).ready(function(){
  $("#johnletter").submit(function(event){
    var namegiven = $("input#yourname").val();

    $(".name").text(namegiven);

    $("#namedletter").show();

    event.preventDefault();
  });
});
