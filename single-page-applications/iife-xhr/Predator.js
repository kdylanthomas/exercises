var Predator = (function () {
  var carnivores = [];
  var herbivores = [];

  return {
    // callbackToInvoke will be showCarnivores, which accepts a placeholder parameter of "carnivores"
    // we set "carnivores" equal to data.carnivores on line 17--everywhere you see "carnivores" in 
    //  showCarnivores(carnivores) function, data.carnivores will be referenced instead
    loadCarnivores: function (callbackToInvoke) {
      // set up a conditional so you can tell if the carnivores data has already been called in and loaded, 
      // so if it has, you don't have to perform the expensive IO operation again
      if (carnivores.length === 0) {
        var carnivoreLoader = new XMLHttpRequest();

        carnivoreLoader.addEventListener("load", function () {
          // Set the value of the private array
          var carnivoreData = JSON.parse(this.responseText);
          // console.log("data", data);
          // console.log("data.carnivores", data.carnivores);
          carnivores = carnivoreData.carnivores;
          // Invoke the callback function so that the caller knows
          // that the process is complete. Make sure to pass the 
          // carnivore array as an argument.
          callbackToInvoke(carnivores);
        });
        carnivoreLoader.open("GET", "carnivores.json");
        carnivoreLoader.send();
      // if carnivores array is already populated, don't bother with an XML request, just run the callback function
      } else {
        callbackToInvoke(carnivores);
      }
    },
    loadHerbivores: function (callbackToInvoke) {
      if (herbivores.length === 0) {
      var herbivoreLoader = new XMLHttpRequest();
      herbivoreLoader.addEventListener("load", function () {
        var herbivoreData = JSON.parse(this.responseText);
        herbivores = herbivoreData.herbivores;
        callbackToInvoke(herbivores);
      });
      herbivoreLoader.open("GET", "herbivores.json");
      herbivoreLoader.send();
      } else {
        callbackToInvoke(herbivores);
      }
    }
  }
})();







































