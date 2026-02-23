/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = x.toString(); 
    let String_Revers= str.split("").reverse().join(""); 
   
   if(str===String_Revers){
    return true
   }else{
    return false
   }
  
};