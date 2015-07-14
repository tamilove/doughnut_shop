var Shop = function(local, minCust, maxCust, averagePerCust, hourStart, hourEnd) {
    this.local = local;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.averagePerCust = averagePerCust;
    this.hourStart = hourStart;
    this.hourEnd = hourEnd;
  };

Shop.prototype.display = function() { // You need this section to print things onto your document.
  var popCorn = document.createElement ('td');
  var totalHours = this.hourEnd - this.hourStart;
  popCorn.innerHTML =  ;
  return popCorn;
};


  Shop.prototype.getRandomCust = function(minCust, maxCust) {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  };
  Shop.prototype.hoursOpen = function(hourStart, hourEnd) {
    return this.hourEnd - this.hourStart;
  };

  Shop.prototype.randomDoughnuts = function(averagePerCust, getRandomCust) {
    return (this.getRandomCust() * this.averagePerCust);
  };

  Shop.prototype.doughnutsPerDay = function(){
    var total = 0;
    for (var i = 0; i < this.hoursOpen; i++);
      total += this.randomDoughbuts
  }:

  var downTown = new Shop("Downtown", 8, 43, 4.5, 7, 18);
  var capitolHill = new Shop("Capital Hill", 4, 37, 2.0, 7, 18);
  var southLakeUnion = new Shop("South Lake Union", 9, 23, 6.3, 7, 18);
  var wedgewood = new Shop("Wedgewood", 2, 28, 1.2, 7, 18);
  var ballard = new Shop("Ballard", 8, 58, 3.7, 7, 18);

  var main = document.getElementById('content');
  main.appendChild(downTown.display());



