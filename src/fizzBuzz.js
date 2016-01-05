function FizzBuzz() {
}

FizzBuzz.prototype.divide = function(num, divider){
  return num % divider === 0;
};

FizzBuzz.prototype.divide3 = function(num){
  return this.divide(num, 3);
};

FizzBuzz.prototype.divide5 = function(num){
  return this.divide(num, 5);
};

FizzBuzz.prototype.divide15 = function(num){
  return this.divide(num, 15);
};

FizzBuzz.prototype.play = function(num) {
  if(this.divide(num, 15)) {return 'fizzbuzz'};
  if(this.divide(num, 3)) {return 'fizz'};
  if(this.divide(num, 5)) {return 'buzz'};
  return num;
};
