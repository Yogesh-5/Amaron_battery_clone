// var EveryNeedamron = [
//   {
//     image: "Two-Wheeler.png",

//     name: "Two Wheeler",
//   },

//   {
//     image: "Three-Wheeler.png",

//     name: "Three-Wheeler",
//   },

//   {
//     image: "Passanger-Veehicle.png",

//     name: "Passanger-Veehicle",
//   },

//   {
//     image: "Commercial-Vehicle.png",

//     name: "Commercial-Vehicle",
//   },

//   {
//     image: "Farm-Vehicle.png",

//     name: "Farm-Vehicle",
//   },

//   {
//     image: "Invrtor-battery.png",

//     name: "Invrtor-battery",
//   },

//   {
//     image: "E-rikshaw.png",

//     name: "E-Vehicles",
//   },

//   {
//     image: "other-application.png",

//     name: "other Application",
//   },
// ];

// var AmaronListOne = document.getElementById("list-part");

// function displayli() {
//   var newArray = EveryNeedamron.map(function (value, index) {
//     var data = `<li>
//                 <img src="./images/${value.image}" alt="${value.value}" />
//                 <span>${value.name}</span>
//                 </li>`;
//     return data;
//   });

//   var newString = newArray.join("");
//   AmaronListOne.innerHTML = newString;
// }

// displayli();

var amaronFooter = [
  "Amara Raja",
  "Management",
  "Aftermarket",
  "OEM",
  "International operation",
  "Manufacturing",
];

var AmaronFooterOne = document.getElementById("footer-first");

function footerarea1() {
  var footerArray = amaronFooter.map(function (value, index) {
    var data = `<li>
                <span>${value}</span>
                </li>`;
    return data;
  });

  var newString = footerArray.join("");
  AmaronFooterOne.innerHTML = newString;
}

footerarea1();

// third arr
var amaronFooter2 = [
  "Two wheelers",
  "Three wheelers",
  "Passenger Vehicles",
  "Commercial Vehicles",
  "Farm Vehicles",
  "Inverter & Vehicles",
  "E-Vehicles",
  "Other Applications",
];

var AmaronFooterTwo = document.getElementById("footer-two");
if (AmaronFooterTwo !== null) {
  function footerarea2() {
    var FooterArray2 = amaronFooter2.map(function (value, index) {
      var data = `<li>
                <span>${value}</span>
                </li>`;
      return data;
    });

    var newString = FooterArray2.join("");
    AmaronFooterTwo.innerHTML = newString;
  }

  footerarea2();
}

//fourth arr
var amaronFooter3 = [
  "Amcare",
  "Tips for buying batteries",
  "Battery safety guidelines",
  "Terminology",
  "FAQs",
  "Battery recycle",
];

var AmaronFooterThree = document.getElementById("footer-three");
if (AmaronFooterThree !== null) {
  function footerarea3() {
    var FooterArray3 = amaronFooter3.map(function (value, index) {
      var data = `<li>
                <span>${value}</span>
                </li>`;
      return data;
    });

    var newString = FooterArray3.join("");
    AmaronFooterThree.innerHTML = newString;
  }

  footerarea3();
}

//fifth arr

var amaronFooter4 = [
  "Media",
  "Ad gallery",
  "Fun facts",
  "Amaron logo",
  "FAQs",
  "Events",
];

var AmaronFooterFour = document.getElementById("footer-four");
if (AmaronFooterFour) {
  function footerarea4() {
    var FooterArray4 = amaronFooter4.map(function (value, index) {
      var data = `<li>
                <span>${value}</span>
                </li>`;
      return data;
    });

    var newString = FooterArray4.join("");
    AmaronFooterFour.innerHTML = newString;
  }

  footerarea4();
  // sixth arr
}

var amaronFooter5 = [
  "Contact",
  "Blogs",
  "Terms & Conditions",
  "Privacy policy",
  "Online orders terms and conditions",
];

var AmaronFooterFive = document.getElementById("footer-five");

if (AmaronFooterFive !== null) {
  function footerarea5() {
    var FooterArray5 = amaronFooter5.map(function (value, index) {
      var data = `<li>
                <span>${value}</span>
                </li>`;
      return data;
    });

    var newString = FooterArray5.join("");
    AmaronFooterFive.innerHTML = newString;
  }

  footerarea5();
}
