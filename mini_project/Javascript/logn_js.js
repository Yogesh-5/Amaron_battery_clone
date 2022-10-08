// registering all the ID'S which are required for this project.

var mobile = document.getElementById("mobile");
var email = document.getElementById("email");
var otp = document.getElementById("otp");
var password = document.getElementById("password");

var Submit = document.getElementById("submit");

// creating a new array for storing the objects in it.

var list1 = [];

// after refreshing this data will remains same

var data = localStorage.getItem("list1");
list1 = JSON.parse(data);
list1 = data === null ? [] : JSON.parse(data);

// if submit is not equal to none then we will work on it.

if (Submit !== null) {
  Submit.addEventListener("submit", function (event) {
    //creating submit button's action
    event.preventDefault();

    // here i have created object
    var nUser = {};
    var form = new FormData(Submit);

    // here i have iterate through the function and add key value to onject
    form.forEach(function (value, name) {
      nUser[name] = value;
    });

    var flag = false;

    if (Number(nUser["mobile"][0]) > 5 && nUser["mobile"].length === 10) {
      flag = true;
    } else {
      alert("Enter valid mobile number...");

      Submit.reset();
    }

    var f = false;

    if (nUser["otp"].length === 4) {
      f = true;
    } else {
      alert("Enter valid otp of length 4 digits");

      Submit.reset();
    }

    var f1 = false;

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(nUser["email"])) {
      f1 = true;
    } else {
      alert("You have entered an invalid email address!");
    }

    if (flag && f && f1 === true) {
      list1.push(nUser); //providing values for localstorage

      localStorage.setItem("list1", JSON.stringify(list1));

      alert("User Added Successfully.!!!");
    }

    // list1.push(nUser);

    // localStorage.setItem("list1", JSON.stringify(list1));

    // alert function used for alert and after that print function.

    print();
    Submit.reset();
  });
}

// this is used for registering the table id for display the data in table format.

var tablelistPrint = document.getElementById("user-list");

// this is the printfunction
function print() {
  if (tablelistPrint === null) return false;

  //   here i have used ma function to recreae the data
  var list2 = list1.map(function (value, index) {
    var data = `<tr>
            <th scope="row">${index + 1} </th>
    
            <td>${value.mobile}</td>
            <td>${value.otp}</td>
            <td>${value.email}</td>
            <td>${value.password}</td>
            <td>
            <button class="btn btn-danger btn-sm" onclick="remove(${index})" >
            <i class="fa fa-trash" aria-hidden="true"></i></button>
            <button class="btn btn-primary btn-sm">
            <i class="fa fa-edit" aria-hidden="true"></i></button>
    
            </td></tr>`;
    return data;
  });
  var newString = list2.join("");
  tablelistPrint.innerHTML = newString;
}
print();

// this function is used for removing the data from table and from local storage.
function remove(index) {
  var del = confirm("Are you sure?");
  if (del == true) list1.splice(index, 1);

  alert("User Deleted Successfully");
  print();
  localStorage.setItem("list1", JSON.stringify(list1));
}

// again registering all the id's which are required for login area

// var formSubmit = document.getElementById("submit1");
var list2 = [];

var mobile = document.getElementById("mobilenum");
var otp = document.getElementById("otp");

// create one array

var arr = [];
var Click = document.getElementById("click");
var submit1 = document.getElementById("submit1");
var submit2 = document.getElementById("submit2");
Click.addEventListener("click", function (event) {
  event.preventDefault();

  //   again create object for the users

  var User = {
    mobile: mobile.value,
    otp: otp.value,
  };
  arr.push(User);

  valid();

  submit1.reset();

  //   this is the checking function have used for checking the things
});

// checking function which is used for login mobile and otp checking

function valid() {
  // I have traversed thorugh the whole array and check whether mobile value is equal to current.
  var mobile = document.getElementById("mobilenum");
  var otp = document.getElementById("otp");

  mobile = mobile.value;
  mob = Number(mobile[0]);
  otp = otp.value;
  // var otp = otp;
  var a = false;

  var len = mobile.length;
  if (mob > 5 && len === 10) {
    a = true;
  } else {
    alert("enter valid number");

    submit1.reset();
  }

  var fl = false;

  if (otp.length === 4) {
    fl = true;
  } else {
    alert("Enter valid otp of length 4 digits");

    submit1.reset();
  }

  if (a && fl == true) {
    var flag = false;
    for (let i = 0; i < list1.length; i++) {
      if (list1[i]["mobile"] === mobile.value) {
        flag1 = true;
        break;
      }
    }

    //  I have traversed thorugh the whole array and check whether otp value is equal to current otp.

    var flag1 = false;
    for (let i = 0; i < list1.length; i++) {
      if (list1[i]["otp"] === otp.value) {
        flag1 = true;
        break;
      }
    }
    // <!-- arr = [{mobile:999},{mobile:1234},{mobile:3445},{mobile:14444},{mobile:5555}] -->
    if (flag === true && flag1 === true) {
      alert("sucess");
    } else {
      alert("invalid");
      return false;
    }
  }
}

// again i have created the variables for the login via email and password only.

var email = document.getElementById("emailid");
var password = document.getElementById("pass");

// again created one array for thesecond one.

var arr2 = [];
emailclick = document.getElementById("email-click");
emailclick.addEventListener("click", function (event) {
  event.preventDefault();

  //   object are created here..
  var urgent_document = {
    email: email.value,
    password: password.value,
  };
  if (email.value === "") {
    alert("please enter email");
    return false;
  } else if (password.value == "") {
    alert("please enter password");
    return false;
  }

  //   this is the function used for checking the login and email in second login format.
  checkingfor();
  submit2.reset();
});

// this is the function which are required for checking via email and password

function checkingfor() {
  // I have traversed thorugh the whole array and check whether email value is equal to email.

  var email = document.getElementById("emailid");
  var password = document.getElementById("pass");

  email = email.value;
  password = password.value;
  var f2 = false;

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    f2 = true;
  } else {
    alert("You have entered an invalid email address!");
  }
  if (f2 === true) {
    var flag3 = false;
    for (i = 0; i < list1.length; i++) {
      if (list1[i]["email"] === email.value) {
        flag3 = true;
        break;
      }
    }

    // I have traversed thorugh the whole array and check whether password value is equal to current password

    var flag4 = false;
    for (i = 0; i < list1.length; i++) {
      if (list1[i]["password"] === password.value) {
        flag4 = true;
        break;
      }
    }

    if (flag3 === true && flag4 === true) {
      alert("success");
    } else {
      alert("invalid");
      return false;
    }
  }
}
