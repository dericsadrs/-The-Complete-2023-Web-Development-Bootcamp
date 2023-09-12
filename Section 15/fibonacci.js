function generateFibonacciSeries(n) {
    var fibonacciSeries = [];
  
    if (n >= 1) {
      fibonacciSeries.push(0);
    }
    if (n >= 2) {
      fibonacciSeries.push(1);
    }
  
    for (var i = 2; i < n; i++) {
      var nextFibonacci = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
      fibonacciSeries.push(nextFibonacci);
    }
  
    return fibonacciSeries;
  }
  
  var n = 10; // Change this to the number of Fibonacci numbers you want
  var fibonacciSeries = generateFibonacciSeries(n);
  console.log(fibonacciSeries);
  