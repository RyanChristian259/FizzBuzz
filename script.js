//Fizz Buzz - outputs numbers to console from 1 to 100.
//Numbers divisible by 3 output "Fizz", numbers divisible by 5 output "Buzz".
//Numbers divisible by 3 and 5 output "Fizz Buzz"

for (var num = 1; num <= 100; num ++){
  if (num % 3 === 0 && num % 5 === 0){
    console.log("Fizz Buzz")
  }
  else if (num % 3 === 0){
    console.log("Fizz");
  }
  else if(num % 5 === 0){
    console.log("Buzz");
  }
  else{
    console.log(num);
  }
}
