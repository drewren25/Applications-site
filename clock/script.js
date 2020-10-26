
function checkTimeMinuteSecond(i){  // add zero in front of numbers < 10

  if (i < 10){
    i = "0" + i
  }
  return i;

}

function startTime(){

  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  let timeZone = document.getElementById("timeZones").value;
  let fname = document.getElementById("fname");
  let lname = document.getElementById("lname");

  m = checkTimeMinuteSecond(m);
  s = checkTimeMinuteSecond(s);

  if(timeZone == "Pacific"){

    if((h>=12)&&(h!=24)){
      if(h!=12){
        h-=12;
      }
      document.getElementById("time").innerHTML = h + ":" + m + ":" + s + " " + "P.M";
      setTimeout(startTime, 500);

    }else{

      if(h==24){
        h-=12;
      }

      document.getElementById("time").innerHTML = h + ":" + m + ":" + s + " " + "A.M";
      setTimeout(startTime, 500);

    }

  }else if(timeZone == "Hawaii"){

    h -= 3;
    if((h>=12)&&(h!=24)){

      if(h!=12){
        h-=12;
      }
      document.getElementById("time").innerHTML = h + ":" + m + ":" + s + " " + "P.M";
      setTimeout(startTime, 500);

    }else{

      if(h==24){
        h-=12;
      }

      document.getElementById("time").innerHTML = h + ":" + m + ":" + s + " " + "A.M";
      setTimeout(startTime, 500);

    }

  }else if(timeZone == "Alaska"){

    h--;
    if((h>=12)&&(h!=24)){

      if(h!=12){
        h-=12;
      }
      document.getElementById("time").innerHTML = h + ":" + m + ":" + s + " " + "P.M";
      setTimeout(startTime, 500);

    }else{

      if(h==24){
        h-=12;
      }

      document.getElementById("time").innerHTML = h + ":" + m + ":" + s + " " + "A.M";
      setTimeout(startTime, 500);

    }

  }else if(timeZone == "Mountain"){

    h++;
    if((h>=12)&&(h!=24)){

      if(h!=12){
        h-=12;
      }
      document.getElementById("time").innerHTML = h + ":" + m + ":" + s + " " + "P.M";
      setTimeout(startTime, 500);

    }else{

      if(h==24){
        h-=12;
      }

      document.getElementById("time").innerHTML = h + ":" + m + ":" + s + " " + "A.M";
      setTimeout(startTime, 500);

    }

  }else if(timeZone == "Central"){

    h += 2;
    if((h>=12)&&(h!=24)){

      if(h!=12){
        h-=12;
      }
      document.getElementById("time").innerHTML = h + ":" + m + ":" + s + " " + "P.M";
      setTimeout(startTime, 500);

    }else{

      if(h==24){
        h-=12;
      }

      document.getElementById("time").innerHTML = h + ":" + m + ":" + s + " " + "A.M";
      setTimeout(startTime, 500);

    }

  }else if(timeZone == "Eastern"){

    h += 3;
    if((h>=12)&&(h!=24)){

      if(h!=12){
        h-=12;
      }
      document.getElementById("time").innerHTML = h + ":" + m + ":" + s + " " + "P.M";
      setTimeout(startTime, 500);

    }else{

      if(h==24){
        h-=12;
      }

      document.getElementById("time").innerHTML = h + ":" + m + ":" + s + " " + "A.M";
      setTimeout(startTime, 500);

    }

  }

}
