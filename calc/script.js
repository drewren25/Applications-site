window.onload = myMain;

let firstInputBool = true;
let firstNumber = "0";
let operation = "";
let output = 0;
let secondNumber = "";

function allClear(){
  firstInputBool = true;
  firstNumber = "";
  operation = "";
  output = 0;
  secondNumber = "";
  document.getElementById("results").innerHTML = output;
}

function eval(f,b,s){

  let a = parseFloat(f);
  let c = parseFloat(s);

  if(b == "+"){
    return a+c;
  }else if(b == "-"){
    return a-c;
  }else if(b == "*"){
    return a*c;
  }else if(b == "/"){
    return a/c;
  }else if(b == "^"){
    return Math.pow(a,c);
  }else{
    return;
  }
}

function myMain(){
  document.getElementsByClassName("numberPad")[0].onclick = displayNumber;
}

function displayNumber(e){

  if(e.target.tagName == 'A'){

    if(e.target.className == "btn btn-default btn-AC"){

      allClear();

    }

    if(e.target.className == "btn btn-default btn-negative"){

      if(firstInputBool){

        if(firstNumber.includes("-")){

          firstNumber = firstNumber.replace("-", "");

        }else{

          firstNumber = "-"+firstNumber;

        }

        document.getElementById("results").innerHTML = firstNumber;

      }else{

        if(secondNumber.includes("-")){

          secondNumber = secondNumber.replace("-", "");
          document.getElementById("results").innerHTML = firstNumber+operation+secondNumber;

        }else{

          secondNumber = "-"+secondNumber;
          document.getElementById("results").innerHTML = firstNumber+operation+"("+secondNumber+")";

        }
      }
    }

    if(firstInputBool == true){

      if(e.target.className == "btn btn-default btn-number"){

        if(document.getElementById("results").innerHTML == "0"){

          if(e.target.innerHTML == "π"){

            firstNumber = 3.14159265359;
            document.getElementById("results").innerHTML = e.target.innerHTML;

          }

          firstNumber = e.target.innerHTML;
          document.getElementById("results").innerHTML = e.target.innerHTML;

        }else if(e.target.innerHTML == "π"){

          firstNumber += 3.14159265359;
          document.getElementById("results").innerHTML += e.target.innerHTML;

        }else{

          firstNumber += e.target.innerHTML;
          document.getElementById("results").innerHTML += e.target.innerHTML;

        }
      }else if(e.target.className == "btn btn-default btn-operator btn-equals"){

        output = parseFloat(firstNumber);
        output = +output.toFixed(5);
        firstNumber = output.toString();
        firstInputBool = true;

      }else if((e.target.className != "btn btn-default btn-number")&&(e.target.className != "btn btn-default btn-AC")&&(e.target.className != "btn btn-default btn-negative")){

        if(e.target.className == "btn btn-default btn-operator"){

          operation = e.target.innerHTML;
          document.getElementById("results").innerHTML += e.target.innerHTML;

        }

        firstInputBool = false;

      }
    }else{

      if(e.target.className == "btn btn-default btn-operator btn-equals"){

          output = eval(firstNumber, operation, secondNumber);
          output = +output.toFixed(5);
          document.getElementById("results").innerHTML = output;

          firstNumber = output.toString();
          operation = "";
          output = 0;
          secondNumber = "";
          firstInputBool = true;

      }else if(e.target.className == "btn btn-default btn-number"){

        secondNumber += e.target.innerHTML;
        document.getElementById("results").innerHTML += e.target.innerHTML;

      }
    }
  }
}
