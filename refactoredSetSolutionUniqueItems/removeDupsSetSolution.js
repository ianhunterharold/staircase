/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {

  // solve as a human dev
  // lets use a set to solve this challenge 
  // if not in set, add to set 
  // check if already in set, do nothing 
  // return the size of the set with .size

  const uniqueItems = new Set();

  const mapThroughNums = nums.map(item => {
    if (!uniqueItems.has(item)){
      let addToSet = uniqueItems.add(item)
    }
  }) 
  return uniqueItems.size;
};

const arr1 =
[0,0,1,1,1,2,2,3,3,4];

removeDuplicates(arr1)