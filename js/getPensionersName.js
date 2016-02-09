"use strict;";
(function() {
  function getPensionersName(obj) {
    var arr = [];
    for (var i = 0; i < obj.length; i++) {
      console.log(obj[i].name + " is " + obj[i].age + " years old");
      if (obj[i].age > 65) {
        arr.push(obj[i].name);

      }
    }
    console.log("Result -> " + arr);
  }

  var human = [{
    name: "John",
    age: 50
  }, {
    name: "Dick",
    age: 65
  }, {
    name: "Ros",
    age: 21
  }, {
    name: "Mat",
    age: 95
  }, {
    name: "Doe",
    age: 66
  }, {
    name: "Taisa",
    age: 16
  }];

  getPensionersName(human);
})();