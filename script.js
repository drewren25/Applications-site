let clicked = false;
let userList = [];
var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

class user{
  constructor(fname, lname, email, password){
    this.fname = fname;
    this.lname = lname;
    this.email = email;
    this.password = password;
  }
  getFName(){return this.fname;}
  getLName(){return this.lname;}
  getEmail(){return this.email;}
  getPassword(){return this.password;}

}


/*a = new user("a", "b", "c", "d");
userList.push(a);
*/

anime({  //animates bringing in the LOGIN title at the top
  targets: 'a#loginHere',
  translateX: WIDTH*(.28),
  duration: 2000
});

function register(){

  let arr = [document.getElementById("regfname"),
  document.getElementById("reglname"),
  document.getElementById("regemail"),
  document.getElementById("regpassword")];

  if((document.getElementById("regfname").value != "")&&
  (document.getElementById("reglname").value != "")&&
  (document.getElementById("regemail").value != "")&&
  (document.getElementById("regpassword").value != "")){

    newUser = new user(document.getElementById("regfname").value,
    document.getElementById("reglname").value,
    document.getElementById("regemail").value,
    document.getElementById("regpassword").value);

    userList.push(newUser);

    anime({  //animates hiding the REGISTER title
      targets: 'a#registerHere',
      translateX: -WIDTH*(.28),
      duration: 2000
    });

    anime({  //animates hiding the register form
      targets: 'form.regInfo',
      translateX: [-WIDTH*(.31)],
      duration: 2000
    });

    alert("You were registered successfully!");

  }else{

    for(i=0;i<4;i++){
      if(arr[i].value == ""){
          arr[i].style.background = "pink";

          anime({  //shaking animation for invalid input(s) for register
            targets: 'form.regInfo',
            easing: 'easeInOutSine',
            duration: 550,
            translateX: [WIDTH*(.29), WIDTH*(.33), WIDTH*(.3), WIDTH*(.32), WIDTH*(.31)]
          });

        }else{
          arr[i].style.background = "none";
        }
    }
  }
}

function login(){

  let loginSuccess = false;
  let arr = [document.getElementById("fname"),
  document.getElementById("lname"),
  document.getElementById("password")];

  for(i=0;i<userList.length;i++){

    if((document.getElementById("fname").value == userList[i].getFName())&&
    (document.getElementById("lname").value == userList[i].getLName())&&
    (document.getElementById("password").value == userList[i].getPassword())){

      alert("Hello "+fname.value+" "+lname.value);
      for(i=0;i<3;i++){
        arr[i].style.background = "none";
      }
      loginSuccess = true;
    }

  }
  if(loginSuccess == false){

    for(i=0;i<3;i++){
      if(arr[i].value == ""){
        arr[i].style.background = "pink";

        anime({  //shaking animation for invalid input(s) for login
          targets: 'form.loginInfo',
          easing: 'easeInOutSine',
          duration: 550,
          translateX: [WIDTH*(.29), WIDTH*(.33), WIDTH*(.3), WIDTH*(.32), WIDTH*(.31)]
        });

      }else{
        arr[i].style.background = "none";
      }
    }

  }
}

function revealRegister(){

  anime({  //animates bringing in the REGISTER title
    targets: 'a#registerHere',
    translateX: WIDTH*(.28),
    duration: 2000
  });

  anime({  //animates bringing in the register form
    targets: 'form.regInfo',
    translateX: WIDTH*(.31),
    duration: 2000
  });

  document.getElementById("orRegisterHere").style.display = "none";

}

function revealLogin(){
  if(clicked == false){

    anime({  //animates bringing in the login form
      targets: 'form.loginInfo',
      translateX: WIDTH*(.31),
      duration: 2000
    });
    clicked = true;

  }else{

    anime({  //animates hiding the login form
      targets: 'form.loginInfo',
      translateX: -WIDTH*(.31),
      duration: 2000
    });
    clicked = false;

  }
}
