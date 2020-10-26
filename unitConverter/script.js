
anime({
  targets: 'input.resultBox',
  translateY: 600,
  delay: 200,
  duration: 1800
});

anime({
  targets: '.unitSelection',
  translateY: 600,
  delay: 1000,
  duration: 2000
});

anime({
  targets: 'h1.title',
  translateY: 600,
  delay: 1700,
  duration: 2000
});

var color = anime.timeline({
  targets: 'h1#equals',
  easing: 'easeInOutQuad',
  delay: 2700,
  duration: 1500
})
.add({targets: 'h1#equals', color: 'rgb(0,0,0)'}, 0);

var color = anime.timeline({
  targets: 'button',
  easing: 'easeInOutQuad',
  delay: 500,
  endDelay: 500,
  loop: true,
  direction: 'alternate',
  duration: 1500
})
.add({targets: 'button', background: ['rgb(220,0,0)', 'rgb(255,62,91)']}, 0);

function convert(){
let convertFrom = parseFloat(document.getElementsByClassName("resultBox resultBox-left")[0].value);
let leftSelect = document.getElementsByClassName("unitSelection unitSelection-left")[0].value;
let rightSelect = document.getElementsByClassName("unitSelection unitSelection-right")[0].value;

  if(!isNaN(convertFrom)){

    if(leftSelect == "Pounds"){

      if(rightSelect == "Pounds"){

        document.getElementsByClassName("resultBox resultBox-right")[0].value = convertFrom;

      }else if(rightSelect == "Kilograms"){

        convertFrom /= 2.2046226218;
        convertFrom = +convertFrom.toFixed(3);
        document.getElementsByClassName("resultBox resultBox-right")[0].value = convertFrom;

      }else{

        convertFrom /= .0022046226218;
        convertFrom = +convertFrom.toFixed(3);
        document.getElementsByClassName("resultBox resultBox-right")[0].value = convertFrom;

      }
    }else if(leftSelect == "Kilograms"){

      if(rightSelect == "Pounds"){

        convertFrom *= 2.2046226218;
        convertFrom = +convertFrom.toFixed(3);
        document.getElementsByClassName("resultBox resultBox-right")[0].value = convertFrom;

      }else if(rightSelect == "Kilograms"){

        document.getElementsByClassName("resultBox resultBox-right")[0].value = convertFrom;

      }else{

        convertFrom *= 1000;
        convertFrom = +convertFrom.toFixed(3);
        document.getElementsByClassName("resultBox resultBox-right")[0].value = convertFrom;

      }
    }else{

      if(rightSelect == "Pounds"){

        convertFrom *= .0022046226218;
        convertFrom = +convertFrom.toFixed(3);
        document.getElementsByClassName("resultBox resultBox-right")[0].value = convertFrom;

      }else if(rightSelect == "Kilograms"){

        convertFrom /= 1000;
        convertFrom = +convertFrom.toFixed(3);
        document.getElementsByClassName("resultBox resultBox-right")[0].value = convertFrom;

      }else{

        document.getElementsByClassName("resultBox resultBox-right")[0].value = convertFrom;

      }
    }
  }
}
