/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let IndArray=[]
    for (let i=0; i<=nums.length-1;i++){
        for(let j=i + 1;j<=nums.length-1;j++){
           if(nums[i]+nums[j]===target){
            console.log(i,j)
            IndArray.push(i,j)
           }
        }
      
    }
    // console.log(IndArray)
    return IndArray
   
};