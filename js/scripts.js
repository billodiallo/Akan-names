// declare function
function passGender(gender) {
  //alert(gender);
  var dob = document.getElementById("date").value;
  var day = new Date(dob).getDay();
  //alert(day);

  if(gender == "M"){
    var akanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kofi"];
    var akan = akanNames[day];
    alert(akan);
  }else{
    var akanNames = ["Akosua","Adwoa","Abenaa","Akua","Yaw","Yaa","Afua","Ama"];
    var akan = akanNames[day];
    alert(akan);
  }

}

          //FEMALE
