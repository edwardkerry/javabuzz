describe('FizzBuzz', function() {

  var fizzer = new FizzBuzz;

  it('should divide a number', function(){
    expect(fizzer.divide(10,2)).toEqual(true);
  });

  it('should know if a number is disivible by 3', function(){
    expect(fizzer.divide3(3)).toEqual(true);
    expect(fizzer.divide3(5)).toEqual(false);
  });

  it('should know if a number is divisible by 5', function(){
    expect(fizzer.divide5(5)).toEqual(true);
  });

  it('should know if a number is divisible by 15', function(){
    expect(fizzer.divide15(15)).toEqual(true);
  });

  it('should return fizz if number % 3 = 0', function(){
    expect(fizzer.play(3)).toEqual('fizz');
  });

  it('should return buzz if number % 5 = 0', function(){
    expect(fizzer.play(5)).toEqual('buzz');
  });

  it('should return fizzbuzz if number % 15 = 0', function(){
    expect(fizzer.play(15)).toEqual('fizzbuzz');
  });

  it('should return the number if not ^^', function(){
    expect(fizzer.play(7)).toEqual(7);
  })
});
