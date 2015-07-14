var Shop = function(local, minCust, maxCust, averagePerCust, hourStart, hourEnd) {
    this.local = local;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.averagePerCust = averagePerCust;
    this.hourStart = hourStart;
    this.hourEnd = hourEnd;
    this.hoursOpen = this.hourEnd - this.hoursOpen;
    this.hourly = [];
    this.totalDoughnuts = 0;
  };

Shop.prototype.display = function() { // You need this section to print things onto your document.
  var createTR = document.createElement('tr');
  var table = document.getElementById('doughnut_table');
  var total = 0;
  createTR.innerHTML = this.local;
  table.appendChild(createTR);

  var dough = this.doughnutsPerDay();
  for (var i = 0; i < dough.length; i++) {
    var td = document.createElement('td');
    td.innerHTML = dough[i];
    createTR.appendChild(td);
    total += dough[i];
  }
  var totalTd = document.createElement('totalTd');
  totalTd.innerHTML = total;
  createTR.appendChild(totalTd);
};

//This is here to create a "SUM" of the all radnom customer weighted by average doughnuts per cust.
  Shop.prototype.doughnutsPerDay = function(){
    var hourly = [];
    for (i = 0; i < 12; i++){
      hourly.push((Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust) * this.averagePerCust);
    }
    return hourly;
  };

  var downTown = new Shop("Downtown", 8, 43, 4.5, 7, 18);
  var capitolHill = new Shop("Capital Hill", 4, 37, 2.0, 7, 18);
  var southLakeUnion = new Shop("South Lake Union", 9, 23, 6.25, 7, 18);
  var wedgewood = new Shop("Wedgewood", 2, 28, 1.25, 7, 18);
  var ballard = new Shop("Ballard", 8, 58, 3.75, 7, 18);

downTown.display();
capitolHill.display();
southLakeUnion.display();
wedgewood.display();
ballard.display();

