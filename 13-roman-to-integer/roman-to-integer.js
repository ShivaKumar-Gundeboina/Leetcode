/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanMap = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000
};

let Str=s.split("")

let result=0

for(let i = 0; i < s.length; i++){
   
    if( romanMap[Str[i]]<romanMap[Str[i+1]]){
     result += romanMap[Str[i+1]] - romanMap[Str[i]];
     i++
    }else{
       result+=romanMap[Str[i]]
    }
}
return result
};