// Here I have created one array and for storing the objects.
var arr = [];

var name = document.getElementById("name"); //registering all the variables id's
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var city = document.getElementById("city");
var comment = document.getElementById("comment");

// here i have made one variable and pass through the parse so that after refreshing the page our data will remain in the page.
var data = localStorage.getItem("list1");
arr = JSON.parse(data);

// this is the register id of form
var submitform = document.getElementById("submit");
if (submitform !== null) {
  submitform.addEventListener("submit", function (event) {
    event.preventDefault();

    // this is the new user variable object
    var nUser = {};

    //  this is the form variable second methof of form used
    var form = new FormData(submitform);

    //  passing the values acc to name

    form.forEach(function (value, name) {
      nUser[name] = value;
    });

    var flag = false;

    if (Number(nUser["phone"][0]) > 5 && nUser["phone"].length === 10) {
      flag = true;
    } else {
      alert("Enter valid mobile number...");

      submitform.reset();
    }

    var f1 = false;

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(nUser["email"])) {
      f1 = true;
    } else {
      alert("You have entered an invalid email address!");

      submitform.reset();
    }

    if (flag && f1 === true) {
      arr.push(nUser); //providing values for localstorage

      localStorage.setItem("arr", JSON.stringify(arr));

      alert("User Added Successfully.!!!");
    }

    //   here add object into the array.
    // arr.push(nUser);

    //   using stringify and add data into local storage.
    // localStorage.setItem("list1", JSON.stringify(arr));

    print();
    // alert("user added");
    //formsumbit.reset();
    submitform.reset();
  });
}

// register id of table .
var UserPrint = document.getElementById("user-list");

// print function.
function print() {
  if (UserPrint === null) return false;
  //   here is the map function which is used to recreate.
  var list2 = arr.map(function (value, index) {
    // here this var  is for displaying form data into the tables.
    var data = `<tr>
        <th scope="row">${index + 1} </th>
    

        <td>${value.name}</td>
        <td>${value.email}</td>
        <td>${value.phone}</td>
        <td>${value.city}</td>
        <td>${value.comment}</td>
        <td>
        <button class="btn btn-danger btn-sm" onclick="remove(${index})" >
        <i class="fa fa-trash" aria-hidden="true"></i></button>
        <button class="btn btn-primary btn-sm">
        <i class="fa fa-edit" aria-hidden="true"></i></button>

        </td></tr>`;
    return data;
  });

  //   create new string and concatenate that one into new
  var newString = list2.join("");
  UserPrint.innerHTML = newString;
  // console.print(tablelistPrint);
}

// this funtion is for remove the data from table and from localstorage.

function remove(index) {
  var del = confirm("Are you sure?");
  if (del == true) arr.splice(index, 1);

  alert("User Deleted Successfully");
  print();
  localStorage.setItem("list1", JSON.stringify(arr));
}
print();
