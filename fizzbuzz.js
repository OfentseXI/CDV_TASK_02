/*FizzBuzz
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions:

For numbers divisible by 3, print "Fizz" instead of the number.
For numbers divisible by 5 (and not 3), print "Buzz" instead.
For numbers divisible by both 3 and 5, print "FizzBuzz".*/

for (let n = 1; n <= 100; n++) {
        // Initialize an empty string to build the output
        let output = "";
        
        // Check if the number is divisible by 3
        if (n % 3 == 0) {
          // If true, append 'Fizz' to the output string
          output += "Fizz";
        }
        
        // Check if the number is divisible by 5
        if (n % 5 == 0) {
          // If true, append 'Buzz' to the output string
          output += "Buzz";
        }
        
        // If output is not empty, print output
        // Otherwise, print the number itself
        console.log(output || n);
      }