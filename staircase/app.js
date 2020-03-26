// Complete the staircase function below.
function staircase(n) {
  var line = Array(n + 1).fill(' ');
  // creates an array + 1 for the 0th value, fills every value with a blank string
  for (var i = n - 1; i >= 0; i--) {
    // iterate starting at end of the array. stop at the first postion. decrement by one. 
      line[i] = '#'; 
      //assign the element to be '#'
      console.log(line.join(''));
  }
}
staircase(15)

// Consider a staircase of size :

//    # console.log('#')
//   ##
//  ###
// ####
// Observe that its base and height are both equal to , and the image is drawn using # symbols and spaces. The last line is not preceded by any spaces.

// Write a program that prints a staircase of size .

// Function Description

// Complete the staircase function in the editor below. It should print a staircase as described above.

// staircase has the following parameter(s):

// n: an integer
// Input Format

// A single integer, , denoting the size of the staircase.

// Constraints

//  .

// Output Format

// Print a staircase of size  using # symbols and spaces.

// Note: The last line must have  spaces in it.

// Sample Input

// 6 
// Sample Output

//      #
//     ##
//    ###
//   ####
//  #####
// ######
// Explanation

// The staircase is right-aligned, composed of # symbols and spaces, and has a height and width of .