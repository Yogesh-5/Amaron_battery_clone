var EveryNeedamron = [
  {
    image: "Two-Wheeler.png",

    name: "Two Wheeler",
  },

  {
    image: "Three-Wheeler.png",

    name: "Three-Wheeler",
  },

  {
    image: "Passanger-Veehicle.png",

    name: "Passanger-Veehicle",
  },

  {
    image: "Commercial-Vehicle.png",

    name: "Commercial-Vehicle",
  },

  {
    image: "Farm-Vehicle.png",

    name: "Farm-Vehicle",
  },

  {
    image: "Invrtor-battery.png",

    name: "Invertor-battery",
  },

  {
    image: "E-rikshaw.png",

    name: "E-Vehicles",
  },

  {
    image: "other-application.png",

    name: "other Application",
  },
];

var AmaronListOne = document.getElementById("list-part");

function displayli() {
  var newArray = EveryNeedamron.map(function (value, index) {
    var data = `<li>
                  <img src="./images/${value.image}" alt="${value.value}" />
                  <span>${value.name}</span>
                  </li>`;
    return data;
  });

  var newString = newArray.join("");
  AmaronListOne.innerHTML = newString;
}

displayli();

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
