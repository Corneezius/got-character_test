$(document).ready(function() {
  $("#test").submit(function(event){
    event.preventDefault();
    var know = $("#knowledge").val();
    var fire = $("#ice").val();
    var pets = $("#pet").val();
    var church = $("#religion").val();
    var love = $("#incest").val();
    var name;
    var Jon, Arya, Dany, Cersei;


    if (pets === "Wolf") {
      Jon++;
      Arya++;
    }
    else if(pets === "Dragon"){
      Dany++;
    }
    else if(pets === "Child Messenger") {
      Cersei++;
    }
    else if(pets === "Zombie Gregor") {
      Cersei+=2;
    }
    if(religion === "The seven") {
      Cersei--
    }
    else if (religion === "Many-faced God"){
      Arya+=4
    }
    else if (religion === "The Lord of Light")

}
